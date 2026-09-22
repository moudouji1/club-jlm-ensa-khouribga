from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import parse_qs, urlparse
import re
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parents[1]
ORIGIN = "https://ensakh.jlm.ma"
PUBLIC_PAGES = [
    "",
    "a-propos.html",
    "projets.html",
    "actions.html",
    "formations.html",
    "bureau.html",
    "galerie.html",
    "trophees.html",
    "contact.html",
]


class HeadParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.title = ""
        self._in_title = False
        self.meta: dict[str, str] = {}
        self.canonical = ""

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        if tag == "title":
            self._in_title = True
        elif tag == "meta":
            key = values.get("name") or values.get("property")
            if key and values.get("content"):
                self.meta[key] = values["content"] or ""
        elif tag == "link" and values.get("rel") == "canonical":
            self.canonical = values.get("href") or ""

    def handle_endtag(self, tag: str) -> None:
        if tag == "title":
            self._in_title = False

    def handle_data(self, data: str) -> None:
        if self._in_title:
            self.title += data


def ids_between(source: str, start: str, end: str) -> list[str]:
    section = source.split(start, 1)[1].split(end, 1)[0]
    return re.findall(r'"id"\s*:\s*"([^"]+)"', section)


errors: list[str] = []
data = (ROOT / "js" / "data.js").read_text(encoding="utf-8")
project_ids = ids_between(data, "const PROJECTS = [", "const ACTIONS = [")
action_ids = ids_between(data, "const ACTIONS = [", "const TEAM = [")

sitemap = ET.parse(ROOT / "sitemap.xml")
namespace = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
locations = [node.text or "" for node in sitemap.findall("s:url/s:loc", namespace)]

expected = [f"{ORIGIN}/{page}" for page in PUBLIC_PAGES]
expected += [f"{ORIGIN}/projet.html?id={item_id}" for item_id in project_ids]
expected += [f"{ORIGIN}/action.html?id={item_id}" for item_id in action_ids]

if len(locations) != len(set(locations)):
    errors.append("sitemap.xml contains duplicate URLs")
if set(locations) != set(expected):
    missing = sorted(set(expected) - set(locations))
    extra = sorted(set(locations) - set(expected))
    if missing:
        errors.append(f"sitemap.xml is missing: {', '.join(missing)}")
    if extra:
        errors.append(f"sitemap.xml has unexpected URLs: {', '.join(extra)}")

for location in locations:
    parsed = urlparse(location)
    if f"{parsed.scheme}://{parsed.netloc}" != ORIGIN:
        errors.append(f"non-production sitemap URL: {location}")
    filename = parsed.path.lstrip("/") or "index.html"
    if not (ROOT / filename).is_file():
        errors.append(f"sitemap URL has no local page: {location}")
    if parsed.path.endswith("projet.html") and parse_qs(parsed.query).get("id", [""])[0] not in project_ids:
        errors.append(f"unknown project sitemap URL: {location}")
    if parsed.path.endswith("action.html") and parse_qs(parsed.query).get("id", [""])[0] not in action_ids:
        errors.append(f"unknown action sitemap URL: {location}")

robots = (ROOT / "robots.txt").read_text(encoding="utf-8")
if "User-agent: *" not in robots or "Allow: /" not in robots:
    errors.append("robots.txt does not allow normal crawlers")
if f"Sitemap: {ORIGIN}/sitemap.xml" not in robots:
    errors.append("robots.txt does not reference the production sitemap")

for page in PUBLIC_PAGES:
    filename = page or "index.html"
    parser = HeadParser()
    parser.feed((ROOT / filename).read_text(encoding="utf-8"))
    expected_canonical = f"{ORIGIN}/{page}"
    if not parser.title.strip():
        errors.append(f"{filename} has no title")
    if not parser.meta.get("description"):
        errors.append(f"{filename} has no meta description")
    if parser.meta.get("robots") != "index,follow":
        errors.append(f"{filename} is not explicitly indexable")
    if parser.canonical != expected_canonical:
        errors.append(f"{filename} canonical should be {expected_canonical}")
    if parser.meta.get("og:url") != expected_canonical:
        errors.append(f"{filename} og:url should be {expected_canonical}")

all_source = "\n".join(
    path.read_text(encoding="utf-8")
    for path in [*ROOT.glob("*.html"), ROOT / "js" / "app.js", ROOT / "sitemap.xml", ROOT / "robots.txt"]
)
if ".vercel.app" in all_source or "localhost" in all_source:
    errors.append("SEO source contains a non-production host")

if errors:
    raise SystemExit("SEO validation failed:\n- " + "\n- ".join(errors))

print(
    f"SEO validation passed: {len(locations)} sitemap URLs, "
    f"{len(project_ids)} projects, {len(action_ids)} actions."
)

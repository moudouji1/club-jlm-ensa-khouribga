from pathlib import Path
import re
import sys


root = Path.cwd()
source_files = list(root.glob("*.html"))
source_files.extend((root / "css").rglob("*.css"))
source_files.extend((root / "js").rglob("*.js"))

asset_pattern = re.compile(r'''["']((?:\.\./)?assets/[^"']+)["']''')
missing: set[str] = set()

for source_file in source_files:
    content = source_file.read_text(encoding="utf-8")
    for raw_path in asset_pattern.findall(content):
        asset_path = re.split(r"[?#]", raw_path, maxsplit=1)[0]
        if "${" in asset_path or "<" in asset_path:
            continue
        candidate = (
            (source_file.parent / asset_path).resolve()
            if asset_path.startswith("../")
            else (root / asset_path).resolve()
        )
        if not candidate.exists():
            missing.add(f"{source_file.relative_to(root)}: {asset_path}")

if missing:
    print(f"Missing literal asset references: {len(missing)}", file=sys.stderr)
    for item in sorted(missing):
        print(f"- {item}", file=sys.stderr)
    raise SystemExit(1)

print(f"Validated literal asset references across {len(source_files)} source files.")

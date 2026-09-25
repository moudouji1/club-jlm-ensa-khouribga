param(
    [Parameter(Mandatory = $true)]
    [string]$AssetsPath
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$resolvedAssets = (Resolve-Path -LiteralPath $AssetsPath).Path
$files = Get-ChildItem -LiteralPath $resolvedAssets -Recurse -File |
    Where-Object { $_.Extension.ToLowerInvariant() -in @('.jpg', '.jpeg', '.png') }

$before = ($files | Measure-Object -Property Length -Sum).Sum
$changed = 0

foreach ($file in $files) {
    $relative = $file.FullName.Substring($resolvedAssets.Length + 1)
    $extension = $file.Extension.ToLowerInvariant()

    if ($relative -like 'album\*') {
        $maxDimension = 1920
    }
    elseif ($relative -like 'icon-pack\*' -or $relative -like 'icon-pack-archive\*') {
        $maxDimension = 640
    }
    else {
        $maxDimension = 1600
    }

    $source = [System.Drawing.Image]::FromFile($file.FullName)
    try {
        if ($source.PropertyIdList -contains 274) {
            $orientation = [BitConverter]::ToUInt16($source.GetPropertyItem(274).Value, 0)
            $rotateFlip = switch ($orientation) {
                2 { [System.Drawing.RotateFlipType]::RotateNoneFlipX }
                3 { [System.Drawing.RotateFlipType]::Rotate180FlipNone }
                4 { [System.Drawing.RotateFlipType]::Rotate180FlipX }
                5 { [System.Drawing.RotateFlipType]::Rotate90FlipX }
                6 { [System.Drawing.RotateFlipType]::Rotate90FlipNone }
                7 { [System.Drawing.RotateFlipType]::Rotate270FlipX }
                8 { [System.Drawing.RotateFlipType]::Rotate270FlipNone }
                default { [System.Drawing.RotateFlipType]::RotateNoneFlipNone }
            }
            $source.RotateFlip($rotateFlip)
        }

        $scale = [Math]::Min(1.0, $maxDimension / [double][Math]::Max($source.Width, $source.Height))
        $width = [Math]::Max(1, [int][Math]::Round($source.Width * $scale))
        $height = [Math]::Max(1, [int][Math]::Round($source.Height * $scale))

        $bitmap = New-Object System.Drawing.Bitmap($width, $height)
        try {
            $bitmap.SetResolution(72, 72)
            $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
            try {
                $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
                $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
                $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
                $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
                $graphics.DrawImage($source, 0, 0, $width, $height)
            }
            finally {
                $graphics.Dispose()
            }

            $temporary = "$($file.FullName).optimized"
            if ($extension -eq '.png') {
                $bitmap.Save($temporary, [System.Drawing.Imaging.ImageFormat]::Png)
            }
            else {
                $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
                    Where-Object { $_.MimeType -eq 'image/jpeg' }
                $parameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
                $parameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
                    [System.Drawing.Imaging.Encoder]::Quality,
                    [long]78
                )
                try {
                    $bitmap.Save($temporary, $codec, $parameters)
                }
                finally {
                    $parameters.Dispose()
                }
            }
        }
        finally {
            $bitmap.Dispose()
        }
    }
    finally {
        $source.Dispose()
    }

    $optimized = Get-Item -LiteralPath $temporary
    if ($optimized.Length -lt $file.Length) {
        Move-Item -LiteralPath $temporary -Destination $file.FullName -Force
        $changed++
    }
    else {
        Remove-Item -LiteralPath $temporary -Force
    }
}

$afterFiles = Get-ChildItem -LiteralPath $resolvedAssets -Recurse -File |
    Where-Object { $_.Extension.ToLowerInvariant() -in @('.jpg', '.jpeg', '.png') }
$after = ($afterFiles | Measure-Object -Property Length -Sum).Sum

[pscustomobject]@{
    FilesScanned = $files.Count
    FilesChanged = $changed
    BeforeMB = [Math]::Round($before / 1MB, 2)
    AfterMB = [Math]::Round($after / 1MB, 2)
    SavedMB = [Math]::Round(($before - $after) / 1MB, 2)
}

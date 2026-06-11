# Specify the root folder path here
$targetFolder = "C:\Users\Ethan\Desktop\That One Folder On My Desktop\Software Development\EthanTrebish-Portfolio\src\assets\images"

# Verify the path exists before running
if (Test-Path $targetFolder) {
    # Get all .png files recursively in all subfolders
    # We use a Where-Object filter to isolate exactly uppercase '.png'
    Get-ChildItem -Path $targetFolder -Filter "*.png" -Recurse -File | 
        Where-Object { $_.Extension -clike ".png" } | 
        ForEach-Object {
            # Construct the new path with the lowercase extension
            $newFilename = $_.BaseName + ".png"
            
            Write-Host "Renaming: $($_.FullName) -> $newFilename" -ForegroundColor Cyan
            
            # Using -LiteralPath to safely handle spaces or special characters like [ or ] in names
            Rename-Item -LiteralPath $_.FullName -NewName $newFilename -Force
        }
    
    Write-Host "Finished updating PNG extensions!" -ForegroundColor Green
} else {
    Write-Host "Error: The folder path '$targetFolder' does not exist." -ForegroundColor Red
}
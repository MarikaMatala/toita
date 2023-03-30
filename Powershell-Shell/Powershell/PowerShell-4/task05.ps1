$Folder = 'C:\Windows'
"Test to see if folder [$Folder]  exists"
if (Test-Path -Path $Folder) {
    "Path exists!"
} else {
    "Path doesn't exist."
}
Add-Content -Path .\filename.txt
notepad .\filename.txt
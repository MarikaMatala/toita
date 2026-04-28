param ( 

[string]$folder = ' ', 

[string]$file= ' ', 

[int]$number = " ") 


$test = Test-Path $folder 


if ($test -eq "True"){ 

Write-Host "Folder exists!" 

} 


else { 

Write-Host("Folder does not exist") 

Write-Host("Do you want create ", $folder, "?") 

$yesorno2 = Read-Host("[Yes/No]") 

if ($yesorno2 -eq "Yes") 

{New-Item -Path $folder -ItemType Directory 

$filepath = Join-Path -Path $folder -ChildPath $file 

for ($i = 0; $i -lt $number; $i++) { 

$a = [string]$i 

$newfile = $a + $file  

$newpath = $folder + $newfile 

New-Item -Path $newpath -ItemType File 

}  

Write-Host $number "new files created." 

$files = Get-ChildItem -Path $folder 

Write-Host $files 

} 

} 
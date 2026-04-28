param ( 

[string]$folder = ' ', 

[string]$file= ' ') 


$test = Test-Path $folder 


if ($test -eq "True"){ 

$filepath = Join-Path -Path $folder -ChildPath $file 

$test2 = Test-Path $filepath 

if ($test2 -eq "True"){ 

Write-Host "File exists!"} 

else { 

Write-Host("File does not exist") 

Write-Host("Do you want create ", $file, "?") 

$yesorno = Read-Host("[Yes/No]") 

if ($yesorno -eq "Yes" ) 

{New-Item -Path $filepath -ItemType File} 

}} 

else { 

Write-Host("Folder does not exist") 

} 
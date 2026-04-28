param (  

 
 

[string]$folder = ' ')  

 
 

$test = Test-Path $folder  

 
 
 

if ($test -eq "True") 

    {$files = Get-ChildItem -Path $folder 

    $count = $files.Count 

    Write-Host "There are ", $count ,"folders in", $folder, "folder" 

    $files | Format-Table Name 

    } 

else { 

 
 

Write-Host("Sorry",, $folder, "does not exist ")  

} 
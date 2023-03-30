 $test1, $test2, $third = "test1.txt", "test2.txt", "third.txt", " "
$test1= Read-Host "Give a file name, press Enter to quit"

$work2 = Read-Host "Give a file name, press Enter to quit"

$work3 = Read-Host "Give a workstation name, press Enter to quit"

$mydate=get-date
$mydate
Add-Content -Path .\third.txt
notepad .\third.txt
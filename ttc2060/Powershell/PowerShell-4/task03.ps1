$work1, $work2, $work3 = "WS01", "WS02", "WS03", " "
$work1= Read-Host "Give a workstation name, press Enter to quit"
Give a workstation name, press Enter to quit: WS01
 $work2 = Read-Host "Give a workstation name, press Enter to quit"
Give a workstation name, press Enter to quit: WS02
$work3 = Read-Host "Give a workstation name, press Enter to quit"
Give a workstation name, press Enter to quit: ws03
$work1
WS01
$work2
WS02
$work3
ws03
Add-Content -Path .\filename.txt

cmdlet Add-Content at command pipeline position 1
Supply values for the following parameters:
Value[0]: 3
Value[1]:
notepad .\filename.txt
 Add-Content -Path .\filename.txt

cmdlet Add-Content at command pipeline position 1
Supply values for the following parameters:
Value[0]: WS01
Value[1]: WS02
Value[2]: WS03
Value[3]:
notepad .\filename.txt
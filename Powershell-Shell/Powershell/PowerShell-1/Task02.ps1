PS C:\Users\Marika> $fname, $lname, $text = "Marika", "Matalamäki", " TTV20S3"

PS C:\Users\Marika> $fname = Read-Host "Please, enter your firstname"
Please, enter your firstname: Marika

PS C:\Users\Marika> $lname = Read-Host "Please, enter your lastname"
Please, enter your lastname: Matalamäki


PS C:\Users\Marika> $lname
Matalamäki

PS C:\Users\Marika> $text = Read-Host "Please, enter your groupcode"
Please, enter your groupcode: TTV20S3

PS C:\Users\Marika> $text
TTV20S3

PS C:\Users\Marika> Write-Host ("Welcome to course:", $fname, $lname, $text)
Welcome to course: Marika Matalamäki TTV20S3

PS C:\Users\Marika> 
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Try the new cross-platform PowerShell https://aka.ms/pscore6

PS C:\Users\Marika> $names = 'Jackie Russell'
PS C:\Users\Marika> foreach ($name in $names) {
>> $hello = 'Hello ' + $name
>>   $hello
>> }
Hello Jackie Russell
PS C:\Users\Marika>
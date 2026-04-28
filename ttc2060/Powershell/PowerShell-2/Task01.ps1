Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Try the new cross-platform PowerShell https://aka.ms/pscore6

PS C:\Users\Marika> (Get-ChildItem | Measure-Object).Count
35
PS C:\Users\Marika> ((Get-ChildItem | Measure-Object).Count, "files found at C:\Users\Marika")
35
files found at C:\Users\Marika
PS C:\Users\Marika>

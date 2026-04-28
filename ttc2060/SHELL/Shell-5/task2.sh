#!/bin/bash

IFS=','
count=${#var1[@]}
line=0

while read -r Manufacturer Model Year Color
do
if [ $line -ne 0 ]
then
    echo
    echo "auto numero ${line}"
    echo
    echo "Manufacturer: ${Manufacturer}"
    echo "Model: ${Model}"
    echo "Color: ${Color}"
    echo "Year: ${Year}"
    line=$ ((line+1))
else
    line=$((line+1))
fi
done < $1

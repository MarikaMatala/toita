value=()
counter=1

while [ $counter -eq "1"]
do
    read -p "Anna joku numero tai Exitlopettaaksesi: "numero
    if [ ${numero} = "Exit" ]
    then
        counter="0"
    else
    value+=("${numero}")
    fi
done
for lista in "${value[@]}"
do
    echo "$lista"
done
            
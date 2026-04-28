value=()
counter=1

while [ $counter -eq "1"]
do
        read -p "Kirjoita haluamasi arvo, exit lopettaa: " arvo
        touch animal.txt
        if [ $(arvo) = "exit" ]
        then
                counter="0" && cat animal.txt
else
        echo $arvo >> animal.txt
fi
done

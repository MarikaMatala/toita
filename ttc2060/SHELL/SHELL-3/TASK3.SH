#!/BIN/SH

count_objects(){
coununt=$ (ls $folderpath |wc -l)
echo @There are "$count "objects in a $folderpath"

}

read -p @Give a folderpath: " folderpath

count_objects

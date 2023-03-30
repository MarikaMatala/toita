date +"%FORMAT_STRING"
date +"%m_%d_%Y"
date +"%Y-%m-%d"
var=$(date +"%FORMAT_STRING")
now=$(date +"%m_%d_%Y")
printf "%s\n" $now
today=$(date +"%Y-%m-%d")
printf "Today is:"
var=`date +"%FORMAT_STRING"`
now=`date +"%m_%d_%Y"`
now=`date +"%Y-%m-%d"`
echo "${now}"
echo "Coping data to /tmp/filename-${now} ..."

#/bin/bash
now=$(date +"%m_%d_%Y")
echo "Filename : /nas/backup_$now.sql"

#!/bin/bash
#
# Backup mysql/mariadb database
 
## Get current date ##
_now=$(date +"%m_%d_%Y")
 
## Appending a current date from a $_now to a filename stored in $_file ##
_file="/nas/backup_$_now.sql"
 
## Do it ##
echo "Starting backup to $_file..."
mysqldump -u admin -p'myPasswordHere'  myDbNameHere > "$_file"
 
## Add more stuff below ##

man date
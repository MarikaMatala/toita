#!/bin/bash
set -x
read -p "Anna kansion polku" kansio
mk_folder () {
        mkdir $kansio
}
download_image () {
        curl student.labranet.jamk.fi/~pekju/script/tux.png > $kansio/linux-tux.png
}
chance_perm () {
        chmod 700 -R $kansio
}
mk_folder
download_image
change_perm
set +x

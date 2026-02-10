#!/bin/env bash
cd "$(dirname "$0")"

options=("MS-DOS 2.11")
imgfiles=("ms-dos-211.img")
diskfiles=("ms-dos-211.disk")

echo "Choose your version:"

num=-1
select opt in "${options[@]}"
do
	for ((i=0; i<${#options[@]}; i++)); do
		if [[ ${options[$i]} == $opt ]]; then
			num=$i
		fi
	done
	if [[ $num -gt "-1" ]]; then
		break
	else
		echo "Invalid option!"
	fi
done

echo "Booting ${opt}..."

qemu-system-i386 -hda "${diskfiles[$num]}" -m 64 -L . -fda "${imgfiles[$num]}" -boot a

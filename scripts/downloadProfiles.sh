#!/bin/bash
set -e

script_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
venv="$script_dir/../python/gdown_venv"
profile_folder="$script_dir/../public/members"
drive_folder="https://drive.google.com/drive/folders/1eBPjmsgQiI7bEOc7HHtliKtORlfrWOU7?usp=drive_link"

if command -v python3 &> /dev/null; then
  python3 -m venv $venv
elif command -v python &> /dev/null; then
  python -m venv $venv
else
  echo "python could not be found! Please install :("
  exit 1
fi

source $venv/bin/activate

if ! pip show gdown >/dev/null 2>&1; then
  pip install gdown
fi

if [ -d "$profile_folder" ]; then
  rm -r $profile_folder
fi
gdown $drive_folder -O $profile_folder --folder


# convert the images to smaller resolution webp
# thank you acm cyber
for image in $profile_folder/*.{jpg,jpeg,png,webp}; do
  if [ -f "$image" ]; then
    filename=$(basename -- "$image")
    extension="${filename##*.}"
    filename_no_ext="${filename%.*}"
    out=$profile_folder/$filename_no_ext.webp

    convert "$image" -resize '400x400^'  -gravity center -crop 400x400+0+0 +repage "$out"
    if [ "$extension" != "webp" ]; then
        rm "$image"
    fi
    echo "$filename"
  fi
done

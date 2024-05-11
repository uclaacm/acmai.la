#!/bin/bash
set -e

script_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
venv="$script_dir/../python/assets_venv"
data_folder="$script_dir/../public/members"
drive_folder="https://drive.google.com/drive/folders/1eBPjmsgQiI7bEOc7HHtliKtORlfrWOU7?usp=drive_link"

meta_data="$data_folder/image_meta_data"

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

if [ -d "$data_folder" ]; then
  rm -r $data_folder
fi
gdown $drive_folder -O $data_folder --folder


# convert the images to smaller resolution webp
# thank you acm cyber
for image in $data_folder/*.{jpg,jpeg,png,webp}; do
  if [ -f "$image" ]; then
    filename=$(basename -- "$image")
    extension="${filename##*.}"
    filename_no_ext="${filename%.*}"
    out=$data_folder/$filename_no_ext.webp

    convert "$image" -resize '400x400^'  -gravity center -crop 400x400+0+0 +repage "$out"
    if [ "$extension" != "webp" ]; then
        rm "$image"
    fi
    echo "$filename"
  fi
done

if ! pip show pandas >/dev/null 2>&1; then
  pip install pandas
fi
if ! pip show openpyxl >/dev/null 2>&1; then
  pip install openpyxl
fi

if command -v python3 &> /dev/null; then
  python3 $script_dir/../python/xlsx_to_json.py $meta_data $meta_data.json
else
  python $script_dir/../python/xlsx_to_json.py $meta_data $meta_data.json
fi

rm $meta_data
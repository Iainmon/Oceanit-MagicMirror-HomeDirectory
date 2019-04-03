#!/usr/bin/env bash

# Created by Iain Moncrief on Wednesday, April 3rd, 2019
# Iain Moncrief <iainmoncrief@gmail.com>

rm MagicMirror.tar.gz || echo "Already clean. OK! Proceeding..."
curl -O https://raw.githubusercontent.com/oceanit-magicmirror-unofficial/Oceanit-MagicMirror-HomeDirectory/master/Desktop/.imessedup/backup/MagicMirror.tar.gz
rm Desktop/.imessedup/backup/MagicMirror.tar.gz || echo "Backup file already deleted. OK!"
mv MagicMirror.tar.gz Desktop/.imessedup/backup/MagicMirror.tar.gz && echo "Good to go! Backup archive has been updated."

echo "Unpacking archive..."
cd Desktop/.imessedup/backup && tar -xvzf MagicMirror.tar.gz
echo "All done"

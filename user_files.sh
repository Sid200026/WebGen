#!/bin/bash

BASE_DIRECTORY='frontend/src/initialState/'
USER_INTRODUCTION='user.introduction_initial.js'
USER_ABOUT_ME='user.about_me_initial.js'

FILE_CONTENT="""const state = {};
export default state;"""

declare -a USER_FILES=("$USER_INTRODUCTION" "$USER_ABOUT_ME")

function createFile() {
    FILE_PATH=$1
    echo "$FILE_CONTENT" >> $FILE_PATH
}

for filename in "${USER_FILES[@]}"; do
    FILE_PATH=$BASE_DIRECTORY$filename
    if [ ! -f $FILE_PATH ]; then
        echo "File $filename does not exist"
        createFile $FILE_PATH
    else
        echo "File $filename exists"
    fi
done

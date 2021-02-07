#!/usr/bin/env bash

BASE_DIRECTORY='frontend/initialState/'
USER_INTRODUCTION='user.introduction_initial.js'
USER_ABOUT_ME='user.about_me_initial.js'
USER_WORK_EXPERIENCE='user.work_experience_initial.js'
USER_PROJECT='user.project_initial.js'
USER_ACHIEVEMENT='user.achievement_initial.js'

FILE_CONTENT="""const state = {};
export default state;"""

if [ ! -z "${DEPLOYMENT_GROUP_ID}" ]; then
    cd /home/ubuntu/WebGen
fi

CURRENT_DIR="${PWD##*/}"

echo $CURRENT_DIR

if [ $CURRENT_DIR = "scripts" ]; then
    echo "Executing from scripts directory"
    cd ..
    cd $BASE_DIRECTORY
else
    echo "Executing from root directory"
    cd $BASE_DIRECTORY
fi

declare -a USER_FILES=("$USER_INTRODUCTION" "$USER_ABOUT_ME" "$USER_WORK_EXPERIENCE" "$USER_PROJECT" "$USER_ACHIEVEMENT")

for filename in "${USER_FILES[@]}"; do
    FILE_PATH=$filename
    if [ ! -f $FILE_PATH ]; then
        echo "File $filename does not exist"
        echo "$FILE_CONTENT" >>$FILE_PATH
    else
        echo "File $filename exists"
    fi
done

#!/usr/bin/env bash
HOME_DIRECTORY="."
if [ ! -z "${DEPLOYMENT_GROUP_ID}" ]; then
    HOME_DIRECTORY="/home/ubuntu/WebGen"
    cd /home/ubuntu/WebGen
fi
INIT_DIR="${HOME_DIRECTORY}/backend/public/images/assets"
FIN_DIR="${HOME_DIRECTORY}/backend/user/public"
UPLOAD_DIR="${HOME_DIRECTORY}/backend/upload"
if [ ! -d "$UPLOAD_DIR" ]; then
    mkdir "$UPLOAD_DIR"
fi
if [ ! -d "$FIN_DIR" ]; then
    mkdir -p "$FIN_DIR" && cp -R "$INIT_DIR" "$FIN_DIR"
fi

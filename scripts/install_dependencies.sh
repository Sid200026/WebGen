#!/usr/bin/env bash

cd /home/ubuntu/WebGen
npm install
INIT_DIR="/home/ubuntu/WebGen/backend/public/images/assets"
FIN_DIR="/home/ubuntu/WebGen/backend/user/public"
if [ ! -d "$FIN_DIR" ]; then
    mkdir -p "$FIN_DIR" && cp -R "$INIT_DIR" "$FIN_DIR"
fi

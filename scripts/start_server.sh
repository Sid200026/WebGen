#!/usr/bin/env bash

cd /home/ubuntu/WebGen
npm run build
pm2 restart npm
sudo systemctl start nginx
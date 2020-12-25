#!/usr/bin/env bash

cd /home/ubuntu/WebGen
npm run build
pm2 restart npm --update-env
sudo systemctl start nginx
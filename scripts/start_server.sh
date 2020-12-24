#!/usr/bin/env bash

cd /home/ubuntu/WebGen
npm run build
pm2 restart npm -- run prod --
sudo systemctl start nginx
#!/usr/bin/env bash

cd /home/ubuntu/WebGen
npm run build
pm2 start npm -- run prod --
sudo systemctl start nginx
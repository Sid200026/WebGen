#!/usr/bin/env bash

cd /home/ubuntu/WebGen
npm run build
sudo pm2 start npm -- run prod --
sudo systemctl start nginx
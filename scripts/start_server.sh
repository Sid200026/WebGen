#!/bin/bash

cd /home/ubuntu/WebGen
sudo npm run build
sudo pm2 start npm -- run prod --
sudo systemctl start nginx
#!/bin/bash

sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_current.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install pm2 -g
cd /home/ubuntu/WebGen
sudo rm -rf node_modules package-lock.json

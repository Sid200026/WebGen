#!/bin/bash

nvm install node
npm install pm2 -g
cd /home/ubuntu/WebGen
sudo rm -rf node_modules package-lock.json

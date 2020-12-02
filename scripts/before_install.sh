#!/bin/bash

sudo apt install nodejs -y
sudo apt install npm -y
sudo npm install pm2 -g
cd /home/ubuntu/WebGen
sudo rm -rf node_modules package-lock.json

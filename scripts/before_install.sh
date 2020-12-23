#!/usr/bin/env bash

sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install pm2 -g
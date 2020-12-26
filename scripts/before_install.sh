#!/usr/bin/env bash

apt-get install curl
curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
apt-get install -y nodejs
npm install pm2 -g
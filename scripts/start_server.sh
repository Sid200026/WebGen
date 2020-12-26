#!/usr/bin/env bash

cd /home/ubuntu/WebGen
npm run build
pm2 start ecosystem.config.js
systemctl start nginx
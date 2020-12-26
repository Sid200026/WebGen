#!/usr/bin/env bash

pm2 delete ecosystem.config.js
systemctl stop nginx
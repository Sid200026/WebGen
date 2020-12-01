#!/bin/bash

npm run build
pm2 start npm -- run prod --
sudo systemctl start nginx
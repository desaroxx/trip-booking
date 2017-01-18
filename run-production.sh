a#!/bin/bash

git checkout master
git pull

rm -rf ./node_modules
npm cache clean

npm install
npm run build
cp -a ./static/. ./client-dist

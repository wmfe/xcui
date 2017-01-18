#!/bin/bash

if [ "$WMFE_ROBOT_TOKEN" = "" ]; then
  echo "You are nothing!"
  exit 0
fi
git config --global user.name "WMFE-Robot"
git config --global user.email "wmferobot@163.com"

# Build dist 1.0
git add dist
STATUS=`git status | grep nothing`
if [ -z "$STATUS" ]
then
    DATE_DIST=`date`
    git commit -m "Build dist at $DATE_DIST by circleci[skip ci]" # [skip ci] is neccessary: https://circleci.com/docs/skip-a-build/
    git push https://$WMFE_ROBOT_TOKEN@github.com/wmfe/xcui.git 1.0
else
    echo 'nothing to commit'
fi

#build vue1.0 site
GitAddSite1_0 () {
    git clone -b gh-pages https://$WMFE_ROBOT_TOKEN@github.com/wmfe/xcui.git gh-pages
    cd gh-pages
    git rm -rf ./static
    git rm ./index.html
    cp ../src/index.html ./index.html
    cp ../build/empty_circle.yml ./circle.yml
    sed -i '15i\    <script type="text/javascript" src="./static/app.js"></script>' ./index.html
    mkdir static
    cp -r ../src/assets/* ./static/
    git add ./index.html
    git add ./static
}

GitAddSite1_0
STATUS2=`git status | grep nothing`
if [ -z "$STATUS2" ]
then
    DATE_SITE=`date`
    git commit -m "Site Updated at $DATE_SITE [skip ci]"
    git push https://$WMFE_ROBOT_TOKEN@github.com/wmfe/xcui.git gh-pages
else
    echo 'nothing to commit of site'
fi
cd ..
rm -rf gh-pages

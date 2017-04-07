#!/bin/bash

if [ "$WMFE_ROBOT_TOKEN" = "" ]; then
  echo "You are nothing!"
  exit 0
fi
git config --global user.name "WMFE-Robot"
git config --global user.email "wmferobot@163.com"

# Build dist 2.0
git add dist
STATUS=`git status | grep nothing`
if [ -z "$STATUS" ]
then
    DATE_DIST=`date`
    git commit -m "Build dist2.0 at $DATE_DIST by circleci[skip ci]" # [skip ci] is neccessary: https://circleci.com/docs/skip-a-build/
    git push https://$WMFE_ROBOT_TOKEN@github.com/wmfe/xcui.git 2.0
else
    echo 'nothing to commit'
fi

#build vue2.0 site
GitAddSite2_0 () {
    git clone -b gh-pages https://$WMFE_ROBOT_TOKEN@github.com/wmfe/xcui.git gh-pages
    cd gh-pages
    if [ ! -f "../site/app.js" ]; then
        exit 1
    else
        cp -r ../site/* ./
    fi
    git add --all
}

GitAddSite2_0
STATUS2=`git status | grep nothing`
if [ -z "$STATUS2" ]
then
    DATE_SITE=`date`
    git commit -m "Site2.0 Updated at $DATE_SITE [skip ci]"
    git push https://$WMFE_ROBOT_TOKEN@github.com/wmfe/xcui.git gh-pages
else
    echo 'nothing to commit of site2.0'
fi
cd ..
rm -rf gh-pages

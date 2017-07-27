#!/bin/bash

if [ "$WMFE_ROBOT_TOKEN" = "" ]; then
  echo "You are nothing!"
  exit 0
fi
git config --global user.name "WMFE-Robot"
git config --global user.email "wmferobot@163.com"

#build vue2.0 site
GitAddSite2_0 () {
    git clone -b gh-pages https://$WMFE_ROBOT_TOKEN@github.com/wmfe/xcui.git gh-pages
    cd gh-pages
    rm -rf *
    if [ ! -f "../site/index.html" ]; then
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

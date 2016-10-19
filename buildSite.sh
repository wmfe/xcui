echo "Start building site..."
git checkout master
webpack --config build/webpack.base.conf.js
cp src/index.html ./site
sed -i '15i\    <script type="text/javascript" src="./static/app.js"></script>' ./site/index.html
cp -r src/assets/* ./site/static
echo "Site build done..."


npm run build

cd dist

git init
git add -A
git commit -m 'New deployment'
git push -f git@github.com:f94f/ParoleInLinguaItaliana.git main:gh-pages

cd -
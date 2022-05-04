#井佣保脚本抛出遇到的销庆
set -e

#生成静态文件

npm run docs:build

# 进入生成的文 件夹

cd docs/.vuepress/dist

#如果是发布到自定义域名
# echo ' WWW. example. com' > CNAME

git init
git add -A
git commit -m 'docs: build doc'
#如果发布到https: //<USERNAME>. github.10
# git push -f git@github.com:wjwyyds/wjwyyds.github.io.git master
#如果发布到https:/ /<USERNAME> . github . io/ <REPO>
git push -f git@github.com:jixuanyu821/flash-ui.git master:gh-pages

cd -

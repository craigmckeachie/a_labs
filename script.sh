#!/bin/bash

# create a14_labs
# cp -r ~/Documents/git/a14/a_labs/lab01/* ~/Documents/git/a14/a14_labs/
# rsync -avhu --progress ~/Documents/git/a14/a_labs/lab07/ ~/Documents/git/a14/a14_labs/
# cd ~/Documents/git/a14/a14_labs/
# git checkout -b lab07
# git add .
# git commit -m "lab07"
# git push --set-upstream origin lab07

# git checkout main
# cd ~/Documents/git/a14/a_labs/


cp -r ~/Documents/git/a14/a_labs/lab07/* ~/Documents/git/a14/a14_labs/
rsync -a --progress --verbose ~/Documents/git/a14/a_labs/${b}/ ~/Documents/git/a14/a14_labs/
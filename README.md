## Setup
git init
echo node_modules > .gitignore
git add .
git commit -m "Initial commit"
heroku create
git push heroku master
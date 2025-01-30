@echo off
REM Set up variables for the local folder and remote repository
set REPO_DIR=C:\Users\YourName\YourRepo
set GITHUB_REPO=https://github.com/fileshareapp01/fileshareapp01.github-io.git

REM Navigate to the repository directory
cd /d %REPO_DIR%

REM Initialize Git repository if not already initialized
if not exist ".git" (
    git init
    git remote add origin %GITHUB_REPO%
)

REM Add all files to the staging area
git add .

REM Commit changes with a message
git commit -m "Automatic upload from batch script"

REM Push changes to the remote repository
git push origin master

REM End script
echo Files uploaded successfully!
pause


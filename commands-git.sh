#!/bin/bash
exit 1 # avoid execution

# reset current branch to particular state
git reset --hard <tag/branch/commit id (sha1)>

# in case of: Your branch is behind 'origin/master' by .. commits, and can be fast-forwarded.
git pull --rebase origin master
git pull --rebase upstream master

# number of lines changed between two commits
git diff --stat <commit-ish> <commit-ish>

# clean TODO
git clean -dxf

# pull and rebase latest of all submodules
git submodule foreach git pull --rebase origin master

# change the name and email in all commits
git filter-branch -f --env-filter "GIT_AUTHOR_NAME=\'Bost\'; GIT_AUTHOR_EMAIL=\'thebost@gmail.com\'; GIT_COMMITTER_NAME=\'Bost\'; GIT_COMMITTER_EMAIL=\'thebost@gmail.com\';" HEAD

# assigns the original repo to a remote repo called upstream
git remote add upstream https://github.com/octocat/Spoon-Knife.git

# show upstream branches and other info
git remote show upstream

# git:
git fetch upstream branch1 branch2

# delete a remote-tracking branch from local repository; -r --remotes, -d --delete
git branch -rd public/whatever

# delete a remote branch
git push origin --delete branchName

# changes file against remote branch
git diff localBranch remoteBranch filepath

# changes file between two branches
git diff master branch filepath

# show files changed between two branches/commits
git diff --name-only master branch

# show particular changed word / staged changes
git diff --word-diff / --cached

# show files changed in last commit
git show --name-only

# count of files changed since ...
git whatchanged -1 --format=oneline -p 25.0.90.2.. | wc -l

# search through the gitlog
git show :/query

# show content of file.txt in commit ff0011
git show ff0011:file.txt

# show content of file in stage area (index) / common ancestor / target on the current branch where I am / the one I am bringing in
git show :0:file / :1:file / :2:file / :3:file

# show older version of a file
git show REVISION:path/to/file

# copy file from a BRANCH to /path/file.txt
git checkout BRANCH -- /path/file.txt

# revert
git checkout path/to/file

# --show --branch: show current branch and changes made since last commit
git status -sb

# --patch: interactively choose hunks of patch; see --interactive
git add -p

# amend commit; reuse commit message
git commit --amend --no-edit

# a kind of git history
git reflog

# add all *.txt files under given path; must not be a bare repo
git ls-files [path] | grep \'\.txt$\' | xargs git add

# create bare (empty) repo in the gitDir
git init gitDir

# recursivelly add all *.txt files from src/ to a repo located in gitDir
git --git-dir=gitDir add "src/**/*.txt"

# commit to a repo located in gitDir under given Name
git --git-dir=gitDir commit --author="Name <noreply@example.com>" -m "commitMsg"

# clone a repo from gitDir to a bareRepoDir (empty) presumably located on a server
git clone --bare origRepo bareRepoDir
git clone origRepo newRepoName

# workLocation must not be a bare (empty) repo
git add --work-tree=workLocation --git-dir=repoLocation

# list contibutors; -s, --summary, -n, --numbered
git shortlog -s -n

# show settings
git config --global / --local --list
git config --global / --local --get ...

# git:
git config --global user.name "Bost"

# git:
git config --global user.email thebost@gmail.com

# help with typos like git comit
git config --global help.autocorrect 1

# rebase: remember actions on a particular commit - in case of repeating conflicts when rebasing; long running branches
git config --global rerere.enabled 1

# github add new repository: create a new repo on www.github.com, then:
git remote add origin git@github.com:Bost/<newrepo>.git
git push -u origin master

# github: do not ask for username
.git/config: url = https://Bost@github.com/Bost/dotfiles.git

# search entire commit history
git log -S'textToSearch'

# ignore line ending changes
git config --global core.autocrlf true

# show formated commit logs
git log --pretty=format:\'%h %s\'

# a kind of \'gitk --all\'
git log --oneline --graph

# git:
git log --oneline --grep="pattern"

# find / list all commits for a specific file
git log --follow --name-only --format='%H' -- path/to/file

# set git base directory and working tree
git --git-dir=path/to/.git --work-tree=path/to/ ...

# ignore previously tracked path/to/file
git rm --cached path/to/file && echo "path/to/file" > .gitignore

# Use it in case of "You asked me to pull without telling me which branch ..."
git config branch.master.remote origin

# git:
git config branch.master.merge refs/heads/master

# cygwin: ignore chmod changes
git config core.fileMode false

# list the contents of a tree object; like ls -a
git ls-tree branchName path/to/file

# show info about files in the index and the working tree
git ls-files --cached / --deleted / --modified / --ignored / --stage

# Remove untracked files and dirs from the working tree
git clean -dxf

# split apart most recent commit: ... and edit the usual way
git reset HEAD~

# show aliases
git config --get-regexp alias

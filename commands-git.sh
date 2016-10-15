#!/bin/bash
exit 1 # avoid execution

# git: clean TODO
git clean -dxf

# git: pull and rebase latest of all submodules
git submodule foreach git pull --rebase origin master

# git: change the name and email in all commits
git filter-branch -f --env-filter "GIT_AUTHOR_NAME=\'Bost\'; GIT_AUTHOR_EMAIL=\'thebost@gmail.com\'; GIT_COMMITTER_NAME=\'Bost\'; GIT_COMMITTER_EMAIL=\'thebost@gmail.com\';" HEAD

# git: assigns the original repo to a remote repo called upstream
git remote add upstream https://github.com/octocat/Spoon-Knife.git

# git: show upstream branches and other info
git remote show upstream

# git:
git fetch upstream branch1 branch2

# git: delete a remote-tracking branch from local repository; -r --remotes, -d --delete
git branch -rd public/whatever

# git: delete a remote branch
git push origin --delete branchName

# git: diff file against remote branch
git diff localBranch remoteBranch filepath

# git: diff file between two branches
git diff master branch filepath

# git: show files changed between two branches/commits
git diff --name-only master branch

# git: show particular changed word / staged changes
git diff --word-diff / --cached

# git: show files changed in last commit
git show --name-only

# git: count of files changed since ...
git whatchanged -1 --format=oneline -p 25.0.90.2.. | wc -l

# git: search through the gitlog
git show :/query

# git: show content of file.txt in commit ff0011
git show ff0011:file.txt

# git: show content of file in stage area (index) / common ancestor / target on the current branch where I am / the one I am bringing in
git show :0:file / :1:file / :2:file / :3:file

# git: copy file from a BRANCH to /path/file.txt
git checkout BRANCH -- /path/file.txt

# git: --show --branch: show current branch and changes made since last commit
git status -sb

# git: --patch: interactively choose hunks of patch; see --interactive
git add -p

# git: amend commit; reuse commit message
git commit --amend --no-edit

# git: a kind of git history
git reflog

# git: add all *.txt files under given path; must not be a bare repo
git ls-files [path] | grep \'\.txt$\' | xargs git add

# git: create bare (empty) repo in the gitDir
git init gitDir

# git: recursivelly add all *.txt files from src/ to a repo located in gitDir
git --git-dir=gitDir add "src/**/*.txt"

# git: commit to a repo located in gitDir under given Name
git --git-dir=gitDir commit --author="Name <noreply@example.com>" -m "commitMsg"

# git: clone a repo from gitDir to a bareRepoDir (empty) presumably located on a server
git clone --bare gitDir bareRepoDir

# git: workLocation must not be a bare (empty) repo
git add --work-tree=workLocation --git-dir=repoLocation

# git: list contibutors; -s, --summary, -n, --numbered
git shortlog -s -n

# git:
git config --global user.name "Bost"

# git:
git config --global user.email thebost@gmail.com

# git: help with typos like git comit
git config --global help.autocorrect 1

# git: rebase: remember actions on a particular commit - in case of repeating conflicts when rebasing; long running branches
git config --global rerere.enabled 1

# git: github: do not ask for username
.git/config: url = https://Bost@github.com/Bost/dotfiles.git

# git: search entire commit history
git log -S'textToSearch'

# git: ignore line ending changes
git config --global core.autocrlf true

# git: show formated commit logs
git log --pretty=format:\'%h %s\'

# git: a kind of \'gitk --all\'
git log --oneline --graph

# git:
git log --oneline --grep="pattern"

# git: find / list all commits for a specific file
git log --follow --name-only --format='%H' -- path/to/file

# git: set git base directory and working tree
git --git-dir=path/to/.git --work-tree=path/to/ ...

# git: ignore previously tracked path/to/file
git rm --cached path/to/file && echo "path/to/file" > .gitignore

# git: Use it in case of "You asked me to pull without telling me which branch ..."
git config branch.master.remote origin

# git:
git config branch.master.merge refs/heads/master

# git: cygwin: ignore chmod changes
git config core.fileMode false

# git: list the contents of a tree object; like ls -a
git ls-tree branchName path/to/file

# git: show info about files in the index and the working tree
git ls-files --cached / --deleted / --modified / --ignored / --stage

# git: Remove untracked files and dirs from the working tree
git clean -dxf

#!/bin/bash
exit 1 # avoid execution

# compute sha1 for any file
git hash-object path/to/file.ext

# reset current branch to particular state
# <startpoint> is (probably) <tag/branch/commit id (sha1)>
git reset --hard <startpoint>
# reset <branch> to <startpoint>, even if <branchname> exists already
git branch --force <branch> <startpoint>

# in case of: Your branch is behind 'origin/master' by .. commits, and can be fast-forwarded.
git pull --rebase origin master
git pull --rebase upstream master

# pull and rebase latest of all submodules
git submodule foreach git pull --rebase origin master

# change the name and email in all commits
git filter-branch -f --env-filter "GIT_AUTHOR_NAME='Bost'; GIT_AUTHOR_EMAIL='thebost@gmail.com'; GIT_COMMITTER_NAME='Bost'; GIT_COMMITTER_EMAIL='thebost@gmail.com';" HEAD

# reuse commit message
git commit --amend --no-edit

# change the author (name, email) in the last commit
git commit --amend --author "Bost <thebost@gmail.com>"
git commit --amend --reset-author

# assigns the original repo to a remote repo called upstream
git remote add upstream https://github.com/octocat/Spoon-Knife.git

# show upstream branches and other info
git remote show upstream
git fetch upstream <branch1> <branch2>

# delete a remote-tracking branch from local repository
git branch --remotes --delete public/whatever
git branch -rd public/whatever
# delete a remote branch
git push origin --delete <branch>

# file changes against remote branch
git diff <branch1> <branch2> filepath
# show particular changed word / staged changes
git diff --word-diff / --cached
# no plus minus signs
git diff --color <sha1> <sha1> | sed -r "s/^([^-+ ]*)[-+ ]/\\1/" | less -r
# number of lines changed between two commits
git diff --stat <commit-ish> <commit-ish>

# files changed
git diff --name-only HEAD~1                # in last commit
git diff --name-only <branch1> <branch2>   # between two branches
git diff --name-only <branch1>..<branch2>  # between two branches
git diff --name-only <branch>              # between <branch> and the HEAD
git diff --name-only 5890e37..ebbf4c0      # between 2 commits
git diff --name-status <branch1> <branch2> # show status D - deleted, M-modified etc

# count of files changed in the since the <tag>
git log --format=oneline --patch <tag>..HEAD | wc -l

# search through the gitlog
git show :/query

# show content of file.txt in commit ff0011
git show ff0011:file.txt

# show content of file in the ...
git show :0:file    # ... stage area (i.e. index)
git show :1:file    # ... common ancestor
git show :2:file    # ... target on the current branch where I am
git show :3:file    # ... the one I am bringing in

# show older version of a file
git show REVISION:path/to/file

# copy file from a BRANCH to /path/to/file
git checkout BRANCH -- /path/to/file

# revert uncommited changes in <path/to/file>
git checkout <path/to/file>

# show current branch and changes made since last commit
git status --show --branch
git status -sb

# interactively choose hunks of patch; see --interactive
git add --patch
git add -p

# amend commit; reuse commit message
git commit --amend --no-edit

# a kind of git history
git reflog

# add all *.txt files under given path; must not be a bare repo
git ls-files [path] | grep \'\.txt$\' | xargs git add

# create bare (empty) repo in the...
git init <dir>
git init       # ...current dir

# recursivelly add all *.txt files from src/ to a repo located in <dir>
git --git-dir=<dir> add "src/**/*.txt"

# commit to a repo located in gitDir under given Name
git --git-dir=<dir> commit --author="Name <noreply@example.com>" -m "commitMsg"

# clone a repo from <origRepo> to an (empty) <bareRepoDir>
git clone --bare <origRepo> <bareRepoDir>

# shallow clone with a history truncated to the specified number of commits
git clone --depth=1 -b <branch> <origRepo> <newRepoName>

# workLocation must not be a bare (empty) repo
git add --work-tree=workLocation --git-dir=<dir>

# list contibutors / committers
git shortlog --summary --numbered
git shortlog -sn

# show settings
git config --global --list
git config --local  --list
git config --global --list --get <setting>
git config --local  --list --get <setting>

# set user.name and user.mail
git config --global user.name "Bost"
git config --global user.email thebost@gmail.com

# help with typos like git comit
git config --global help.autocorrect 1

# rebase: remember actions on a particular commit - in case of repeating conflicts when rebasing; long running branches
git config --global rerere.enabled 1

# github add new repository: create a new repo on www.github.com, then:
git remote add origin git@github.com:Bost/<newrepo>.git
git push -u origin master

# github: do not ask for username
.git/config: url = https://Bost@github.com/Bost/reponame.git

# search entire commit history
git log -S "textToSearch"

# search entire commit history; also in refs (see git help log)
git log -S "textToSearch" --source --all

# search for occurences of function foo
git log -G "^(\s)*function foo[(][)](\s)*{$" --source --all

# ignore line ending changes
git config --global core.autocrlf true

# show formated commit logs
git log --pretty=format:'%h %s'

# a kind of 'gitk --all'
git log --oneline --graph

# show commit messages matching <pattern>
git log --oneline --grep="<pattern>"

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
git ls-files --cached
git ls-files --deleted
git ls-files --modified
git ls-files --ignored
git ls-files --stage

# Remove untracked files and dirs from the working tree
git clean -dxf

# amend / split apart last commit: ... and edit the usual way
git reset HEAD~

# show aliases
git config -l | grep alias | cut -c 7-
git config --get-regexp alias

# list all deleted files in the repo
git log --diff-filter=D --summary

# bisect: find the first GOOD commit
# "Maybe you mistook good and bad revs" see http://stackoverflow.com/a/17153598
git bisect start --term-new=fixed --term-old=unfixed
git bisect fixed master
git bisect unfixed <some-old-sha1>

# checkout as; older revision of a file under a new name
git show HEAD^:main.cpp > old_main.cpp

# prepare release; create an archive of files from a named tree
git archive --format zip --output "output.zip" master

# generate build number: nearest tag + nr of commits on top + sha1
git describe master

# list tags a given point
git tag --points-at master
git tag --points-at emacs-26
git tag --points-at HEAD

# workaround for 'ssh error: port 22: no route to host'
git remote set-url origin https://github.com/<user_name>/<repo_name>.git
git remote add origin ssh://user@host:1234/srv/git/example

var jsonRest = [
['ls --format=single-column',                     '# ls: '],
['ls -d1 */',                                     '# ls: list only directories, 1 entry per line'],
['echo "ls -l" | at midnight',                    '# at: execute a command at a given time'],
['wc cheatsheet.html',                            '# wc: line count, word count'],
['sudo !!',                                       '# bash: run the last command as root'],
['!$',                                            '# bash: last argument of the last command'],
['> file.txt',                                    '# bash: empty the file.txt'],
['d() { date; }',                                 '# bash: ? define function in bash ?'],
['C-r, C-g',                                      '# bash: bash history, abort history'],
['#!/bin/bash -e',                                '# bash: stop the script after any error (shebang line)'],
['mkdir -p path/dirname.0{1,2,3}',                '# bash: create 4 directories at once']
['mv README.{text,txt} ; cp file{,.bak}',         '# bash: mv README.text README.txt ; cp file file.bak'],
['./command.sh 2&gt;&amp;1 | tee command.log',    '# bash: print the output to log and to the stdout'],

['curl -O http://...',                            '# curl: download a file'],

['&nbsp;','&nbsp;'],

['diff -rq dirA dirB | sort',                     '# diff: recursively compare dirA with dirB; show only filenames: -q (quiet)'],

['gvim $(find . -name "*fileToSearch*")',                                       '# find: find files and open them in gvim'],
['find . -name "*fileToSearch*"',                                               '# find: '],
['find . -name *.properties -exec grep -lir ".*textToFind.*" \'{}\' \; -print', '# find: '],
['find . ... -print -quit',                                                   , '# find: quit search after finding first match'],

['grep -lir "TextToFind" *',                      '# grep: print only file-names'],
['grep sometext * | cut -f1 -d:',                 '# grep: print only filenames of the files containing \'sometext\''],
['grep -i -n "TextToSearch" *',                   '# grep: print line numbers'],
['grep --exclude=.git',                           '# grep: '],
['grep --exclude=.git -lir \'something\' *.cpp',  '# grep: '],

['&nbsp;','&nbsp;'],

['git filter-branch -f --env-filter "GIT_AUTHOR_NAME=\'Bost\'; GIT_AUTHOR_EMAIL=\'thebost@gmail.com\'; GIT_COMMITTER_NAME=\'Bost\'; GIT_COMMITTER_EMAIL=\'thebost@gmail.com\';" HEAD', '# git: change the name and email in all commits'],
['&nbsp;','&nbsp;'],

['git remote add upstream https://github.com/octocat/Spoon-Knife.git', '# assigns the original repo to a remote called \'upstream\''],
['git fetch upstream', ''],

['&nbsp;','&nbsp;'],

['git branch -rd public/whatever',                '# git: delete a remote-tracking branch from local repository'],
['git diff localbranch remotebranch filepath',    '# git: diff file against remote branch'],
['git diff master branch filepath',               '# git: diff file between two branches'],
['git diff --name-only master branch',            '# git: show files changed between two branches/commits'],
['git diff --word-diff',                          '# git: show particular changed word'],
['git show --name-only',                          '# git: show files changed in last commit'],
['git show :/query',                              '# git: search through the gitlog'],
['git checkout BRANCH -- /path/file.txt',         '# git: copy file from a BRANCH to /path/file.txt'],
['git status -sb',                                '# git: --show --branch: show current branch and changes made since last commit'],
['git add -p',                                    '# git: --patch: interactively choose hunks of patch; see \'--interactive\''],
['git reflog',                                    '# git: a kind of \'git history\''],
['git config --global help.autocorrect 1',        '# git: help with typos like \'git comit\''],
['git config --global rerere.enabled 1',          '# git: remember actions on a particular commit - in case of repeating conflicts when rebasing; long running branches'],
['git log -S\'text-to-search\'',                  '# git: search entire commit history'],
['git log --pretty=format:\'%h %s\'',             '# git: show formated commit logs'],
['git log --oneline --graph',                     '# git: a kind of \'gitk --all\''],
['git log --oneline --grep="pattern"',            '# git: '],
['--git-dir=../all/.git --work-tree=.',           '# git: set git base directory and working tree'],


['&nbsp;','&nbsp;'],
/* TODO add this:
#!/bin/sh
ls -lh &&
# This is a comment
echo 'Wicked, it works!'
*/
['cvs diff -r RELEASE_1_0 -r RELEASE_1_1',        '# cvs: '],
['cvs update -C path/to/file.ext',                '# cvs: get clean copy'],
['cvs checkout -r branchOrTag module',            '# cvs: checkout module from branch or tag'],
['cvs log    -P -d path/to/file.ext',             '# cvs: update file'],

['&nbsp;','&nbsp;'],

['cvs tag    -d -r 1.17 NormalTag path/to/file.ext', '# cvs: delete NormalTag from file.ext in version 1.17'],
['cvs tag -B -d -r 1.17 BranchTag path/to/file.ext', '# cvs: delete BranchTag from file.ext in version 1.17'],
['cvs tag -B -F -r 1.19 BranchTag path/to/file.ext', '# cvs: move   BranchTag to   file.ext in version 1.19'],
['cvs tag -b    -r 1.19 BranchTag path/to/file.ext', '# cvs: create BranchTag on   file.ext in version 1.19'],
['cvs tag    -F -r 1.63 NormalTag path/to/file.ext', '# cvs: move   NormalTag to   file.ext in version 1.63'],

['&nbsp;','&nbsp;'],

['ssh-keygen',                                    '# github: ssh: '],
['cat ~/.ssh/id_rsa.pub',                         '# github: now copy-paste the ~/.ssh/id_rsa.pub to github under \'Add another public key\''],

['METADA_CORE=.metadata/.plugins/org.eclipse.jdt.core;',                '# eclipse: clean metadata'],
['rm -rf .metadata/.plugins/org.eclipse.core.resources/.history;',      '# eclipse: '],
['rm $METADA_CORE/*.index $METADA_CORE/savedIndexNames.txt;',           '# eclipse: '],
['[\t ]+$',                                                             '# eclipse: remove trailing whitespaces'],

['&nbsp;','&nbsp;'],



['&nbsp;','&nbsp;'],

['db2cmd -i -w db2clpsetcp',                                                       '# db2: init envidonment'],
['echo %DB2CLP%',                                                                  '# db2: '],
['db2 get connection state',                                                       '# db2: '],
['db2 CATALOG TCPIP NODE $node_name REMOTE $ip_addr SERVER $port',                 '# db2: '],
['db2 CATALOG DATABASE $database_name at NODE $node_name AUTHENTIFICATION SERVER', '# db2: '],
['db2 UNCATALOG NODE $node_name',                                                  '# db2: '],
['db2 UNCATALOG DATABASE $database_name',                                          '# db2: '],
['db2 TERMINATE',                                                                  '# db2: '],
['db2 list db directory &gt; db.txt | gvim db.txt',                                '# db2: '],
['db2 list node directory &gt; node.txt | gvim node.txt',                          '# db2: '],
['db2 -vf script.sql -t',                                                          '# db2: launch script on CLI'],

['&nbsp;','&nbsp;'],

['last',                                                                '# linux: last logged-in users'],
['lscpu',                                                               '# linux: info about CPU architecture'],
['renice',                                                              '# linux: alter priority of running processes'],
['lsb_release -a',                                                      '# linux: show (ubuntu) version'],

['&nbsp;','&nbsp;'],
['&nbsp;','&nbsp;'],

['/usr/ucb/ps -auxww',                                                  '# solaris: full command line (needs: sudo rootsh -i -u ... )'],
['jar tf',                                                              '# jar: list files in a jar-file'],
['xfce4-session-logout',                                                '# xfce: &nbsp;'],
['rm -r ~/.cache/sessions',                                             '# xfce: execute this when the title bar dissapears from xfwm4'],
['man -k abc',                                                          '# search man pages for abc'],
['ssh user@host cat /path/to/remotefile | diff /path/to/localfile -',   '# ssh: compare a remote file with a local file'],
['$ssh-copy-id user@host',                                              '# ssh: copy ssh keys to user@host to enable password-less ssh logins'],
['sshfs name@server:/path/to/folder /path/to/mount/point',              '# ssh: mount folder/filesystem through SSH. Install SSHFS from http://fuse.sourceforge.net/sshfs.html. Will allow you to mount a folder security over a network.'],

['net use',                                                             '# windows: list mapped network drives'],
['xmllint',  '# xml: command line XML tool (formating)'],
]


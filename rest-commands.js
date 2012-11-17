var jsonRest = [
['rm -r ~/.cache/sessions',                       '# execute this when the title bar dissapears from xfwm4'],
['ls --format=single-column',                     '&nbsp;'],
['echo "ls -l" | at midnight',                    '# Execute a command at a given time'],
['wc cheatsheet.html',                            '# line count, word count'],
['sudo !!',                                       '# run the last command as root'],
['!$',                                            '# last parameter (argument) of the last command'],
['C-r, C-g',                                      '# bash history, abort history'],
['mv README.{text,txt} ; cp file{,.bak}',         '# mv README.text README.txt ; cp file file.bak'],
['ls -d1 */',                                     '# list only directories, 1 entry per line'],
['./command.sh 2&gt;&amp;1 | tee command.log',    '# print the output to log and to the stdout'],
['gvim $(find . -name "*fileToSearch*")',         '# find files and open them in gvim'],

['curl -O http://...',                            '# download a file'],
['&nbsp;','&nbsp;'],

['diff -rq dirA dirB | sort',                     '# recursively compare dirA with dirB; show only filenames: -q (quiet)'],
['find . -name "*fileToSearch*"',                 '&nbsp;'],
['find . -name *.properties -exec grep -lir ".*textToFind.*" \'{}\' \; -print',    '&nbsp;'],
['grep -lir "TextToFind" *',                      '# print only file-names'],
['grep sometext * | cut -f1 -d:',                 '# print only filenames of the files containing \'sometext\''],
['grep -i -n "TextToSearch" *',                   '# print line numbers'],
['grep --exclude=.git',                           '&nbsp;'],
['grep --exclude=.git -lir \'something\' *.cpp',  '&nbsp;'],

['&nbsp;','&nbsp;'],

['git filter-branch -f --env-filter "GIT_AUTHOR_NAME=\'Bost\'; GIT_AUTHOR_EMAIL=\'thebost@gmail.com\'; GIT_COMMITTER_NAME=\'Bost\'; GIT_COMMITTER_EMAIL=\'thebost@gmail.com\';" HEAD', '# change the name and email in all commits'],
['&nbsp;','&nbsp;'],

['git remote add upstream https://github.com/octocat/Spoon-Knife.git', '# Assigns the original repo to a remote called \'upstream\''],
['git fetch upstream', ''],

['&nbsp;','&nbsp;'],

['git branch -rd public/whatever',                '# delete a remote-tracking branch from local repository'],
['git diff --name-only master branch',            '# show files changed between two branches/commits'],
['git diff --word-diff',                          '# show particular changed word'],
['git show --name-only',                          '# show files changed in last commit'],
['git show :/query',                              '# search through the gitlog'],
['git checkout BRANCH -- /path/file.txt',         '# copy file from a BRANCH to /path/file.txt'],
['git status -sb',                                '# --show --branch: show current branch and changes made since last commit'],
['git add -p',                                    '# --patch: interactively choose hunks of patch; see \'--interactive\''],
['git reflog',                                    '# a kind of \'git history\''],
['git config --global help.autocorrect 1',        '# help with typos like \'git comit\''],
['git config --global rerere.enabled 1',          '# remember actions on a particular commit - in case of repeating conflicts when rebasing; long running branches'],
['git log -S\'text-to-search\'',                  '# search entire commit history'],
['git log --pretty=format:\'%h %s\'',             '# show formated commit logs'],
['git log --oneline --graph',                     '# a kind of \'gitk --all\''],
['git log --oneline --grep="pattern"',            '&nbsp;'],
['--git-dir=../all/.git --work-tree=.',           '# set git base directory and working tree'],


['d() { date; }',                                 '# ? define function in bash ?'],
['&nbsp;','&nbsp;'],

['cvs diff -r RELEASE_1_0 -r RELEASE_1_1',        '&nbsp;'],
['cvs update -C path/file.ext',                   '# get clean copy'],
['cvs checkout -r branchOrTag module',            '# checkout module from branch or tag'],

['ssh-keygen',                                    '&nbsp;'],
['cat ~/.ssh/id_rsa.pub',                         '# now copy-paste the ~/.ssh/id_rsa.pub to github under \'Add another public key\''],

['METADA_CORE=.metadata/.plugins/org.eclipse.jdt.core;',                '&nbsp;'],
['rm -rf .metadata/.plugins/org.eclipse.core.resources/.history;',      '&nbsp;'],
['rm $METADA_CORE/*.index $METADA_CORE/savedIndexNames.txt;',           '&nbsp;'],

['&nbsp;','&nbsp;'],

['[\t ]+$',                                                             '# eclipse: remove trailing whitespaces'],


['&nbsp;','&nbsp;'],

['db2cmd -i -w db2clpsetcp',                                            '# db2: init envidonment'],
['echo %DB2CLP%',                                                       '&nbsp;'],
['db2 get connection state',                                            '&nbsp;'],
['db2 CATALOG TCPIP NODE $node_name REMOTE $ip_addr SERVER $port',      '&nbsp;'],
['db2 CATALOG DATABASE $database_name at NODE $node_name AUTHENTIFICATION SERVER', '&nbsp;'],
['db2 UNCATALOG NODE $node_name',                                       '&nbsp;'],
['db2 UNCATALOG DATABASE $database_name',                               '&nbsp;'],
['db2 TERMINATE',                                                       '&nbsp;'],
['db2 -vf script.sql -t',                                               '# db2: launch script on CLI'],

['&nbsp;','&nbsp;'],

['last',                                                                '# last logged-in users'],
['lscpu',                                                               '# info about CPU architecture'],
['renice',                                                              '# alter priority of running processes'],

['&nbsp;','&nbsp;'],
['&nbsp;','&nbsp;'],

['/usr/ucb/ps -auxww',                                                  '# solaris: full command line'],
['jar tf',                                                              '# list files in a jar-file'],
['lsb_release -a',                                                      '# ubuntu version'],
['xfce4-session-logout',                                                '&nbsp;'],
['man -k abc',                                                          '# search man pages for abc'],
['$ssh-copy-id user@host',                                              '# Copy ssh keys to user@host to enable password-less ssh logins'],
['sshfs name@server:/path/to/folder /path/to/mount/point',              '# Mount folder/filesystem through SSH. Install SSHFS from http://fuse.sourceforge.net/sshfs.html. Will allow you to mount a folder security over a network.'],

['ssh user@host cat /path/to/remotefile | diff /path/to/localfile -',   '# Compare a remote file with a local file'],
]


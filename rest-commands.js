var jsonRest = [
['ls --format=single-column',                     '# ls: '],
['ls -d1 */',                                     '# ls: list only directories, 1 entry per line'],
['ls -1 /path/to/dir | wc -l',                    '# wc: ls: count of files in /path/to/dir'],
['wc cheatsheet.html',                            '# wc: line count, word count'],
['echo "ls -l" | at midnight',                    '# bash: at: execute a command at a given time'],
['at -f script.sh now + 1 hour',                  '# bash: at: run script.sh 1 hour from now'],
['set -o vi',                                     '# bash: set vi bindings'],
['sudo !!',                                       '# bash: run the last command as root'],
['!$',                                            '# bash: last argument of the last command'],
['!*',                                            '# bash: all arguments of the last command'],
['> file.txt',                                    '# bash: empty the file.txt'],
['tr \'[A-Z]\' \'[a-z]\' < fileName.txt > fileNameNew.txt', '# bash:  insert contents of fileName.txt into input of tr and output results to fileNameNew.txt'],
['mmv \\*.JPG \\#1.jpg',                          '# bash: mass move/copy/rename'],
['cal 2 2004 / cal -y 2004',                      '# bash: visual calender for februar 2004 / whole year 2004'],
['renice +20 2222',                               '# bash: change the priority of process 2222 to minimum (-19 max, +20 min prio)'],
['ps -o pid,user,command,nice -p 7695',           '# bash: show statistics for a process nr. 7695'],
['d() { date; }',                                 '# bash: ? define function in bash ?'],
['C-r, C-g',                                      '# bash: bash history, abort history'],
['#!/bin/bash -e',                                '# bash: stop the script after any error (shebang line)'],
['mkdir -p path/dirname.0{1,2,3}',                '# bash: create 4 directories at once'],
['mv README.{text,txt} ; cp file{,.bak}',         '# bash: mv README.text README.txt ; cp file file.bak'],
['./command.sh 2&gt;&amp;1 | tee command.log',    '# bash: print the output to log and to the stdout'],
['date +"%Y-%m-%d_%H-%M-%S"',                     '# bash: get date (timestamp) in a given format'],
['du -h --exclude=patten /path/to/dir',           '# bash: size of /path/to/dir with subdirectories, excluding files with given pattern'],

['curl -O http://server/fileX.txt > path/to/fileY.txt',  '# curl: download fileX.txt and save it under different location / name'],

['&nbsp;','&nbsp;'],

['diff -rq dirA dirB | sort',                     '# diff: recursively compare dirA with dirB; show only filenames: -q (quiet)'],
['sdiff file1 file0',                             '# diff: outputs the files in two columns, side by side, separated by spaces'],

['gvim $(find . -name "*fileToSearch*")',                                       '# find: find files and open them in gvim'],
['find ./ foo/ bar/ -name "*fileToSearch*"',                                    '# find: search for *fileToSearch* in multiple directories'],
['find . -name *.properties -exec grep -lir ".*textToFind.*" \'{}\' \; -print', '# find: '],
['find . ... -print -quit',                                                     '# find: quit search after finding first match'],

['&nbsp;','&nbsp;'],

['grep --before-context=2 --after-context=4 textToFind',                        '# grep: search for textToFind and print 2/4 lines before/after matching line'],
['grep -B 2 -A 4 textToFind',                                                   '# grep: search for textToFind and print 2/4 lines before/after matching line'],
['grep -lir "textToFind" *',                                                    '# grep: print only file-names'],
['grep sometext * | cut -f1 -d:',                                               '# grep: print only filenames of the files containing \'sometext\''],
['grep -i -n "textToFind" *',                                                   '# grep: print line numbers'],
['grep --exclude=.git',                                                         '# grep: '],
['grep --exclude=.git -lir \'textToFind\' *.properties',                        '# grep: '],
['grep -lir "textToFind" `find . -name *.properties`',                          '# grep: find: '],
['grep -lir "textToFind" `find . -name *.properties -and -not -name .git/`',    '# grep: find: do not search in the .git directory'],

['&nbsp;','&nbsp;'],

['git filter-branch -f --env-filter "GIT_AUTHOR_NAME=\'Bost\'; GIT_AUTHOR_EMAIL=\'thebost@gmail.com\'; GIT_COMMITTER_NAME=\'Bost\'; GIT_COMMITTER_EMAIL=\'thebost@gmail.com\';" HEAD', '# git: change the name and email in all commits'],

['&nbsp;','&nbsp;'],

['git remote add upstream https://github.com/octocat/Spoon-Knife.git', '# git: assigns the original repo to a remote called \'upstream\''],
['git fetch upstream',                            '# git: '],
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
['git config --global user.name "Bost"',          '# git: '],
['git config --global user.email thebost@gmail.com','# git: '],
['git config --global help.autocorrect 1',        '# git: help with typos like \'git comit\''],
['git config --global rerere.enabled 1',          '# git: rebase: remember actions on a particular commit - in case of repeating conflicts when rebasing; long running branches'],
['git log -S\'text-to-search\'',                  '# git: search entire commit history'],
['git log --pretty=format:\'%h %s\'',             '# git: show formated commit logs'],
['git log --oneline --graph',                     '# git: a kind of \'gitk --all\''],
['git log --oneline --grep="pattern"',            '# git: '],
['git --git-dir=path/to/.git --work-tree=path/to/ ...',   '# git: set git base directory and working tree'],

['git config branch.master.remote origin', '# git: Use it in case of "You asked me to pull without telling me which branch ..."'],
['git config branch.master.merge refs/heads/master', '# git: '],

['&nbsp;','&nbsp;'],

['rsync -av --exclude=CVS src dest',              '# cvs: copy files from src to desc excluding everything in CVS directories'],
['cvs diff -r tagX -r tagY',                      '# cvs: diff tagX tagY'],
['cvs update -C path/to/file.ext',                '# cvs: get clean copy'],
['cvs update -P -C -r 1.11 path/to/file.ext',     '# cvs: get revision 1.11'],
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
['cat ~/.ssh/id_rsa.pub',                         '# github: now copy-paste the ~/.ssh/id_rsa.pub to github under "Account settings / SSH keys / Add another public key"'],

['METADA_CORE=.metadata/.plugins/org.eclipse.jdt.core;',                '# eclipse: '],
['rm -rf .metadata/.plugins/org.eclipse.core.resources/.history;',      '# eclipse: clean history'],
['rm $METADA_CORE/*.index $METADA_CORE/savedIndexNames.txt;',           '# eclipse: clean metadata'],
['[\\t ]+$',                                                            '# eclipse: use this in find-replace dialogue to remove trailing whitespaces'],

['&nbsp;','&nbsp;'],

['db2cmd -i -w db2clpsetcp',                                                       '# db2: init environment'],
['echo %DB2CLP%',                                                                  '# db2: windows: '],
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

['/usr/sfw/bin/wget',                                                   '# solaris: wget'],
['/usr/ucb/ps -auxww',                                                  '# solaris: full command line (needs: sudo rootsh -i -u ... )'],
['psrinfo',                                                             '# solaris: displays information about processors'],
['jar tf file.jar',                                                     '# jar: list files in file.jar'],
['jar xf file.jar path/inside.txt && cat path/inside.txt',              '# jar: show content of a file inside a jar file'],
['xfce4-session-logout',                                                '# xfce: logout'],
['rm -r ~/.cache/sessions',                                             '# xfce: execute this when the title bar dissapears from xfwm4'],
['man -k abc',                                                          '# man: search man pages for abc'],
['ssh user@host cat /path/to/remotefile | diff /path/to/localfile -',   '# ssh: compare a remote file with a local file'],
['$ssh-copy-id user@host',                                              '# ssh: copy ssh keys to user@host to enable password-less ssh logins'],
['sshfs name@server:/path/to/folder /path/to/mount/point',              '# ssh: mount folder/filesystem through SSH. Install SSHFS from http://fuse.sourceforge.net/sshfs.html. Will allow you to mount a folder security over a network'],

['net use',                                                             '# windows: list mapped network drives'],
['xmllint',                                                             '# xml: command line XML tool (formating)'],
['lein deps :tree',                                                     '# lein: show leiningen dependency tree'],
['[the-dependency "X.Y.Z" :exclusions [org.clojure/clojure]]',          '# lein: try to put it to project.clj in case of \'Could not locate clojure/instant__init.class or clojure/instant.clj on classpath\''],

['dpkg --get-selections',                                               '# dpkg: show installed packages'],
['dpkg -L packageName',                                                 '# dpkg: list of installed files from a packageName (dpkg-query -L works too)'],
['cygpath -w filename',                                                 '# cygwin: bash: print windows form of filename'],
['cygpath -u filename',                                                 '# cygwin: bash: print unix form of filename'],
['zip -r /path/to/file.zip /path/to/dir',                               '# zip: zip content of /path/to/dir to /path/to/file.zip'],
['unzip /path/to/file.zip -d /path/to/extract-dir',                     '# zip: unzip: '],
['tar czf /path/to/tarfile.gz file0 file1',                             '# tar: '],
['tar xzf /path/to/tarfile.gz',                                         '# tar: untar: '],
/*
* TODO add this:
#!/bin/sh
ls -lh &&
# This is a comment
echo 'Wicked, it works!'

* TODO add bash file tests to the list
FILE1 -ot FILE2
              FILE1 is older than FILE2

       -b FILE
              FILE exists and is block special

       -c FILE
              FILE exists and is character special

       -d FILE
              FILE exists and is a directory

       -e FILE
              FILE exists

       -f FILE
              FILE exists and is a regular file

       -g FILE
              FILE exists and is set-group-ID

       -G FILE
              FILE exists and is owned by the effective group ID

       -h FILE
              FILE exists and is a symbolic link (same as -L)

       -k FILE
              FILE exists and has its sticky bit set

       -L FILE
              FILE exists and is a symbolic link (same as -h)

       -O FILE
              FILE exists and is owned by the effective user ID

       -p FILE
              FILE exists and is a named pipe

       -r FILE
              FILE exists and read permission is granted
       -s FILE
              FILE exists and has a size greater than zero

       -S FILE
              FILE exists and is a socket

       -t FD  file descriptor FD is opened on a terminal

       -u FILE
              FILE exists and its set-user-ID bit is set

       -w FILE
              FILE exists and write permission is granted

       -x FILE
              FILE exists and execute (or search) permission is granted
*/
 ]


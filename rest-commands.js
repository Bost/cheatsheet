var jsonRest = [
//['', '# '],

['wget http://ftp.heanet.ie/mirrors/gnu/gnu-keyring.gpg && gpg --import gnu-keyring.gpg', '# gpg: download and import gnu-keyring'],
['gpg --verify file.sig file',                    '# gpg: verify file'],

['df -i',                                         '# fs: nr of inodes; every file or directory requires one inode'],
['hostname -i',                                   '# net: show or set the system\'s host name'],
['ip addr show eth0',                             '# net: show / manipulate routing, devices, policy routing and tunnels'],
['backspace / ] / [ / o',                         '# mplayer: reset/+/- speed by 10% / toggle OSD states'],
['* / "/"',                                       '# mplayer: volume +/-'],

['ps2pdf',                                        '# ps2pdf: '],
['xmodmap',                                       '# xserver: modifying keymaps and pointer button mappings in X'],
['xkbprint :0',                                   '# xserver: print an XKB keyboard description to a file in ps-format'],

['javaws start.jnlp',                             '# java: launch start.jnlp'],
['javap file.class',                              '# java: disassemble file.class'],
['ls --format=single-column',                     '# ls: '],
['ls -d1 */',                                     '# ls: list only directories, 1 entry per line'],
['ls -1 /path/to/dir | wc -l',                    '# ls: wc: count of files in /path/to/dir'],
['ls -lrt -d -1 $PWD/{*,.*}',                     '# ls: show full paths (alias lff)'],
['wc cheatsheet.html',                            '# wc: line count, word count'],

['seq 0 2 10',                                    '# bash: sequence from 0 to 10 (both included) increment by 2'],
['fdupes -r .',                                   '# bash: find duplicate files'],
['xsel --clipboard',                              '# bash: clipboard: show normal clipboard content'],
['cat file &gt; /dev/clip / cat /dev/clip',       '# bash: clipboard: pipe to / from clipboard'],
['xclip -loops 10 -verbose file.ext',             '# bash: clipboard: wait for 10 pastings of the content file.ext to x-clipboard and quit'],
['echo "test" | xclip / xclip -o > file.ext',     '# bash: clipboard: put "test" to x-clipboard / put x-clipboard content to file.ext'],
['history -d',                                    '# bash: remove a line from shell history (i.e. password); edit ~/.bash_history'],
['echo "rm -rf /unwanted-large/folder" | batch',  '# bash: run a cmd only when load average is below a certain threshold (default is 0.8)'],
['bind -P',                                       '# bash: show all bash shortcuts'],
['chmod --reference file0 file1',                 '# bash: set mod of file1 according to file0'],
['rm -f !(survivor.txt)',                         '# bash: remove all files except survivor.txt'],
['Esc *',                                         '# bash: insert autocompletition result (use together with other progs)'],
['\\\[command\]',                                 '# bash: alias: escape command aliases'],
['Alt-. / Esc-.',                                 '# bash: get the argument of the last command. see: bind -P'],
['echo "ls -l" | at midnight',                    '# bash: at: execute a command at a given time'],
['at -f script.sh now + 1 hour',                  '# bash: at: run script.sh 1 hour from now'],
['set -o vi',                                     '# bash: set vi bindings'],
['sudo !!',                                       '# bash: args: run the last command as root'],
['id user',                                       '# bash: real and effective user and group IDs'],

['$*',                                            '# bash: args: function arguments'],
['!*',                                            '# bash: args: all arguments of the last command'],
['$@',                                            '# bash: args: all arguments' ],
['$#',                                            '# bash: args: count of arguments' ],
['$?',                                            '# bash: exit status of the most recently executed command'],
['$-',                                            '# bash: build-in commands'],
['$_',                                            '# bash: last argument of the previous command. At the shell startup, it gives the absolute filename of the shell script being executed'],
['!$',                                            '# bash: args: last argument of the last command'],
['$!',                                            '# bash: process ID of the most recently executed background process'],
['$$',                                            '# bash: process ID of the shell'],
['!:-',                                           '# bash: args: last command without the last argument'],

['> file.txt',                                    '# bash: empty file.txt'],
['tr \'[A-Z]\' \'[a-z]\' < file.txt > fileNew.txt', '# bash: insert contents of file.txt into input of tr and output results to fileNew.txt'],
['mmv \\*.JPG \\#1.jpg',                          '# bash: mass move/copy/rename'],
['cal 2 2004 / cal -y 2004',                      '# bash: visual calender for februar 2004 / whole year 2004'],
['renice +20 2222',                               '# bash: change the priority of process 2222 to minimum (-19 max, +20 min prio)'],
['ps -o pid,user,command,nice -p 7695',           '# bash: ps: show statistics for a process nr. 7695'],
['d() { date; }',                                 '# bash: ? define function in bash ?'],
['C-r, C-g',                                      '# bash: bash history, abort history'],
['#!/bin/bash -e',                                '# bash: shebang: stop the script after any error'],
['#!/usr/bin/env bash',                           '# bash: shebang: debugging: set -x; stop on error: set -e'],
['bash -x script',                                '# bash: debug script'],
['mkdir -p path/dirname.0{1,2,3}',                '# bash: create 4 directories at once'],
['cp --parents -p some/path/from.ext another/path/to.ext', '# bash: automatically create "another/path" and do --preserve=mode,ownership,timestamps'],
['mv README.{text,txt} ; cp file{,.bak}',         '# bash: mv README.text README.txt ; cp file file.bak'],
['./command.sh 2&gt;&amp;1 | tee command.log',    '# bash: redirect stderr (2) to stdout (1) and save it to command.log'],
['date +"%Y-%m-%d_%H-%M-%S"',                     '# bash: get date (timestamp) in a given format'],
['du -h --exclude=patten /path/to/dir',           '# bash: du: size of /path/to/dir with subdirectories, excluding files with given pattern'],
['du -s',                                         '# bash: du: summarize size'],
['(cd /path/to/dir && ls)',                       '# bash: jump to /path/to/dir execute command and jump back'],
['time read',                                     '# bash: stop-watch; ctrl-d to stop'],
['Ctrl-u ... Ctrl-y',                             '# bash: type partial cmd, kill this cmd, check something you forgot, yank the cmd, resume typing'],
['Ctrl-\] Enter quit Enter',                      '# telnet: terminate session'],
['echo "Date is: $(date +%D)"',                   '# bash: avoid backticks'],
['echo "!!" > foo.sh',                            '# bash: create a script from last executed cmd'],
['pidof process-name',                            '# bash: find process-IDs belonging to processName'],
['kill $(pidof processName)',                     '# bash: find and kill processIDs belonging processName'],

['wget http://server/fileX.ext -O path/to/fileY.ext',   '# wget: download fileX.txt and save it under different location / name'],
['curl -O http://server/fileX.txt > path/to/fileY.txt', '# curl: download fileX.txt and save it under different location / name'],
['curl ifconfig.me/ip/host/ua/port/',                   '# curl: net: ask http://ifconfig.me about myself (ua: User Agent)'],

['&nbsp;','&nbsp;'],

['diff -rq dirA dirB | sort',                     '# diff: recursively compare dirA with dirB; show only filenames: -q (quiet)'],
['sdiff file1 file0',                             '# diff: outputs the files in two columns, side by side, separated by spaces'],

['gvim $(find . -name "*fileToSearch*")',                                       '# find: find files and open them in gvim'],
['find ./ foo/ bar/ -name "*fileToSearch*"',                                    '# find: search for *fileToSearch* in multiple directories'],
['find . -name *.properties -exec grep -lir ".*textToFind.*" \'{}\' \; -print', '# find: '],
['find . ... -print -quit',                                                     '# find: quit search after finding 1st match'],
['find /src -iname \'*.xml\' -exec cp \\{\\} /dst/ \\;',                        '# bash: find: flatteb xml-files from src-subdirs to dst, forks off a new cp-process for every file'],
['find . -type d -name "dirname"',                                              '# bash: find: directories called dirname'],
['find . -not -path \'*/\.*\'',                                                 '# find: skip hidden files and dirs'],
['find . -type f \( -name "*.xml" -or -name "*.txt" \)',                        '# find: files filtered by multiple extensions'],
['find . -executable -type f',                                                  '# find: find executable files'],

['&nbsp;','&nbsp;'],

['grep -Fx -f file1 file2',                                                     '# grep: intersection between two files'],
['grep --before-context=2 --after-context=4 textToFind',                        '# grep: search for textToFind and print 2/4 lines before/after matching line'],
['grep -B 2 -A 4 textToFind',                                                   '# grep: search for textToFind and print 2/4 lines before/after matching line'],
['grep -lir "textToFind" *',                                                    '# grep: print only file-names'],
['grep textToFind * | cut -f1 -d:',                                             '# grep: print only filenames of the files containing \'textToFind\''],
['grep -i -n "textToFind" *',                                                   '# grep: print line numbers'],
['grep --exclude=.git',                                                         '# grep: '],
['grep --exclude=.git -lir \'textToFind\' *.properties',                        '# grep: '],
['grep -lir "textToFind" $(find . -name *.properties)',                         '# grep: find: '],
['grep -lir "textToFind" $(find . -name *.properties -and -not -name .git/)',   '# grep: find: do not search in the .git directory'],

['&nbsp;','&nbsp;'],

['git filter-branch -f --env-filter "GIT_AUTHOR_NAME=\'Bost\'; GIT_AUTHOR_EMAIL=\'thebost@gmail.com\'; GIT_COMMITTER_NAME=\'Bost\'; GIT_COMMITTER_EMAIL=\'thebost@gmail.com\';" HEAD', '# git: change the name and email in all commits'],

['&nbsp;','&nbsp;'],

['git remote add upstream https://github.com/octocat/Spoon-Knife.git', '# git: assigns the original repo to a remote repo called \'upstream\''],
['git remote show upstream',                      '# git: show upstream branches and other info'],
['git fetch upstream branch1 branch2',            '# git: '],
['git branch -rd public/whatever',                '# git: delete a remote-tracking branch from local repository'],
['git push origin --delete branchName',           '# git: delete a remote branch'],
['git diff localBranch remoteBranch filepath',    '# git: diff file against remote branch'],
['git diff master branch filepath',               '# git: diff file between two branches'],
['git diff --name-only master branch',            '# git: show files changed between two branches/commits'],
['git diff --word-diff / --cached',               '# git: show particular changed word / staged changes'],
['git show --name-only',                          '# git: show files changed in last commit'],
['git show :/query',                              '# git: search through the gitlog'],
['git show ff0011:file.txt',                      '# git: show content of file.txt in commit ff0011'],
['git show :0:file / :1:file / :2:file / :3:file','# git: show content of file in stage area (index) / common ancestor / target on the current branch where I am / the one I am bringing in'],
['git checkout BRANCH -- /path/file.txt',         '# git: copy file from a BRANCH to /path/file.txt'],
['git status -sb',                                '# git: --show --branch: show current branch and changes made since last commit'],
['git add -p',                                    '# git: --patch: interactively choose hunks of patch; see \'--interactive\''],
['git commit --amend --no-edit',                  '# git: amend commit; reuse commit message'],
['git reflog',                                    '# git: a kind of \'git history\''],
['git shortlog -s -n',                            '# git: list contibutors'],
['git config --global user.name "Bost"',          '# git: '],
['git config --global user.email thebost@gmail.com','# git: '],
['git config --global help.autocorrect 1',        '# git: help with typos like \'git comit\''],
['git config --global rerere.enabled 1',          '# git: rebase: remember actions on a particular commit - in case of repeating conflicts when rebasing; long running branches'],
['.git/config: url = https://Bost@github.com/Bost/dotfiles.git', '# git: github: do not ask for username'],
['git log -S\'text-to-search\'',                  '# git: search entire commit history'],
['git log --pretty=format:\'%h %s\'',             '# git: show formated commit logs'],
['git log --oneline --graph',                     '# git: a kind of \'gitk --all\''],
['git log --oneline --grep="pattern"',            '# git: '],
['git log --follow --name-only --format=\'%H\' -- path/to/file',     '# git: list all commits for a specific file'],
['git --git-dir=path/to/.git --work-tree=path/to/ ...',              '# git: set git base directory and working tree'],
['git rm --cached path/to/file && echo "path/to/file" > .gitignore', '# git: ignore previously tracked path/to/file'],

['git config branch.master.remote origin',           '# git: Use it in case of "You asked me to pull without telling me which branch ..."'],
['git config branch.master.merge refs/heads/master', '# git: '],
['git config core.fileMode false',                   '# git: cygwin: ignore chmod changes'],
['git ls-tree branchName path/to/file',              '# git: list the contents of a tree object; like ls -a'],
['git ls-files --cached / --deleted / --modified / --ignored / --stage', '# git: show info about files in the index and the working tree'],

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

['cvs log file.java',                             '# cvs: version and tags'],
['cvs status -v file.java',                       '# cvs: version and tags'],

['&nbsp;','&nbsp;'],

['ssh-keygen',                                    '# github: ssh: '],
['cat ~/.ssh/id_rsa.pub',                         '# github: now copy-paste the ~/.ssh/id_rsa.pub to github under "Account settings / SSH keys / Add another public key"'],

['METADA_CORE=.metadata/.plugins/org.eclipse.jdt.core;',                '# eclipse: '],
['rm -rf .metadata/.plugins/org.eclipse.core.resources/.history;',      '# eclipse: clean history'],
['rm $METADA_CORE/*.index $METADA_CORE/savedIndexNames.txt;',           '# eclipse: clean metadata'],
['[\\t ]+$',                                                            '# eclipse: use this in find-replace dialogue to remove trailing whitespaces'],

['&nbsp;','&nbsp;'],

['shutdown /l /f',                                                                 '# windows: command line: logoff and force'],
['net use',                                                                        '# windows: net: list mapped network drives'],
['net use P: \\\\server\\path',                                                    '# windows: net: map P: as a network drive for \\\\sever\\path'],
['net use P: /delete',                                                             '# windows: net: unmap P:'],
['netstat -a | find "LISTENING"',                                                  '# windows: open ports'],
['setx NAME value /m',                                                             '# widows: set system variable system-wide'],

['netstat -lnptu',                                                                 '# linux: open ports'],
['db2cmd -i -w db2clpsetcp',                                                       '# db2: init environment'],
['echo %DB2CLP%',                                                                  '# db2: windows: '],
['db2 get connection state',                                                       '# db2: '],
['db2 CATALOG TCPIP NODE $node_name REMOTE $ip_addr SERVER $port',                 '# db2: '],
['db2 CATALOG DATABASE $database_name AT NODE $node_name AUTHENTICATION server',   '# db2: '],
['db2 UNCATALOG NODE $node_name',                                                  '# db2: '],
['db2 UNCATALOG DATABASE $database_name',                                          '# db2: '],
['db2 TERMINATE',                                                                  '# db2: '],
['db2 list db directory &gt; db.txt | gvim db.txt',                                '# db2: '],
['db2 list node directory &gt; node.txt | gvim node.txt',                          '# db2: '],
['db2 list tables',                                                                '# db2: '],
['db2 -vf script.sql -t / !db2 -vf script.sql -t;',                                '# db2: execute script.sql from normal / command line processor (=>) shell'],
['db2 select * from DBASE.TABLE fetch first 2 rows only',                          '# db2: in mysql: limit N'],

['mysql -u root -t < script.sql',                                                  '# mysql: execute script.sql as the root user'],
['mysql select * from mantis.state_mantis_id limit 10',                            '# mysql: in db2 fetch first N rows only'],
['mysql show tables in dbaseName',                                                 '# mysql: '],
['mysql show columns in tableName',                                                '# mysql: describe table'],
['/usr/bin/mysqld_safe &amp;',                                                     '# mysql: cygwin: server start'],
['@C:\\path\\to\\script.sql',                                                      '# oracle: execute script.sql'],


['&nbsp;','&nbsp;'],

['last',                                                                '# linux: last logged-in users'],
['lscpu',                                                               '# linux: info about CPU architecture'],
['renice',                                                              '# linux: alter priority of running processes'],
['lsb_release -a',                                                      '# linux: show (ubuntu) version'],

['sudo apt-get update && sudo apt-get upgrade',                         '# linux: ubuntu: command line upgrade part 1.'],
['sudo do-release-upgrade',                                             '# linux: ubuntu: command line upgrade part 2.'],
['',                                                                    '# linux: ubuntu: see /usr/share/update-notifier/notify-reboot-required after update / upgrade'],

['sudo restart lightdm / gdm / kdm',                                    '# linux: ubuntu: (ubuntu 11.10 or later), gnome or KDE'],
['sudo touch /forcefsck',                                               '# linux: run fsck on next reboot'],
['sudo apt-get remove --purge $(dpkg -l \'linux-image-*\' | sed \'/^ii/!d;/\'"$(uname -r | sed "s/\(.*\)-\([^0-9]\+\)/\1/")"\'/d;s/^[^ ]* [^ ]* \([^ ]*\).*/\1/;/[0-9]/!d\')',
                                                                        '# linux: remove old kernels'],
['&nbsp;','&nbsp;'],

['sha1sum -c file.sha1',                                                '# sha1: read SHA1 sums from the file.sha1 and check them'],
['/usr/bin/digest -a sha1',                                             '# solaris: sha1 checksum'],
['/usr/sfw/bin/wget',                                                   '# solaris: wget'],
['/usr/ucb/ps -auxww',                                                  '# solaris: ps: full command line (needs: sudo rootsh -i -u ... )'],
['psrinfo',                                                             '# solaris: displays information about processors'],
['jar tf file.jar',                                                     '# jar: list files in file.jar'],
['jar xf file.jar path/inside.txt && cat path/inside.txt',              '# jar: extract inside.txt from file.jar and show its content. inside.txt stays extracted'],
['unzip -p file.jar path/inside.txt',                                   '# jar: unzip: show content of a file inside a file.jar'],
['notify-send "Hello World"' ,                                          '# xfce: ubuntu: desktop notification'],
['xfce4-keyboard-settings' ,                                            '# xfce: keyboard'],
['gnome-session-quit / xfce4-session-logout',                           '# xfce: gnome: logout'],
['rm -r ~/.cache/sessions',                                             '# xfce: execute this when the title bar dissapears from xfwm4'],
['man -k abc',                                                          '# man: search man pages for abc'],
['ssh user@host cat /path/to/remotefile | diff /path/to/localfile -',   '# ssh: compare a remote file with a local file'],
['$ssh-copy-id user@host',                                              '# ssh: copy ssh keys to user@host to enable password-less ssh logins'],
['sshfs name@server:/path/to/folder /path/to/mount/point',              '# ssh: mount folder/filesystem through SSH. Install SSHFS from http://fuse.sourceforge.net/sshfs.html. Will allow you to mount a folder security over a network'],
['sudo mount -t vboxsf share /home/username/share/',                    '# virtualbox: mount shared folder'],

['xmllint',                                                             '# xml: command line XML tool (formating)'],
['lein deps :tree',                                                     '# lein: show leiningen dependency tree'],
['cd $LIGHTTABLE/deploy/plugins/ && lein new lt-plugin my-plugin',      '# lein: create lighttable plugin'],
['[the-dependency "X.Y.Z" :exclusions [org.clojure/clojure]]',          '# lein: try to put it to project.clj in case of \'Could not locate clojure/instant__init.class or clojure/instant.clj on classpath\''],
['(keys (ns-publics \'ws.core))',                                       '# clj: show objects in the namespace'],
['(map #(ns-unmap *ns* %) (keys (ns-interns *ns*)))',                   '# clj: clean the repl'],
['(load-file "src/ws/core.clj")',                                       '# clj:'],
['(clojure.repl/doc something)',                                        '# clj: documentation of something'],

['ldd -v $(which vim)',                                                 '# linux: shared library dependencies'],
['readelf -v $(which vim)',                                             '# linux: info about ELF files'],
['dpkg --get-selections',                                               '# dpkg: show installed packages'],
['dpkg -L packageName',                                                 '# dpkg: list of installed files from a packageName (dpkg-query -L works too)'],
['dpkg --install / --remove package.deb',                               '# dpkg: install / remove package.deb'],
['apt-cache search ^packageName$',                                      '# dpkg: apt: show description for packageName'],
['aptitude show packageName',                                           '# dpkg: apt: show description for packageName'],
['software-properties-gtk' ,                                            '# linux: ubuntu: apt: Software Sources List editors; TODO see y-ppa-manager, http://repogen.simplylinux.ch/'],
['dpkg --get-selections | grep -v deinstall',                           '# dpkg: list installed packages; no sudo needed; TODO see --clear-selection --set-selection'],
['aptitude search \'~i!~M\'',                                           '# aptitude: list expressly installed packages (not just installed as dependencies)'],

['&nbsp;','&nbsp;'],

['ps --windows',                                                                               '# cygwin: ps: show windows as well as cygwin processes (-W)'],
['cygpath -w filename',                                                                        '# cygwin: bash: print windows form of filename'],
['apt-cyg --mirror http://ftp-stud.hs-esslingen.de/pub/Mirrors/sources.redhat.com/cygwin/x86', '# cygwin: command-line installer'],
['cygpath -u filename',                                                                        '# cygwin: bash: print unix form of filename'],

['zip -r /path/to/file.zip /path/to/dir',                               '# zip: zip content of /path/to/dir to /path/to/file.zip'],
['unzip /path/to/file.zip -d /path/to/extract-dir',                     '# zip: unzip: '],
['tar czf /path/to/tarfile.gz file0 file1',                             '# tar: '],
['tar xzf /path/to/tarfile.gz',                                         '# tar: untar: '],
['gzip -l file.gz',                                                     '# gzip: list compressed, uncompressed size, compression ratio etc.'],

['uniq',                                                                '# bash: report or omit repeated lines'],
['sort myfile.txt | uniq',                                              '# bash: sort and remove duplicate lines'],

['&nbsp;','&nbsp;'],

['View > Layout > Columns:2',                                           '# sublime: vertical split'],
['Tools > SublimeREPL > Clojure > Clojure',                             '# sublime: open clojure REPL'],
['C-,s / C-,f / C-,l / C-,b',                                           '# sublime: evaluate selection / file / line / block in REPL'],
['mtr google.com',                                                      '# ping: traceroute: '],
['dig +short txt keyword.wp.dg.cx',                                     '# bash: query wikipedia for keyword'],
['netstat -tulnp',                                                      '# net: listening ports and PIDs of associated processes. tcp (-t) udp (-u)'],
['crontab -e / crontab -l',                                             '# crontab: edit / view entries'],
['acpi -V',                                                             '# linux: show everything (battery info etc); Advanced Configuration and Power Interface'],
['xbacklight -set 10 / -inc 10 / -dec 10',                              '# linux: set / increase / decrease display brightness'],
['sudo powertop',                                                       '# linux: power consumption / management diagnosis tool'],
['gpsbabel -i kml -f in.kml -o gpx -F out.gpx',                         '# gps: convert kml to gps'],

['&nbsp;','&nbsp;'],

['iconv -f IBM-1047 -t ISO8859-1 ebcdic.file &gt; ascii.file',          '# IBM USS OS/390: ebcdic / ascii conversion'],
['iconv -f ISO8859-1 -t IBM-1047 ascii.file &gt; ebcdic.file',          '# IBM USS OS/390: ebcdic / ascii conversion'],
['iconv -l',                                                            '# IBM USS OS/390: ebcdic / ascii conversion: list all code pages'],

/*
* TODO disable mysql daemon from autostart

* TODO add this:
git remote add --track develop upstream https://github.com/Lokaltog/powerline.git

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

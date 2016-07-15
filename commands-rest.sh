#!/bin/bash
exit 1

# deb: apt: ppa: only 64bit packages
deb [arch=amd64] http://...

# usb: drive: drives: disc: discs: list block devices
lsblk

# usb: drive:
mount | grep gvfs; cd ...

# pdf: view file.pdf
evince file.pdf

# net:
service network-manager restart

# net: ubuntu: proxy definition
/etc/environment

# net: grouping bandwidth per process; "net top"
sudo nethogs wlan0

# download and import gnu-keyring
wget http://ftp.heanet.ie/mirrors/gnu/gnu-keyring.gpg && gpg --import gnu-keyring.gpg

# wget:
wget --limit-rate=20k http://www-ftp.lip6.fr/pub/linux/distributions/Ubuntu/releases/15.04/ubuntu-15.04-desktop-amd64.iso

# verify file
gpg --verify file.sig file

# fs: number of inodes; every file or directory requires 1 inode
df -i

# net: linux: windows: show or set the system\'s host name
hostname -i

# mplayer: reset/+/- speed by 10% / toggle OSD states
backspace / \] / \[ / o

# mplayer: volume +/-
* / "/"

#
ps2pdf

# xserver: modifying keymaps and pointer button mappings in X
xmodmap

# xserver: print XKB keyboard description to file in ps-format
xkbprint :0

#
javaws start.jnlp

# disassemble file.class (bytecode)
javap file.class / javap -p -s file.class

# ubuntu: change default java environment
sudo update-alternatives --config java

# dpkg:
sudo add-apt-repository ppa:webupd8team/java && sudo apt-get update

# java:
sudo apt-get install openjdk-8-jdk / sudo apt-get install oracle-java8-set-default

#
ls --format=single-column

# list only directories, 1 entry per line
ls -d1 */

# count of files in /path/to/dir
ls -1 /path/to/dir | wc -l

# show full paths (alias lff)
ls -lrt -d -1 $PWD/{*,.*}

# line count, word count
wc cheatsheet.html

# list of current traps; shell function responding to HW / other signals
trap

# delete /tmp/xyz$$ on shell exit / shell error
trap "rm -f /tmp/xyz$$; exit" ERR EXIT

# fist / last 5 lines from file
head -n 5 file / tail -n 5 file

# available shells
cat /etc/shells

# sequence from 0 to 10 (both included) increment by 2
seq 0 2 10

# duplicate files in a given set of directories
fdupes -r .

# clipboard: show normal clipboard content
xsel --clipboard

# clipboard: pipe to / from clipboard
cat file > /dev/clip / cat /dev/clip

# clipboard: wait for 10 pastings of the content file.ext to x-clipboard and quit
xclip -loops 10 -verbose file.ext

# clipboard: put "test" to x-clipboard / put x-clipboard content to file.ext
echo "test" | xclip / xclip -o > file.ext

# remove a line from shell history (i.e. password); ~/.bash_history | ~/.config/fish/fish_history
history -d

# run a cmd only when load average is below a certain threshold (default is 0.8)
echo "rm -rf /unwanted-large/folder" | batch

# show bash shortcuts (including Ctrl+L, Ctrl+R); \e - ESC, \C-y - Ctrl+y
bind -P / help bind

# set mod of file1 according to file0
chmod --reference file0 file1

# remove all files except survivor.txt
rm -f !(survivor.txt)

# insert autocompletition result (use together with other progs)
Esc *

# alias: escape command aliases
\\\[command\]

# get the argument of the last command. see: bind -P
Alt-. / Esc-.

# at: batch: execute a command at a given time
echo "ls -l" | at midnight

# echo with formating
printf "Line: %05d %15.3f Result: %+15d\n" 1071 3,14156295 32589

# at: batch: run script.sh 1 hour / 30 minutes from now
at -f script.sh now + 1 hour / 30 min

# set vi bindings
set -o vi

# set -o noglob (disable pathname expansion - globbing) / set -o verbose / set -o xtrace
set -f / -v / -x

# python: high-level file operations
import shutil

# args: run the last command as root
sudo !!

# real and effective user and group IDs
id user

# get ip address from domain
nslookup www.google.com | tail -2 | head -1 | awk "{print $2}"

# scripting: loc_variable - visible only within given code block
local loc_variable=value

# args: function arguments
$*

# args: all arguments of the last command
!*

# args: all arguments
$@

# args: count of arguments
$$

# exit code (return value / retcode) of the last command (0: success) e.g. adduser joe; echo $?
$?

# build-in commands
$-

# last argument of the previous command. At the shell startup, it gives the absolute filename of the shell script being executed
$_

# args: last argument of the last command
!$

# process ID of the most recently executed background process
$!

# process ID of the shell
$$

# the cmd takes x and y as if they were pressed during its execution
(echo x; echo y) | cmd

# eval expression
echo $[22 + 33]

# args: last command without the last argument
!:-

# bash: empty file.txt
> file.txt

# bash: insert contents of file.txt into input of tr and output results to fileNew.txt
tr \'[A-Z]\' \'[a-z]\' < file.txt > fileNew.txt

# bash: mass move/copy/rename
mmv \*.JPG \#1.jpc
mmv \* \#1.rexx

# bash: visual calender for februar 2004 / whole year 2004
cal 2 2004 / cal -y 2004

# bash: ? define function in bash ?
d() { date; }

# bash: bash history, abort history
C-r, C-g

# bash: shebang: stop the script after any error
#!/bin/bash -e

# bash: shebang: debugging: set -x; stop on error: set -e
#!/usr/bin/env bash

# bash: debug script
bash -x script

# bash: make block or character special files
mknod

# bash: create 4 directories at once
mkdir -p path/dirname.0{1,2,3}

# bash: create directory tree
mkdir -p work/{d1,d2}/{src,bin,bak}

# bash: automatically create "another/path" and do --preserve=mode,ownership,timestamps
cp --parents -p some/path/from.ext another/path/to.ext

# bash: mv README.text README.txt ; cp file file.bak
mv README.{text,txt} ; cp file{,.bak}

# bash: redirect stderr (2) to stdout (1) and save it to command.log
./command.sh 2>&1 | tee command.log

# bash: fist / last 5 lines from file
head -n 5 file / tail -n 5 file

# bash: find: redirect: separate / combine sdterr and stdout; does not work with the tee command
./command.sh 1>str.out 2>str.err / ./command.sh &>combined.out

# bash: redirect: type in stuff and wait unit EOF gets typed
cat >>EOF

# bash: get date (timestamp) in a given format
date +"%Y-%m-%d_%H-%M-%S"

# free and used memory in the system / file (filesystem) status
free -h / stat FILE

# join lines of two files on a common field
join

# size of /path/to/dir with subdirs, exclude files matching pattern
du -h --exclude=pattern /path/to/dir

# summarize size of dir
du -s dir / du -sh dir

# jump to /path/to/dir execute command and jump back
(cd /path/to/dir && ls)

# stop-watch; ctrl-d to stop; measure execution time; or try to install stopwatch
time read

# type partial cmd, kill this cmd, check something you forgot, yank the cmd, resume typing
Ctrl-u ... Ctrl-y

# avoid backticks
echo "Date is: $(date +%D)"

# create a script from last executed cmd
echo "!!" > foo.sh

# process ID of a running program
pidof process-name

# find and kill processIDs belonging processName
kill $(pidof processName)

# telnet: terminate session
Ctrl-\] Enter quit Enter

# download fileX.txt and save it under different location / name
wget http://server/fileX.ext -O path/to/fileY.ext

# download fileX.txt and save it under different location / name
curl -O http://server/fileX.txt > path/to/fileY.txt

# net: ask http://ifconfig.me about myself (ua: User Agent)
curl ifconfig.me/ip/host/ua/port/

# show request/response headers
curl -v URL

# net: like ifconfig. state of network interfaces
ip address

# net: show / manipulate routing, devices, policy routing and tunnels
ip address show eth0

# net: routing table
ip route

# net: Address Resolution Protocol table
ip neighbour

# net: what is my IP
curl ifconfig.me

# recursively compare dirA with dirB; show only filenames: -q (quiet)
diff -rq dirA dirB | sort

# bash: sort via 2nd key (?column?)
sort -k2 file.csv

# diff: outputs the files in two columns, side by side, separated by spaces
sdiff file1 file0

# emacs find - exclude backup files
find . -type f ! -name "*~" -exec grep -nH -e "String" {} +

# find and delete empty files / dirs
find . -empty -type f -delete / find . -empty -type d -delete

# find files and open them in gvim
gvim $(find . -name "*fileToSearch*")

# search for *fileToSearch* in multiple directories
find ./ foo/ bar/ -name "*fileToSearch*"

#
find . -name *.properties -exec grep -lir ".*String.*" \'{}\' \; -print

# quit search after finding 1st match
find . ... -print -quit

# bash: flatteb xml-files from src-subdirs to dst, forks off a new cp-process for every file
find /src -iname \'*.xml\' -exec cp \\{\\} /dst/ \\;

# bash: directories called dirname
find . -type d -name "dirname"

# skip / exclude hidden files and dirs
find . -not -path "*/\.*"

# skip / do not search in "*path/to/exclude*"
find . -not -path "*path/to/exclude*"

# files filtered by multiple extensions
find . -type f -name "*.xml" -or -name "*.txt"

# find executable files
find . -executable -type f

# colorize grep in less
grep --color=always pattern file | less -R

# lines containing any upper character
grep "[[:upper:]]" file

# intersection between two files
grep -Fx -f file1 file2

# search for "String" and print 2/4 lines before/after matching line
grep -B 2 -A 4 "String" / grep --before-context=2 --after-context=4 "String"

# print only file-names
grep -lir "String" *

# print only filenames of the files containing "String"
grep "String" * | cut -f1 -d:

# print line numbers
grep -i -n "String" *

# find: search for "String" in *.txt
grep -r "String" --include=*.txt .

# search for "String" in *.txt files (with spaces in filenames)
find . -type f -name "*.txt" -print0 | xargs -0 grep -l "String"

#
grep --exclude=.git

#
grep --exclude=.git -lir "String" *.properties

#
grep --exclude-dir={dir1,dir2} /path/to/dir -lir "Text" "*.ext"

#
grep -lir "String" $(find . -name *.properties)

# do not search in the .git directory
grep -lir "String" $(find . -name *.properties -and -not -name .git/)

# zgrep: search possibly compressed files for a regular expression
zgrep foo myfile.gz / zgrep \'GET /blog\' access_log.gz

# bash: mv: move content of a directory within another directory with the same folders
rsync --archive --remove-source-files backup/ backupArchives/

# bash: cvs: copy files from src to desc excluding everything in CVS directories (showing progress)
rsync --archive --verbose --exclude=CVS src dest
rsync --progress --archive --verbose --exclude=CVS src dest

#
sudo /etc/init.d/cvsd restart / start / stop / status

# diff tagX tagY
cvs diff -r tagX -r tagY

# get clean copy
cvs update -C path/to/file.ext

# get revision 1.11
cvs update -P -C -r 1.11 path/to/file.ext

# checkout module from branch or tag
cvs checkout -r branchOrTag module

# update file
cvs log    -P -d path/to/file.ext

# reminder to leave in 15 minutes / at 13:55
leave +15 / leave 1355

# delete NormalTag from file.ext in version 1.17
cvs tag    -d -r 1.17 NormalTag path/to/file.ext

# delete BranchTag from file.ext in version 1.17
cvs tag -B -d -r 1.17 BranchTag path/to/file.ext

# move   BranchTag to   file.ext in version 1.19
cvs tag -B -F -r 1.19 BranchTag path/to/file.ext

# create BranchTag on   file.ext in version 1.19
cvs tag -b    -r 1.19 BranchTag path/to/file.ext

# move   NormalTag to   file.ext in version 1.63
cvs tag    -F -r 1.63 NormalTag path/to/file.ext

# version and tags
cvs log file.ext

# version and tags
cvs status -v file.ext

# debug and trace info
cvs -d cvs -t -d :pserver:faizal@localhost:/myrepos ci -m "test" -l "src/foo/Foo.ext"

# linux: system information (kernel version etc.)
uname -a

# github: ssh:
ssh-keygen

# github: now copy-paste the ~/.ssh/id_rsa.pub to github under "Account settings / SSH keys / Add another public key"
cat ~/.ssh/id_rsa.pub

# eclipse:
METADA_CORE=.metadata/.plugins/org.eclipse.jdt.core;

# eclipse: clean history
rm -rf .metadata/.plugins/org.eclipse.core.resources/.history;

# eclipse: clean metadata
rm $METADA_CORE/*.index $METADA_CORE/savedIndexNames.txt;

# eclipse: use this in find-replace dialogue to remove trailing whitespaces
[\\t ]+$

# eclipse: Type syso/sysout and ctrl + space for System.out.println()
syso/sysout

# eclipse: Jump to next error
Ctrl-.

# windows: command line: logoff and force
shutdown /l /f

# windows: net: list mapped network drives
net use

# windows: net: map P: as a network drive for \\sever\path
net use P: \\server\path

# windows: net: unmap P:
net use P: /delete

# windows: open ports
netstat -a | find "LISTENING"

# windows: set system variable system-wide
setx NAME value /m

# windows: save system info
msinfo32 /report msinfo32.txt

# windows: batch: line continuation
^

# windows: save system info
systeminfo /s srvmain /u maindom\hiropln /p p@ssW23 /fo table

# windows: Windows Management Instrumentation Command-Line (WMIC)
wmic /?

# init environment
db2cmd -i -w db2clpsetcp

# db2: license info / add license
db2licm -l / db2licm -a db2conpe.lic

# db2: windows:
echo %DB2CLP%

#
db2 CONNECT TO database USER userID USING password

#
db2 get connection state

#
db2 CATALOG TCPIP NODE $node_name REMOTE $ip_addr SERVER $port

#
db2 CATALOG DATABASE $database_name AT NODE $node_name AUTHENTICATION server

#
db2 UNCATALOG NODE $node_name

#
db2 UNCATALOG DATABASE $database_name

#
db2 TERMINATE

#
db2 list db directory > db.txt | gvim db.txt

#
db2 list node directory > node.txt | gvim node.txt

#
db2 list tables

# execute script.sql from normal / command line processor (=>) shell
db2 -vf script.sql -t / !db2 -vf script.sql -t;

#
db2 -tvf script.sql -z file.log

# execute script.sql from normal shell (Befehlsfenster)
db2 -td; -v -f script.sql

# in mysql: limit N
db2 select * from DBASE.TABLE fetch first 2 rows only

# error description for sqlcode=-302
db2 ? sql302

# execute script.sql as the root user
mysql -u root -t < script.sql

# in db2 fetch first N rows only
mysql select * from mantis.state_mantis_id limit 10

#
mysql show tables in dbaseName

# describe table
mysql show columns in tableName

# mysql: cygwin: server start
/usr/bin/mysqld_safe &

# oracle: execute script.sql
@C:\path\to\script.sql

# linux: Execute a command as another user
pkexec

# linux: systemd: Control the systemd system and service manager
systemctl

# linux: systemd: Control the systemd login manager
loginctl

# linux: last logged-in users
last

# linux: info about CPU architecture
lscpu

# linux: CPU architecture 32/64 bit
getconf LONG_BIT

# find and delete *.jar and *.class when idling
ionice -c3 find . -name "*.jar" -or -name "*.class" -delete

# linux: change the priority of process 2222 to minimum (-19 max, +20 min prio)
renice +20 2222

# linux: ps: show statistics for a process nr. 7695
ps -o pid,user,command,nice -p 7695

# linux: show (ubuntu) version
lsb_release -a

# linux: ubuntu: when "you may need to re-run your boot" appears
sudo update-grub

# withouth "sudo", download source PACKAGE to current directory
apt-get source PACKAGE

# Advanced Package Tool
apt

#
sudo apt-get install --reinstall PACKAGE

# linux: ubuntu: command line upgrade part 1. (CLI alternative to update-manager)
sudo apt-get update; and sudo apt-get upgrade
sudo apt update; and sudo apt upgrade

# update and upgrade the system by removing/installing/upgrading packages
sudo apt update; and sudo apt full-upgrade

# linux: ubuntu: command line upgrade part 2.
sudo do-release-upgrade

# linux: ubuntu: see /usr/share/update-notifier/notify-reboot-required after update / upgrade

# linux: ubuntu: (ubuntu 11.10 or later), gnome or KDE
sudo restart lightdm / gdm / kdm

# linux: run fsck on next reboot
sudo touch /forcefsck

# linux: remove old kernels
sudo apt-get remove --purge $(dpkg -l 'linux-image-*' | sed '/^ii/!d;/'"$(uname -r | sed "s/\(.*\)-\([^0-9]\+\)/\1/")"'/d;s/^[^ ]* [^ ]* \([^ ]*\).*/\1/;/[0-9]/!d')

# for tabular data
awk

# sed: print file content between lines 10 and 20 / print 5th line
sed -n "10,20p" file / sed -n 5p file

# sed: replace 1 occurence of "foo" in file.old; must be done in 2 steps with the mv; otherwise the file.old is empty
sed "s/foo/FOO/" <file.old >file.new; mv file.{old,new}

# sed: ascii: ebcdic: fix new lines and empty chars; \x85 - hexadecimal char
sed "s/\x85/\n/g" <log.txt >log.nl.txt; sed "s/\x85/\n/g" <log.nl.txt >log.nl.00.txt

# Show numerical values for each of the 256 colors in ndbash
for code in {0..255}; do echo -e "\e[38;05;${code}m $code: Test"; done

# sha1: read SHA1 sums from the file.sha1 and check them
sha1sum -c file.sha1

# solaris: sha1 checksum
/usr/bin/digest -a sha1

# win: checksum [HashAlgorithm] must be uppercased
CertUtil -hashfile fileName SHA1
CertUtil -hashfile pathToFile [HashAlgorithm]

# solaris: wget
/usr/sfw/bin/wget

# solaris: ps: full command line (needs: sudo rootsh -i -u ... )
/usr/ucb/ps -auxww

# solaris: displays information about processors
psrinfo

# solaris: net: ipconfig
/usr/sbin/ifconfig -a

# jar: jarsigner: keytool: jnlp: javaws:
jarsigner -storepass PASSW -keystore ~/.keystore FILE mykey

# jar: jarsigner: keytool: jnlp: javaws:
keytool -genkeypair / keytool -list

# list files in file.jar
jar tf file.jar

# extract inside.txt from file.jar and show its content. inside.txt stays extracted
jar xf file.jar path/inside.txt && cat path/inside.txt

# jar: unzip: show content of a file inside a file.jar
unzip -p file.jar path/inside.txt

# jar: unzip: show content of META-INF/MANIFEST.MF
unzip -p file.jar META-INF/MANIFEST.MF

# list content of file.zip
unzip -lv file.zip

# unzip: extract specific folder from a zip file to a given directory
unzip file.zip 'folderToExtract/*' -d dest/path

# search for File.class in jar files
find . -name "*.jar" | xargs grep File.class

# xfce: ubuntu: popup: message: desktop notification
notify-send "Hello World"

# xfce: keyboard
xfce4-keyboard-settings

# xfce: gnome: logout
gnome-session-quit / xfce4-session-logout

# restart xfce when the title bar dissapears from xfwm4; or rm -r ~/.cache/sessions
pkill -KILL -u yourusername

# xfce: launcher: emacs uses bash variables; -i interactive shell, -c read following command
bash -i -c /path/to/emacs

# search man pages for "topic"
man -k topic / apropos -r topic

# brief description of CMD / help for shell built ins
whatis CMD / help

# ssh: compare a remote file with a local file
ssh user@host cat /path/to/remotefile | diff /path/to/localfile -

# ssh: copy ssh keys to user@host to enable password-less ssh logins
$ssh-copy-id user@host

# ssh: mount folder/filesystem through SSH. Install SSHFS from http://fuse.sourceforge.net/sshfs.html. Will allow you to mount a folder security over a network
sshfs name@server:/path/to/folder /path/to/mount/point

# virtualbox: mount shared folder
sudo mount -t vboxsf share /home/username/share/

# youtube-dl: Requested formats are incompatible for merge and will be merged into mkv.
youtube-dl -f bestvideo[ext=mp4]+bestaudio[ext=m4a] URL

# mounted filesystems - nice layout
mount | column -t

# xml: command line XML tool (formating)
xmllint

# linux: shared library dependencies
ldd -v $(which vim)

# linux: info about ELF files
readelf -v $(which vim)

# show installed packages
dpkg --get-selections

# list of installed files from a packageName (dpkg-query -L works too)
dpkg -L packageName

# install / remove package.deb
dpkg --install / --remove package.deb

# dpkg: apt: show description for packageName
apt-cache search ^packageName$

# dpkg: apt: description of PACKAGE
apt-cache show PACKAGE / aptitude show PACKAGE

# dpkg: apt: solution for Hash sum mismatch error
sudo rm -rf /var/lib/apt/lists; sudo mkdir -p /var/lib/apt/lists/partial; sudo apt-get clean

# linux: ubuntu: apt: Software Sources List editors; see y-ppa-manager, http://repogen.simplylinux.ch/
software-properties-gtk - see /etc/apt/sources.list

# list installed packages; no sudo needed; TODO see --clear-selection --set-selection
dpkg --get-selections | grep -v deinstall

# aptitude: list expressly installed packages (not just installed as dependencies)
aptitude search \'~i!~M\'

# cygwin: ps: show windows as well as cygwin processes (-W)
ps --windows

# cygwin: bash: print windows form of filename
cygpath -w filename

# cygwin: command-line installer
apt-cyg --mirror http://ftp-stud.hs-esslingen.de/pub/Mirrors/sources.redhat.com/cygwin/x86

# cygwin: bash: print unix form of filename
cygpath -u filename

# zip: zip content of /path/to/dir to /path/to/file.zip; --recurse-paths is -r
zip --recurse-paths --encrypt /path/to/file.zip /path/to/dir

# zip: unzip:
unzip /path/to/file.zip -d /path/to/extract-dir

# tar:
tar czf /path/to/tarfile.gz file0 file1

# tar: untar:
tar xzf /path/to/tarfile.gz

# Remove all files previously extracted from a tar(.gz) file
tar -tf file.tar.gz | xargs rm -r

# gzip: list compressed, uncompressed size, compression ratio etc.
gzip -l file.gz

# bash: report or omit repeated lines
uniq

# bash: sort and remove duplicate lines
sort myfile.txt | uniq

# networking: ping: traceroute: - check connection
mtr google.com
ethtool eth0
ip neigh show | grep REACHABLE
ip link show

# networking: DNS lookup
host google.com

# bash: query wikipedia for keyword
dig +short txt keyword.wp.dg.cx

# net: listening ports and PIDs of associated processes. tcp (-t) udp (-u)
netstat -tulnp

# net: linux: socket statistics; netstat replacement
ss -lp

# crontab: edit / view entries
crontab -e / crontab -l

# linux: show everything (battery info etc); Advanced Configuration and Power Interface
acpi -V

# linux: set / increase / decrease display brightness
xbacklight -set 10 / -inc 10 / -dec 10

# linux: power consumption / management diagnosis tool
sudo powertop

# gps: convert kml to gps
gpsbabel -i kml -f in.kml -o gpx -F out.gpx

# IBM USS OS/390: ebcdic / ascii conversion
iconv -f IBM-1047 -t ISO8859-1 ebcdic.file > ascii.file

# IBM USS OS/390: ebcdic / ascii conversion
iconv -f ISO8859-1 -t IBM-1047 ascii.file > ebcdic.file

# IBM USS OS/390: ebcdic / ascii conversion: list all code pages
iconv -l

# number of processors
cat /proc/cpuinfo | grep processor | wc -l

# display information on CPU architecture
lscpu

# net: apps currently using inet
lsof -P -i -n | cut -f 1 -d " "| uniq | tail -n +2

# list open files
lsof

# list open files whose inet address matches ADDR; -t: terse output
lsof -i:[ADDR] -t

# processsor: cpu: core: cores: print the number of processing units available
nproc

# check file types and compare values
test

# tabs: convert spaces to tabs / tabs to spaces
expand / unexpand file.txt

# linux: simple GUIs
zenity, whiptail

# monitor file and network activities of a PROCESS, max printed string size 10000
strace -f -e trace=file,network -s 10000 -o outfile.log PROCESS ARGS

# trace process / library
ptrace / ltrace

#
sudo service tomcat7 stop

# net: linux: Simple Network Management Protocol
snmp

# net: packet analyser
wireshark

# ftp: toggle bash / ftp
! / exit

# ftp: connect to ipaddress and login with username
open ipaddress ENTER user username

# ftp: get file from remote computer
get file / mget file

# ftp: sends site specific commands to remote server
site

# System Information Extraction Program:
sysinfo

# fs: get extended attributes of filesystem objects (inst attr)
getfattr

# extended attributes on XFS filesystem objects
attr

# hash message authentication code
HMAC

# enterprise cryptographic filesystem for Linu
ecryptfs

# debian-goodies: show installed packages occupying the most space
dpigs

# debian-goodies: check which processes need to be restarted after an upgrade
sudo checkrestart

# start COMMAND and kill it if it is running still after 5 sec
timeout 5s COMMAND

# net: NetworkManager's general status and operations
nmcli general

# net: 1 - online; else offline
nm-online --exit; echo "retcode: $?"

# net:
nm-applet / man nmcli-examples

# net:
nmcli device disconnect wlan0

# net:
nmcli device wifi connect GAULOISES_LIBERTE_TOUJOURS ifname wlan0

# rpm: display installed packages
rpm -qa

# android:
sudo apt-get install android-tools-adb android-tools-fastboot

# root login / root console / root prompt
sudo -i

# android:
groups - check plugdev membership

# android:
adb devices; dmesg; adb logcat; adb shell

# android:
adb push SRC DST

# packages; unsupported
ubuntu-support-status --show-unsupported

# * TODO add this:
# git remote add --track develop upstream https://github.com/Lokaltog/powerline.git
# * TODO add bash file tests to the list
# FILE1 -ot FILE2: FILE1 is older than FILE2
#        -b FILE:  FILE exists and is block special
#        -c FILE:  FILE exists and is character special
#        -d FILE:  FILE exists and is a directory
#        -e FILE:  FILE exists
#        -f FILE:  FILE exists and is a regular file
#        -g FILE:  FILE exists and is set-group-ID
#        -G FILE:  FILE exists and is owned by the effective group ID
#        -h FILE:  FILE exists and is a symbolic link (same as -L)
#        -k FILE:  FILE exists and has its sticky bit set
#        -L FILE:  FILE exists and is a symbolic link (same as -h)
#        -O FILE:  FILE exists and is owned by the effective user ID
#        -p FILE:  FILE exists and is a named pipe
#        -r FILE:  FILE exists and read permission is granted
#        -s FILE:  FILE exists and has a size greater than zero
#        -S FILE:  FILE exists and is a socket
#        -t FD:    file descriptor FD is opened on a terminal
#        -u FILE:  FILE exists and its set-user-ID bit is set
#        -w FILE:  FILE exists and write permission is granted
#        -x FILE:  FILE exists and execute (or search) permission is granted

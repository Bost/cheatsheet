#!/usr/bin/env bash
exit 1 # just in case ...

# jq - Command-line JSON processor; json formatting; sed for json
echo "{\"foo\":\"bar\"}" | jq .foo

# json formatting
curl 'http://stash.compciv.org/congress-twitter/json/joni-ernst.json' \
> ernst.json; and cat ernst.json | jq '.'

# centos compile git
sudo yum clean all
sudo vim /etc/yum.com; proxy=http://<ip:port>
sudo yum update
sudo yum groupinstall 'Development Tools'
sudo yum install openssl-devel curl-devel expat-devel perl-devel asciidoc xmlto

# centos compile emacs
sudo yum install texinfo gtk2-devel gnutls-devel libtiff-devel libungif-devel \
libjpeg-devel libXpm-devel ncurses-devel

# centos compile guake
sudo yum install gnome-common GConf2-devel pytgtk2-devel python-vte-devel \
gnome-python2-gconf python-keybinder pyxdg notify-python

# cpu: mem: hdd: hardware: system information in a GTK+ window
hardinfo
sudo dmidecode
sudo lshw
cpu-x

# cpu: mem: hdd: hardware: system information for console & IRC
# -Fz filter out privacy sensitive info
inxi -Fxz

# net: troubleshooting and security testing
sudo tcpdump

# net: Extract HTTP User Agents
sudo tcpdump -nn -A -s1500 -l | egrep -i 'User-Agent:|Host:'

# net: Capture all the plaintext passwords
sudo tcpdump port http or port ftp or port smtp or port imap or port pop3 or \
port telnet -l -A | egrep -i -B5 \
'pass=|pwd=|log=|login=|user=|username=|pw=|passw=|passwd=|password=|pass:|user:|username:|password:|login:|pass |user '

# net: Extract HTTP Passwords in POST Requests
sudo tcpdump -s 0 -A -n -l | egrep -i "POST /|pwd=|passwd=|password=|Host:"

# net: Capture Cookies from Server and from Client
sudo tcpdump -nn -A -s0 -l | egrep -i 'Set-Cookie|Host:|Cookie:'

# net: Internet Control Message Protocol: send error messages and operational information
ICMP

# net: Dynamic Host Configuration Protocol: network management protocol used on TCP/IP networks
DHCP

# net: arp: Displays and modifies the IP-to-Physical address translation tables used by address resolution protocol (ARP).
arp -a

# net: arp: find the MAC address of a network neighbour for a given IPv4 Address
arp

# net:
arping

# net: the arp scanner
arp-scan

# net: keep track of ethernet/ip address pairings
arpwatch

# nmap
nmap

# net: arp: Network security auditing tool
hunt

# query an LDAP server from the command line with ldap-utils: ldapsearch, ldapadd, ldapmodify
ldap-utils

# bugs in shell scripts
http://www.shellcheck.net/

# help text that matches each argument
http://explainshell.com/

# concatenate and print files in reverse (reversed lines)
tac file.txt > reversed.txt

# print web page to pdf / screenshot
google-chrome --headless --disable-gpu --print-to-pdf https://www.eff.or
google-chrome --headless --screenshot --window-size=1280,169 https://www.eff.or

# google-chrome extras
chrome://version
chrome://flags
chrome://net-internals
chrome://quota-internals
chrome://network-error/-106

# google-chrome: HSTS: HTTP Strict Transport Security:
"This web always encrypts. And it does so using trusted certificate"
chrome://net-internals/#hsts

# net: ports listening for connection (i.e. open ports)
sudo nmap -sT -O localhost
sudo nmap -sn <ip-range>

# net: ipv4: CIDR notation
192.168.100.14/24 represents the IPv4 address 192.168.100.14 and its associated routing prefix 192.168.100.0

# connecting to mysql a.k.a. login
mysql --host=localhost --user=<name> --password=<password> <dbname>

# connecting to mysql a.k.a. login
mysql --host=localhost --user=root --password=root employees

# unblock mysql
mysqladmin -u [username] -p flush-hosts

# search for a file named exactly NAME (not *NAME*)
locate -b '\NAME'

# split a file into pieces (with '.' at the end)
split --bytes 1M --numeric-suffixes --suffix-length=3 foo.txt foo.

# deb: apt: ppa: only 64bit packages
deb [arch=amd64] http://...

# usb: drive: drives: disc: discs: list block devices
lsblk

# Dynamic device management
udev

# usb: drive:
mount | grep gvfs; cd ...

# pdf: view file.pdf
evince file.pdf

# net: ubuntu: (edit) and re-read proxy definition
source /etc/environment

# centos update
su -c 'yum update'

# apt: aptitute: apt-offline:
sudo apt-offline install $HOME/offline-updates
sudo apt-offline install --allow-unauthenticated $HOME/offline-updates

# apt: aptitute: proxy:
/etc/apt/apt.conf.d/05proxy
/etc/apt/apt.conf

# apt: aptitude: without proxy
sudo apt --option Acquire::http::proxy=false ...

# net: grouping bandwidth per process; "net top"
sudo nethogs wlan0

# top: htop: explained
https://peteris.rocks/blog/htop/

# gpg: sig: download and import gnu-keyring
wget http://ftp.heanet.ie/mirrors/gnu/gnu-keyring.gpg && gpg --import gnu-keyring.gpg

# wget:
wget --limit-rate=20k http://www-ftp.lip6.fr/pub/linux/distributions/Ubuntu/releases/15.04/ubuntu-15.04-desktop-amd64.iso

# gpg: sig: verify file
gpg --verify file.sig file

# fs: number of inodes; every file or directory requires 1 inode
df -i / --inodes

# net: show host name
hostname -i

# mplayer: reset/+/- speed by 10% / toggle OSD states / volume +/-
backspace / \] / \[ / o / * / "/"

# youtube: +/- speed / captions / mute / 1 frame forward / 1 frame backward
> / < / c / m / , / .

# postscript to pdf conversion
ps2pdf

# xserver: modifying keymaps and pointer button mappings in X
xmodmap

# xserver: print XKB keyboard description to file in ps-format
xkbprint :0

# ubuntu: change default www-browser
sudo update-alternatives --config x-www-browser / gnome-www-browser

# xfce: opens a file or URL in the user's preferred application
/usr/bin/browse -> xdg-open

# dpkg: add-apt-repository needs a single repo
sudo add-apt-repository ppa:jonathonf/python-3.6
sudo add-apt-repository ppa:atareao/telegram
sudo apt update
sudo apt install telegram python-3.6

# dpkg:
git clone https://gist.github.com/66638cab114a6da691518598b6d13650.git \
$HOME/bin/list-ppa; \
eval $HOME/bin/list-ppa/list-ppa; \
sudo ppa-purge <ppa:user/ppa-name>

# display file or file system status; alternative to ls
stat -c "%y %s %n" *

# list only one column
ls --format=single-column

# list only directories, 1 entry per line
ls -d1 */

# count of files in ./path/to/dir
ls -1 ./path/to/dir | wc -l

# show full paths (alias lff)
ls -lrt -d -1 $PWD/{*,.*}

# line count, word count
wc cheatsheet.html

# list current traps; shell function responding to HW / other signals
trap

# delete /tmp/xyz$$ on shell exit / shell error
trap "rm -f /tmp/xyz$$; exit" ERR EXIT

# fist / last 5 lines from file
head -n 5 file / tail -n 5 file

# available shells; current shell; change shell
cat /etc/shells; echo $SHELL; chsh -s /usr/local/bin/fish

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

# shell: bash: fish: see what the shell does with the various types of quoting
# https://unix.stackexchange.com/a/417408
printf '<%s>\n' G "G" 'G' \G "\G" '\G' \\G "\\G" '\\G'

# bash: secure (password) prompt; doesn't work in fish
read -s

# fish: retval: retcode: return code: exit code: (in bash $?)
$status

# fish: show content of foo fn / list fns
type foo / functions foo / functions -n

# fish: copy 'foo' fn to a new fn 'bar' / erase the 'bar'
functions -c foo bar / functions -e bar

# fish: unset shell variable
set --erase myvar

# run a cmd only when load average is below a certain threshold (default is 0.8)
echo "rm -rf /unwanted-large/folder" | batch

# fish: handle fish key bindings
bind / help bind

# bash: display shortcuts (including Ctrl+L, Ctrl+R); \e - ESC, \C-y - Ctrl+y
bind -P / help bind

# change file mode bits of file according to reference-file
chmod --reference reference-file file

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

# bash: disable pathname expansion - globbing
set -f / set -o noglob

# bash: shell writes its input to standard error as it is read
set -v / set -o verbose

# bash: shell writes standard error a trace for each command
set -x / set -o xtrace

# simple python3 server
python3 -m http.server 8000 --bind 127.0.0.1

# simple python server
python -m SimpleHTTPServer 8001

# cross-platform HTTP/2 web server with automatic HTTPS
caddy -host example.com

# python: high-level file operations
import shutil

# python: concatenate / merge / join two lists (not arrays)
# https://www.pythoncentral.io/the-difference-between-a-list-and-an-array/
[1, 2] + [4, 5]

# args: run the last command as root
sudo !!

# real and effective user and group IDs
id user

# google domain / sice specific search
keyword site:bartoszmilewski.com

# net: networking: DNS lookup: convert names <-> IP addresses
host www.google.com

# net: get ip address from domain
nslookup www.google.com | tail -2 | head -1 | awk "{print $2}"

# net: DNS lookup utility; domain information groper; interrogate DNS name servers
dig www.google.com

# scripting: loc_variable - visible only within given code block
local loc_variable=value

# args: function arguments
$*

# args: all arguments / all arguments of the last command / count of arguments
$@ / !* / $$

# exit code (return value / retcode) of the last command (0: success) e.g. adduser joe; echo $?
$?

# build-in commands
$-

# last argument of the previous command. At the shell startup, it gives the absolute filename of the shell script being executed
$_

# args: last argument of the last command
!$

# process ID of the: shell / most recently executed background process
$$ / $!

# the cmd takes x and y as if they were pressed during its execution
(echo x; echo y) | cmd

# eval expression
echo $[22 + 33]

# eval expression
expr 11 + 22

# bash: args: last command without the last argument
!:-

#bash: if; no-op, nope, empty operation
:

# bash: empty file.txt
> file.txt

# bash: insert contents of file.txt into input of tr and output results to fileNew.txt
tr '[A-Z]' '[a-z]' < file.txt > fileNew.txt

# bash: mass move/copy/rename
mmv \*.JPG \#1.jpc
mmv \* \#1.rexx

# bash: visual calender for februar 2004 / whole year 2004
cal 2 2004 / cal -y 2004

# bash: ? define function in bash ?
foo() { date; }

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

# bash: create directory tree with multiple subdirs
mkdir -p ./path/{sub1,sub2}/{1..100}/{src,bin,bak}

# bash: automatically create "./path" and do --preserve=mode,ownership,timestamps
cp --parents -p ./path/src.ext ./path/dst.ext

# bash: mv README.text README.txt ; cp file file.bak
mv README.{text,txt} ; cp file{,.bak}

# bash: redirect stderr (2) to stdout (1) and save it to command.log
./command.sh 2>&1 | tee command.log

# suppress stderr messagess
./script.sh 2> /dev/null

# bash: fist / last 5 lines from file
head -n 5 file / tail -n 5 file

# bash: find: redirect: separate / combine sdterr and stdout; does not work with the tee command
./command.sh 1>str.out 2>str.err / ./command.sh &>combined.out

# bash: redirect: type in stuff and wait unit EOF gets typed
cat >>EOF

# bash: get date (timestamp) in a given format
date +"%Y-%m-%d_%H-%M-%S"

# free and used memory in the system
free -h

# file or filesystem status
stat <fileName>

# summary about used swap devices
swapon --show

# enable / disable devices and files for paging and swapping
swapon / swapoff

# join lines of two files on a common field
join

# size of ./path/to/dir with subdirs, exclude files matching pattern
du -h --exclude=pattern ./path/to/dir

# total / summarize size of dir
du -s dir / du -sh dir

# jump to ./path/to/dir execute command and jump back
(cd ./path/to/dir && ls)

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
wget http://server/fileX.ext -O ./path/to/fileY.ext

# download fileX.txt and save it under different location / name
curl -O http://server/fileX.txt > ./path/to/fileY.txt

# net: ask http://ifconfig.me about myself (ua: User Agent)
curl ifconfig.me/ip/host/ua/port/

# net: test connection with disabled proxy
curl --noproxy "*" -X GET http://www.google.com

# enforce using http_proxy instead of https_proxy in case of SSL23_GET_SERVER_HELLO
curl -v --proxy $http_proxy https://www.google.com

# show request/response headers
curl -v URL

# in bash: (in fish it doesn't work)
curl --request GET "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=test"

# iproute2: net: like ifconfig. state of network interfaces
ip address

# iproute2: net: show / manipulate routing, devices, policy routing and tunnels
ip address show eth0

# iproute2: net: routing table
ip route

# iproute2: net: Address Resolution Protocol table
ip neighbour

# net: what is my IP
curl ifconfig.me

# exec disc usage command on a remote host and sort results
ssh <HostAlias> du -h --max-depth=1 /path/to/dir | sort -h
climate ssh-mount / ssh-unmount

# recursively compare dirA with dirB; show only filenames: -q (quiet)
diff -rq dirA dirB | sort

# sort via 2nd key (?column?)
sort -k2 file.csv

# diff: outputs the files in two columns, side by side, separated by spaces
sdiff file1 file0

# output line-numbers
diff --unchanged-line-format="" --old-line-format="" --new-line-format=":%dn: %L" fold fnew

# new line separator for each grep result sh script
grep "pattern" /path/to/file | awk '{print $0,"\n"}'

# find files and open them in gvim
gvim $(find . -name "*fileToSearch*")

# gzip: list compressed, uncompressed size, compression ratio etc.
gzip -l ./path/to/file.gz

# write output to stdout; zcat and gunzip -c are identical
gunzip -c / zcat

# commit log since ...
svn log -r \{2017-01-01\}:HEAD <repo-URL/module> > svn.log

# search in commit logs since ... and show changed / affected files (--verbose)
svn log --revision \{2017-01-01\}:HEAD --no-auth-cache --non-interactive --verbose --username '...' --password '...' --search <str1> --search <str2> <repo-URL/module>

# checkout; also for http://<ip:port>/path; https://<ip:port>/path
svn co --username <svn-login> svn://<ip:port>/path

# error: E120106: ra_serf: The server sent a truncated HTTP response body.
svn cleanup; and svn update

# last revision number
svn info <repo-url/module>

# when: svnrdump: E000022: Couldn't get lock on destination repos after 10 attempts
svn propdel --revprop -r0 svn:rdump-lock <url>

# copy files from src to dst - typical example; add -n is for --dry-run
rsync -avz src/ dst

# copy only certain types of files using include option
rsync -zarv --include="*/" --include="*.sh" --exclude="*" "$src" "$dst"

# cvs: copy files from src to dst excluding everything in CVS directories (showing progress)
rsync --dry-run --progress          --archive --verbose --exclude='CVS' src/ dst
rsync --dry-run --progress --delete --archive --verbose --exclude='CVS' src/ dst | grep deleting

# cvs: copy files from src to dst excluding everything in CVS directories
rsync --dry-run          --archive --verbose --exclude='dir' --exclude='*.jpg' src/ dst
rsync --dry-run --delete --archive --verbose --exclude='dir' --exclude='*.jpg' src/ dst  | grep deleting

# cvs: copy files from src to dst excluding everything in CVS directories (showing progress)
rsync --dry-run --progress          --archive --verbose --exclude='CVS' src/ dst
rsync --dry-run --progress --delete --archive --verbose --exclude='CVS' src/ dst | grep deleting

# exclude hidden files and directories
rsync --dry-run          --archive --verbose --exclude=".*" --exclude=".*/" src/ dst
rsync --dry-run --delete --archive --verbose --exclude=".*" --exclude=".*/" src/ dst | grep deleting

# mv: move content of a directory within another directory with the same folders
rsync --dry-run          --archive --remove-source-files backup/ backupArchives
rsync --dry-run --delete --archive --remove-source-files backup/ backupArchives | grep deleting

# restart cvs daemon
sudo /etc/init.d/cvsd restart / start / stop / status

# diff tagX tagY
cvs diff -r tagX -r tagY

# get clean copy
cvs update -C ./path/to/file.ext

# cvs: get revision 1.11
cvs update -P -C -r 1.11 ./path/to/file.ext

# checkout module from branch or tag
cvs checkout -r branchOrTag module

# commit file with multi-line commit message
cvs commit -m "fst-comment-line\nsnd-comment-line" path/to/file.ext

# update file
cvs log    -P -d ./path/to/file.ext

# reminder to leave in 15 minutes / at 13:55
leave +15 / leave 1355

# delete NormalTag from file.ext in version 1.17
cvs tag    -d -r 1.17 NormalTag ./path/to/file.ext

# delete BranchTag from file.ext in version 1.17
cvs tag -B -d -r 1.17 BranchTag ./path/to/file.ext

# move   BranchTag to   file.ext in version 1.19
cvs tag -B -F -r 1.19 BranchTag ./path/to/file.ext

# create BranchTag on   file.ext in version 1.19
cvs tag -b    -r 1.19 BranchTag ./path/to/file.ext

# move   NormalTag to   file.ext in version 1.63
cvs tag    -F -r 1.63 NormalTag ./path/to/file.ext

# version and tags
cvs log file.ext

# version and tags
cvs status -v file.ext

# list files associated with a tag; (no blank between -r and TAGNAME)
cvs -q rlog -R -N -S -rTAGNAME MODULENAME

# debug and trace info
cvs -d cvs -t -d :pserver:faizal@localhost:/myrepos ci -m "test" -l "src/foo/Foo.ext"

#
cvs add file.ext

# system information (kernel version etc.)
uname -a

# tail a (log)file over ssh
ssh -t user@hostname "tail -f /path/to/file"   # -t force pseudo-terminal allocation

# tail a (log)file over ssh
ssh -n user@hostname "tail -f /path/to/file" & # -n redirects stdin from /dev/null

# github: ssh:
ssh-keygen

# github: now copy-paste the ~/.ssh/id_rsa.pub to github under "Account settings / SSH keys / Add another public key"
cat ~/.ssh/id_rsa.pub

# log in to remote systems using public key
scp ~/.ssh/id_rsa.pub user@destmachine:/home/user/.ssh/
ssh user@destmachine
touch ~/.ssh/authorized_keys; chmod 600 ~/.ssh/authorized_keys
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys; # rm ~/.ssh/id_rsa.pub

# Execute a command as another user
pkexec

# net: service is replaced by systemctl
systemctl status network-manager / service network-manager status
sudo systemctl stop tomcat7 / sudo service tomcat7 stop

# systemd: Control the systemd system and service manager
systemctl status <service-name>

# systemd: Control the systemd login manager - logging data
loginctl

# last logged-in users
last

# info about CPU architecture
lscpu

# CPU architecture 32/64 bit
getconf LONG_BIT

# find and delete *.jar and *.class when idling
ionice -c3 find . -name "*.jar" -or -name "*.class" -delete

# change the priority of process 2222 to minimum (-19 max, +19 min prio)
renice +19 2222

# launch process with lowest priority
nice -n +19 command

# ps: show statistics for a process nr. 7695
ps -o pid,user,command,nice -p 7695

# ps: process tree / user's processes ; ps -aux / ps aux - are different
ps f / ps fx / ps u

# distro name and ver
cat /etc/*-release

# distro name and ver
cat /proc/version

# show (ubuntu) version
lsb_release -a

# ubuntu: when "you may need to re-run your boot" appears
sudo update-grub

# withouth "sudo", download source PACKAGE to current directory
apt source <package>

# Advanced Package Tool; apt is a replacement for apt-get
apt

#
sudo apt install --reinstall <package>

# ubuntu: command line upgrade part 1. (CLI alternative to update-manager)
# set Prompt
/etc/update-manager/release-upgrades
Prompt=normal

# ubuntu: command line upgrade part 2.
sudo apt update; and sudo apt upgrade

# update and upgrade the system by removing/installing/upgrading packages
sudo apt update; and sudo apt full-upgrade
sudo apt update; and sudo apt dist-upgrade # alternativelly

# ubuntu: command line upgrade part 3.
sudo do-release-upgrade

# ubuntu: see /usr/share/update-notifier/notify-reboot-required after update / upgrade

# ubuntu: (ubuntu 11.10 or later), gnome or KDE
sudo restart lightdm / gdm / kdm

# run fsck on next reboot
sudo touch /forcefsck

# remove old kernels
sudo apt remove --purge $(dpkg -l 'linux-image-*' | sed '/^ii/!d;/'"$(uname -r | sed "s/\(.*\)-\([^0-9]\+\)/\1/")"'/d;s/^[^ ]* [^ ]* \([^ ]*\).*/\1/;/[0-9]/!d')

# for tabular data
awk

# cut huge file: content between lines 10 and 20 / print 5th line
sed -n "10,20p" /path/to/file / sed -n 5p /path/to/file

# cut huge file: content between lines 10 and 20; see https://unix.stackexchange.com/a/47423
awk 'NR >= 10 && NR <= 20' /path/to/file > /path/to/cut-file

# replace 1 occurence
sed --in-place "s/foo/FOO/" /path/to/file

# replace all occurences of "foo" (globally)
sed --in-place "s/foo/FOO/g" /path/to/file

# remove empty lines (globally)
sed --in-place '/^\s*$/d' /path/to/file

# replace newlines with space
sed ':a;N;$!ba;s/\n/ /g'

# sed: ascii: ebcdic: fix new lines and empty chars; \x85 - hexadecimal char
sed "s/\x85/\n/g" <log.txt >log.nl.txt; sed "s/\x85/\n/g" <log.nl.txt >log.nl.00.txt

# Show numerical values for each of the 256 colors in ndbash
for code in {0..255}; do echo -e "\e[38;05;${code}m $code: Test"; done

# sha1: read SHA1 sums from the file.sha1 and check them
sha1sum -c file.sha1

# ps: full command line; command is separated by the \0 byte
tr '\0' ' ' < /proc/<pid>/cmdline

# ps: top: htop: all info related to a process
ls /proc/<pid>

# ps: top: htop: currend working dir of <pid>
cat /proc/<pid>/cwd

# xfce: ubuntu: popup: message: desktop notification
notify-send "Hello World"

# xfce: keyboard; shortcuts
https://forum.manjaro.org/t/cant-switch-windows-with-super-tab/2406/4

# xfce: keyboard; shortcuts
xfce4-keyboard-settings

# xfce: keyboard; shortcuts; http://docs.xfce.org/xfce/xfconf/xfconf-query
xfconf-query --channel xfce4-keyboard-shortcuts -lv
xfconf-query --channel xfce4-keyboard-shortcuts --property "/xfwm4/custom/<Super>Tab" --reset
xfconf-query --channel xfce4-keyboard-shortcuts --property "/xfwm4/default/<Super>Tab" --reset
xfconf-query --channel xfce4-keyboard-shortcuts --property "/xfwm4/custom/<Super>Tab" --create --type string --set "empty"
xfconf-query --channel xfce4-keyboard-shortcuts --property "/xfwm4/default/<Super>Tab" --create --type string --set "empty"

# xfce: keyboard; changes in the xml don't work, use xfce4-settings-editor
locate xfce4-keyboard-shortcuts.xml

# xfce: gnome: logout
gnome-session-quit / xfce4-session-logout

# virtualbox: restart clipboard
killall VBoxClient; and VBoxClient --clipboard & disown

# restart xfce when the title bar dissapears from xfwm4; or rm -r ~/.cache/sessions
pkill -KILL -u yourusername

# virtualbox: restart clipboard
killall VBoxClient; and VBoxClient --clipboard & disown

# when emacs freezes or hangs
killall -SIGUSR2 emacs

# xfce: launcher: emacs uses bash variables; -i interactive shell, -c read following command
bash -i -c ./path/to/emacs

# search man pages for "topic"
man -k topic / apropos -r topic

# brief description of CMD / help for shell built ins
whatis CMD / help

# net: ipv6:
ssh -6 <ipv6-address> # responds with 'ssh: connect to host <ipv6-address> port 22: Invalid argument'
ping6 -I wlan0 -c 4 <ipv6-address> # responds with 'ping: unknown iface wlan0'

# compare a remote file with a local file
ssh user@host cat ./path/to/remotefile | diff ./path/to/localfile -

# ssh: copy ssh keys to user@host to enable password-less ssh logins
ssh-copy-id user@host

# ssh: mount folder/filesystem through SSH. Install SSHFS from http://fuse.sourceforge.net/sshfs.html. Mount a folder securely over a network
sshfs name@server:/path/to/folder ./path/to/mount/point

# mound windows shares under linux
sudo mount.cifs //<windows-machine>/path/to/dir path/to/dir -o user=<windows-username>

# virtualbox: mount shared folder
sudo mount -t vboxsf share /home/username/share/

# readonly to readwrite
sudo mount -o remount,rw /partition/identifier /mount/point

# mounted filesystems - table layout
mount | column -t

# virtualbox: restart clipboard
killall VBoxClient; and VBoxClient --clipboard & disown

# youtube-dl: Requested formats are incompatible for merge and will be merged into mkv.
youtube-dl -f bestvideo[ext=mp4]+bestaudio[ext=m4a] URL

# align csv file
cat data.csv | column -t -s ';'

# xml: command line XML tool (formating)
xmllint

# shared library dependencies
ldd -v $(which vim)

# library: find out if libgconf is installed
ldconfig -p | grep libgconf

# info about ELF files
readelf -v $(which vim)

# show installed packages
dpkg --get-selections

# list of installed files from a packageName (dpkg-query -L works too)
dpkg -L packageName

# install / remove package.deb
sudo dpkg --install package.deb
sudo dpkg --remove  package.deb

# dpkg: apt: show description for packageName
apt-cache search ^packageName$

# dpkg: apt: print names of all packages know to APT
apt-cache pkgnames <packagePrefix>

# dpkg: apt: list all installed packages matching regex
dpkg --list | grep ii | grep -i <regex>

# dpkg: apt: description of PACKAGE
apt-cache show PACKAGE / aptitude show PACKAGE

# dpkg: apt: fix the 'Hash sum mismatch error'
sudo rm -rf /var/lib/apt/lists; sudo mkdir -p /var/lib/apt/lists/partial; sudo apt clean

# ubuntu: apt: dpkg: mirror: distro: source:
# Software Sources List editors; see y-ppa-manager, http://repogen.simplylinux.ch/
software-properties-gtk - see /etc/apt/sources.list

# apt: dpkg: list of sources
/etc/apt/sources.list.d

# list installed packages; no sudo needed; TODO see --clear-selection --set-selection
dpkg --get-selections | grep -v deinstall

# aptitude: list expressly installed packages (not just installed as dependencies)
aptitude search '~i!~M'

# cygwin: ps: show windows as well as cygwin processes (-W)
ps --windows

# cygwin: bash: print windows form of filename
cygpath -w filename

# cygwin: command-line installer
apt-cyg --mirror http://ftp-stud.hs-esslingen.de/pub/Mirrors/sources.redhat.com/cygwin/x86

# cygwin: bash: print unix form of filename
cygpath -u filename

# zip: zip content of ./path/to/dir to ./path/to/file.zip; --recurse-paths is -r
zip --recurse-paths --encrypt ./path/to/file.zip ./path/to/dir

# zip: unzip:
unzip ./path/to/file.zip -d ./path/to/extract-dir

# unzip: untar: in one step / command
tar -zxvf file.tar.gz

# tar / untar
tar czf ./path/to/tarfile.gz file0 file1
tar xzf ./path/to/tarfile.gz

# Remove all files previously extracted from a tar(.gz) file
tar -tf ./path/to/file.tar.gz | xargs rm -r

# bash: report or omit repeated lines
uniq

# bash: sort and remove duplicate lines
sort myfile.txt | uniq

# net: ping: traceroute: - check connection
mtr google.com
ethtool eth0
ip neigh show | grep REACHABLE
ip link show

# net: ping: traceroute: check connection
mtr --report www.google.com

# bash: query wikipedia for keyword
dig +short txt keyword.wp.dg.cx

# iproute2: net: listening ports and PIDs of associated processes. tcp (-t) udp (-u)
ss -tulnp  # socket statistics replaces obsolete netstat

# crontab: edit / view entries
crontab -e / crontab -l

# show everything (battery info etc); Advanced Configuration and Power Interface
acpi -V
climate battery

# set / increase / decrease display brightness
xbacklight -set 10 / -inc 10 / -dec 10

# power consumption / management diagnosis tool
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

# show first/last 100 bytes
tail -c 100 fileName
head -c 100 fileName

# net: apps currently using inet
lsof -P -i -n | cut --fields=1 --delimiter=" " | uniq | tail --lines=+2

# remove sections from each line of files
cut

# list open files
lsof

# list open files whose inet address matches ADDR; -t: terse output
lsof -i:[ADDR] -t

# processsor: cpu: core: cores: print the number of processing units available
nproc

# check file types and compare values
test

# determine file type
file

# tabs: convert spaces to tabs / tabs to spaces
expand / unexpand file.txt

# simple GUIs
zenity, whiptail

# metric: monitor:
collectd # system statistics collection daemon
telegraf # plugin-driven server agent for collecting & reporting metrics

# monitor file and network activities of a PROCESS, max printed string size 10000
strace -f -e trace=file,network -s 10000 -o outfile.log PROCESS ARGS

# trace process / library
ptrace / ltrace

# net: Simple Network Management Protocol
snmp

# net: packet analyser
wireshark

# net: ftp: trivial file transfer program
tftp

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

# check if the /var/run/reboot-required exists
ls /var/run/reboot-required

# list of packages to reboot
/var/run/reboot-required.pkgs

# start COMMAND and kill it if it is running still after 5 sec
timeout 5s COMMAND

# net: retcode==1 - online; retcode!=1 offline
nm-online --exit; echo "retcode: $?"

# wifi: net: 1. connect
nm-applet / man nmcli-examples

# wifi: net: 1. wifi: general status and operations
nmcli --ask device wifi list

# wifi: net: 2. connect
nmcli --ask device wifi connect WIFIonICE

# wifi: net: 3. disconnect
nmcli --ask device disconnect wlan0

# wifi: net: general status and operations
nmcli --ask general

# rpm: display installed packages
rpm -qa

# android:
sudo apt install android-tools-adb android-tools-fastboot

# root login / root console / root prompt
sudo -i

# android:
groups - check plugdev membership

# android:
adb devices; dmesg; adb logcat; adb shell
adb push src dst

# packages; unsupported / obsolete
ubuntu-support-status --show-unsupported

# modify / user account
sudo usermod <login> / sudo userdel --remove <login>

# add user to the "vboxsf" group
sudo usermod -a -G vboxsf <login>

# run a program in a new session
setsid

# monitor the progress of data through a pipe
pv

# Ultimate Plumber: Linux pipes with instant live preview
https://github.com/akavel/up

# maven:
mvn package
mvn install / mvn clean - mvn install seems not to be needed

# maven: mvn: proxy: see https://www.mkyong.com/maven/how-to-enable-proxy-setting-in-maven/
{M2_HOME}/settings.xml

# SFTP / FTPS: SSH File Transfer from the OpenSSH / FTP over SSL
# FTPS: FTP over SSL
lftp

# HPKP: HTTP Public Key Pinning; Similair to HSTS header
Create your HPKP hash: https://report-uri.io/home/pkp_hash

# install nodejs8 behind proxy
sudo apt-key adv --keyserver-options http-proxy="http://<proxy-ip>:<proxy-port>/" --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 68576280
sudo apt-add-repository "deb https://deb.nodesource.com/node_8.x $(lsb_release -sc) main"
# install nodejs8 w/o proxy: curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt update; and sudo apt install nodejs

# update yarn
curl -o- -L https://yarnpkg.com/install.sh | bash

# nodejs: install electron package
sudo npm install --global --unsafe-perm=true electron
npm search electron\*

# nodejs: command line CLI update npm
node

# nodejs: install update npm
sudo npm install --global <npm-package> / sudo npm update --global

# nodejs: npm:
npm install --verbose <package> / npm install -dd <package>
npm config list
npm config set color=false
npm config set progress=false
npm install --no-colors --verbose result-core
npm cache verify / npm cache clean / npm cache clean --force
npm config set registry https://registry.npmjs.org/ [or http://registry.npmjs.org/]
npm config set proxy "http://<ip:port>/"
npm config set https-proxy "https://<ip:port>/"

# net: data transfered today / per month
sudo vnstat -u -i wlan0; and vnstat

# net: managing a netfilter firewall; ufw - uncomplicated firewall
sudo ufw status numbered
sudo ufw delete <rule-nr>
sudo ufw allow <port>
sudo ufw allow <port>/tcp

# net: rdp: remote desktop
rdesktop -u <login> -p - <computer>:3389 # -p -  ask for password
rdesktop -f -u <login> -p - <computer>:3389 # -f  full screen, -p -  ask for password

# net: rdp: remote desktop
sudo /etc/init.d/xrdp restart

# shred: permanet delete: shred doesn't work on dirs
shred --verbose --remove <path/to/file>

# shred: permanet delete: shred doesn't work on dirs
find . -type f -print0 | xargs -0 shred --remove

# shred: permanet delete: srm doesn't delete hardlinked files
srm -r <path>

# bash: synchronize sytem date behind proxy
curDate="$(wget -S "http://www.google.com/" 2>&1 \
| grep -E '^[[:space:]]*[dD]ate:' \
| sed 's/^[[:space:]]*[dD]ate:[[:space:]]*//' \
| head -1l \
| awk '{print $1, $3, $2,  $5 ,"GMT", $4 }' \
| sed 's/,//')"
sudo date -s "${curDate}"

# Add and remove modules from the Linux Kernel
modprobe -a vboxguest vboxsf vboxvideo

# vbox:
sudo apt install virtualbox-guest-additions-iso
sudo /etc/init.d/virtualbox restart
sudo /etc/init.d/virtualbox-guest-utils start

# Delete all Atom environment state
atom --clear-window-state

# atom: list / backup installed packages to a file
apm list --installed --bare > ~/dev/dotfiles/.atom/package.list

# atom: install packages from a file
apm install --packages-file ~/dev/dotfiles/.atom/package.list

# atom: restore / synchronise atom settings
rsync -zarv --include="*/" --include="*.cson" \
--exclude="*" ~/.atom/* ~/dev/dotfiles/.atom

# rsync: options short / long versions
-z, --compress
-a, --archive
-r, --recursive
-v, --verbose
-n, --dry-run

# bluetooth: bluez:
systemctl status bluetooth
sudo systemctl enable bluetooth
sudo systemctl start bluetooth
bluetoothctl
help # list of available commands of bluetoothctl

# bluetooth: bluez: this actually works
# send file to /storage/emulated/0/bluetooth
bluetooth-sendto --device=XX:XX:XX:XX:XX:XX local-fname

# bluetooth: bluez: see https://ubuntu-users.livejournal.com/439582.html
# search for the appropriate channel for file transfers
sdptool search FTP
obexfs -bXX:XX:XX:XX:XX:XX -B<channel> ~
sdptool browse XX:XX:XX:XX:XX:XX

# bluetooth: bluez:
# Browse your cellular's files. List the tree of directories.
obexftp -b XX:XX:XX:XX:XX:XX -l /

# bluetooth: bluez:
# use the '@'
ussp-push XX:XX:XX:XX:XX:XX@ local-fname remote-fname

# bluetooth: bluez: upload / push
obexftp -b XX:XX:XX:XX:XX:XX -c /Download -p local-fname

# bluetooth: bluez: download
obexftp -b XX:XX:XX:XX:XX:XX -c /Download -d remote-fname

# super fast ram disk
sudo mkdir -p /mnt/ram
sudo mount -t tmpfs /mnt/ram -o size=8192M

# intercept stdout to a log file
cat file | tee -a file.log | cat /dev/null

# FILE1 -ot FILE2: FILE1 is older than FILE2
#        -b FILE:  FILE exists and it's block special
#        -c FILE:  FILE exists and it's character special
#        -d FILE:  FILE exists and it's a directory
#        -e FILE:  FILE exists
#        -f FILE:  FILE exists and it's a regular file
#        -g FILE:  FILE exists and it's set-group-ID
#        -G FILE:  FILE exists and it's owned by the effective group ID
#        -h FILE:  FILE exists and it's a symbolic link (same as -L)
#        -k FILE:  FILE exists and has its sticky bit set
#        -L FILE:  FILE exists and it's a symbolic link (same as -h)
#        -O FILE:  FILE exists and it's owned by the effective user ID
#        -p FILE:  FILE exists and it's a named pipe
#        -r FILE:  FILE exists and read permission is granted
#        -s FILE:  FILE exists and has a size greater than zero
#        -S FILE:  FILE exists and it's a socket
#        -t FD:    file descriptor FD is opened on a terminal
#        -u FILE:  FILE exists and its set-user-ID bit is set
#        -w FILE:  FILE exists and write permission is granted
#        -x FILE:  FILE exists and execute (or search) permission is granted

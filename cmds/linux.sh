#!/usr/bin/env fish
exit 1 # just in case ...

# see also:
# https://github.com/tldr-pages/tldr
# https://github.com/cheat/cheat

# compare shells
# https://htmlpreview.github.io/?https://raw.githubusercontent.com/michaelmacinnis/oh/master/doc/comparison.html

# web server, reverse proxy, load balancer, mail proxy, HTTP cache
nginx

# jq - Command-line JSON processor; json formatting; sed for json
echo "{\"foo\":\"bar\"}" | jq .foo

# json formatting
curl 'http://stash.compciv.org/congress-twitter/json/joni-ernst.json' \
     > ernst.json; and cat ernst.json | jq '.'

# :cpu :mem :hdd :hardware - system information in a GTK+ window
hardinfo
sudo dmidecode
sudo lshw
cpu-x

# :net - troubleshooting and security testing
sudo tcpdump

# :net - Extract HTTP User Agents
sudo tcpdump -nn -A -s1500 -l | egrep -i 'User-Agent:|Host:'

# :net - Capture all the plaintext passwords
sudo tcpdump port http or port ftp or port smtp or port imap or port pop3 or \
     port telnet -l -A | egrep -i -B5 \
     'pass=|pwd=|log=|login=|user=|username=|pw=|passw=|passwd=|password=|pass:|user:|username:|password:|login:|pass |user '

# :net - Extract HTTP Passwords in POST Requests
sudo tcpdump -s 0 -A -n -l | egrep -i "POST /|pwd=|passwd=|password=|Host:"

# :net - Capture Cookies from Server and from Client
sudo tcpdump -nn -A -s0 -l | egrep -i 'Set-Cookie|Host:|Cookie:'

# :net :Internet-Control-Message-Protocol
# send error messages & operational information
ICMP

# :net :Dynamic-Host-Configuration-Protocol
# network management protocol used on TCP/IP networks
DHCP

# :net :Address-Resolution-Protocol
# MAC address of a network neighbour for a given IPv4 Address
# :net display / modify the IP-to-Physical address translation tables for ARP
arp -a

# :net - send ARP REQUEST to a neighbour host
arping

# :net - the arp scanner
arp-scan

# :net - keep track of ethernet/ip address pairings
arpwatch

# :net - Network exploration tool and security / port scanner
nmap

# TCP proxies; shell-script based HTTP clients / servers;
# network daemon testing; a SOCKS or HTTP ProxyCommand for ssh
netcat

# :net :arp - Network security auditing tool
hunt

# query an LDAP server from the command line with ldap-utils
# ldapsearch ldapadd ldapmodify
ldap-utils

# concatenate and print files in reverse (reversed lines)
tac file.txt > reversed.txt

# prepend text or line to a file
echo "1st-line" | cat - file.txt

# print web page to pdf / screenshot
google-chrome --headless --disable-gpu --print-to-pdf https://www.eff.or
google-chrome --headless --screenshot --window-size=1280,169 https://www.eff.or

# google-chrome extras
chrome://version
chrome://flags
chrome://net-internals
chrome://quota-internals
chrome://network-error/-106

# :google-chrome :HSTS :HTTP-Strict-Transport-Security
"This web always encrypts. And it does so using trusted certificate"
chrome://net-internals/#hsts

# :net - ports listening for connection (i.e. open ports)
sudo nmap -sT -O localhost
sudo nmap -sn <ip-range>

# show open ports
nmap www.google.com | grep -i open

# :net :ipv4 - CIDR notation
# 192.168.100.14/24 represents the IPv4 address 192.168.100.14 and its
# associated routing prefix 192.168.100.0

# connecting to mysql a.k.a. login
mysql --host=localhost --user=<name> --password=<password> <dbname>
mysql --host=localhost --user=root   --password=root employees

# unblock mysql
mysqladmin -u [username] -p flush-hosts

# search for a file named exactly NAME (not *NAME*)
locate -b '\NAME'

# split a file into pieces (with '.' at the end)
split --bytes 1M --numeric-suffixes --suffix-length=3 foo.txt foo.

# :usb :drive :drives :disc :discs - list block devices
lsblk
lsblk --nodeps

# Format disk / usb drive
# 1. erase everything on the device
# convert and copy a file; bs=BYTES  read & write up to BYTES at a time
sudo dd status=progress if=/dev/zero of=/dev/sdd1 bs=4k; and sync
# 2. make a new partition on the device
sudo fdisk /dev/sdd1
sudo mkfs.ext4 /dev/sdd1
sudo eject /dev/sdd1

# partition manipulation: resize / create / delete partitions
parted
# TODO see partprobe: https://opensource.com/article/18/9/swap-space-linux-systems
# e.g. resize 3rd partition and use all free / available space
parted /dev/sda resize 3 100%
# manipulate (given) partition
fdisk

# New installations of Ubuntu 18.04 use a swap file instead of swap partition
# 8 * 1024 * 1048576 MB = 8 * 1073741824 B = 8589934592 B = 8GB
# TODO fallocate: see https://www.tecmint.com/add-swap-space-on-ubuntu/
# /proc/sys/vm/swappiness
# /proc/sys/vm/vfs_cache_pressure
sudo dd status=progress if=/dev/zero of=/sdb1/swap.img count=8388608 bs=1024
sync   # synchronize cached writes to persistent storage
# sudo chmod 600 /sdb1/swap.img  # should not be needed
# make sure we have: -rw------- 1 root root 8,0G
ls -la /sdb1/swap.img
sudo mkswap /sdb1/swap.img
sudo swapon /sdb1/swap.img
swapon --summary
# see also: swapspace

# flush file system buffers
sync

# dynamic device management - the /dev directory
udev

# :usb :drive gnome userspace virtual fs
mount | grep gvfs; cd ...

# view file.pdf
evince file.pdf

# centos update
su -c 'yum update'

# :net - grouping bandwidth per process; "net top"
sudo nethogs wlan0

# top and htop explained; see also atop iotop
https://peteris.rocks/blog/htop/

# monitor disk I/O usage
sudo iotop -oPa

# :HDD :SSD - disk information
sudo hdparm -I <filesystem> # see: df -h
sudo hdparm -I /dev/sda1

# top report / output to stdout: -b batch mode; -n <nr> nr of iterations
top -b -n 1

# load average explained
curl -s https://raw.githubusercontent.com/torvalds/linux/v5.1/kernel/sched/loadavg.c | head -n 8
# process queuing: load-average > nr-of-processors * cores-per-processor
uptime               # load average from /proc/uptime
top -b -n 1 | grep load
cat /proc/loadavg    # columns: 4th: processes running/total; 5th: last used pid
# :nr-of-processors
lscpu | grep "^CPU"
# :cores-per-processor
cat /proc/cpuinfo | grep cores

# :gpg :sig - download and import gnu-keyring
wget http://ftp.heanet.ie/mirrors/gnu/gnu-keyring.gpg; and \
         gpg --import gnu-keyring.gpg

# :wget - limit the download speed to amount bytes per second
wget --limit-rate=20k <url>

# download & verify / check bitcoin core wallet
set btcVer  0.19.1
set url     https://bitcoin.org/bin/bitcoin-core-$btcVer
set shaFile SHA256SUMS.asc
set shaUrl  $url/$shafile
set tgzUrl  $url/bitcoin-$btcVer-x86_64-linux-gnu.tar.gz
sha256sum --check $shaFile | grep OK

# download and print file / url only to stdout / standard output
set file https://bitcoin.org/bin/bitcoin-core-0.19.0.1/SHA256SUMS.asc
wget -O                - $file
wget --output-document - $file

# :gpg :sig - verify file
gpg --verify file.sig file

# :fs - number of inodes; every file or directory requires 1 inode
df -i
df --inodes

# :net - show host name
hostname -i

# :mplayer reset/+/- speed by 10% / toggle OSD states / volume +/-
backspace / \] / \[ / o / * / "/"

# postscript to pdf conversion
ps2pdf

# :xserver - modifying keymaps and pointer button mappings in X
xmodmap

# :xserver - print XKB keyboard description to file in ps-format
xkbprint :0

# :ubuntu - change default www-browser
sudo update-alternatives --config x-www-browser
sudo update-alternatives --config gnome-www-browser
# xfce4-settings-manager -> Preferred Applications
# see ~/.local/share/xfce4/helpers
# test by opening file / URL in the user's preferred / default application
xdg-open www.wikipedia.org # /usr/bin/browse is symlinked to xdg-open

# display file or file system status; alternative to ls
stat -c "%y %s %n" *

# :listing sort by size; -l     use a long listing format
ls --sort=size -l
ls --sort=size -l --reverse

# :listing only one column
ls --format=single-column

# :listing only directories, 1 entry per line
ls -d1 */

# :listing count of files in ./pth/to/dir
ls -1 ./pth/to/dir | wc -l

# :listing show full paths (alias lff)
ls -lrt -d -1 $PWD/{*,.*}

# :listing file all extentions / filetypes in current directory
find ./ -type f | perl -ne 'print $1 if m/\.([^.\/]+)$/' | sort -u

# line count, word count
wc /usr/share/common-licenses/GPL-2

# list current traps; shell function responding to HW / other signals
trap

# delete /tmp/xyz$$ on shell exit / shell error
trap "rm -f /tmp/xyz$$; exit" ERR EXIT

# fist / last 5 lines from file
head -n 5 file / tail -n 5 file

# :listing process environment variables (separated by null-chars)
cat /proc/<pid>/environ | tr '\0' '\n'

# :net :ubuntu - (edit) and re-read proxy definition
source /etc/environment

# duplicate files in a given set of directories
fdupes -r .

# :clipboard - show normal clipboard content
xsel --clipboard

# pipe to clipboard - doesn't work
# cat file > /dev/clip
# pipe from clipboard
# cat /dev/clip

# copy file content to clipboard
cat file.ext | xclip -i -selection clipboard

# wait for 10 pastings of the content file.ext to x-clipboard and quit
xclip -loops 10 -verbose file.ext

# put "test" to x-clipboard / put x-clipboard content to file.ext
echo "test" | xclip / xclip -o > file.ext

# run a cmd only when load average is below a certain threshold (default is 0.8)
echo "rm -rf /unwanted-large/folder" | batch

# change file mode bits of file according to reference-file
chmod --reference reference-file file

# remove all files except survivor.txt
rm -f !(survivor.txt)

# insert autocompletition result (use together with other progs)
Esc *

# :batch - run / execute a command at:
echo "ls -l" | at midnight    # a given time
at -f script.sh now + 1 hour  # 1 hour from now
at -f script.sh now + 30 min  # 30 minutes from now
watch date                    # periodically / repeatedly every 2 seconds

# echo with formating
printf "Line: %05d %15.3f Result: %+15d\n" 1071 3,14156295 32589

# simple python3 server
python3 -m http.server 8000 --bind 127.0.0.1

# simple python server
python -m SimpleHTTPServer 8001

# cross-platform HTTP/2 web server with automatic HTTPS
caddy -host example.com

# :python high-level file operations
import shutil

# :python concatenate / merge / join two lists (not arrays)
# https://www.pythoncentral.io/the-difference-between-a-list-and-an-array/
[1, 2] + [4, 5]

# :args run the last command as root
sudo !!

# real and effective user and group IDs
id user

# google domain / sice specific search
keyword site:bartoszmilewski.com

# :net :networking :DNS-lookup convert names <-> IP addresses
host www.google.com

# :net get ip address from domain
nslookup www.google.com | tail -2 | head -1 | awk "{print $2}"

# :net DNS lookup utility; domain information groper
# interrogate DNS name servers
dig www.google.com

# make block or character special files
mknod

# create directory tree with multiple subdirs
mkdir -p ./pth/{sub1,sub2}/{1..100}/{src,bin,bak}

# auto-create "./pth" and do --preserve=mode,ownership,timestamps
cp --parents -p ./pth/src.ext ./pth/dst.ext

# mv README.text README.txt ; cp file file.bak
mv README.{text,txt} ; cp file{,.bak}

# fist / last 5 lines from file
head -n 5 file
tail -n 5 file

# get date (timestamp) in a given format
date +"%Y-%m-%d_%H-%M-%S"

# free and used memory in the system
free -h

# file or filesystem status
stat <fileName>

# enable / disable devices and files for paging and swapping
swapon
swapoff
# summary about used swap devices
swapon --show

# join lines of two files on a common field
join

# total / summarize size of dir; estimate file space usage
du -s dir
du -sh dir
du -sh --exclude={.git,.atom} dir

# size of ./pth/to/dir with subdirs, exclude files matching pattern
du -csh --exclude={.git,.atom} ./ | sort --human-numeric-sort
du --total --separate-dirs --human-readable --exclude={.git,.atom} ./ \
    | sort --human-numeric-sort

# jump to ./pth/to/dir, execute command and jump back
(cd ./pth/to/dir && ls) # works only in bash

# stop-watch; ctrl-d to stop; measure execution time; or try to install
# stopwatch
time read

# process ID of a running program
pidof process-name

# find and kill processIDs belonging processName
kill $(pidof processName)

# :telnet terminate session
Ctrl-\] Enter quit Enter

# download fileX.txt and save it under different location / name
wget http://server/fileX.ext -O ./pth/to/fileY.ext

# download fileX.txt and save it under different location / name
curl -O http://server/fileX.txt > ./pth/to/fileY.txt

# :net ask http://ifconfig.me about myself (ua: User Agent)
curl ifconfig.me/ip/host/ua/port/

# :net test connection with disabled proxy
curl --noproxy "*" -X GET http://www.google.com

# enforce using http_proxy instead of https_proxy in case of
# SSL23_GET_SERVER_HELLO
curl -v --proxy $http_proxy https://www.google.com

# show request/response headers
curl -v URL

# in bash: (doesn't work in fish)
curl --request GET \
 "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=test"

# :iproute2 :net - like ifconfig. State of network interfaces
ip address
# show / manipulate routing, devices, policy routing and tunnels
ip address show eth0
# routing table
ip route
# list routes with pretty output format
routel     # just a wrapper arount `ip route` ?
# Address Resolution Protocol table
ip neighbour

# :net what is my IP
curl ifconfig.me

# exec disc usage command on a remote host and sort results
ssh <HostAlias> du -h --max-depth=1 /pth/to/dir | sort -h
climate ssh-mount / ssh-unmount # climate - command line tools for Linux

# recursively compare dirA with dirB; show only filenames: -q (quiet)
diff -rq dirA dirB | sort

# sort via 2nd key (?column?)
sort -k2 file.csv

# :diff outputs the files in two columns, side by side, separated by spaces
sdiff file1 file0

# output line-numbers
diff --unchanged-line-format="" --old-line-format="" \
     --new-line-format=":%dn: %L" fold fnew

# new line separator for each grep result sh script
grep "pattern" /pth/to/file | awk '{print $0,"\n"}'

# find files and open them in gvim
gvim $(find . -name "*fileToSearch*")

# :gzip list compressed, uncompressed size, compression ratio etc.
gzip -l ./pth/to/file.gz

# write output to stdout; zcat and gunzip -c are identical
gunzip -c / zcat

# commit log since ...
svn log -r \{2017-01-01\}:HEAD <repo-URL/module> > svn.log

# search in commit logs since ... and show changed / affected files (--verbose)
svn log --revision \{2017-01-01\}:HEAD --no-auth-cache --non-interactive \
    --verbose --username '...' --password '...' \
    --search <str1> --search <str2> <repo-URL/module>

# checkout; also for http://<ip:port>/pth; https://<ip:port>/pth
svn co --username <svn-login> svn://<ip:port>/pth

# error: E120106: ra_serf: The server sent a truncated HTTP response body.
svn cleanup; and svn update

# last revision number
svn info <repo-url/module>

# when: svnrdump: E000022: Couldn't get lock on destination repos after 10
# attempts
svn propdel --revprop -r0 svn:rdump-lock <url>

# recursive copy `dotfiles` and `cheat` to server:~/dev/
# i.e. create `server:~/dev/dotfiles/` and `server:~/dev/cheat/`
rsync -ravz dotfiles cheat server:~/dev/
# recursive copy of only the content of `dotfiles` and `cheat`.
# i.e. create only the `server:~/dev/`
rsync -ravz dotfiles/ cheat/ server:~/dev

# copy only certain types of files using include option
rsync -havzr --include="*/" --include="*.sh" --exclude="*" "$src" "$dst"

# :cvs copy files from src to dst excluding everything in CVS directories
# -n --dry-run
rsync -nhavz          --exclude='CVS'                   src/ dst
rsync -nhavz --delete --exclude='CVS'                   src/ dst | grep deleting
rsync -nhavz          --exclude='dir' --exclude='*.jpg' src/ dst
rsync -nhavz --delete --exclude='dir' --exclude='*.jpg' src/ dst | grep deleting

# :cvs copy files from src to dst excluding everything in CVS directories (showing progress)
# exclude hidden files and directories
rsync -nhav          --exclude=".*" --exclude=".*/" src/ dst
rsync -nhav --delete --exclude=".*" --exclude=".*/" src/ dst | grep deleting

# :mv move content of a directory within another directory with the same folders
rsync -nha          --remove-source-files backup/ backupArchives
rsync -nha --delete --remove-source-files backup/ backupArchives | grep deleting

# restart cvs daemon
sudo /etc/init.d/cvsd restart / start / stop / status

# diff tagX tagY
cvs diff -r tagX -r tagY

# get clean copy
cvs update -C ./pth/to/file.ext

# :cvs get revision 1.11
cvs update -P -C -r 1.11 ./pth/to/file.ext

# checkout module from branch or tag
cvs checkout -r branchOrTag module

# commit file with multi-line commit message
cvs commit -m "fst-comment-line\nsnd-comment-line" pth/to/file.ext

# update file
cvs log    -P -d ./pth/to/file.ext

# reminder to leave in 15 minutes / at 13:55
leave +15 / leave 1355

# delete NormalTag from file.ext in version 1.17
cvs tag    -d -r 1.17 NormalTag ./pth/to/file.ext

# delete BranchTag from file.ext in version 1.17
cvs tag -B -d -r 1.17 BranchTag ./pth/to/file.ext

# move   BranchTag to   file.ext in version 1.19
cvs tag -B -F -r 1.19 BranchTag ./pth/to/file.ext

# create BranchTag on   file.ext in version 1.19
cvs tag -b    -r 1.19 BranchTag ./pth/to/file.ext

# move   NormalTag to   file.ext in version 1.63
cvs tag    -F -r 1.63 NormalTag ./pth/to/file.ext

# version and tags
cvs log file.ext
cvs status -v file.ext

# list files associated with a tag; (no blank between -r and TAGNAME)
cvs -q rlog -R -N -S -rTAGNAME MODULENAME

# debug and trace info
cvs -d cvs -t -d :pserver:faizal@localhost:/myrepos \
    ci -m "test" -l "src/foo/Foo.ext"

#
cvs add file.ext

# system information (kernel version etc.)
uname -a

# tail a (log)file over ssh
# -t force pseudo-terminal allocation
ssh -t user@hostname "tail -f /pth/to/file"
# -n redirects stdin from /dev/null
ssh -n user@hostname "tail -f /pth/to/file" &

# :github :ssh
ssh-keygen

# :github now copy-paste the ~/.ssh/id_rsa.pub to github under
# "Account settings / SSH keys / Add another public key"
cat ~/.ssh/id_rsa.pub

# Execute a command as another user
pkexec

# :systemd Control the systemd login manager - logging data
loginctl

# last logged-in users
last

# :processsor :cpu :architecture :cores 32 (i686) /64 (x86_64) bit
lscpu
getconf LONG_BIT

# number of processors / available processing units
cat /proc/cpuinfo | grep processor | wc -l
nproc

# Report processors related statistics
mpstat
mpstat -P ALL
# Display five reports of statistics for all processors at two second intervals
mpstat -P ALL 2 5

# :processor :cpu :mem :hdd :hardware system information for console & IRC
# -Fz filter out privacy sensitive info
inxi -Fxz
inxi --full --extra 1 --filter

# :nice :cpulimit find and delete *.jar and *.class when idling
ionice -c3 find . -name "*.jar" -or -name "*.class" -delete

# :nice :cpulimit change the priority of process 2222 to minimum (-19 max, +19 min prio)
renice +19 2222

# :nice :cpulimit launch process with lowest priority
nice -n +19 command

# :nice :cpulimit limits the CPU usage of a process to max 10%
cpulimit --limit 5 <cmd>

# :nice :cpulimit :ps show statistics for a process nr. 7695
ps -o pid,user,command,nice -p 7695
ps f         # process tree
ps fx        # process tree of all processes
ps u         # user's processes ; ps -aux / ps aux - are different
ps -e        # every process on the system: standard syntax
ps ax        # every process on the system: BSD syntax
ps --windows # show windows as well as cygwin processes (-W)

# find zombie process
# https://vitux.com/how-to-create-a-dummy-zombie-process-in-ubuntu/
ps axo stat,ppid,pid,comm | grep -w defunct

# distro name and ver
cat /etc/*-release
cat /proc/version

# :ubuntu show OS version
lsb_release -a
cat /etc/issue

# :ubuntu when "you may need to re-run your boot" appears
sudo update-grub

# :ubuntu after update / upgrade see
/usr/share/update-notifier/notify-reboot-required

# run fsck on next reboot
sudo touch /forcefsck

# remove old kernels - see dotfiles/bin/remove-old-kernels

# for tabular data
awk

# cut huge file: content between lines 10 and 20 / print 5th line
sed -n "10,20p" /pth/to/file / sed -n 5p /pth/to/file

# cut huge file: content between lines 10 and 20
# see https://unix.stackexchange.com/a/47423
awk 'NR >= 10 && NR <= 20' /pth/to/file > /pth/to/cut-file

# replace 1 occurence
sed --in-place "s/foo/FOO/" /pth/to/file

# replace all occurences of "foo" (globally)
sed --in-place "s/foo/FOO/g" /pth/to/file

# remove empty lines (globally)
sed --in-place '/^\s*$/d' /pth/to/file

# replace newlines with space
sed ':a;N;$!ba;s/\n/ /g'

# :sed :ascii :ebcdic fix new lines and empty chars; \x85 - hexadecimal char
sed "s/\x85/\n/g" <log.txt >log.nl.txt; \
    sed "s/\x85/\n/g" <log.nl.txt >log.nl.00.txt

# read SHA sums from the SHA256SUMS.asc file and check / verify them
sha256sum -c      SHA256SUMS.asc | grep OK
sha256sum --check SHA256SUMS.asc | grep OK

# :ps full command line; command is separated by the \0 byte
tr '\0' ' ' < /proc/<pid>/cmdline

# :ps :top :htop all info related to a process
ls /proc/<pid>

# :ps :top :htop currend working dir of <pid>
cat /proc/<pid>/cwd

# :xfce :ubuntu :popup :message desktop notification
notify-send "Hello World"

# :shortcuts
xfce4-keyboard-settings
https://forum.manjaro.org/t/cant-switch-windows-with-super-tab/2406/4

# :shortcuts http://docs.xfce.org/xfce/xfconf/xfconf-query
xfconf-query --channel xfce4-keyboard-shortcuts -lv
xfconf-query --channel xfce4-keyboard-shortcuts --property "/xfwm4/custom/<Super>Tab" --reset
xfconf-query --channel xfce4-keyboard-shortcuts --property "/xfwm4/default/<Super>Tab" --reset
xfconf-query --channel xfce4-keyboard-shortcuts --property "/xfwm4/custom/<Super>Tab" --create --type string --set "empty"
xfconf-query --channel xfce4-keyboard-shortcuts --property "/xfwm4/default/<Super>Tab" --create --type string --set "empty"

# changes in the xml don't work, use xfce4-settings-editor
locate xfce4-keyboard-shortcuts.xml

# :xfce :gnome :logout
gnome-session-quit / xfce4-session-logout

# difference between nohup, disown and & https://unix.stackexchange.com/a/148698
# - puts the job in the background, that is, makes it block on attempting to read
# input, and makes the shell not wait for its completion.
&
# - removes the process from the shell's job control, but it still leaves
# it connected to the terminal. One of the results is that the shell won't send it
# a SIGHUP. Obviously, it can only be applied to background jobs, because you
# cannot enter it when a foreground job is running.
disown
# - disconnects the process from the terminal, redirects its output to nohup.out
# and shields it from SIGHUP. One of the effects (the naming one) is that the
# process won't receive any sent SIGHUP. It is completely independent from job
# control and could in principle be used also for foreground jobs (although
# that's not very useful).
nohup

# doesn't create nohup.out
nohup command >/dev/null 2>&1
nohup command >/dev/null 2>&1 & disown

# :kill :killall :signals
man 7 signal
man signal

# :virtualbox restart clipboard
killall VBoxClient; and VBoxClient --clipboard & disown

# restart xfce when the title bar dissapears from xfwm4; or rm -r
# ~/.cache/sessions
pkill -KILL -u $USER

# anti-freeze / WD40
killall -SIGUSR2 emacs
killall -HUP emacs

# search man pages for "topic"
man -k topic / apropos -r topic

# brief description of CMD / help for shell built ins
whatis CMD / help

# :net ipv6:
# responds with 'ssh: connect to host <ipv6-address> port 22: Invalid argument'
ssh -6 <ipv6-address>
ping6 -I wlan0 -c 4 <ipv6-address> # responds with 'ping: unknown iface wlan0'

# compare a remote file with a local file
ssh user@host cat ./pth/to/remotefile | diff ./pth/to/localfile -

# :ssh copy ssh keys to user@host to enable password-less ssh logins
# i.e. login to remote host using authorized public key
ssh-copy-id user@host

# :ssh mount folder/filesystem through SSH. Install SSHFS from
# http://fuse.sourceforge.net/sshfs.html. Mount a folder securely over a network
sshfs name@server:/pth/to/folder ./pth/to/mount/point

# mound windows shares under linux
sudo mount.cifs //<windows-machine>/pth/to/dir pth/to/dir \
     -o user=<windows-username>

# :virtualbox mount shared folder
sudo mount -t vboxsf share /home/username/share/

# readonly to readwrite
sudo mount -o remount,rw /partition/identifier /mount/point

# mounted filesystems - table layout
mount | column -t

# error: Requested formats are incompatible for merge and will be merged into mkv.
youtube-dl -f bestvideo[ext=mp4]+bestaudio[ext=m4a] URL

# align csv file
cat data.csv | column -t -s ';'

# :xml command line XML tool (formating)
xmllint

# shared library dependencies
ldd -v $(which vim)

# :library find out if libgconf is installed
ldconfig -p | grep libgconf

# info about ELF files
readelf -v $(which vim)

# :cygwin command-line installer
apt-cyg --mirror \
    http://ftp-stud.hs-esslingen.de/pub/Mirrors/sources.redhat.com/cygwin/x86

# :cygwin print unix form of filename
cygpath -u filename

# :zip zip content of ./pth/to/dir to ./pth/to/file.zip; --recurse-paths is -r
zip --recurse-paths --encrypt ./pth/to/file.zip ./pth/to/dir

# :zip :unzip
unzip ./pth/to/file.zip -d ./pth/to/extract-dir

# :unzip :untar in one step / command
tar -zxvf file.tar.gz

# :listing :compression list file content
tar --list --file <file.tar.xz>
tar --list --file <file.tar.gz>
tar --list --file <file.tar.bz2>
tar --list --file <file.tbz2>
tar --list --file <file.tgz>
tar --list --file <file.7z>

# :listing content of a zip file
unzip -l file.zip

# tar / untar
tar czf ./pth/to/tarfile.gz file0 file1
tar xzf ./pth/to/tarfile.gz

# Remove all files previously extracted from a tar(.gz) file
tar -tf ./pth/to/file.tar.gz | xargs rm -r

# report or omit repeated lines; works only on adjacent duplicate lines
uniq
# deduplicate
sort file.txt | uniq
awk '!visited[$0]++' file.txt > deduplicated-file.txt

# :net :ping :traceroute - check connection
mtr google.com
ethtool eth0
ip neigh show | grep REACHABLE
ip link show

# :net :ping :traceroute check connection
mtr --report www.google.com

# query wikipedia for keyword
dig +short txt keyword.wp.dg.cx

# :iproute2 :net open / listening ports and PIDs of associated processes.
# tcp (-t) udp (-u)
ss -tulpn  # ss - socket statistics replaces obsolete netstat

# edit entries
crontab -e
# view / list entries
crontab -l

# show everything (battery info etc); Advanced Configuration and Power Interface
acpi -V
climate battery

# set / increase / decrease display brightness
xbacklight -set 10 / -inc 10 / -dec 10

# power consumption / management diagnosis tool
sudo powertop

# :gps convert kml to gps
gpsbabel -i kml -f in.kml -o gpx -F out.gpx

# IBM USS OS/390: ebcdic / ascii conversion
iconv -f IBM-1047  -t ISO8859-1 ebcdic.file > ascii.file
iconv -f ISO8859-1 -t IBM-1047  ascii.file  > ebcdic.file
# list all code pages
iconv -l
# show mime type strings rather than the more traditional human readable ones
file --mime fileName

# show first/last 100 bytes
tail -c 100 fileName
head -c 100 fileName

# :net what is currently using inet
lsof -P -i -n | cut --fields=1 --delimiter=" " | uniq | tail --lines=+2

# remove sections from each line of files
cut

# list open files / what is currently using file
lsof
# open files whose inet address matches ADDR; -t: terse output
lsof -i:[ADDR] -t
# fish: process listening on the <portNr>
ps (lsof -i:<portNr> -t)

# what is currently using file / files opened by a running command
strace <cmd> 2>&1 | grep openat

# check file types and compare values
test
# determine file type / mime type
file
file --mime

# :tabs convert spaces to tabs / tabs to spaces
expand / unexpand file.txt

# simple GUIs
zenity, whiptail

# :metric :monitor
collectd # system statistics collection daemon
telegraf # plugin-driven server agent for collecting & reporting metrics

# monitor file and network activities of a PROCESS
# max printed string size 10000
strace -f -e trace=file,network -s 10000 -o outfile.log PROCESS ARGS

# trace process / library
ptrace / ltrace

# :net Simple Network Management Protocol
snmp

# :net packet analyser
wireshark

# :net :ftp trivial file transfer program
tftp

# :ftp toggle bash / ftp
! / exit

# :ftp connect to ipaddress and login with username
open ipaddress ENTER user username

# :ftp get file from remote computer
get file / mget file

# :ftp sends site specific commands to remote server
site

# System Information Extraction Program:
sysinfo

# :fs get extended attributes of filesystem objects (inst attr)
getfattr

# extended attributes on XFS filesystem objects
attr

# hash message authentication code
HMAC

# enterprise cryptographic filesystem for Linux
ecryptfs

# :debian-goodies
# display all the dependencies of the given package and when each dependency was
# installed
which-pkg-broke vim
# list the enhancements for all installed packages
check-enhancements --installed-packages
# show installed packages occupying the most space
dpigs
# search all files in specified packages
sudo dgrep "text" vim

# :debian-goodies - check which processes need to be restarted after an upgrade
sudo needrestart   # replaces & inspired by checkrestart
# check if the /var/run/reboot-required exists
ls /var/run/reboot-required
# list of packages to reboot
/var/run/reboot-required.pkgs

# start COMMAND and kill it if it is running still after 5 sec
timeout 5s COMMAND

# :net retcode==1 - online; retcode!=1 offline
nm-online --exit; echo "retcode: $?"

# :wifi :net
nm-applet
man nmcli-examples
nmcli --ask device wifi list               # 1. list
nmcli --ask device wifi connect WIFIonICE  # 2. connect
nmcli --ask device disconnect wlan0        # 3. disconnect
# general status and operations
nmcli --ask general

# :rpm display installed packages
rpm -qa

# root login / console / prompt
sudo -i

# :android
sudo aptitude install android-tools-adb android-tools-fastboot
# check plugdev membership
groups
adb devices; dmesg; adb logcat; adb shell
adb push src dst

# unsupported / obsolete packages
ubuntu-support-status --show-unsupported

# user management
sudo adduser <user>
sudo deluser --remove-home <user>             # userdel is a low level utility
sudo usermod --append --groups vboxsf <user>  # modify account
# euid - effective user id: number or id; see whoami
sudo pkill -KILL --euid <user>                # logout / logoff different user

# run a program in a new session
setsid

# monitor the progress of data through a pipe
pv

# Ultimate Plumber: Linux pipes with instant live preview
https://github.com/akavel/up

# :maven :mvn :proxy
mvn package
mvn install / mvn clean # mvn install seems not to be needed
# https://www.mkyong.com/maven/how-to-enable-proxy-setting-in-maven/
{M2_HOME}/settings.xml

# :sftp / :ftp - SSH File Transfer from the OpenSSH / FTP over SSL
# FTPS - FTP over SSL
lftp

# :HPKP HTTP Public Key Pinning; Similair to HSTS header
# Create your HPKP hash: https://report-uri.io/home/pkp_hash

# install nodejs with (behind) or without proxy:
# 1.
set nodeJsVer 13
# 2.1 without proxy
curl -sL https://deb.nodesource.com/setup_$nodeJsVer.x | sudo -E bash -
sudo apt install --yes nodejs
# 2.2 behind proxy
sudo apt-key adv --keyserver-options \
     http-proxy="http://<proxy-ip>:<proxy-port>/" \
     --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 68576280
sudo apt-add-repository \
    "deb https://deb.nodesource.com/node_$nodeJsVer.x "(lsb_release -sc)" main"
# list repositories: see list-ppa
# complete uninstall; see also https://stackoverflow.com/a/11178106/5151982
sudo rm -rf \
  /usr/local/lib/node_modules/npm \
  /usr/local/bin/npm \
  /usr/local/bin/node \
  /usr/local/share/man/man1/node.1

# :npm :nodejs :javascript dependency management
curl -o- -L https://yarnpkg.com/install.sh | bash  # also update
yarn add                  # add package to use in your current package
yarn global add <package>
yarn init                 # initialize development of a package
yarn install              # install all dependecies defined in package.json
yarn publish              # publish package to a package manager
yarn remove               # remove unused package from your current package
yarn upgrade

# :nodejs - alias to the node command
npm install --global <package>
npm outdated
npm update --global
# install the electron package
npm install --global --unsafe-perm=true electron
npm search electron\*

# :security - don't execute postinstall hooks https://youtu.be/24tQRwIRP_w?t=952
npm config set ignore-scripts true

# :nodej
npm install --verbose <package> / npm install -dd <package>
npm config list
npm config set color=false
npm config set progress=false
npm install --no-colors --verbose result-core
npm cache verify / npm cache clean / npm cache clean --force
npm config set registry https://registry.npmjs.org/ [or http]
npm config set proxy "http://<ip:port>/"
npm config set https-proxy "https://<ip:port>/"

# :net - data transfered today / per month
sudo vnstat -u -i wlan0; and vnstat

# :net - managing a netfilter firewall; ufw - uncomplicated firewall
sudo ufw status numbered
sudo ufw delete <rule-nr>
sudo ufw allow <port>
sudo ufw allow <port>/tcp

# :net :rdp :remote-desktop - `-p` ask for password, `-f` full screen
rdesktop -u <login> -p - <computer>:3389
rdesktop -f -u <login> -p - <computer>:3389
# :net :rdp remote desktop
sudo /etc/init.d/xrdp restart

# :shred :permanet-delete - shred doesn't work on dirs
shred --verbose --remove <pth/to/file>

# :shred permanet delete: shred doesn't work on dirs
find . -type f -print0 | xargs -0 shred --remove

# :shred :permanet-delete - srm doesn't delete hardlinked files
srm -r <pth>

# synchronize sytem date behind proxy
curDate="$(wget -S "http://www.google.com/" 2>&1 \
    | grep -E '^[[:space:]]*[dD]ate:' \
    | sed 's/^[[:space:]]*[dD]ate:[[:space:]]*//' \
    | head -1l \
    | awk '{print $1, $3, $2,  $5 ,"GMT", $4 }' \
    | sed 's/,//')"
sudo date -s "${curDate}"

# Add and remove modules from the Linux Kernel
modprobe -a vboxguest vboxsf vboxvideo

# :vbox
sudo aptitude install virtualbox-guest-additions-iso
sudo /etc/init.d/virtualbox restart
sudo /etc/init.d/virtualbox-guest-utils start

# :atom - delete all environment states
atom --clear-window-state
# list / backup installed packages to a file
apm list --installed --bare > ~/dev/dotfiles/.atom/package.list
# install packages from a file
apm install --packages-file ~/dev/dotfiles/.atom/package.list
# update all packages
apm update
# restore / synchronise settings
rsync -zarv --include="*/" --include="*.cson" --exclude="*" ~/.atom/* ~/dev/dotfiles/.atom

# :rsync - options short / long versions
-h, --human-readable
-a, --archive             # archive mode; equals -rlptgoD (no -H,-A,-X)
-v, --verbose
-z, --compress
-r, --recursive
-n, --dry-run
-p, --perms                # preserve permissions

# :bluetooth bluez:
systemctl      status bluetooth
sudo systemctl enable bluetooth
sudo systemctl start  bluetooth
bluetoothctl
help # list of available commands of bluetoothctl

# :bluetooth :bluez - this actually works
# send file to /storage/emulated/0/bluetooth
bluetooth-sendto --device=XX:XX:XX:XX:XX:XX local-fname

# :bluetooth :bluez see https://ubuntu-users.livejournal.com/439582.html
# search for the appropriate channel for file transfers
sdptool search FTP
obexfs -bXX:XX:XX:XX:XX:XX -B<channel> ~
sdptool browse XX:XX:XX:XX:XX:XX
# Browse your cellular's files. List the tree of directories.
obexftp -b XX:XX:XX:XX:XX:XX -l /
# use the '@'
ussp-push XX:XX:XX:XX:XX:XX@ local-fname remote-fname

# :bluetooth :bluez upload / push
obexftp -b XX:XX:XX:XX:XX:XX -c /Download -p local-fname

# :bluetooth :bluez download
obexftp -b XX:XX:XX:XX:XX:XX -c /Download -d remote-fname

# super fast ram disk
sudo mkdir -p /mnt/ram
sudo mount -t tmpfs /mnt/ram -o size=8192M

# mount / umount (usb) disk without 'root' as the mount command.
# udisksctl uses udiskds binary launched by udisks2.service.
# see also udev / udevadm
# test if /dev/sdc1 is mounted
udisksctl info    --block-device /dev/sdc1 | rg MountPoints: | rg /
udisksctl mount   --block-device=/dev/sdc1
udisksctl unmount --block-device=/dev/sdc1
# make file accessible as a block-device
udisksctl loop-setup  -f disk.img
udisksctl unmount     -b /dev/loop8
udisksctl loop-delete -b /dev/loop8

# Change the label on an ext2/ext3/ext4 filesystem
e2label

# intercept stdout to a log file
cat file | tee -a file.log | cat /dev/null

# sound audio music jack jackd supercollider overtone
sudo alsa force-reload
speaker-test
arecord / aplay
# 1. verify iterface in:
qjackctl
# then A) "pause" pulseaudio while qjackctl runs and "respawn" pulseaudio when
# qjackctl is terminated.
pasuspender qjackctl
# or alternatively to A):
# B) kill the existing pulseaudio process, start the jack_control process and
# re-start the pulseaudio process.
pulseaudio --kill
jack_control start; and jack_control exit
pulseaudio --start
# see also jack active ports & some extra info
jack_lsp
jack_lsp --connections  # list connections to/from each port

# find 20 biggest files
du -a ~ 2>/dev/null | sort -n -r | head -n 20

# -h, --no-dereference   affect symbolic links instead of any referenced file
chown -h myuser:mygroup mysymbolic

# SMBIOS - System Management BIOS
# DMI table - Desktop Management Interface
dmidecode
sudo dmidecode --type bios
sudo dmidecode --type baseboard
# see also: system chassis processor memory cache connector slot

# Setup Wake on LAN https://tek.io/37ZXhPs
sudo ethtool -s <interface> wol g  # list of interfaces: ip addr
# test:
#    sudo systemctl suspend   # or: sudo poweroff
# then
wakeonlan <MAC-address>
# TODO add powernap

# fully resolve the link; report errors; see also: realpath
readlink --canonicalize --verbose <linkname>
# fix broken link
ln -sfn                                <target> <linkname>
ln --force --symbolic --no-dereference <target> <linkname>

# create bootable usb drive
set --local isoFile /path/to/file.iso
sudo dd bs=4M if=$isoFile of=/dev/sdh3 status=progress oflag=sync

# printer
http://localhost:631/help/options.html

# YAML: YAML Ain't Markup Language
# human-readable data-serialization language. Python style indentation
# [] lists, {} maps

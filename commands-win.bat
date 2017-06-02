#!/bin/bash

# Microsoft Management Console
mmc

# windows alternative to locate / which
where telnet

# net: windows: show or set host name
hostname -i

# windows: command line: logoff and force
shutdown /l /f

# windows: net: drive: drives: list mapped drives
net use

# windows: net: drive: drives: map \\sever\path under P:
net use P: \\server\path

# windows: net: drive: drives: unmap P:
net use P: /delete

# windows: user account information
net user <username> /domain

# windows: open ports
netstat -a | find "LISTENING"

# windows: set system variable system-wide
setx NAME value /m

# windows: save system info
msinfo32 /report msinfo32.txt

# windows: batch: line continuation
^

# windows: OS version; save system info
systeminfo /s srvmain /u maindom\hiropln /p p@ssW23 /fo table

# windows: Windows Management Instrumentation Command-Line (WMIC)
wmic /?

# db2: windows:
echo %DB2CLP%

# windows: checksum [HashAlgorithm] must be uppercased
CertUtil -hashfile path\to\file SHA1

# windows: checksum [HashAlgorithm] must be uppercased
CertUtil -hashfile path\to\file [HashAlgorithm]

# cygwin: ps: show windows as well as cygwin processes (-W)
ps --windows

# cygwin: bash: print windows form of filename
cygpath -w filename

# cygwin: command-line installer
apt-cyg --mirror http://ftp-stud.hs-esslingen.de/pub/Mirrors/sources.redhat.com/cygwin/x86

# cygwin: bash: print unix form of filename
cygpath -u filename

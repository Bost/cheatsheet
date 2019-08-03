#!/usr/bin/env fish
exit 1 # just in case ...

# include other script; also in bash
source /pth/to/script

# reload config
source ~/.config/fish/config.fish
source ~/.bashrc

# webconfig.py
fish_config

# :fish - reload function / alias
type myfunc

# Where is PATH variable set? https://askubuntu.com/a/706069/401596
grep --color -H 'PATH=' ~/.bashrc ~/.profile ~/.bash_profile ~/bash.login \
     ~/.bash_aliases /etc/bash.bashrc /etc/profile \
     /etc/profile.d/* /etc/environment 2> /dev/null

# available shells; current shell; change shell
cat /etc/shells; echo $SHELL; chsh -s /usr/local/bin/fish

# :bash :fish - sequence from 0 to 10 (both included) increment by 2
seq 0 2 10

# :bash remove a line from shell history (i.e. password) see also ~/.bash_history
history -d

# :fish see also ~/.config/fish/fish_history
history delete --contains <substring>
history delete --contains delete

# :shell :bash :fish - see what the shell does with the various types of quoting
# https://unix.stackexchange.com/a/417408
printf '<%s>\n' G "G" 'G' \G "\G" '\G' \\G "\\G" '\\G'

# :bash - secure (password) prompt; doesn't work in fish
read -s

# :fish :retval :retcode :return code :exit-code (in bash $?)
$status

# indicate how a command would be interpreted
type --all <cmd> # all of possible definitions of <cmd>

# :fish - show content of foo fn / list fns
type foo / functions foo / functions -n

# :fish - copy 'foo' fn to a new fn 'bar' / erase the 'bar'
functions -c foo bar / functions -e bar

# :fish :variables - unset shell variable
set --erase myvar
set -e      myvar

# :fish :variables - scope is local to the current block
set --local myvar 1
set -l      myvar 1

# :fish export variable to child processes (make it an 'environment variable')
set -x        myvar 1
set --export  myvar 1
set -u        myvar
set -unexport myvar

# :fish - all function arguments from 3rd to the last
$argv[3..-1]

# :fish
test (string escape -- $argv) = "--switch" # string equality
test -e file.txt                           # file existance
# true if the length of $myvar is non-zero i.e. non-empty string
# https://stackoverflow.com/a/47743269; always use "" around the myvar
test -n "$myvar"; and echo "true == defined;" or echo "false == undefined"
# true if the length of $myvar is zero i.e. empty string
test -z "$myvar"; and echo "true == undefined"; or echo "false == defined"

# :calculate :fish
# examples https://nicolas-van.github.io/programming-with-fish-shell
math "1 + 2"

# :fish - handle fish key bindings
bind / help bind

# :bash - display shortcuts (including Ctrl+L, Ctrl+R); \e - ESC, \C-y - Ctrl+y
bind -P / help bind

# :alias escape command aliases
\\\[command\]

# get the parameter / argument of the last command. see bind -P
Alt-. / Esc-.

# set vi bindings
set -o vi

# :bash disable pathname expansion - globbing
set -f
set -o noglob

# :bash shell writes its input to standard error as it is read
set -v
set -o verbose

# :bash shell writes standard error a trace for each command
set -x
set -o xtrace


# :scripting loc_variable - visible only within given code block
local loc_variable=value

# args: function arguments
$*

# args: all arguments / all arguments of the last command / count of arguments
$@ / !* / $$

# exit code (return value / retcode) of the last command (0: success)
# e.g. adduser joe; echo $?
$?

# build-in commands
$-

# last argument of the previous command. At the shell startup, it gives the
# absolute filename of the shell script being executed
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

# bash: insert contents of file.txt into input of tr and output results to
# fileNew.txt
tr '[A-Z]' '[a-z]' < file.txt > fileNew.txt

# bash: mass move/copy/rename
mmv \*.JPG \#1.jpc
mmv \* \#1.rexx

# bash: visual calender for februar 2004 / whole year 2004
cal 2 2004 / cal -y 2004

# bash: ? define function in bash ?
foo() { date; }

# bash history, abort history
C-r, C-g

# bash: shebang: stop the script after any error
#!/bin/bash -e

# bash: shebang: debugging: set -x; stop on error: set -e
#!/usr/bin/env fish

# bash: debug script
bash -x script


# bash: redirect stderr (2) to stdout (1) and save it to command.log
./command.sh 2>&1 | tee command.log

# suppress stderr messagess
./script.sh 2> /dev/null

# bash: find: redirect: separate / combine sdterr and stdout; doesn't work with
# the tee command
./command.sh 1>str.out 2>str.err / ./command.sh &>combined.out

# bash: redirect: type in stuff and wait unit EOF gets typed
cat >>EOF

# type partial cmd, kill this cmd, check something you forgot, yank the cmd,
# resume typing
Ctrl-u ... Ctrl-y

# avoid backticks
echo "Date is: $(date +%D)"

# create a script from last executed cmd
echo "!!" > foo.sh

# time measurement of a fish function
# https://github.com/fish-shell/fish-shell/issues/117
/usr/bin/time --portability fish --command <fn> <prm1> <prm2> ...
# TODO try out
function time --description 'Wrapper for time'
/usr/bin/time --portability /usr/bin/fish --command $argv
end
# see also:
<fn> <prm1> <prm2> ...
echo $CMD_DURATION

# xfce: launcher: emacs uses bash variables; -i interactive shell, -c read
# following command
bash -i -c ./pth/to/emacs

# fish: bash: locate command
command -v <command>  # fish buildin
which      <command>  # debian

# cygwin: bash: print windows form of filename
cygpath -w filename

# bash eval string
eval "${cmd}"

# :bash :fish - bugs in shell scripts
http://www.shellcheck.net/

# :bash :fish - help text that matches each argument
http://explainshell.com/

# Show numerical values for each of the 256 colors in bash
for code in {0..255}; do echo -e "\e[38;05;${code}m $code: Test"; done

# syntax - single / double brackets; variables
https://unix.stackexchange.com/a/416716
https://www.thegeekstuff.com/2010/06/bash-conditional-expression/
https://www.cyberciti.biz/faq/unix-linux-bash-script-check-if-variable-is-empty/
https://www.cyberciti.biz/faq/linux-unix-howto-check-if-bash-variable-defined-not/

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

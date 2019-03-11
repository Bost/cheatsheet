#!/usr/bin/env bash
exit 1 # just in case ...


# bash: find: redirect: separate / combine sdterr and stdout; does not work with
# the tee command
./cmd.sh 1>str.out 2>str.err / ./cmd.sh &>combined.out

# emacs find - exclude backup files
find . -type f ! -name "*~" -exec grep -n --with-filename --regexp="String" {} +

# find and delete empty files / dirs
find . -empty -type f -delete / find . -empty -type d -delete

# search for *fileToSearch* in multiple directories
find ./ foo/ bar/ -name "*fileToSearch*"

# TODO what does the `-print` switch?
find . -name '*.properties' -exec grep -lir ".*String.*" '{}' \; -print

# find only filenames matching '*.clj' containing 'project'
find . -name '*.clj' -exec grep -il 'project' '{}' \;
find . -name '*.clj' | xargs grep -l 'project'

# quit search after finding 1st match
find . ... -print -quit

# find all files and dirs modified in the last 7 days; between: older: newer:
find . ... -mtime -7

# bash: flatteb all xml files from all src subdirs to dst, fork off a new copy
# process for every file; TODO test it!
find ./src -iname '*.xml' -exec cp \\{\\} ./dst \\;

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

# find: recursive search for "String" in ... (with '.' at the end)
grep -nir "String" --exclude-dir={.git,CVS} --include=\*.{el,clj,cljs,cljc} ./

# find: grep-help: recursive search for "String" in ... (with '.' at the end)
grep -nir "String" --exclude-dir={.git,CVS} --include=\*.{log,propeties,cfg,txt} ./

# build and execute command lines from standard input
xargs

# search for "String" in *.txt files (with spaces in filenames)
find ./ -type f -name "*.txt" -print0 | xargs -0 grep --files-with-matches "String"

# find and delete *.jar and *.class when idling
ionice -c3 find . -name "*.jar" -or -name "*.class" -delete

# search for File.class in jar files
find . -name "*.jar" | xargs grep File.class

# new line separator for each grep result sh script
grep "pattern" /path/to/file | awk '{print $0,"\n"}'

# grep: colorize grep in less
grep --color=always pattern file | less -R

# grep: lines containing any upper character
grep "[[:upper:]]" file

# grep: intersection between two files
grep -Fx -f file1 file2

# grep: search for "String" and print 2/4 lines before/after matching line
grep -B 2 -A 4 "String" / grep --before-context=2 --after-context=4 "String"

# grep: print only filenames of the files containing "String"
grep "String" * | cut -f1 -d:

# zgrep: search possibly compressed files for a regular expression
zgrep "String" myfile.gz / zgrep 'GET /blog' access_log.gz

# find images
find . -type f -exec file {} \; | grep --only-matching --perl-regexp '^.+: \w+ image'

# between: older: newer:
find ~/Pictures -type f -newer
find ~/Pictures -type f -not -newermt "2016-02-01"

# find all files recursively newer than given time
find /directory -newermt $(date +%Y-%m-%d -d '1 day ago') -type f -print

# substitute / replace all occurences of ... with ...
find ./ -type f -name "*.fish" -print0 | xargs -0 sed --in-place "s/apt-get/apt/g"

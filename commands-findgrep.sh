# bash: find: redirect: separate / combine sdterr and stdout; does not work with the tee command
./command.sh 1>str.out 2>str.err / ./command.sh &>combined.out

# emacs find - exclude backup files
find . -type f ! -name "*~" -exec grep -nH -e "String" {} +

# find and delete empty files / dirs
find . -empty -type f -delete / find . -empty -type d -delete

# search for *fileToSearch* in multiple directories
find ./ foo/ bar/ -name "*fileToSearch*"

#
find . -name *.properties -exec grep -lir ".*String.*" \'{}\' \; -print

# quit search after finding 1st match
find . ... -print -quit

# find all files and dirs modified in the last 7 days
find . ... -mtime -7

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

# grep: find: recursive search for "String" in ... (with '.' at the end)
grep -nir "String" exclude-dir={.git,CVS} include=\*.{el,clj,cljs,cljc} ./

# grep: find: grep-help: recursive search for "String" in ... (with '.' at the end)
grep -nir "String" exclude-dir={.git,CVS} include=\*.{log,propeties,cfg,txt} ./

# grep: search for "String" in *.txt files (with spaces in filenames)
find ./ -type f -name "*.txt" -print0 | xargs -0 grep -l "String"

# find and delete *.jar and *.class when idling
ionice -c3 find . -name "*.jar" -or -name "*.class" -delete

# search for File.class in jar files
find . -name "*.jar" | xargs grep File.class

# new line separator for each grep result sh script
grep "pattern" /path/to/file | awk '{print $0,"\n"}'

# emacs find - exclude backup files
find . -type f ! -name "*~" -exec grep -nH -e "String" {} +

#
find . -name *.properties -exec grep -lir ".*String.*" \'{}\' \; -print

# grep: colorize grep in less
grep color=always pattern file | less -R

# grep: lines containing any upper character
grep "[[:upper:]]" file

# grep: intersection between two files
grep -Fx -f file1 file2

# grep: search for "String" and print 2/4 lines before/after matching line
grep -B 2 -A 4 "String" / grep before-context=2 after-context=4 "String"

# grep: print only filenames of the files containing "String"
grep "String" * | cut -f1 -d:

# grep: find: recursive search for "String" in ... (with '.' at the end)
grep -nir "String" exclude-dir={.git,CVS} include=\*.{el,clj,cljs,cljc} ./

# grep: find: grep-help: recursive search for "String" in ... (with '.' at the end)
grep -nir "String" exclude-dir={.git,CVS} include=\*.{log,propeties,cfg,txt} ./

# grep: search for "String" in *.txt files (with spaces in filenames)
find ./ -type f -name "*.txt" -print0 | xargs -0 grep -l "String"

# zgrep: search possibly compressed files for a regular expression
zgrep "String" myfile.gz / zgrep 'GET /blog' access_log.gz

# search for File.class in jar files
find . -name "*.jar" | xargs grep File.class

# bash: find images
find . -type f -exec file {} \; | grep -o -P '^.+: \w+ image'

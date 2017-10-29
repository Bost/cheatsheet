#!/usr/bin/env bash
exit 1 # just in case ...

# eclipse: cvs:
.metadata/.plugins/org.eclipse.team.cvs.ui/repositoriesView.xml

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

# db2: init environment
db2cmd -i -w db2clpsetcp

# db2: license info / add license
db2licm -l / db2licm -a db2conpe.lic

# db2:
db2 CONNECT TO database USER userID USING password

# db2:
db2 get connection state

# db2:
db2 CATALOG TCPIP NODE $node_name REMOTE $ip_addr SERVER $port

# db2:
db2 CATALOG DATABASE $database_name AT NODE $node_name AUTHENTICATION server

# db2:
db2 UNCATALOG NODE $node_name

# db2:
db2 UNCATALOG DATABASE $database_name

# db2:
db2 TERMINATE

# db2:
db2 list db directory > db.txt | gvim db.txt

# db2:
db2 list node directory > node.txt | gvim node.txt

# db2:
db2 list tables

# db2: execute script.sql from normal / command line processor (=>) shell
db2 -vf script.sql -t / !db2 -vf script.sql -t;

# db2:
db2 -tvf script.sql -z file.log

# db2: execute script.sql from normal shell (Befehlsfenster)
db2 -td; -v -f script.sql

# db2: in mysql: limit N
db2 select * from DBASE.TABLE fetch first 2 rows only

# db2: error description for sqlcode=-302
db2 ? sql302

# db2 version
db2 SELECT GETVARIABLE('SYSIBM.VERSION') FROM SYSIBM.SYSDUMMY1

# db2: db2cc version
java -cp ./path/to/db2jcc.jar com.ibm.db2.jcc.DB2Jcc -version

# mysql: execute script.sql as the root user
mysql -u root -t < script.sql

# mysql: in db2 fetch first N rows only
mysql select * from mantis.state_mantis_id limit 10

# mysql:
mysql show tables in dbaseName

# mysql: describe table
mysql show columns in tableName

# mysql: server start
/usr/bin/mysqld_safe &

# oracle: execute script.sql
@C:\path\to\script.sql

# solaris: sha1 checksum
/usr/bin/digest -a sha1

# solaris: wget
/usr/sfw/bin/wget

# solaris: ps: full command line (needs: sudo rootsh -i -u ... )
/usr/ucb/ps -auxww

# solaris: displays information about processors
psrinfo

# solaris: net: ipconfig
/usr/sbin/ifconfig -a

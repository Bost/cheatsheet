var jsonHost = [
    ['', ''],
    ['', ''],
    ['', ''],
    ['PU', 'Processing Unit: brain - executes instructions; inside CPC cage(frame)'],
    ['CPC', 'Central Processing Complex'],
    ['CPs', 'Central Processors'],
    ['CPACF', 'PUs for encryption / decription'],
    ['IFL', 'Integrated Facility for Linux: PUs (engines) for Linux Workload'],
    ['ICF', 'PUs for coordination of system effort'],
    ['SAP', 'PUs to assist PU with workload on I/O'],
    ['zAAP', 'PUs for execution java code'],
    ['zIIP', 'PUs for accelerated DB2 performance'],
    
    ['RAM', 'main storage; inside the CPC cage; up to 384GB'],
    ['channel', 'independent data and control path: I/O devices &lt;-&gt; Memory'],
    ['CTCA', 'Channel To Channel connection'],
    ['OSA / ESCON / FICON', 'channels'],
    ['DASD', 'Direct Access Storage Device: like a hard drive'],
    ['HLQ', 'High Level Qualifier: 1st part of data set name'],
    ['VOLSER', 'Volume Serial: Disk volume (pack) identification'],
    ['bytes/tracks/cylinders', ''],
    ['VB / FB ', 'variable / fixed lenght'],
    ['MIPS', 'Millions of Instructions per Sec: Misleading Indicator of Performance'],
    ['SU / MSU', 'Service Unit / Millions of Service Units'],
    ['SU_SEC', 'amount of service units of work (Monitoring)'],
    ['RMF', 'Resource Management Facility'],
    ['XMIT-Lock Mode', 'Ctrl-R terminal reset'],
    ['AID key', 'Attention Identifier'],
    ['zPDT', 'IBM System z Personal Development Tool'],
    ['Hercules.emulator', 'Virtual mainframe - on github'],
    ['https://github.com/mainframed', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['ISPF', 'Interactive System Productivity Facility: (GUI) interface for 3270 TSO Terminals; file browser, editor, made of \'panels\''],
    ['start sdsf', 'launched from ispf'],
    ['ISPF/PDF', 'Interactive System Productivity Facility / Program Development Facility'],
    ['TSO',  'Time Sharing Option (CLI Interface, multi user) - used to run ISPF'],
    ['TSO TMP', 'TSO Terminal Monitor Program'],
    
    ['tso listds', 'List Data Set'],
    ['tso listds fname*', 'ispf: search for files'],
    ['tso netstat home', ''],
    ['tso omvs', ' gives /bin/sh'],
    ['tso rvary', 'change status of RACF dbase: switch, (de)activate (without IPL)'],
    ['tso rvary list', ''],
    ['LISTDSI', '?'],
    
    ['F3 / x / logoff', 'ispf: exit'],
    ['PDS', 'Partitioned Data Set: some kind of folder; contains other data sets; sequential data sets; part == members'],
    ['REXX', 'Restructured Extended Executor Language: python "equivalent" on mainframe'],
    ['SAA', 'System Application Architecture'],
    ['VSAM', 'file system: Virtual Storage Access Method (clusters)'],
    ['CICS', 'Customer Information Control System'],
    ['DLBL', 'Disc Label'],
    ['LKED', 'Link Edit Procedure'],
    ['DSC', 'Data Set Commander'],
    ['DSCB', 'Data Set Control Block'],
    ['MVS', 'Multiple Virtual Storage'],
    ['MVS/EX', 'Multiple Virtual Storage/eXtended Architecture'],
    ['MVS/ESA', 'Multiple Virtual Storage/Enterprise System Architecture'],
    ['MGFA', 'Multiple Group Factor Analysis'],
    ['RSCS', 'Remote Spooling Communication Subsystem'],
    ['VSE', 'Virtual Storage Extended'],
    ['VSE/AF', 'Virtual Storage Extended/Advanced Functions'],
    ['SCP', 'System Control Program'],
    ['IPL', 'Initial Program Loading'],
    ['ASI', 'Automatic System Initialisation'],
    ['JCL', 'Job Control Language'],
    ['JCS', 'Job Control Statement'],
    ['JCC', 'Job Control Command'],
    ['JCP', 'Job Control Procedure'],
    ['SPOOL', 'Simultaneous Peripheral Operations Online: Queue'],
    ['SDSF', 'Spooler Display and Search Facility: look at batch output logpool'],
    ['POWER', 'Priority Output Writers Execution Processor and Input Reader'],
    ['DL/I', 'Data Language One'],
    ['TP', 'Teleprocessing Monitor'],
    ['II', 'Interactive Interface'],
    ['IC', 'Interactive Computing'],
    ['ICCF', 'Interactive Computing and Control Facility'],
    ['RACF', 'Resource Access Control Facility: security system; access control and auditing, can be replaced by ACF2, TOPSecret; dbase referencing all the files on filesystem, with access rights'],
    ['$RC', 'Return Code'],
    ['SVA', 'Shared Virtual Area'],
    ['SDL', 'System Directory List'],
    ['CMS', 'Conversational Monitoring System'],
    ['CUA', 'Channel Unit Address'],
    ['ACB', 'Access Control Block'],
    ['BM / TM', 'Block Mark / Tape Mark'],
    ['ESDS / KSDS / RRDS', 'Entry Sequenced - / Key Sequenced - / Relative Record - Data Set'],
    ['$RC', 'Return Code'],
    ['$MRC', 'Max Return Code'],
    ['$ABEND', 'Abnormal End'],
    ['ESD', 'External Symbol Dictionary'],
    ['RLD', 'Relocation Dictionary'],
    ['END', 'End Of Object Module'],
    ['EOP', 'End of Procedure'],
    ['CI', 'Control Interval'],
    ['USS', 'Unix System Services'],
    ['VTAM', 'Virtual Telecommunications Access Method'],

    
    ['DATE(\'E\')', 'rexx: '],
    ['say \'C1 81\'x', 'rexx: hexadecimal'],
    ['pull varname', 'rexx: read user input'],
    [';', 'rexx: line continuation'],
    ['if ... then do ... end else do... end', ''],
    ['CEMT', 'Invoke Master Terminal functions (dynamic user control for CICS)'],
    ['CEST', 'Supervisory Terminal'],
    ['CECI', 'Command Interpreter'],
    ['CESF', 'Transaction to Sign Off from CICS'],
    ['OMVS', 'Invokes z/OS Unix Shell, i.e. gives /bin/sh; root is in BPX.SUPERUSER'],
    ['JES', 'Job Entry Subsystem'],
    ['dataset', 'kind of a file'],
    ['IND$FILE', 'file transfer'],
    ['TPF', 'Transaction Processing Facility'],
    ['', ''],
    ['', 'Master Console: kind of root; \'SPECIAL\''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['SYSRECFM', 'Record Format: optained by by x = Listdsi(your-dataset-name)'],
    ['RECL', 'Record Length: optained by by x = Listdsi(your-dataset-name)'],
    ['SYSLRECL', 'Logical Record Length'],
    ['SYSALLOC', 'Allocation in space units'],
    ['SYSDSORG', 'Data Set organisation: PS / PSU / DA / DAU / IS / ISU / PO / POU / VS / ???'],
    ['EXECIO', 'Read / write data to / from dataset (Not a part of REXX standard)'],
    ['ALLOC / FREE', 'Allocate / Free dataset'],
    ['DISP', 'Disposition'],
    ['RECFM=F / RECF=V / RECFM=FB / RECFM=VB', 'Record Format: fixed / variable, unblocked / blocked / '],
    ['RECFM=FBA / RECFM=FBM', 'Record Format: record contains ISO/ANSI / Machine code control chars'],
    ['CALL', 'Rexx instruction (routine) / control of traps'],
    ['LOAD', 'DB2 utility: control statement; loading vals into a table'],
    ['STEPLIB', 'TSO/E cm; specify private load libs: add / remove / acti- / deactivate / display '],
    ['', ''],
    ['', ''],
    ['', ''],
    ['DSORG=PS / DSORG=PO / DSORG=DA', 'Dataset Organisation: Physical Sequential / Partitioned / Direct'],
    ['HOSTVARS / PROCVARS', ''],
    ['DSNUPROC', ''],
    ['prefix.SSPGM', 'DB2 subsystem library'],
    ['DSN', 'DB2 subsystem / ? Dataset Name ?'],
    ['DSNUPROC', 'Supplied JCL procedure; Invoke DB2 online utitity'],
    ['DD', 'Data Definition: describe dataset, specify I/O resources for DD'],
    ['PTF', 'patch applied by a system programmer'],
 ]

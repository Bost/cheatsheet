var jsonHost = [
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['ERP', 'Enterprise Resource Planning'],
    ['IOP', 'Input Output Processor'],
    ['LIC', 'Licensed Internal Code'],
    ['SMS', 'System Managed Storage'],
    ['CU', 'Control Unit'],
    ['PU', 'Processing Unit: brain - executes instructions; inside CPC cage(frame)'],
    ['CP', 'Customer Processor: normal processor'],
    ['CPU', 'Central Processing Unit (is not Processor)'],
    ['CPC', 'Central Processing Complex: a cage for Processing Units / CPUs; the box'],
    ['CPs', 'Central Processors: general purpose processors'],
    ['CPACF', 'PUs (speciality engine) for encryption / decription'],
    ['IFL', 'Integrated Facility for Linux: PUs (speciality engine) for Linux Workload'],
    ['CFs / ICFs', '(Internal) Coupling Facilities'],
    ['CFCC', 'Coupling Facility Control Code'],
    ['ICF', 'speciality engine: Integrated Coupling Facility: uses CFCC and LIC'],
    ['Spare', 'Uncharactersed PU functions: replacement for broken CP or system assist processor'],
    ['CoD', 'Capacity on Demand: for peak loads'],
    ['PSA', 'Prefix Storage Area: small area of memory on each processor; unique to that processor; for instruction execution, interrupts, err handling'],
    ['SIGP', 'Signal Processor - an instruction; for err recovery'],
    ['HA', 'Host Adapter'],
    ['SCSI', 'Small Computer System Interface'],
    ['SPUFI', 'SQL Processing File Input '],
    ['SDF', 'Screen Definition Facility'],
    ['', ''],
    ['', ''],
    ['', ''],
    ['PSA', 'Prefixed Save Area: Low Core'],
    ['', ''],
    ['', ''],
    ['', ''],
    ['Multiprocessor', 'CPC physically partitioned to 2 operating processor complexes'],
    ['ICP', 'Integrated Coupling Unit'],
    ['LPAR', 'Logical Partition: subset of processor hardware to supporting an operating system'],
    ['ICF catalog', 'PUs (speciality engine) for coordination of system effort'],
    ['IFP', 'Integrated Firmware Processor'],
    ['SAP', 'speciality engine: System Assist Processor: PUs to assist PU with workload on I/O; I/O processor for Disaster Recovery:'],
    ['zAAPs', 'speciality engine: dedicated z/OS Application Assist Processors: PUs for execution java GDPScodeGeographically Dispersed Parallel Sysplex: for DR'],
    ['TCB mode', ''],
    ['z/OS XML System Services', ''],
    ['zIIPs', 'speciality engine: dedicated z/OS Integrated Information Processors: PUs for accelerated DB2 performance'],
    ['zDD', 'z Developer Discount'],
    ['ADCD', 'Application Development Controlled Distribution'],
    
    ['RAM', 'main storage; inside the CPC cage; up to 384GB'],
    ['channel', 'independent data and control path: between I/O devices and  Memory'],
    ['CTC', 'Channel To Channel: SCP communicates with another SCP'],
    ['', ''],
    ['CTC ring', 'formed by mutliple Channel To Channel connections; forms basic sysplex'],
    ['CTC connection', 'connection between two CHPIDs'],

    ['CHPID', 'Channel Path Identifier'],
    ['CSS', 'Channel Subsystem'],
    ['OSA / ESCON / FICON', 'channels'],
    ['OSA adapter', ''],
    ['DASD', 'Direct Access Storage Device: like a hard drive'],
    ['Basic shared DASD', 'commands RESERVE, RELEASE'],
    ['HLQ', 'High Level Qualifier: 1st part of data set name'],
    ['bytes/tracks/cylinders', ''],
    ['VB / FB ', 'variable (block ?) / fixed (block ?) lenght'],
    ['MIPS', 'Millions of Instructions per Sec: Misleading Indicator of Performance'],
    ['SU / MSU', 'Service Unit / Millions of Service Units'],
    ['SU_SEC', 'amount of service units of work (Monitoring)'],
    ['RMF', 'Resource Management Facility'],
    ['XMIT-Lock Mode', 'Ctrl-R terminal reset'],
    ['AID key', 'Attention Identifier'],
    ['zPDT', 'IBM System z Personal Development Tool, for ISV (Independet Software Vendors)'],
    ['Hercules.emulator', 'Virtual mainframe - on github'],
    ['https://github.com/mainframed', ''],
    ['CBU', 'Capacity Backup'],
    ['ESCON / FICON channels', ''],
    ['UCB', 'Unit Control Block: for disk devices; small piece of virtual storage'],
    ['DTL', 'Dialog Tag Language: source code for ISPF'],
    ['ESS', 'Enterprise Storage System'],
    ['PAV', 'Parallel Access Volume'],
    ['CSTOR', 'Central STORage: main physical storage - can be shared among LPAR; synchronous access - processor has to wait'],
    ['Auxiliary storage', 'access through I/O requests; processor does not wait'],
    ['ESTOR', 'Expanded STORage'],
    ['HMC', 'Hardware Management Console: monitor and control HW (microprocessors)'],
    ['SE', 'Support Element'],
    ['RSM', 'Real Storage Manager'],
    ['ASID', 'Address Space ID - like a process ID in UNIX; z/OS address space is like a UNIX process'],
    ['', ''],
    ['SCLM', 'Software Configuration and Library Management'],
    ['ACCT', 'keyword parameter: Account'],
    ['PROC', 'keyword parameter: Procedure'],
    ['ATTN', 'Attention'],
    ['DFHSM', ' Data Facility Hierarchical Storage Manager - Datenverwaltung and Datensicherung'],
    ['MCDS', 'Migration Control Data Set'],
    ['BDCS', 'Backup Control Data Set'],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['VM', 'Virtual Machine: contains minidiscs (Platten)'],
    ['DB/DC', 'Data Base / Data Communication Systems'],
    ['APL', 'for mathematical problems'],
    ['CLIST', 'Command List: procedural programming language'],
    ['ISPF', 'Interactive System Productivity Facility: (GUI) interface for 3270 TSO Terminals; file browser, editor, made of \'panels\''],
    ['ISMF', 'Interactive Storage Management Facility'],
    ['IDFT', 'ISPF support: Interactive Data Transmission Facility'],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['DSLIST', 'ispf: display list of data sets'],

    ['DSLIST CLIST', 'ispf: display data set: Command List'],

    ['HFS', 'Hierarchical File Manager'],
    ['start sdsf', 'launched from the ISPF-GUI'],
    ['ISPF/PDF', 'Interactive System Productivity Facility / Program Development Facility'],
    ['PF', 'Program Function (keys)'],
    ['F7 / F8 / F9 / F10 / F11', 'Program Function Keys: up / down / swap / left / right'],
    ['PA1 / PA2 / PA3', 'Program Access (? not Attention ?) Keys'],
    ['PA1', 'Program Access Key for ATTENTION; Left Alt-1'],
    ['PA2', 'Program Access Key for RESHOW'],
    ['SPF', 'Structured Programming Facility'],
    ['DCF', 'Document Composition Facility'],
    ['TSO', 'Time Sharing Option (CLI Interface, multi user) - used to run ISPF'],
    ['WS', 'Work Station'],
    ['CF', 'Coupling Facility: enables multisystem data sharing in paralles sysplex; contains 1 or more mainframe processor anns special operating system'],
    ['CF', 'Coupling Facility: a special LPAR; provides high speed caching, list processing and locking functions in a sysplex; (triangle)'],
    ['IRD', 'Intelligent Resource Director: Stage 2 of Parallel Sysplex'],
    ['WLM', 'z/OS Workload Manager: goal achievement, throughput, responsivenes; ? task scheduler ?'],
    ['DCM', 'Dynamic Channel-path Management: for IRD'],
    ['CS IOPQ', 'Channel Subsystem IO Priority Queueing'],
    ['SVC', 'Supervisor Call'],
    ['GV1 / GV 1', 'Geschäftsvorfall Neuanlage'],
    ['GV2 / GV 2', 'Geschäftsvorfall Änderung'],
    ['GV3 / GV 3', 'Geschäftsvorfall Auskunft'],
    ['UHD', 'User Help Desk'],
    ['', ''],
    ['ß', 'is like ~ (i.e. $HOME) on unix'],
    ['TSO TMP', 'TSO Terminal Monitor Program'],
    
    ['tso vmv s', 'von Manfred; VM Vorabauslieferung von Sourcen'],
    ['tso udlist', 'z/OS Unix directory list'],
    ['tso tutor', ''],
    ['tso help something', ''],
    ['tso cancel something', ''],
    ['tso status', ''],
    ['tso listcat', ''],
    ['tso listds', 'List Data Set'],
    ['tso listds fname*', 'ispf: search for files'],
    ['tso netstat home', ''],
    ['tso omvs', 'gives /bin/sh'],
    ['tso msv', 'MSV: start MBS Source Verwaltung - based on TSO, ISPF und DB2'],
    ['tso rvary', 'change status of RACF dbase: switch, (de)activate (without IPL operation)'],
    ['tso rvary list', ''],
    ['LISTDSI', '?'],
    
    ['F3 / x / logoff', 'ispf: exit'],
    ['PDS', 'Partitioned Data Set: some kind of folder; contains other data sets; sequential data sets; part == members'],
    ['Member Selection List', 'ispf: members of ispf library or tso partitioned data set; displayed for: edit, browse, view, foreground, batch, and several utilities'],
    ['', 'Packed Data Set'],
    ['PDSE', 'Partitioned Data Set Extended'],
    ['REXX', 'Restructured Extended Executor Language: python "equivalent" on mainframe'],
    ['SAA', 'System Application Architecture'],
    ['CUA', 'Common User Access'],
    ['VSAM dataset', 'file system: Virtual Storage Access Method (clusters)'],
    ['VSAM', 'access methods: Virtual Storage Access Method'],
    ['QSAM', 'access methods: Queued Sequential Access Method'],
    ['BSAM / ISAM', 'access methods: '],
    ['ISAM dataset', 'file system: Indexed Storage Access Method (clusters)'],
    ['DS dataset', 'file system: Direct Access'],
    ['Dataset', 'kind of a file; Block, Track, Cylinder'],
    ['Dataset types', 'CNTL / CLIST / ASM / PLI / COBOL / OBJ / LOAD / LIST / OUTLIST / LINKLIST / SCRIPT / DATA'],
    ['CICS', 'online system: middleware product; Customer Information Control System'],
    ['IMS', 'online system: middleware product'],
    ['DB2', 'middleware product'],
    ['DLBL', 'Disc Label'],
    ['LKED', 'Link Edit Procedure'],
    ['DSC', 'Data Set Commander'],
    ['DSCB', 'Data Set Control Block'],
    ['MVS', 'Multiple Virtual Storage'],
    ['MVS/EX', 'Multiple Virtual Storage/eXtended Architecture'],
    ['MVS/ESA', 'Multiple Virtual Storage/Enterprise System Architecture'],
    ['MGFA', 'Multiple Group Factor Analysis'],
    ['RSCS', 'Remote Spooling Communication Subsystem'],
    
    ['z/VM', 'Virtual Machine: components: CP (Control Program) + CMS (Conversational Monitor System); can be used as a general terminal interface for z/VSE app development and system management'],
    ['z/VSE', 'Virtual Storage Extended: smaller, less complex base for batch and transaction processing; probably contains z/VM'],
    ['z/VSE/AF', 'Virtual Storage Extended/Advanced Functions'],
    ['z/TPF', 'Transaction Processing Facility: for high speend and high transaction volume; Airlines, Credit Cards'],
    ['zEnterprise', ''],
    ['zManager', 'zEnterprise Unified Resource Manager'],
    ['zBX', 'zEnterprise BladeCenter Extention'],
    ['ensemble', 'collection of z/Enterprise nodes'],

    ['CIU', 'Customer Initiated Upgrade'],
    ['CUD', 'Capacity Upgrade on Demand'],
    
    ['TOR', 'CICCS Terminal Owning Region'],
    ['TPX', 'Terminal Productivity Executive: multiple session manager in z/OS'],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['ASCB', 'Address Space Control Block: info and pointers for Address Space Control'],
    ['Control Blocks', 'System / Resource / Job / Task - related'],
    ['TCB', 'Task Control Block: unit of work - task; like UNIX threads'],
    ['SRB', 'Service Request Block: request for system service - input for SCHEDULE macro'],
    ['RTF', 'Recovery Termination Manager'],
    ['APF', 'Authorized Program Facility: for z/OS cross-memory (XM) services'],
    
    ['zArchitecture', 'IBM architecture for mainframe computers and peripherals'],
    ['SCP', 'System Control Program'],
    ['IPL', 'Initial Program Loading operation'],
    ['ASI', 'Automatic System Initialisation'],
    ['JCL', 'Job Control Language'],
    ['JCS', 'Job Control Statement'],
    ['JCC', 'Job Control Command'],
    ['JCP', 'Job Control Procedure'],
    ['SPOOL', 'Simultaneous Peripheral Operations Online: Queue'],
    ['SDSF', 'Spooler (System) Display and Search Facility: look at batch output logpool'],
    ['POWER', 'Priority Output Writers Execution Processor and Input Reader'],
    ['DL/I', 'Data Language One'],
    ['TP', 'Teleprocessing Monitor'],
    ['II', 'Interactive Interface'],
    ['IC', 'Interactive Computing'],
    ['ICCF', 'Interactive Computing and Control Facility'],
    ['RACF', 'Resource Access Control Facility: security system; access control and auditing, can be replaced by ACF2, TOPSecret; dbase referencing all the files on filesystem, with access rights'],
    ['PCF', ''],
    ['ADDSD', 'RACF cmd: Definition des Schutzes'],
    ['ALTSD', 'RACF cmd: Aendern (Alter) des Schutzes'],
    ['DELSD', 'RACF cmd: Delete des Schutzes'],
    ['LISTDS', '? RACF cmd: ?'],
    ['UACC', 'Universal Access'],
    ['QMF', 'Query Management Facility: send SQL queries to IBM DB2'],
    ['ITR Ratio', ''],
    ['LSPR ratio', 'Large System Performance Reference'],
    ['IOCDS', 'I/O Control Data Set: translate physical I/O addresses into device numbers used by OS to access a device'],
    ['HSA', 'Hardware Save Area: special storage for device numbers'],
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
    ['$ABEND', 'Abnormal End Code'],
    ['ESD', 'External Symbol Dictionary'],
    ['RLD', 'Relocation Dictionary'],
    ['END', 'End Of Object Module'],
    ['EOP', 'End of Procedure'],
    ['CI', 'Control Interval'],
    ['USS', 'Unix System Services'],
    ['VTAM', 'Virtual Telecommunications Access Method'],
    ['VTOC', 'Volume Table of Content: structure with metadata for Basic shared DASD'],
    ['VOLSER', 'Volume Serial: Disk volume (pack) identification'],

    
    ['DATE(\'E\')', 'rexx: '],
    ['say \'C1 81\'x', 'rexx: hexadecimal'],
    ['pull varname', 'rexx: read user input'],
    [';', 'rexx: line continuation'],
    ['if ... then do ... end else do... end', ''],
    ['CEMT', 'Invoke Master Terminal functions (dynamic user control for CICS)'],
    ['CEMT', 'current status of a file'],
    ['CEDA', 'define programs, transactions, files etc. for the CICS region'],
    ['CEST', 'Supervisory Terminal'],
    ['CECI', 'Command Interpreter'],
    ['CESF', 'Transaction to Sign Off from CICS'],
    ['OMVS', 'Invokes z/OS Unix Shell, i.e. gives /bin/sh; root is in BPX.SUPERUSER'],
    ['JES', 'Job Entry Subsystem: JES2 / JES3'],
    ['IND$FILE', 'file transfer'],
    ['TPF', 'Transaction Processing Facility'],
    ['BNDS', 'Boundary'],
    ['', 'Master Console: kind of root; \'SPECIAL\''],
    ['PR/SM (PRSM)', 'Processor Resource/Systems Manager - part of LPAR hypervisor'],
    ['hypervisor', 'SW layer; manages mutliple OSes running in single CPC; mainframe uses type 1 (native) hypervisor'],
    ['type 1 (native) hypervisor', 'native: software running directly on HW platform'],
    ['type 1 (hosted) hypervisor', 'hosted: software running withing an operating system environment (e.g. VMWare)'],
    ['', ''],
    ['XMIT / Recieve', 'Transmit'],
    ['SYSRECFM', 'Record Format: optained by by x = Listdsi(your-dataset-name)'],
    ['RECL', 'Record Length: optained by by x = Listdsi(your-dataset-name)'],
    ['SYSLRECL', 'Logical Record Length'],
    ['SYSALLOC', 'Allocation in space units'],
    ['SYSDSORG', 'Data Set Organisation: PS / PSU / DA / DAU / IS / ISU / PO / POU / VS / ???'],
    ['EXECIO', 'Read / write data to / from dataset (Not a part of REXX standard)'],
    ['ALLOC / FREE', 'Allocate / Free dataset'],
    ['DISP', 'Disposition'],
    ['RECFM=U / RECFM=BLK', 'Record Format: initial view for unformated / blocked (FB, VB, ...) data set formats'],
    ['RECFM=F (=FB) / RECF=V (=VB)', 'Record Format: fixed (blocked) / variable (blocked)'],
    ['RECFM=FBA / RECFM=FBM', 'Record Format: fixed blocked record containing ANSI control chars / Machine code control chars'],
    ['CALL', 'Rexx instruction (routine) / control of traps'],
    ['LOAD', 'DB2 utility: control statement; loading vals into a table'],
    ['STEPLIB', 'TSO/E cm; specify private load libs: add / remove / acti- / deactivate / display '],
    ['SMP', 'Simmetrical MultiProcessors; ? RISC systems ?'],
    ['GRS', 'Global Resource Serialization function'],
    ['Sysplex', 'A systems complex: z/OS images in one unit; uses messaging services'],
    ['Parallel Sysplex', 'Multiple mainframes acting as one; sysplex that uses one or more Coupling Facilities'],
    ['SFM', 'Sysplex Failure Manager - policy'],
    ['ARM', 'Automatic Restart Manager: system recovery function; improves availability of batch jobs and started tasks'],
    ['DR', 'Disaster Recovery:'],
    ['GDPS', 'Geographically Dispersed Parallel Sysplex: for DR'],
    ['', ''],
    ['', ''],
    ['STP', 'Server Time Protocol: implemented in LIC (Licensed Internal Code)'],
    ['TOD clock', 'on servers'],

    ['DAT', 'Dynamic Address Translation'],
    ['RX / SX / PX / BX', 'Region / Segment / Page / Block Index - parts of a Virtual Address'],
    ['SRM', 'System Resource Manager'],
    ['PSW', 'Program Status Word'],
    ['RMODE', 'Residence Mode: a program attribute'],
    ['AMODE', 'Addressing Mode'],
    ['SQA', 'System Queue Area'],
    ['CSA', 'Common Storage Area'],
    ['PARMLIB', 'Parameter Library: secondary subsystem'],
    ['', ''],
    ['', ''],
    ['', ''],
    ['DSORG=PS / DSORG=PO / DSORG=DA', 'Dataset (Storage) Organisation: Physical Sequential / Partitioned Organized / Direct'],
    ['HOSTVARS / PROCVARS', ''],
    ['DSNUPROC', ''],
    ['prefix.SSPGM', 'DB2 subsystem library'],
    ['DSN', 'DB2 subsystem / ? Dataset Name ?'],
    ['DSNUPROC', 'Supplied JCL procedure; Invoke DB2 online utitity'],
    ['DD-Record', 'Data Definition: describe dataset, specify I/O resources for DD'],
    ['PTF', 'patch applied by a system programmer'],
    ['FC', 'Fix Centrall'],
    ['TE / TS / TF', 'text commands: Text Enter / Text Split / Text Flow'],
    ['LC / UC', 'conversions: Lower Case / Upper Case'],
    ['DDNAME', 'Data Definiton'],
    ['DSNAME', 'Data Set'],
    ['SNA', 'some kind of network'],
    ['', ''],
    ['DTEST', 'Dialog Test'],
    ['ENVIRON', 'ispf: Trace TPUT, TGET, PUTLINE buffers; produce ABEND dumps; gather terminal status info'],
    ['ISPLIBD', 'ispf: display current LIBDEF info'],
    ['FKA', 'ispf: toggle forms of the F keys'],
    ['PRINTL', 'ispf: print logical screen in uniform chars'],
    ['', ''],
    ['RETRIEVE', 'recall previous commands to the command line'],
    ['FIND', 'member selection lists: '],
    ['RFIND', 'member selection lists: repeat find'],
    ['SHRPROF', 'ispf: Shared Profile'],
    ['SRCHFOR', 'member selection lists: Search For'],
    ['', ''],
    ['', ''],
    ['SEL', 'member selection lists: SELECT'],
    ['SPLIV', 'Vertical Screen Split'],
    ['SWAP', 'Jump to logical screens - see SPLIT'],
    ['WINDOW', 'ispf: move pop-up displayed on the screen'],
    ['WSCON / WSDISCON', 'ispf: initiate workwtation Connection / disconnect user from workstation'],
    ['ISPFVAR', 'SESM Session Manager Mode; ISPF settings'],
    ['ISPDTLC', 'ISPF Dialog Tag Language Compiler'],
    ['%', 'member selection lists: Match 1 char for member names'],
    ['*', 'member selection lists: Match any number of chars for member names'],
    ['S / P / R / D / E / V / B', 'member selection lists: select / print / rename / delete / edit / view /browse'],
    ['EAL1 - EAL7', 'Common Criteria security evaluation: Evaluation Assurance Levels'],
    ['OLTP', 'Online Transaction Processing: interactively with user'],
    ['TPS', 'Transactions Per Second'],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    
    ['Kennzeichen', 'Auskunft Objekte in Bearbeitung'],
    ['0',   'PF1: Kennzeichen: Das Objekt wurde geholt mit Sperre'],
    ['1',   'PF1: Kennzeichen: Das Objekt wurde an PROD übergeben'],
    ['2',   'PF1: Kennzeichen: Die Übergabe an PROD wurde freigegeben'],
    ['3',   'PF1: Kennzeichen: Das Objekt wurde an ABNT übergeben'],
    ['4',   'PF1: Kennzeichen: Die Übergabe an ABNT wurde freigegeben'],
    ['5',   'PF1: Kennzeichen: Das Objekt wurde von ABNT an PROD übergeben'],
    ['6',   'PF1: Kennzeichen: Die Übergabe von ABNT an PROD wurde freigegeben'],
    ['99 ', 'PF1: Kennzeichen: Das Objekt ist für die Dauer einer Batch-Verarbeitung gesperrt. Dieses Kennzeichen ist nur kurze Zeit sichtbar, ansonsten trat ein Fehler in der Batch-Verarbeitung auf.'],


    ['Kommandos', 'Auskunft Objekte in Bearbeitung'],
    ['S',   'PF1: Kommandos: Anzeige des Objekts'],
    ['PR',  'PF1: Kommandos: Verzweigung in eine Druckausgabemaske (Beschreibung s. Kapitel MSV-Ausgaben)'],
    ['VD',  'PF1: Kommandos: Anzeige der Versionsdokumentation des Objekts'],
    ['BVD', 'PF1: Kommandos: Berichtigen der Versionsdokumentation des Objekts (nur Administratoren)'],
    ['VDA', 'PF1: Kommandos: Anzeige der Versionsdokumentation eines Objekts über alle Versionen'],
    ['VW',  'PF1: Kommandos: Anzeige der Objektbeziehungen Objekt verwendet Objekt(e) (Beschreibung s. Kapitel Auskunft Objektbeziehungen)'],
    ['WV',  'PF1: Kommandos: Anzeige der Objektbeziehungen Objekt wird verwendet von Objekt(en) (Beschreibung s. Kapitel Auskunft Objektbeziehungen)'],
    ['DIF', 'PF1: Kommandos: Anzeige der geänderten Sourcecode-Zeilen gegenüber der Vorgängerversion'],
    ['K',   'PF1: Kommandos: Anzeige der Komponentenzuordnungen aller Versionen des Objekts'],
    ['VM',  'PF1: Kommandos: Anzeige aller VMs, in deren Zusammenhang das Objekt bearbeitet wurde'],
    ['U',   'PF1: Kommandos: Änderung der Kurzbeschreibung'],
    ['CP',  'PF1: Kommandos: Compilieren des Objekts aus MSV heraus'],

 ]

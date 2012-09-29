var jsonEmacs = [
['M-` / F10',                       '# menu'],
['C-u C-SPC',                       '# jump back to the last mark (there is a mark-ring)'],
['C-h v',                           '# describe variable'],
['C-x ^ or C-x { or } ',            '# enlarge-window, shrink-window horizontally / vertically'],
['C-u C-x v =',                     '# diff against any chosen revision'],
['C-x v u',                         '# discard changes'],
['C-x v ~',                         '# checkout any version: master~3   last 3th version'],
['C-x v l',                         '# commit log: f - view revision; d - view diff'],
['C-x o',                           '# switch window/frame'],
['C-x v i',                         '# add to version control system'],
['C-x r RET',                       '# add to version control system'],
['C-x C-f / C-v',                   '# find file / find alternate file '],
['C-x 4 f / C-x 4 b',               '# find-file-other window / switch-to-buffer-other-window'],
['C-x C-s / C-w',                   '# save file / save as'],
['C-x s',                           '# save-some-buffers'],
['',                                '# eshell: ifconfig &gt; #<buffer interfaces>'],
['',                                '# show line number or put(line-number-mode 1) to ~/.emacs'],
['',                                '# cssh ? ssh shell ? (somehow strange)'],
['',                                '# color-theme-calm-forest ? does not work?'],
['',                                '# yasnippet - yet another snippets'],
['',                                '# elpa - emacs lisp package archive'],
['C-x 1',                           '# delete-other-windows'],
['M-!',                             '# shell-command'],
['M-;',                             '# comment out active region'],
['M-/',                             '# code completion'],
['C-x m',                           '# email'],
['C-x i',                           '# insert file'],
['C-c C-C',                         '# end of git commit message (under emacs)'],

['C-h k key / C-h f function',      '# describe-key / describe-function'],
['M-x command',                     '# execute command'],
['C-x e',                           '# evaluate lisp s-expression - see M-x eval-current-buffer'],
['C-M-f / C-M-b',                   '# jump forward / backward to matching brace; cursor may need to be behind closing \')\''],
['C-M-x',                           '# immediate eval'],
['C-M-\'',                          '# auto indent block'],
['<a href="http://lpn.rnbhq.org/tools/xemacs/emacs_ref.html" >emacs command list</a>','# emacs command list'],
['M-% / M-x query-replace',         '#'],
['M-x replace-string',              '#'],
['M-u',                             '# upper case for next word'],
['M-l',                             '# lower case'],
['M-c capitalize',                  '# (1st letter is upper case)'],
['M-x ispell-region',               '# check a small region'],
['M-x ispell-buffer',               '#'],

['F3 or C-x ( / F4 or C-x e',       '# start macro, stop/play macro'],
['M-5 F4 or C-x e',                 '# repeat macro 5 times'],
['C-u n',                           '# repeat n times following command'],
['C-_ / C-/ / C-x u',               '# undo'],
['C-f C-_',                         '# redo'],
['M-x erc',                         '# start irc inside of emacs'],
['M-a / M-e',                       '# forward / backward one sentence'],
['C-x h / M-h',                     '# mark whole buffer / mark paragraph'],
['C-x `',                           '# jump to the next (compilation error(s), grep results etc.)'],
['M-x compile',                     '# compile using given program'],
['M-x speedbar',                    '# (by default shows only python scripts)'],
['C-x C-w',                         '# writte buffer to a different file'],
['C-x left/right',                  '# next-buffer / previous-buffer'],
['C-k / M-k',                       '# kill line / kill sentence / yank'],
['C-w',                             '# kill region (cut)'],
['M-w',                             '# kill ring save (copy)'],
['C-y',                             '# yank (paste last killed entry)'],
['M-y',                             '# cycle back through previous entries in the kill ring'],
['M-x grep',                        '#'],
['M-$ spell',                       '# check word'],
['M-x flyspell-mode',               '# ? check all document ?'],
['M-&lt;',                          '# beginning of buffer'],
['M-&gt;',                          '# end of buffer'],
['M-v / C-v',                       '# page up/down'],
['C-t / M-t / C-x C-t',             '# transpose chars/words/lines'],
['C-l',                             '# center the screen'],
['M-x shell / eshell ',             '# start a bash command line'],
['C-x C-f ENTER',                   '# enters the dired mode (see menu)'],
['M-q',                             '# rewrap the line in auto-fill-mode'],
['C-u',                             '# parameter key'],
['C-u 40 C-x f',                    '# sets the line wrap to 40 characters, M-q # activate the wrap'],
['M-x fill-region',                 '# reflow all the paragraphs in the area'],
['M-o M-s',                         '# center for given line width'],
['C-M-s',                           '# isearch-forward-regexp'],
['C-M-%',                           '# query-replace-regexp'],
['C-u M-! command',                 '# execute command and read-in its output'],
['M-x gdb',                         '# debugger'],
['C-h i m emacs',                   '# ? emacs manual?'],
['M-x dbg',                         '# '],
['M-x ediff',                       '# '],
['M-x compile',                     '# '],
['M-x grep',                        '# '],
['M-x man',                         '# '],
['M-x gnus',                        '# news, email, rss'],
['M-:',                             '# documentation reader'],
['M-g g',                           '# documentation reader'],
['C-u C-n',                         '# move forward 4 lines'],
['C-x C-+ / C-x C--',               '# increase / decrease font size'],

['M-x slime',                       '# start slime (Superior Lisp Interaction Mode for Emacs)'],
['C-x C-e',                         '# repeat last command'],
['M-p',                             '# reprint last command to the REPL'],

['\sr',                             '# start REPL'],
['\sR',                             '# start interactive REPL initialized to have same namespace as current buffer'],

['\si',                             '# prompt for input and lookup with (source)'],
['\fd',                             '# prompt for input and lookup with (find-doc)'],

['&nbsp;','&nbsp;'],

['\el',                             '# eval current line'],
['\ef',                             '# eval current file'],
['\eb',                             '# eval current current visual block selected'],
['\et',                             '# send a function to the REPL'],
['\p',                              '# close a window'],

['&nbsp;','&nbsp;'],

['C-n',                             '# auto completition'],
['C-w C-w',                         '# move around split viewports'],
['C-x C-o',                         '# complete function name (omni completition)'],

['/usr/ucb/ps -auxww',              '# solaris: full command line'],
['jar tf',                          '# list files in a jar-file'],
['xfce4-session-logout',            '&nbsp;'],
['man -k abc',                      '# search man pages for abc'],
['$ssh-copy-id user@host',          '# Copy ssh keys to user@host to enable password-less ssh logins'],
['sshfs name@server:/path/to/folder /path/to/mount/point',            '# Mount folder/filesystem through SSH. Install SSHFS from http://fuse.sourceforge.net/sshfs.html. Will allow you to mount a folder security over a network.'],

['ssh user@host cat /path/to/remotefile | diff /path/to/localfile -', '# Compare a remote file with a local file'],
]

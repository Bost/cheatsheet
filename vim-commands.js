jsonVim = [
/*
Text Object (type :h text-objects in vim for a complete description)

This feature allows to operate on a block of text where the cursor is.

TODO: color commands belonging together
TODO: C-r register, C-r C-o / C-r / C-p

*/

[':bufdo %s/&lt;pattern&gt;/&lt;substit&gt;/ge | update',    '" substitute and save in all buffers'],
[':bnext (:bn) / :bprev (:bp)',              '" go to next / previous buffer'],
[':let @m=\'\'  /  :let @m=@n',              '" clear / copy register value'],
['v/&lt;pattern&gt;',                        '" mark everything from the cursor up to &lt;pattern&gt;'],
[':w !sudo tee %',                           '" save a file as a sudo'],

['&nbsp;',                                   '&nbsp;'],

[':[range]g/&lt;pattern&gt;/cmd',            '" '],
[':g/&lt;pattern&gt;/d  /  :g!/&lt;pattern&gt;/d',       '" delete all lines matching / not matching a pattern'],
[':g/&lt;pattern&gt;/t$',                    '" copy all lines matching a pattern to end of file'],
['0"ay0:g/&lt;pattern&gt;/y A',              '" registers: yank all lines matching a pattern to register \'a\''],
['%s/&lt;C-R&gt;a/bar/g',                    '" registers: place the contents of register \'a\' in the search, and replace it with \'bar\''],
[':g/regexp/p',                              '" grep'],

['&nbsp;',                                   '&nbsp;'],

[':new',                                     '" create new window'],
['"0P',                                      '" paste last yanked text'],
['"*p / "*dd / "+p / "+dd',                  '" paste from / cut line to system clipboard / system selection (X11)'],
['gq',                                       '" break lines according to :set textwidth. (see wrapmargin too)'],
['gj / gk',                                  '" move down / up when lines are wrapped'],
['== / gg=G',                                '" format line / file'],
[':%!column -t',                             '" format whole file to columns'],
['qq .... q @q/@@',                          '" start / stop macro recording, play down recorded macro'],
[':cwindow (:cw) / :cclose',                 '" open / close the quickfix window'],
[':ba / :ball / :wa / :wall',                '" open / write all buffers at once'],
['C-x C-k e',                                '" edit macro'],
[':! sort',                                  '" call sort command from shell'],
[':sort u',                                  '" filter out duplicate rows (unique rows only)'],
['gum / gUm',                                '" lower / upper of movement m'],
['R r ~',                                    '" replace mode, replace 1 char, replace char and move right'],
[':r! command',                              '" execute command and read in its output'],
['.!sh / !!sh',                              '" execute current line in the shell'],
['`. / \'.',                                 '" last edit location (~ key)/ line (&auml; key)'],
['`` / \'\'',                                '" jump: to last cursor location / last cursor line'],
[':jumps / C-o / C-i',                       '" jump: go back / forth (older / newer locations)'],
[']c / [c',                                  '" jump: to next / previous diff'],
[':marks, m',                                '" jump: marks (for jumping etc); m - marks something?'],
['30|',                                      '" jump: to column 30'],
['; / ,',                                    '" jump: cursor forward / backward'],
['zz zb zt / M L H',                         '" jump: move window / jump cursor to the middle, bottom, top'],
['( / { / [[',                               '" jump: (backward): sentence / paragraph / section (keyword function)'],
['zc zo za / zC zO zA / zR',                 '" close, open, toggle current / all folds from cursor/ all folds'],
[':set guifont=? / :set guifont=*',          '" display current guifont / guifond dialog window'],

['&nbsp;',                                   '&nbsp;'],

[':lcd %:p:h',                               '" change to the directory of the current file'],
[':redir @*',                                '" registers: redirect messages to the clipboard (system register)'],
[':messages',                                '" display / print (error) messages'],
[':redir END',                               '" terminate redirection'],
[':earlier 15m / :later',                    '" reverts the document back to how it was 15 minutes ago / reverse the :earlier command'],
[':verbose set cindent?',                    '" figure out where cindent got set/unset (for debuging)'],


['&nbsp;',                                   '&nbsp;'],

[':redir @a',                                '" registers: redirect output to register a'],
[':put! a',                                  '" registers: paste register a into new window'],
[':reg *0abc',                               '" registers: display registers: system, default, a, b, c'],
['["x]y{motion}',                            '" registers: yank {motion} into register x'],
['"qY',                                      '" registers: store curret line to register q'],
['"% / "#',                                  '" registers: current / alternate filename'],
['"_ / ".',                                  '" registers: last small delete (? the blackhole register?) / last inserted text'],
['"/ / ":',                                  '" registers: last search / last ex command'],
['C-r % / C-r #',                            '" registers: insert name of the current / alternate file'],

['&nbsp;',                                   '&nbsp;'],

['C-r =',                                    '" calculator; can access every vim-function'],
['yypVr=',                                   '" yank current line, paste it below, select copied line, replace every char with ='],


['C-^ / C-6',                                '" switch to the alternate file (the one with #)'],
['C-t / C-d',                                '" align text to right / left in insert mode'],

['&nbsp;',                                   '&nbsp;'],

['78i-&lt;Esc&gt;',                          '" print (insert) 78 "-" chars at once'],

['&nbsp;',                                   '&nbsp;'],

['I{string}&lt;Esc&gt; / A{string}&lt;Esc&gt;',                '" visual: insert / append {string} to the visual block'],
['o',                                        '" visual: change the marking direction in visual mode'],
['gv',                                       '" visual: re-select last visual block'],
['f/t F/T',                                  '" find / till (until) forward / backward'],
[':g//',                                     '" lists all lines with the last search pattern'],
['xp',                                       '" swap chars'],
[':functions',                               '" list user-defined functions (names and argument lists but not the full code)'],
[':function Foo',                            '" list user-defined function Foo() (full code list)'],

['&nbsp;',                                   '&nbsp;'],

['3/joe/e+1',                                '" find 3rd joe cursor set to end of match plus 1 [C]'],
['5/joe/s-2  or   5/joe/b-2',                '" find 5th joe cursor set to start of match minus 2'],
['/joe/+4',                                  '" find joe cursor and move 4 lines down'],

['&nbsp;',                                   '&nbsp;'],

['\\{-}',                                    '" matching: lazy matching'],
['\\{min,max\\}',                            '" matching: min, max occurences'],
['\\+',                                      '" matching: min 1 occurence'],
['\\?',                                      '" matching: max 1 occurence'],

['&nbsp;',                                   '&nbsp;'],

['q: / q/ / q?',                             '" open command-line history window in edit mode / forward / backward search. Exit CTRL-C'],
['c-f',                                      '" open command-line history when editing search pattern'],
['* / "',                                    '" hightlight and search forwards/backwards'],
['g* / g"',                                  '" hightlight and search for parts of a word'],
[':[range]s/bacon/lettuce/[ciInp] [count]',  '" confirm, ignore case, case sensitive, number of matches; print lines'],
[':s/foo/bar/g10',                           '" replace only next 10 lines'],
[':[range]s//baz/...',                       '" use previous search pattern'],
[':%s/~/qux/igc',                            '" substitute last replacement string'],
[':changes / g; / g,',                       '" changelist: go forth / back in the insert mode change list'],
['s / S (or cc) / C',                        '" substitute char / line / to the end of line'],

['gf',                                       '" open file under cursor (goto file)'],
['C-w f',                                    '" open file under cursor in a new window'],
['C-a / C-x',                                '" increment / decrement next number on the current line'],
['C-n / C-p',                                '" completition: word completition in insert mode (next / previous)'],
['C-x C-l / C-x C-o',                        '" completition: line completition / function name completition (omni completition)'],
['C-x C-f',                                  '" completition: file completition'],
['/C-r C-w',                                 '" pull cword (current word) onto search/command line'],
['C-o',                                      '" temporarily change the insert- for normal mode'],

['&nbsp;',                                   '&nbsp;'],

['gvim -p file1 file2',                      '" gvim with tabs'],
['gvim -d file1 file2 / vimdiff file1 file2','" gvim / vim in diffmode'],
[':diffthis / :windo diffthis',              '" diff current two buffers / windows'],
[':vert diffsplit filename',                 '" diff current buffer with a filename'],
['do :diffg :diffget',                       '" "obtain" difference under cursor from the other viewport'],
['dp :diffput',                              '" "put" difference under cursor to the other viewport'],
[':diffupdate / :diffoff',                   '" update / switch off the diffmode for the current window'],

['&nbsp;',                                   '&nbsp;'],

['set nomodifiable',                         '" set current buffer to readonly mode'],
['set fileformat=dos|unix|mac',              '" '],
['set filetype=html|xml|...',                '" '],
['C-w 5&lt; / C-w 5&gt; / C-w 5- / C-w 5+',  '" resize vertical viewport 5 chars to the left / right / bottom / top'],
['C-w C-w',                                  '" move around split viewports'],
['C-w h/j/k/l',                              '" move around viewports according to given direction'],
['C-w r / R',                                '" rotate window down-&gt;right / up-&gt;left'],
['C-w o / :on',                              '" close other windows'],
['C-w |  /  C-w _',                          '" maximize vertically / horizontally'],
[':sp filename / :vsp filename',             '" horizontal / vertical viewport split'],
['&gt; / &lt; / =',                          '" shift text right / left / align text'],
['C-] / C-t',                                '" vim help: follow link / go back'],
[':cd %:h',                                  '" change to the dir of current file (probably)'],
[':for i in range(1,255) | .put=\'10.0.0.\'.i | endfor', '" place increasing 10.0.0.1, 10.0.0.2, etc.'],
[':setlocal autoread',                       '" like tail -f'],

[':Explore',                                 '" show files adjacent to the one edited one; :Explore move up one directory'],
[':scriptnames',                             '" list all plugins, _vimrcs loaded (super)'],
[':verbose set history?',                    '" reveals value of history and where set'],
[':function / :func SearchCompl',            '" list functions / particular function'],

['&nbsp;',                                   '&nbsp;'],

['-',                                        '" vim-fugitive: stage / unstage given file in Gstatus / Gcommit viewport'],
[':Gread',                                   '" vim-fugitive: git checkout -- filename'],
[':Gmove / :Gremove',                        '" vim-fugitive: git mv / git rm'],
[':Gstatus / :Gcommit ',                     '" vim-fugitive: git status / git commit; p - Interactively choose hunks of patch (git add -p)'],
[':Gdiff',                                   '" vim-fugitive: perform vimdiff'],
[':Glog [q / ]q / [Q / ]Q',                  '" vim-fugitive: load and move between versions :cprev / :cnext / :cfirst / :clast'],
[':Gedit',                                   '" vim-fugitive: go back to "normal" file (working copy)'],
[':Gbrowse',                                 '" vim-fugitive: open the current file on GitHub'],
[':Git!',                                    '" vim-fugitive: open output of a command in a temp file'],
[':Git',                                     '" vim-fugitive: execute any git commands'],

['&nbsp;',                                   '&nbsp;'],

['vit / yit / cit / dit',                    '" surround: mark / yank / change / delete the "innerHTML"'],
['vat / yat / cat / dat',                    '" surround: mark / yank / change / delete the whole html tag'],
['ci" / ci\' / ci{ / ci( / ci[',             '" surround: change content inside of "" / \'\' / {} / () / []'],
['ca" / ca\' / ca{ / ca( / ca[',             '" surround: change content including and inside of "" / \'\' / {} / () / []'],
['da&lt; / dap / daw',                       '" surround: delete html tag / current paragraph (f.e. a function) / word'],

['&nbsp;',                                   '&nbsp;'],

[':NERDTree q:',                             '" NERDTree: change drive to q: under windows'],
['i / cd / r / B',                           '" NERDTree: open split / change dir / refresh / bookmarks'],

//['&nbsp;',                                   '&nbsp;'],
//['snipMate',                                 '" code snippets'],
//['fuzzyFinder',                              '" finds file, need L9 vim plugin (does not work somehow :('],

['&nbsp;',                                   '&nbsp;'],

['\\be',                                     '" bufexplorer: :BufExplorer - in current window'],
['\\bs / \\bv',                              '" bufexplorer: :BufExplorerHorizontalSplit / :BufExplorerVerticalSplit'],

['&nbsp;',                                   '&nbsp;'],

['\\sr / \\sR',                              '" vimclojure: start REPL (with the namespace of the current buffer)'],
['\\si / \\fd',                              '" vimclojure: prompt for input and lookup with (source) / (find-doc)'],
['\\el / \\ef / \\ep / \\eb / \\et',         '" vimclojure: evaluate: line / file / paragraph / visual block (in visual mode) / function'],
['\\p',                                      '" vimclojure: close a window'],

['&nbsp;',                                   '&nbsp;'],

[':BundleList',                              '" vundle: list configured bundles'],
[':BundleInstall(!)',                        '" vundle: install (or update) bundles'],
[':BundleSearch(!) plugin',                  '" vundle: search (or refresh cache first) plugin'],
[':BundleClean(!)',                          '" vundle: confirm (or auto-approve) removal of unused bundles'],

['&nbsp;',                                   '&nbsp;'],

['\\sa / \\si',                              '" orgmode: insert active / inactive date'],

['&nbsp;',                                   '&nbsp;'],
]


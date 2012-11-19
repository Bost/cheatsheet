jsonVim = [
/*
Text Object (type :h text-objects in vim for a complete description)

This feature allows to operate on a block of text where the cursor is.

This is typically used with the 'd' or 'c' commands (delete, change), followed by 'i' or 'a' (inside a block or a whole block) and ended by a block description.

ca{ : Delete a block of code delimited by curly braces.   {   }
ci( : Change the content inside parenthesis.
ci" : Change the content inside a string

TODO: color commands belonging together
TODO: C-r register, C-r C-o / C-r / C-p

*/
[':bufdo %s/&lt;pattern&gt;/&lt;substit&gt;/ge | update',    '" substitute and save in all buffers'],
[':bnext (:bn) / :bprev (:bp)',              '" go to next / previous buffer'],
[':let @m=\'\'  /  :let @m=@n',              '" clear / copy register value'],
['v/&lt;pattern&gt;',                        '" mark everything from the cursor up to &lt;pattern&gt;'],

['&nbsp;',                                   '&nbsp;'],

[':[range]g/&lt;pattern&gt;/cmd',                  ''],
[':g/&lt;pattern&gt;/d  /  :g!/&lt;pattern&gt;/d',       '" delete all lines matching / not matching a pattern'],
[':g/&lt;pattern&gt;/t$',                    '" copy all lines matching a pattern to end of file'],
['0"ay0:g/&lt;pattern&gt;/y A',              '" yank all lines matching a pattern to register \'a\''],
[':g/regexp/p',                              '" grep'],

['&nbsp;',                                   '&nbsp;'],

[':redir @a',                                '" redirect output to register a'],
[':g//',                                     '" lists all lines with the last search pattern'],
[':redir END',                               '" end redirection'],
[':new',                                     '" create new window'],
[':put! a',                                  '" paste register a into new window'],

['&nbsp;',                                   '&nbsp;'],


[':reg abc',                                 '" display registers a, b and c'],
['["x]y{motion}',                            '" yank {motion} into register x'],
['"qY',                                      '" store curret line to register q'],
['"0P',                                      '" paste last yanked text'],
['"*p / "*dd / "+p / "+dd',                  '" paste from / cut line to system clipboard / system selection (X11)'],
[':messages',                                '" display error messages'],
['gq',                                       '" break lines according to :set textwidth. (see wrapmargin too)'],
['gj / gk',                                  '" move down / up when lines are wrapped'],
['== / gg=G',                                '" format line / file'],
[':%!column -t',                             '" format whole file to columns'],
['qq .... q @q/@@',                          '" start / stop macro recording, play down recorded macro'],
[':cwindow (:cw) / :cclose',                 '" open / close the quickfix window'],
[':ba / :ball / :wa / :wall',                '" open / write all buffers at once'],
[':marks, m',                                '" marks (for jumping etc); m - marks something?'],
['C-x C-k e',                                '" edit macro'],
[':! sort',                                  '" call sort command from shell'],
[':sort u',                                  '" filter out duplicate rows (unique rows only)'],
['gum / gUm',                                '" lower / upper of movement m'],
['R r ~',                                    '" replace mode, replace 1 char, replace char and move right'],
['30|',                                      '" jump to column 30'],
[':r! command',                              '" execute command and read in its output'],
['.!sh / !!sh / &lt;F8&gt;',                 '" execute current line in the shell'],
['`. / \'.',                                 '" last edit location (~ key)/ line (&auml; key)'],
['; ,',                                      '" jump cursor forward, backward'],
['zz zb zt / M L H',                         '" move window / jump cursor middle, bottom, top'],
['zc zo za / zC zO zA / zR',                 '" close, open, toggle current / all folds from cursor/ all folds'],
[':set guifont=? / :set guifont=*',          '" display current guifont / guifond dialog window'],
['"% / "#',                                  '" registers: current / alternate filename'],
['"_ / ".',                                  '" registers: last small delete (? the blackhole register?) / last inserted text'],
['"/ / ":',                                  '" registers: last search / last ex command'],


['C-r % / C-r #',                            '" registers: insert name of the current / alternate file'],
['C-r =',                                    '" calculator; can access every vim-function'],
['yypVr=',                                   '" yank current line, paste it below, select copied line, replace every char with ='],


['C-^ / C-6',                                '" switch to the alternate file (the one with #)'],
['C-t / C-d',                                '" align text to right / left in insert mode'],
['vit / yit / cit / dit',                    '" mark/yank/change/delete the \"innerHTML\"'],
['vat / yat / cat / dat',                    '" mark/yank/change/delete the whole html tag'],

['ci{ / ci( / ci[ / ci"',                    '" change the content inside given parenthesis'],
['da&lt; / dap / daw',                       '" delete html tag / current paragraph (f.e. a function) / word'],

['&nbsp;',                                   '&nbsp;'],

['78i-&lt;Esc&gt;',                          '" print (insert) 78 \'-\' chars at once'],
['I{string}&lt;Esc&gt; / A{string}&lt;Esc&gt;',                '" insert / append {string} to the visual block'],

['&nbsp;',                                   '&nbsp;'],

['o',                                        '" change the marking direction in visual mode'],
['gv',                                       '" re-select last visual block'],
['xp',                                       '" swap chars'],
['3/joe/e+1',                                '" find 3rd joe cursor set to end of match plus 1 [C]'],
['5/joe/s-2',                                '" find 5th joe cursor set to start of match minus 2'],
['/joe/+4',                                  '" find joe cursor and move 4 lines down'],
['f/t F/T',                                  '" find / till (until) forward / backward'],
['q: / q? / q/',                             '" open Ex command-line / search string'],
['c-f',                                      '" opens command-line history when editing search pattern'],
['* / "',                                    '" hightlight and search forwards/backwards'],
['g* / g"',                                  '" hightlight and search for parts of a word'],
[':[range]s/bacon/lettuce/[ciInp] [count]',  '" confirm, ignore case, case sensitive, number of matches; print lines'],
[':s/foo/bar/g10',                           '" replace only next 10 lines'],
[':[range]s//baz/...',                       '" use previous search pattern'],
[':%s/~/qux/igc',                            '" : substitute your last replacement string'],
[':changes / g; / g,',                       '" changelist: go forth / back in the insert mode change list'],
[':jumps / C-o / C-i',                       '" jumplist: go back / forth (older / newer locations)'],
['s / S (or cc) / C',                        '" substitute char / line / to the end of line'],

['gf',                                       '" open file under cursor (goto file)'],
['C-w f',                                    '" open file under cursor in a new window'],
['C-a / C-x',                                '" increment / decrement next number on the current line'],
['C-n / C-p',                                '" word completition in insert mode (next / previous)'],
['C-x C-l / C-x C-o',                        '" line completition / function name completition (omni completition)'],
['C-x C-f',                                  '" file completition'],
['/C-r C-w',                                 '" pull cword (current word) onto search/command line'],
['C-o',                                      '" temporarily change the insert- for normal mode'],

['&nbsp;',                                   '&nbsp;'],

['gvim -p file1 file2',                      '" gvim with tabs'],
['gvim -d file1 file2 / vimdiff file1 file2','" gvim / vim in diffmode'],
[':diffthis / :windo diffthis',              '" diff current two buffers / windows'],
[':vert diffsplit filename',                 '" diff current buffer with a filename'],
[']c / [c',                                  '" jump to next / previous diff'],
['do :diffg :diffget',                       '" \'obtain\' difference under cursor from the other viewport'],
['dp :diffput',                              '" \'put\' difference under cursor to the other viewport'],
[':diffupdate / :diffoff',                   '" update / switch off the diffmode for the current window'],

['&nbsp;',                                   '&nbsp;'],

['set fileformat=dos|unix|mac',              '&nbsp;'],
['set filetype=html|xml|...',                '&nbsp;'],
['C-w 5&lt; / C-w 5&gt; / C-w 5- / C-w 5+',  '" resize vertical viewport 5 chars to the left / right / bottom / top'],
['C-w C-w',                                  '" move around split viewports'],
['C-w h/j/k/l',                              '" move around viewports according to given direction'],
['C-w r / R',                                '" rotate window down-&gt;right / up-&gt;left'],
['C-w o / :on',                              '" close other windows'],
['C-w |  /  C-w _',                          '" maximize vertically / horizontally'],
[':sp filename / :vsp filename',             '" horizontal / vertical viewport split'],
['&gt; / &lt; / =',                          '" shift text right / left / align text'],
['C-] / C-t',                                '" vim help: follow link / go back'],

[':scriptnames',                             '" list all plugins, _vimrcs loaded (super)'],
[':verbose set history?',                    '" reveals value of history and where set'],
[':function / :func SearchCompl',            '" list functions / particular function'],

['&nbsp;',                                   '&nbsp;'],

['-',                                        '" vim-fugitive: stage / unstage current file'],
[':Gread',                                   '" vim-fugitive: git checkout -- filename'],
[':Gmove',                                   '" vim-fugitive: git mv'],
[':Gremove',                                 '" vim-fugitive: git rm'],
[':Gdiff',                                   '" vim-fugitive: perform vimdiff'],

['&nbsp;',                                   '&nbsp;'],

[':NERDTree q:',                             '" NERDTree: change drive to q: under windows'],
['i',                                        '" NERDTree: open split'],
['cd / r / B',                               '" NERDTree: change dir / refresh / bookmarks'],

//['&nbsp;',                                   '&nbsp;'],
//['snipMate',                                 '" code snippets'],
//['fuzzyFinder',                              '" finds file, need L9 vim plugin (does not work somehow :('],

['&nbsp;',                                   '&nbsp;'],

['\\be',                                     '" bufexplorer: :BufExplorer - in current window'],
['\\bs / \\b',                               '" bufexplorer: :BufExplorerHorizontalSplit'],
['\\bv',                                     '" bufexplorer: :BufExplorerVerticalSplit'],

['&nbsp;',                                   '&nbsp;'],

['\\sr / \\sR',                              '" vimclojure: start REPL (with the namespace of the current buffer)'],
['\\si',                                     '" vimclojure: prompt for input and lookup with (source)'],
['\\fd',                                     '" vimclojure: prompt for input and lookup with (find-doc)'],
['\\el / \\ef / \\eb',                       '" vimclojure: eval line / file / visual block'],
['\\et',                                     '" vimclojure: send a function to the REPL'],
['\\p',                                      '" vimclojure: close a window'],
]


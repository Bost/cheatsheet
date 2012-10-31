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
[':bufdo %s/pattern/substit/ge | update',    '" substitute and <u>save</u> in all buffers'],
[':bnext (or bn)/ bprev (or bp)',            '" go to next/previous buffer'],
[':let @m=\'\'  /  :let @m=@n',              '" clear register / copy register value'],
['v/abc',                                    '" mark everything from the cursor up to abc'],
[':reg abc',                                 '" display registers a, b and c'],
['["x]y{motion}',                            '" yank {motion} into register x'],
['"qY',                                      '" store curret line to register q'],
['"0P',                                      '" paste last yanked text'],
['"*p / "*dd / "+p / "+dd',                  '" paste from / cut line to system clipboard / system selection (X11)'],
[':messages',                                '" display error messages'],
['gq',                                       '" break lines according to :set textwidth. (see wrapmargin too)'],
['gj / gk',                                  '" move down / up when lines are wrapped'],
['== / gg=G',                                '" format line / format file'],
['qq .... q @q/@@',                          '" start/stop macro recording, play down recorded macro'],
[':cw / :cwindow',                           '" open the quickfix window'],
[':cclose',                                  '" close quickfix window'],
[':ba / :ball / :wa / :wall',                '" open / write all buffers at once'],
[':marks, m',                                '" marks (for jumping etc); m - marks something?'],
['C-x C-k e',                                '" edit macro'],
['vim -p file1 file2',                       '" open vim with tabs'],
[':! sort',                                  '&nbsp;'],
[':sort u',                                  '" filter out duplicate rows (unique rows only)'],
['78i-&lt;Esc&gt;',                          '" print 78 \'-\' chars at once'],
['gum gUm',                                  '" lowercase/uppercase of movement m'],
['R r ~',                                    '" replace mode, replace 1 char, replace char and move right'],
['30|',                                      '" jump to column 30'],
[':r! command',                              '" execute command and read in its output'],
['.!sh / !!sh / <F8>',                       '" execute current line in the shell'],
[':%!column -t',                             '" format to columns'],
['`. / \'.',                                 '" last edit location (~ key)/ line (&auml; key)'],
['; ,',                                      '" jump cursor forward, backward'],
['zz zb zt / M L H',                         '" move window / jump cursor middle, bottom, top'],
['zc zo za / zC zO zA / zR',                 '" close, open, toggle current / all folds from cursor/ all folds'],
[':set guifont=?',                           '" display current guifont'],
[':set guifont=*',                           '" display guifont dialog window'],
['"% / "#',                                  '" registers: current / alternate filename'],
['"_ / ".',                                  '" registers: last small delete (? the blackhole register?) / last inserted text'],
['"/ / ":',                                  '" registers: last search / last ex command'],


['C-r % / C-r #',                            '" registers: insert name of the current / alternate file'],
['C-r =',                                    '" calculator; can access every vim-function'],


['C-^ / C-6',                                '" switch to the alternate file (probably the one marked with %/")'],
['C-t / C-d',                                '" align text in insert mode'],
['vit / yit / cit / dit',                    '" mark/yank/change/delete \"innerHTML\"'],
['vat / yat / cat / dat',                    '" mark/yank/change/delete whole tag'],

['ci{ / ci( / ci[ / ci"',                    '" change the content inside given parenthesis'],
['da&lt; / dap / daw',                       '" delete html tag / current paragraph (f.e. a function) / word'],
['o in visual mode',                         '" change the marking direction'],
['gv',                                       '" re-select last visual block'],
['I{string}&lt;Esc&gt; / A{string}&lt;Esc&gt;',                '" insert / append {string} to the visual block'],
['o (in visual mode)',                       '" change the marking direction in visual mode'],
['3/joe/e+1',                                '" find 3rd joe cursor set to End of match plus 1 [C]'],
['5/joe/s-2',                                '" find 5th joe cursor set to Start of match minus 2'],
['/joe/+4',                                  '" find joe cursor and move 4 lines down'],
['f/t F/T',                                  '" search forward / backward'],
['q: / q? / q/',                             '" open Ex command-line / search string'],
['c-f',                                      '" opens command-line history when editing search pattern'],
['* / "',                                    '" hightlight and search forwards/backwards'],
['g* / g"',                                  '" hightlight and search for parts of a word'],
[':[range]s/bacon/lettuce/[ciInp] [count]',  '" confirm, ignore case, case sensitive, number of matches; print lines'],
[':s/foo/bar/g10',                           '" replace only next 10 lines'],
[':[range]s//baz/...',                       '" use previous search pattern'],
[':%s/~/qux/igc',                            '" : Substitute your last replacement string'],
[':g/regexp/p',                              '" \"grep\"'],
['g; / g,',                                  '" cycle back / forward to the last places you were in insert mode'],
['s / S',                                    '" delete current char / clear current line and go to insert mode'],
['gf',                                       '" open file under cursor (goto file)'],
['C-w f',                                    '" open file under cursor in a new window'],
['cc',                                       '" change current line'],
['C-a / C-x',                                '" increment / decrement next number on the current line'],
['xp',                                       '" swap chars'],
['C-n C-p',                                  '" word completition in insert mode'],
['C-x C-l / C-x C-o',                        '" line completition / function name completition (omni completition)'],
['/C-r C-w',                                 '" pull &lt;cword&gt; (current word) onto search/command line'],
['C-o',                                      '" temporarily change the insert- for normal mode'],


['&nbsp;',                                   '&nbsp;'],

[':diffthis / :windo diffthis',              '" diff current two buffers / windows'],
[':vert diffsplit filename',                 '" diff current buffer with a filename'],
['gvim -d file1 file2 / vimdiff file1 file2','" &nbsp;'],
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
[':sp filename / :vsp filename',             '" split viewports horizontal / vertical'],
['&gt; / &lt; / =',                          '" shift text right / left / align text'],
['C-] / C-T',                                '" follow link / go back to previous topic in vim help'],
[':changes g; g,',                           '" move forth/back in the change list'],
[':jumps / C-o / C-i',                       '" back/forth in the jump list (older/newer)'],

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

['\\sr',                                     '" vimclojure: start REPL'],
['\\sR',                                     '" vimclojure: start interactive REPL initialized to have same namespace as current buffer'],
['\\si',                                     '" vimclojure: prompt for input and lookup with (source)'],
['\\fd',                                     '" vimclojure: prompt for input and lookup with (find-doc)'],
['\\el / \\ef / \\eb',                       '" vimclojure: eval current line / file / current visual block selected'],
['\\et',                                     '" vimclojure: send a function to the REPL'],
['\\p',                                      '" vimclojure: close a window'],
]


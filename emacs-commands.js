var jsonEmacs = [
// ['', ';'],
['M-x paredit-wrap-square',         '; paredit: wrap square brackets around sexp'],
['C-k',                             '; paredit: kill the rest in the sexp'],
['M-( / M-r / M-&lt;up&gt;',        '; paredit: wrap brackets around sexp / raise sexp (replace entire parent with the child) / remove everything before in the current sexp'],
['C-&lt;right&gt; / C-&lt;left&gt;','; paredit: slurp (vcucni) / barf (vygrcaj) sexp'],
['M-r',                             '; paredit: replace parent with the child'],
['C-u -4 C-x TAB',                  '; indent: move text left by four spaces (M-x indent-rigidly is C-x TAB)'],
['\\#',                             '; regexp: increment the number found'],
['M-x describe-char',               '; unicode: describe char at the point'],
['M-x ucs-insert RET 2211',         '; unicode: insert unicode char U+2211 ∑'],
['M-x hs-minor-mode, C-c @ C-c',    '; folding: enable folding, fold / unfold'],
['C-x RET f',                       '; file format'],
['M-x linum-relative-toggle',       '; toggle relative / absolute line numbers'],
['C-c M-j',                         '; nrepl: M-x nrepl-jack-in'],
['C-c 1 / C-c 2 / ...',             '; winner-mode: jump between window config'],
['emacs -q',                        '; skip ~/.emacs (if messed up)'],
['M-x browse-url-at-point',         '; open web browser'],
['M-x byte-compile-file',           '; byte-compile an *.el file'],
['M-x quail-set-keyboard-layout',   '; keyboard: does not work on cygwin'],
['M-x quail-show-key',              '; keyboard: show layout'],
['M-x toggle-scroll-bar',           '; toggle vertical scroll bar (there is no vertical scroll bar)'],
['C-x < / C-x >',                   '; scroll left / right'],
['C-z',                             '; evil: toggle (evil-mode 0) / (evil-mode 1)'],
['C-h m',                           '; describe current mode'],
['C-h k / C-h f / C-h v / C-h b',   '; describe-key / -function / -variable / -binding'],
['M-x package-list-packages',       '; install new packages'],
['M-d / C-k',                       '; delete word / line from cursor'],
['M-x goto-line',                   '; goto-line'],
['M-` / F10',                       '; menu'],
['C-u C-SPC',                       '; jump back to the last mark (there is a mark-ring)'],
['C-x ^ or C-x { or } ',            '; enlarge-window, shrink-window horizontally / vertically'],
['C-u C-x v =',                     '; diff against any chosen revision'],
['C-x v u',                         '; discard changes'],
['C-x v ~',                         '; checkout any version: master~3 - last 3th version'],
['C-x v l',                         '; commit log: f - view revision; d - view diff'],
['C-x o',                           '; switch window / frame (o = other)'],
['C-x v i',                         '; add to version control system'],
['C-x r RET',                       '; add to version control system'],
['C-x C-f / C-x C-v',               '; find file / find alternate file (reload file)'],
['C-x 4 f / C-x 4 b',               '; find-file-other window / switch-to-buffer-other-window'],
['C-x C-s / C-x C-w',               '; save file / save as'],
['C-x s',                           '; save-some-buffers'],
['&nbsp;',                          '; eshell: ifconfig &gt; #<buffer interfaces>'],
['M-x global-linum-mode',           '; show line number or put(line-number-mode 1) to ~/.emacs'],
['&nbsp;',                          '; cssh ? ssh shell ? (somehow strange)'],
['&nbsp;',                          '; color-theme-calm-forest ? does not work?'],
['&nbsp;',                          '; yasnippet - yet another snippets'],
['&nbsp;',                          '; elpa - emacs lisp package archive'],
['C-x 1',                           '; delete-other-windows'],
['C-x k',                           '; buffers: kill-buffer'],
['C-x C-b / C-x b',                 '; buffers: M-x list-buffers / M-x ido-switch-buffer'],
['M-x kill-whole-line',             '; &nbsp;'],
['C-S-Backspace',                   '; delete 1 whole line'],
['M-!',                             '; shell-command'],
['M-;',                             '; comment out active region'],
['M-/',                             '; code completion'],
['C-x z',                           '; M-x repeat'],
['C-x m',                           '; email'],
['C-x i',                           '; insert file'],

['M-x command',                     '; execute command'],
['C-x C-e',                         '; M-x eval-last-sexp. See M-x eval-current-buffer'],
['C-M-f / C-M-b',                   '; jump forward / backward to matching brace; cursor may need to be behind closing \')\''],
['C-M-x',                           '; immediate eval'],
['C-M-\'',                          '; auto indent block'],
['<a href="http://lpn.rnbhq.org/tools/xemacs/emacs_ref.html" >emacs command list</a>','; emacs command list'],
['M-%',                             '; M-x query-replace'],
['M-u / M-l / M-c',                 '; M-x upcase-word / downcase-word / capitalize-word'],
['M-x ispell-region',               '; check a small region'],
['M-x ispell-buffer',               ';'],

['C-x ( / C-x ) / C-x e',           '; macro: start / stop / execute (e - execute again)'],
['F3 or C-x ( / F4 or C-x e',       '; marco: start macro, stop/play macro'],
['M-5 F4 or C-x e',                 '; macro: repeat macro 5 times'],
['C-u n',                           '; repeat n times following command'],
['C-x u / C-_ or C-/',              '; M-x undo-tree-visualize / undo'],
['C-f C-_',                         '; redo'],
['M-x erc',                         '; start irc inside of emacs'],
['M-a / M-e',                       '; forward / backward one sentence'],
['C-x h / M-h',                     '; mark whole buffer / mark paragraph'],
['M-} / <C-down> / M-{ / <C-up>',   '; M-x forward-paragraph / backward-paragraph'],
['C-x `',                           '; jump to the next (compilation error(s), grep results etc.)'],
['M-x compile',                     '; compile using given program'],
['M-x speedbar',                    '; (by default shows only python scripts)'],
['C-x C-w',                         '; writte buffer to a different file'],
['C-x left/right',                  '; next-buffer / previous-buffer'],
['C-k / M-k',                       '; copy-paste: kill line / kill sentence / yank'],
['C-w',                             '; copy-paste: kill region (cut)'],
['M-w / C-y',                       '; copy-paste: kill ring save (copy) / yank (paste last killed entry)'],
['M-y',                             '; copy-paste: cycle back through previous entries in the kill ring'],
['M-x grep',                        ';'],
['M-$ spell',                       '; check word'],
['M-x flyspell-mode',               '; ? check all document ?'],
['M-&lt;',                          '; beginning of buffer'],
['M-&gt;',                          '; end of buffer'],
['M-v / C-v',                       '; page up/down'],
['C-t / M-t / C-x C-t',             '; transpose chars/words/lines'],
['C-l',                             '; center the screen'],
['M-x shell / eshell ',             '; start a bash command line'],
['M-x eshell; cmd; db2init; c46; \[f12\]', '; sql: db2: execute script.sql'],
['C-x C-f ENTER',                   '; enters the dired mode (see menu)'],
['M-q',                             '; rewrap the line in auto-fill-mode'],
['C-u',                             '; parameter key'],
['C-u 40 C-x f',                    '; sets the line wrap to 40 characters, M-q # activate the wrap'],
['M-x fill-region',                 '; reflow all the paragraphs in the area'],
['M-o M-s',                         '; center for given line width'],
['C-M-s',                           '; isearch-forward-regexp'],
['C-s / C-r',                       '; incremental search forward / backward'],
['C-M-%',                           '; query-replace-regexp'],
['C-u M-! command',                 '; execute command and read-in its output'],
['M-x gdb',                         '; debugger'],
['C-h i m emacs',                   '; ? emacs manual?'],
['M-x dbg',                         '; '],
['M-x ediff',                       '; '],
['M-x compile',                     '; '],
['M-x grep',                        '; '],
['M-x man',                         '; '],
['M-x gnus',                        '; news, email, rss'],
['M-:',                             '; M-x eval-expression'],
['M-g g',                           '; documentation reader'],
['C-u C-n',                         '; move forward 4 lines'],
['C-x C-+ / C-x C--',               '; increase / decrease font size'],

['M-x slime',                       '; start slime (Superior Lisp Interaction Mode for Emacs)'],
['C-x C-e',                         '; repeat last command'],
['M-p',                             '; reprint last command to the REPL'],

['\\sr',                            '; start REPL'],
['\\sR',                            '; start interactive REPL initialized to have same namespace as current buffer'],

['\\si',                            '; prompt for input and lookup with (source)'],
['\\fd',                            '; prompt for input and lookup with (find-doc)'],

['&nbsp;','&nbsp;'],

['\\el / \\ef / \\eb / \\et',       '; eval current line / file / selected visual block / function'],
['\\p',                             '; close a window'],

['&nbsp;','&nbsp;'],

['C-n',                             '; auto completition'],
['C-w C-w',                         '; move around split viewports'],
['C-x C-o',                         '; complete function name (omni completition)'],

['C-Spc',                           '; region: set mark (start region)'],
['C-x r k',                         '; region: kill selected region'],
['M-x ispell-region',               '; region: check a small region'],
['C-x 0 / C-x 1 / C-x 2 / C-x 3',   '; splits: close / only one buffer / horizontal / vertical'],

['M-x magit-status / s / c / P / d / k','; magit: status / stage / commit / push / diff / discard changes'],
['C-c C-c',                         '; magit; end of git commit message'],
['+ / - / select hunk',             '; magit; split hunk'],
['C',                               '; magit; commit'],
['M-x menu-bar-mode',               '; gui: toggle menu-bar'],
['M-x align-regexp',                '; align at the given regexp'],
]

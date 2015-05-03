var jsonEmacs = [
// ['', ';'],
['M-x highlight-symbol-at-point',   '; e.g. visualisatin; for log analysis'],
['M-x paredit-wrap-square',         '; paredit: wrap square brackets around sexp'],
['C-k',                             '; paredit: kill the rest in the sexp'],
['M-( / M-r / M-&lt;up&gt;',        '; paredit: wrap brackets around sexp / raise sexp (replace entire parent with child) / remove everything before the current sexp'],
['C-&lt;right&gt; / C-&lt;left&gt;','; paredit: slurp (vcucni) / barf (vygrcaj) sexp'],
['M-r',                             '; paredit: replace parent with the child'],
['C-u -4 C-x TAB',                  '; indent: move text left by four spaces (M-x indent-rigidly is C-x TAB)'],
['\\#',                             '; regexp: increment the number found'],
['M-x describe-char',               '; unicode: describe char at the point'],
['M-x ucs-insert RET 2211',         '; unicode: insert unicode char U+2211 ∑'],
['M-x hs-minor-mode, C-c @ C-c',    '; folding: enable folding, fold / unfold'],
['C-x RET f',                       '; files: file format'],
['C-c M-j',                         '; nrepl: M-x nrepl-jack-in'],
['C-c 1 / C-c 2 / ...',             '; winner-mode: jump between window config'],
['emacs -q',                        '; startup: skip ~/.emacs (if messed up)'],
['M-x browse-url-at-point',         '; open web browser'],
['M-x byte-compile-file',           '; byte-compile an *.el file'],
['M-x quail-set-keyboard-layout',   '; keyboard: does not work on cygwin'],
['M-x quail-show-key',              '; keyboard: show layout'],
['C-x < / C-x >',                   '; scroll left / right'],
['C-z',                             '; evil: toggle (evil-mode 0) / (evil-mode 1)'],
['C-h i m emacs',                   '; help: ? emacs manual?'],
['C-h m',                           '; help: describe current mode'],
['C-h k / C-h f / C-h v / C-h b',   '; help: describe-key / -function / -variable / -binding'],
['C-h v package-activated-list',    '; help: show content of the variable containing installed packages'],
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
['C-x C-f / C-x C-v',               '; files: find file / find alternate file (reload file)'],
['C-x C-f /method:user@remotehost:filename', '; remote file editing: Transparent Remote (file) Access, Multiple Protocol (TRAMP); method can be: ssh'],
['C-x 4 f / C-x 4 b',               '; files: find-file-other window / switch-to-buffer-other-window'],
['C-x C-s / C-x s / C-x C-w ',      '; files: save file / save all /save as'],
['C-x s',                           '; files: save-some-buffers'],
['&nbsp;',                          '; eshell: ifconfig &gt; #<buffer interfaces>'],
['&nbsp;',                          '; cssh ? ssh shell ? (somehow strange)'],
['&nbsp;',                          '; color-theme-calm-forest ? does not work?'],
['&nbsp;',                          '; yasnippet - yet another snippets'],
['C-x k',                           '; files: buffers: kill-buffer'],
['C-x C-b / C-x b',                 '; files: buffers: M-x list-buffers / M-x ido-switch-buffer'],
['M-x kill-whole-line',             '; &nbsp;'],
['C-S-Backspace',                   '; delete 1 whole line'],
['M-! / M-x; / M-/ /',              '; M-x shell-command / evilnc-comment-or-uncomment-lines / dabbrev-expand (code completition)'],
['C-x m / i / z',                   '; email / insert file / repeat'],

['C-x C-e',                         '; M-x eval-last-sexp. See M-x eval-current-buffer'],
['C-M-f / C-M-b',                   '; jump forward / backward to matching brace; cursor may need to be behind closing \')\''],
['C-M-x',                           '; immediate eval'],
['C-M-\'',                          '; auto indent block'],
['M-%',                             '; M-x query-replace'],
['M-u / M-l / M-c',                 '; M-x upcase-word / downcase-word / capitalize-word'],
['M-x ispell-region / ispell-buffer', '; check a small region'],

['C-x ( / C-x ) / C-x e',           '; macro: start / stop / execute (e - execute again)'],
['F3 or C-x ( / F4 or C-x e',       '; marco: start macro, stop/play macro'],
['M-5 F4 or C-x e',                 '; macro: repeat macro 5 times'],
['C-u n',                           '; repeat n times following command'],
['C-x u / C-_ or C-/',              '; M-x undo-tree-visualize / undo'],
['C-f C-_',                         '; redo'],
['M-a / M-e',                       '; forward / backward one sentence'],
['C-x h / M-h',                     '; mark whole buffer / mark paragraph'],
['M-} / <C-down> / M-{ / <C-up>',   '; M-x forward-paragraph / backward-paragraph'],
['C-x `',                           '; jump to the next (compilation error(s), grep results etc.)'],
['C-x C-w',                         '; files: writte buffer to a different file'],
['C-x left / right',                '; files: next-buffer / previous-buffer'],
['C-k / M-k',                       '; copy-paste: kill line / kill sentence / yank'],
['C-w',                             '; copy-paste: kill region (cut)'],
['M-w / C-y',                       '; copy-paste: kill ring save (copy) / yank (paste last killed entry)'],
['M-y',                             '; copy-paste: cycle back through previous entries in the kill ring'],
['M-$ spell',                       '; check word'],
['M-x flyspell-mode',               '; ? check all document ?'],
['M-&lt; / &gt;',                   '; beginning / end of buffer'],
['M-v / C-v',                       '; page up/down'],
['C-t / M-t / C-x C-t',             '; transpose chars/words/lines'],
['C-l',                             '; center the screen'],
['M-x shell / eshell ',             '; start a bash command line'],
['M-x eshell; cmd; db2init; c46; \[f12\]', '; sql: db2: execute script.sql'],

['&nbsp;',                          '; dired: <a href="http://www.gnu.org/software/emacs/refcards/pdf/dired-ref.pdf">http://www.gnu.org/software/emacs/refcards/pdf/dired-ref.pdf</a>'],
['C-x C-f ENTER',                   '; dired: enters the dired mode (see menu)'],
['m / u (U) / t',                   '; dired: mark / unmark (all) / toggle marking'],
['~ / #',                           '; dired: markup all backup / auto-save files'],
['* / * * / * s (.) / * c',         '; dired: markup all dirs / executables / files (with extention) / change all marks'],
['+ ',                              '; dired: new dir'],
['M-x dired-toggle-read-only / M-x wdired-finish-edit', '; dired: writable - perform operations by editing dired buffer'],
['M-q',                             '; rewrap the line in auto-fill-mode'],
['C-u',                             '; parameter key'],
['C-u 40 C-x f',                    '; sets the line wrap to 40 characters, M-q # activate the wrap'],
['M-x fill-region',                 '; reflow all the paragraphs in the area'],
['M-o M-s',                         '; center for given line width'],
['C-M-s',                           '; isearch-forward-regexp'],
['C-s / C-r',                       '; incremental search forward / backward'],
['C-M-%',                           '; query-replace-regexp'],
['C-u M-! command',                 '; execute command and read-in its output'],
['M-x dbg / ediff / compile / man / erc',         '; '],
['M-x gnus / grep / speedbar / slime',            '; read news, email, rss / grep / speedbar / Superior Lisp Interaction Mode for Emacs'],
['M-x linum-relative-toggle / global-linum-mode', '; line numbers: relative / absolute'],
['M-:',                             '; M-x eval-expression'],
['M-g g',                           '; documentation reader'],
['C-u C-n',                         '; move forward 4 lines'],
['C-x C-+ / C-x C--',               '; increase / decrease font size'],

['C-x C-e',                         '; repeat last command'],
['M-p',                             '; slime: reprint last command to the REPL'],

['\\sr',                            '; start REPL'],
['\\sR',                            '; start interactive REPL initialized to have same namespace as current buffer'],

['\\si',                            '; prompt for input and lookup with (source)'],
['\\fd',                            '; prompt for input and lookup with (find-doc)'],

['&nbsp;','&nbsp;'],

['\\el / \\ef / \\eb / \\et',       '; eval current line / file / selected visual block / function'],
['\\p',                             '; close a window'],

['&nbsp;','&nbsp;'],

['M-x toggle-scroll-bar',           '; gui: toggle vertical scroll bar (vertical scroll bar does not exist in emacs)'],
['M-x menu-bar-mode',               '; gui: toggle menu-bar'],
['M-x align-regexp',                '; align at the given regexp'],
['C-n',                             '; auto completition'],
['C-w C-w',                         '; move around split viewports'],
['C-x C-o',                         '; complete function name (omni completition)'],

['C-Spc',                           '; region: set mark (start region)'],
['C-x r k',                         '; region: kill selected region'],
['M-x ispell-region',               '; region: check a small region'],
['C-x 0 / C-x 1 / C-x 2 / C-x 3',   '; splits: close / only one buffer / horizontal / vertical'],
['M-x clean-buffer-list',           '; does not work'],
['M-x byte-recompile-directory',    '; use when "newer than byte-compiled file"'],


['C-M-i',                           '; helm: minibuffer: minibuffer-force-complete'],
['C-t',                             '; M-x vertical helm-toggle-resplit-and-swap-windows: toggle horizontal / vertical'],
['C-SPC / C-c C-i',                 '; M-x helm-toggle-visible-mark / M-x helm-copy-to-buffer'],
['C-c ?',                           '; helm: manual'],
['&nbsp;',                          '; M-x helm-top / M-x helm-register'],
['&nbsp;',                          '; helm: <a href="http://tuhdo.github.io/helm-intro.html">http://tuhdo.github.io/helm-intro.html</a>'],

['M-x hi-lock-mode / highlight-regexp;', '; highlighting'],
// ['&nbsp;','&nbsp;'],
['&nbsp;','&nbsp;'],

['&nbsp;',                          '; magit: <a href="http://magit.github.io/master/magit.html">http://magit.github.io/master/magit.html</a>'],
['P / d / k / z / a (A)',           '; M-x magit-status: push / diff / discard (kill) / stash / cherry pick apply (and discard) stash changes'],
['s (S) / u (U) / c (C) / x (X)',   '; M-x magit-status: stage (all) / unstage (all) / commit (with template) / reset (discard all uncommited) changes'],
['C-c C-c',                         '; M-x magit-commit; end of git commit message'],
['+ / - / 0 / select hunk / i / I', '; M-x magit-status; inc / dec / reset hunk size / split hunk / add to .gitignore / add to .git/info/exclude'],
['M / l / b / B / d / f / m / r',   '; M-x magit-status; remoting / log / branching / bisecting / diff / fetch / merge / rewrite'],
['SPC / RET / C-w / x',             '; M-x magit-log; show commit details and stay in log / jump to details / put sha1 to clipboard / reset HEAD to given commit'],
['. / C-u . / = / h',               '; M-x magit-log; toggle (un)mark / unmark / diff marged with current commit / toggle margin'],
['$',                               '; M-x magit-process: show *magit-process* buffer'],
['(M-)1 / (M-)2 / (M-)3 / (M-)4',   '; M-x magit-status: section visibility'],
['M-h (H) / M-s (S)',               '; M-x magit-status: section visibility: hide (all) / show (all)'],
['C-x 4',                           '; M-x magit-commit: write to ChangeLog ?'],
['M-p / M-n / C-c C-k / C-c C-t / C-c C-s', '; M-x magit-commit: log-edit-commit-ring / Kill commit / Tested / Signed-off by'],
['R / E',                           '; M-x magit-status: rebase / ineractive-rebase'],
['s / c / r',                       '; M-x magit-ineractive-rebase: squash / pick / reword'],
['x (X)',                           '; M-x magit-status: reset (discard all uncommited) changes - working tree unchanged'],
['M-x info / info-emacs-manual / info-display-manual' , '; info: manual:'],
['macros',                          '; 1. M-x kmacro-name-last-macro, 2. M-x insert-kbd-macro, 3. M-x kmacro-bind-to-key'], 
['$dev/emacs/src/emacs --eval \'(message "uhu")\'', '; launch emacs and eval string; does not work well with my bash function LaunchEmacs'],
]

;; modeline:?
;; -*- mode: emacs-lisp -*-

;; spacemacs search
;; SPC s

;; spacemacs help-describe
;; SPC h d

;; spacemacs windows: toggle golden ratio for windows
;; SPC t g

;; helm-spacemacs-help
SPC h SPC <topic>

;; spacemacs M-x
SPC SPC

;; spacemacs version
SPC f e v

;; spacemacs popup *Messages*
SPC w p m

;;
M-x narrow-to-defun (s-n) / M-x widen (s-N)

;; open file and jump to line:column
emacs +line:column path/to/file

;; unreachable repositories: use http instead of https
emacs --insecure

;; e.g. visualisatin; for log analysis
M-x highlight-symbol-at-point

;; paredit: wrap square brackets around sexp
M-x paredit-wrap-square

;; paredit: kill the rest in the sexp
C-k

;; paredit: insert-parentheses / move-past-close-and-reindent
M-(   /   M-)

;; paredit-forward-slurp-sexp (vcucni) / paredit-forward-barf-sexp (vygrcaj)
<M-s-right> / <M-s-left>

;; indent: move text left by four spaces (M-x indent-rigidly is C-x TAB)
C-u -4 C-x TAB

;; :regexp https://www.emacswiki.org/emacs/RegularExpression#regexp
;; increment the number found  /  whitespace
\\#  /  \\s-
;; substiture / find exactly 2 occurences
%s/\(.\{2\}\)/aa/g

;; utf8; unicode: describe char at the point
M-x describe-char

;; utf8; unicode: insert unicode char upper-case sigma U+2211 ∑
M-x ucs-insert RET 2211

;; hide: show: folding: enable folding, fold / unfold
M-x hs-minor-mode, C-c @ C-c

;; hide: show: folding:
z o ;; evil open fold
z z ;; evil close fold
z a ;; evil toggle fold
z r ;; evil open (all) folds
z m ;; evil close (all) folds

z t ;; evil-scroll-line-to-top
z b ;; evil-scroll-line-to-bottom

z RET ;; evil keyboard macro ???

;; evil: move view 5 chars to the right
5z<Right>

;; files: file format
C-x RET f

;; nrepl: M-x nrepl-jack-in
C-c M-j

;; winner-mode: jump between window config
C-c 1 / C-c 2 / ...

;; testing: startup: skip ~/.emacs (if messed up) / don't load the init file
emacs --no-init-file     ;; also: emacs -q
emacs --no-window-system ;; also: emacs -nw

;; web
M-x browse-url-at-point   ;; open web browser of the OS
M-x eww                   ;; emacs web browser

;; byte-compile an *.el file
M-x byte-compile-file

;; keyboard: does not work on cygwin
M-x quail-set-keyboard-layout

;; keyboard: show layout
M-x quail-show-keyboar-layout

;; scroll left / right
C-x < / C-x >

;; evil: Edit the search string in the minibuffer. (isearch-edit-string)
M-e

;; evil: toggle (evil-mode 0) / (evil-mode 1)
C-z

;; help: ? emacs manual?
C-h i m emacs

;; help: describe current mode
C-h m

;; help: describe-key / -function / -variable / -binding
C-h k / C-h f / C-h v / C-h b

;; dynamic vs. lexical binding: https://www.emacswiki.org/emacs/LexicalBinding
(setq lexical-binding t)

;; dynamic vs. lexical binding:
;; https://www.emacswiki.org/emacs/DynamicBindingVsLexicalBinding
;; lexical binding is for closures
;; -*- lexical-binding: t -*-

;; dynamic vs. lexical binding:
EmacsLisp: dynamic; Scheme, CommonLisp: lexical

;; CLOS: Common Lisp Object System (CLOS)
differs from OOP facilities found in C++ or Java

;; help: show content of the variable containing installed packages
C-h v package-activated-list

;; install new packages
M-x package-list-packages

;; packages grouped by keyword
M-x finder-by-keyword

;; delete word / line from cursor
M-d / C-k

;; goto-line
M-x goto-line

;; menu
M-` / F10

;; jump back to the last mark (there is a mark-ring)
C-u C-SPC

;; enlarge-window, shrink-window horizontally / vertically
C-x ^ or C-x { or }

;; diff against any chosen revision
C-u C-x v =

;; discard changes
C-x v u

;; checkout any version: master~3 - last 3th version
C-x v ~

;; commit log: f - view revision; d - view diff
C-x v l

;; switch window / frame (o = other)
C-x o

;; add to version control system
C-x v i

;; add to version control system
C-x r RET

;; files: find file / find alternate file (reload / refresh file)
C-x C-f / C-x C-v

;; Transparent Remote (file) Access / Editing, Multiple Protocol (TRAMP)
;; method can be: ssh if anything doesn't work:
;; 1. delete ~/.bashrc
;; 2. emacs -q --eval "(setq tramp-verbose 10)" &
C-x C-f /method:user@remotehost#port:filename
C-x C-f /ssh:test@host#2222:/tmp

;; files: find-file-other window / switch-to-buffer-other-window
C-x 4 f / C-x 4 b

;; files: save file / save all /save as
C-x C-s / C-x s / C-x C-w

;; files: save-some-buffers
C-x s

;; eshell: ifconfig > #<buffer interfaces>

;; cli: batch: noninteractive run
emacs --batch --eval '(message "Hello world")'

;; cli: batch: run emacs lisp file from command line:
;; chmod +x ./hello.el; ./hello.el
#!/bin/sh
":"; exec emacs --script "$0" "$@"
;; # -*- mode: emacs-lisp; lexical-binding: t; -*-
(message "Hello world")

;; cli: batch: noninteractive run
#!/usr/bin/emacs --script
(message "Hello world")

;; eshell: combing elisp functions (message) with OS programs
;; (/usr/bin/cut) in eshell
message "Hello world" | cut -f 1 -d ' '

;; cssh ? ssh shell ? (somehow strange)

;; color-theme-calm-forest ? does not work?

;; yasnippet - yet another snippets. Example
;; `defn' `M-/' type in the defn-name, then `TAB' to complete ...

;; files: buffers: kill-buffer
C-x k

;; files: buffers: M-x list-buffers / M-x ido-switch-buffer
C-x C-b / C-x b

;; delete 1 whole line
M-x kill-whole-line
C-S-Backspace

;; M-x evilnc-comment-or-uncomment-lines / dabbrev-expand (code completition)
M-x ; / M-/ /

;; email / insert file / repeat
C-x m / i / z

;; M-x eval-last-sexp. See M-x eval-current-buffer
C-x C-e

;; jump forward / backward to matching brace
;; cursor may need to be behind closing ')'
C-M-f / C-M-b

;; immediate eval
C-M-x

;; auto indent block
C-M-'

;; M-x query-replace
M-%

;; M-x upcase-word / downcase-word / capitalize-word
M-u / M-l / M-c

;; check a small region
M-x ispell-region
M-x ispell-buffer

;; macro: start / stop / execute (e - execute again)
C-x ( / C-x ) / C-x e

;; marco: start macro, stop/play macro
;; F3 or C-x ( / F4 or C-x e

;; macro: repeat macro 5 times
M-5 F4 or C-x e

;; repeat n times following command
C-u n

;; M-x undo-tree-visualize / undo
C-x u / C-_ or C-/

;; redo
C-f C-_

;; next-buffer / previous-buffer
<XF86Forward>, C-x <C-right>, C-x <right> / <XF86Back>, C-x <C-left>, C-x <left>

;; forward / backward one sentence
M-a / M-e

;; mark / hilite / highlight whole buffer / mark paragraph
C-x h / M-h

;; M-x forward-paragraph / backward-paragraph
M-} / <C-down> / M-{ / <C-up>

;; jump to the next (compilation error(s), grep results etc.)
C-x `

;; files: writte buffer to a different file
C-x C-w

;; files: next-buffer / previous-buffer
C-x left / right

;; copy-paste: kill line / kill sentence / yank
C-k / M-k

;; copy-paste: kill region (cut)
C-w

;; copy-paste: kill ring save (copy) / yank (paste last killed entry)
M-w / C-y

;; magit: (magit-copy-section-value) i.e. current sha1 to clipboard
y s

;; magit: (magit-copy-buffer-revision) i.e. top sha1 to clipboard
M-w

;; copy-paste: cycle back through previous entries in the kill ring
M-y

;; magit: spin-off / spinoff
git branch --track <new-branch-name>

;; check word
M-$ spell

;; ? check all document ?
M-x flyspell-mode

;; beginning / end of buffer
M-< / >

;; page up/down
M-v / C-v

;; transpose chars/words/lines
C-t / M-t / C-x C-t

;; center the screen
C-l / zz

;; start a bash command line
M-x shell / M-x term / eshell

;; eshell: example
egrep -r 'something' *

;; sql: db2: execute script.sql
M-x eshell; cmd; db2init; c46; \[f12\]

;; dired: Dired Refecene Card / Cheatsheet
http://www.gnu.org/software/emacs/refcards/pdf/dired-ref.pdf

;; dired: zip: compress or uncompress (extract) file
Z

;; dired: start dired and create newfile
C-x C-f ENTER / <newfile>

;; dired: mark / unmark (all) / toggle marking
m / * / u (U) / t

;; dired: mark all: toggle marking / executables / files (with extention)
* . <ext> / * s / * *

;; dired: mark & delete all files with extention
* . <ext> D

;; dired: change all marks
* c

;; dired: markup: all backup / auto-save files / refresh buffer
~ / # / g

;; dired: M-x dired-create-directory / M-x dired-do-rename
+ / R

;; dired: dir listing details: `)'
M-x dired-details-toggle
M-x dired-hide-details-mode

;; dired: writable - perform operations by editing dired buffer
M-x dired-toggle-read-only (C-x C-q) / M-x wdired-finish-edit

;; fill / reflow text - see also auto-fill-mode
;; spacemacs/toggle-auto-fill-mode SPC t F
M-x fill-paragraph (M-q)
M-x fill-region ;; reflow all the paragraphs in the area

;; parameter key
C-u

;; sets the line wrap to 40 characters, M-q # activate the wrap
C-u 40 C-x f

;; center for given line width
M-o M-s

;; isearch-forward-regexp
C-M-s

;; incremental search forward / backward
C-s / C-r

;; query-replace-regexp
C-M-%

;;
M-x dbg / ediff / compile / man / erc

;; read news, email, rss / grep / speedbar /
;; Superior Lisp Interaction Mode for Emacs
M-x gnus
M-x grep
M-x speedbar

;; line numbers: relative / absolute
M-x linum-relative-toggle / global-linum-mode

;; M-x eval-expression
M-:

;; documentation reader
M-g g

;; move forward 4 lines
C-u C-n

;; increase / decrease font size
C-x C-+ / C-x C--

;; problem: emacs does not uses fonts from /usr/share/fonts
sudo apt install --yes libgtk2.0-dev
./configure --with-x-toolkit=gtk

;; slime: reprint last command to the REPL
M-p

;; gui: toggle vertical scroll bar (vertical scroll bar does not exist in emacs)
M-x toggle-scroll-bar

;; gui: toggle menu-bar
M-x menu-bar-mode

;; align at the given regexp
M-x align-regexp

;; auto completition
C-n

;; region: set mark (start region)
C-SPC

;; region: kill selected region
C-x r k

;; save region to a file
M-x write-region

;; splits: close / only one buffer / horizontal / vertical
C-x 0 / C-x 1 / C-x 2 / C-x 3

;; does not work
M-x clean-buffer-list

;; remedy against "newer than byte-compiled file" try also:
;; cd $dev/emacs/lisp; and make autoloads
M-x byte-recompile-directory

;; helm: minibuffer: minibuffer-force-complete
C-M-i

;; Helm: toggle horizontal / vertical listing 
M-x C-t

;; M-x helm-toggle-visible-mark / M-x helm-copy-to-buffer
C-SPC / C-c C-i

;; helm: htop: top: linux:
M-x helm-top / M-x proced

;; helm: apt:
M-x helm-apt

;; spacemacs: SPC r r; helm: clipboard: registers:
M-x helm-register / :reg

;; spacemacs: SPC r e; evil: clipboard: registers:
M-x evil-show-registers

;; paste from register
;; "<register>p

;; locate:
M-x locate

;; highlighting
M-x hi-lock-mode / highlight-regexp

;; magit: http://magit.github.io/master/magit.html
;; M-x magit-commit
C-c C-c

;; magit: cancel (abandon) commit
M-x with-editor-cancel / C-c C-k / C-x k

;; M-x magit-status;
;; inc / dec / reset hunk size / split hunk / add to .gitignore /
;; add to .git/info/exclude
+ / - / 0 / select hunk / i / I

;; M-x magit-status; remoting / log / branching / bisecting / diff / fetch /
;; merge / rewrite
M / l / b / B / d / f / m / r

;; M-x magit-log; show commit details and stay in log / jump to details /
;; put sha1 to clipboard / reset HEAD to given commit
SPC / RET / C-w / x

;; M-x magit-status: section visibility
(M-)1 / (M-)2 / (M-)3 / (M-)4

;; M-x magit-status: section visibility: hide (all) / show (all)
M-h (H) / M-s (S)

;; M-x magit-commit: log-edit-commit-ring / Kill commit / Tested / Signed-off by
M-p / M-n / C-c C-k / C-c C-t / C-c C-s

;; M-x magit-status: rebase / ineractive-rebase
R / E

;; M-x magit-ineractive-rebase: squash / pick / reword
s / c / r

;; M-x magit-status: reset (discard all uncommited) changes
;; working tree unchanged
x (X)

;; info: manual:
M-x info / info-apropos / info-emacs-manual / info-display-manual

;; macros
M-x kmacro-name-last-macro  ;; 1.
M-x insert-kbd-macro        ;; 2.
M-x kmacro-bind-to-key      ;; 3.

;; launch emacs and eval string
emacs --eval '(message "ufo")' / emacs -e configuration-layer/update-packages

;; M-x shell-command; execute
M-! / SPC !

;; execute shell command and read-in / capture its output (in the current buffer
;; if in evil-insert mode)
C-u M-! <cmd>
C-u SPC ! <cmd>

;; M-x shell-command: top: capture top output from stdout
M-! RET top -c -n -1 -b -w 200

;; M-x git-timemachine git:
p prev / n next / w Copy abbreviated hash / W Copy full hash / g Goto nth rev /
q Exit

;; profiler
M-x profiler-start profiler-report profiler-stop

;; evil: global search & replace, starting from the cursor position
:,$s/BEFORE/AFTER/gc
:,$s/BEFORE/AFTER/gc|1,''-&&

;; M-x ielm - alternative to Lisp Interactive mode; elisp REPL
Inferior Emacs Lisp Mode

;; hyper - none of following works. See http://superuser.com/a/920967
;; https://github.com/trishume/dotfiles/blob/master/emacs%2B/spacemacs.symlink
;; C-x @ h 9 means H-9
;; (setq mac-option-modifier 'hyper) ; sets the Option key as Hyper
(define-key local-function-key-map (kbd "<rwindow>")
  'event-apply-super-modifier)
(define-key local-function-key-map (kbd "<rwindow>")
  'event-apply-hyper-modifier)

(defun enable-hyper-super-modifiers-linux-x ()
  ;; on nowadays linux, <windows> key is usually configured to Super

  ;; menu key as hyper (for H-s release <menu> key before pressing 's')
  (define-key key-translation-map [menu] 'event-apply-hyper-modifier) ;H-
  (define-key key-translation-map [apps] 'event-apply-hyper-modifier)

  ;; by default, Emacs bind <menu> to execute-extended-command (same as M-x)
  ;; now <menu> defined as 'hyper, we need to press <menu> twice to get <H-menu>
  (global-set-key (kbd "<H-menu>") 'execute-extended-command)
  )
;; (global-set-key [(hyper 9)] (lambda () (message "[(hyper 9)]")))
;; (global-set-key (kbd "<rwindow>-9")
;;                 (lambda () (message "(kbd context-menu-9)")))
;; (global-set-key [(hyper 9)] (lambda () (message "[(hyper 9)]")))

;; M-x delete-horizontal-space - delete whitespaces around point
M-\

;; test yasnippet
emacs -Q -L . -l yasnippet-tests.el -f ert &

;; helm-locate - see 'man locate'
SPC f L

;; window transient mode - window management w/o using key binding - for layouts
SPC w .

;; workspaces a.k.a layouts
;; layouts - 1. layout contains all buffers;
;; layouts - 2., 3., ... layouts contain only selected buffers
SPC l <nr>

;; helm-persp-switch-project: create new layout
SPC p l

;; save / load layouts to / from a file
SPC l s  and  SPC l L

;; M-s h l hilite lines e.g. log file evaluation; see:
;; https://www.masteringemacs.org/article/highlighting-by-word-line-regexp
M-x highlight-lines-matching-regexp

;; replace-all: recursive find & replace / substitute all occurences of a string
M-x find-name-dired  then  't' (toggle mark) then  'Q' (Query replace in files)

;; edit as a root / super user
M-x spacemacs/sudo-edit
s-SPC f E
SPC f E

;; neotree
SPC f T

;; Collapse every form of it when first opened - put the following block in the
;; bottom of init.el:
;; Local Variables:
;; eval: (hs-hide-all)
;; End:

;; vertical line indicating too long lines; spacemacs-light / -dark themes
;; don't show contrasting background - use the default theme
M-x fill-column-indicator / SPC t f
M-x whitespace-toggle-options

;; emacs current directory
(setq default-directory "~/.emacs.d/")

;; truncate / fold long lines (wrapping long lines creates new lines)
M-x toggle-truncate-lines

;; movement
C-M-a / M-x beginning-of-defun
C-M-e / M-x end-of-defun

;; modify keymaps and pointer button mappings in X
xmodmap -pm
;; See https://unix.stackexchange.com/a/126795
;; shift       Shift_L (0x32),  Shift_R (0x3e)
;; lock        Caps_Lock (0x42)
;; control     Control_L (0x25),  Control_R (0x69)
;; mod1        Alt_L (0x40),  Alt_R (0x6c),  Meta_L (0xcd)
;; mod2        Num_Lock (0x4d)
;; mod3
;; mod4        Super_L (0x85),  Super_R (0x86),  Super_L (0xce),  Hyper_L (0xcf)
;; mod5        ISO_Level3_Shift (0x5c),  Mode_switch (0xcb)

;; quit / delete multiple cursors
M-x evil-mc-undo-all-cursors

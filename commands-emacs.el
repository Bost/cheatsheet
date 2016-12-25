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

;; open file and jump to line:column (jump to column doesn't work)
emacs path/to/file +line:column

;; unreachable repositories: use http instead of https
emacs --insecure

;; e.g. visualisatin; for log analysis
M-x highlight-symbol-at-point

;; paredit: wrap square brackets around sexp
M-x paredit-wrap-square

;; paredit: kill the rest in the sexp
C-k

;; paredit: wrap brackets around sexp / raise sexp (replace entire parent with child) / remove everything before the current sexp
;; M-( / M-r / M-<up>

;; paredit-forward-slurp-sexp (vcucni) / paredit-forward-barf-sexp (vygrcaj)
<M-s-right> / <M-s-left>

;; paredit: replace parent with the child
M-r

;; indent: move text left by four spaces (M-x indent-rigidly is C-x TAB)
C-u -4 C-x TAB

;; regexp:
https://www.emacswiki.org/emacs/RegularExpression#regexp

;; regexp: increment the number found
\\#

;; regexp: whitespace
\\s-

;; unicode: describe char at the point
M-x describe-char

;; unicode: insert unicode char upper-case sigma U+2211 ∑
M-x ucs-insert RET 2211

;; folding: enable folding, fold / unfold
M-x hs-minor-mode, C-c @ C-c

;; folding: toggle/close/close all/ , open, toggle current / all folds from cursor/ all folds
za(A) / zc(C) / zm / zo(O) / zC zO zA / zR

;; files: file format
C-x RET f

;; nrepl: M-x nrepl-jack-in
C-c M-j

;; winner-mode: jump between window config
C-c 1 / C-c 2 / ...

;; startup: skip ~/.emacs (if messed up); Do not load an init file
emacs -q / --no-init-file

;; open web browser
M-x browse-url-at-point

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

;; dynamic vs. lexical binding: https://www.emacswiki.org/emacs/DynamicBindingVsLexicalBinding
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

;; files: find file / find alternate file (reload file)
C-x C-f / C-x C-v

;; remote file editing: Transparent Remote (file) Access, Multiple Protocol (TRAMP); method can be: ssh
;; if anything doesn't work: 1. delete ~/.bashrc 2. emacs -q --eval "(setq tramp-verbose 10)" &
C-x C-f /method:user@remotehost:filename

;; files: find-file-other window / switch-to-buffer-other-window
C-x 4 f / C-x 4 b

;; files: save file / save all /save as
C-x C-s / C-x s / C-x C-w

;; files: save-some-buffers
C-x s

;; eshell: ifconfig > #<buffer interfaces>

;; cli: run emacs lisp file from command line: chmod +x ./hello.el; ./hello.el
#!/bin/sh
":"; exec emacs --script "$0" "$@" # -*- mode: emacs-lisp; lexical-binding: t; -*-
(message "Hello world")

;; eshell: combing elisp functions (message) with OS programs (/usr/bin/cut) in eshell']
message "hello world" | cut -f 1 -d ' '

;; cssh ? ssh shell ? (somehow strange)

;; color-theme-calm-forest ? does not work?

;; yasnippet - yet another snippets

;; files: buffers: kill-buffer
C-x k

;; files: buffers: M-x list-buffers / M-x ido-switch-buffer
C-x C-b / C-x b

M-x kill-whole-line
;; delete 1 whole line
C-S-Backspace

;; M-x shell-command / evilnc-comment-or-uncomment-lines / dabbrev-expand (code completition)
M-! / M-x; / M-/ /

;; email / insert file / repeat
C-x m / i / z

;; M-x eval-last-sexp. See M-x eval-current-buffer
C-x C-e

;; jump forward / backward to matching brace; cursor may need to be behind closing ')'
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
M-x ispell-region / ispell-buffer

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
M-x shell / eshell

;; sql: db2: execute script.sql
M-x eshell; cmd; db2init; c46; \[f12\]

;; dired: <a href="http://www.gnu.org/software/emacs/refcards/pdf/dired-ref.pdf">http://www.gnu.org/software/emacs/refcards/pdf/dired-ref.pdf</a>

;; dired: start dired and create newfile
C-x C-f ENTER / <newfile>

;; dired: mark / unmark (all) / toggle marking
m / * / u (U) / t

;; dired: mark all / toggle marking
* s

;; dired: mark all executables / files (with extention) / change all marks
* *

;; dired: mark all files (with extention) / change all marks
* .

;; dired: change all marks
* c

;; dired: markup: all backup / auto-save files // refresh
~ / # // g

;; dired: M-x dired-create-directory / M-x dired-do-rename
+ / R

;; dired: dir listing details M-x dired-details-toggle M-x dired-hide-details-mode
;; )(

;; dired: writable - perform operations by editing dired buffer
M-x dired-toggle-read-only (C-x C-q) / M-x wdired-finish-edit

;; rewrap the line in auto-fill-mode
M-q

;; parameter key
C-u

;; sets the line wrap to 40 characters, M-q # activate the wrap
C-u 40 C-x f

;; reflow all the paragraphs in the area
M-x fill-region

;; center for given line width
M-o M-s

;; isearch-forward-regexp
C-M-s

;; incremental search forward / backward
C-s / C-r

;; query-replace-regexp
C-M-%

;; execute command and read-in its output
C-u M-! command

;;
M-x dbg / ediff / compile / man / erc

;; read news, email, rss / grep / speedbar / Superior Lisp Interaction Mode for Emacs
M-x gnus / grep / speedbar / slime

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

;; region: check a small region
M-x ispell-region

;; splits: close / only one buffer / horizontal / vertical
C-x 0 / C-x 1 / C-x 2 / C-x 3

;; does not work
M-x clean-buffer-list

;; agains "newer than byte-compiled file" / cd $dev/emacs/lisp && make autoloads
M-x byte-recompile-directory

;; helm: minibuffer: minibuffer-force-complete
C-M-i

;; M-x vertical helm-toggle-resplit-and-swap-windows: toggle horizontal / vertical
C-t

;; M-x helm-toggle-visible-mark / M-x helm-copy-to-buffer
C-SPC / C-c C-i

;; helm: htop: top: linux:
M-x helm-top / M-x proced

;; helm: apt:
M-x helm-apt

;; spacemacs: SPC r w; helm: clipboard: registers:
M-x helm-register / :reg

;; paste from register
;; "<register>p

;; locate:
M-x locate

;; helm: <a href="http://tuhdo.github.io/helm-intro.html">http://tuhdo.github.io/helm-intro.html</a>
;;

;; highlighting
M-x hi-lock-mode / highlight-regexp

;; magit: http://magit.github.io/master/magit.html


;; M-x magit-commit; end of git commit message / with-editor-cancel / with-editor-cancel
C-c C-c / C-c C-k / C-x k

;; M-x magit-status; inc / dec / reset hunk size / split hunk / add to .gitignore / add to .git/info/exclude
+ / - / 0 / select hunk / i / I

;; M-x magit-status; remoting / log / branching / bisecting / diff / fetch / merge / rewrite
M / l / b / B / d / f / m / r

;; M-x magit-log; show commit details and stay in log / jump to details / put sha1 to clipboard / reset HEAD to given commit
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

;; M-x magit-status: reset (discard all uncommited) changes - working tree unchanged
x (X)

;; info: manual:
M-x info / info-emacs-manual / info-display-manual

;; 1. M-x kmacro-name-last-macro, 2. M-x insert-kbd-macro, 3. M-x kmacro-bind-to-key
macros

;; launch emacs and eval string; does not work well with my bash function LaunchEmacs
emacs --eval '(message "uhu")' / emacs -e configuration-layer/update-packages

;; M-x shell-command: top: capture top output from stdout
M-! RET top -c -n -1 -b -w 200

;; M-x git-timemachine git:
p prev / n next / w Copy abbreviated hash / W Copy full hash / g Goto nth rev / q Exit

;; profiler
M-x profiler-start profiler-report profiler-stop

;; evil: global search & replace, starting from the cursor position
:,$s/BEFORE/AFTER/gc
:,$s/BEFORE/AFTER/gc|1,''-&&

;; M-x ielm - an alternative to Lisp Interactive mode
Inferior Emacs Lisp Mode

;; hyper - none of following works. See http://superuser.com/a/920967
;; https://github.com/trishume/dotfiles/blob/master/emacs%2B/spacemacs.symlink
;; C-x @ h 9 means H-9
;; (setq mac-option-modifier 'hyper) ; sets the Option key as Hyper
(define-key local-function-key-map (kbd "<rwindow>") 'event-apply-super-modifier)
(define-key local-function-key-map (kbd "<rwindow>") 'event-apply-hyper-modifier)

(defun enable-hyper-super-modifiers-linux-x ()
  ;; on nowadays linux, <windows> key is usually configured to Super

  ;; menu key as hyper (Note: for H-s, you need to release <menu> key before pressing 's')
  (define-key key-translation-map [menu] 'event-apply-hyper-modifier) ;H-
  (define-key key-translation-map [apps] 'event-apply-hyper-modifier)

  ;; by default, Emacs bind <menu> to execute-extended-command (same as M-x)
  ;; now <menu> defined as 'hyper, we need to press <menu> twice to get <H-menu>
  (global-set-key (kbd "<H-menu>") 'execute-extended-command)
  )
;; (global-set-key [(hyper 9)] (lambda () (message "[(hyper 9)]")))
;; (global-set-key (kbd "<rwindow>-9") (lambda () (message "(kbd context-menu-9)")))
;; (global-set-key [(hyper 9)] (lambda () (message "[(hyper 9)]")))

;; M-x delete-horizontal-space - delete whitespaces around point
M-\

# test yasnippet
emacs -Q -L . -l yasnippet-tests.el -f ert &

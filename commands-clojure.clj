(ns cheatsheet)

;; clojure.spec - examples
(clojure.spec/exercise [spec] [spec n] [spec n overrides])

;; clj: show objects in the namespace
(sort (keys (ns-publics \'ws.core)))

;; clj: should clean the repl; use cider-refresh
(map #(ns-unmap *ns* %) (keys (ns-interns *ns*)))

;; clj: read and eval swc/ws/core.clj
(load-file "src/ws/core.clj")

;; clj: switch to full.namespace
(in-ns 'full.namespace)

;; clj: Returns a sequence of all namespaces.
(all-ns)

;; clj: objname documentation / M-x cider-doc (C-c C-d C-d) / M-x cider-javadoc
(clojure.repl/doc full.namespace/objname)

;; clj: block comment; NOTE: (comment) returns null

#_(foo 1 2)/ (comment foo 1 2)

;; print stack trace: (/ 1 0) (pst)
(pst)

;; clj: show leiningen dependency tree
;; lein deps :tree

;; clj: Print the classpath of the current project.
;; lein classpath

;; clj: create lighttable plugin
;; cd $LIGHTTABLE/deploy/plugins/ && lein new lt-plugin my-plugin

;; clj: try to put it to project.clj in case of \'Could not locate clojure/instant__init.class or clojure/instant.clj on classpath\'
;; [the-dependency "X.Y.Z" :exclusions [org.clojure/clojure]]

;; clj: M-x cljr-rename-symbol refactoring:
;; C-c RET r s

;; clj: M-x cider-repl-clear-buffer
;; C-c M-o

;; clj: M-x cider-repl-clear-output
;; C-c C-o

;; clj: M-x cider-doc
;; C-c C-d C-d

;; clj: M-x cider-pprint-eval-last-sexp
;; C-c C-p

;; clj: M-x cider-pprint-eval-defun-at-point
;; C-c C-f

;; clj: M-x cider-refresh: reload all modified Clojure files on the classpath
;; C-c C-x

;; clj: C-M-x cider-eval-defun-at-point
;; C-u C-M-x cider-debug

;; clj: Transpose matrix
(apply map vector [[1 2] [3 4]]) ;;=> ([1 3] [2 4])

;; clj: install boot
sudo bash -c "cd /usr/local/bin && curl -fsSLo boot https://github.com/boot-clj/boot-bin/releases/download/latest/boot.sh && chmod 755 boot"

;; clojure.core.typed
(t/check-ns)

;;
(clojure.core.memoize/memo-clear! f args)

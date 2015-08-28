var jsonRest = [
//['', '; '],
['(sort (keys (ns-publics \'ws.core)))',              '; clj: show objects in the namespace'],
['(map #(ns-unmap *ns* %) (keys (ns-interns *ns*)))', '; clj: should clean the repl; use cider-refresh'],
['(load-file "src/ws/core.clj")',                     '; clj: read and eval swc/ws/core.clj'],
['(in-ns \'full.namespace)',                          '; clj: switch to full.namespace'],
['(clojure.repl/doc full.namespace/objname)',         '; clj: objname documentation / M-x cider-doc (C-c C-d C-d) / M-x cider-javadoc'],
['#_(foo 1 2)/ (comment foo 1 2)',                    '; clj: block comment; NOTE: (comment) returns null'],
['rlwrap lein deps :tree',                                              '; clj: show leiningen dependency tree'],
['cd $LIGHTTABLE/deploy/plugins/ && lein new lt-plugin my-plugin',      '; clj: create lighttable plugin'],
['[the-dependency "X.Y.Z" :exclusions [org.clojure/clojure]]',          '; clj: try to put it to project.clj in case of \'Could not locate clojure/instant__init.class or clojure/instant.clj on classpath\''],
['C-c RET r s',        'clj: M-x cljr-rename-symbol refactoring:'],
['C-c M-o',            'clj: M-x cider-repl-clear-buffer'],
['C-c C-o',            'clj: M-x cider-repl-clear-output'],
['C-c C-d C-d',        'clj: M-x cider-doc'],
['C-c C-p',            'clj: M-x cider-pprint-eval-last-sexp']
['C-c C-f',            'clj: M-x cider-pprint-eval-defun-at-point']
['C-c C-x',            'clj: M-x cider-refresh']
 ]

(ns cheatsheet)

;; destructure hashmap
(let [{a :a b :b} m] ...)

;; Common Lisp Object System
CLOS

;; bug detection tool for Java
https://opensource.google.com/projects/error-prone

;; clojure.spec - examples
(clojure.spec/exercise [spec] [spec n] [spec n overrides])

;; show objects in the namespace
(sort (keys (ns-publics 'ws.core)))

;; should clean the repl; use cider-refresh
(map #(ns-unmap *ns* %) (keys (ns-interns *ns*)))

;; read and eval swc/ws/core.clj
(load-file "src/ws/core.clj")

;; switch to full.namespace
(in-ns 'full.namespace)

;; Returns a sequence of all namespaces.
(all-ns)

;; objname documentation / M-x cider-doc (C-c C-d C-d) / M-x cider-javadoc
(clojure.repl/doc full.namespace/objname)

;; sexp / block comment; the block comments sexp returns nil
#_(foo 1 2)/ (comment foo 1 2)

;; print stack trace: (/ 1 0) (pst)
(pst)

;; show leiningen dependency tree / classpath
;; lein deps :tree / lein classpath

;; leiningen : Run a task offline
lein -o

;; upgrade prj dependencies in shell
lein ancient upgrade :all :interactive :check-clojure :no-tests

;; run multiple tasks
lein do clean, repl

;;
lein cljsbuild test

;; create lighttable plugin
;; cd $LIGHTTABLE/deploy/plugins/ && lein new lt-plugin my-plugin

;; try to put it to project.clj in case of 'Could not locate clojure/instant__init.class or clojure/instant.clj on classpath'
;; [the-dependency "X.Y.Z" :exclusions [org.clojure/clojure]]

;; M-x cljr-rename-symbol refactoring:
;; C-c RET r s

;; M-x cider-repl-clear-buffer
;; C-c M-o

;; M-x cider-repl-clear-output
;; C-c C-o

;; M-x cider-doc
;; C-c C-d C-d

;; M-x cider-pprint-eval-last-sexp
;; C-c C-p

;; M-x cider-pprint-eval-defun-at-point
;; C-c C-f

;; M-x cider-refresh: reload all modified Clojure files on the classpath
;; C-c C-x

;; C-M-x cider-eval-defun-at-point
;; C-u C-M-x cider-debug

;; Transpose matrix
(apply map vector [[1 2] [3 4]]) ;;=> ([1 3] [2 4])

;; clojure.core.typed
(t/check-ns)

;; memoization
(clojure.core.memoize/memo-clear! f args)

;; Type Hints: http://clojure.org/reference/java_interop#typehints
(defn len2 [^String x] (.length x))

;; Type Hints: http://clojure.org/reference/java_interop#typehints
(set! *warn-on-reflection* true)
(defn foo [^String s] (.charAt s 1)) ;; w/o "^String": call to charAt can't be resolved.

;; Type Hints: http://clojure.org/reference/java_interop#typehints
(defn hinted (^String []) (^Integer [a]) (^java.util.List [a & args])) ;; return vals

;; macro: backtick: ` apostrophe: ' tilda: ~ see http://stackoverflow.com/a/17810391
'(+ x x) => (+ x x) ;; symbol-name quoted exactly
`(+ x x) = > (clojure.core/+ user/x user/x) ;; symbol-name quoted with namespace
`(+ ~'x x) => (clojure.core/+ x user/x) ;; when using ~ inside ` then the form is unquoted

;; cli: script: repl from command line
java -cp $HOME/.m2/repository/org/clojure/clojure/1.9.0-alpha14/clojure-1.9.0-alpha14.jar clojure.main

;; cli: run as a script: ./hello.clj
#!/usr/bin/env boot
(println "Hello world script via bash and boot!")

;; put to build.boot:
;; [boot-deps "0.1.9"] ;; boot -d boot-deps ancient

;; om-next: inspect app-state
(in-ns 'ufo.client)
(require '[cljs.pprint :as pp])
(def norm-data (om/tree->db RootView ufo.state/app-state true))
(pp/pprint norm-data)

;; om-next: execute read & mutate methods
(def parser (om/parser {:read ufo.state/read :mutate ufo.state/mutate}))
(parser {:state (atom ufo.state/app-state)} '[:list/rec])
(parser {:state (atom ufo.state/app-state)} '[(ufo.meth/'activate-rec! vms)])

;; read / write hmap to from / file
(spit "/tmp/data.edn" (->> hm print with-out-str))
(read-string (slurp "/tmp/data.edn"))

;; create / open remotelly accessible repl (nrepl)
lein repl :headless :host 0.0.0.0 :port <portNr>

;; two dots: clojurescript interop
(.. object -property -property method)
(.. object -property -property -property)
;; Instead of:
(.method (.-property (.-property object)))
(.-property (.-property (.-property object)))

;; reader conditionals - for different platforms
#?(:clj Double/NaN :cljs js/NaN :default nil)

(stop-autobuild)           ; figwheel: stops autobuilder
(start-autobuild [id ...]) ; figwheel: starts autobuilder focused on optional ids
(switch-to-build id ...)   ; figwheel: switches autobuilder to different build
(reset-autobuild)          ; figwheel: stops, cleans, and starts autobuilder
(reload-config)            ; figwheel: reloads build config and resets autobuild
(build-once [id ...])      ; figwheel: builds source one time
(clean-builds [id ..])     ; figwheel: deletes compiled cljs target files
(print-config [id ...])    ; figwheel: prints out build configurations
(fig-status)               ; figwheel: displays current state of system
;; figwheel: <Exit: Control+C or :cljs/quit

;; like lein but for node.js
gulp

;; map: can be well parallelized / reduce:  difficult to parallelize
(map) / (reduce)

;; future
A function which hasn't finished the evaluation

;; element in sequence
(defn in? "true if seq contains elm" [seq elm] (boolean (some (fn [e] (= elm e)) seq)))

;; brackets, parens, parenthesis conversion
;; M-x clojure-convert-collection-to-vector / clojure-convert-collection-to-list

;; brackets, parens, parenthesis converion; spacemacs clojure mode:
;; , r c

;; symbol: represents metaphorically objects (it's not a string); it's an atomic
;; value; internally it is fast to compare symbols
'milkshake

;; threading macros
(= (conj {:a 2} {:a 1}) (->> {:a 1} (conj {:a 2})))
(= (conj {:a 1} {:a 2}) (-> {:a 1} (conj {:a 2})))
(as-> [:foo :bar] v (map name v) (first v) (.substring v 1))

clojure.core.async/<!! [port]
;; [async/<!!] takes a val from port. Will return nil if closed. Will block if
;; [async/<!!] nothing is available.

clojure.core.async/<! [port]
;; [async/<!] takes a val from port. Must be called inside a (go ...) block.
;; [async/<!] Will return nil if closed. Will park if nothing is available.

clojure.core.async/>! [port val]
;; [async/>!] puts a val into port. nil values are not allowed. Must be called
;; [async/>!] inside a (go ...) block. Will park if no buffer space is
;; [async/>!] available. Returns true unless port is already closed.

;; [transducer] (comp filter map) replacement for a bunch of transformations and a
;; [transducer] bunch of intermediate collections; (getting rid of intermediate
;; [transducer] collections)

;; [transducer] Fast, Reducible Collections: clojure.java.jdbc/reducible-query

;; Peter Norvig: "Design patterns are bug reports against your programming language."
;; http://norvig.com/design-patterns/design-patterns.pdf

;; install
git clone https://github.com/clojure/clojure.git ~/dec
cd ~/dec/clojure
./antsetup.sh
ant local
java -Dclojure.server.repl="{:port 5555 :accept clojure.core.server/repl}" -jar ~/dec/clojure/clojure.jar


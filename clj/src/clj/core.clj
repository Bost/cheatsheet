(ns clj.core)

(comment
;; namespace: underscore: minus: dash:
;; Prefer filenames with underscores;
;; lein new a-b produces src/clj/a_b.clj with
(ns a-b.core)

;; destructure hashmap; default function parameters
(defn [{:keys [a b] :or {c "default-val-of-c"} :as prm}])

;; destructure hashmap
(let [{a :a b :b} m])

;; Common Lisp Object System
CLOS

;; bug detection tool for Java
;; https://opensource.google.com/projects/error-prone

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

;; returns a sequence of all namespaces.
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
java -cp $HOME/.m2/repository/org/clojure/clojure/1.9.0/clojure-1.9.0.jar:$HOME/.m2/repository/org/clojure/spec.alpha/0.1.143/spec.alpha-0.1.143.jar clojure.main

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

;; cljc: reader conditionals - for different platforms
#?(:clj Double/NaN :cljs js/NaN :default nil)

;; Figwheel Controls:
(stop-autobuild)                ;; stops Figwheel autobuilder
(start-autobuild id ...)        ;; starts autobuilder focused on optional ids
(switch-to-build id ...)        ;; switches autobuilder to different build
(reset-autobuild)               ;; stops, cleans, and starts autobuilder
(reload-config)                 ;; reloads build config and resets autobuild
(build-once id ...)             ;; builds source one time
(clean-builds id ..)            ;; deletes compiled cljs target files
(print-config id ...)           ;; prints out build configurations
(fig-status)                    ;; displays current state of system
(figwheel.client/set-autoload false)    ;; will turn autoloading off
(figwheel.client/set-repl-pprint false) ;; will turn pretty printing off
;; Switch REPL build focus:
:cljs/quit                      ;; allows you to switch REPL to another build
;; Docs: (doc function-name-here)
;; Exit: :cljs/quit
;; Results: Stored in vars *1, *2, *3, *e holds last exception object
;; Prompt will show when Figwheel connects to your application
;; To quit, type: :cljs/quit

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

;; threading macros create intermediate collections in every step - replace w/ transducers
(= (conj {:a 2} {:a 1}) (->> {:a 1} (conj {:a 2})))
(= (conj {:a 1} {:a 2}) (-> {:a 1} (conj {:a 2})))
(as-> [:foo :bar] v (map name v) (first v) (.substring v 1))

;; threading macros: "short-circuit out" of a series of steps; the nil case is
;; handled only once, at the end.
(some-> {:a 1} :b inc)
(cond-> 1        ; we start with 1
  true inc       ; the condition is true so (inc 1) => 2
  false (* 42)   ; the condition is false so the operation is skipped
  (= 2 2) (* 3)) ; (= 2 2) is true so (* 2 3) => 6

clojure.core.async/<!! [port]
;; [async/<!!] takes a val from port. Will return nil if closed. Will block if
;; [async/<!!] nothing is available.

clojure.core.async/<! [port]
;; takes a val from port. Must be called inside a (go ...) block. Will return
;; nil if closed. Will park if nothing is available.

clojure.core.async/>! [port val]
;; puts a val into port. nil values are not allowed. Must be called
;; inside a (go ...) block. Will park if no buffer space is
;; available. Returns true unless port is already closed.

;; transducer: Fast, Reducible Collections: clojure.java.jdbc/reducible-query
;; (comp filter map) replacement for a bunch of transformations and a bunch of
;; intermediate collections; (getting rid of intermediate collections)

;; Peter Norvig: "Design patterns are bug reports against your programming language."
;; http://norvig.com/design-patterns/design-patterns.pdf

;; install
git clone https://github.com/clojure/clojure.git ~/dec
cd ~/dec/clojure
./antsetup.sh
ant local
java -Dclojure.server.repl="{:port 5555 :accept clojure.core.server/repl}" -jar ~/dec/clojure/clojure.jar
;; boot socket-server --port 5555 wait # requires boot 2.7.2
yarn global add unravel-repl
unravel localhost 5555

;; Reference types
;; Jméno             | Var                             | Ref          | Atom       | Agent
;; Změna stavu       | synchronní                      | synchronní   | synchronní | asynchronní
;; Typ změny         | lokální, v rámci jednoho vlákna | koordinovaná | nezávislá  | nezávislá
;; Podpora transakcí | ne                              | ano          | ne         | ne


;; REPL: java -jar clojure; TODO see the video "The most beautifull programm"
user=> (->> (read) eval prn (while true))
user=> (loop [] (println (eval (read))) (recur))

;; TODO test; tel macro - inverse of let
(dbg)
(dbg (dbg))
(dbg (dbg nil))
(let [1 2])
(tel [2 1])

;; interface              | list | vector | hash-map | hash-set
;; java.util.Collection   | y    | y      | n        | y
;; java.util.List         | y    | y      | n        | n
;; java.util.Map          | n    | n      | y        | n
;; java.util.Set          | n    | n      | n        | y
;; java.util.RandomAccess | n    | y      | n        | n
;; java.lang.Iterable     | y    | y      | y        | y
;; java.lang.Comparable   | n    | y      | n        | n
)

;;
.. js-obj clj->js js->clj

;; IllegalStateException: Alias foo already exists in namespace
(ns-unalias *ns* 'foo)

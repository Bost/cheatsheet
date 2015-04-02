var jsonRest = [
//['', '; '],
['(keys (ns-publics \'ws.core))',                     '; clj: show objects in the namespace'],
['(map #(ns-unmap *ns* %) (keys (ns-interns *ns*)))', '; clj: should clean the repl; use cider-refresh'],
['(load-file "src/ws/core.clj")',                     '; clj: read and eval swc/ws/core.clj'],
['(in-ns \'full.namespace)',                          '; clj: switch to full.namespace'],
['(clojure.repl/doc full.namespace/objname)',         '; clj: objname documentation'],
 ]

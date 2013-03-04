(ns hochzeit.core)

(/ 80 3.0)
(def gifts (hash-map :vases 135
                     :flowers 15
                     :greeting-card 2.75
                     :cash-to-give 100))

;; TODO make a function based on cash-to-give and rosa-and-carsten
(def cash-to-give (hash-map :bost (/ 80 3)
                             :michael (/ 80 3)
                             :andreas (/ 80 3)
                             :rosa-carsten 20))

(def cash-given-by (hash-map :bost 0
                             :michael 50
                             :andreas 50
                             :rosa-carsten 0))

(defn sum-payed-by [payed-cash & payed-gifts] 
  (+ payed-cash ( all-payed-gifst))) ; TODO

(hash-map :bost-payed (:vases :flowers :greeting-card (cash-given-by :bost))
(hash-map :michael-payed (cash-given-by :michael))
(hash-map :andreas-payed (cash-given-by :andreas))

(def bost-payed (+ 
  )

(def michael-payed (gifts :cash-from-michael))

(def andreas-payed (gifts :cash-from-andreas)

(println "bost-payed: " bost-payed)

(def michael-payed 100)
(def andreas-payed 100)

(def total-sum-payed (+ 80 135 15 2.75))

(def cnt-persons 3)
(def rosa-and-carsten 20)

(defn calc-fair-share [sum persons]
  (/ sum persons))

(def fair-share (calc-fair-share total-sum-payed cnt-persons))

(println (str "fair-share per person: " fair-share))

(- bost-payed fair-share)

(- (- bost-payed fair-share) fair-share rosa-and-carsten)

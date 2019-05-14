(ns clj.coins)

;; hyperleddger: open-source project developed by the Linux foundation. It uses
;; a modular approach to building blockchains collective of open-source
;; blockchains and tools that anyone can use to create their own distributed
;; ledgers.

https://developers.ripple.com/xrp-ledger-overview.html
Ripple XRP: real-time gross settlement system (RTGS)
remittance
- transaction of money by foreigners; see SWIFT
xrp
SWIFT - cross border payments
cryptopia
corda
lightning network and nodes - scalable off-chain instant payments
second layer
sharding
tangle
token vs. crypto currency ~ value representation
tokenomics - e.g. collectables; game currency
SC - smart contracts
DLT supply chain

Byzantine Fault Tolerances / Consensus methods:
https://link.medium.com/V2dglrC5UU
- distributed systems with imperfect information if a component failed
Proof of Work - used by Bitcoin
Proof of Stake
Proof of activity
Proof of burn
Proof of capacity

BGP - The Byzantine Generals Problem:
A groupf generals have to come to a common agreement on whether to attack or
retreat, but can communicate only by sending messengers who might never arrive.
Some of whom may be traitors, who have to reach a common decision.

PoW (Proof of Work)
- Consensus algorithm used by Bitcoin i.e. a solution of the BGP
- Cost of registration, investing a scarce resource - electricity used to solve a math (arbitrary) puzzle creates trust
- election of a leader - randomized, one CPU = one vote
- mining pools - decrease randomisation, unwanted centralisation

A generalised solution to distributed consensus:
https://blog.acolyer.org/2019/03/08/a-generalised-solution-to-distributed-consensus/
https://en.wikipedia.org/wiki/Consensus_(computer_science)
https://news.ycombinator.com/item?id=19343398

https://www.youtube.com/watch?v=12nQ4oMhIpQ
PoS (Proof of Stake) - cardano
cardano + foundation
The currency itself is the scare resource
each time slot, randomly pick one coin, it's owner produces a block
different leader selection - weighted by stake, the more coins you have the higher chance of getting elected for the next block
holder of a large amount of coins has a better chance of attacking the system - if people notice the currency gets devaluated -> this forces you to play honest?
SRSLY??? Quod licet Iovi, non licet bovi
Explicit decentralized & unpredictable randomness generator everybody agrees on
Ouroboros protocol - has a proof of security
Ouroboros
- split time into slots, each slot will have a block, a stakeholder is elected for a slot leader and has a right to create a new block
- slots grouped into an epoch, before the start of an epoch all stakeholder have to agree on some seed for the next random generator
- private dice roll, the send a proof of "the dice is cast" to the bchain, then the rand numers and combined and the seed is created
- ouroboros protocol is proven to for participants having less than a half of the stake (all ADA coins)
Ouroboros Praos - Ouroboros extention: What happens if messages are delayed
Proof written in Haskell
Process Calculi - model of distributed systems modeled in terms of runnable processes comunicating via channels
measurement of process similarity or interchangeability, observational equivalence, equational reasoning, bisimilarity
compositional language
Process Calculi: examples: CCS, CSP, ACP, π - calculus
Psi Calculus

PoI (Proof of Intention)
OS (Open Source) vs. OE (Open Execution): OS until it is run as a service
BIP - BTC Improvement Proposas
SegWit - Segregation Witness
RGB - BTC based non-BTC assets
RSK - BTC + SC (Smart Contrats)
Hyperledger
ICO - initial coin offering

;; BTC
Split ledger into blocks
Miners + Devs + Finance Guys
PoW
permission-less: Sybil attack "You can register 10000 times"

twitter.com/polemitis
Corda - Bank consortium
IoV - Internet of value
cointracking.info - Track portfolio & tax report
ETF.com - exchange-traded funds
IOTA
SolarCoin - WTF?

;; Siraj Raval: The Problem with Blockchain
https://www.youtube.com/watch?v=U2EYT5P4LvM
humaniq - identifiable bank account for everyone
bloom - risk assesement and credit scoring, credit worthiness
bibliograph BABB - save / transfer / invest wealth creating cycle of wealth generation
MintHealth - medical data in the blockchain (DLT)
SUKU - blockchain for supplychain: where / when a product has been delivered
Voatz - voting in federal election in Virginia
ICO vs ETO: Initial Coin Offering vs Equity Token Offering

Sharding - spliting network state into partitions (shards) containing independent piece of state and tx-history - higher through put
Quadratic Sharding - ???

Side chaing pegging into BTC blockchain - 2nd layer of operability
Proof of Stake side chaned into BTC blockchain to create another DAPP

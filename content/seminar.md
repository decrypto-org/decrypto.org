+++
template = "seminar.html"

[[extra.seminars]]
author = "Dionysis Zindros"
affiliation = "University of Athens"
date = "3 Jun 2020"
time = "10:00am Greek time"
title = "Introduction to NIPoPoWs"
abstract = """
In this seminar, we will give an overview of Non-Interactive Proofs of Proof-of-Work and describe
how we can leverage superblocks to build them. We will also discuss the interlinking data structure
necessary to upgrade a blockchain for superblock support.
"""

[[extra.seminars]]
author = "Orfeas Stefanos Thyfronitis Litos"
affiliation = "University of Edinburgh"
date = "10 Jun 2020"
time = "10:00am UK time"
title = "What is the Lightning Network?"
abstract = """
The high latency and low throughput of Bitcoin constitute two fundamental barriers for its wider adoption. The Lightning Network, an overlay protocol that can be run on top of Bitcoin, provides the most comprehensive solution to those issues by enabling unlimited off-chain payments with minimal latency between parties that share a payment channel.
In this talk we give an intuitive exposition of the Lightning protocol and its various capabilities. We describe the steps needed for setting up, using, and closing a 2-party Lightning channel, arguing that they are secure. We discuss the single disadvantage of Lightning compared to using the blockchain directly, namely that parties have to actively sync with the blockchain often to avoid losing funds. Finally, we highlight one of the most important -- and complex -- features of Lightning, multi-hop payments: leveraging well-understood cryptographic primitives and finely-tuned timeouts, a buyer can pay a seller even if they don't have an open channel between them.
"""

[[extra.seminars]]
author = "Stelios Daveas"
affiliation = "University of Atthens"
date = "17 Jun 2020"
time = "12:00pm Greek time"
title = "Implementing a practical superlight Bitcoin client"
abstract = """
During the last years, significant effort has been put into enabling blockchain interoperability. Towards this goal, a new generation of verifiers have emerged called superlight clients. We focus on Non-Interactive Proofs of Proof of Work (NIPoPoW) superblock protocol, and we discuss a gas-efficient implementation for the verification of NIPoPoWs in Solidity. In particular, we explore patterns and techniques that considerably reduce gas consumption, and may also have applications to other smart contracts. We introduce a pattern that we term "hash-and-resubmit" that eliminates persistent storage almost entirely, leading to significant increase of performance. Furthermore, we alleviate the burden of expensive on-chain operations, which we transfer off-chain, and we make use of an optimistic schema that replaces functionalities of linear complexity with constant operations. Lastly, we make a cryptoeconomic analysis, and set concrete values regarding the cost of usage of our client.
"""
link = "https://zoom.us/j/94211753122?pwd=bjBaN2VVM3crTWx1WUlqS284aWs1QT09"
password = "0DnpNM"

[[extra.seminars]]
author = "Zeta Avarikioti"
affiliation = "ETH Zürich"
date = "24 Jun 2020"
time = "12:00pm Swiss time"
title = "Brick: Asynchronous Payment Channels"
abstract = """
Off-chain protocols (channels) are a promising solution to the scalability and privacy challenges of blockchain payments. Current proposals, however, require synchrony assumptions to preserve the safety of a channel, leaking to an adversary the exact amount of time needed to control the network for a successful attack.
In this talk, we discuss BRICK, the first payment channel that remains secure under network asynchrony and concurrently provides correct incentives.
The core idea is to incorporate the conflict resolution process within the channel by introducing a rational committee of external parties, called wardens. Hence, if a party wants to close a channel unilaterally, it can only get the committee's approval for the last valid state.
BRICK provides sub-second latency because it does not employ heavy-weight consensus. Instead, BRICK uses consistent broadcast to announce updates and close the channel, a light-weight abstraction that is powerful enough to preserve safety and liveness to any rational parties.
"""

[[extra.seminars]]
author = "Christos Nasikas"
affiliation = "University of Athens"
date = "1 Jul 2020"
time = "12:00pm Greek titme"
title = "The Smart Contract Development Ecosystem in Ethereum"
abstract = ""

[[extra.seminars]]
author = "Kostis Karantias"
affiliation = "IOHK"
date = "8 Jul 2020"
time = "12:00pm Greek time"
title = "A Taxonomy of Cryptocurrency Wallets"
abstract = ""

[[extra.seminars]]
author = "Orfeas Stefanos Thyfronitis Litos"
affiliation = "University of Edinburgh"
date = "15 Jul 2020"
time = "10:00am UK time"
title = "Leveraging Payment Channels to Create Lightning Network Routes"
abstract = ""

[[extra.seminars]]
author = "Andrianna Polydouri"
affiliation = "University of Athens"
date = "22 Jul 2020"
time = "12:00pm Greek time"
title = "A Study on Superlight Blockchain Clients under Velvet Fork"
abstract = """
In this presentation, we investigate how a blockchain can be upgraded to support superblock clients without a soft fork. We show that it is possible to implement the needed changes without modifying the consensus protocol and by requiring only a minority of miners to upgrade, a process termed a velvet fork in the literature. While previous work conjectured that Superblock and FlyClient clients can be safely deployed using velvet forks as-is, we show that previous constructions are insecure. We describe a novel class of attacks, called chain-sewing, which arise in the velvet fork setting: an adversary can cut-and-paste portions of various chains from independent forks, sewing them together to fool a superlight client into accepting a false claim. We show how previous velvet fork constructions can be attacked via chain-sewing. Next we put forth the first provably secure velvet superblock client construction which we show  secure against adversaries that are bounded by 1/3 of the upgraded honest miner population.
"""

[[extra.seminars]]
author = "Dimitris Karakostas"
affiliation = "University of Edinburgh"
date = "29 Jul 2020"
time = "10:00am UK time"
title = "(Title to be determined)"
abstract = """
"""

+++
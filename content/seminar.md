+++
template = "seminar.html"

[[extra.seminars]]
author = "Dionysis Zindros"
affiliation = "University of Athens"
date = "2020-06-03"
time = "10:00:00"
timezone = "+03:00"
title = "Introduction to NIPoPoWs"
abstract = """
In this seminar, we will give an overview of Non-Interactive Proofs of Proof-of-Work and describe
how we can leverage superblocks to build them. We will also discuss the interlinking data structure
necessary to upgrade a blockchain for superblock support.
"""

[[extra.seminars]]
author = "Orfeas Stefanos Thyfronitis Litos"
affiliation = "University of Edinburgh"
date = "2020-06-10"
time = "10:00:00"
timezone = "+01:00"
title = "What is the Lightning Network?"
abstract = """
The high latency and low throughput of Bitcoin constitute two fundamental barriers for its wider adoption. The Lightning Network, an overlay protocol that can be run on top of Bitcoin, provides the most comprehensive solution to those issues by enabling unlimited off-chain payments with minimal latency between parties that share a payment channel.
In this talk we give an intuitive exposition of the Lightning protocol and its various capabilities. We describe the steps needed for setting up, using, and closing a 2-party Lightning channel, arguing that they are secure. We discuss the single disadvantage of Lightning compared to using the blockchain directly, namely that parties have to actively sync with the blockchain often to avoid losing funds. Finally, we highlight one of the most important -- and complex -- features of Lightning, multi-hop payments: leveraging well-understood cryptographic primitives and finely-tuned timeouts, a buyer can pay a seller even if they don't have an open channel between them.
"""
slides = "https://github.com/OrfeasLitos/PaymentChannels/raw/6b41c60375b0f51df93328942bc88f0a844cbb1a/ln-slides/slides.pdf"

[[extra.seminars]]
author = "Stelios Daveas"
affiliation = "University of Athens"
date = "2020-06-17"
time = "12:00:00"
timezone = "+03:00"
title = "Implementing a practical superlight Bitcoin client"
abstract = """
During the last years, significant effort has been put into enabling blockchain interoperability. Towards this goal, a new generation of verifiers have emerged called superlight clients. We focus on Non-Interactive Proofs of Proof of Work (NIPoPoW) superblock protocol, and we discuss a gas-efficient implementation for the verification of NIPoPoWs in Solidity. In particular, we explore patterns and techniques that considerably reduce gas consumption, and may also have applications to other smart contracts. We introduce a pattern that we term "hash-and-resubmit" that eliminates persistent storage almost entirely, leading to significant increase of performance. Furthermore, we alleviate the burden of expensive on-chain operations, which we transfer off-chain, and we make use of an optimistic schema that replaces functionalities of linear complexity with constant operations. Lastly, we make a cryptoeconomic analysis, and set concrete values regarding the cost of usage of our client.

Github: https://github.com/sdaveas/nipopow-verifier
"""
slides = "https://slides.com/steliosntaveas/nipopow-verifier/"

[[extra.seminars]]
author = "Zeta Avarikioti"
affiliation = "ETH Zürich"
date = "2020-06-24"
time = "12:00:00"
timezone = "+02:00"
title = "Brick: Asynchronous Payment Channels"
abstract = """
Off-chain protocols (channels) are a promising solution to the scalability and privacy challenges of blockchain payments. Current proposals, however, require synchrony assumptions to preserve the safety of a channel, leaking to an adversary the exact amount of time needed to control the network for a successful attack.
In this talk, we discuss BRICK, the first payment channel that remains secure under network asynchrony and concurrently provides correct incentives.
The core idea is to incorporate the conflict resolution process within the channel by introducing a rational committee of external parties, called wardens. Hence, if a party wants to close a channel unilaterally, it can only get the committee's approval for the last valid state.
BRICK provides sub-second latency because it does not employ heavy-weight consensus. Instead, BRICK uses consistent broadcast to announce updates and close the channel, a light-weight abstraction that is powerful enough to preserve safety and liveness to any rational parties.
"""
slides = "/slides/brick.pdf"

[[extra.seminars]]
author = "Christos Nasikas"
affiliation = "University of Athens"
date = "2020-07-01"
time = "12:00:00"
timezone = "+03:00"
title = "The Smart Contract Development Ecosystem in Ethereum"
abstract = """
In this presentation, we will give an overview of how we can develop Ethereum Dapps using the
tools availbable in the Ethereum ecosystem. We will discuss Truffle, a Javascript library and
framework used to develop and test smart contracts in Solidity; Ganache and Ganache-cli, a
local blockchain system which can be used to deploy smart contracts locally for developmpent purposes;
Metamask, a browser-based wallet which is particularly user-friendly when used with DApps;
and, finally, Remix, a web-based editor for your Solidity code which includes powerful
syntax checking and debugging capabilities. During the talk, we will include live demonstrations
and show you how these tools can be used together to develop complete and robust DApps.
"""

[[extra.seminars]]
author = "Kostis Karantias"
affiliation = "IOHK"
date = "2020-07-08"
time = "12:00:00"
timezone = "+03:00"
title = "A Taxonomy of Cryptocurrency Wallets"
abstract = """
The primary function of a cryptocurrency is money transfer between individuals. The wallet is the software that facilitates such transfers. Wallets are nowadays ubiquitous in the cryptocurrency space and a cryptocurrency is usually supported by many wallets. Despite that, the functionality of wallets has never been formally defined. Additionally, the mechanisms employed by the many wallets in the wild remain hidden in their respective codebases.

In this work we provide the first definition of a cryptocurrency wallet, which we model as a client to a server, or set of servers. We provide a distinction of wallets in various categories, based on whether they work for transparent or private cryptocurrencies, what trust assumptions they require, their performance and their communication overhead. For each type of wallet we provide a description of its client and server protocols. Additionally, we explore the superlight wallets and describe their difference to superlight clients that have appeared in recent literature. We demonstrate how new wallet protocols can be produced by combining concepts from existing protocols. Finally we evaluate the performance and security characteristics of all wallet protocols and compare them.
"""
video = "https://www.youtube.com/watch?v=LztcwUMKpTY"

[[extra.seminars]]
author = "Orfeas Stefanos Thyfronitis Litos"
affiliation = "University of Edinburgh"
date = "2020-07-15"
time = "10:00:00"
timezone = "+01:00"
title = "From Channels to Network: Off-chain Multi-hop Payments in Lightning"
abstract = "Building upon the ideas of pairwise Lightning channels, we explore Hashed TimeLocked Contracts (HTLCs), the technique that allows atomic payments along paths over channels. This technique expands the individual channels into an interconnected network of nodes that can freely exchange funds off-chain with any reachable node with minimal latency. Nodes can now transact even without having a direct channel, thus the need for a complete graph between nodes is relaxed -- just a connected graph with sufficient capacity is enough for any party to transact with any other. We will understand why parties along a payment path can trustlessly and securely send, receive, or facilitate the transfer of value. We will also discuss a number of tricks and optimizations in LN that turn the theoretical ideas of payment channels into a practical, incentivized, deployable and robust layer-2 payment network."
slides = "https://github.com/OrfeasLitos/PaymentChannels/raw/99c4b21303dd403d40054e36596a93b9cc1f1001/ln-slides/multi-hop-slides.pdf"
video = "https://vimeo.com/439191722"

[[extra.seminars]]
author = "Andrianna Polydouri"
affiliation = "University of Athens"
date = "2020-07-22"
time = "12:00:00"
timezone = "+03:00"
title = "A Study on Superlight Blockchain Clients under Velvet Fork"
abstract = """
In this presentation, we investigate how a blockchain can be upgraded to support superblock clients without a soft fork. We show that it is possible to implement the needed changes without modifying the consensus protocol and by requiring only a minority of miners to upgrade, a process termed a velvet fork in the literature. While previous work conjectured that Superblock and FlyClient clients can be safely deployed using velvet forks as-is, we show that previous constructions are insecure. We describe a novel class of attacks, called chain-sewing, which arise in the velvet fork setting: an adversary can cut-and-paste portions of various chains from independent forks, sewing them together to fool a superlight client into accepting a false claim. We show how previous velvet fork constructions can be attacked via chain-sewing. Next we put forth the first provably secure velvet superblock client construction which we show  secure against adversaries that are bounded by 1/3 of the upgraded honest miner population.
"""
slides = "https://slides.com/andrian/nipopows-under-velvet-fork-b141ab"
video = "https://vimeo.com/455510847"

[[extra.seminars]]
author = "Alex Chepurnoy"
affiliation = "Ergo Platform"
date = "2020-09-02"
time = "12:00:00"
timezone = "+03:00"
title = "Bypassing Non-Outsourceable Proof-of-Work Schemes Using Collateralized Smart Contracts"
abstract = """
Centralized pools and renting of mining power are considered as sources of possible censorship threats and even 51% attacks for decentralized cryptocurrencies. Non-outsourceable Proof-of-Work schemes have been proposed to tackle these issues. However, tenets in the folklore say that such schemes could potentially be bypassed by using escrow mechanisms.

We consider how to bypass non-outsourceable Proof-of-Work schemes using collateralized smart contracts. Our approach allows for that if the underlying blockchain platform supports smart contracts in a sufficiently advanced language. In particular, the language should allow access to the PoW solution.

At a high level, our approach requires the miner to lock collateral covering the reward amount and protected by a smart contract that acts as an escrow. The smart contract has logic that allows the pool to collect the collateral as soon as the miner collects any block reward. We propose two variants of the approach depending on when the collateral is bound to the block solution. Using this, we show how to bypass previously proposed non-outsourceable Proof-of-Work schemes (with the notable exception for strong non-outsourceable schemes) and show how to build mining pools for such schemes.
"""
video = "https://www.youtube.com/watch?v=4_sU_BDNAMs"

[[extra.seminars]]
author = "Dimitris Karakostas"
affiliation = "University of Edinburgh"
date = "2020-09-09"
time = "12:00:00"
timezone = "+03:00"
title = "Reward Distribution Mechanisms in Cryptocurrencies"
abstract = """
In this talk we look into different mechanisms for distributing rewards in participants of cryptocurrency systems. We distinguish the mechanisms in two broad categories, granular and epoch-based. We describe Bitcoin's mechanism, analyze the intuition behind its design choices, and cover well-known incentive-based attacks. Next, we compare it to the lesser known epoch-based paradigm, evaluating how the latter solves Bitcoin's shortcomings and describing the new hazard that it introduces.
"""

[[extra.seminars]]
author = "George Kadianakis"
affiliation = "University of Athens, Tor Project"
date = "2020-09-16"
time = "10:00:00"
timezone = "+01:00"
title = "Proving Work Over Onions: PoW applications in Tor"
abstract = """
"""

[[extra.seminars]]
author = "Thomas Kerber"
affiliation = "University of Edinburgh"
date = "2020-09-23"
time = "10:00:00"
timezone = "+01:00"
title = "(Title to be determined)"
abstract = """
"""

[[extra.seminars]]
author = "Lefteris Kokoris-Kogias"
affiliation = "EPFL"
date = "2020-09-30"
time = "11:00:00"
timezone = "+02:00"
title = "(Title to be determined)"
abstract = """
"""
+++

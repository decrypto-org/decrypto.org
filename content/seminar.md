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
title = "Efficient State Management in Distributed Ledgers"
abstract = """
Distributed ledgers implement a storage layer, on top of which a shared state which is maintained by all participants in a decentralized manner. In UTxO-based ledgers, like Bitcoin, the shared state is the set of all unspent outputs (UTxOs), which serve as inputs to future transactions. However, decentralized systems lack centrally planned policies to enforce proper maintenance of the shared state, such as garbage collection, which would enhance performance and prevent Denial-of-Service (DoS) attacks. Instead, the system's design aims at incentivizing participants to act as intended. In this talk we investigate correct practices, such that the shared state in distributed ledgers is managed efficiently. We consider an abstract ledger model and investigate a set of transaction optimization techniques, including a coin selection algorithm which aims at minimizing the shared state. We also define state efficiency, which is the necessary property that a distributed ledger's fee scheme should possess in order to incentivize efficient state management, and propose an amended, efficient fee function for Bitcoin.
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
title = "Privacy & Smart Contracts"
abstract = """
Smart contracts have drastically lowered the barrier to entry for
designing and deploying distributed systems. Largely they have done so
at a great cost to privacy however, which smart contracts often ignore
completely. In this talk we will see various approaches to
re-introducing privacy in this setting, and what difficulties they
encounter.
"""
video="https://vimeo.com/461002091"
slides="https://drwx.org/2020/09/23/decrypto-slides.pdf"

[[extra.seminars]]
author = "Amitabh Saxena"
affiliation = "Ergo Platform"
date = "2020-09-30"
time = "16:00:00"
timezone = "+03:00"
title = "ZeroJoin: Combining Zerocoin and CoinJoin"
abstract = """
We present ZeroJoin, a practical privacy-enhancing protocol for blockchain transactions. ZeroJoin can be considered a combination of Zerocoin and CoinJoin. Like Zerocoin, our protocol uses zero-knowledge proofs and a pool of participants. However, unlike Zerocoin, our proofs are very efficient, and our pool size is not monotonically increasing. Thus, our protocol overcomes the two major drawbacks of Zerocoin. Our approach can also be considered a non-interactive variant of CoinJoin, where the interaction is replaced by a public transaction on the blockchain. We also present ErgoMix, a practical implementation of ZeroJoin on top of Ergo, a smart contract platform based on Sigma protocols. While ZeroJoin contains the key ideas, it leaves open the practical issue of handling fees. The key contribution of ErgoMix is a novel approach to handle fee in ZeroJoin.
"""
video = "https://www.youtube.com/playlist?list=PL8-KVrs6vXLSKEm64jBuzxYllZxGsacQw"

[[extra.seminars]]
author = "Lefteris Kokoris-Kogias"
affiliation = "IST Austria"
date = "2020-10-07"
time = "11:00:00"
timezone = "+02:00"
title = "Digital Trust and Decentralization"
abstract = """
In the last decades, computing managed to scale societies and bring everyone closer. We live in an era of efficiency and speed.
Speed, however, is the enemy of trust. Trust needs friction and time to be built.

In this talk, we are going to explore the evolution of trust and investigate the latest explosion of interest in digital and decentralized trust technologies.
To this end, I am going to present both theoretical and practical advancements of my research in the last few years focusing on Byzantine Fault Tolerant systems and algorithms, answering questions such as: how can we get scalable decentralized systems able to support the current financial ecosystems, and how can we scavenge randomness from multiple semi-trustworthy players to run publicly-verifiable lotteries or to audit elections?
"""
link="https://zoom.us/j/95123334345?pwd=cHlkSjYvT1lpbUhEd0xYRWlaMCtQUT09"
password="766Hck"
authorlink="https://ist.ac.at/en/research/kokoris-group/"

[[extra.seminars]]
author = "Pyrros Chaidos"
affiliation = "University of Athens"
date = "2020-10-14"
time = "12:00:00"
timezone = "+03:00"
title = "Aggregate weighted signatures for Blockchain Bootstrapping"
abstract = """
Proof of Stake Blockchains operate by having participants demonstrate that
they control a certain piece of stake, chosen by some selection mechanism.
In contrast, proof of work blockchains require that participants provide a
solution to some computational problem with restrictions indicated by the context.
Such solutions can usually be verified in isolation and at low computational cost.

In many current Proof of Stake implementations, verifying a claim of stake either
requires a large context or a somewhat complex proof. These costs are exacerbated
when a new user wishes to participate for the first time, as verifying the current
state will often require replaying operations since the genesis.

We introduce the primitive of weighted aggregate signatures and use it to offer a
simple solution to speed up bootstrapping: we produce an aggregate signature
for verifying a succinct checkpoint for each epoch. Our approach minimizes computational
costs to small stakeholders and is compatible with recent advances such as key-evolving
signatures and delegation.
"""
link="https://zoom.us/j/93980500318?pwd=ZEtTZ1ZlUnVFWjJBUnNhdlhXeSt1QT09"
password="hd3bHX"

[[extra.seminars]]
author = "Michele Ciampi"
affiliation = "University of Edinburgh"
date = "2020-10-21"
time = "12:00:00"
timezone = "+03:00"
title = "Updatable Blockchains"
abstract = """
Software updates for blockchain systems become a real challenge when they impact the underlying consensus mechanism. The activation of such changes might jeopardize the integrity of the blockchain by resulting in chain splits. Moreover, the software update process should be handed over to the community and this means that the blockchain should support updates without relying on a trusted party. In this paper, we introduce the notion of updatable blockchains and show how to construct blockchains that satisfy this definition. Informally, an updatable blockchain is a secure blockchain and in addition it allows to update its protocol preserving the history of the chain. In this work, we focus only on the processes that allow securely switching from one blockchain protocol to another assuming that the blockchain protocols are correct. That is, we do not aim at providing a mechanism that allows reaching consensus on what is the code of the new blockchain protocol. We just assume that such a mechanism exists (like the one proposed in NDSS 2019 by Zhang et. al), and show how to securely go from the old protocol to the new one. The contribution of this paper can be summarized as follows. We provide the first formal definition of updatable ledgers and propose the description of two compilers. These compilers take a blockchain and turn it into an updatable blockchain. The first compiler requires the structure of the current and the updated blockchain to be very similar (only the structure of the blocks can be different) but it allows for an update process more simple, efficient. The second compiler that we propose is very generic (i.e., makes few assumptions on the similarities between the structure of the current blockchain and the update blockchain). The drawback of this compiler is that it requires the new blockchain to be resilient against a specific adversarial behaviour and requires all the honest parties to be online during the update process. However, we show how to get rid of the latest requirement (the honest parties being online during the update) in the case of proof-of-work and proof-of-stake ledgers.
"""
link="https://zoom.us/j/92776168444?pwd=ZFdVK0lLc2MvSFJrVm9XdktiYXBKQT09"
password="jKA4NK"

[[extra.seminars]]
author = "Dragos Ilie"
affiliation = "Imperial College London"
date = "2020-11-04"
time = "12:00:00"
timezone = "+02:00"
title = "Committing to Quantum Resistance: Defences for Bitcoin Quantum Adversaries"
abstract = """
Quantum computers are expected to have a dramatic impact on numerous fields, due to their anticipated ability to solve classes of mathematical problems much more efficiently than their classical counterparts. This particularly applies to domains involving integer factorisation and discrete logarithms, such as public key cryptography.

In this talk, we consider the threats a quantum-capable adversary could pose to Bitcoin, which currently uses the Elliptic Curve Digital Signature Algorithm (ECDSA) to sign transactions.

We then propose a simple commit--delay--reveal protocol and a variant of it where the security parameter is configurable. These schemes allow users to securely move their funds from old (non-quantum-resistant) outputs to those adhering to a quantum-resistant digital signature scheme.
"""
link="https://zoom.us/j/96663052120?pwd=UkJnTVF1ME5nQlRRUnd4WWd2Z1JLUT09"
password="D93vFQ"

[[extra.seminars]]
author = "Giorgos Panagiotakos"
affiliation = "University of Athens"
date = "2020-11-11"
time = "12:00:00"
timezone = "+02:00"
title = "Blockchains from Non-Idealized Hash Functions"
abstract = """
The formalization of concrete, non-idealized hash function properties sufficient
to prove the security of Bitcoin and related protocols has been elusive, as all
previous security analyses of blockchain protocols have been performed in the
random oracle model. In this paper we identify three such properties, and then
construct a blockchain protocol whose security can be reduced to them in the
standard model assuming a common reference string (CRS).The three properties
are: collision resistance, computational randomness extraction and iterated
hardness. While the first two properties have been extensively studied, iterated
hardness has been empirically stress-tested since the rise of Bitcoin; in fact,
as we demonstrate in this paper, any attack against it (assuming the other two
properties hold) results in an attack against Bitcoin.In addition, iterated
hardness puts forth a new class of search problems which we term iterated search
problems (ISP). ISPs enable the concise and modular specification of blockchain
protocols, and may be of independent interest.
"""
link="https://zoom.us/j/93093619505?pwd=akZYSFRxYnRLNDF5N3JwaVhRTEx0dz09"
password="QK7cJ7"

[[extra.seminars]]
author = "Alexei Zamyatin"
affiliation = "Imperial College London and Interlay"
date = "2020-11-18"
time = "12:00:00"
timezone = "+02:00"
title = "Trustless Cross-Chain Communication: Impossible but Incentive Compatible"
abstract = """
Since the advent of Bitcoin, a plethora of distributed ledgers has been created, differing in design and purpose. Considering it is unlikely that "one coin to rule them all", interoperability has shifted into the focus of industry and academia. Today, cross-chain communication (CCC) plays a fundamental role not only in cryptocurrency exchanges, but also in scalability efforts via sharding, extension of existing systems through sidechains, and bootstrapping of new blockchains.

In this talk, we formulate the problem of cross-chain communication (CCC) and show that CCC is impossible without a trusted third party, contrary to common beliefs in the blockchain community. We then present XCLAIM, a framework for migrating assets across blockchains which works around this result by leveraging incentives. XCLAIM employs a dynamic and permissionless set of collateralized intermediaries, combined with cross-chain state verification and punishment. This construction ensures that uses do not face financial damage from theft or collusion of intermediaries, while maintaining transparency and usability.
"""
authorlink="https://www.alexeizamyatin.me/"
link="https://zoom.us/j/91223508615?pwd=c3NXS1FRRHZadXhmQ0tYT0RZY0g4Zz09"
password="0bSLsx"

[[extra.seminars]]
author = "Runchao Han"
affiliation = "Monash University"
date = "2020-11-25"
time = "12:00:00"
timezone = "+02:00"
title = "RandChain: Decentralised Randomness Beacon from Sequential Proof-of-Work"
abstract = """
Decentralised Randomness Beacon (DRB) is a service that generates publicly verifiable randomness. Constructing DRB protocols is challenging. Existing DRB protocols suffer from strong network synchrony assumptions, high communication complexity and/or various attacks. In this paper, we propose RandChain, a new family of DRB protocols. RandChain is constructed from Sequential Proof-of-Work (SeqPoW), a Proof-of-Work (PoW) variant that is sequential, i.e., the work can only be done by a single processor. In RandChain, nodes jointly maintain a blockchain, and each block derives a random output. To append a block to the blockchain, each node should keep mining, i.e., solve a SeqPoW puzzle derived from the last block and its identity. Given the SeqPoW and its fixed input, mining is non-parallelisable. RandChain applies Nakamoto consensus so that nodes agree on a unique blockchain.

While inheriting simplicity and scalability from Nakamoto consensus, RandChain produces strongly unpredictable randomness and remains energy-efficient and decentralised. RandChain does not require nodes to provide local entropy, thus giving no opportunity to bias randomness. Solutions of SeqPoW puzzles are unpredictable, so nodes cannot predict randomness. As each node can use at most a single processor for mining, RandChain remains energy-efficient. The mining speed is bound by processors’ clock rate, which is hard to improve further. Thus, powerful nodes can gain limited advantage over mining, and RandChain achieves a high degree of decentralisation.
"""
link="https://zoom.us/j/95640461003?pwd=bk1zQUtjU1ZmWEQ2aElndjB6NlMxUT09"
password="hCm0d2"

[[extra.seminars]]
author = "Mustafa Al-Bassam"
affiliation = "University College London"
date = "2020-12-02"
time = "12:00:00"
timezone = "+02:00"
title = "(Title to be determined)"
abstract = """
"""
link="https://zoom.us/j/93067216002?pwd=WDZnZlA5cStSVVNCdkoycXBLZnhzdz09"
password="SEFG6q"

[[extra.seminars]]
author = "Erkan Tairi"
affiliation = "TU Wien"
date = "2020-12-09"
time = "12:00:00"
timezone = "+02:00"
title = "(Title to be determined)"
abstract = """
"""
link="https://zoom.us/j/92874956032?pwd=ZFlUdWtYWUZNMzFkcnlaNjE5empBQT09"
password="17fMte"

[[extra.seminars]]
author = "Katerina Samari"
affiliation = "University of Athens"
date = "2020-12-16"
time = "12:00:00"
timezone = "+02:00"
title = "(Title to be determined)"
abstract = """
"""
link="https://zoom.us/j/93817697327?pwd=blBoNEp3ODZSWHY4YXl6cEU2dENPUT09"
password="1dUQuy"

[[extra.seminars]]
author = "Sandro Coretti-Drayton"
affiliation = "IOHK"
date = "2021-01-13"
time = "12:00:00"
timezone = "+02:00"
title = "(Title to be determined)"
abstract = """
"""
link="https://zoom.us/j/94233926850?pwd=UVlEeW11enNCczJJZVFEbjk0aHQrUT09"
passowrd="drfpv2"
+++

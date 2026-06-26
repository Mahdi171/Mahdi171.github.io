---
title: 'The Quantum Clock Moved Forward: How Close is ''Q-Day'' for Blockchain?'
date: 2026-03-27
permalink: /posts/2026/03/the-quantum-clock-moved-forward-how-close-is-q-day-for-blockchain/
author: 'Soundness Team'
excerpt: 'Three research and industry developments landed between February and late March 2026. None of them announced that quantum computers had broken blockchain cryptography. Though taken together, they mark'
redirect_from:
  - /blog/the-quantum-clock-moved-forward-how-close-is-q-day-for-blockchain/
---

> *These posts are mirrored from [Soundness](https://www.soundness.xyz/), an earlier project I built together with my co-founders.*

Three research and industry developments landed between February and late March 2026. None of them announced that quantum computers had broken blockchain cryptography. Though taken together, they mark a turning point that the blockchain industry cannot afford to sleep through. The qubit requirements to break elliptic curve cryptography fell by 44 percent. The physical qubit requirements to break RSA fell by 90 percent. And Google, the company that builds quantum hardware and employs the researchers behind the first paper, named 2029 as the year it expects to need protection. Google is among the major tech companies actively building quantum computers, and its timeline suggests a relatively early arrival of Q-Day. In other words, they are not taking a conservative or hedging stance on when quantum systems could threaten current cryptography.

![](/images/blog/the-quantum-clock-moved-forward-how-close-is-q-day-for-blockchain/yiSGedGjbbRLdRU5nbneQTJwtI.png)

source: [https://tinyurl.com/2wanvzhu](https://tinyurl.com/2wanvzhu)

These are not independent signals pointing in different directions. They are three instruments from the same orchestra arriving at the same conclusion.

## The number everyone quoted was wrong

For years, the default benchmark in quantum risk discussions has been RSA-2048, which requires roughly 4,000 logical qubits under Shor's algorithm. The reasoning: that is the number most cited by standards bodies, it is what NIST used when setting migration deadlines, and it provides a reassuringly large gap between where quantum hardware stands today and where it needs to reach before anything breaks.

The problem is that blockchain does not use RSA. Bitcoin uses secp256k1. Ethereum uses secp256k1. Solana, Sui, Near, Stellar use Ed25519. The entire ecosystem runs on elliptic curve cryptography, and elliptic curves have always been the easier quantum target. Before this week, the best estimate for breaking P-256; the curve structurally closest to secp256k1, was 2,124 logical qubits. After the EC paper, it is 1,193. That is fewer logical qubits than required to break RSA-3072, which provides equivalent classical security.

![](/images/blog/the-quantum-clock-moved-forward-how-close-is-q-day-for-blockchain/irDOO0EgRJyNlbsaqD3NG0Tg.png)

Logical qubits required to break each curve, previous best vs. EC 2026 paper.

Any organization whose quantum risk model is calibrated to RSA estimates is using the wrong ruler and has just been handed a new one.

## What Google is actually saying

Google's blog post does not claim that quantum computers will break elliptic curve cryptography by 2029. What it says is more deliberate and, in some ways, more alarming: Google is treating 2029 as the deadline by which its own systems must be protected, not because they expect a CRQC to exist by then, but because they no longer feel safe assuming it will not.

The new timeline reflects migration needs for the PQC era in light of progress on quantum computing hardware development, quantum error correction, and quantum factoring resource estimates.

Google's call for urgency comes as it continues to develop its quantum chip Willow, and there are rising concerns that quantum computers could severely disrupt the crypto industry by breaking the cryptographic algorithms used to secure digital assets.

Google has also shifted what it considers the most urgent problem. Google now places greater emphasis on digital signatures, the cryptographic tools used to verify identity and ensure software integrity, placing increased focus on migrating authentication systems to post-quantum standards. That is precisely the threat model for blockchain. Digital signatures are not a secondary concern in a system where every transaction is a signature. They are the entire authorization mechanism.

The uncomfortable implication is this: if Google, which employs the researchers who wrote the EC paper, is targeting 2029 for its own migration, and blockchains are targeting 2029 for protocol-level PQ support at best, those two timelines leave zero margin. And one of those timelines belongs to an organization that can execute a migration by executive decision. The other requires social consensus across tens of thousands of node operators, miner factions, validator sets, and wallet providers who cannot always agree on a block size.

![](/images/blog/the-quantum-clock-moved-forward-how-close-is-q-day-for-blockchain/Gm9QOsgNlGF6XoDv1pNgCJNMuB4.png)

128-bit classical security; logical qubits required to break each primitive

### Breaking RSA got cheaper too

On February 12, researchers at Iceberg Quantum, a private company based in Sydney, posted a preprint titled “The Pinnacle Architecture: Reducing the cost of breaking RSA-2048 to 100,000 physical qubits using quantum LDPC codes.” The number deserves emphasis: 100,000 physical qubits. The previous leading estimate, from Gidney and Martinis in 2021, was 20 million physical qubits. A 2024 update using the INRIA team's earlier algorithmic improvements brought that figure to roughly 900,000. The Pinnacle Architecture cuts it to 100,000.

![](/images/blog/the-quantum-clock-moved-forward-how-close-is-q-day-for-blockchain/cR7ccZ0LpOTJeeKj5PWUl8CFnQ.png)

The mechanism behind this reduction is a switch from surface codes, the error correction approach used in most near-term quantum hardware, to quantum low-density parity-check codes, known as quantum LDPC codes. Surface codes require a large number of physical qubits per logical qubit to achieve the error rates needed for cryptanalysis. Quantum LDPC codes achieve comparable logical qubit quality with significantly fewer physical qubits by spreading error correction across a more efficient code structure. The Pinnacle Architecture is specifically designed to take advantage of LDPC codes to run Shor's algorithm at dramatically reduced physical overhead. To put 100,000 physical qubits in context: IBM's current quantum systems operate at thousands of physical qubits. Their published roadmap targets 200 logical qubits with 100 million gate operations by 2029. Quantinuum has demonstrated 94 logical qubits on trapped-ion hardware. The gap between today's hardware and 100,000 physical qubits is real; but it is a gap measured in engineering cycles, not in orders of magnitude that make the problem feel safely distant. For blockchain the relevance is indirect but important. Blockchain networks run on elliptic curves, not RSA. But the Pinnacle Architecture result matters for two reasons. First, it shows the pace and direction of optimization: every major algorithmic threshold that appeared fixed has continued to fall under focused engineering effort. Second, it narrows the physical hardware gap for quantum computation generally, which accelerates the timeline for elliptic curve attacks as well, since both problems benefit from the same physical qubit scaling improvements.

## The permanent record problem

Here is what makes the threat to blockchain different from the threat to any other system.

When a bank migrates its authentication infrastructure to ML-DSA, the historical record of its old ECDSA signatures becomes irrelevant. No one can use a five-year-old bank signature to do anything. The migration is clean.

Blockchains do not work this way. Every transaction you have ever sent is permanently recorded, publicly accessible, and includes your public key. A quantum computer running Shor's algorithm does not need to attack you in real time. It reads the ledger, finds your public key in a transaction from 2021, derives your private key from it, and drains your current balance. The ledger that makes blockchains trustworthy is also the ledger that makes them a durable attack surface.

According to Project Eleven, over 6.8 million Bitcoin, over $470 billion worth, sits in addresses that are vulnerable to quantum attacks, including coins from Bitcoin's earliest days. Every Ethereum address that has ever sent a transaction is in the same position. Institutional custody providers holding assets on behalf of clients are sitting on a balance sheet that includes, implicitly, the quantum exposure of every historical transaction across every chain they service.

The EC paper does not change this exposure. It just changes the arithmetic of when it becomes exploitable.

![](/images/blog/the-quantum-clock-moved-forward-how-close-is-q-day-for-blockchain/6DWP0ymEezGDIEQWfGglV8rfz7c.png)

The qubit–gate tradeoff, each point is an algorithm for P-256 The new algorithm halves qubits at the cost of more gates. Gate counts are expected to fall with further optimization, as happened with the RSA predecessor.

## What the chains are planning — and what they are not ready to deliver

The ecosystem is not ignoring this. The Ethereum Foundation has announced a four-pronged roadmap targeting protocol-level quantum resistance by 2029. Solana developers have built a Winternitz vault implementation. BIP-360, proposing a quantum-resistant output type for Bitcoin, was merged into the formal BIP repository in February. These are genuine efforts by serious people.

But reading the fine print matters. Even though the Ethereum Foundation doesn't expect quantum computing to pose a threat to users for another 8 to 12 years, researchers acknowledge that the work must begin well before the threat arrives. That eight to twelve year estimate predates the EC paper, which moved the qubit threshold materially downward, and it predates Google's revised 2029 deadline, which represents an updated judgment from the organization with the most direct visibility into quantum hardware progress.

Meanwhile, to access quantum-resistant features on Solana, users need to store their funds in Winternitz vaults rather than regular Solana wallets, as it is not a network-wide security upgrade. Bitcoin's ecosystem is actively divided, with influential voices arguing that quantum risks are overstated and no action is needed for decades. That debate has no clear resolution mechanism.

The honest picture is that protocol-level quantum safety across major chains by 2029 is an optimistic scenario, and "optimistic" is not a risk management posture.

## The part no one talks about: the race condition

Assume for a moment that Ethereum successfully ships its quantum-resistant upgrade in 2029 and users begin migrating. A rational quantum adversary, aware of this timeline, has every incentive to act before that migration completes; not after.

When you submit a transaction to move your assets from an exposed address to a new quantum-safe one, that transaction sits in the mempool. It is visible to everyone before it confirms. An adversary who has already recovered your private key from your public key via Shor can see your migration transaction, construct a competing transaction spending your funds to their address, and submit it with a higher fee. If they are faster, they win. Your attempt to protect yourself is also the moment of maximum vulnerability.

This is the race condition. It is closed only one way: by migrating before the adversary exists, not in response to one.

## The Soundness approach: deployable today, across every account type

Chains may not be ready by 2029. The question is whether your accounts need to wait for them.

The answer is no. The solution Soundness has built does not depend on protocol-level changes. It operates at the application layer, smart contracts and prover infrastructure, which means it is deployable today across Ethereum, Solana, Sui, and other major networks without waiting for a hard fork, validator consensus, or governance vote.

The construction differs depending on the account type, because the quantum exposure differs.

**Software wallets and self-custody (all EdDSA chains + HD BIP32/BIP39 ECDSA)**

For accounts on Solana, Sui, Stellar, Near, and other EdDSA chains, the RFC 8032 key derivation standard provides a structural advantage. Every Ed25519 private key is deterministically derived from a seed via SHA512. The seed is protected by Grover's algorithm, not Shor's, inverting SHA512 requires 2^128 quantum operations, which remains infeasible. This means the seed is a quantum-resistant secret even when the corresponding public key is already onchain.

Soundness deploys a PQ-secure zero-knowledge proof that demonstrates knowledge of this seed, binding the existing onchain identity to a new post-quantum key, without revealing the seed or moving any assets. The address stays the same. The authorization mechanism upgrades to quantum-resistant. Enrollment costs approximately $0.54 onchain and takes under a second to generate. This is production-deployed today.

**MPC wallets**

For multi-party computation architectures, Fireblocks, Dfns, and equivalent infrastructure, the challenge is that no single party holds the full key. The quantum threat, however, is not directed at the key shares. It is directed at the public key on the ledger, which is the same regardless of how many parties generated it.

For MPC wallets built on seed-sharing architectures (where a shared seed underlies all key derivation, consistent with RFC 8032), the same proof-of-seed construction applies. Each signing party contributes to the proof without any party ever seeing the full seed. For DKG-only architectures where no shared seed exists, Soundness has a circuit-based construction that operates over the signing scalar directly. This path is harder computationally but has been formally established in our Financial Cryptography 2026 paper and is the subject of ongoing implementation work. The PoC is available in [https://pqhub.soundness.xyz/](https://pqhub.soundness.xyz/). Contact us for access code.

**HSM custody**

This is the case most relevant to institutional custodians like Hex Trust, and it requires a different construction entirely because the compliance constraint is absolute: no classified material can exit the hardware boundary. The approach does not require it to and we use a novel technique to enable PQ options without breaking the HSM boundaries. This construction works on existing HSMs today, with no firmware changes, no hardware upgrades, no seed export. Contact us to walk you through our demos.

## The full picture

This month produced multiple independent confirmations that the timeline for quantum risk to blockchain infrastructure is compressing. A paper from INRIA Rennes halved the logical qubit requirement for breaking elliptic curve cryptography. Google, with the most direct visibility into quantum hardware progress of any organization that has publicly disclosed its view, named 2029 as the year it expects to need protection.

Major chains are working toward protocol-level solutions on that same timeline. Many of them will not make it. And even if they do, the migration window they create will come with a race condition that only hurts the people who wait until it opens to start moving.

The infrastructure to protect blockchain accounts, self-custody, MPC, and HSM, exists today, does not require chain-level changes, and is deployed on production networks. The case for using it has never been stronger than it is this week.

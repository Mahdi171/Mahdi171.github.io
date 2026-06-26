---
title: 'MPC wallets: the post-quantum migration'
date: 2026-03-20
permalink: /posts/2026/03/mpc-wallets-the-post-quantum-migration/
author: 'Soundness team'
excerpt: 'Multi-party computation changed the security model for institutional custody. The core promise is distribution of trust: no single server, no single employee, no single cloud region holds enough to si'
redirect_from:
  - /blog/mpc-wallets-the-post-quantum-migration/
---

> *These posts are mirrored from [Soundness](https://www.soundness.xyz/blog), an earlier project I built together with my co-founders.*

Multi-party computation changed the security model for institutional custody. The core promise is distribution of trust: no single server, no single employee, no single cloud region holds enough to sign a transaction alone. When Fireblocks, Dfns, or Coinbase runs a threshold signing protocol, the private key never stores in one place. An attacker who compromises one co-signer learns nothing useful. The security guarantees are real, well-audited, and represent years of serious cryptographic engineering.

The problem is that this trust model was designed for a specific adversary, one who needs to extract key material from a compromised system. A quantum computer is a different adversary entirely. It does not need to touch your infrastructure. It works from something that is already public.

Every transaction you have ever signed published your elliptic curve public key to the blockchain, not a hash of it, not a commitment, the actual point from which your private key can be recovered. If a sufficiently capable quantum computer ever exists, every address that has broadcast a transaction becomes a target. The MPC architecture protecting those keys distributes the secret across multiple parties. It does not protect the public key, which was never secret to begin with.

## What MPC actually protects

The value of MPC custody is worth being precise about before discussing its limits.

Classical attackers target the private key. They compromise servers, bribe insiders, intercept network traffic, or physically seize hardware. MPC defeats all of these by ensuring no single point holds enough key material to sign alone. The threshold structure means a compromised co-signer is worthless without the others. This is a meaningful, independently verified security property, and it addresses the threat model that has dominated institutional custody risk for the past decade.

![](/images/blog/mpc-wallets-the-post-quantum-migration/64JhKfpXLk6lu7OEiufx1O9jo10.png)

The signature schemes underlying every major blockchain, ECDSA on secp256k1 for Bitcoin and Ethereum, Ed25519 for Solana, Sui and more, rely on the hardness of the elliptic curve discrete logarithm problem: computing a signing key scalar from a public curve point is computationally infeasible for classical computers, regardless of how many parties are involved or how the key is distributed. MPC exploits this hardness. It does not reinforce it.

Peter Shor's algorithm, published in 1994, solves the discrete logarithm problem on a quantum computer in polynomial time. Given enough stable logical qubits, recovering a private key from an elliptic curve public key is no longer hard. The threshold structure of MPC is irrelevant to this attack. The target is the onchain public key, not the distributed shares.

The current estimate for breaking a 256-bit elliptic curve key is roughly 2,000 to 4,000 logical qubits. Google's Willow processor reached 105 physical qubits in late 2024. The gap between physical and logical qubits, currently hundreds of physical qubits per logical one, is a hard engineering problem. It is not an unsolvable one.

August 2024 was a meaningful moment: NIST finalized its first post-quantum cryptographic standards. ML-DSA (formerly Dilithium), SLH-DSA (formerly SPHINCS+), and ML-KEM (formerly Kyber) are now official federal standards, designed to remain secure against both classical and quantum computers. In February 2026, BIP-360, the proposal to add quantum-resistant output types to Bitcoin, was merged into the official BIP repository, naming ML-DSA as a candidate signing algorithm. The ecosystem is no longer speculating about whether a transition will happen. It is specifying the path.

## The fault line inside MPC

Not all MPC wallets face the same migration problem. There is a structural division inside the MPC ecosystem that determines almost everything about how a given system can transition to post-quantum signing.

RFC 8032, the specification for EdDSA and Ed25519, defines how signing keys must be derived from a seed: `sk = clamp(SHA-512(seed)[0..32])`. This is the standard. A correctly implemented Ed25519 key, whether held by a single signer or distributed across an MPC protocol, has a seed at its root. This matters because the seed is the anchor for quantum migration: prove knowledge of the seed in a quantum-resistant way, and you can bind a new post-quantum key to the existing onchain identity without changing the address or moving funds.

![](/images/blog/mpc-wallets-the-post-quantum-migration/xUX4XSB5c6LhWa8izuXv3lJVd0.png)

The question is whether that seed is accessible in the MPC architecture.

Some systems distribute the seed itself. The 128 or 256 bits of entropy from which all signing keys for all chains are derived are secret-shared across parties. Coinbase's custody infrastructure, tracing its lineage to the Unbound Security acquisition, works this way. No single party sees the seed, but the seed exists as a distributed object and all key derivation flows from it. The RFC 8032 chain is intact.

Other systems skip the seed entirely. They run a distributed key generation protocol that produces a threshold-shared signing key directly; an ECDSA or EdDSA scalar distributed additively across the parties, with no parent seed material. Fireblocks and Dfns follow this model. The key is the root of trust, not derived from anything outside the DKG protocol itself.

From a quantum migration standpoint, seed-sharing systems have a natural anchor. You can find more details on this on our recent FC paper, here: [https://fc26.ifca.ai/preproceedings/190.pdf](https://fc26.ifca.ai/preproceedings/190.pdf). The same entropy that generated the classical key can generate a post-quantum key. The two keys share a common root, and that shared root can be proven in zero-knowledge; showing that a new quantum-resistant key belongs to the same identity as the current classical address without revealing the seed. The RFC 8032 derivation chain provides a well-specified, standardized path for this proof.

## Why there is no clean migration path available today

The obvious response to all of this is: replace ECDSA with ML-DSA in the signing stack. Deploy threshold ML-DSA instead of threshold ECDSA. New keys, new addresses, problem solved.

No production-ready threshold ML-DSA protocol exists.

This is not a gap that can be closed quickly. ECDSA's algebraic structure, private keys as scalars in an additive group over a prime field, is what makes threshold protocols tractable. MPC-CMP, CGGMP21, FROST all exploit this structure. ML-DSA keys are polynomial matrices over a quotient ring. The mathematical structures are different enough that existing DKG and signing protocols do not transfer. New protocols need to be designed from scratch, proven secure in formal models, and independently audited.

The timeline for this work is measured in years, not quarters. The academic precursor work to CGGMP21 took several years to mature. The Dfns implementation was audited by Kudelski Security in a process that took months, and that was building on a decade of established MPC theory for elliptic curves. Threshold ML-DSA is earlier in its development than GG18 was in 2018. NIST's threshold cryptography call, which would eventually provide standardized threshold PQ signing constructions, is still in early stages.

![](/images/blog/mpc-wallets-the-post-quantum-migration/Mjkjtk7ZWSNAsAhzYl8VKz61M.png)

MPC providers who describe proactive key refresh as part of their quantum readiness are addressing the wrong problem. Key refresh re-randomizes the sharing of the ECDSA scalar `x` across parties. It does not change the DLog pattern as we have in the onchain public key. The same observation applies to every classical physical security measure layered on top of MPC: SGX enclaves, air-gapped co-signers, multi-jurisdiction key distribution. These harden the classical threat model. They have no bearing on an attacker who derives the private key from the public key using onchain data alone.

## The bridge that exists now

Our starting point is this: you do not need to replace classical signing to get quantum protection. You need to prove, in a quantum-resistant way, that you know the secret from which your classical key was derived.

For Ed25519 keys derived according to RFC 8032, that secret is the seed. A zero-knowledge proof that demonstrates knowledge of the seed behind a given public key, without revealing the seed, provides quantum-resistant authentication for an existing classical address. The proof is generated using a hash-based proof system whose security rests on SHA-512 collision resistance, not on elliptic curve hardness. Grover's algorithm attacks SHA-512 at `2^128` operations; a budget that remains out of reach for any foreseeable quantum computer.

Our published work at Financial Cryptography 2026 builds this construction formally for the single-signer case and we will publish our upcoming work that shows the applicability of this idea to the MPC setting. The proof-of-seed binds a classical onchain identity to its underlying secret material through a circuit that contains only hash operations; no elliptic curve arithmetic inside the proof at all.

What makes this deployable today is the cost. The proof sizes we achieve, around 45–50 kilobytes, verify onchain for approximately $0.54 at current Ethereum gas prices. That can be a one-time enrollment cost per address. The classical security and legacy systems remain unchanged. For threshold settings, the construction supports aggregation: multiple party proofs can be batched into a single onchain verification, making the attestation cost independent of the number of co-signers.

Soundness has this deployed and running on Sui, Solana, and EVM chains. Institutional addresses can enroll now, before quantum risk is acute, and have quantum-resistant authentication anchored to their existing keys and existing infrastructure while the community does the years of work required to build production-grade threshold PQ signing.

## What custodians need to do now

The relevant question is not whether your MPC provider's key distribution is sophisticated. It is whether the quantum migration path from your current architecture is specified, engineered, and on a credible timeline.

For custodians running seed-sharing architectures, the migration path through proof-of-seed is deployable today. The seed is the anchor. The RFC 8032 derivation chain is the standard. The ZK construction exists and runs in production. The integration work is an engineering project, not a research project.

For custodians running DKG-only architectures, the migration path is harder but not closed. The scalar-based construction is more expensive and requires more careful implementation. The appropriate next step is a technical assessment of what the DKG output structure looks like and whether an intermediate seed-like anchor can be introduced into the protocol without breaking existing security properties.

For all custodians: the race condition deserves specific attention. A quantum-capable attacker who wants to front-run a key migration can do so the moment they have sufficient qubits, they recover sk from pk, observe the migration transaction in the mempool, and submit their own first. Migration done under adversarial pressure is a race you may not win. Migration done now, while ECDSA remains computationally secure, eliminates the race permanently. The enrollment certificate that exists before Q-day cannot be front-run.

The work of making institutional crypto infrastructure quantum-resistant requires protocol engineering, independent security audits, and chain-level coordination. Soundness has the most efficient deployed system for this migration path, with onchain aggregation that keeps attestation costs tractable at institutional scale. The foundation is in place. The question for each custodian is when they start building on it.

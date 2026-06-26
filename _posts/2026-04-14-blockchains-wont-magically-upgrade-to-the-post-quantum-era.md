---
title: 'Blockchains Won’t Magically Upgrade to the Post-Quantum Era'
date: 2026-04-14
permalink: /posts/2026/04/blockchains-wont-magically-upgrade-to-the-post-quantum-era/
author: 'Soundness team'
excerpt: 'We are facing exciting times, both stressful and intellectually interesting. If you followed Twitter the last few weeks, you might have noticed that different influential actors are pulling the post-q'
redirect_from:
  - /blog/blockchains-wont-magically-upgrade-to-the-post-quantum-era/
---

> *These posts are mirrored from [Soundness](https://www.soundness.xyz/), an earlier project I built together with my co-founders.*

We are facing exciting times, both stressful and intellectually interesting. If you followed Twitter the last few weeks, you might have noticed that different influential actors are pulling the post-quantum migration deadline forward to 2029, well ahead of NIST's 2035 transition deadline and the broader consensus of 2032–2035. This accelerated timeline was set by Google, a company investing billions in quantum computing and gathering the best talent in the world.

It has been for a while now that our job at Soundness has been finding solutions to the current emergency.

To do that, we talked to different actors across the blockchain industry, from chains and protocols to wallets and custodians, institutions, and researchers. With this post, we want to compress days of conversations and share with you the best mental model to understand that maybe there is only one "best" solution.

##### This Is Not Y2K

First, this problem is multi-dimensional. People often compare it to Y2K, but there are two important differences:

- **Y2K had a fixed deadline. Quantum computers could come earlier.** Whether through stealth research or public breakthroughs, the timeline is uncertain, and uncertainty is the enemy of planning.

- **Y2K was a clearly scoped fix. Post-quantum cryptography is not.** There are many PQC candidates for different settings, each with their own tradeoffs, constraints, and requirements. There is no single drop-in replacement.


That's the bird's-eye view. Now, let's scope it to blockchains.

##### Blockchains Will Upgrade and People Will Follow

##### We have heard this constantly over the last few weeks. There are two flaws in this thinking:

- **Not doing anything is not security.** It's like knowing you don't have a lock on your door but still hoping nobody will enter. Hope is not a security posture.

- **Blockchains have just started to think about a plan, and they still don't know which one is the best.** On that second point, the naive approach is thinking a chain will swap ECDSA or EdDSA for some NIST-compliant candidate like ML-DSA or SLH-DSA. Even if that were possible "out of the box", which it is not, it would mean changing all the protocol parameters: block size, block time, block propagation, throughput, bandwidth, consensus, and the entire P2P layer.


This approach has two consequences:

- First, it undermines the years-long effort blockchains have made to be the most performant. Second, changing the signature scheme implies a **whole redesign of the blockchain,** very similar in scope to what projects like Solana and Sui did with hundreds of millions in funding and years of dedicated engineering to ship in production.

- We are not saying the task is impossible: but it changes all the performance benefits that blockchains fought for and fights directly against their priorities to keep their chains competitive and alive. To pursue this route seriously, chains will need to commit a substantial amount of resources to drive it correctly.


##### The Mental Experiment: Assume Chains Do Upgrade in Time

Let's assume chains manage to "upgrade" within the next 1–3 years.

When we say "upgrade," we still don't know what the best candidate is for chains to adopt. They are still pondering. And since every blockchain has different governance models and requirements, it's unlikely all will converge to a single solution like "let's use ML-DSA."

But let's assume they do. Let's assume chains upgrade and use ML-DSA. Three critical questions remain:

- **How will blockchains migrate and keep backward compatibility with previous addresses?** Users can't lose or have their coins locked. For EdDSA chains, **Proof of Seed** is a complete solution thanks to deterministic seed derivation. For ECDSA chains, it's partially valid, covering a significant majority of keys, but not all, due to the lack of a canonical seed-to-scalar derivation across wallets.

- **How far are the thresholdized versions for MPCs?** NIST issued a call for multi-party threshold scheme candidates in early 2026, but selection and standardization will take years beyond that. For perspective, ML-DSA itself took roughly 7 years from submission to acceptance (2017–2024). That timeline extends well beyond the deadlines Google and others are now projecting.

- **How much will it cost HSM custodians to migrate their legacy stacks?** And who absorbs those costs, clients or custodians? If custodians need to fully absorb them, that could hurt their businesses drastically.


These questions remain open, and that's while we're assuming chains settle on a single scheme that follows a NIST standard. If a chain develops its own non-standardized solution then MPC and HSM custodians will be left behind.

##### What About Other NIST Candidates?

We can look beyond ML-DSA:

- **FN-DSA**: No thresholdized version exists.

- **SLH-DSA**: No thresholdized version, and signatures are too large for practical blockchain use.


So even in the best-case scenario, chains upgrade to ML-DSA on time, most custodians still won't be able to secure the assets of their clients.

##### The Bottom Line

The post-quantum migration for blockchains is not a firmware update. It's a multi-dimensional problem spanning protocol design, key migration, custodial infrastructure, MPC standardization, and cost absorption, with an accelerating deadline and no consensus on the solution.

The good news is that at Soundness, we are converging towards a unified solution that includes the requirements of both wallets and custodians and the chains themselves. It doesn't matter to solve only one end of the problem if your problem is composed of two.

If you're a wallet, a custodian or a chain and don't know what you should do we will help you get your head around it. Reach out to us and Follow us at [@SoundnessLabs](https://x.com/@SoundnessLabs) for more thoughts following up on this.

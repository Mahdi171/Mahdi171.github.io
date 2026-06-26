---
title: 'Post-Quantum Security and Blockchains: The Missing Enterprise Perspective'
date: 2025-12-22
permalink: /posts/2025/12/post-quantum-security-enterprise/
author: 'Soundness Team'
excerpt: 'TLDR; Most discussions about quantum computing and blockchains start with a technical question: When will quantum computers actually break today’s cryptography?'
redirect_from:
  - /blog/post-quantum-security-enterprise/
---

> *These posts are mirrored from [Soundness](https://www.soundness.xyz/blog), an earlier project I built together with my co-founders.*

TLDR; Most discussions about quantum computing and blockchains start with a technical question: _When will quantum computers actually break today’s cryptography?_

[Justin Thaler’s recent post](https://a16zcrypto.com/posts/article/quantum-computing-misconceptions-realities-blockchains-planning-migrations/) answers that question clearly and responsibly. He explains why a cryptographically relevant quantum computer is likely still 10–15 years away, why signatures and encryption face different risks, and why rushing into immature post-quantum systems today could create more harm than good.

We agree with almost all of his technical conclusions.

But there is an important part of the story that sits outside pure cryptography: **the enterprise reality**.

For individual users holding crypto in personal wallets, the quantum threat feels distant and abstract. But for institutions — banks, custodians, hedge funds, and enterprises managing real-world assets on-chain — the calculus is very different. Their decisions are not driven only by when quantum computers arrive. They are driven by **regulatory deadlines, insurance costs, audit requirements, and liability pressures that already exist today**.

This post adds that missing perspective. The goal is not to create panic. It is to explain why **quantum readiness** matters now for enterprises, even if the actual cryptographic threat is still years away.

##### The Regulatory Clock Is Ticking

###### Government Mandates Are Real

While we debate when quantum computers will arrive, governments are already setting deadlines.

**In the United States:**

- The NSA's CNSA 2.0 advisory requires National Security Systems to be quantum-resistant by 2035

- NIST published IR 8547 supporting widespread PQC adoption by 2035

- The Quantum Computing Cybersecurity Preparedness Act requires agencies to develop migration plans


**In Europe:**

- The European Commission released recommendations in 2024 urging member states to develop PQC strategies

- 18 EU member states recommend protecting sensitive data against harvest-now-decrypt-later attacks by 2030

- The UK's NCSC published a three-phase timeline requiring complete PQC migration by 2035


**These aren't suggestions. They're mandates that carry real consequences.**

[A recent UK government study](https://assets.publishing.service.gov.uk/media/692820edb3b9afff34e960f6/Regulator_and_industry_perspectives_on_the_current_plan_for_PQC_transition.pdf) found that around 50% of critical infrastructure organizations believe the quantum threat will become reality within 10 years. The study also revealed that regulatory compliance is one of the strongest drivers pushing organizations toward PQC migration.

The message is clear: enterprises serving government clients or operating in regulated industries cannot wait until quantum computers appear. They need to show progress now.

##### The Real Threat: Capital Flight, Not Key Breaking

Here's what the technical discussion often misses:

**The market doesn't need a quantum computer to crash. It needs institutional capital to leave.**

Traditional finance is moving on-chain at an accelerating pace. Real-world assets, stablecoins, institutional funds, we're talking about hundreds of billions of dollars already, with projections reaching into the trillions. These aren't retail users holding crypto as a speculative bet. These are regulated entities with compliance obligations, insurance requirements, and fiduciary duties.

Now consider what happens when regulators enforce PQ migration deadlines:

- Banks holding tokenized assets on-chain face audit questions about quantum readiness

- Insurance companies raise premiums or refuse coverage for non-compliant custody arrangements

- Compliance officers flag blockchain exposure as unacceptable regulatory risk

- Institutional clients pull their assets to avoid being caught in non-compliant infrastructure


**None of this requires a quantum computer to exist.**

The capital flight happens because of regulatory pressure, not cryptographic breaks. And when institutional money leaves, it doesn't leave quietly. Markets crash. Liquidity dries up. The entire ecosystem suffers.

Think about the numbers. If even a fraction of institutional capital exits because chains cannot demonstrate quantum readiness, we're looking at market disruptions measured in hundreds of billions of dollars. The impact would feel similar to a real quantum attack on the cryptography itself.

##### The Enterprise Risk Equation

###### It's Not Just About Breaking Keys

Justin focuses on when quantum computers will actually break cryptographic keys. This is the right question for technical security analysis. But enterprises face a different set of pressures that don't depend on the exact timing of a CRQC.

**1\. Insurance Pricing**

Insurance companies assess risk based on potential future threats, not just current ones. As quantum computing advances, even incrementally, insurers are starting to factor this into their risk models.

Imagine you're a bank providing custodial services for digital assets. Your insurance provider sees headlines about quantum computing breakthroughs. They see government mandates for PQC migration. They see competitors starting to address the issue.

**What happens to your premium?** It goes up. Not because quantum computers can break your encryption today, but because the perceived risk is rising.

**2\. Regulatory Audits**

Financial institutions operate under constant regulatory scrutiny. Auditors now ask questions about quantum readiness. Can you demonstrate awareness? Do you have a plan? Are you tracking developments?

Not having answers to these questions creates compliance risk, even if the technical threat is years away.

**3\. Client Due Diligence**

Institutional clients—pension funds, sovereign wealth funds, family offices—are increasingly including quantum readiness in their due diligence questionnaires. They want to know: what's your plan for the post-quantum transition?

Being unable to answer creates competitive disadvantage right now.

**4\. The RSA-512 Scenario**

Here's a thought experiment. What if someone breaks RSA-512 with a quantum computer next year? RSA-512 is already considered weak by classical standards. But a quantum break of any size creates headlines. It triggers fear.

Even if secp256k1 and Ed25519 remain safe, the market reaction could be severe. Assets might flee chains that have no quantum readiness plan. It wouldn't matter that the cryptography wasn't actually broken, the damage comes from loss of trust.

This is why quantum readiness matters separately from quantum security. The former is about demonstrating preparation. The latter is about actual cryptographic protection.

##### The Custodian Problem

###### Where Traditional Finance Meets Blockchain

The crypto custody market is now a multi-billion dollar industry. Major players include Coinbase Custody, Fireblocks, Anchorage Digital, BitGo, and even traditional banks like BNY Mellon and Fidelity.

These custodians hold assets for institutional clients. They operate under regulatory licenses. They carry insurance policies. And they face all the pressures I just described.

For custodians, the quantum question isn't abstract. It's operational:

- How do we demonstrate PQC readiness to regulators?

- What documentation do we provide to institutional clients?

- How do we manage insurance costs as quantum risk perception grows?

- What's our migration timeline, and can we prove we're following it?


**The** [**SEC's PQFIF report**](https://www.sec.gov/files/cft-written-input-daniel-bruno-corvelo-costa-090325.pdf) **specifically identifies institutional crypto custody as high-risk exposure for quantum threats.** The estimated cost of PQC migration for US federal systems alone exceeds $7 billion.

Custodians can't wait for perfect solutions. They need to show progress now.

##### Certificate-Based Quantum Readiness

###### What Institutions Actually Need

Here's the practical reality: institutions don't need their transactions to be unbreakable by future quantum computers today. They need to demonstrate readiness. They need documentation. They need certificates.

Think about how [SOC 2 compliance](https://en.wikipedia.org/wiki/System_and_Organization_Controls) works. Organizations don't prove they're unhackable. They prove they have reasonable security controls and processes. Auditors verify these controls exist and are followed.

Quantum readiness can work the same way.

A certificate-based approach would:

1. **Document the migration status** of each cryptographic asset

2. **Provide audit trails** showing when quantum-safe measures were implemented

3. **Map to regulatory frameworks** like NIST, CNSA 2.0, SEC PQFIF, and DORA

4. **Give institutions proof** they can show to regulators, insurers, and clients


This is not about replacing all cryptography overnight. It's about creating a compliance layer that demonstrates awareness and progress.

##### Conclusion: Readiness, Not Panic

Justin is right that we shouldn’t panic about quantum computing. A CRQC is likely 10-15 years away. Rushing to deploy immature solutions creates real risks.

But the enterprise reality demands a different framing. Regulatory deadlines are set. Insurance costs are rising. Clients are asking questions. The market for institutional crypto custody requires demonstrable quantum readiness, regardless of when actual quantum computers arrive.

The goal isn't to make every transaction quantum-proof today. It's to:

- Build the infrastructure for migration

- Create compliance documentation

- Develop operational experience

- Position for a smooth transition when needed


**The question isn't whether to prepare for post-quantum security. It's how to do it responsibly.**

Start with documentation. Use backward compatible options. Move to pilots. Scale carefully. Let the ecosystem mature while maintaining compliance position. This is quantum readiness, not quantum panic.

The institutions that figure this out first will have a significant advantage. The ones that wait may find themselves scrambling to catch up when regulatory pressure peaks.

The clock is ticking. Not because quantum computers are imminent, but because the enterprise world operates on different timelines than cryptographic research.

It's time to start building.

###### Acknowledgement

Thanks to Wei Dai and Justin Thaler for the insightful discussions that helped shape this perspective.

###### About the Author

_This post represents perspectives from the Soundness Labs team, building post-quantum security infrastructure for blockchain ecosystems. We work with institutional partners on practical paths to quantum readiness._

##### Further Reading

_If you're an institution exploring quantum readiness for your blockchain operations, reach out to learn more about practical migration paths._

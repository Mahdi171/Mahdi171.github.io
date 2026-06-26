---
title: 'Zero-Knowledge Proofs'
date: 2025-04-07
permalink: /posts/2025/04/zero-knowledge-proofs-where-is-waldo/
author: 'Soundness Team'
excerpt: 'In this article, we’re starting a journey into the world of zero-knowledge proofs (ZKPs)—one of the most exciting and powerful cryptographic tools in shaping the Sound Internet. As this is the bockbon'
redirect_from:
  - /blog/zero-knowledge-proofs-where-is-waldo/
---

> *These posts are mirrored from [Soundness](https://www.soundness.xyz/), an earlier project I built together with my co-founders.*

In this article, we’re starting a journey into the world of **zero-knowledge proofs (ZKPs)**—one of the most exciting and powerful cryptographic tools in shaping the Sound Internet. As this is the bockbone of Soundness labs, our goal is to make these concepts approachable for all Soundies, especially those who are interested in building cool, efficient, and privacy-preserving dApps, even if they have no deep background in cryptography.

So let’s kick things off with a gentle introduction using something we all know and love: Where’s Waldo?

![](/images/blog/zero-knowledge-proofs-where-is-waldo/ApgsnzRekeW5X9oJ0WRAziOWWUo.png)

## What Is a Zero-Knowledge Proof?

A **zero-knowledge proof** is a method by which one party (called the prover) can prove to another party (the verifier) that a statement is true, **without revealing any information beyond the truth of the statement itself**.

Hint #1: zk in zkLogin, developed by Sui ([@SuiNetwork](https://x.com/@SuiNetwork)) stands for **zero-knowledge.**

This seemingly magical property is what makes ZKPs so powerful for privacy, fairness, and security. They underpin anonymous identity systems, confidential transactions, private voting, and even advanced scalability systems on blockchains like zkRollups.

The Three Pillars of ZKPs

Every zero-knowledge proof is built on three foundational properties:

1. **Completeness**: If the statement is true, an honest verifier will be convinced by an honest prover.

2. **Soundness**: If the statement is false, no cheating prover can convince the verifier otherwise. (This is where our company name, Soundness Labs, comes from! )

3. **Zero-Knowledge**: The verifier learns nothing beyond the truth of the statement—no secret leaks, no extra hints.

These principles create a strong framework for trust without exposure.

### Let’s Talk About Waldo

To bring these ideas to life, let’s walk through a simple and relatable scenario.

Imagine you’re staring at a huge “Where’s Waldo?” picture. It’s busy, chaotic, and you've been hunting for Waldo for hours. Frustrated, you offer a reward to anyone who can show you where Waldo is.

![](/images/blog/zero-knowledge-proofs-where-is-waldo/y0uDZx4uYQmK1Qs3h9GThURhZg.png)

But now there’s a problem.

You don’t want to pay someone unless you’re sure they found Waldo.

They don’t want to show you where he is without getting paid first.

It’s a classic fairness issue—one that happens all the time in real life and on the internet.

### The ZK Way to Solve It

Here’s how a zero-knowledge proof helps.

The person who found Waldo (the prover) creates a cropped image showing just Waldo from the original scene. This cropped version doesn’t reveal anything about where Waldo was in the overall image—just that the prover found him.

![](/images/blog/zero-knowledge-proofs-where-is-waldo/iTkcOFRNN4tnu5rBmwLtwz66l3Y.png)

But now another problem arises: how do you know that this cropped Waldo actually came from the original image and not some different one?

### Cryptographic Commitments to the Rescue

To fix this, we introduce a concept called a **commitment**. Think of it like a sealed envelope that contains the original image. The prover seals the image inside and shares the sealed envelope (i.e., the cryptographic commitment) with the verifier.

This commitment has two magical properties:

- **Binding**: Once the prover commits to an image, they can’t change it later.

 **Hiding**: The verifier can’t see what’s inside until the prover reveals it.

Now, when the prover sends over the cropped Waldo snippet, the verifier can check that it really matches the image they originally committed to.

![](/images/blog/zero-knowledge-proofs-where-is-waldo/GIDqHA7eADdzFWWi2HIfdXCEQI.png)

## Avoiding Extra Clues

Even with a cropped image, there’s still a risk: maybe the small portion of the image still gives some clues about where Waldo is.

To solve this, the prover overlays the original Waldo image onto a much larger blank canvas and positions it randomly. Then they crop out the Waldo section. This randomness ensures that the cropped area doesn’t reveal anything about the actual position of Waldo in the original image.

This extra step is what gives the proof its **zero-knowledge** nature.

![](/images/blog/zero-knowledge-proofs-where-is-waldo/WALD3IrOpCxfu5nsRvllZ3dSRs.png)

## What Happens Next?

Once the proof is generated, the prover can request the reward. But in Web2, this still requires trust: the verifier might not pay up.

That’s where Web3 changes the game.

In blockchain systems, the prover can submit their ZK proof to a **smart contract**. If the proof is valid, the contract automatically sends the payment—no trust required. It’s a completely fair system, thanks to ZKPs and decentralized execution.

The best part? Many blockchains today are capable of verifying ZK proofs on-chain, meaning the process can be efficient, secure, and automatic, but those are pretty expensive. But the format of the proof is totally different from a canvas!

This Waldo example is fun and intuitive, but the implications of zero-knowledge proofs go far beyond puzzles. This is what we wanna go deeper in this series.

### From Waldo to Code — Let’s Build a zkApp

In the last post, we explored zero-knowledge proofs using the _Where’s Waldo?_ analogy. We saw how ZK lets you prove something is true—_“I found Waldo!”_—without revealing where he is. For those who haven’t found Waldo yet, here you go:

![](/images/blog/zero-knowledge-proofs-where-is-waldo/J1NNCOBOs8wBF5zzZkqgDenpjY.jpeg)

Now, it’s time to move from playful theory to powerful practice.

This post kicks off the **zkApp builder’s series**, showing you how to build real privacy-preserving apps using SP1 and **Soundness Layer**—our lightweight ZK verification layer that brings fast, affordable proof verification on-chain.

We’ll start with a real example: a **zkDomain** verifier that proves your email belongs to a specific domain, without revealing the full address. All powered by zk.

### What Is a zkApp?

zkApps are applications that use zero-knowledge proofs to keep certain data private while still proving something about it.

Common zkApp use cases include:

- Proving identity without revealing your name

- Playing a game without revealing your strategy

- Voting without revealing your choice

- Solving puzzles without revealing the solution similar to Waldo example

- Claiming an airdrop without revealing your Web2 identity

A typical zkApp has two parts:

1. **A prover** — written in Rust and compiled to either a custom-circuit or a zkVM, which generates a proof

2. **A verifier** — deployed either of-chain or on-chain to verify the validity of the proof and perform next steps if the proof passes

The hard part used to be getting these proofs on-chain. That’s what Soundness Layer solves.

### zkDomain: Prove Your Email Domain Privately

As we discussed in our previous blog post, ZK enables us to build a real zkApp: an email domain verifier.

Imagine a DAO wants to grant access only to users with emails from `@company.xyz`. Instead of collecting emails (and doxxing users), we can prove that a user’s email ends in that domain — without revealing the full email or other contents.

Json Web Token (JWT) has the following format:

![](/images/blog/zero-knowledge-proofs-where-is-waldo/XjB08Z2RyJGJQOqZebEX4jNOxJg.jpeg)

### What We Do

We take a **Google-issued JWT** and verify that:

- The JWT is valid (RSA signature is correct)

- The email domain in the payload is `gmail.com` (or whatever we want)

- The full email is never revealed

### What It Looks Like in SP1

Here’s the SP1 zkVM program that runs this logic:

```rust
fn main() {
 // Load Google public key + expected domain
 let public_key_der = from_slice::<Vec<u8>>(&read_public_input()).unwrap();
 let expected_domain = from_slice::<String>(&read_public_input()).unwrap();

 // Load the full JWT input as private input
 let jwt = from_slice::<JWT>(&read_private_input()).unwrap();

 // Reconstruct the signed message and verify it
 let hashed_message = sha256(jwt.header_and_payload());
 let verified = rsa_verify(&jwt.signature, &public_key_der, &hashed_message);

 // Extract the domain and compare
 let domain = jwt.domain();
 let domain_matches = domain == expected_domain;

 // Commit results to public output
 commit(&domain); // visible
 commit(&verified); // visible
 commit(&domain_matches); // visible
}
```

### What Gets Revealed?

The proof only reveals:

- The domain: `soundness.xyz`

- Whether the JWT was valid (`true`)

- Whether the domain matched the expected one (`true`)

But not:

- The user’s full email

- Their identity

- The original JWT

In other words, the user can prove:

> “I have a valid Google-issued JWT, and my email ends in @soundness.xyz — but you’ll never see my actual email.”

Pretty powerful.

### Onchain Verification with Soundness Layer

Once you have the proof from SP1, you can verify it on-chain using Soundness Layer. We built a simple Move smart contract on Sui that calls:

This checks the proof and the public inputs — and that’s it. All the JWT parsing, hashing, signature checking, and string manipulation happened **inside the zkVM**.

### Why This Matters

This example shows what zkApps make possible:

- **Verifiable identity without doxxing**

- **Access control without surveillance**

- **Private computation in a public world**

And more importantly — it shows that you can build these things _today_, in Rust, without writing cryptographic constraints.

We abstract away the proving system, the onchain verifier, and the integration plumbing. You just write your logic, prove it with SP1, and send it onchain using Soundness Layer.

### Coming Up Next: Your First zkApp

In the next post, we’ll help you:

- Write and run your first SP1 program

- Set up the prover + verifier pipeline

- Deploy a zkApp to Sui using Soundness Layer

- Explore advanced use cases (Sudoku, airdrops, anonymous voting)

Whether you’re building a stealth startup, a game, a DAO tool, or a meme project, zk can unlock something powerful — and we’re here to make that real for you.

**Join our zkApp builder series** and stay tuned as we drop new examples, starter kits, and live testnet access.

Privacy just got a lot more practical.

Jump into our [Discord](https://discord.gg/yourlink) or explore the [docs](https://docs.soundness.xyz/) to get started.

Let me know if you want this turned into a tweet thread next, or if you’d like to make this part of a longer tutorial series page!

## Zero-Knowledge Proofs: Part 2

In the last post, we explored zero-knowledge proofs using the _Where’s Waldo?_ analogy. We saw how ZK lets you prove something is true—_“I found Waldo!”_—without revealing where he is. For those who haven’t found Waldo yet, here you go:

Now, it’s time to move from playful theory to powerful practice.

This post kicks off the **zkApp builder’s series**, showing you how to build real privacy-preserving apps using SP1 and **Soundness Layer**—our lightweight ZK verification layer that brings fast, affordable proof verification on-chain.

We’ll start with a real example: a **zkDomain** verifier that proves your email belongs to a specific domain, without revealing the full address. All powered by zk.

### What Is a zkApp?

zkApps are applications that use zero-knowledge proofs to keep certain data private while still proving something about it. Common zkApp use cases include:

- Proving identity without revealing your name

- Logging into your Sui wallet without needing to remember mnemonics

- Voting without revealing your choice

- Solving puzzles without revealing the solution similar to Waldo example

- Claiming an airdrop without revealing your Web2 identity

A typical zkApp has two parts:

1. **A prover** — who wants to prove a fact while keeping some details hidden. To do so, we need to write a circuit using domain specific languages (DSL) like Circom or Noir or High Level one like Rust or WASM, and compiled to either a custom circuit or a zkVM program, which generates a proof.

2. **A verifier** — who wants to check the validity of the claims, deployed either of-chain or on-chain to verify the validity of the proof and perform next steps if the proof passes

DSLs often require deep cryptographic knowledge and can take weeks—or even months—to develop and audit. zk virtual machines like SP1 offer a more practical approach, making it easier to build zkApps without writing circuits using Rust, WASM, etc. This comes with a high cost for proof generation but for some usecases this is not a big deal. Generating the proof is only half the battle—verifying it on-chain can be just as challenging. Some L1s are prohibitively expensive, with on-chain verification costing upwards of $20, or they simply can’t support it efficiently. That’s exactly what Soundness Layer solves.

### zkDomain: Prove Your Email Domain Privately

As we discussed in our previous blog post, ZK enables us to build a real zkApp: an email domain verifier.

Link to our previous blog post: [https://soundness.xyz/blog/sp1sui](https://soundness.xyz/blog/sp1sui)

Imagine a DAO wants to grant access only to users with emails from [@company](https://x.com/@company).xyz like Soundness. Instead of collecting emails (and doxxing users), we can prove that a user’s email ends in that domain — without revealing the full email or other contents.

Json Web Token (JWT) has the following format:

![](/images/blog/zero-knowledge-proofs-where-is-waldo/jwU4L2Ow6JeCTl1QlarY8bHNOC0.png)

What We Do here is we take a **Google-issued JWT** and verify that:

- The JWT is valid (RSA signature is correct)

- The email domain in the payload is [soundness.xyz](https://soundness.xyz/) (or whatever we want)

- The full email is never revealed

Here’s the SP1 zkVM program that runs this logic:

https://github.com/SoundnessLabs/sp1-sui/blob/main/examples/sp1-jwt-verify-email-domain/program/src/main.rs

What Gets Revealed?

- The domain: [soundness.xyz](https://soundness.xyz/)

- Whether the JWT was valid (true)

- Whether the domain matched the expected one (true)

But not:

- The user’s full email address

- Their Web2 identity

- The original JWT

In other words, the user can prove:

> “I have a valid Google-issued JWT, and my email ends in @soundness.xyz — but you’ll never see my actual email.”

Pretty powerful.

## Onchain Verification

Once you have the proof from SP1, you can verify it on Sui using our converter that you can find here: [https://github.com/SoundnessLabs/sp1-sui](https://github.com/SoundnessLabs/sp1-sui)

So you can simply build a Move smart contract and process an Airdrop if the proof for your domain choice passes. So the Move contract checks the validity of the proof and the public inputs — and that’s it. All the JWT parsing, hashing, signature checking, and string manipulation happened **inside the zkVM**.

Sui currently supports verifying only Groth16 proofs, so we need to generate SP1 proofs wrapped in Groth16—which comes with a trusted setup. If you want to use other proving systems and still verify proofs on Sui or other chains, Soundness Layer makes that possible—efficiently and with a fully decentralized design.

Why This Matters? This example shows what zkApps make possible:

- **Verifiable identity without doxxing**

- **Access control without surveillance**

- **Private computation in a public world**

And more importantly — it shows that you can build these things _today_, in Rust, without writing cryptographic constraints.

We abstract away the proving system, the onchain verifier, and the integration plumbing. You just write your logic, prove it with your zkVM of choice, and settle them onchain using Soundness Layer.

## Coming Up Next: Your First zkApp

In the next post, we’ll help you:

- Write and run your first zkApp

- Set up the prover + verifier pipeline

- Deploy a zkApp to Sui using Soundness Layer

- Explore advanced use cases (Sudoku, targeted airdrops, anonymous voting)

Whether you’re building a stealth startup, a game, a DAO tool, or a meme project, zk can unlock something powerful — and we’re here to make that real for you.

**Join our zkApp builder series** and stay tuned as we drop new examples, starter kits, and live testnet access.

Privacy just got a lot more practical.

Jump into our [Discord](https://discord.gg/E7YeREX6aU) or explore the [blogs](https://soundness.xyz/blog) to get started.

**Let us know what kind of zkApp you’d love to build—and we will go through the most liked comment for the next article.**

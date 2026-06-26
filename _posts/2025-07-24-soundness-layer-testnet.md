---
title: 'Soundness Layer Testnet Announcement'
date: 2025-07-24
permalink: /posts/2025/07/soundness-layer-testnet/
author: 'Soundness Team'
excerpt: 'Play games. Prove wins. Join us to build a Sound Internet, the future of a verifiable one.'
redirect_from:
  - /blog/soundness-layer-testnet/
---

> *These posts are mirrored from [Soundness](https://www.soundness.xyz/), an earlier project I built together with my co-founders.*

![Play games. Prove wins. Join us to build a Sound Internet, the future of a verifiable one.](/images/blog/soundness-layer-testnet/8RxDEPX3wULWdlKq4vUQ1CpQ21M.png)

_Play games. Prove wins. Join us to build a Sound Internet, the future of a verifiable one._

## What’s Happening?

We’ve launched the **Soundness Layer testnet**, and you're invited to be part of a new kind of Web3 experience—where every game you win becomes a **Zero-Knowledge Proof (ZKP)**.

 No gas fees

 No code needed

 Just play, prove, and show it off

All of this happens **right inside our Discord**. No distractions—just games, ZK proofs, and your leaderboard glory.

If you are not onboarded but have an invite code, then first check this.

## Games You Can Play

The Sound\_Game bot supports the challenging though super engaging game, called 8 Queens. This solo game is a brainy puzzle, place 8 queens on a chessboard with while they are attacking each other!

Play it in your browser. No signup, no install. Just `/8queens` to start only accessible through our Discord server.

We are actively working to add more games, and in the coming weeks we will add Tic-Tac-Toe game which you can challenge your friend.

## Prove Your Win with ZK

When you win a game, you can **generate a zero-knowledge proof** using a top-notched client-side proving system called **Ligero** build by our partner Ligero Inc. It’s private, fast, and happens in a matter of seconds.

Then your proof gets:

1. **Uploaded to Walrus** (decentralized storage)

2. **Attested by Soundness Layer** (proven & ready for on-chain Applications)

3. All through **Sui**, as the coordination layer

## Game Flow: How It Works

So you’ve typed `/8queens` — what happens next?

### Step 1: Get Your Puzzle Link

Once you run `/8queens`, the bot sends you a **private game link,** all through fun.soundness.xyz:

![](/images/blog/soundness-layer-testnet/yuUrzguX2oIiHBPuN6tSyZLKqMY.png)

The link should look like this:

![](/images/blog/soundness-layer-testnet/hYfeXJUYshjzZtgAIsJJkO07E7E.png)

Click the link and you’ll jump into the **8 Queens** puzzle in your browser.

Your goal? **Place 8 queens on a chessboard** so none attack each other—no two on the same row, column, or diagonal.

![](/images/blog/soundness-layer-testnet/S0NYPiSk3LsNiEwg4yxFiO4o.png)

You can get 3 hints to solve the puzzle too and if you see your solutions is not going to work, then you can reset the board.

### Step 2: Solve the Puzzle

When you solve the game, the bot will send a DM on Discord for you:

![](/images/blog/soundness-layer-testnet/yqIzcHU5BjT1ws77k1xY9ATde6o.png)

This channel is where you’ll **generate your ZK proof** and prep it for Soundness Layer. You’ll see several buttons:

|
**Button**

 |

**What It Does**

 |
| --- | --- |
|

`Show Bot Signature`

 |

Reveals the signed message from the bot (used for attestation) but you can skip it for now.

 |
|

`Generate Ligero Proof`

 |

I will **generate the proof** in matter of seconds and will upload the proof file to **Walrus**.

 |
|

`Close Channel`

 |

**Deletes the channel and your data** — don’t press until you’ve saved everything!

 |

### Step 3: Collect Your Proof Data

 **Note**: Proof generation may take a little time while we bundle uploads to **Walrus**. This step will get faster over time.

Once your proof is ready, you'll receive a confirmation along with the **Blob ID**—this acts as your proof’s unique fingerprint. You can look it up anytime on the Walrus Explorer on the mainnet.

![](/images/blog/soundness-layer-testnet/vjSC0r42DpRZy0qXaYDJL80Hv1U.png)

You’ll need this to submit it to Soundness Layer using the CLI.

The most important info that you can copy from this message is the `Ready-to-Submit to Soundness Layer Command` that you should run it in your `soundness-cli` directory—the same place where your Soundness key is stored. Just make sure to replace the placeholder key name with the one you’ve chosen in the key generation phase.

![](/images/blog/soundness-layer-testnet/zttV9uLnz2txlbFQDR12JJtfM.png)

### Step 4: Share the Moment

You’ll also get a final message that’s ready to post on **X (Twitter)** or anywhere you want to show off your win by tagging Soundness, Walrus and Sui.

![](/images/blog/soundness-layer-testnet/UK3buGrbG66tCraQ48isSNCq7ys.png)

## Step 5: Interacting with Soundness Layer

**You’re now ready to interact with the Soundness Layer!**

Soundness Layer is a fully decentralized verification network that gives you instant ZK proof attestations—backed by both **Sui** and **Walrus** mainnets.

Here’s how to get started:

1. **Clone or pull the latest version** of the Soundness CLI from the link below.

2. Follow the instructions in the **README** to reinstall everything cleanly.

[https://github.com/SoundnessLabs/soundness-layer](https://github.com/SoundnessLabs/soundness-layer)

 **Important:**
Make sure you **don’t delete or modify the** `**key_store.json**` **file**—this file holds your unique key and is essential for interacting with the network.

![](/images/blog/soundness-layer-testnet/5VfKQadvP2BdpV7bhYX5WPaMJ8c.png)

## We do care about real users

- **No bots, no spam**: You’re here because you earned it (via whitelist and invite codes).

- **Your game, your proof**: No-one except you can claim your proof.

- **Proofs are in Walrus**: Stored on **Walrus**, as a decentralized data storage.

- **On-chain friendly**: Thanks to Soundness Layer, proofs are ready for the on-chain attestation.

Your participation during this launch is already being counted under your registered public key, and we’ll be showcasing the results soon. Just play, generate proofs, and enjoy the experience. All your activity is securely tracked and verified.

![](/images/blog/soundness-layer-testnet/wV2N49T9O65B3HMu2cSqEjY8.png)

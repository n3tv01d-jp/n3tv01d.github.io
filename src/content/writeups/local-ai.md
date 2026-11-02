---
title: Running a model locally with Ollama
description: A spare-parts PC with two RTX 3060s, Ubuntu Server, and Ollama behind my own interface.
category: AI
tags:
  - Linux
  - Homelab
order: 4
---

## The point of a local model

Almost everyone uses a hosted assistant now. Chat apps, the voice assistant on a phone, the box at the top of a search page. Those services keep the prompts, the account, and the IP. I do not like that, so I built a machine that runs the model in the house.

It is spare parts: 16 GB of RAM, a 6-core / 12-thread CPU, and two RTX 3060s. A 500 GB NVMe holds Ubuntu Server. NVIDIA drivers first, then the actual software.

## Ollama

Ollama installs with the one-line command on [ollama.com/download](https://ollama.com/download).

> The install is mostly automatic. A terminal prompt is a bad daily interface, so it did not stay that way.

## A front end

Ollama on its own is a service I can call from a shell. I wanted a page. The [Odysseus](https://github.com/odysseus-dev/odysseus) project is a community-maintained interface with a short install guide. I keep it on the local network, and I reach it from outside through the [WireGuard tunnel](/writeups/wireguard).

The front end needs Docker. The install that matches the distro is in the [Docker engine docs](https://docs.docker.com/engine/install/).

## Final steps

I made an account on the local page and pointed it at the Ollama instance.

Models I pull in Ollama show up in Odysseus. I treat what I run the same way I treat the rest of the lab: on my machines, and with some judgment about what the model is willing to do.

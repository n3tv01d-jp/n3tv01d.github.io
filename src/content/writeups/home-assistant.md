---
title: A voice assistant on Home Assistant
description: Home Assistant on a Pi 5, wired to the local Ollama box, so I can talk to a model I run myself.
category: AI
tags:
  - Home Assistant
  - Raspberry Pi
order: 5
---

## A Raspberry Pi and the AI server

In the [previous writeup](/writeups/local-ai) I installed Ollama and a front end. This one connects that same instance to Home Assistant, so I can speak to it the way a phone talks to a hosted assistant.

A Raspberry Pi runs Home Assistant and listens for a wake word. I use Piper for speech and Whisper for recognition. It is a step up from the Odysseus setup, and still a reasonable afternoon.

## The first step

Home Assistant goes onto an SD card. On the server I already had, `sudo apt install rpi-imager` got me the imager, and I flashed the Home Assistant image.

> The card goes into a Pi 5 with Ethernet and power. The web interface is the Pi's address in a browser, and the first-run setup happens there.

## Installing the pieces

From the Home Assistant app store I installed openWakeWord, Piper, and Whisper, then the Ollama integration, pointed at the model server.

- The integrations needed a bit of tinkering.
- The debug console is where I looked when something stayed quiet.

The Home Assistant app on my phone connects back to that server.

## Final steps

I picked the model and the wake word. I use "Okay Nabu".

From there the wake word opens a conversation. Extra Home Assistant integrations let it answer things like the weather or the time from the house, instead of from a hosted assistant.

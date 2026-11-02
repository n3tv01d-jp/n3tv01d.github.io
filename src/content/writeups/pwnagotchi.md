---
title: Building a Wi-Fi packet sniffer with Pwnagotchi
description: A Pi Zero and a Waveshare display, built to test the password on my own network.
category: Hardware
tags:
  - Wi-Fi
  - Raspberry Pi
order: 1
disclaimer: This is for networks I am allowed to test. Capturing handshakes on someone else's network is illegal in most countries.
---

## A Pi Zero W and a Waveshare display

I think my Wi-Fi password is pretty secure, but better safe than sorry. So I decided to build a Pwnagotchi. A Pwnagotchi is a small Tamagotchi-like device that feeds on captured pcap packets from Wi-Fi networks. It deauthenticates a device on a network, and when that device reconnects it captures the packets moving between the device and the router. Those packets are stored on an SD card, which can later be tested with something like hashcat.

## The first step

I used a Raspberry Pi Zero W. A Zero 2 is even better. The display is a Waveshare V2. V1 ghosts badly, and V3 and V4 are not officially supported. The display sits straight on the Pi's pin header. After that, the image goes onto the SD card.

> A lithium pack is the nicer way to power it, but a 20,000 mAh power bank works too. A 10,000 mAh bank gave me about 17 hours, so 20,000 mAh should land around 34.

## Installing it

I wrote the image with [Balena Etcher](https://etcher.balena.io/). The image itself comes from the [Pwnagotchi releases](https://github.com/evilsocket/pwnagotchi/releases). Etcher writes it to the SD card, the card goes into the Pi, and the Pi gets power.

- Most of the behaviour lives in `config.toml`.
- To configure it, I use the USB port rather than the power port and plug it into a computer.

The moment it booted I got a Tamagotchi face, and I tested it on my own network.

## Final word

From there I can check a Wi-Fi password by capturing the handshake on a network I own.

Only do this with permission.

---
title: Custom firmware on a Switch V1
description: A launch-model Switch, a jig, and Hekate, so I can run homebrew and keep a NAND backup.
category: Hardware
tags:
  - Nintendo
  - Homebrew
order: 10
---

## Faulty from the start

I like the Switch and the games on it. I do not like how closed it is. The menu theme is thin, there is no menu music, and some games that could run at 60 fps are locked at 30. I wanted full control of a device I own, so I bought a V1. I used to have one and sold it years ago.

Almost every Switch from before August 2019 uses an NVIDIA Tegra X1 that ships with a recovery mode, RCM. Triggering RCM is what makes custom firmware, Linux, and Android possible on that hardware. This writeup stays with custom firmware.

## The first step

A jig is a small piece of plastic in the right Joy-Con rail. It bridges pin 1 and pin 10. They are easy to find by searching for a Switch jig. I also needed a USB cable, A-to-C or C-to-C depending on the computer. An Android phone with [Rekado](https://github.com/MenosGrante/Rekado) works too.

The SD card, 128 GB or more, needs a known-good file set before any of that. The [HATS pack by Sthetix](https://github.com/sthetix/HATS) replaced the pile of separate downloads people used to assemble by hand.

> RCM is the jig in the right rail, volume up and power together, then release power while still holding volume up, with the cable already waiting on the computer or phone.

## Installing it

Done right, the Switch opens Hekate, in the Nyx menu. Before anything else I copy the NAND. Then I partition the SD card and copy that backup onto it, so Horizon OS exists both as a backup and on the card. The backup also lives on cold storage. A USB stick, or the [NAS](/writeups/nas).

- I stay on custom firmware and avoid the other boot options unless I have a reason.
- Nintendo collects telemetry while the console is online, and it can store that telemetry offline and send it later. That is how consoles get banned.

Booted into custom firmware it looks like a normal Switch. The system info shows Atmosphere, which is what lets me run homebrew.

## Last steps

Holding R while launching a game opens the Homebrew menu instead of the game. That is title takeover.

From there I install themes, change the Joy-Con colour in software, and run other homebrew.

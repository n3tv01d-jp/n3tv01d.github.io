---
title: Building a network scanner with BJORN
description: The same Pi hardware as the Pwnagotchi, with a different SD card, scanning my own network for open ports and weak passwords.
category: Hardware
tags:
  - Networking
  - Raspberry Pi
order: 2
disclaimer: BJORN probes every device it can see. I only run it on networks I am allowed to test.
---

## An internal network scanner

With a [Pwnagotchi](/writeups/pwnagotchi) I can capture packets from my own Wi-Fi. Once I am on the network, I also want to see which devices are exposing open ports or weak passwords. That is what BJORN is for. It is built on the same hardware as a Pwnagotchi, so swapping the SD card turns the same device into something else.

Building it takes a few minutes of actual work. Most of the time goes into writing the image and letting the install script run.

## The first step

I start with the 32-bit Raspberry Pi OS Lite image and write it with the [Raspberry Pi Imager](https://www.raspberrypi.com/software/). During imaging I set a username, a password, Wi-Fi, and SSH, so the next step is just logging in.

When the card is done I power the device and connect over SSH.

## Installing it

The install is the script from the [BJORN repository](https://github.com/infinition/Bjorn):

```bash
wget https://raw.githubusercontent.com/infinition/Bjorn/refs/heads/main/install_bjorn.sh
sudo chmod +x install_bjorn.sh && sudo ./install_bjorn.sh
```

After a reboot the Waveshare display shows a small Viking.

## Final steps

On a network I am allowed to test, it probes the devices it can see.

Settings live in `/home/bjorn/Bjorn/config/shared_config.json`.

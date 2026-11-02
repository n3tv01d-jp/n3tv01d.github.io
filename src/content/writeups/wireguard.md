---
title: A WireGuard tunnel on a RockPi
description: Two gifted single-board computers, one of them turned into a VPN so I can reach my lab from outside the house.
category: Homelab
tags:
  - VPN
  - Linux
order: 3
---

## A nice gift

A while ago my neighbour gave me two single-board computers he did not know how to use. They were RockPi 4B+ boards, and they have to be flashed in a very specific way. The official documentation did not cover it fully. I wanted at least one of them as a VPN, so I could enter my network from somewhere else.

The hard part was the eMMC. The docs said I should be able to boot from a microSD card, and that did not work. The VPN software itself was the easy half. [PiVPN](https://www.pivpn.io/) also runs on boards that are not Raspberry Pis, and inside Docker. This writeup is that setup.

## The first step

After flashing the RockPi and setting login, locale, and network, I followed the one-line install on the PiVPN site.

> The device gets a static address in the router, and UDP port 51820 is forwarded to it, so I can connect from outside the network.

## Configuring the device

`curl -L https://install.pivpn.io | bash` opens the installer. I picked WireGuard, mostly because the phone app is straightforward. `pivpn -h` lists the commands. The ones I actually use:

- `pivpn -a` adds a client.
- `pivpn -qr` draws a QR code. The WireGuard app on my phone scans it and the profile is there.

## The last step

Turn Wi-Fi off on the phone, or join a different network, and bring the tunnel up. A "what is my IP" page tells me whether the traffic is leaving through the lab.

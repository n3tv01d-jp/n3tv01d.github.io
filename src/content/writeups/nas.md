---
title: A Samba NAS on Arch
description: My own file server, mostly so music projects can move between the Linux box and a Windows desktop.
category: Homelab
tags:
  - Linux
  - Storage
order: 7
---

## Backups, and then more backups

A hosted drive is useful, and it is still someone else's computer. A NAS is the same idea without that part. I built one so I can move files between desktops and laptops, and with the [WireGuard tunnel](/writeups/wireguard) I can reach it from outside the house.

The practical reason is music. Finished renders need to land on a Windows desktop for video edits. A lot of that software is Windows-only. FL Studio runs under Wine. Sony Vegas and After Effects do not.

## The first step

This NAS is an Arch install, mostly because it stays small. Samba is one package:

```bash
sudo pacman -S samba
sudo systemctl enable --now smb
sudo cp /etc/samba/smb.conf.default /etc/samba/smb.conf
```

## Mounting a drive

The system disk is 120 GB. That is far too small for the music projects, which are close to 700 GB on their own.

`lsblk` showed two extra disks, 1 TB and 500 GB.

- `sdb`, the terabyte disk, is mounted on `/samba`.
- `sdc1` is mounted on `/samba2`.

Then a user that Samba will actually accept:

```bash
sudo useradd -m username
sudo smbpasswd -a username
sudo smbpasswd -e username
```

`username` is a stand-in. I used my own.

## Final steps

The file manager connects over the network tab. Mine is `smb://192.168.178.205`. Username, password, and the shares are there.

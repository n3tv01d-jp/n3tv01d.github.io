---
title: Nextcloud on Ubuntu Server
description: A private sync server for the files I do not want sitting in Dropbox, Drive, or Mega.
category: Homelab
tags:
  - Linux
  - Storage
order: 8
---

## A prepackaged install that actually worked

I want a copy of important files somewhere that is still mine, especially FL Studio projects. Dropbox, Google Drive, and Mega are convenient. I do not want those files living on someone else's computer.

I tried several Nextcloud installs. One of them worked. The Ubuntu Server installer offers Nextcloud as a package during setup, and that is the one that came up cleanly. The manual attempts cost hours and ended nowhere.

## The first step

During the Ubuntu Server install I selected the Nextcloud package. It takes care of the install and skips the part that kept breaking when I did it by hand.

## Configuring it

When the install finishes, the web interface is on port 80 at the machine's address, opened from another computer.

- The first visit asks for an admin account.
- After that it is a normal Nextcloud.

The app store is worth using. I synced the music projects, including rendered wav and mp3 files, and the music app plays them from that server.

It was the easiest install in the lab, and a better outcome than the manual attempts.

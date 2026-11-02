---
title: A Plex server in Docker
description: One mini PC running Plex and a small stack of Docker containers for film, series, and music.
category: Homelab
tags:
  - Docker
  - Media
order: 9
---

## One mini PC

A few months ago I wanted to rewatch anime I had seen as a kid. My younger sister's boyfriend had run a Plex server, and it looked like something I should build myself.

A handful of containers, tied together with Docker Compose, is enough for series, films, and music on one machine.

## The first step

Docker goes on first, using the instructions for the distro on [docs.docker.com](https://docs.docker.com/engine/install/).

> The stack I wanted was Deluge, Prowlarr, Sonarr, Radarr, Overseerr, Plex, SABnzbd, and Lidarr for music. The images are the LinuxServer ones on Docker Hub.

## Installing it

A `docker-compose.yml` is the whole definition. One command brings the set up:

```bash
sudo docker compose up -d --build
```

Each service then answers on the machine's address and its own port. One of mine was `192.168.178.225:8686`.

## Next steps

The rest is configuration in those web interfaces. The ports are the ones in the compose file. I connect the containers to each other there, claim the Plex server with an existing Plex account, and play from that library.

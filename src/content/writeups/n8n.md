---
title: Appointments with n8n
description: A self-hosted n8n instance that turns a Telegram chat into calendar events and reminders.
category: AI
tags:
  - Automation
  - Docker
order: 6
---

## Automated reminders

The [local model](/writeups/local-ai) already has a page, and it is connected to [Home Assistant](/writeups/home-assistant), so I can talk to it from my phone. I wanted something more practical out of it: a Telegram bot that creates appointments in Google Calendar and reminds me on the day.

n8n can run in their cloud, which starts costing money past one shared project. There is also an install script and a `docker run` example. Docker fits the lab better, so I wrote my own `docker-compose.yml` instead of using the one-liner as-is.

## The next step

`sudo docker compose up -d --build` starts it. I make an account and land in the editor. A new workflow can automate most things with an API. This one is a Telegram bot, which has a few requirements of its own.

> Telegram will not talk to the bot unless the server is reachable on ports 80 and 443 with a real certificate.

I did that without paying for a hostname. [No-IP](https://www.noip.com) maps a subdomain to the public address of the network. Certbot (`sudo apt install certbot`) gets the certificate, and nginx (`sudo apt install nginx`) reverse-proxies to the container. Certbot's nginx instructions are on the [EFF site](https://certbot.eff.org/instructions?ws=nginx&os=snap).

## The Telegram bot

- Message BotFather on Telegram with `/start`.
- Create a bot with `/newbot`.
- Give it a name and a username.
- Paste the token into the Telegram nodes in n8n.

The Google Calendar node needs its own API credential, then it connects to the agent node. A clear walkthrough of that node is [this n8n calendar guide](https://n8nautomation.cloud/blog/integrate-google-calendar-n8n-tutorial-2026).

## The last step

With the token in the Telegram nodes, the local Ollama instance can create the appointment and the reminder.

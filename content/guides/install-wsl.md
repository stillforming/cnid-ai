---
title: "Install WSL in 30 Seconds"
description: "Get a Linux terminal running on Windows with one command. No dual boot. No VM. Just WSL."
readTime: "2 min"
order: 1
---

# Install WSL in 30 Seconds

You're on Windows. Most AI dev tools assume Mac or Linux. WSL fixes that — it gives you a real Linux terminal inside Windows. One command.

## The Install

Open PowerShell as Administrator and run:

```
wsl --install
```

That's it. Windows will download and install Ubuntu. When it's done, restart your computer.

## First Boot

After restart, Ubuntu will open automatically and ask you to create a username and password. Pick something simple — you'll type this password a lot.

```
Enter new UNIX username: cnid
New password: ********
```

You now have a Linux terminal running on Windows.

## Verify It Works

In your new Ubuntu terminal, run:

```bash
lsb_release -a
```

You should see something like:

```
Distributor ID: Ubuntu
Description:    Ubuntu 24.04 LTS
```

## What Just Happened

You installed a full Linux environment inside Windows. This isn't a virtual machine — it's deeply integrated. Your Windows files are at `/mnt/c/`, your Linux files are separate, and you can use real Linux tools (apt, bash, ssh, everything).

This is where your AI dev environment will live.

## Next Step

→ [Install OpenClaw in WSL](/guides/install-openclaw)

---

**Stuck?** [Book a 1-on-1 session](/book) and I'll walk you through it.

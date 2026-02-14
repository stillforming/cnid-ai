---
title: "Install WSL 2 in 30 Seconds"
description: "Get a Linux terminal running on Windows with one command. No dual boot. No VM. Just WSL 2."
readTime: "2 min"
order: 1
---

# Install WSL 2 in 30 Seconds

You're on Windows. Most AI dev tools assume Mac or Linux. WSL 2 fixes that — it gives you a real Linux terminal inside Windows with full system call compatibility.

## Make Sure You're on WSL 2

Open PowerShell as Administrator and run:

```
wsl --set-default-version 2
```

This ensures any Linux distro you install uses WSL 2, not WSL 1. WSL 2 runs a real Linux kernel — WSL 1 is a compatibility layer and you'll hit weird issues with it.

## The Install

Still in PowerShell as Administrator:

```
wsl --install -d Ubuntu-24.04
```

This installs Ubuntu 24.04 LTS on WSL 2 specifically. Don't just run `wsl --install` without the `-d` flag — you want to know exactly what version you're getting.

When it's done, restart your computer.

## First Boot

After restart, Ubuntu will open automatically and ask you to create a username and password. Pick something simple — you'll type this password a lot.

```
Enter new UNIX username: cnid
New password: ********
```

You now have a full Linux terminal running on Windows.

## Verify It's WSL 2

Open PowerShell and run:

```
wsl -l -v
```

You should see something like:

```
  NAME            STATE           VERSION
* Ubuntu-24.04    Running         2
```

That `2` in the VERSION column is what matters. If it says `1`, run:

```
wsl --set-version Ubuntu-24.04 2
```

## What Just Happened

You installed a full Linux environment inside Windows running on a real Linux kernel. Your Windows files are at `/mnt/c/`, your Linux files are separate, and you can use real Linux tools (apt, bash, ssh, node, python, everything).

This is where your AI dev environment will live.

## Next Step

→ [Install OpenClaw in WSL](/guides/install-openclaw)

---

**Stuck?** [Book a 1-on-1 session](/book) and I'll walk you through it.

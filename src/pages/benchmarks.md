---
title: Benchmarks
description: See how Athenna performs in comparison to other frameworks.
---

# Benchmarks

See how Athenna performs in comparison to other frameworks.

## Code

All the code used in this benchmark is available in the
[AthennaIO/Benchmarks](https://github.com/AthennaIO/Benchmarks) repository.

## Environment

The environment used to run the benchmarks:

```bash title="npx envinfo --system --binaries"
  System:
    OS: macOS 15.1.1
    CPU: (8) arm64 Apple M1 Pro
    Memory: 94.91 MB / 16.00 GB
    Shell: 3.7.1 - /opt/homebrew/bin/fish
  Binaries:
    Node: 21.7.1 - /opt/homebrew/bin/node
    npm: 10.5.0 - /opt/homebrew/bin/npm
    pnpm: 9.13.2 - ~/Library/pnpm/pnpm
```

## Results

| Framework | Version | Requests/sec |
|:----------|:-------:|-------------:|
| Fastify   |  4.24.3 |       80.810 |
| Athenna   |  5.11.0 |       72.569 |
| AdonisJS  |   5.0.0 |       54.366 |
| Express   |  4.18.2 |       16.005 |
| NestJS    |   9.0.0 |       15.291 |

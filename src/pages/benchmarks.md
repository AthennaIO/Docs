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
    OS: macOS 12.2.1
    CPU: (8) arm64 Apple M1
    Memory: 456.81 MB / 8.00 GB
    Shell: 5.8 - /bin/zsh
  Binaries:
    Node: 20.8.1 - ~/.nvm/versions/node/v20.8.1/bin/node
    npm: 10.1.0 - ~/.nvm/versions/node/v20.8.1/bin/npm
```

## Results

| Framework | Version | Requests/sec |
|:----------|:-------:|-------------:|
| Fastify   |  4.24.3 |      119.741 |
| Athenna   |  4.27.0 |      102.781 |
| AdonisJS  |   5.0.0 |       84.915 |
| Express   |  4.18.2 |       22.713 |
| NestJS    |   9.0.0 |       20.192 |

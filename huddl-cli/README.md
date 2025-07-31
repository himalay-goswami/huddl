# huddl-cli

A standalone CLI to interact with the Huddl server API.

## Features
- Login, log, report, and terminal commands
- Terminal UI using @xterm/xterm
- Packaged as a binary for Homebrew

## Usage
```
huddl login
huddl log "message"
huddl report
huddl terminal
```

## Build & Package
```
npm install
npm run build
npm run pkg
```

## Homebrew
See the Homebrew formula in `Formula/huddl.rb` (to be created).

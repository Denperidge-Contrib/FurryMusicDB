# Furry Music DB

## Local Development Instructions

* Install Docker for your host operating system (or Docker Desktop)

### First Time Launch

```bash
cp dev.dist.env dev.env

make build
make up
```

### To Shutdown

```bash
make down
```

### To access container BASH

```bash
make bash
```

Or as root:

```bash
make bash-root
```

### Generate favicons
Note: This requires [Node.js to be installed](https://nodejs.org/)
- If the favicon changed, change [favicons.js](favicons.js) `cacheBustingQueryParam` to a higher number
- 
  ```bash
  make favicons
  ```


If this commands fails on **Windows**, try updating npm (`npm install -g npm@latest`) () or installing `@img/sharp-win32-x64`.

# Furry Music DB

## How-to

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


## Reference
### Project structure


### TypeScript config
- Paths: `~` and `!` are defined paths. Keep these in sync between [package.json](package.json), [tsconfig.json](tsconfig.json) and [frontend/vite.config.ts](frontend/vite.config.ts)

https://github.com/twbs/bootstrap/issues/40621#issuecomment-2259718141

## Explanation
### Everythings in one Dockerfile
Originally the frontend was client-side rendered, and merely served statically from the Caddy thats together with the PHP stuff. With server-side-rendering being added, the express server got added to the same Dockerfile to ensure compatibility with the existing `make bash` toolings, and limiting overhead. Over time splitting up these parts into different Dockerfiles might be better, but this is currently a one-volunteer coding job.

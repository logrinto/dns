[![Build Status](https://travis-ci.org/logrinto/dns.svg?branch=master)](https://travis-ci.org/logrinto/dns)

# DNS entries for logrinto.ch


## ⚠️ ATTENTION! This Repo is watched by Travis-CI and all pushes to master get synced!



## Technic
Synchronize all DNS-Records with [DNSControl](https://github.com/StackExchange/dnscontrol)

## Test
```sh
export CLOUDFLARE_API_TOKEN=xxx
dnscontrol preview
```

## Preview with Docker
```sh
docker run --rm -it \
-e CLOUDFLARE_API_TOKEN="$CLOUDFLARE_API_TOKEN" \
-v $(pwd)/:/dns/ stackexchange/dnscontrol \
dnscontrol preview
```

## Convert Zone-File with Docker
```sh
docker run --rm -it \
-e CLOUDFLARE_API_TOKEN="$CLOUDFLARE_API_TOKEN" \
-v $(pwd)/:/dns/ stackexchange/dnscontrol \
convertzone logrinto.ch logrinto.ch.txt > logrinto.js

```

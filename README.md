[![Build Status](https://travis-ci.org/logrinto/dns.svg?branch=master)](https://travis-ci.org/logrinto/dns)

# DNS Sync
Synchronize all my DNS-Records with [DNSControl](https://github.com/StackExchange/dnscontrol)

## ⚠️ ATTENTION! This Repo is watched by Travis-CI and all pushes to master get synced!
If you push to `develop` you just see the preview of the changes in [Travis CI](https://travis-ci.org/signalwerk/dns)

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

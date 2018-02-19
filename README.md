## Dev Mode - works

```
$ yarn dev
```

next.js server returns HTTP 200 for `page/woot_no_prefetch.js`:
![page/woot_no_prefetch.js](http://ia.gs/0w2a1F2S143x/Image%202018-02-19%20at%202.02.25%20PM.png)

## Prod Mode / via next.js - works

```
$ yarn build
$ yarn start
```

next.js server returns HTTP 200 for `page/woot_no_prefetch.js`:
![page/woot_no_prefetch.js](http://ia.gs/1N2p2u370S0x/Image%202018-02-19%20at%202.04.52%20PM.png)

## Prod Mode / via static CDN - doesn't work

```
$ yarn build
$ yarn prod
```

cdn server returns HTTP 404 for `page/woot_no_prefetch.js`:
![page/woot_no_prefetch.js](http://ia.gs/0J2T0k3N3o3I/Image%202018-02-19%20at%202.06.34%20PM.png)

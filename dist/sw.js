/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0a27a4163254fc8fce870c8cc3a3f94f"
  },
  {
    "url": "css/main.css",
    "revision": "46cb8ab7705c27b865bdffd27d575aff"
  },
  {
    "url": "images/background.jpg",
    "revision": "ff3e4ec824c44809bb4bcfac88350bd6"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "23be9a6f230e09bc228020dac5d51809"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "19876143d1afc992d44dd928ca9d4361"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "91671f9fbbdb1caf1289bad8abb90be6"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "710a163762289be0c866d49d6b59d29f"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "5f1aafd338a4d59429871d718684b8d8"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "eba19070c8601fa1ac0a5586a95ca1d1"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "c78156e1d110453d77b7ae81eab799b8"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "b7903fffd3d9c541fff718e608121fc4"
  },
  {
    "url": "index.html",
    "revision": "2f19c0525469fe650ff6568ea8fd0d69"
  },
  {
    "url": "js/main.js",
    "revision": "b2cb74f40a65aa2134709fe36bcd0e9a"
  },
  {
    "url": "manifest.json",
    "revision": "2afdc0ecccaec3c587f760691c0e0af5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

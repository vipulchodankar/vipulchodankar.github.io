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
    "url": "css/main.css",
    "revision": "84e844d1054633f54cbb1069657e6fea"
  },
  {
    "url": "images/background.jpg",
    "revision": "ff3e4ec824c44809bb4bcfac88350bd6"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "1a857049a3a93def898b71959e1818e9"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "855e09be025db8a4a901299ac4d75246"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "351627625463dd10f26c01e3b7422a74"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "423bb9b9eeb0cca9f61857ab3d946617"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "a41621f3c9874812030c6614346da299"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "5a22d7f75b20d2de96a8bf47f4edab19"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "6f2119da3c367e4b66cf3f98242615d9"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "2ffcf5176069a341eef8f249633e4d22"
  },
  {
    "url": "index.html",
    "revision": "2faa6bc4a8d1af28c6102f336970d290"
  },
  {
    "url": "js/main.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "manifest.json",
    "revision": "7f1aa99b4ebae4c350399242bb875f99"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

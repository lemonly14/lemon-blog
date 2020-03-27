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
    "revision": "93d1ed7e591d74bd24f897e0f346c270"
  },
  {
    "url": "about/index.html",
    "revision": "a12e86d83af42c39aa1b50be3428689d"
  },
  {
    "url": "assets/css/0.styles.b5ea0845.css",
    "revision": "ee4fd4f44d4c6be175d41d9b25851ec1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b83808ab.js",
    "revision": "e41b398179633567eefe640b19e346f1"
  },
  {
    "url": "assets/js/11.b09ec79c.js",
    "revision": "7c3adc03b8750e48fb182344c9c56736"
  },
  {
    "url": "assets/js/12.354344af.js",
    "revision": "a0e6b446105958deca461dde5934878a"
  },
  {
    "url": "assets/js/13.9d6a9736.js",
    "revision": "3a0313c883302ed355dcfd01b5684eeb"
  },
  {
    "url": "assets/js/14.79b7806f.js",
    "revision": "5e6252a16f65e2e7b215cca744d09eff"
  },
  {
    "url": "assets/js/15.e2f990f8.js",
    "revision": "18e3db0633a04f131268304c7830b913"
  },
  {
    "url": "assets/js/16.43082fae.js",
    "revision": "0f986c7cc4540538871afe2f4e3c500a"
  },
  {
    "url": "assets/js/17.9f43c629.js",
    "revision": "6e71929761d4fa551664817f22f93830"
  },
  {
    "url": "assets/js/18.b80b6ec1.js",
    "revision": "e08f7fabcc0e969f20cb5f55b853177f"
  },
  {
    "url": "assets/js/19.cd62dfa0.js",
    "revision": "15ddf90f6296073e1e151d5eb800ca2b"
  },
  {
    "url": "assets/js/2.9beadc42.js",
    "revision": "850966372e8f06bcc9e460abd58e73e8"
  },
  {
    "url": "assets/js/20.eb8b07b4.js",
    "revision": "3923a3b2eb584a13a984adf48f74e6be"
  },
  {
    "url": "assets/js/21.5c013efc.js",
    "revision": "fa7ab62cc3b8c431f14dd206c72040d1"
  },
  {
    "url": "assets/js/22.db3d23d9.js",
    "revision": "6a87088d478b0ba8694b91a9a1cec128"
  },
  {
    "url": "assets/js/23.7119549e.js",
    "revision": "fdee10461005753dfb51e032bda5bc97"
  },
  {
    "url": "assets/js/24.022a053b.js",
    "revision": "2fbeb7cc42bf005d1ca20867e440a8a0"
  },
  {
    "url": "assets/js/25.c529aabf.js",
    "revision": "a0e9b4c9ecd6f093400fd8fea212d2fe"
  },
  {
    "url": "assets/js/26.3f9045af.js",
    "revision": "87e0a55859640c4cd8cdba4c96599055"
  },
  {
    "url": "assets/js/27.ee77163e.js",
    "revision": "365e7bb78ac9466ce9873daff2e9e7d4"
  },
  {
    "url": "assets/js/28.965214d9.js",
    "revision": "fa4132e26088dc915b1dc07275e7781c"
  },
  {
    "url": "assets/js/29.60eed1d8.js",
    "revision": "e1411ef12c15b8ad00fdf75ea4a2644e"
  },
  {
    "url": "assets/js/3.d1c63113.js",
    "revision": "eac1a7e6d89c3e4ca6a2fe5fbfcbb8a9"
  },
  {
    "url": "assets/js/30.c228cd48.js",
    "revision": "c05dd404c758f4ca1b66081737cc9b3b"
  },
  {
    "url": "assets/js/31.970af0f7.js",
    "revision": "d8abe212d0237a6ac26b7eed6183697d"
  },
  {
    "url": "assets/js/32.e712c6da.js",
    "revision": "6d1de692dc3c41f03f899622a8d3c6f7"
  },
  {
    "url": "assets/js/33.b74b9318.js",
    "revision": "8880fe8fe9424755a54410569ce57224"
  },
  {
    "url": "assets/js/4.0bf027e2.js",
    "revision": "bddfaa0d77d26d97467f2813df49bfea"
  },
  {
    "url": "assets/js/5.4313a8b4.js",
    "revision": "c7274789f22fb64a79ebe4a011cb365f"
  },
  {
    "url": "assets/js/6.8fec2ca9.js",
    "revision": "76d82406cae37f639607cd4f976e4826"
  },
  {
    "url": "assets/js/7.4c6d5fa2.js",
    "revision": "725fefb017e404e2d7fa8d69952579f5"
  },
  {
    "url": "assets/js/8.545a1f03.js",
    "revision": "e9267402f236be64f89021823f08854c"
  },
  {
    "url": "assets/js/9.a4b1a04d.js",
    "revision": "09be6b835225c46615857f39d7dc2a6b"
  },
  {
    "url": "assets/js/app.62ffa7b1.js",
    "revision": "a88acfac792b777417128abc4161a6bf"
  },
  {
    "url": "guide/index.html",
    "revision": "50a1685f4c8b211f14c151816800e3a0"
  },
  {
    "url": "index.html",
    "revision": "cbddd6ba409d4804513abb9a3b30840d"
  },
  {
    "url": "logo.jpg",
    "revision": "106d33dc410e38c125b743eb5b4ce547"
  },
  {
    "url": "passages/css-property-display/index.html",
    "revision": "89d918ca148a7ac4850fa01fdd90846b"
  },
  {
    "url": "passages/css-property-line-height-middle/index.html",
    "revision": "713dc474b7b387e848a5dd9c4d77046d"
  },
  {
    "url": "passages/css-property-line-height/index.html",
    "revision": "0408569551e984a24d3262edac8e2b45"
  },
  {
    "url": "passages/css-property-position/index.html",
    "revision": "716fba85f80b9ba6c630dc12aef2ce49"
  },
  {
    "url": "passages/node-2-5/index.html",
    "revision": "fd262eceed9ea109a941cb7d063fda13"
  },
  {
    "url": "passages/node-2-6/index.html",
    "revision": "56c938f127d4d37a0200dcce14930767"
  },
  {
    "url": "passages/node-2-7/index.html",
    "revision": "96fddee9eae13f17a31d8dec78fc92f5"
  },
  {
    "url": "passages/node-2-8/index.html",
    "revision": "eedde70b4510016cdea050bb8e66fd37"
  },
  {
    "url": "passages/node-2-9/index.html",
    "revision": "a7e57280f72a3b1062ed2e8a2be35865"
  },
  {
    "url": "passages/node-3-1/index.html",
    "revision": "35f3f2b5466d1d96c76e26ad3200d2b4"
  },
  {
    "url": "passages/node-3-2/index.html",
    "revision": "a048922cb91cc53475834ebebc06933a"
  },
  {
    "url": "passages/node-3-3/index.html",
    "revision": "9a19f745f42a0af7f0789e01883610c3"
  },
  {
    "url": "passages/node-3-4/index.html",
    "revision": "b0414f1a236afa91efe88110b9def3b1"
  },
  {
    "url": "passages/node-3-5/index.html",
    "revision": "e8544ea200bdef683f3c50a2cce08143"
  },
  {
    "url": "passages/node-3-6/index.html",
    "revision": "eb102e598bf97966f2a9f70d0cd34f4d"
  },
  {
    "url": "passages/node-3-7/index.html",
    "revision": "5c87a58a824f49bb64be398de3cbea13"
  },
  {
    "url": "passages/node-4-1/index.html",
    "revision": "ee0c0f9ef13b4d9e67d28deb5673363e"
  },
  {
    "url": "passages/node-4-2/index.html",
    "revision": "fa7a3f4b4c2016dcd8f238615838bfa1"
  },
  {
    "url": "passages/node-4-3/index.html",
    "revision": "d45cfc1ffe05f45b5257daa98b55662f"
  },
  {
    "url": "passages/node-4-4/index.html",
    "revision": "863c5e2cc1059f77ab1a51695b446ca9"
  },
  {
    "url": "passages/node-4-5/index.html",
    "revision": "4a2adce1b2ea514856ac6953472ba36d"
  },
  {
    "url": "passages/node-4-6/index.html",
    "revision": "d89ac36b87ad3f42f08cc5d36507f348"
  },
  {
    "url": "passages/node-4-7/index.html",
    "revision": "aa37793e5511338ef9c58440733b68fd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

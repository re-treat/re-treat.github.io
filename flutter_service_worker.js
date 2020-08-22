'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "cf57034b04149ffcfd8302cd9cb35118",
"/": "cf57034b04149ffcfd8302cd9cb35118",
"main.dart.js": "995d9d430cad157829b860af5fd08279",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a594bbd1f78ba44019ed348da2ba1466",
"assets/images/feeling-the-vastness-practice-awe-narrative-mostafa-meraji.jpeg": "27acd05e84bd80a77abd7b1bffe4f41c",
"assets/images/feeling-compassion-for-yourself-timothy-l-brock.jpeg": "cd34deff3108289cefbb82ad59be4396",
"assets/images/learn-and-practice-financial-self-care-fotografierende.jpeg": "6d2caa590e59b6031eaa69bbb389e615",
"assets/images/ending-1.jpeg": "6a5a98715bd937e4e1824a19cc027747",
"assets/images/ending-1.svg": "76e24964c9c93fdf658244a80fec2a56",
"assets/images/your-assertive-script-build-assertiveness-for-yourself-thom-holmes.jpeg": "8793223bd4e566eb189d4e18b55cc033",
"assets/images/ending-3.svg": "b06b85ac8570a6cd3ab53be794961a18",
"assets/images/ending-2.svg": "4c2f7f5c6fc096dd085aaa16972c91c4",
"assets/images/ending-3.jpeg": "6b111d9684ba8ed005ff8049999977c4",
"assets/images/reframe-your-negative-thoughts-aziz-acharki.jpeg": "f789da12f32372ccd6fb6afc767d9d84",
"assets/images/ending-2.jpeg": "1bb2bb4b13ed54de53ea9fc2146cbc59",
"assets/images/tackling-four-horsemen-in-relationships-and-conflicts-arifur-rahman.jpeg": "297ceb583ccc4b18065bfed2796a6202",
"assets/images/get_it_started-5-step-tackling-procrastination-bit-by-bit-sarah-kilian.jpeg": "c0ec1ca2f0c3913714a39a1f2139efc5",
"assets/images/letting-go-anger-through-compassion-tim-goedhart.jpeg": "d6c0e7a8f1f03268a2b349ec8757918f",
"assets/images/worst-case-senario-and-de-catastrophizing-your-fear-jamie-street.jpeg": "7c3a71db403a2ac46ca28d3e9cc94465",
"assets/images/directing-kindness-to-yourself-chris-liu.jpeg": "3ede323dc80fb802a45a1623c3448036",
"assets/images/visualizing-best-possible-self-mostafa-meraji.jpeg": "236cacd93954c0f457a04a994084e512",
"assets/AssetManifest.json": "a467eed4094142cb70973c5497eb5596",
"assets/NOTICES": "b4898af1a16d0923f406aad9db098ea0",
"assets/FontManifest.json": "2b21a9a7a3793e54577a13c833a3604c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_beautiful_popup/img/bg/authentication.png": "f35a4b18ce208c1a061b5b8e37f5c831",
"assets/packages/flutter_beautiful_popup/img/bg/term.png": "b926bcb493dd4f2149ddc1e6332aa978",
"assets/packages/flutter_beautiful_popup/img/bg/geolocation.png": "60467d11beb395f49687f6767093eeca",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_orange_2.png": "18b4c81e68a42ae97f7ade84cd6a893a",
"assets/packages/flutter_beautiful_popup/img/bg/red_packet.png": "3b9fb0d40d45c496eb6fdac6095c442e",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_blue.png": "d25afc3a9c26c2cbdd3f7d11e09958be",
"assets/packages/flutter_beautiful_popup/img/bg/gift.png": "9a75d6e641acc3d583c8a175d188a101",
"assets/packages/flutter_beautiful_popup/img/bg/success.png": "a7bf30ab41d44b9c52512b3cb5d813f3",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_green.png": "a6a384e73842482c3ab7424f78358cec",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_orange.png": "19fd0b66488935b9ec95b58a604c4f4e",
"assets/packages/flutter_beautiful_popup/img/bg/camera.png": "91b3327967e4e02747721a5f0d2fee9f",
"assets/packages/flutter_beautiful_popup/img/bg/coin.png": "cabd80db0d1f5aff7e881cb4267e2468",
"assets/packages/flutter_beautiful_popup/img/bg/notification.png": "b59cdd09d90f87673ddab1e97ec3e1cf",
"assets/packages/flutter_beautiful_popup/img/bg/fail.png": "8cc3ffefbf01c756932d25b62e6031ba",
"assets/packages/flutter_beautiful_popup/img/bg/thumb.png": "5b4693a8b6ff65d3dc619415e2bee11e",
"assets/fonts/OpenSans-SemiBold.ttf": "ba5cde21eeea0d57ab7efefc99596cce",
"assets/fonts/OpenSans-Light.ttf": "2d0bdc8df10dee036ca3bedf6f3647c6",
"assets/fonts/OpenSans-Italic.ttf": "f6238deb7f40a7a03134c11fb63ad387",
"assets/fonts/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "50a30d820370e6fad35249417605602f",
".git/config": "fcd0b7bec584c965201a5956f2c450c4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "b02bd2929cb61e0aa04e4071bfcff6c9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9e4a3654b880821e8eb43d12f97479cd",
".git/logs/refs/heads/main": "f5b2f837fd55481deb00934688307907",
".git/objects/04/00c4f5d3faa129ea444905b6f70171a8c312fb": "3f283c3a321ec073f7d560e1122f338f",
".git/objects/0a/4979ca001f064d689ffcd2179fcaa3e325dd47": "0ebd751475d5824c601dc9f57554fda8",
".git/objects/12/80472688ea67e32bab30fcb85b815bb36896cc": "8973b4c9137fa00d3c20c6edb242d6f3",
".git/objects/15/8b9b4ad00ba18f9e7f902cd602e3169e6ed208": "818b9b122ec4737daf95276750f75c2d",
".git/objects/17/d19daa82f4cbfb39acd6845bfdd1e5e1811630": "5248d2f197f51bf0467147b8aee9a8f0",
".git/objects/22/54dc91b07772c60d5b6bc8731385dff1ec4bb3": "66519cd42932bd4ae624d9be6e55eb20",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/36e16d6979afe08a7c040f9c4805ff795c09bd": "a6da535c986d60fc5a0ea976a2650bfd",
".git/objects/3c/8f16021720be155c2e9c98ce0593052f950aff": "82d97fc2dd7b9d155f3056f5f45a7b4f",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/55/e479f8b360b7eb5f256d5a00641c0d048b9fb6": "972214a8d8b02cd4bb90c46ad09894ca",
".git/objects/5d/036ae67da4012d816bc687b2a4940bb522b376": "0b227f22b9351f556ef2a255efda1a8f",
".git/objects/6d/bd7c2e6632e6402a986e003de93a330bdba7db": "2c93bbce9b362c82c635769ebebde7ed",
".git/objects/6e/1274ff1e11f5a649160a2879abd4d3b034f383": "b8839dd4f286f5b87a0149d8488af96d",
".git/objects/70/0678048988245df5eaaca30f6bf99c2ecd16b5": "b8f6cc7834888f1541a56101cbfc6521",
".git/objects/74/593aecb134bab7d9e19714896fd5ea323b6d6c": "f004fc6d99b8c3569d95460431b309f9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/84/ab16a9f46ff2d03e1ded1286a51de92eec0eaf": "3878a3ac1a69ecae7e89b9baed32e61a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/a88b78c61638e848b1c5d9487efa6fec07a458": "3162ea6e20e3274f5ea3c37465724716",
".git/objects/9d/d1991194c7013ddaaa634f54ce4a6d9d5eef9f": "74fb007277b4e845081b0e1a5b68c70c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/5f592fe2bff0eea640a684751aafda7a78953b": "978a018a08e4dd0a0fd3ef7467c32b82",
".git/objects/a4/574969b98d33dbd69c7c43c69fedf4416d1acb": "9404580b974e76a9ea7075cf19836c41",
".git/objects/a4/5c1c660f6f14470a69e6374183013feff0a0d9": "798c26e5e1854471bc0494a3fee9340c",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b5/f2538fbf9de48baa55b37b1ddfe2e06f4ba99e": "4657b8088a1722e733efcd1f73f0172c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/1fbc41948a706e5e509f46952b32b0c5cf52c7": "b131b5f01186ecc044a7bb07d25af2fd",
".git/objects/ca/43328bacf100e47a3e39ab135e695ee27cec86": "51071ebb0dac599bbf7383acd75f4f3f",
".git/objects/cb/987cd0722fc3565e062916f0be747492d31ab8": "7717a873c332fe64d929976a3cc41b67",
".git/objects/d2/213310cc974472f6e9989ff36aa3628522805f": "bc7f1b653c66269967a3ff601465ccb3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/8b888cb9bc9d6249a8afd4daa9a0510b3748b4": "e265dafb5e133b34896e7df9980bccbd",
".git/objects/e4/0026fd1d990bed20af0a362077d9a790f7f250": "91f128b19fcb18e9e105e37337e4bc7f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/d7c87b6d3d3a8f30d5bd3b39ae067e54a56f2e": "3e2c1eaca958e06a366948e590094f2f",
".git/objects/ef/5b0a5ba0ed7ea3943e0fcbeb35100ba80554bc": "627e8bd596590f5a9f958dfdf9836e9e",
".git/objects/f6/9c0d8ef7985aa444e23f64d1794105be3797dd": "f733c6059766a272c9fff7da90461fed",
".git/objects/f8/e93b05d61ad3dff235c86bb9a8e8fdd4ba53be": "3d785c60dc7d9bfbfaa166b2b8744b55",
".git/refs/heads/main": "1b3d8eb6601acec9a375a333a92c5265",
"assets/AssetManifest.json": "92537c97e1eab44fb3cd118f93e88d35",
"assets/assets/fonts/Trebuchet-MS-Italic.ttf": "dcaa26767d611686e37ecce157d86c72",
"assets/assets/fonts/Trebuchet_MS.ttf": "aa526f8c90a71f9a79a289a2b5962e52",
"assets/assets/icons/dart.png": "0a4777b993a114d9b9870727398bcac6",
"assets/assets/icons/facebook.png": "b3bce5a3d1e72db29b7ea8af683657d2",
"assets/assets/icons/flutter.png": "bc20ac3c833cdfbb9230c8a0dc483d46",
"assets/assets/icons/github.png": "431ebdb99a3fedf13499d6d46567613a",
"assets/assets/icons/hearty_plant_icon.png": "3c399cb0a2564d2b7ebf4bd4b81fb9fe",
"assets/assets/icons/java.png": "0414fcd53fdb6903fb57134fdd8a9af2",
"assets/assets/icons/javascript.png": "c7140ae897077ae303aa769001cd0619",
"assets/assets/icons/linkedin.png": "83c2b7690e4ce89c5ef92e09b585494b",
"assets/assets/icons/menu.png": "cc89c413a343cdb004646e395effec63",
"assets/assets/icons/python.png": "875d547546c810dc4b75ded02191c70e",
"assets/assets/icons/qualitiative_spss.png": "a59490ce3ef627a44e5ce9da44621662",
"assets/assets/icons/quantitative_py.png": "ce552ba71e1357948f98eb3a7fe159a4",
"assets/assets/images/avatar.jpg": "6a30bdcf915efb7ed379af9626c9bf7d",
"assets/assets/images/hearty_plant_banner.png": "323b4152ab43aa66f2d4bd6cbb0261f8",
"assets/assets/images/medkitB.jpg": "3ac0891f047e8aaa62a36b55eeed3310",
"assets/FontManifest.json": "9d27f6b6830b66a3d720efc28dadd67a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "c96cb6f4bd1f163a135151e5f808e5e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "49bc67ccb193f34f07c499cf8121221d",
"/": "49bc67ccb193f34f07c499cf8121221d",
"main.dart.js": "84bbd4a1d250255f79bfa284a33dd17a",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "426313f2f3133c2f20415344c4a22df3"
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
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

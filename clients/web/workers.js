if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      // navigator.serviceWorker.register('simple-worker.js').then(function(registration) {
      //   // Registration was successful
      //   console.log('simple service worker registration successful with scope: ', registration.scope);
      // }, function(err) {
      //   // registration failed :(
      //   console.log('simple service worker registration failed: ', err);
      // });

      navigator.serviceWorker.register('service-worker.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
(() => {
  "use strict";

  let e = null;
  self.onmessage = s => {
    if (s.data === "clear" && e) {
      clearInterval(e);
    }
  };
  e = setInterval(() => {
    self.postMessage("tick");
  }, 1000);
})();
var liamModule = {
  store: {
    barcodes: [],
    isSearching: false,
  },
  quaggaInit: function () {
    var self = this;
    Quagga.init({
        inputStream : {
          name : "Live",
          type : "LiveStream",
          target: document.querySelector('#barcode-scanner')    // Or '#yourElement' (optional)
        },
        constraints: {
          width: 200,
          height: 300,
          facingMode: "environment",
          deviceId: "7832475934759384534"
        },
        area: { // defines rectangle of the detection/localization area
          top: "0%",    // top offset
          right: "0%",  // right offset
          left: "0%",   // left offset
          bottom: "0%"  // bottom offset
        },
        singleChannel: false, // true: only the red color-channel is read
        decoder : {
          readers : ["ean_reader"]
        },
      }, function(err) {
          if (err) {
              console.log(err);
              return
          }
          console.log("Initialization finished. Ready to start");
          Quagga.start();
    });
    Quagga.onDetected(function (result) {
      if (self.store.barcodes.length < 10) {
        console.log(self.store.barcodes);
        self.store.barcodes.push(result.codeResult.code);
      } else if (self.store.barcodes.length === 10 && !self.store.isSearching){
        self.findProductByBarcodes();
      }
    });
  },
  findProductByBarcodes: function () {
    var self = this;
    this.store.isSearching = true;
    var product = API.getProduct(self.store.barcodes, function (product) {
      console.log(product);
      if (product.length > 0) {
        self.store.isSearching = false;
      }
    });
  },
}
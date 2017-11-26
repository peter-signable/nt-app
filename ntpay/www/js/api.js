var url = 'http://junction2017.dev/';

var API = {
  store: {
    token: null,
  },
  bindEvents: function () {
    $('.js-login-form').on('submit', this.signIn.bind(this));
  },
  signIn: function (e) {
    var self = this;
    e.preventDefault();
    $.ajax({
      url: url + 'login',
      method: 'POST',
      data: {
        email: $('.js-email').val(),
        password: $('.js-password').val(),
      },
      success: function (response) {
        self.store.token = response.data.access_token;
        localStorage.setItem('token', self.store.token);
        window.location = '/index.html';
      },
    });

    return false;
  },
  getProduct: function (barcodes, callback) {
    var self = this;
    $.ajax({
      url: url + 'products/get-from-barcodes',
      method: 'POST',
      data: {
        barcodes: barcodes,
      },
      dataType: 'json',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
      // headers: {
          // "Authorization":"Bearer " + self.store.token,
      // },
      success: function (response) {
        console.log(response);
        if (typeof callback == 'function') {
          callback(response.data);
        }
      },
    });
  },
  init: function () {
    this.bindEvents();
  },
};

API.init();
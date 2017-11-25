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
      method: 'post',
      data: {
        email: $('.js-email').val(),
        password: $('.js-password').val(),
      },
      success: function (response) {
        self.store.token = response.access_token;
      },
    });

    return false;
  },
  init: function () {
    this.bindEvents();
  },
};

API.init();
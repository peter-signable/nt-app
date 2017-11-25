var url = 'http://signable.dev/';

var API = {
  store: {
    token: null,
  },
  signIn: function() {
    $.ajax({
      url: url + 'login',
      method: 'post',
      data: {
        email: $('.js-email').val(),
        password: $('.js-password').val(),
      },
    });
  },
};
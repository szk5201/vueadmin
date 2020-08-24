"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _index = _interopRequireDefault(require("@/store/index.js"));

var _baseUrl = _interopRequireDefault(require("./baseUrl"));

var _elementUi = require("element-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var http = {};

var instance = _axios["default"].create({
  timeout: 5000,
  baseURL: _baseUrl["default"],
  validateStatus: function validateStatus(status) {
    var loading;

    switch (status) {
      case 400:
        _elementUi.Message.error('请求出错');

        loading = document.getElementById('ajaxLoading');
        loading.style.display = 'none';
        break;

      case 401:
        _elementUi.Message.warning({
          message: '授权失败，请重新登录'
        });

        _index["default"].commit('LOGIN_OUT');

        setTimeout(function () {
          window.location.reload();
        }, 1000);
        return;

      case 403:
        _elementUi.Message.warning({
          message: '拒绝访问'
        });

        break;

      case 404:
        loading = document.getElementById('ajaxLoading');
        loading.style.display = 'none';

        _elementUi.Message.warning({
          message: '请求错误,未找到该资源'
        });

        break;

      case 500:
        loading = document.getElementById('ajaxLoading');
        loading.style.display = 'none';

        _elementUi.Message.warning({
          message: '服务端错误'
        });

        break;
    }

    return status >= 200 && status < 300;
  }
}); // 添加请求拦截器


instance.interceptors.request.use(function (config) {
  // 请求头添加token
  if (_index["default"].state.UserToken) {
    config.headers.Authorization = "Bearer ".concat(_index["default"].state.UserToken);
  }

  return config;
}, function (error) {
  return Promise.reject(error);
}); // 响应拦截器即异常处理

instance.interceptors.response.use(function (response) {
  return response.data;
}, function (err) {
  if (err && err.response) {} else {
    err.message = '连接服务器失败';
  } // Message.error({
  //     message: err.message
  // })


  return Promise.reject(err.response);
});

http.get = function (url, options) {
  var loading;

  if (!options || options.isShowLoading !== false) {
    loading = document.getElementById('ajaxLoading');
    loading.style.display = 'block';
  }

  return new Promise(function (resolve, reject) {
    instance.get(url, options).then(function (response) {
      if (!options || options.isShowLoading !== false) {
        loading = document.getElementById('ajaxLoading');
        loading.style.display = 'none';
      }

      if (response.code === 1) {
        resolve(response.data);
      } else {
        _elementUi.Message.error({
          message: response.msg
        });

        reject(response.msg);
      }
    })["catch"](function (e) {
      console.log(e);
    });
  });
};

http.yuekejuGet = function (url, options) {
  var loading;

  if (!options || options.isShowLoading !== false) {
    loading = document.getElementById('ajaxLoading');
    loading.style.display = 'block';
  }

  return new Promise(function (resolve, reject) {
    instance.get(url, options).then(function (response) {
      if (!options || options.isShowLoading !== false) {
        loading = document.getElementById('ajaxLoading');
        loading.style.display = 'none';
      }

      if (response.isSuccess) {
        resolve(response.returnDate);
      } else {
        _elementUi.Message.error({
          message: response.message
        });

        reject(response.message);
      }
    })["catch"](function (e) {
      if (!options || options.isShowLoading !== false) {
        loading = document.getElementById('ajaxLoading');
        loading.style.display = 'none';
      }

      _elementUi.Message.error({
        message: '请求超时！'
      });
    });
  });
};

http.yuekejuPost = function (url, data, options) {
  var loading;

  if (!options || options.isShowLoading !== false) {
    loading = document.getElementById('ajaxLoading');
    loading.style.display = 'block';
  }

  return new Promise(function (resolve, reject) {
    instance.post(url, data, options).then(function (response) {
      if (!options || options.isShowLoading !== false) {
        loading = document.getElementById('ajaxLoading');
        loading.style.display = 'none';
      }

      if (response.isSuccess) {
        resolve(response);
      } else {
        _elementUi.Message.error({
          message: response.message
        });

        reject(response.message);
      }
    })["catch"](function (e) {
      if (!options || options.isShowLoading !== false) {
        loading = document.getElementById('ajaxLoading');
        loading.style.display = 'none';
      }

      _elementUi.Message.error({
        message: '请求超时！'
      });
    });
  });
};

http.yuekejuDelete = function (url, data, options) {
  var loading;

  if (!options || options.isShowLoading !== false) {
    loading = document.getElementById('ajaxLoading');
    loading.style.display = 'block';
  }

  return new Promise(function (resolve, reject) {
    instance["delete"](url, data, options).then(function (response) {
      debugger;

      if (!options || options.isShowLoading !== false) {
        loading = document.getElementById('ajaxLoading');
        loading.style.display = 'none';
      }

      if (response.isSuccess) {
        resolve(response);
      } else {
        _elementUi.Message.error({
          message: response.message
        });

        reject(response.message);
      }
    })["catch"](function (e) {
      if (!options || options.isShowLoading !== false) {
        loading = document.getElementById('ajaxLoading');
        loading.style.display = 'none';
      }

      _elementUi.Message.error({
        message: '请求超时！'
      });
    });
  });
};

http.post = function (url, data, options) {
  var loading;

  if (!options || options.isShowLoading !== false) {
    loading = document.getElementById('ajaxLoading');
    loading.style.display = 'block';
  }

  return new Promise(function (resolve, reject) {
    instance.post(url, data, options).then(function (response) {
      if (!options || options.isShowLoading !== false) {
        loading = document.getElementById('ajaxLoading');
        loading.style.display = 'none';
      }

      if (response.code === 1) {
        resolve(response.data);
      } else {
        _elementUi.Message.error({
          message: response.msg
        });

        reject(response.msg);
      }
    })["catch"](function (e) {
      console.log(e);
    });
  });
};

var _default = http;
exports["default"] = _default;
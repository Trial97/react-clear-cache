'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(
          n,
          k,
          d.get
            ? d
            : {
                enumerable: true,
                get: function () {
                  return e[k];
                },
              },
        );
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/ _interopNamespaceDefault(React);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var __assign = function () {
  __assign =
    Object.assign ||
    function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === 'function')
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (
        e.indexOf(p[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, p[i])
      )
        t[p[i]] = s[p[i]];
    }
  return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P
      ? value
      : new P(function (resolve) {
          resolve(value);
        });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator['throw'](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done
        ? resolve(result.value)
        : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: [],
    },
    f,
    y,
    t,
    g;
  return (
    (g = { next: verb(0), throw: verb(1), return: verb(2) }),
    typeof Symbol === 'function' &&
      (g[Symbol.iterator] = function () {
        return this;
      }),
    g
  );
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError('Generator is already executing.');
    while ((g && ((g = 0), op[0] && (_ = 0)), _))
      try {
        if (
          ((f = 1),
          y &&
            (t =
              op[0] & 2
                ? y['return']
                : op[0]
                ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                : y.next) &&
            !(t = t.call(y, op[1])).done)
        )
          return t;
        if (((y = 0), t)) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (
              !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
              (op[0] === 6 || op[0] === 2)
            ) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}

typeof SuppressedError === 'function'
  ? SuppressedError
  : function (error, suppressed, message) {
      var e = new Error(message);
      return (
        (e.name = 'SuppressedError'),
        (e.error = error),
        (e.suppressed = suppressed),
        e
      );
    };

var STORAGE_KEY = 'APP_VERSION';
var usePersistedState = function (name, defaultValue) {
  var _a = React__namespace.useState(defaultValue),
    value = _a[0],
    setValue = _a[1];
  var nameRef = React__namespace.useRef(name);
  React__namespace.useEffect(function () {
    try {
      var storedValue = localStorage.getItem(name);
      if (storedValue !== null) setValue(storedValue);
      else localStorage.setItem(name, defaultValue);
    } catch (_a) {
      setValue(defaultValue);
    }
  }, []);
  React__namespace.useEffect(
    function () {
      try {
        localStorage.setItem(nameRef.current, value);
      } catch (_a) {}
    },
    [value],
  );
  React__namespace.useEffect(
    function () {
      var lastName = nameRef.current;
      if (name !== lastName) {
        try {
          localStorage.setItem(name, value);
          nameRef.current = name;
          localStorage.removeItem(lastName);
        } catch (_a) {}
      }
    },
    [name],
  );
  return [value, setValue];
};
var defaultProps = {
  duration: 60 * 1000,
  auto: false,
  storageKey: STORAGE_KEY,
  basePath: '',
  filename: 'meta.json',
};
var ClearCacheContext = React__namespace.createContext({});
var ClearCacheProvider = function (props) {
  var children = props.children,
    otherProps = __rest(props, ['children']);
  var result = useClearCache(otherProps);
  return React__namespace.createElement(
    ClearCacheContext.Provider,
    { value: result },
    children,
  );
};
var useClearCacheCtx = function () {
  return React__namespace.useContext(ClearCacheContext);
};
var fetchCacheTimeout;
var useClearCache = function (props) {
  var _a = __assign(__assign({}, defaultProps), props),
    duration = _a.duration,
    auto = _a.auto,
    storageKey = _a.storageKey,
    basePath = _a.basePath,
    filename = _a.filename;
  var _b = React__namespace.useState(true),
    loading = _b[0],
    setLoading = _b[1];
  var _c = usePersistedState(storageKey, ''),
    appVersion = _c[0],
    setAppVersion = _c[1];
  var _d = React__namespace.useState(true),
    isLatestVersion = _d[0],
    setIsLatestVersion = _d[1];
  var _e = React__namespace.useState(appVersion),
    latestVersion = _e[0],
    setLatestVersion = _e[1];
  function setVersion(version) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, setAppVersion(version)];
          case 1:
            _a.sent();
            return [2 /*return*/];
        }
      });
    });
  }
  var emptyCacheStorage = function (version) {
    return __awaiter(void 0, void 0, void 0, function () {
      var cacheKeys;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!('caches' in window)) return [3 /*break*/, 3];
            return [4 /*yield*/, window.caches.keys()];
          case 1:
            cacheKeys = _a.sent();
            return [
              4 /*yield*/,
              Promise.all(
                cacheKeys.map(function (key) {
                  window.caches.delete(key);
                }),
              ),
            ];
          case 2:
            _a.sent();
            _a.label = 3;
          case 3:
            // clear browser cache and reload page
            return [4 /*yield*/, setVersion(version || latestVersion)];
          case 4:
            // clear browser cache and reload page
            _a.sent();
            window.location.replace(window.location.href);
            return [2 /*return*/];
        }
      });
    });
  };
  // Replace any last slash with an empty space
  var baseUrl = basePath + '/' + filename;
  function fetchMeta() {
    try {
      fetch(baseUrl, {
        cache: 'no-store',
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (meta) {
          var newVersion = meta.version;
          var currentVersion = appVersion;
          var isUpdated = newVersion === currentVersion;
          if (!isUpdated && !auto) {
            setLatestVersion(newVersion);
            setLoading(false);
            if (appVersion) {
              setIsLatestVersion(false);
            } else {
              setVersion(newVersion);
            }
          } else if (!isUpdated && auto) {
            emptyCacheStorage(newVersion);
          } else {
            setIsLatestVersion(true);
            setLoading(false);
          }
        });
    } catch (err) {
      console.error(err);
    }
  }
  React__namespace.useEffect(
    function () {
      fetchCacheTimeout = setInterval(function () {
        return fetchMeta();
      }, duration);
      return function () {
        clearInterval(fetchCacheTimeout);
      };
    },
    [loading],
  );
  var startVersionCheck = React__namespace.useRef(function () {});
  var stopVersionCheck = React__namespace.useRef(function () {});
  startVersionCheck.current = function () {
    if (window.navigator.onLine) {
      fetchCacheTimeout = setInterval(function () {
        return fetchMeta();
      }, duration);
    }
  };
  stopVersionCheck.current = function () {
    clearInterval(fetchCacheTimeout);
  };
  React__namespace.useEffect(function () {
    window.addEventListener('focus', startVersionCheck.current);
    window.addEventListener('blur', stopVersionCheck.current);
  }, []);
  React__namespace.useEffect(function () {
    fetchMeta();
  }, []);
  return {
    loading: loading,
    isLatestVersion: isLatestVersion,
    emptyCacheStorage: emptyCacheStorage,
    latestVersion: latestVersion,
  };
};
var ClearCache = function (props) {
  var _a = useClearCache(props),
    loading = _a.loading,
    isLatestVersion = _a.isLatestVersion,
    emptyCacheStorage = _a.emptyCacheStorage;
  var children = props.children;
  return children({
    loading: loading,
    isLatestVersion: isLatestVersion,
    emptyCacheStorage: emptyCacheStorage,
  });
};

exports.ClearCacheProvider = ClearCacheProvider;
exports.default = ClearCache;
exports.useClearCache = useClearCache;
exports.useClearCacheCtx = useClearCacheCtx;
//# sourceMappingURL=index.js.map

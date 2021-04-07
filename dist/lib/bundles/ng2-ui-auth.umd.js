(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng2-ui-auth', ['exports', '@angular/core', '@angular/common/http', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ng2-ui-auth'] = {}, global.ng.core, global.ng.common.http, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, http, rxjs, operators) { 'use strict';

    /*! *****************************************************************************
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
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
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
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
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
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
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
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    /**
     * Created by Ron on 17/12/2015.
     */
    function joinUrl(baseUrl, url) {
        if (/^(?:[a-z]+:)?\/\//i.test(url)) {
            return url;
        }
        var joined = [baseUrl, url].join('/');
        return joined
            .replace(/[\/]+/g, '/')
            .replace(/\/\?/g, '?')
            .replace(/\/\#/g, '#')
            .replace(/\:\//g, '://');
    }
    function buildQueryString(obj) {
        return Object.keys(obj)
            .map(function (key) { return (!!obj[key] ? encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]) : key); })
            .join('&');
    }
    function getWindowOrigin(w) {
        if (!w && typeof window !== 'undefined') {
            w = window;
        }
        try {
            if (!w || !w.location) {
                return null;
            }
            if (!w.location.origin) {
                return w.location.protocol + "//" + w.location.hostname + (w.location.port ? ':' + w.location.port : '');
            }
            return w.location.origin;
        }
        catch (error) {
            return null;
            // ignore DOMException: Blocked a frame with origin from accessing a cross-origin frame.
            // error instanceof DOMException && error.name === 'SecurityError'
        }
    }

    var ɵ0 = function () { return encodeURIComponent(Math.random()
        .toString(36)
        .substr(2)); }, ɵ1 = function () { return encodeURIComponent(Math.random()
        .toString(36)
        .substr(2)); };
    var defaultProviders = {
        facebook: {
            name: 'facebook',
            url: '/auth/facebook',
            redirectUri: getWindowOrigin() + "/",
            authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
            additionalUrlParams: {
                display: 'popup'
            },
            scope: ['email'],
            scopeDelimiter: ',',
            oauthType: '2.0',
            popupOptions: { width: 580, height: 400 }
        },
        google: {
            name: 'google',
            url: '/auth/google',
            authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
            additionalUrlParams: {
                display: 'popup',
                prompt: undefined,
                login_hint: undefined,
                access_type: undefined,
                include_granted_scopes: undefined,
                'openid.realm': undefined,
                hd: undefined
            },
            scope: ['openid', 'email'],
            scopeDelimiter: ' ',
            oauthType: '2.0',
            popupOptions: { width: 452, height: 633 },
            state: ɵ0
        },
        github: {
            name: 'github',
            url: '/auth/github',
            authorizationEndpoint: 'https://github.com/login/oauth/authorize',
            scope: ['user:email'],
            scopeDelimiter: ' ',
            oauthType: '2.0',
            popupOptions: { width: 1020, height: 618 }
        },
        instagram: {
            name: 'instagram',
            url: '/auth/instagram',
            authorizationEndpoint: 'https://api.instagram.com/oauth/authorize',
            scope: ['basic'],
            scopeDelimiter: '+',
            oauthType: '2.0'
        },
        linkedin: {
            name: 'linkedin',
            url: '/auth/linkedin',
            authorizationEndpoint: 'https://www.linkedin.com/uas/oauth2/authorization',
            scope: ['r_emailaddress'],
            scopeDelimiter: ' ',
            oauthType: '2.0',
            popupOptions: { width: 527, height: 582 },
            state: 'STATE'
        },
        twitter: {
            name: 'twitter',
            url: '/auth/twitter',
            authorizationEndpoint: 'https://api.twitter.com/oauth/authenticate',
            oauthType: '1.0',
            popupOptions: { width: 495, height: 645 }
        },
        twitch: {
            name: 'twitch',
            url: '/auth/twitch',
            authorizationEndpoint: 'https://api.twitch.tv/kraken/oauth2/authorize',
            scope: ['user_read'],
            scopeDelimiter: ' ',
            additionalUrlParams: {
                display: 'popup'
            },
            oauthType: '2.0',
            popupOptions: { width: 500, height: 560 }
        },
        live: {
            name: 'live',
            url: '/auth/live',
            authorizationEndpoint: 'https://login.live.com/oauth20_authorize.srf',
            additionalUrlParams: {
                display: 'popup'
            },
            scope: ['wl.emails'],
            scopeDelimiter: ' ',
            oauthType: '2.0',
            popupOptions: { width: 500, height: 560 }
        },
        yahoo: {
            name: 'yahoo',
            url: '/auth/yahoo',
            authorizationEndpoint: 'https://api.login.yahoo.com/oauth2/request_auth',
            scope: [],
            scopeDelimiter: ',',
            oauthType: '2.0',
            popupOptions: { width: 559, height: 519 }
        },
        bitbucket: {
            name: 'bitbucket',
            url: '/auth/bitbucket',
            authorizationEndpoint: 'https://bitbucket.org/site/oauth2/authorize',
            redirectUri: getWindowOrigin() + "/",
            scope: ['email'],
            scopeDelimiter: ',',
            oauthType: '2.0',
            popupOptions: { width: 1028, height: 529 }
        },
        spotify: {
            name: 'spotify',
            url: '/auth/spotify',
            authorizationEndpoint: 'https://accounts.spotify.com/authorize',
            scope: ['', 'user-read-email'],
            scopeDelimiter: ',',
            oauthType: '2.0',
            popupOptions: { width: 500, height: 530 },
            state: ɵ1
        }
    };

    (function (StorageType) {
        StorageType["NONE"] = "none";
        StorageType["MEMORY"] = "memory";
        StorageType["LOCAL_STORAGE"] = "localStorage";
        StorageType["SESSION_STORAGE"] = "sessionStorage";
        StorageType["COOKIE"] = "cookie";
        StorageType["SESSION_COOKIE"] = "sessionCookie";
    })(exports.StorageType || (exports.StorageType = {}));

    var CONFIG_OPTIONS = new core.InjectionToken('config.options');
    var ConfigService = /** @class */ (function () {
        function ConfigService(options) {
            this.options = {
                withCredentials: false,
                tokenRoot: null,
                baseUrl: '/',
                loginUrl: '/auth/login',
                signupUrl: '/auth/signup',
                unlinkUrl: '/auth/unlink/',
                tokenName: 'token',
                tokenSeparator: '_',
                tokenPrefix: 'ng2-ui-auth',
                authHeader: 'Authorization',
                authToken: 'Bearer',
                storageType: exports.StorageType.LOCAL_STORAGE,
                cordova: undefined,
                resolveToken: function (response, config) {
                    var accessToken = response && (response.access_token || response.token || response.data);
                    if (!accessToken) {
                        // console.warn('No token found');
                        return null;
                    }
                    if (typeof accessToken === 'string') {
                        return accessToken;
                    }
                    if (typeof accessToken !== 'object') {
                        // console.warn('No token found');
                        return null;
                    }
                    var tokenRootData = config.tokenRoot &&
                        config.tokenRoot.split('.').reduce(function (o, x) {
                            return o[x];
                        }, accessToken);
                    var token = tokenRootData ? tokenRootData[config.tokenName] : accessToken[config.tokenName];
                    if (token) {
                        return token;
                    }
                    // const tokenPath = this.tokenRoot ? this.tokenRoot + '.' + this.tokenName : this.tokenName;
                    // console.warn('Expecting a token named "' + tokenPath);
                    return null;
                },
                providers: {}
            };
            this.options = Object.assign(Object.assign({}, this.options), options);
            this.mergeWithDefaultProviders();
        }
        ConfigService.prototype.updateProviders = function (providers) {
            this.options.providers = Object.assign(Object.assign({}, (this.options.providers || {})), providers);
            this.mergeWithDefaultProviders();
        };
        ConfigService.prototype.mergeWithDefaultProviders = function () {
            var _this = this;
            Object.keys(this.options.providers).forEach(function (key) {
                if (key in defaultProviders) {
                    _this.options.providers[key] = Object.assign(Object.assign({}, defaultProviders[key]), _this.options.providers[key]);
                }
            });
        };
        return ConfigService;
    }());
    ConfigService.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [CONFIG_OPTIONS,] }] }
    ]; };

    var StorageService = /** @class */ (function () {
        function StorageService() {
        }
        return StorageService;
    }());

    var BrowserStorageService = /** @class */ (function (_super) {
        __extends(BrowserStorageService, _super);
        function BrowserStorageService(config) {
            var _this = _super.call(this) || this;
            _this.config = config;
            _this.store = {};
            _this.storageType = exports.StorageType.MEMORY;
            if (!_this.updateStorageType(config.options.storageType)) {
                console.warn(config.options.storageType + ' is not available.');
            }
            return _this;
        }
        BrowserStorageService.prototype.updateStorageType = function (storageType) {
            var isStorageAvailable = this.checkIsStorageAvailable(storageType);
            if (!isStorageAvailable) {
                return false;
            }
            this.storageType = storageType;
            return true;
        };
        BrowserStorageService.prototype.get = function (key) {
            switch (this.storageType) {
                case exports.StorageType.COOKIE:
                case exports.StorageType.SESSION_COOKIE:
                    return this.getCookie(key);
                case exports.StorageType.LOCAL_STORAGE:
                case exports.StorageType.SESSION_STORAGE:
                    return window[this.storageType].getItem(key);
                case exports.StorageType.MEMORY:
                    return this.store[key];
                case exports.StorageType.NONE:
                default:
                    return null;
            }
        };
        BrowserStorageService.prototype.set = function (key, value, date) {
            switch (this.storageType) {
                case exports.StorageType.COOKIE:
                case exports.StorageType.SESSION_COOKIE:
                    this.setCookie(key, value, this.storageType === exports.StorageType.COOKIE ? date : '');
                    break;
                case exports.StorageType.LOCAL_STORAGE:
                case exports.StorageType.SESSION_STORAGE:
                    window[this.storageType].setItem(key, value);
                    break;
                case exports.StorageType.MEMORY:
                    this.store[key] = value;
                    break;
                case exports.StorageType.NONE:
                default:
                    break;
            }
        };
        BrowserStorageService.prototype.remove = function (key) {
            switch (this.storageType) {
                case exports.StorageType.COOKIE:
                case exports.StorageType.SESSION_COOKIE:
                    this.removeCookie(key);
                    break;
                case exports.StorageType.LOCAL_STORAGE:
                case exports.StorageType.SESSION_STORAGE:
                    window[this.storageType].removeItem(key);
                    break;
                case exports.StorageType.MEMORY:
                    delete this.store[key];
                    break;
                case exports.StorageType.NONE:
                default:
                    break;
            }
        };
        BrowserStorageService.prototype.checkIsStorageAvailable = function (storageType) {
            switch (storageType) {
                case exports.StorageType.COOKIE:
                case exports.StorageType.SESSION_COOKIE:
                    return this.isCookieStorageAvailable();
                case exports.StorageType.LOCAL_STORAGE:
                case exports.StorageType.SESSION_STORAGE:
                    return this.isWindowStorageAvailable(storageType);
                case exports.StorageType.NONE:
                case exports.StorageType.MEMORY:
                    return true;
                default:
                    return false;
            }
        };
        BrowserStorageService.prototype.isWindowStorageAvailable = function (storageType) {
            try {
                var supported = window && storageType in window && window[storageType] !== null;
                if (supported) {
                    var key = Math.random()
                        .toString(36)
                        .substring(7);
                    window[storageType].setItem(key, '');
                    window[storageType].removeItem(key);
                }
                return supported;
            }
            catch (e) {
                return false;
            }
        };
        BrowserStorageService.prototype.isCookieStorageAvailable = function () {
            try {
                var supported = document && 'cookie' in document;
                if (supported) {
                    var key = Math.random()
                        .toString(36)
                        .substring(7);
                    this.setCookie(key, 'test', new Date(Date.now() + 60 * 1000).toUTCString());
                    var value = this.getCookie(key);
                    this.removeCookie(key);
                    return value === 'test';
                }
                return false;
            }
            catch (e) {
                return false;
            }
        };
        BrowserStorageService.prototype.setCookie = function (key, value, expires, path) {
            if (expires === void 0) { expires = ''; }
            if (path === void 0) { path = '/'; }
            document.cookie = key + "=" + value + (expires ? "; expires=" + expires : '') + "; path=" + path;
        };
        BrowserStorageService.prototype.removeCookie = function (key, path) {
            if (path === void 0) { path = '/'; }
            this.setCookie(key, '', new Date(0).toUTCString(), path);
        };
        BrowserStorageService.prototype.getCookie = function (key) {
            return document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)" + key + "\\s*\\=\\s*([^;]*).*$)|^.*$"), '$1');
        };
        return BrowserStorageService;
    }(StorageService));
    BrowserStorageService.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    BrowserStorageService.ctorParameters = function () { return [
        { type: ConfigService }
    ]; };

    var SharedService = /** @class */ (function () {
        function SharedService(storage, config) {
            this.storage = storage;
            this.config = config;
            this.tokenName = this.config.options.tokenPrefix
                ? [this.config.options.tokenPrefix, this.config.options.tokenName].join(this.config.options.tokenSeparator)
                : this.config.options.tokenName;
        }
        SharedService.prototype.getToken = function () {
            return this.storage.get(this.tokenName);
        };
        SharedService.prototype.getPayload = function (token) {
            if (token === void 0) { token = this.getToken(); }
            if (token && token.split('.').length === 3) {
                try {
                    var base64Url = token.split('.')[1];
                    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                    return JSON.parse(this.b64DecodeUnicode(base64));
                }
                catch (e) {
                    return undefined;
                }
            }
        };
        SharedService.prototype.setToken = function (response) {
            if (!response) {
                // console.warn('Can\'t set token without passing a value');
                return;
            }
            var token;
            if (typeof response === 'string') {
                token = response;
            }
            else {
                token = this.config.options.resolveToken(response, this.config.options);
            }
            if (token) {
                var expDate = this.getExpirationDate(token);
                this.storage.set(this.tokenName, token, expDate ? expDate.toUTCString() : '');
            }
        };
        SharedService.prototype.removeToken = function () {
            this.storage.remove(this.tokenName);
        };
        SharedService.prototype.isAuthenticated = function (token) {
            if (token === void 0) { token = this.getToken(); }
            // a token is present
            if (token) {
                // token with a valid JWT format XXX.YYY.ZZZ
                if (token.split('.').length === 3) {
                    // could be a valid JWT or an access token with the same format
                    try {
                        var base64Url = token.split('.')[1];
                        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                        var exp = JSON.parse(this.b64DecodeUnicode(base64)).exp;
                        // jwt with an optional expiration claims
                        if (exp) {
                            var isExpired = Math.round(new Date().getTime() / 1000) >= exp;
                            if (isExpired) {
                                // fail: Expired token
                                this.storage.remove(this.tokenName);
                                return false;
                            }
                            else {
                                // pass: Non-expired token
                                return true;
                            }
                        }
                    }
                    catch (e) {
                        // pass: Non-JWT token that looks like JWT
                        return true;
                    }
                }
                // pass: All other tokens
                return true;
            }
            // lail: No token at all
            return false;
        };
        SharedService.prototype.getExpirationDate = function (token) {
            if (token === void 0) { token = this.getToken(); }
            var payload = this.getPayload(token);
            if (payload && payload.exp && Math.round(new Date().getTime() / 1000) < payload.exp) {
                var date = new Date(0);
                date.setUTCSeconds(payload.exp);
                return date;
            }
            return null;
        };
        SharedService.prototype.logout = function () {
            var _this = this;
            return rxjs.Observable.create(function (observer) {
                _this.storage.remove(_this.tokenName);
                observer.next();
                observer.complete();
            });
        };
        SharedService.prototype.setStorageType = function (type) {
            return this.storage.updateStorageType(type);
        };
        SharedService.prototype.b64DecodeUnicode = function (str) {
            return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) { return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2); }).join(''));
        };
        return SharedService;
    }());
    SharedService.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    SharedService.ctorParameters = function () { return [
        { type: StorageService },
        { type: ConfigService }
    ]; };

    var JwtInterceptor = /** @class */ (function () {
        function JwtInterceptor(shared, config) {
            this.shared = shared;
            this.config = config;
        }
        JwtInterceptor.prototype.intercept = function (req, next) {
            var _a;
            var _b = this.config.options, authHeader = _b.authHeader, authToken = _b.authToken;
            var token = this.shared.getToken();
            var isAuthenticated = this.shared.isAuthenticated();
            var newReq = isAuthenticated && !req.headers.has(authHeader) ? req.clone({ setHeaders: (_a = {}, _a[authHeader] = authToken + " " + token, _a) }) : req;
            return next.handle(newReq);
        };
        return JwtInterceptor;
    }());
    JwtInterceptor.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    JwtInterceptor.ctorParameters = function () { return [
        { type: SharedService },
        { type: ConfigService }
    ]; };

    var PopupService = /** @class */ (function () {
        function PopupService() {
        }
        PopupService.prototype.open = function (url, options, cordova) {
            if (cordova === void 0) { cordova = this.isCordovaApp(); }
            var stringifiedOptions = this.stringifyOptions(this.prepareOptions(options.popupOptions));
            var windowName = cordova ? '_blank' : options.name;
            var popupWindow = typeof window !== 'undefined' ? window.open(url, windowName, stringifiedOptions) : null;
            if (popupWindow) {
                if (popupWindow.focus) {
                    popupWindow.focus();
                }
                return rxjs.of(popupWindow);
            }
            return rxjs.empty();
        };
        PopupService.prototype.waitForClose = function (popupWindow, cordova, redirectUri) {
            if (cordova === void 0) { cordova = this.isCordovaApp(); }
            if (redirectUri === void 0) { redirectUri = getWindowOrigin(); }
            return cordova ? this.eventListener(popupWindow, redirectUri) : this.pollPopup(popupWindow, redirectUri);
        };
        PopupService.prototype.eventListener = function (popupWindow, redirectUri) {
            var _this = this;
            if (redirectUri === void 0) { redirectUri = getWindowOrigin(); }
            if (!popupWindow) {
                throw new Error('Popup was not created');
            }
            return rxjs.merge(rxjs.fromEvent(popupWindow, 'exit').pipe(operators.delay(100), operators.map(function () {
                throw new Error('Authentication Canceled');
            })), rxjs.fromEvent(popupWindow, 'loadstart')).pipe(operators.switchMap(function (event) {
                if (!popupWindow || popupWindow.closed) {
                    return rxjs.Observable.throw(new Error('Authentication Canceled'));
                }
                if (event.url.indexOf(redirectUri) !== 0) {
                    return rxjs.empty();
                }
                var parser = document.createElement('a');
                parser.href = event.url;
                if (parser.search || parser.hash) {
                    var queryParams = parser.search.substring(1).replace(/\/$/, '');
                    var hashParams = parser.hash.substring(1).replace(/\/$/, '');
                    var hash = _this.parseQueryString(hashParams);
                    var qs = _this.parseQueryString(queryParams);
                    var allParams = Object.assign(Object.assign({}, qs), hash);
                    popupWindow.close();
                    if (allParams.error) {
                        throw allParams.error;
                    }
                    else {
                        return rxjs.of(allParams);
                    }
                }
                return rxjs.empty();
            }), operators.take(1));
        };
        PopupService.prototype.pollPopup = function (popupWindow, redirectUri) {
            var _this = this;
            if (redirectUri === void 0) { redirectUri = getWindowOrigin(); }
            return rxjs.interval(50).pipe(operators.switchMap(function () {
                if (!popupWindow || popupWindow.closed) {
                    return rxjs.throwError(new Error('Authentication Canceled'));
                }
                var popupWindowOrigin = getWindowOrigin(popupWindow);
                if (popupWindowOrigin &&
                    (redirectUri.indexOf(popupWindowOrigin) === 0 || popupWindowOrigin.indexOf(redirectUri) === 0) &&
                    (popupWindow.location.search || popupWindow.location.hash)) {
                    var queryParams = popupWindow.location.search.substring(1).replace(/\/$/, '');
                    var hashParams = popupWindow.location.hash.substring(1).replace(/[\/$]/, '');
                    var hash = _this.parseQueryString(hashParams);
                    var qs = _this.parseQueryString(queryParams);
                    popupWindow.close();
                    var allParams = Object.assign(Object.assign({}, qs), hash);
                    if (allParams.error) {
                        throw allParams.error;
                    }
                    else {
                        return rxjs.of(allParams);
                    }
                }
                return rxjs.empty();
            }), operators.take(1));
        };
        PopupService.prototype.prepareOptions = function (options) {
            options = options || {};
            var width = options.width || 500;
            var height = options.height || 500;
            return Object.assign({ width: width,
                height: height, left: window.screenX + (window.outerWidth - width) / 2, top: window.screenY + (window.outerHeight - height) / 2.5, toolbar: options.visibleToolbar ? 'yes' : 'no' }, options);
        };
        PopupService.prototype.stringifyOptions = function (options) {
            return Object.keys(options)
                .map(function (key) { return (options[key] === null || options[key] === undefined ? key : key + '=' + options[key]); })
                .join(',');
        };
        PopupService.prototype.parseQueryString = function (joinedKeyValue) {
            var key;
            var value;
            return joinedKeyValue.split('&').reduce(function (obj, keyValue) {
                if (keyValue) {
                    value = keyValue.split('=');
                    key = decodeURIComponent(value[0]);
                    obj[key] = typeof value[1] !== 'undefined' ? decodeURIComponent(value[1]) : true;
                }
                return obj;
            }, {});
        };
        PopupService.prototype.isCordovaApp = function () {
            return typeof cordova === 'object' || (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1);
        };
        return PopupService;
    }());
    PopupService.decorators = [
        { type: core.Injectable }
    ];

    var Oauth1Service = /** @class */ (function () {
        function Oauth1Service(http, popup, config) {
            this.http = http;
            this.popup = popup;
            this.config = config;
        }
        Oauth1Service.prototype.open = function (oauthOptions, userData) {
            var _this = this;
            var serverUrl = this.config.options.baseUrl ? joinUrl(this.config.options.baseUrl, oauthOptions.url) : oauthOptions.url;
            return this.popup.open('about:blank', oauthOptions, this.config.options.cordova).pipe(operators.switchMap(function (popupWindow) { return _this.http.post(serverUrl, oauthOptions).pipe(operators.tap(function (authorizationData) { return popupWindow
                ? popupWindow.location.replace([oauthOptions.authorizationEndpoint, buildQueryString(authorizationData)].join('?'))
                : undefined; }), operators.switchMap(function (authorizationData) { return _this.popup
                .waitForClose(popupWindow, _this.config.options.cordova, oauthOptions.redirectUri)
                .pipe(operators.map(function (oauthData) { return ({ authorizationData: authorizationData, oauthData: oauthData }); })); })); }), operators.switchMap(function (_a) {
                var authorizationData = _a.authorizationData, oauthData = _a.oauthData;
                return _this.exchangeForToken(oauthOptions, authorizationData, oauthData, userData);
            }));
        };
        Oauth1Service.prototype.exchangeForToken = function (oauthOptions, authorizationData, oauthData, userData) {
            var body = { oauthOptions: oauthOptions, authorizationData: authorizationData, oauthData: oauthData, userData: userData };
            var _a = this.config.options, withCredentials = _a.withCredentials, baseUrl = _a.baseUrl;
            var _b = oauthOptions.method, method = _b === void 0 ? 'POST' : _b, url = oauthOptions.url;
            var exchangeForTokenUrl = baseUrl ? joinUrl(baseUrl, url) : url;
            return this.http.request(method, exchangeForTokenUrl, { body: body, withCredentials: withCredentials });
        };
        return Oauth1Service;
    }());
    Oauth1Service.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    Oauth1Service.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: PopupService },
        { type: ConfigService }
    ]; };

    var Oauth2Service = /** @class */ (function () {
        function Oauth2Service(http, popup, config) {
            this.http = http;
            this.popup = popup;
            this.config = config;
        }
        Oauth2Service.prototype.open = function (oauthOptions, userData) {
            var _this = this;
            var authorizationData = this.getAuthorizationData(oauthOptions);
            var url = [oauthOptions.authorizationEndpoint, buildQueryString(authorizationData)].join('?');
            return this.popup.open(url, oauthOptions, this.config.options.cordova).pipe(operators.switchMap(function (window) { return window ? _this.popup.waitForClose(window, _this.config.options.cordova, oauthOptions.redirectUri) : rxjs.empty(); }), operators.switchMap(function (oauthData) {
                // when no server URL provided, return popup params as-is.
                // this is for a scenario when someone wishes to opt out from
                // satellizer's magic by doing authorization code exchange and
                // saving a token manually.
                if (oauthOptions.responseType === 'token' || !oauthOptions.url) {
                    return rxjs.of(oauthData);
                }
                if (oauthData.state && oauthData.state !== authorizationData.state) {
                    throw new Error('OAuth "state" mismatch');
                }
                return _this.exchangeForToken(oauthOptions, authorizationData, oauthData, userData);
            }));
        };
        Oauth2Service.prototype.exchangeForToken = function (options, authorizationData, oauthData, userData) {
            var body = { authorizationData: authorizationData, oauthData: oauthData, userData: userData };
            var _a = this.config.options, baseUrl = _a.baseUrl, withCredentials = _a.withCredentials;
            var url = options.url, _b = options.method, method = _b === void 0 ? 'POST' : _b;
            var exchangeForTokenUrl = baseUrl ? joinUrl(baseUrl, url) : url;
            return this.http.request(method, exchangeForTokenUrl, { body: body, withCredentials: withCredentials });
        };
        Oauth2Service.prototype.getAuthorizationData = function (options) {
            var _a = options.responseType, responseType = _a === void 0 ? 'code' : _a, clientId = options.clientId, _b = options.redirectUri, redirectUri = _b === void 0 ? getWindowOrigin() || '' : _b, _c = options.scopeDelimiter, scopeDelimiter = _c === void 0 ? ',' : _c, scope = options.scope, state = options.state, additionalUrlParams = options.additionalUrlParams;
            var resolvedState = typeof state === 'function' ? state() : state;
            return __spread([
                ['response_type', responseType],
                ['client_id', clientId],
                ['redirect_uri', redirectUri]
            ], (state ? [['state', resolvedState]] : []), (scope ? [['scope', scope.join(scopeDelimiter)]] : []), (additionalUrlParams
                ? Object.keys(additionalUrlParams).map(function (key) {
                    var value = additionalUrlParams[key];
                    if (typeof value === 'string') {
                        return [key, value];
                    }
                    else if (typeof value === 'function') {
                        return [key, value()];
                    }
                    else if (value === null) {
                        return [key, ''];
                    }
                    return ['', ''];
                })
                : [])).filter(function (_) { return !!_[0]; })
                .reduce(function (acc, next) {
                var _a;
                return (Object.assign(Object.assign({}, acc), (_a = {}, _a[next[0]] = next[1], _a)));
            }, {});
        };
        return Oauth2Service;
    }());
    Oauth2Service.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    Oauth2Service.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: PopupService },
        { type: ConfigService }
    ]; };

    var OauthService = /** @class */ (function () {
        function OauthService(http$1, shared, config, popup) {
            this.http = http$1;
            this.shared = shared;
            this.config = config;
            this.popup = popup;
            this.depProviders = [
                { provide: http.HttpClient, useValue: this.http },
                { provide: PopupService, useValue: this.popup },
                { provide: ConfigService, useValue: this.config }
            ];
            this.deps = [http.HttpClient, PopupService, ConfigService];
        }
        OauthService.prototype.authenticate = function (name, userData) {
            var _this = this;
            var provider = this.config.options.providers[name].oauthType === '1.0'
                ? core.Injector.create(__spread(this.depProviders, [{ provide: Oauth1Service, deps: this.deps }])).get(Oauth1Service)
                : core.Injector.create(__spread(this.depProviders, [{ provide: Oauth2Service, deps: this.deps }])).get(Oauth2Service);
            return provider.open(this.config.options.providers[name], userData || {}).pipe(operators.tap(function (response) {
                // this is for a scenario when someone wishes to opt out from
                // satellizer's magic by doing authorization code exchange and
                // saving a token manually.
                if (_this.config.options.providers[name].url) {
                    _this.shared.setToken(response);
                }
            }));
        };
        OauthService.prototype.unlink = function (provider, url, method) {
            if (url === void 0) { url = joinUrl(this.config.options.baseUrl, this.config.options.unlinkUrl); }
            if (method === void 0) { method = 'POST'; }
            return this.http.request(method, url, { body: { provider: provider } });
        };
        return OauthService;
    }());
    OauthService.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    OauthService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: SharedService },
        { type: ConfigService },
        { type: PopupService }
    ]; };

    var LocalService = /** @class */ (function () {
        function LocalService(http, shared, config) {
            this.http = http;
            this.shared = shared;
            this.config = config;
        }
        LocalService.prototype.login = function (user, url) {
            var _this = this;
            return this.http
                .post(url || joinUrl(this.config.options.baseUrl, this.config.options.loginUrl), user)
                .pipe(operators.tap(function (data) { return _this.shared.setToken(data); }));
        };
        LocalService.prototype.signup = function (user, url) {
            return this.http.post(url || joinUrl(this.config.options.baseUrl, this.config.options.signupUrl), user);
        };
        return LocalService;
    }());
    LocalService.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    LocalService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: SharedService },
        { type: ConfigService }
    ]; };

    var AuthService = /** @class */ (function () {
        function AuthService(shared, local, oauth) {
            this.shared = shared;
            this.local = local;
            this.oauth = oauth;
        }
        AuthService.prototype.login = function (user, url) {
            return this.local.login(user, url);
        };
        AuthService.prototype.signup = function (user, url) {
            return this.local.signup(user, url);
        };
        AuthService.prototype.logout = function () {
            return this.shared.logout();
        };
        AuthService.prototype.authenticate = function (name, userData) {
            return this.oauth.authenticate(name, userData);
        };
        AuthService.prototype.link = function (name, userData) {
            return this.oauth.authenticate(name, userData);
        };
        AuthService.prototype.unlink = function (provider, url) {
            return this.oauth.unlink(provider, url);
        };
        AuthService.prototype.isAuthenticated = function () {
            return this.shared.isAuthenticated();
        };
        AuthService.prototype.getToken = function () {
            return this.shared.getToken();
        };
        AuthService.prototype.setToken = function (token) {
            this.shared.setToken(token);
        };
        AuthService.prototype.removeToken = function () {
            this.shared.removeToken();
        };
        AuthService.prototype.getPayload = function () {
            return this.shared.getPayload();
        };
        AuthService.prototype.setStorageType = function (type) {
            return this.shared.setStorageType(type);
        };
        AuthService.prototype.getExpirationDate = function () {
            return this.shared.getExpirationDate();
        };
        return AuthService;
    }());
    AuthService.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: SharedService },
        { type: LocalService },
        { type: OauthService }
    ]; };

    var Ng2UiAuthModule = /** @class */ (function () {
        function Ng2UiAuthModule() {
        }
        Ng2UiAuthModule.forRoot = function (configOptions, defaultJwtInterceptor) {
            if (defaultJwtInterceptor === void 0) { defaultJwtInterceptor = true; }
            return {
                ngModule: Ng2UiAuthModule,
                providers: __spread((configOptions ? [{ provide: CONFIG_OPTIONS, useValue: configOptions }] : []), [
                    { provide: ConfigService, useClass: ConfigService, deps: [CONFIG_OPTIONS] },
                    { provide: StorageService, useClass: BrowserStorageService, deps: [ConfigService] },
                    { provide: SharedService, useClass: SharedService, deps: [StorageService, ConfigService] },
                    { provide: LocalService, useClass: LocalService, deps: [http.HttpClient, SharedService, ConfigService] },
                    { provide: PopupService, useClass: PopupService, deps: [ConfigService] },
                    { provide: OauthService, useClass: OauthService, deps: [http.HttpClient, SharedService, ConfigService, PopupService] },
                    { provide: AuthService, useClass: AuthService, deps: [SharedService, LocalService, OauthService] }
                ], (defaultJwtInterceptor
                    ? [{ provide: http.HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true, deps: [SharedService, ConfigService] }]
                    : []))
            };
        };
        return Ng2UiAuthModule;
    }());
    Ng2UiAuthModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [http.HttpClientModule],
                    declarations: [],
                    exports: []
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AuthService = AuthService;
    exports.BrowserStorageService = BrowserStorageService;
    exports.CONFIG_OPTIONS = CONFIG_OPTIONS;
    exports.ConfigService = ConfigService;
    exports.JwtInterceptor = JwtInterceptor;
    exports.LocalService = LocalService;
    exports.Ng2UiAuthModule = Ng2UiAuthModule;
    exports.Oauth1Service = Oauth1Service;
    exports.Oauth2Service = Oauth2Service;
    exports.OauthService = OauthService;
    exports.PopupService = PopupService;
    exports.SharedService = SharedService;
    exports.StorageService = StorageService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng2-ui-auth.umd.js.map

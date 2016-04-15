mainMoudle.controller('urlCodeCtrl', ['$scope', function ($scope) {
    tempClear();
    $scope.encodeUrl = function (type) {
        //1表示encode，2表示decode
        if (type==1) {
            $scope.resultData = encodeURI($scope.originalData);
        } else {
            $scope.resultData = decodeURI($scope.originalData);
        }
    }

    $scope.clear = function () {
        tempClear();
    }
    function tempClear() {
        $scope.originalData = "";
        $scope.resultData = "";
    }

}])
.controller("base64CodeCtrl", function ($scope) {

    function zs(){
        //(function (global) {
        //    'use strict';
        //    // existing version for noConflict()
        //    var _Base64 = global.Base64;
        //    var version = "2.1.9";
        //    // if node.js, we use Buffer
        //    var buffer;
        //    if (typeof module !== 'undefined' && module.exports) {
        //        try {
        //            buffer = require('buffer').Buffer;
        //        } catch (err) { }
        //    }
        //    // constants
        //    var b64chars
        //        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        //    var b64tab = function (bin) {
        //        var t = {};
        //        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        //        return t;
        //    }(b64chars);
        //    var fromCharCode = String.fromCharCode;
        //    // encoder stuff
        //    var cb_utob = function (c) {
        //        if (c.length < 2) {
        //            var cc = c.charCodeAt(0);
        //            return cc < 0x80 ? c
        //                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
        //                                + fromCharCode(0x80 | (cc & 0x3f)))
        //                : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
        //                   + fromCharCode(0x80 | ((cc >>> 6) & 0x3f))
        //                   + fromCharCode(0x80 | (cc & 0x3f)));
        //        } else {
        //            var cc = 0x10000
        //                + (c.charCodeAt(0) - 0xD800) * 0x400
        //                + (c.charCodeAt(1) - 0xDC00);
        //            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
        //                    + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
        //                    + fromCharCode(0x80 | ((cc >>> 6) & 0x3f))
        //                    + fromCharCode(0x80 | (cc & 0x3f)));
        //        }
        //    };
        //    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
        //    var utob = function (u) {
        //        return u.replace(re_utob, cb_utob);
        //    };
        //    var cb_encode = function (ccc) {
        //        var padlen = [0, 2, 1][ccc.length % 3],
        //        ord = ccc.charCodeAt(0) << 16
        //            | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
        //            | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
        //        chars = [
        //            b64chars.charAt(ord >>> 18),
        //            b64chars.charAt((ord >>> 12) & 63),
        //            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
        //            padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
        //        ];
        //        return chars.join('');
        //    };
        //    var btoa = global.btoa ? function (b) {
        //        return global.btoa(b);
        //    } : function (b) {
        //        return b.replace(/[\s\S]{1,3}/g, cb_encode);
        //    };
        //    var _encode = buffer ? function (u) {
        //        return (u.constructor === buffer.constructor ? u : new buffer(u))
        //        .toString('base64')
        //    }
        //    : function (u) { return btoa(utob(u)) }
        //    ;
        //    var encode = function (u, urisafe) {
        //        return !urisafe
        //            ? _encode(String(u))
        //            : _encode(String(u)).replace(/[+\/]/g, function (m0) {
        //                return m0 == '+' ? '-' : '_';
        //            }).replace(/=/g, '');
        //    };
        //    var encodeURI = function (u) { return encode(u, true) };
        //    // decoder stuff
        //    var re_btou = new RegExp([
        //        '[\xC0-\xDF][\x80-\xBF]',
        //        '[\xE0-\xEF][\x80-\xBF]{2}',
        //        '[\xF0-\xF7][\x80-\xBF]{3}'
        //    ].join('|'), 'g');
        //    var cb_btou = function (cccc) {
        //        switch (cccc.length) {
        //            case 4:
        //                var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
        //                    | ((0x3f & cccc.charCodeAt(1)) << 12)
        //                    | ((0x3f & cccc.charCodeAt(2)) << 6)
        //                    | (0x3f & cccc.charCodeAt(3)),
        //                offset = cp - 0x10000;
        //                return (fromCharCode((offset >>> 10) + 0xD800)
        //                        + fromCharCode((offset & 0x3FF) + 0xDC00));
        //            case 3:
        //                return fromCharCode(
        //                    ((0x0f & cccc.charCodeAt(0)) << 12)
        //                        | ((0x3f & cccc.charCodeAt(1)) << 6)
        //                        | (0x3f & cccc.charCodeAt(2))
        //                );
        //            default:
        //                return fromCharCode(
        //                    ((0x1f & cccc.charCodeAt(0)) << 6)
        //                        | (0x3f & cccc.charCodeAt(1))
        //                );
        //        }
        //    };
        //    var btou = function (b) {
        //        return b.replace(re_btou, cb_btou);
        //    };
        //    var cb_decode = function (cccc) {
        //        var len = cccc.length,
        //        padlen = len % 4,
        //        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
        //            | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
        //            | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0)
        //            | (len > 3 ? b64tab[cccc.charAt(3)] : 0),
        //        chars = [
        //            fromCharCode(n >>> 16),
        //            fromCharCode((n >>> 8) & 0xff),
        //            fromCharCode(n & 0xff)
        //        ];
        //        chars.length -= [0, 0, 2, 1][padlen];
        //        return chars.join('');
        //    };
        //    var atob = global.atob ? function (a) {
        //        return global.atob(a);
        //    } : function (a) {
        //        return a.replace(/[\s\S]{1,4}/g, cb_decode);
        //    };
        //    var _decode = buffer ? function (a) {
        //        return (a.constructor === buffer.constructor
        //                ? a : new buffer(a, 'base64')).toString();
        //    }
        //    : function (a) { return btou(atob(a)) };
        //    var decode = function (a) {
        //        return _decode(
        //            String(a).replace(/[-_]/g, function (m0) { return m0 == '-' ? '+' : '/' })
        //                .replace(/[^A-Za-z0-9\+\/]/g, '')
        //        );
        //    };
        //    var noConflict = function () {
        //        var Base64 = global.Base64;
        //        global.Base64 = _Base64;
        //        return Base64;
        //    };
        //    // export Base64
        //    global.Base64 = {
        //        VERSION: version,
        //        atob: atob,
        //        btoa: btoa,
        //        fromBase64: decode,
        //        toBase64: encode,
        //        utob: utob,
        //        encode: encode,
        //        encodeURI: encodeURI,
        //        btou: btou,
        //        decode: decode,
        //        noConflict: noConflict
        //    };
        //    // if ES5 is available, make Base64.extendString() available
        //    if (typeof Object.defineProperty === 'function') {
        //        var noEnum = function (v) {
        //            return { value: v, enumerable: false, writable: true, configurable: true };
        //        };
        //        global.Base64.extendString = function () {
        //            Object.defineProperty(
        //                String.prototype, 'fromBase64', noEnum(function () {
        //                    return decode(this)
        //                }));
        //            Object.defineProperty(
        //                String.prototype, 'toBase64', noEnum(function (urisafe) {
        //                    return encode(this, urisafe)
        //                }));
        //            Object.defineProperty(
        //                String.prototype, 'toBase64URI', noEnum(function () {
        //                    return encode(this, true)
        //                }));
        //        };
        //    }
        //    // that's it!
        //    if (global['Meteor']) {
        //        Base64 = global.Base64; // for normal export in Meteor.js
        //    }
        //})(this);
    }
    
    function base64_encode(str) {
        var c1, c2, c3;
        var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var i = 0, len = str.length, string = '';

        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                string += base64EncodeChars.charAt(c1 >> 2);
                string += base64EncodeChars.charAt((c1 & 0x3) << 4);
                string += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                string += base64EncodeChars.charAt(c1 >> 2);
                string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                string += base64EncodeChars.charAt((c2 & 0xF) << 2);
                string += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            string += base64EncodeChars.charAt(c1 >> 2);
            string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            string += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
            string += base64EncodeChars.charAt(c3 & 0x3F)
        }
        return string
    }

    function base64_decode(str) {
        var c1, c2, c3, c4;
        var base64DecodeChars = new Array(
                -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
                58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
                7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
                25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
                37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1,
                -1, -1
        );
        var i = 0, len = str.length, string = '';

        while (i < len) {
            do {
                c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
            } while (
                    i < len && c1 == -1
            );

            if (c1 == -1) break;

            do {
                c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
            } while (
                    i < len && c2 == -1
            );

            if (c2 == -1) break;

            string += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

            do {
                c3 = str.charCodeAt(i++) & 0xff;
                if (c3 == 61)
                    return string;

                c3 = base64DecodeChars[c3]
            } while (
                    i < len && c3 == -1
            );

            if (c3 == -1) break;

            string += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

            do {
                c4 = str.charCodeAt(i++) & 0xff;
                if (c4 == 61) return string;
                c4 = base64DecodeChars[c4]
            } while (
                    i < len && c4 == -1
            );

            if (c4 == -1) break;

            string += String.fromCharCode(((c3 & 0x03) << 6) | c4)
        }
        return string;
    }

    tempClear();
    $scope.encodeBase64 = function (type) {
        //1表示encode，2表示decode
        if (type == 1) {
            $scope.resultData = base64_encode($scope.originalData);
        } else {
            $scope.resultData = base64_decode($scope.originalData);
        }
    }

    $scope.clear = function () {
        tempClear();
    }
    function tempClear() {
        $scope.originalData = "";
        $scope.resultData = "";
    }
})

;
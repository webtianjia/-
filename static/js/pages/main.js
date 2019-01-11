(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/main"],{

/***/ "./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/vue-loader/lib/index.js?!./src/components/header.vue?vue&type=template&id=29e8c3c6&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header.vue?vue&type=template&id=29e8c3c6&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "wx-header",
      style: { color: _vm.color },
      attrs: { _hid: 0 }
    },
    [
      _c(
        "div",
        {
          staticClass: "icon iconfont",
          attrs: { _hid: 1 },
          on: { click: _vm.iconClick }
        },
        [_vm._t("default", null, { _hid: 2, _cid: 0 })],
        1
      ),
      _c("div", { staticClass: "title", attrs: { _hid: 5 } }, [
        _vm._v(_vm._s(_vm.title), 6)
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index.vue?vue&type=template&id=57509004&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index.vue?vue&type=template&id=57509004&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "container",
      style: { width: _vm.windowWidth + "px", height: _vm.windowHeight + "px" },
      attrs: { _hid: 0 }
    },
    [
      _c(
        "wx-header",
        { attrs: { _hid: 1, _cid: 0 }, on: { iconClick: _vm.goTo } },
        [
          _c("div", { staticClass: "span", attrs: { _hid: 3 } }, [
            _c("div", { staticClass: "eye", attrs: { _hid: 4 } })
          ])
        ]
      ),
      _c("div", {
        staticClass: "photo-btn",
        attrs: { _hid: 6 },
        on: { click: _vm.chooseImage }
      }),
      _vm._ri(!!_vm.faceData, 8)
        ? _c("scroll-view", { staticClass: "data", attrs: { _hid: 8 } }, [
            _c("div", { staticClass: "box", attrs: { _hid: 9 } }, [
              _c("img", {
                attrs: {
                  mode: "aspectFit",
                  src: _vm.faceData.imgPath,
                  "lazy-load": "true",
                  _hid: 10,
                  _batrs: "src"
                }
              })
            ]),
            _c(
              "div",
              { staticClass: "face-item", attrs: { _hid: 12 } },
              [
                _c("label", { attrs: { _hid: 13 } }, []),
                _c("span", { attrs: { _hid: 16 } }, [
                  _vm._v(_vm._s(_vm.faceData.width), 17)
                ])
              ],
              1
            ),
            _c(
              "div",
              { staticClass: "face-item", attrs: { _hid: 19 } },
              [
                _c("label", { attrs: { _hid: 20 } }, []),
                _c("span", { attrs: { _hid: 23 } }, [
                  _vm._v(_vm._s(_vm.faceData.height), 24)
                ])
              ],
              1
            ),
            _c(
              "div",
              { staticClass: "face-item", attrs: { _hid: 26 } },
              [
                _c("label", { attrs: { _hid: 27 } }, []),
                _c("span", { attrs: { _hid: 30 } }, [
                  _vm._v(_vm._s(_vm.faceData.gender > 50 ? "男" : "女"), 31)
                ])
              ],
              1
            ),
            _c(
              "div",
              { staticClass: "face-item", attrs: { _hid: 33 } },
              [
                _c("label", { attrs: { _hid: 34 } }, []),
                _c("span", { attrs: { _hid: 37 } }, [
                  _vm._v(_vm._s(_vm.faceData.age), 38)
                ])
              ],
              1
            ),
            _c(
              "div",
              { staticClass: "face-item", attrs: { _hid: 40 } },
              [
                _c("label", { attrs: { _hid: 41 } }, []),
                _c("span", { attrs: { _hid: 44 } }, [
                  _vm._v(_vm._s(_vm.faceData.expression), 45)
                ])
              ],
              1
            ),
            _vm._ri(!!_vm.faceData.glass, 47)
              ? _c(
                  "div",
                  { staticClass: "face-item", attrs: { _hid: 47 } },
                  [
                    _c("label", { attrs: { _hid: 48 } }, []),
                    _c("span", { attrs: { _hid: 51 } }, [
                      _vm._v(_vm._s(_vm.faceData.glass ? "Yes" : "No"), 52)
                    ])
                  ],
                  1
                )
              : _vm._e(),
            _c(
              "div",
              { staticClass: "face-item", attrs: { _hid: 54 } },
              [
                _c("label", { attrs: { _hid: 55 } }, []),
                _c("span", { attrs: { _hid: 58 } }, [
                  _vm._v(_vm._s(_vm.faceData.beauty), 59)
                ])
              ],
              1
            )
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/vue-loader/lib/index.js?!./src/components/header.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//

exports.default = {
    name: "header",
    props: {
        color: {
            type: String,
            default: "#fff"
        },
        title: {
            type: String,
            default: ""
        }
    },
    methods: {
        iconClick: function iconClick() {
            this.$emit("iconClick");
        }
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _header = __webpack_require__(/*! ../components/header */ "./src/components/header.vue");

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "index",
    components: {
        wxHeader: _header2.default
    },
    data: function data() {
        return {
            faceData: null,
            fileID: null,
            windowWidth: 0,
            windowHeight: 0,
            desc: "",
            openId: null
        };
    },

    methods: {
        /*1.打开相册或相机*/
        chooseImage: function chooseImage() {
            var that = this;
            wx.chooseImage({
                sizeType: ['compressed'],
                sourceType: ['album', 'camera'],
                success: function success(response) {
                    var filePath = response.tempFilePaths[0];
                    that.uploadFile(filePath);
                    wx.showLoading({ title: "Loading..." });
                }
            });
        },

        /*2.上传云存储*/
        uploadFile: function uploadFile(filePath) {
            var that = this;
            wx.cloud.uploadFile({
                cloudPath: "img" + new Date().getTime(),
                filePath: filePath,
                success: function success(res) {
                    that.fileID = res.fileID;
                    that.getImgPath(res.fileID);
                }
            });
        },

        /*3.获取云数据库图片*/
        getImgPath: function getImgPath(fileID) {
            var that = this;
            wx.cloud.getTempFileURL({
                fileList: [fileID],
                success: function success(res) {
                    that.getAuthorization(res.fileList[0].tempFileURL);
                }
            });
        },

        /*4.调用API人脸识别*/
        getFaceData: function getFaceData(imgPath, sign) {
            var that = this;
            wx.request({
                header: {
                    "host": "recognition.image.myqcloud.com",
                    "content-type": "application/json",
                    "authorization": sign
                },
                method: "POST",
                url: "https://recognition.image.myqcloud.com/face/detect",
                data: {
                    appid: "1253407082",
                    url: imgPath
                },
                success: function success(response) {
                    if (response.data.code === 0) {
                        that.faceData = Object.assign({ imgPath: imgPath }, response.data.data.face[0]);
                        that.addImg();
                    } else {
                        wx.showToast({ title: "请对准人脸哦..", image: "../../../static/imgs/error.png", duration: 3000 });
                    }
                    wx.hideLoading();
                }
            });
        },

        /*获取签名*/
        getAuthorization: function getAuthorization(imgPath) {
            var that = this;
            wx.cloud.callFunction({
                // 云函数名称
                name: 'createAuthorization'
            }).then(function (res) {
                that.getFaceData(imgPath, res.result.sign);
            }).catch(function (err) {
                console.log(err);
            });
        },
        getUserId: function getUserId() {
            var that = this;
            wx.cloud.callFunction({
                name: 'getUserInfo'
            }).then(function (res) {
                that.openId = res.result.openid;
            }).catch(function (err) {
                console.log(err);
            });
        },
        addImg: function addImg() {
            var that = this;
            var db = wx.cloud.database();
            db.collection('all_img').add({
                data: {
                    img_author: {
                        id: that.openId
                    },
                    img_path_id: that.fileID,
                    img_beauty: that.faceData.beauty,
                    img_gender: that.faceData.gender,
                    img_age: that.faceData.age,
                    img_expression: that.faceData.expression,
                    img_desc: that.desc
                }
            });
        },
        goTo: function goTo() {
            wx.navigateTo({
                url: "/pages/list/main"
            });
        }
    },
    created: function created() {
        this.getUserId();
        this.windowWidth = wx.getSystemInfoSync().windowWidth;
        this.windowHeight = wx.getSystemInfoSync().windowHeight;
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/@megalo/px2rpx-loader/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/header.vue?vue&type=style&index=0&id=29e8c3c6&scoped=true&lang=less&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/@megalo/px2rpx-loader??ref--3-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header.vue?vue&type=style&index=0&id=29e8c3c6&scoped=true&lang=less& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/@megalo/px2rpx-loader/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index.vue?vue&type=style&index=0&id=57509004&scoped=true&lang=less&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/@megalo/px2rpx-loader??ref--3-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index.vue?vue&type=style&index=0&id=57509004&scoped=true&lang=less& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/header.vue":
/*!***********************************!*\
  !*** ./src/components/header.vue ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_vue_vue_type_template_id_29e8c3c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue?vue&type=template&id=29e8c3c6&scoped=true& */ "./src/components/header.vue?vue&type=template&id=29e8c3c6&scoped=true&");
/* harmony import */ var _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.vue?vue&type=script&lang=js& */ "./src/components/header.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _header_vue_vue_type_style_index_0_id_29e8c3c6_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.vue?vue&type=style&index=0&id=29e8c3c6&scoped=true&lang=less& */ "./src/components/header.vue?vue&type=style&index=0&id=29e8c3c6&scoped=true&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _header_vue_vue_type_template_id_29e8c3c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _header_vue_vue_type_template_id_29e8c3c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "29e8c3c6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/header.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/components/header.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/vue-loader/lib/index.js?!./src/components/header.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/header.vue?vue&type=style&index=0&id=29e8c3c6&scoped=true&lang=less&":
/*!*********************************************************************************************!*\
  !*** ./src/components/header.vue?vue&type=style&index=0&id=29e8c3c6&scoped=true&lang=less& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_29e8c3c6_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!../../node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!../../node_modules/@megalo/px2rpx-loader??ref--3-2!../../node_modules/less-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=style&index=0&id=29e8c3c6&scoped=true&lang=less& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/@megalo/px2rpx-loader/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/header.vue?vue&type=style&index=0&id=29e8c3c6&scoped=true&lang=less&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_29e8c3c6_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_29e8c3c6_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_29e8c3c6_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_29e8c3c6_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_29e8c3c6_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/header.vue?vue&type=template&id=29e8c3c6&scoped=true&":
/*!******************************************************************************!*\
  !*** ./src/components/header.vue?vue&type=template&id=29e8c3c6&scoped=true& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_29e8c3c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/@megalo/target/lib/frameworks/vue/loader/template.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=template&id=29e8c3c6&scoped=true& */ "./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/vue-loader/lib/index.js?!./src/components/header.vue?vue&type=template&id=29e8c3c6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_29e8c3c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_29e8c3c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/pages/index.vue":
/*!*****************************!*\
  !*** ./src/pages/index.vue ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_57509004_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=57509004&scoped=true& */ "./src/pages/index.vue?vue&type=template&id=57509004&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/pages/index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_57509004_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=57509004&scoped=true&lang=less& */ "./src/pages/index.vue?vue&type=style&index=0&id=57509004&scoped=true&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_57509004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_57509004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "57509004",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/index.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./src/pages/index.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index.vue?vue&type=style&index=0&id=57509004&scoped=true&lang=less&":
/*!***************************************************************************************!*\
  !*** ./src/pages/index.vue?vue&type=style&index=0&id=57509004&scoped=true&lang=less& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_57509004_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!../../node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!../../node_modules/@megalo/px2rpx-loader??ref--3-2!../../node_modules/less-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=57509004&scoped=true&lang=less& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/@megalo/px2rpx-loader/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index.vue?vue&type=style&index=0&id=57509004&scoped=true&lang=less&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_57509004_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_57509004_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_57509004_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_57509004_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_57509004_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index.vue?vue&type=template&id=57509004&scoped=true&":
/*!************************************************************************!*\
  !*** ./src/pages/index.vue?vue&type=template&id=57509004&scoped=true& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_57509004_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/@megalo/target/lib/frameworks/vue/loader/template.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=57509004&scoped=true& */ "./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index.vue?vue&type=template&id=57509004&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_57509004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_57509004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/pages/main.js":
/*!***************************!*\
  !*** ./src/pages/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(/*! vue */ "./node_modules/megalo/dist/megalo.mp.esm.js");

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(/*! ./index.vue */ "./src/pages/index.vue");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_index2.default.mpType = 'page';

var app = new _vue2.default(_index2.default);
app.$mount();

/***/ })

},[["./src/pages/main.js","runtime","vendor"]]]);
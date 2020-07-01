webpackHotUpdate("static\\development\\pages\\gallery.js",{

/***/ "./pages/gallery/index.tsx":
/*!*********************************!*\
  !*** ./pages/gallery/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/data */ "./utils/data.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\git\\experiments\\next-route-transitions\\pages\\gallery\\index.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */








var GalleryPage = function GalleryPage(_ref) {
  _s();

  var images = _ref.images;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      rect = _useState[0],
      setRect = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      fullImage = _useState2[0],
      setFullImage = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    router === null || router === void 0 ? void 0 : router.prefetch('/gallery/[id]', "/gallery/1");
  }, []);
  var fade = {
    initial: {
      y: 60,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1]
      }
    },
    hidden: {
      y: 0,
      opacity: 0,
      pointerEvents: "none",
      cursor: "default",
      transition: {
        duration: 0.4,
        ease: [0.5, 0, 0.75, 0]
      }
    },
    exit: {
      opacity: 0
    }
  };
  var stagger = {
    animate: {
      transition: {
        staggerChildren: 1
      }
    }
  };

  var onImageClick = function onImageClick(event, index) {
    var _event$target, _images$index, _images$index$urls;

    setRect(event === null || event === void 0 ? void 0 : (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.getBoundingClientRect());
    setFullImage((_images$index = images[index]) === null || _images$index === void 0 ? void 0 : (_images$index$urls = _images$index.urls) === null || _images$index$urls === void 0 ? void 0 : _images$index$urls.high); // router.push("/gallery/[id]", `/gallery/${images[index]?.index}`, {
    //   shallow: true,
    // });
  };

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, rect && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    exit: {
      top: 72,
      left: "50%",
      width: 1200,
      height: 420,
      marginLeft: -600,
      transition: {
        duration: 0.3,
        delay: 0.4,
        ease: [0.65, 0, 0.35, 1]
      }
    },
    css: {
      position: "fixed",
      top: rect === null || rect === void 0 ? void 0 : rect.y,
      left: rect === null || rect === void 0 ? void 0 : rect.x,
      width: rect === null || rect === void 0 ? void 0 : rect.width,
      height: rect === null || rect === void 0 ? void 0 : rect.height
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
    src: fullImage,
    css: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: 12
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    css: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: 16,
      boxSizing: "border-box"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    children: "My gallery",
    css: {
      fontSize: 32,
      fontWeight: 500,
      marginTop: 108,
      marginBottom: 52
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    variants: stagger,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    spacing: 4,
    css: {
      maxWidth: 1200,
      margin: "0 auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, images.map(function (image, index) {
    var _images$index2, _image$urls;

    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 4,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
      // @ts-ignore
      variants: fade,
      animate: !rect ? "animate" : "hidden" // whileHover={{ scale: 0.96 }}
      // whileTap={{ position: "absolute" }}
      ,
      css: {
        willChange: "transform",
        cursor: "pointer"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 15
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/gallery/[id]",
      as: "/gallery/".concat((_images$index2 = images[index]) === null || _images$index2 === void 0 ? void 0 : _images$index2.index),
      passHref: false,
      prefetch: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
      src: image === null || image === void 0 ? void 0 : (_image$urls = image.urls) === null || _image$urls === void 0 ? void 0 : _image$urls.low,
      onClick: function onClick(e) {
        return onImageClick(e, index);
      },
      css: {
        width: "100%",
        height: 272,
        objectFit: "cover",
        borderRadius: 12
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }
    }))));
  }))));
};

_s(GalleryPage, "afO941DHbqn9lbM9VdDR26+Wyik=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = GalleryPage;

GalleryPage.getInitialProps = function () {
  var images = _utils_data__WEBPACK_IMPORTED_MODULE_2__["default"];
  return {
    images: images
  };
};

/* harmony default export */ __webpack_exports__["default"] = (GalleryPage);

var _c;

$RefreshReg$(_c, "GalleryPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nYWxsZXJ5L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJHYWxsZXJ5UGFnZSIsImltYWdlcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwicmVjdCIsInNldFJlY3QiLCJmdWxsSW1hZ2UiLCJzZXRGdWxsSW1hZ2UiLCJ1c2VFZmZlY3QiLCJwcmVmZXRjaCIsImZhZGUiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImhpZGRlbiIsInBvaW50ZXJFdmVudHMiLCJjdXJzb3IiLCJleGl0Iiwic3RhZ2dlciIsInN0YWdnZXJDaGlsZHJlbiIsIm9uSW1hZ2VDbGljayIsImV2ZW50IiwiaW5kZXgiLCJ0YXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cmxzIiwiaGlnaCIsInRvcCIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbkxlZnQiLCJkZWxheSIsInBvc2l0aW9uIiwieCIsIm9iamVjdEZpdCIsImJvcmRlclJhZGl1cyIsIm1heFdpZHRoIiwibWFyZ2luIiwicGFkZGluZyIsImJveFNpemluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIm1hcCIsImltYWdlIiwid2lsbENoYW5nZSIsImxvdyIsImUiLCJnZXRJbml0aWFsUHJvcHMiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUNsQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURrQyxrQkFHVkMsc0RBQVEsQ0FBQ0MsU0FBRCxDQUhFO0FB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LENBQUN3RCxlQUFaLEdBQThCLFlBQU07QUFDbEMsTUFBTXZELE1BQU0sR0FBR3dELG1EQUFmO0FBQ0EsU0FBTztBQUFFeEQsVUFBTSxFQUFOQTtBQUFGLEdBQVA7QUFDRCxDQUhEOztBQUtlRCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZ2FsbGVyeS5qcy5kNTcwYzBmOWRmMGE3N2I5YTc2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XHJcbmltcG9ydCBkYXRhIGZyb20gXCIuLi8uLi91dGlscy9kYXRhXCI7XHJcbmltcG9ydCB7IEdyaWQsIFR5cG9ncmFwaHksIEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtb3Rpb24sIE1vdGlvblByb3BzIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgR2FsbGVyeVBhZ2UgPSAoeyBpbWFnZXMgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbcmVjdCwgc2V0UmVjdF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gIGNvbnN0IFtmdWxsSW1hZ2UsIHNldEZ1bGxJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJvdXRlcj8ucHJlZmV0Y2goJy9nYWxsZXJ5L1tpZF0nLCBgL2dhbGxlcnkvMWApXHJcbiAgfSwgW10pO1xyXG5cclxuXHJcblxyXG4gIGNvbnN0IGZhZGUgPSB7XHJcbiAgICBpbml0aWFsOiB7XHJcbiAgICAgIHk6IDYwLFxyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgfSxcclxuICAgIGFuaW1hdGU6IHtcclxuICAgICAgeTogMCxcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAwLjgsXHJcbiAgICAgICAgZWFzZTogWzAuMjUsIDEsIDAuNSwgMV0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgaGlkZGVuOiB7XHJcbiAgICAgIHk6IDAsXHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gICAgICBjdXJzb3I6IFwiZGVmYXVsdFwiLFxyXG4gICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgZHVyYXRpb246IDAuNCxcclxuICAgICAgICBlYXNlOiBbMC41LCAwLCAwLjc1LCAwXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBleGl0OiB7XHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0YWdnZXIgPSB7XHJcbiAgICBhbmltYXRlOiB7XHJcbiAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICBzdGFnZ2VyQ2hpbGRyZW46IDEsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uSW1hZ2VDbGljayA9IChldmVudCwgaW5kZXgpID0+IHtcclxuICAgIHNldFJlY3QoZXZlbnQ/LnRhcmdldD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xyXG4gICAgc2V0RnVsbEltYWdlKGltYWdlc1tpbmRleF0/LnVybHM/LmhpZ2gpO1xyXG4gICAgLy8gcm91dGVyLnB1c2goXCIvZ2FsbGVyeS9baWRdXCIsIGAvZ2FsbGVyeS8ke2ltYWdlc1tpbmRleF0/LmluZGV4fWAsIHtcclxuICAgIC8vICAgc2hhbGxvdzogdHJ1ZSxcclxuICAgIC8vIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdiBpbml0aWFsPVwiaW5pdGlhbFwiIGFuaW1hdGU9XCJhbmltYXRlXCIgZXhpdD1cImV4aXRcIj5cclxuICAgICAge3JlY3QgJiYgKFxyXG4gICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICBleGl0PXt7XHJcbiAgICAgICAgICAgIHRvcDogNzIsXHJcbiAgICAgICAgICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDQyMCxcclxuICAgICAgICAgICAgbWFyZ2luTGVmdDogLTYwMCxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjMsXHJcbiAgICAgICAgICAgICAgZGVsYXk6IDAuNCxcclxuICAgICAgICAgICAgICBlYXNlOiBbMC42NSwgMCwgMC4zNSwgMV0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY3NzPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgIHRvcDogcmVjdD8ueSxcclxuICAgICAgICAgICAgbGVmdDogcmVjdD8ueCxcclxuICAgICAgICAgICAgd2lkdGg6IHJlY3Q/LndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHJlY3Q/LmhlaWdodCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e2Z1bGxJbWFnZX1cclxuICAgICAgICAgICAgY3NzPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgIGNzcz17e1xyXG4gICAgICAgICAgbWF4V2lkdGg6IDEyMDAsXHJcbiAgICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXHJcbiAgICAgICAgICBwYWRkaW5nOiAxNixcclxuICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICBjaGlsZHJlbj1cIk15IGdhbGxlcnlcIlxyXG4gICAgICAgICAgY3NzPXt7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAzMixcclxuICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IDEwOCxcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiA1MixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17c3RhZ2dlcn0+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9IGNzcz17eyBtYXhXaWR0aDogMTIwMCwgbWFyZ2luOiBcIjAgYXV0b1wiIH19PlxyXG4gICAgICAgICAge2ltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtmYWRlfVxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17IXJlY3QgPyBcImFuaW1hdGVcIiA6IFwiaGlkZGVuXCJ9XHJcbiAgICAgICAgICAgICAgICAvLyB3aGlsZUhvdmVyPXt7IHNjYWxlOiAwLjk2IH19XHJcbiAgICAgICAgICAgICAgICAvLyB3aGlsZVRhcD17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICBjc3M9e3sgd2lsbENoYW5nZTogXCJ0cmFuc2Zvcm1cIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvZ2FsbGVyeS9baWRdXCJcclxuICAgICAgICAgICAgICAgICAgYXM9e2AvZ2FsbGVyeS8ke2ltYWdlc1tpbmRleF0/LmluZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgIHBhc3NIcmVmPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgcHJlZmV0Y2g9e3RydWV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2U/LnVybHM/Lmxvd31cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG9uSW1hZ2VDbGljayhlLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgIGNzcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI3MixcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEyLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5HYWxsZXJ5UGFnZS5nZXRJbml0aWFsUHJvcHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgaW1hZ2VzID0gZGF0YTtcclxuICByZXR1cm4geyBpbWFnZXMgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnlQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
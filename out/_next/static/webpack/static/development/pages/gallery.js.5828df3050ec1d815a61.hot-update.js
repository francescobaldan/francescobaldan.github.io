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
    console.log(rect);
    console.log(rect === undefined ? 1 : 0);
  }, [rect]);
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
      lineNumber: 67,
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
      lineNumber: 69,
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
      lineNumber: 90,
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
      lineNumber: 101,
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
      lineNumber: 110,
      columnNumber: 9
    }
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    variants: stagger,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
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
      lineNumber: 121,
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
        lineNumber: 123,
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
        lineNumber: 124,
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
        lineNumber: 132,
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
        lineNumber: 138,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nYWxsZXJ5L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJHYWxsZXJ5UGFnZSIsImltYWdlcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwicmVjdCIsInNldFJlY3QiLCJmdWxsSW1hZ2UiLCJzZXRGdWxsSW1hZ2UiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiZmFkZSIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiaGlkZGVuIiwicG9pbnRlckV2ZW50cyIsImN1cnNvciIsImV4aXQiLCJzdGFnZ2VyIiwic3RhZ2dlckNoaWxkcmVuIiwib25JbWFnZUNsaWNrIiwiZXZlbnQiLCJpbmRleCIsInRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVybHMiLCJoaWdoIiwidG9wIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsImRlbGF5IiwicG9zaXRpb24iLCJ4Iiwib2JqZWN0Rml0IiwiYm9yZGVyUmFkaXVzIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwibWFwIiwiaW1hZ2UiLCJ3aWxsQ2hhbmdlIiwibG93IiwiZSIsImdldEluaXRpYWxQcm9wcyIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQ2xDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRGtDLGtCQUdWQyxzREFBUSxDQUFDQyxTQUFELENB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QWpKRDs7R0FBTTNDLFc7VUFDV0cscUQ7OztLQURYSCxXOztBQW1KTkEsV0FBVyxDQUFDeUQsZUFBWixHQUE4QixZQUFNO0FBQ2xDLE1BQU14RCxNQUFNLEdBQUd5RCxtREFBZjtBQUNBLFNBQU87QUFBRXpELFVBQU0sRUFBTkE7QUFBRixHQUFQO0FBQ0QsQ0FIRDs7QUFLZUQsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGdhbGxlcnkuanMuNTgyOGRmMzA1MGVjMWQ4MTVhNjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xyXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vLi4vdXRpbHMvZGF0YVwiO1xyXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5LCBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbW90aW9uLCBNb3Rpb25Qcm9wcyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IEdhbGxlcnlQYWdlID0gKHsgaW1hZ2VzIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW3JlY3QsIHNldFJlY3RdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICBjb25zdCBbZnVsbEltYWdlLCBzZXRGdWxsSW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKHJlY3QgPT09IHVuZGVmaW5lZCA/IDEgOiAwKTtcclxuICB9LCBbcmVjdF0pO1xyXG5cclxuICBjb25zdCBmYWRlID0ge1xyXG4gICAgaW5pdGlhbDoge1xyXG4gICAgICB5OiA2MCxcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgIH0sXHJcbiAgICBhbmltYXRlOiB7XHJcbiAgICAgIHk6IDAsXHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICBkdXJhdGlvbjogMC44LFxyXG4gICAgICAgIGVhc2U6IFswLjI1LCAxLCAwLjUsIDFdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGhpZGRlbjoge1xyXG4gICAgICB5OiAwLFxyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcclxuICAgICAgY3Vyc29yOiBcImRlZmF1bHRcIixcclxuICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAwLjQsXHJcbiAgICAgICAgZWFzZTogWzAuNSwgMCwgMC43NSwgMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXhpdDoge1xyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBzdGFnZ2VyID0ge1xyXG4gICAgYW5pbWF0ZToge1xyXG4gICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgc3RhZ2dlckNoaWxkcmVuOiAxLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkltYWdlQ2xpY2sgPSAoZXZlbnQsIGluZGV4KSA9PiB7XHJcbiAgICBzZXRSZWN0KGV2ZW50Py50YXJnZXQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcclxuICAgIHNldEZ1bGxJbWFnZShpbWFnZXNbaW5kZXhdPy51cmxzPy5oaWdoKTtcclxuICAgIC8vIHJvdXRlci5wdXNoKFwiL2dhbGxlcnkvW2lkXVwiLCBgL2dhbGxlcnkvJHtpbWFnZXNbaW5kZXhdPy5pbmRleH1gLCB7XHJcbiAgICAvLyAgIHNoYWxsb3c6IHRydWUsXHJcbiAgICAvLyB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXYgaW5pdGlhbD1cImluaXRpYWxcIiBhbmltYXRlPVwiYW5pbWF0ZVwiIGV4aXQ9XCJleGl0XCI+XHJcbiAgICAgIHtyZWN0ICYmIChcclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgZXhpdD17e1xyXG4gICAgICAgICAgICB0b3A6IDcyLFxyXG4gICAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxyXG4gICAgICAgICAgICB3aWR0aDogMTIwMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MjAsXHJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IC02MDAsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMC4zLFxyXG4gICAgICAgICAgICAgIGRlbGF5OiAwLjQsXHJcbiAgICAgICAgICAgICAgZWFzZTogWzAuNjUsIDAsIDAuMzUsIDFdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNzcz17e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICAgICAgICB0b3A6IHJlY3Q/LnksXHJcbiAgICAgICAgICAgIGxlZnQ6IHJlY3Q/LngsXHJcbiAgICAgICAgICAgIHdpZHRoOiByZWN0Py53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiByZWN0Py5oZWlnaHQsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtmdWxsSW1hZ2V9XHJcbiAgICAgICAgICAgIGNzcz17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgKX1cclxuICAgICAgPEdyaWRcclxuICAgICAgICBjb250YWluZXJcclxuICAgICAgICBjc3M9e3tcclxuICAgICAgICAgIG1heFdpZHRoOiAxMjAwLFxyXG4gICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gICAgICAgICAgcGFkZGluZzogMTYsXHJcbiAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgY2hpbGRyZW49XCJNeSBnYWxsZXJ5XCJcclxuICAgICAgICAgIGNzcz17e1xyXG4gICAgICAgICAgICBmb250U2l6ZTogMzIsXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAxMDgsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNTIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e3N0YWdnZXJ9PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fSBjc3M9e3sgbWF4V2lkdGg6IDEyMDAsIG1hcmdpbjogXCIwIGF1dG9cIiB9fT5cclxuICAgICAgICAgIHtpbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cz17ZmFkZX1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9eyFyZWN0ID8gXCJhbmltYXRlXCIgOiBcImhpZGRlblwifVxyXG4gICAgICAgICAgICAgICAgLy8gd2hpbGVIb3Zlcj17eyBzY2FsZTogMC45NiB9fVxyXG4gICAgICAgICAgICAgICAgLy8gd2hpbGVUYXA9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgY3NzPXt7IHdpbGxDaGFuZ2U6IFwidHJhbnNmb3JtXCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2dhbGxlcnkvW2lkXVwiXHJcbiAgICAgICAgICAgICAgICAgIGFzPXtgL2dhbGxlcnkvJHtpbWFnZXNbaW5kZXhdPy5pbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICBwYXNzSHJlZj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIHByZWZldGNoXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2U/LnVybHM/Lmxvd31cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG9uSW1hZ2VDbGljayhlLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgIGNzcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI3MixcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEyLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5HYWxsZXJ5UGFnZS5nZXRJbml0aWFsUHJvcHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgaW1hZ2VzID0gZGF0YTtcclxuICByZXR1cm4geyBpbWFnZXMgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnlQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
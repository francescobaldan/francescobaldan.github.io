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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\git\\experiments\\next-route-transitions\\pages\\gallery\\index.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */







var GalleryPage = function GalleryPage(_ref) {
  _s();

  var images = _ref.images;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

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
    var _image$urls;

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
        lineNumber: 137,
        columnNumber: 17
      }
    })));
  }))));
};

_s(GalleryPage, "afO941DHbqn9lbM9VdDR26+Wyik=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nYWxsZXJ5L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJHYWxsZXJ5UGFnZSIsImltYWdlcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwicmVjdCIsInNldFJlY3QiLCJmdWxsSW1hZ2UiLCJzZXRGdWxsSW1hZ2UiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiZmFkZSIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiaGlkZGVuIiwicG9pbnRlckV2ZW50cyIsImN1cnNvciIsImV4aXQiLCJzdGFnZ2VyIiwic3RhZ2dlckNoaWxkcmVuIiwib25JbWFnZUNsaWNrIiwiZXZlbnQiLCJpbmRleCIsInRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVybHMiLCJoaWdoIiwidG9wIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsImRlbGF5IiwicG9zaXRpb24iLCJ4Iiwib2JqZWN0Rml0IiwiYm9yZGVyUmFkaXVzIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwibWFwIiwiaW1hZ2UiLCJ3aWxsQ2hhbmdlIiwibG93IiwiZSIsImdldEluaXRpYWxQcm9wcyIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDbEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEa0Msa0JBR1ZDLHNEQUFRLENBQUNDLFNBQUQsQ0FIRTtBQUFB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Y2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGdhbGxlcnkuanMuMGRjYzBiZDVhMDkzYmJiMmJkZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xyXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vLi4vdXRpbHMvZGF0YVwiO1xyXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5LCBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbW90aW9uLCBNb3Rpb25Qcm9wcyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IEdhbGxlcnlQYWdlID0gKHsgaW1hZ2VzIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW3JlY3QsIHNldFJlY3RdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICBjb25zdCBbZnVsbEltYWdlLCBzZXRGdWxsSW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKHJlY3QgPT09IHVuZGVmaW5lZCA/IDEgOiAwKTtcclxuICB9LCBbcmVjdF0pO1xyXG5cclxuICBjb25zdCBmYWRlID0ge1xyXG4gICAgaW5pdGlhbDoge1xyXG4gICAgICB5OiA2MCxcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgIH0sXHJcbiAgICBhbmltYXRlOiB7XHJcbiAgICAgIHk6IDAsXHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICBkdXJhdGlvbjogMC44LFxyXG4gICAgICAgIGVhc2U6IFswLjI1LCAxLCAwLjUsIDFdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGhpZGRlbjoge1xyXG4gICAgICB5OiAwLFxyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcclxuICAgICAgY3Vyc29yOiBcImRlZmF1bHRcIixcclxuICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAwLjQsXHJcbiAgICAgICAgZWFzZTogWzAuNSwgMCwgMC43NSwgMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXhpdDoge1xyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBzdGFnZ2VyID0ge1xyXG4gICAgYW5pbWF0ZToge1xyXG4gICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgc3RhZ2dlckNoaWxkcmVuOiAxLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkltYWdlQ2xpY2sgPSAoZXZlbnQsIGluZGV4KSA9PiB7XHJcbiAgICBzZXRSZWN0KGV2ZW50Py50YXJnZXQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcclxuICAgIHNldEZ1bGxJbWFnZShpbWFnZXNbaW5kZXhdPy51cmxzPy5oaWdoKTtcclxuICAgIC8vIHJvdXRlci5wdXNoKFwiL2dhbGxlcnkvW2lkXVwiLCBgL2dhbGxlcnkvJHtpbWFnZXNbaW5kZXhdPy5pbmRleH1gLCB7XHJcbiAgICAvLyAgIHNoYWxsb3c6IHRydWUsXHJcbiAgICAvLyB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXYgaW5pdGlhbD1cImluaXRpYWxcIiBhbmltYXRlPVwiYW5pbWF0ZVwiIGV4aXQ9XCJleGl0XCI+XHJcbiAgICAgIHtyZWN0ICYmIChcclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgZXhpdD17e1xyXG4gICAgICAgICAgICB0b3A6IDcyLFxyXG4gICAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxyXG4gICAgICAgICAgICB3aWR0aDogMTIwMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MjAsXHJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IC02MDAsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMC4zLFxyXG4gICAgICAgICAgICAgIGRlbGF5OiAwLjQsXHJcbiAgICAgICAgICAgICAgZWFzZTogWzAuNjUsIDAsIDAuMzUsIDFdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNzcz17e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICAgICAgICB0b3A6IHJlY3Q/LnksXHJcbiAgICAgICAgICAgIGxlZnQ6IHJlY3Q/LngsXHJcbiAgICAgICAgICAgIHdpZHRoOiByZWN0Py53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiByZWN0Py5oZWlnaHQsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtmdWxsSW1hZ2V9XHJcbiAgICAgICAgICAgIGNzcz17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgKX1cclxuICAgICAgPEdyaWRcclxuICAgICAgICBjb250YWluZXJcclxuICAgICAgICBjc3M9e3tcclxuICAgICAgICAgIG1heFdpZHRoOiAxMjAwLFxyXG4gICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gICAgICAgICAgcGFkZGluZzogMTYsXHJcbiAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgY2hpbGRyZW49XCJNeSBnYWxsZXJ5XCJcclxuICAgICAgICAgIGNzcz17e1xyXG4gICAgICAgICAgICBmb250U2l6ZTogMzIsXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAxMDgsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNTIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e3N0YWdnZXJ9PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fSBjc3M9e3sgbWF4V2lkdGg6IDEyMDAsIG1hcmdpbjogXCIwIGF1dG9cIiB9fT5cclxuICAgICAgICAgIHtpbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cz17ZmFkZX1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9eyFyZWN0ID8gXCJhbmltYXRlXCIgOiBcImhpZGRlblwifVxyXG4gICAgICAgICAgICAgICAgLy8gd2hpbGVIb3Zlcj17eyBzY2FsZTogMC45NiB9fVxyXG4gICAgICAgICAgICAgICAgLy8gd2hpbGVUYXA9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgY3NzPXt7IHdpbGxDaGFuZ2U6IFwidHJhbnNmb3JtXCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyogPExpbmtcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9nYWxsZXJ5L1tpZF1cIlxyXG4gICAgICAgICAgICAgICAgICBhcz17YC9nYWxsZXJ5LyR7aW1hZ2VzW2luZGV4XT8uaW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgcGFzc0hyZWY9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgPiAqL31cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZT8udXJscz8ubG93fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gb25JbWFnZUNsaWNrKGUsIGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgY3NzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjcyLFxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICApO1xyXG59O1xyXG5cclxuR2FsbGVyeVBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGltYWdlcyA9IGRhdGE7XHJcbiAgcmV0dXJuIHsgaW1hZ2VzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5UGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
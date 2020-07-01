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
    var _event$target, _images$index, _images$index$urls, _images$index2;

    setRect(event === null || event === void 0 ? void 0 : (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.getBoundingClientRect());
    setFullImage((_images$index = images[index]) === null || _images$index === void 0 ? void 0 : (_images$index$urls = _images$index.urls) === null || _images$index$urls === void 0 ? void 0 : _images$index$urls.high);
    router.push("/gallery/[id]", "/gallery/".concat((_images$index2 = images[index]) === null || _images$index2 === void 0 ? void 0 : _images$index2.index), {
      shallow: true
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nYWxsZXJ5L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJHYWxsZXJ5UGFnZSIsImltYWdlcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwicmVjdCIsInNldFJlY3QiLCJmdWxsSW1hZ2UiLCJzZXRGdWxsSW1hZ2UiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiZmFkZSIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiaGlkZGVuIiwicG9pbnRlckV2ZW50cyIsImN1cnNvciIsImV4aXQiLCJzdGFnZ2VyIiwic3RhZ2dlckNoaWxkcmVuIiwib25JbWFnZUNsaWNrIiwiZXZlbnQiLCJpbmRleCIsInRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVybHMiLCJoaWdoIiwicHVzaCIsInNoYWxsb3ciLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5MZWZ0IiwiZGVsYXkiLCJwb3NpdGlvbiIsIngiLCJvYmplY3RGaXQiLCJib3JkZXJSYWRpdXMiLCJtYXhXaWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJib3hTaXppbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJtYXAiLCJpbWFnZSIsIndpbGxDaGFuZ2UiLCJsb3ciLCJlIiwiZ2V0SW5pdGlhbFByb3BzIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUNsQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURrQyxrQkFHVkMsc0RBQVEsQ0FBQ0MsU0FBRCxDQUhFO0FBQUEsTUFHM0JDLElBSDJCO0FBQUEsTUFHckJDLE9BSHFCOztBQUFBLG1CQUlBSCxzREFBUSxDQUFDLEVBQUQsQ0FKUjtBQUFBLE1BSTNCSSxTQUoyQjtBQUFBLE1BSWhCQyxZQUpnQjs7QUFNbENDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWU4sSUFBWjtBQUNBSyxXQUFPLENBQUNDLEdBQVIsQ0FBWU4sSUFBSSxLQUFLRCxTQUFULEdBQXFCLENBQXJCLEdBQXlCLENBQXJDO0FBQ0QsR0FIUSxFQUdOLENBQUNDLElBQUQsQ0FITSxDQUFUO0FBS0EsTUFBTU8sSUFBSSxHQUFHO0FBQ1hDLFdBQU8sRUFBRTtBQUNQQyxPQUFDLEVBQUUsRUFESTtBQUVQQyxhQUFPLEVBQUU7QUFGRixLQURFO0FBS1hDLFdBQU8sRUFBRTtBQUNQRixPQUFDLEVBQUUsQ0FESTtBQUVQQyxhQUFPLEVBQUUsQ0FGRjtBQUdQRSxnQkFBVSxFQUFFO0FBQ1ZDLGdCQUFRLEVBQUUsR0FEQTtBQUVWQyxZQUFJLEVBQUUsQ0FBQyxJQUFELEVBQU8sQ0FBUCxFQUFVLEdBQVYsRUFBZSxDQUFmO0FBRkk7QUFITCxLQUxFO0FBYVhDLFVBQU0sRUFBRTtBQUNOTixPQUFDLEVBQUUsQ0FERztBQUVOQyxhQUFPLEVBQUUsQ0FGSDtBQUdOTSxtQkFBYSxFQUFFLE1BSFQ7QUFJTkMsWUFBTSxFQUFFLFNBSkY7QUFLTkwsZ0JBQVUsRUFBRTtBQUNWQyxnQkFBUSxFQUFFLEdBREE7QUFFVkMsWUFBSSxFQUFFLENBQUMsR0FBRCxFQUFNLENBQU4sRUFBUyxJQUFULEVBQWUsQ0FBZjtBQUZJO0FBTE4sS0FiRztBQXVCWEksUUFBSSxFQUFFO0FBQ0pSLGFBQU8sRUFBRTtBQURMO0FBdkJLLEdBQWI7QUE0QkEsTUFBTVMsT0FBTyxHQUFHO0FBQ2RSLFdBQU8sRUFBRTtBQUNQQyxnQkFBVSxFQUFFO0FBQ1ZRLHVCQUFlLEVBQUU7QUFEUDtBQURMO0FBREssR0FBaEI7O0FBUUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQUE7O0FBQ3JDdEIsV0FBTyxDQUFDcUIsS0FBRCxhQUFDQSxLQUFELHdDQUFDQSxLQUFLLENBQUVFLE1BQVIsa0RBQUMsY0FBZUMscUJBQWYsRUFBRCxDQUFQO0FBQ0F0QixnQkFBWSxrQkFBQ1IsTUFBTSxDQUFDNEIsS0FBRCxDQUFQLHdFQUFDLGNBQWVHLElBQWhCLHVEQUFDLG1CQUFxQkMsSUFBdEIsQ0FBWjtBQUNBL0IsVUFBTSxDQUFDZ0MsSUFBUCxDQUFZLGVBQVosdUNBQXlDakMsTUFBTSxDQUFDNEIsS0FBRCxDQUEvQyxtREFBeUMsZUFBZUEsS0FBeEQsR0FBaUU7QUFDL0RNLGFBQU8sRUFBRTtBQURzRCxLQUFqRTtBQUdELEdBTkQ7O0FBUUEsU0FDRSwwREFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxXQUFPLEVBQUMsU0FBcEI7QUFBOEIsV0FBTyxFQUFDLFNBQXRDO0FBQWdELFFBQUksRUFBQyxNQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c3QixJQUFJLElBQ0gsMERBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsUUFBSSxFQUFFO0FBQ0o4QixTQUFHLEVBQUUsRUFERDtBQUVKQyxVQUFJLEVBQUUsS0FGRjtBQUdKQyxXQUFLLEVBQUUsSUFISDtBQUlKQyxZQUFNLEVBQUUsR0FKSjtBQUtKQyxnQkFBVSxFQUFFLENBQUMsR0FMVDtBQU1KdEIsZ0JBQVUsRUFBRTtBQUNWQyxnQkFBUSxFQUFFLEdBREE7QUFFVnNCLGFBQUssRUFBRSxHQUZHO0FBR1ZyQixZQUFJLEVBQUUsQ0FBQyxJQUFELEVBQU8sQ0FBUCxFQUFVLElBQVYsRUFBZ0IsQ0FBaEI7QUFISTtBQU5SLEtBRFI7QUFhRSxPQUFHLEVBQUU7QUFDSHNCLGNBQVEsRUFBRSxPQURQO0FBRUhOLFNBQUcsRUFBRTlCLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFUyxDQUZSO0FBR0hzQixVQUFJLEVBQUUvQixJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRXFDLENBSFQ7QUFJSEwsV0FBSyxFQUFFaEMsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVnQyxLQUpWO0FBS0hDLFlBQU0sRUFBRWpDLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFaUM7QUFMWCxLQWJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FxQkU7QUFDRSxPQUFHLEVBQUUvQixTQURQO0FBRUUsT0FBRyxFQUFFO0FBQ0g4QixXQUFLLEVBQUUsTUFESjtBQUVIQyxZQUFNLEVBQUUsTUFGTDtBQUdISyxlQUFTLEVBQUUsT0FIUjtBQUlIQyxrQkFBWSxFQUFFO0FBSlgsS0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckJGLENBRkosRUFrQ0UsMERBQUMsc0RBQUQ7QUFDRSxhQUFTLE1BRFg7QUFFRSxPQUFHLEVBQUU7QUFDSEMsY0FBUSxFQUFFLElBRFA7QUFFSEMsWUFBTSxFQUFFLFFBRkw7QUFHSEMsYUFBTyxFQUFFLEVBSE47QUFJSEMsZUFBUyxFQUFFO0FBSlIsS0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0UsMERBQUMsNERBQUQ7QUFDRSxZQUFRLEVBQUMsWUFEWDtBQUVFLE9BQUcsRUFBRTtBQUNIQyxjQUFRLEVBQUUsRUFEUDtBQUVIQyxnQkFBVSxFQUFFLEdBRlQ7QUFHSEMsZUFBUyxFQUFFLEdBSFI7QUFJSEMsa0JBQVksRUFBRTtBQUpYLEtBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBbENGLEVBcURFLDBEQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLFlBQVEsRUFBRTVCLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBNEIsT0FBRyxFQUFFO0FBQUVxQixjQUFRLEVBQUUsSUFBWjtBQUFrQkMsWUFBTSxFQUFFO0FBQTFCLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzlDLE1BQU0sQ0FBQ3FELEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVExQixLQUFSO0FBQUE7O0FBQUEsV0FDViwwREFBQyxzREFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxDQUFmO0FBQWtCLFNBQUcsRUFBRUEsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLDBEQUFDLG9EQUFELENBQVEsR0FBUjtBQUNBO0FBQ0UsY0FBUSxFQUFFaEIsSUFGWjtBQUdFLGFBQU8sRUFBRSxDQUFDUCxJQUFELEdBQVEsU0FBUixHQUFvQixRQUgvQixDQUlFO0FBQ0E7QUFMRjtBQU1FLFNBQUcsRUFBRTtBQUFFa0Qsa0JBQVUsRUFBRSxXQUFkO0FBQTJCakMsY0FBTSxFQUFFO0FBQW5DLE9BTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQWFFO0FBQ0UsU0FBRyxFQUFFZ0MsS0FBRixhQUFFQSxLQUFGLHNDQUFFQSxLQUFLLENBQUV2QixJQUFULGdEQUFFLFlBQWF5QixHQURwQjtBQUVFLGFBQU8sRUFBRSxpQkFBQ0MsQ0FBRDtBQUFBLGVBQU8vQixZQUFZLENBQUMrQixDQUFELEVBQUk3QixLQUFKLENBQW5CO0FBQUEsT0FGWDtBQUdFLFNBQUcsRUFBRTtBQUNIUyxhQUFLLEVBQUUsTUFESjtBQUVIQyxjQUFNLEVBQUUsR0FGTDtBQUdISyxpQkFBUyxFQUFFLE9BSFI7QUFJSEMsb0JBQVksRUFBRTtBQUpYLE9BSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWJGLENBREYsQ0FEVTtBQUFBLEdBQVgsQ0FESCxDQURGLENBckRGLENBREY7QUF5RkQsQ0FoSkQ7O0dBQU03QyxXO1VBQ1dHLHFEOzs7S0FEWEgsVzs7QUFrSk5BLFdBQVcsQ0FBQzJELGVBQVosR0FBOEIsWUFBTTtBQUNsQyxNQUFNMUQsTUFBTSxHQUFHMkQsbURBQWY7QUFDQSxTQUFPO0FBQUUzRCxVQUFNLEVBQU5BO0FBQUYsR0FBUDtBQUNELENBSEQ7O0FBS2VELDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxnYWxsZXJ5LmpzLmExMWVjNWY2YzY4ZWQwYTA5ZDZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcclxuaW1wb3J0IGRhdGEgZnJvbSBcIi4uLy4uL3V0aWxzL2RhdGFcIjtcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSwgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1vdGlvbiwgTW90aW9uUHJvcHMgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBHYWxsZXJ5UGFnZSA9ICh7IGltYWdlcyB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtyZWN0LCBzZXRSZWN0XSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW2Z1bGxJbWFnZSwgc2V0RnVsbEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVjdCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZWN0ID09PSB1bmRlZmluZWQgPyAxIDogMCk7XHJcbiAgfSwgW3JlY3RdKTtcclxuXHJcbiAgY29uc3QgZmFkZSA9IHtcclxuICAgIGluaXRpYWw6IHtcclxuICAgICAgeTogNjAsXHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICB9LFxyXG4gICAgYW5pbWF0ZToge1xyXG4gICAgICB5OiAwLFxyXG4gICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgZHVyYXRpb246IDAuOCxcclxuICAgICAgICBlYXNlOiBbMC4yNSwgMSwgMC41LCAxXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBoaWRkZW46IHtcclxuICAgICAgeTogMCxcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXHJcbiAgICAgIGN1cnNvcjogXCJkZWZhdWx0XCIsXHJcbiAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICBkdXJhdGlvbjogMC40LFxyXG4gICAgICAgIGVhc2U6IFswLjUsIDAsIDAuNzUsIDBdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGV4aXQ6IHtcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3RhZ2dlciA9IHtcclxuICAgIGFuaW1hdGU6IHtcclxuICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgIHN0YWdnZXJDaGlsZHJlbjogMSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25JbWFnZUNsaWNrID0gKGV2ZW50LCBpbmRleCkgPT4ge1xyXG4gICAgc2V0UmVjdChldmVudD8udGFyZ2V0Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XHJcbiAgICBzZXRGdWxsSW1hZ2UoaW1hZ2VzW2luZGV4XT8udXJscz8uaGlnaCk7XHJcbiAgICByb3V0ZXIucHVzaChcIi9nYWxsZXJ5L1tpZF1cIiwgYC9nYWxsZXJ5LyR7aW1hZ2VzW2luZGV4XT8uaW5kZXh9YCwge1xyXG4gICAgICBzaGFsbG93OiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2IGluaXRpYWw9XCJpbml0aWFsXCIgYW5pbWF0ZT1cImFuaW1hdGVcIiBleGl0PVwiZXhpdFwiPlxyXG4gICAgICB7cmVjdCAmJiAoXHJcbiAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgIGV4aXQ9e3tcclxuICAgICAgICAgICAgdG9wOiA3MixcclxuICAgICAgICAgICAgbGVmdDogXCI1MCVcIixcclxuICAgICAgICAgICAgd2lkdGg6IDEyMDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogNDIwLFxyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAtNjAwLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDAuMyxcclxuICAgICAgICAgICAgICBkZWxheTogMC40LFxyXG4gICAgICAgICAgICAgIGVhc2U6IFswLjY1LCAwLCAwLjM1LCAxXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjc3M9e3tcclxuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgICAgICAgdG9wOiByZWN0Py55LFxyXG4gICAgICAgICAgICBsZWZ0OiByZWN0Py54LFxyXG4gICAgICAgICAgICB3aWR0aDogcmVjdD8ud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogcmVjdD8uaGVpZ2h0LFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17ZnVsbEltYWdlfVxyXG4gICAgICAgICAgICBjc3M9e3tcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEyLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgY3NzPXt7XHJcbiAgICAgICAgICBtYXhXaWR0aDogMTIwMCxcclxuICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICAgICAgICAgIHBhZGRpbmc6IDE2LFxyXG4gICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgIGNoaWxkcmVuPVwiTXkgZ2FsbGVyeVwiXHJcbiAgICAgICAgICBjc3M9e3tcclxuICAgICAgICAgICAgZm9udFNpemU6IDMyLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogMTA4LFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDUyLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtzdGFnZ2VyfT5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0gY3NzPXt7IG1heFdpZHRoOiAxMjAwLCBtYXJnaW46IFwiMCBhdXRvXCIgfX0+XHJcbiAgICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e2ZhZGV9XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPXshcmVjdCA/IFwiYW5pbWF0ZVwiIDogXCJoaWRkZW5cIn1cclxuICAgICAgICAgICAgICAgIC8vIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDAuOTYgfX1cclxuICAgICAgICAgICAgICAgIC8vIHdoaWxlVGFwPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX1cclxuICAgICAgICAgICAgICAgIGNzcz17eyB3aWxsQ2hhbmdlOiBcInRyYW5zZm9ybVwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvZ2FsbGVyeS9baWRdXCJcclxuICAgICAgICAgICAgICAgICAgYXM9e2AvZ2FsbGVyeS8ke2ltYWdlc1tpbmRleF0/LmluZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgIHBhc3NIcmVmPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgID4gKi99XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2U/LnVybHM/Lmxvd31cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG9uSW1hZ2VDbGljayhlLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgIGNzcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI3MixcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEyLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkdhbGxlcnlQYWdlLmdldEluaXRpYWxQcm9wcyA9ICgpID0+IHtcclxuICBjb25zdCBpbWFnZXMgPSBkYXRhO1xyXG4gIHJldHVybiB7IGltYWdlcyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
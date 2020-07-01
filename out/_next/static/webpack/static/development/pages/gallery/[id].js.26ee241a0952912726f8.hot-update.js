webpackHotUpdate("static\\development\\pages\\gallery\\[id].js",{

/***/ "./pages/gallery/[id].tsx":
/*!********************************!*\
  !*** ./pages/gallery/[id].tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/data */ "./utils/data.tsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\git\\experiments\\next-route-transitions\\pages\\gallery\\[id].tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/** @jsx jsx */





var GalleryImage = function GalleryImage(_ref) {
  var _image$urls;

  var image = _ref.image;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    initial: "initial",
    animate: "animate",
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    css: {
      maxWidth: 1200,
      margin: "0 auto",
      paddingTop: 72,
      boxSizing: "border-box"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("img", {
    src: image === null || image === void 0 ? void 0 : (_image$urls = image.urls) === null || _image$urls === void 0 ? void 0 : _image$urls.high,
    css: {
      width: "100%",
      height: 420,
      objectFit: "cover",
      borderRadius: 12
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    variants: {
      animate: {
        transition: {
          staggerChildren: 0.3
        }
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    css: {
      maxWidth: 1200,
      margin: "0 auto",
      paddingTop: 48,
      boxSizing: "border-box"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    initial: {
      opacity: 0,
      y: 40
    },
    animate: {
      opacity: 1,
      y: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    children: image === null || image === void 0 ? void 0 : image.title,
    variant: "h2",
    css: {
      fontWeight: 500
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    css: {
      maxWidth: 1200,
      margin: "0 auto",
      paddingTop: 24,
      boxSizing: "border-box"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    initial: {
      opacity: 0,
      y: 40
    },
    animate: {
      opacity: 1,
      y: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    children: image === null || image === void 0 ? void 0 : image.author,
    variant: "body1",
    css: {
      fontSize: 18,
      fontWeight: 500
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    css: {
      maxWidth: 1200,
      margin: "0 auto",
      paddingTop: 36,
      boxSizing: "border-box"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    initial: {
      opacity: 0,
      y: 40
    },
    animate: {
      opacity: 1,
      y: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum risus sit amet gravida iaculis. Pellentesque aliquet egestas porta. In ornare arcu vel urna vulputate, quis condimentum mauris hendrerit. Mauris faucibus sed magna laoreet condimentum. Praesent commodo metus et odio feugiat tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vel rutrum enim, eget pretium mauris. Aliquam ultricies mattis nisl, nec tempor lacus luctus eu.",
    variant: "body1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  })))));
};

_c = GalleryImage;

function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

GalleryImage.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var image;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // const image = data[parseInt(ctx?.query?.imageId)];
            image = _utils_data__WEBPACK_IMPORTED_MODULE_4__["default"].find(function (image) {
              var _ctx$query;

              return image.index === parseInt(ctx === null || ctx === void 0 ? void 0 : (_ctx$query = ctx.query) === null || _ctx$query === void 0 ? void 0 : _ctx$query.id);
            });
            _context.next = 3;
            return sleep(2000);

          case 3:
            return _context.abrupt("return", {
              image: image
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (GalleryImage);

var _c;

$RefreshReg$(_c, "GalleryImage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nYWxsZXJ5Ly50c3giXSwibmFtZXMiOlsiR2FsbGVyeUltYWdlIiwiaW1hZ2UiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nVG9wIiwiYm94U2l6aW5nIiwidXJscyIsImhpZ2giLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImJvcmRlclJhZGl1cyIsImFuaW1hdGUiLCJzdGFnZ2VyQ2hpbGRyZW4iLCJ5IiwidGl0bGUiLCJmb250V2VpZ2h0IiwiYXV0aG9yIiwiZm9udFNpemUiLCJzbGVlcCIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZGF0YSIsImZpbmQiLCJpbmRleCIsInBhcnNlSW50IiwicXVlcnkiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDbEMsU0FDRSwwREFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxXQUFPLEVBQUMsU0FEVjtBQUVFLFdBQU8sRUFBQyxTQUZWO0FBR0UsUUFBSSxFQUFFO0FBQUVDLGFBQU8sRUFBRSxDQUFYO0FBQWNDLGdCQUFVLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRTtBQUFaO0FBQTFCLEtBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLDBEQUFDLHNEQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsT0FBRyxFQUFFO0FBQ0hDLGNBQVEsRUFBRSxJQURQO0FBRUhDLFlBQU0sRUFBRSxRQUZMO0FBR0hDLGdCQUFVLEVBQUUsRUFIVDtBQUlIQyxlQUFTLEVBQUU7QUFKUixLQUZQO0FBQUE7QUFBQTtBQUFB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LGFBQU8sRUFBRSxDQUFYO0FBQWNlLE9BQUMsRUFBRTtBQUFqQixLQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSwwREFBQyw0REFBRDtBQUNFLFlBQVEsRUFBQyxrZEFEWDtBQUVFLFdBQU8sRUFBQyxPQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQVRGLENBM0NGLENBeEJGLENBREY7QUEwRkQsQ0EzRkQ7O0tBQU1qQixZOztBQTZGTixTQUFTc0IsS0FBVCxDQUFlQyxFQUFmLEVBQW1CO0FBQ2pCLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUFDLE9BQU87QUFBQSxXQUFJQyxVQUFVLENBQUNELE9BQUQsRUFBVUYsRUFBVixDQUFkO0FBQUEsR0FBbkIsQ0FBUDtBQUNEOztBQUdEdkIsWUFBWSxDQUFDMkIsZUFBYjtBQUFBLCtMQUErQixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDN0I7QUFDTTNCLGlCQUZ1QixHQUVmNEIsbURBQUksQ0FBQ0MsSUFBTCxDQUFVLFVBQUM3QixLQUFEO0FBQUE7O0FBQUEscUJBQVdBLEtBQUssQ0FBQzhCLEtBQU4sS0FBZ0JDLFFBQVEsQ0FBQ0osR0FBRCxhQUFDQSxHQUFELHFDQUFDQSxHQUFHLENBQUVLLEtBQU4sK0NBQUMsV0FBWUMsRUFBYixDQUFuQztBQUFBLGFBQVYsQ0FGZTtBQUFBO0FBQUEsbUJBSXZCWixLQUFLLENBQUMsSUFBRCxDQUprQjs7QUFBQTtBQUFBLDZDQU10QjtBQUFFckIsbUJBQUssRUFBTEE7QUFBRixhQU5zQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEvQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTZUQsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGdhbGxlcnlcXFtpZF0uanMuMjZlZTI0MWEwOTUyOTEyNzI2ZjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xyXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vLi4vdXRpbHMvZGF0YVwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCBHYWxsZXJ5SW1hZ2UgPSAoeyBpbWFnZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcclxuICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxyXG4gICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuNSB9IH19XHJcbiAgICA+XHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgY3NzPXt7XHJcbiAgICAgICAgICBtYXhXaWR0aDogMTIwMCxcclxuICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICAgICAgICAgIHBhZGRpbmdUb3A6IDcyLFxyXG4gICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtpbWFnZT8udXJscz8uaGlnaH1cclxuICAgICAgICAgIGNzcz17e1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogNDIwLFxyXG4gICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIHZhcmlhbnRzPXt7IGFuaW1hdGU6IHsgdHJhbnNpdGlvbjogeyBzdGFnZ2VyQ2hpbGRyZW46IDAuMyB9IH0gfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIGNzcz17e1xyXG4gICAgICAgICAgICBtYXhXaWR0aDogMTIwMCxcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiA0OCxcclxuICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiA0MCB9fVxyXG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjaGlsZHJlbj17aW1hZ2U/LnRpdGxlfVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoMlwiXHJcbiAgICAgICAgICAgICAgY3NzPXt7IGZvbnRXZWlnaHQ6IDUwMCB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBjc3M9e3tcclxuICAgICAgICAgICAgbWF4V2lkdGg6IDEyMDAsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICAgICAgICAgICAgcGFkZGluZ1RvcDogMjQsXHJcbiAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogNDAgfX1cclxuICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY2hpbGRyZW49e2ltYWdlPy5hdXRob3J9XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcclxuICAgICAgICAgICAgICBjc3M9e3sgZm9udFNpemU6IDE4LCBmb250V2VpZ2h0OiA1MDAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgY3NzPXt7XHJcbiAgICAgICAgICAgIG1heFdpZHRoOiAxMjAwLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IDM2LFxyXG4gICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDQwIH19XHJcbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuPVwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTnVuYyBydXRydW0gcmlzdXMgc2l0IGFtZXQgZ3JhdmlkYSBpYWN1bGlzLiBQZWxsZW50ZXNxdWUgYWxpcXVldCBlZ2VzdGFzIHBvcnRhLiBJbiBvcm5hcmUgYXJjdSB2ZWwgdXJuYSB2dWxwdXRhdGUsIHF1aXMgY29uZGltZW50dW0gbWF1cmlzIGhlbmRyZXJpdC4gTWF1cmlzIGZhdWNpYnVzIHNlZCBtYWduYSBsYW9yZWV0IGNvbmRpbWVudHVtLiBQcmFlc2VudCBjb21tb2RvIG1ldHVzIGV0IG9kaW8gZmV1Z2lhdCB0ZW1wdXMuIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy4gTnVuYyB2ZWwgcnV0cnVtIGVuaW0sIGVnZXQgcHJldGl1bSBtYXVyaXMuIEFsaXF1YW0gdWx0cmljaWVzIG1hdHRpcyBuaXNsLCBuZWMgdGVtcG9yIGxhY3VzIGx1Y3R1cyBldS5cIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNsZWVwKG1zKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG59XHJcblxyXG5cclxuR2FsbGVyeUltYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAvLyBjb25zdCBpbWFnZSA9IGRhdGFbcGFyc2VJbnQoY3R4Py5xdWVyeT8uaW1hZ2VJZCldO1xyXG4gIGNvbnN0IGltYWdlID0gZGF0YS5maW5kKChpbWFnZSkgPT4gaW1hZ2UuaW5kZXggPT09IHBhcnNlSW50KGN0eD8ucXVlcnk/LmlkKSk7XHJcblxyXG4gIGF3YWl0IHNsZWVwKDIwMDApO1xyXG5cclxuICByZXR1cm4geyBpbWFnZSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeUltYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
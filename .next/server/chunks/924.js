"use strict";
exports.id = 924;
exports.ids = [924];
exports.modules = {

/***/ 5609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ UserContext),
/* harmony export */   "f": () => (/* binding */ UserContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);



const UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const UserContextProvider = ({ children  })=>{
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { USI: token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (token) {
            setUser(JSON.parse(token));
        }
    }, [
        token
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserContext.Provider, {
        value: {
            setUser,
            user
        },
        children: children
    });
};


/***/ }),

/***/ 7103:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ auth),
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// import { getAnalytics } from 'firebase/analytics'


const firebaseConfig = {
    apiKey: "AIzaSyBDHWn_kjYpOgykNCH4OMqAFWMsPpTt-cE",
    authDomain: "pao-delivery.firebaseapp.com",
    projectId: "pao-delivery",
    storageBucket: "pao-delivery.appspot.com",
    messagingSenderId: "463000980783",
    appId: "1:463000980783:web:be7494da13e8c2a11f25da",
    measurementId: "G-ECTLKJPQWV"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
// const analytics = getAnalytics(app)
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
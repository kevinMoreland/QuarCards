function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/alert-popup/alert-popup.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/alert-popup/alert-popup.component.ts ***!
    \******************************************************/

  /*! exports provided: AlertPopupComponent */

  /***/
  function srcAppAlertPopupAlertPopupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertPopupComponent", function () {
      return AlertPopupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["alertTitle"];
    var _c1 = ["alertBody"];

    var _c2 = function _c2(a0) {
      return {
        "display": a0,
        "opacity": 1
      };
    };

    var AlertPopupComponent =
    /*#__PURE__*/
    function () {
      function AlertPopupComponent() {
        _classCallCheck(this, AlertPopupComponent);
      }

      _createClass(AlertPopupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "open",
        value: function open(alertTitle, alertMessage) {
          close();
          this.bodyText.nativeElement.textContent = alertMessage;
          this.titleText.nativeElement.textContent = alertTitle;
          this.popupIsOpen = true;
        }
      }, {
        key: "close",
        value: function close() {
          this.popupIsOpen = false;
        }
      }]);

      return AlertPopupComponent;
    }();

    AlertPopupComponent.ɵfac = function AlertPopupComponent_Factory(t) {
      return new (t || AlertPopupComponent)();
    };

    AlertPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlertPopupComponent,
      selectors: [["app-alert-popup"]],
      viewQuery: function AlertPopupComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.titleText = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bodyText = _t.first);
        }
      },
      decls: 12,
      vars: 3,
      consts: [["id", "alertModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "alertModalTitle", "aria-hidden", "true", 1, "modal", "fade", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "alertModalTitle", 1, "modal-title"], ["alertTitle", ""], [1, "modal-body"], ["alertBody", ""], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-success", 3, "click"]],
      template: function AlertPopupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "h5", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", null, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertPopupComponent_Template_button_click_10_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx.popupIsOpen ? "block" : "none"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      styles: ["#alertModal[_ngcontent-%COMP%] {\r\n    white-space: normal;\r\n    background: rgba(91, 91, 91, 0.70);\r\n}\r\n.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-family: 'Roboto Slab', serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxlcnQtcG9wdXAvYWxlcnQtcG9wdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGlDQUFpQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0LXBvcHVwL2FsZXJ0LXBvcHVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWxlcnRNb2RhbCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg5MSwgOTEsIDkxLCAwLjcwKTtcclxufVxyXG4ubW9kYWwtYm9keSBwe1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-alert-popup',
          templateUrl: './alert-popup.component.html',
          styleUrls: ['./alert-popup.component.css']
        }]
      }], function () {
        return [];
      }, {
        titleText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["alertTitle", {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }],
        bodyText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["alertBody", {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: browserRefresh, AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "browserRefresh", function () {
      return browserRefresh;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var browserRefresh = false;

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.title = 'client';
        this.subscription = router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            browserRefresh = !router.navigated;
          }
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _game_view_game_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./game-view/game-view.component */
    "./src/app/game-view/game-view.component.ts");
    /* harmony import */


    var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./main-menu/main-menu.component */
    "./src/app/main-menu/main-menu.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _playing_card_playing_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./playing-card/playing-card.component */
    "./src/app/playing-card/playing-card.component.ts");
    /* harmony import */


    var _player_block_player_block_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./player-block/player-block.component */
    "./src/app/player-block/player-block.component.ts");
    /* harmony import */


    var _my_cards_my_cards_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./my-cards/my-cards.component */
    "./src/app/my-cards/my-cards.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _chat_chat_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./chat/chat.component */
    "./src/app/chat/chat.component.ts");
    /* harmony import */


    var _results_popup_results_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./results-popup/results-popup.component */
    "./src/app/results-popup/results-popup.component.ts");
    /* harmony import */


    var _alert_popup_alert_popup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./alert-popup/alert-popup.component */
    "./src/app/alert-popup/alert-popup.component.ts");
    /* harmony import */


    var _room_code_room_code_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./room-code/room-code.component */
    "./src/app/room-code/room-code.component.ts");

    var appRoutes = [{
      path: 'game',
      component: _game_view_game_view_component__WEBPACK_IMPORTED_MODULE_6__["GameViewComponent"]
    }, {
      path: 'main',
      component: _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_7__["MainMenuComponent"]
    }, {
      path: '',
      redirectTo: '/main',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _game_view_game_view_component__WEBPACK_IMPORTED_MODULE_6__["GameViewComponent"], _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_7__["MainMenuComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"], _playing_card_playing_card_component__WEBPACK_IMPORTED_MODULE_9__["PlayingCardComponent"], _player_block_player_block_component__WEBPACK_IMPORTED_MODULE_10__["PlayerBlockComponent"], _my_cards_my_cards_component__WEBPACK_IMPORTED_MODULE_11__["MyCardsComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_13__["ChatComponent"], _results_popup_results_popup_component__WEBPACK_IMPORTED_MODULE_14__["ResultsPopupComponent"], _alert_popup_alert_popup_component__WEBPACK_IMPORTED_MODULE_15__["AlertPopupComponent"], _room_code_room_code_component__WEBPACK_IMPORTED_MODULE_16__["RoomCodeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _game_view_game_view_component__WEBPACK_IMPORTED_MODULE_6__["GameViewComponent"], _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_7__["MainMenuComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"], _playing_card_playing_card_component__WEBPACK_IMPORTED_MODULE_9__["PlayingCardComponent"], _player_block_player_block_component__WEBPACK_IMPORTED_MODULE_10__["PlayerBlockComponent"], _my_cards_my_cards_component__WEBPACK_IMPORTED_MODULE_11__["MyCardsComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_13__["ChatComponent"], _results_popup_results_popup_component__WEBPACK_IMPORTED_MODULE_14__["ResultsPopupComponent"], _alert_popup_alert_popup_component__WEBPACK_IMPORTED_MODULE_15__["AlertPopupComponent"], _room_code_room_code_component__WEBPACK_IMPORTED_MODULE_16__["RoomCodeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/card.service.ts":
  /*!*********************************!*\
    !*** ./src/app/card.service.ts ***!
    \*********************************/

  /*! exports provided: CardService */

  /***/
  function srcAppCardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardService", function () {
      return CardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./socket.service */
    "./src/app/socket.service.ts");

    var CardService =
    /*#__PURE__*/
    function () {
      function CardService(http, socketService) {
        _classCallCheck(this, CardService);

        this.http = http;
        this.socketService = socketService; //hostName: String = 'http://localhost:3000';
        //hostName = 'https://strawberry-sundae-17314.herokuapp.com';

        this.hostName = 'http://www.qcards.us';
      }

      _createClass(CardService, [{
        key: "getCards",
        value: function getCards() {
          return this.http.get("".concat(this.hostName, "/api/cards"));
        }
      }, {
        key: "getCard",
        value: function getCard(cardNum) {
          return this.http.get("".concat(this.hostName, "/api/cardByNum/") + cardNum);
        }
      }, {
        key: "getThreeCards",
        value: function getThreeCards() {
          return this.http.get("".concat(this.hostName, "/api/threeCards/").concat(this.socketService.connectedRoom));
        }
      }]);

      return CardService;
    }();

    CardService.ɵfac = function CardService_Factory(t) {
      return new (t || CardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]));
    };

    CardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CardService,
      factory: CardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/chat/chat.component.ts":
  /*!****************************************!*\
    !*** ./src/app/chat/chat.component.ts ***!
    \****************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../socket.service */
    "./src/app/socket.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0(a0) {
      return {
        "background-color": a0
      };
    };

    function ChatComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var msg_r49 = ctx.$implicit;
        var i_r50 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, i_r50 % 2 == 0 ? "#dbdbdb" : "white"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", msg_r49, " ");
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "width": a0
      };
    };

    var _c2 = function _c2(a0) {
      return {
        "x": a0
      };
    };

    var _c3 = function _c3(a0) {
      return {
        "display": a0
      };
    };

    var ChatComponent =
    /*#__PURE__*/
    function () {
      function ChatComponent(socketService) {
        _classCallCheck(this, ChatComponent);

        this.socketService = socketService;
        this.chatOpened = false;
        this.chatMessages = [];
      }

      _createClass(ChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log(this.socketService.socket.id);
          this.chatSubscription = this.socketService.receiveChatMessage().subscribe(function (msg) {
            console.log(_this.chatMessages);

            _this.chatMessages.push(msg);
          });
        }
      }, {
        key: "onSendChat",
        value: function onSendChat() {
          this.socketService.sendChatMessage(this.message);
          this.message = '';
        }
      }, {
        key: "onToggleChat",
        value: function onToggleChat(state) {
          this.chatOpened = state;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.chatSubscription) {
            this.chatSubscription.unsubscribe();
          }
        }
      }]);

      return ChatComponent;
    }();

    ChatComponent.ɵfac = function ChatComponent_Factory(t) {
      return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]));
    };

    ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatComponent,
      selectors: [["app-chat"]],
      decls: 21,
      vars: 12,
      consts: [[1, "open-button", "tri-right", "btm-left", 3, "ngStyle", "ngClass", "click"], ["id", "myForm", 1, "chat-popup", 3, "ngStyle"], [1, "form-container"], [1, "row"], [1, "col"], [1, "col", "text-right"], ["type", "button", 1, "btn", "cancel", 3, "click"], [1, "row", "messages-container"], ["class", "chat-message", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["placeholder", "Write something to your friends!", "name", "msg", "rows", "2", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", 3, "click"], [1, "chat-message", 3, "ngStyle"]],
      template: function ChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_0_listener() {
            return ctx.onToggleChat(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_9_listener() {
            return ctx.onToggleChat(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ChatComponent_div_13_Template, 2, 4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "textarea", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_textarea_ngModelChange_16_listener($event) {
            return ctx.message = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_19_listener() {
            return ctx.onSendChat();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.chatOpened ? "3.5em" : "4.5em"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, ctx.chatOpened));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.chatOpened ? "X" : "Chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c3, ctx.chatOpened ? "block" : "none"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chatMessages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');\n\n.x[_ngcontent-%COMP%] {\n    font-family: 'Righteous', cursive;\n}\n.open-button[_ngcontent-%COMP%] {\n    font-size: 18px;\n    background-color: #4b85e3;\n    color: white;\n    padding: 0px 0px;\n    border: none;\n    cursor: pointer;\n    opacity: 0.8;\n    position: fixed;\n    bottom: 28px;\n    right: 28px;\n    \n    height: 3.2em;\n    border-radius: 25px 25px 0px 25px;\n}\n.tri-right.btm-left[_ngcontent-%COMP%]:after {\n    content: ' ';\n    position: absolute;\n    \n    \n    right: 0px;\n    \n    bottom: -8px;\n    border: 20px solid;\n    border-color: transparent #4b85e3 transparent transparent;\n}\n\n.chat-popup[_ngcontent-%COMP%] {\n    \n    position: fixed;\n    bottom: 0;\n    right: 10px;\n    border: 3px solid #5c5c5c;\n    border-radius: 2px;\n    z-index: 9;\n    height: 70%;\n}\n\n.form-container[_ngcontent-%COMP%] {\n    max-width: 300px;\n    height: 100%;\n    padding: 10px;\n    background-color: white;\n}\n\n.form-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 100%;\n    padding: 10px;\n    margin: 10px 0 15px 0;\n    border: none;\n    background: #f1f1f1;\n    resize: none;\n    min-height: 25px;\n}\n\n.form-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n    background-color: #ddd;\n    outline: none;\n}\n\n.form-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    background-color: #4CAF50;\n    color: white;\n    border: none;\n    cursor: pointer;\n    width: 40%;\n    opacity: 0.8;\n}\n\n.form-container[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%] {\n    background-color: red;\n    \n    padding: 2px 2px;\n    \n    width: 25px;\n    height: 25px;\n    border-radius: 15px;\n}\n.chat-message[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px 5px;\n    bottom: 0;\n}\n.messages-container[_ngcontent-%COMP%] {\n    height: 60%;\n    overflow-y: auto;\n    bottom: 0;\n}\n\n.form-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .open-button[_ngcontent-%COMP%]:hover {\n    opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDhFQUE4RTtBQUQ5RSx3RUFBd0U7QUFHeEU7SUFDSSxpQ0FBaUM7QUFDckM7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGlDQUFpQztBQUNyQztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLFVBQVU7SUFDVixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5REFBeUQ7QUFDN0Q7QUFHQSx1Q0FBdUM7QUFFdkM7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmO0FBR0EscUNBQXFDO0FBRXJDO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBR0Esd0JBQXdCO0FBRXhCO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUdBLCtDQUErQztBQUUvQztJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCO0FBR0EsMkNBQTJDO0FBRTNDO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBR0Esb0RBQW9EO0FBRXBEO0lBQ0kscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjtBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7QUFFQSxzQ0FBc0M7QUFFdEM7O0lBRUksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCdXR0b24gdXNlZCB0byBvcGVuIHRoZSBjaGF0IGZvcm0gLSBmaXhlZCBhdCB0aGUgYm90dG9tIG9mIHRoZSBwYWdlICovXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SaWdodGVvdXMmZGlzcGxheT1zd2FwJyk7XG5cbi54IHtcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XG59XG5cbi5vcGVuLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Yjg1ZTM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDBweCAwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMjhweDtcbiAgICByaWdodDogMjhweDtcbiAgICAvKiB3aWR0aDogNC41ZW07ICovXG4gICAgaGVpZ2h0OiAzLjJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMHB4IDI1cHg7XG59XG5cbi50cmktcmlnaHQuYnRtLWxlZnQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcgJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLyogd2lkdGg6IDA7ICovXG4gICAgLyogaGVpZ2h0OiAwOyAqL1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgLyogdG9wOiBhdXRvOyAqL1xuICAgIGJvdHRvbTogLThweDtcbiAgICBib3JkZXI6IDIwcHggc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjNGI4NWUzIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuXG5cbi8qIFRoZSBwb3B1cCBjaGF0IC0gaGlkZGVuIGJ5IGRlZmF1bHQgKi9cblxuLmNoYXQtcG9wdXAge1xuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMTBweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjNWM1YzVjO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB6LWluZGV4OiA5O1xuICAgIGhlaWdodDogNzAlO1xufVxuXG5cbi8qIEFkZCBzdHlsZXMgdG8gdGhlIGZvcm0gY29udGFpbmVyICovXG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuXG4vKiBGdWxsLXdpZHRoIHRleHRhcmVhICovXG5cbi5mb3JtLWNvbnRhaW5lciB0ZXh0YXJlYSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDAgMTVweCAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xufVxuXG5cbi8qIFdoZW4gdGhlIHRleHRhcmVhIGdldHMgZm9jdXMsIGRvIHNvbWV0aGluZyAqL1xuXG4uZm9ybS1jb250YWluZXIgdGV4dGFyZWE6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuXG4vKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdC9zZW5kIGJ1dHRvbiAqL1xuXG4uZm9ybS1jb250YWluZXIgLmJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogNDAlO1xuICAgIG9wYWNpdHk6IDAuODtcbn1cblxuXG4vKiBBZGQgYSByZWQgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xuXG4uZm9ybS1jb250YWluZXIgLmNhbmNlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgICBwYWRkaW5nOiAycHggMnB4O1xuICAgIC8qIHJpZ2h0OiA2cHg7ICovXG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5jaGF0LW1lc3NhZ2Uge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICBib3R0b206IDA7XG59XG5cbi5tZXNzYWdlcy1jb250YWluZXIge1xuICAgIGhlaWdodDogNjAlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYm90dG9tOiAwO1xufVxuXG4vKiBBZGQgc29tZSBob3ZlciBlZmZlY3RzIHRvIGJ1dHRvbnMgKi9cblxuLmZvcm0tY29udGFpbmVyIC5idG46aG92ZXIsXG4ub3Blbi1idXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chat',
          templateUrl: './chat.component.html',
          styleUrls: ['./chat.component.css']
        }]
      }], function () {
        return [{
          type: _socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/game-view/game-view.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/game-view/game-view.component.ts ***!
    \**************************************************/

  /*! exports provided: GameViewComponent */

  /***/
  function srcAppGameViewGameViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameViewComponent", function () {
      return GameViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _entity_data_structures_card_modes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../entity/data-structures/card-modes */
    "./src/entity/data-structures/card-modes.ts");
    /* harmony import */


    var _results_popup_results_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../results-popup/results-popup.component */
    "./src/app/results-popup/results-popup.component.ts");
    /* harmony import */


    var _alert_popup_alert_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../alert-popup/alert-popup.component */
    "./src/app/alert-popup/alert-popup.component.ts");
    /* harmony import */


    var src_entity_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/entity/Card */
    "./src/entity/Card.ts");
    /* harmony import */


    var _socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../socket.service */
    "./src/app/socket.service.ts");
    /* harmony import */


    var _card_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../card.service */
    "./src/app/card.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _playing_card_playing_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../playing-card/playing-card.component */
    "./src/app/playing-card/playing-card.component.ts");
    /* harmony import */


    var _my_cards_my_cards_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../my-cards/my-cards.component */
    "./src/app/my-cards/my-cards.component.ts");
    /* harmony import */


    var _player_block_player_block_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../player-block/player-block.component */
    "./src/app/player-block/player-block.component.ts");

    function GameViewComponent_div_10_app_player_block_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-player-block", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("voted", function GameViewComponent_div_10_app_player_block_1_Template_app_player_block_voted_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r19.onVoted();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r18 = ctx.$implicit;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r18)("currMode", ctx_r17.currMode)("cardVotingOn", ctx_r17.votingPhrase);
      }
    }

    function GameViewComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameViewComponent_div_10_app_player_block_1_Template, 1, 3, "app-player-block", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.playerList);
      }
    }

    function GameViewComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No other players :(");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var GameViewComponent =
    /*#__PURE__*/
    function () {
      function GameViewComponent(socketService, cardService, router) {
        _classCallCheck(this, GameViewComponent);

        this.socketService = socketService;
        this.cardService = cardService;
        this.router = router;
        this.card1 = new src_entity_Card__WEBPACK_IMPORTED_MODULE_6__["default"](null);
        this.card2 = new src_entity_Card__WEBPACK_IMPORTED_MODULE_6__["default"](null);
        this.card3 = new src_entity_Card__WEBPACK_IMPORTED_MODULE_6__["default"](null);
      }

      _createClass(GameViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("init game view");
          this.browserRefresh = _app_component__WEBPACK_IMPORTED_MODULE_2__["browserRefresh"];

          if (this.browserRefresh) {
            this.router.navigate(['/']);
            return;
          }

          this.initRoutingSubscription(); //initialize turn boolean

          this.isTurn = this.socketService.isTurnOnStart; //initialize list of players

          this.playerList = this.socketService.allOtherPlayersOnStart;
          this.firstPlayer = this.isTurn && this.playerList.length == 0;
          this.initCardMode();
          this.initTurnSubscription();
          this.initPlayerListSubscription();
          this.initVoteResultsSubscription();
          this.initRoundIsCancelledSubscription();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          this.initCardPickedSubscription(); //welcome message
          //TODO this throws an error, fix it

          if (this.firstPlayer) {
            //the "setTimeout" avoids the ExpressionChangedAfterChecked error I was getting
            setTimeout(function () {
              _this2.alertPopup.open("You look lonely...", "Send the game code at the top of the screen to your friends so they can join you!");
            });
          } else if (!this.isTurn) {
            setTimeout(function () {
              _this2.alertPopup.open("Welcome Aboard", "Wait for your friend to pick a card, then vote for whoever you think the card best fits!");
            });
          }
        }
      }, {
        key: "initVoteResultsSubscription",
        value: function initVoteResultsSubscription() {
          var _this3 = this;

          //subscription returns an array with [overallResults including number votes each player got, 
          //                                    array of all winners (multiple in case of a tie),
          //                                    the text of the card that was voted on]
          this.voteResultsSubscription = this.socketService.getVoteResults().subscribe(function (results) {
            var overallResults = results[0];
            var winners = results[1];
            var cardText = results[2];

            if (_this3.isTurn) {
              _this3.resultsPopup.open(overallResults, winners, cardText);
            } else {
              _this3.alertPopup.open("Voting done!", "Wait for this round's card reader to reveal the results with the group");
            }
          });
        }
      }, {
        key: "initRoundIsCancelledSubscription",
        value: function initRoundIsCancelledSubscription() {
          var _this4 = this;

          this.roundIsCancelledSubscription = this.socketService.getRoundIsCancelled().subscribe(function (isNewHost) {
            if (!isNewHost) {
              _this4.currMode = _entity_data_structures_card_modes__WEBPACK_IMPORTED_MODULE_3__["cardMode"].waiting;
            }

            _this4.alertPopup.open("Someone Left", "The numb nut who was supposed to collect the vote results left the game. Restarting the previous round.");
          });
        }
      }, {
        key: "initCardPickedSubscription",
        value: function initCardPickedSubscription() {
          var _this5 = this;

          this.cardPickedSubscription = this.socketService.getPickedCard().subscribe(function (cardText) {
            var roomEmpty = _this5.playerList.length == 0;

            if (!roomEmpty) {
              //wait for the other players to vote
              if (_this5.currMode == _entity_data_structures_card_modes__WEBPACK_IMPORTED_MODULE_3__["cardMode"].myTurn) {
                _this5.currMode = _entity_data_structures_card_modes__WEBPACK_IMPORTED_MODULE_3__["cardMode"].waiting;
              } //allow voters to vote since a card was picked, and display the card
              else {
                  _this5.currMode = _entity_data_structures_card_modes__WEBPACK_IMPORTED_MODULE_3__["cardMode"].voting;
                  _this5.votingPhrase = cardText;
                }
            } else {
              _this5.alertPopup.open("Empty room...", "You can't pick a card if there's no one to vote");
            }
          });
        }
      }, {
        key: "initPlayerListSubscription",
        value: function initPlayerListSubscription() {
          var _this6 = this;

          this.playerListSubscription = this.socketService.getOtherPlayerList().subscribe(function (plist) {
            _this6.playerList = plist;

            if (plist.length == 0) {
              _this6.alertPopup.open("Empty room...", "Where did all your friends go?");

              _this6.currMode = _entity_data_structures_card_modes__WEBPACK_IMPORTED_MODULE_3__["cardMode"].myTurn;
            }
          });
        }
      }, {
        key: "initTurnSubscription",
        value: function initTurnSubscription() {
          var _this7 = this;

          this.isTurnSubscription = this.socketService.getIsTurn().subscribe(function (isTurn) {
            _this7.isTurn = isTurn;

            if (isTurn) {
              _this7.cardService.getThreeCards().subscribe(function (cardArray) {
                _this7.card1 = cardArray[0];
                _this7.card2 = cardArray[1];
                _this7.card3 = cardArray[2];
                _this7.currMode = _entity_data_structures_card_modes__WEBPACK_IMPORTED_MODULE_3__["cardMode"].myTurn;
              }, function (err) {
                console.log(err);
              });
            } else {
              _this7.currMode = _entity_data_structures_card_modes__WEBPACK_IMPORTED_MODULE_3__["cardMode"].waiting;
            }
          });
        }
      }, {
        key: "initRoutingSubscription",
        value: function initRoutingSubscription() {
          var _this8 = this;

          this.routingSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
              _this8.socketService.disconnectSocket();
            }
          });
        }
      }, {
        key: "initCardMode",
        value: function initCardMode() {
          var _this9 = this;

          //initially, get card mode and list of players other than current player
          if (this.socketService.isTurnOnStart) {
            this.cardService.getThreeCards().subscribe(function (cardArray) {
              _this9.card1 = cardArray[0];
              _this9.card2 = cardArray[1];
              _this9.card3 = cardArray[2];
              _this9.currMode = _entity_data_structures_card_modes__WEBPACK_IMPORTED_MODULE_3__["cardMode"].myTurn;
            }, function (err) {
              console.log(err);
            });
          } else {
            this.currMode = _entity_data_structures_card_modes__WEBPACK_IMPORTED_MODULE_3__["cardMode"].waiting;
          }
        }
      }, {
        key: "onVoted",
        value: function onVoted() {
          this.currMode = _entity_data_structures_card_modes__WEBPACK_IMPORTED_MODULE_3__["cardMode"].waiting;
        }
      }, {
        key: "getRoomCode",
        value: function getRoomCode() {
          return this.socketService.connectedRoom;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.routingSubscription) {
            this.routingSubscription.unsubscribe();
          }

          if (this.isTurnSubscription) {
            this.isTurnSubscription.unsubscribe();
          }

          if (this.playerListSubscription) {
            this.playerListSubscription.unsubscribe();
          }

          if (this.cardPickedSubscription) {
            this.cardPickedSubscription.unsubscribe();
          }

          if (this.voteResultsSubscription) {
            this.voteResultsSubscription.unsubscribe();
          }

          if (this.roundIsCancelledSubscription) {
            this.roundIsCancelledSubscription.unsubscribe();
          }
        }
      }]);

      return GameViewComponent;
    }();

    GameViewComponent.ɵfac = function GameViewComponent_Factory(t) {
      return new (t || GameViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_card_service__WEBPACK_IMPORTED_MODULE_8__["CardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    GameViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameViewComponent,
      selectors: [["app-game-view"]],
      viewQuery: function GameViewComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_results_popup_results_popup_component__WEBPACK_IMPORTED_MODULE_4__["ResultsPopupComponent"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_alert_popup_alert_popup_component__WEBPACK_IMPORTED_MODULE_5__["AlertPopupComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.resultsPopup = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.alertPopup = _t.first);
        }
      },
      outputs: {
        currMode: "currMode",
        votingPhrase: "votingPhrase"
      },
      decls: 32,
      vars: 13,
      consts: [[1, "container"], [1, "row"], [1, "col"], ["id", "room-code"], ["id", "code"], [1, "row", "player-space", "justify-content-between"], [1, "card", "text-white", "player-block-container"], ["class", "row", 4, "ngIf", "ngIfElse"], ["noPlayers", ""], ["cards", ""], [1, "col-4", "card-col"], [3, "currMode", "cardData", "numPlayers"], [3, "currMode", "cardData", "numPlayers", "votingPhraseText"], ["id", "mycards"], ["resultsPopup", ""], ["alertPopup", ""], ["class", "col-4", 3, "player", "currMode", "cardVotingOn", "voted", 4, "ngFor", "ngForOf"], [1, "col-4", 3, "player", "currMode", "cardVotingOn", "voted"], ["id", "no-players"]],
      template: function GameViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ROOM CODE: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GameViewComponent_div_10_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GameViewComponent_ng_template_11_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-playing-card", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-playing-card", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-playing-card", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-my-cards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-results-popup", null, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-alert-popup", null, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getRoomCode());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playerList.length > 0)("ngIfElse", _r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currMode", ctx.currMode)("cardData", ctx.card1)("numPlayers", ctx.playerList.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currMode", ctx.currMode)("cardData", ctx.card2)("numPlayers", ctx.playerList.length)("votingPhraseText", ctx.votingPhrase);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currMode", ctx.currMode)("cardData", ctx.card3)("numPlayers", ctx.playerList.length);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _playing_card_playing_card_component__WEBPACK_IMPORTED_MODULE_10__["PlayingCardComponent"], _my_cards_my_cards_component__WEBPACK_IMPORTED_MODULE_11__["MyCardsComponent"], _results_popup_results_popup_component__WEBPACK_IMPORTED_MODULE_4__["ResultsPopupComponent"], _alert_popup_alert_popup_component__WEBPACK_IMPORTED_MODULE_5__["AlertPopupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _player_block_player_block_component__WEBPACK_IMPORTED_MODULE_12__["PlayerBlockComponent"]],
      styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n    font-family: Helvetica;\r\n    background-color: white;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.player-block-container[_ngcontent-%COMP%] {\r\n    background-color: #343a40;\r\n}\r\n\r\n.player-space[_ngcontent-%COMP%]{\r\n    \r\n    margin-bottom: 20px;\r\n}\r\n\r\n#mycards[_ngcontent-%COMP%]{\r\n    padding-top: 20px;\r\n}\r\n\r\n#no-players[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n#room-code[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    text-align: center;\r\n}\r\n\r\n#code[_ngcontent-%COMP%] {\r\n    font-family: 'Roboto Mono', monospace;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 768px) {\r\n    .card-col[_ngcontent-%COMP%]{\r\n        \r\n        padding-left: 2px;\r\n        padding-right: 2px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS12aWV3L2dhbWUtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUNBOzs7Ozs7Ozs7R0FTRzs7QUFFSDtJQUNJO1FBQ0ksK0NBQStDO1FBQy9DLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtdmlldy9nYW1lLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2FyZHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4ucGxheWVyLWJsb2NrLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xyXG59XHJcbi5wbGF5ZXItc3BhY2V7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAxMHB4OyAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuI215Y2FyZHN7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuI25vLXBsYXllcnMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbiNyb29tLWNvZGUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2NvZGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcclxufVxyXG4vKiBhcHAtcGxheWVyLWJsb2NrIHtcclxuICAgIG1heC13aWR0aDogNDUlO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIGFwcC1wbGF5ZXItYmxvY2sge1xyXG4gICAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgfVxyXG59ICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNhcmQtY29se1xyXG4gICAgICAgIC8qaW5jcmVhc2VzIHdpZHRoIG9mIGNhcmRzIGFuZCB0aGVpciBjbG9zZW5lc3MqL1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-game-view',
          templateUrl: './game-view.component.html',
          styleUrls: ['./game-view.component.css']
        }]
      }], function () {
        return [{
          type: _socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"]
        }, {
          type: _card_service__WEBPACK_IMPORTED_MODULE_8__["CardService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        currMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        resultsPopup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_results_popup_results_popup_component__WEBPACK_IMPORTED_MODULE_4__["ResultsPopupComponent"]]
        }],
        alertPopup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_alert_popup_alert_popup_component__WEBPACK_IMPORTED_MODULE_5__["AlertPopupComponent"]]
        }],
        votingPhrase: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/lobby.service.ts":
  /*!**********************************!*\
    !*** ./src/app/lobby.service.ts ***!
    \**********************************/

  /*! exports provided: LobbyService */

  /***/
  function srcAppLobbyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LobbyService", function () {
      return LobbyService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LobbyService =
    /*#__PURE__*/
    function () {
      function LobbyService(http) {
        _classCallCheck(this, LobbyService);

        this.http = http; //hostname: string = 'http://localhost:3000';
        //hostname = 'https://strawberry-sundae-17314.herokuapp.com';

        this.hostname = 'http://www.qcards.us';
      }

      _createClass(LobbyService, [{
        key: "checkRoom",
        value: function checkRoom(lobbyCode) {
          return this.http.get("".concat(this.hostname, "/api/checkRoom/").concat(lobbyCode), {
            responseType: 'text'
          });
        }
      }, {
        key: "checkName",
        value: function checkName(lobbyCode, username) {
          return this.http.get("".concat(this.hostname, "/api/checkUser/").concat(lobbyCode, "/").concat(username), {
            responseType: 'text'
          });
        }
      }]);

      return LobbyService;
    }();

    LobbyService.ɵfac = function LobbyService_Factory(t) {
      return new (t || LobbyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    LobbyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LobbyService,
      factory: LobbyService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LobbyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-menu/main-menu.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/main-menu/main-menu.component.ts ***!
    \**************************************************/

  /*! exports provided: MainMenuComponent */

  /***/
  function srcAppMainMenuMainMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function () {
      return MainMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../socket.service */
    "./src/app/socket.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _lobby_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../lobby.service */
    "./src/app/lobby.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function MainMenuComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuComponent_div_5_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.onStartGame();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Start a new game!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainMenuComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "OR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainMenuComponent_p_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Room not found!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainMenuComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainMenuComponent_div_8_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.lobbyCode = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.lobbyCode);
      }
    }

    function MainMenuComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuComponent_div_9_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.onJoinGame();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Join your friend's game!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainMenuComponent_div_10_h6_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name cannot be empty!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainMenuComponent_div_10_h6_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Looks like your friend is already using that name.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainMenuComponent_div_10_h6_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Try adding some or all letters of your last name!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainMenuComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "What is your name?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainMenuComponent_div_10_h6_4_Template, 2, 0, "h6", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MainMenuComponent_div_10_h6_5_Template, 2, 0, "h6", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MainMenuComponent_div_10_h6_6_Template, 2, 0, "h6", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainMenuComponent_div_10_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.emptyName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.invalidName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.invalidName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r26.name);
      }
    }

    function MainMenuComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuComponent_div_11_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.onEnterName();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enter game");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var MainMenuComponent =
    /*#__PURE__*/
    function () {
      function MainMenuComponent(socketService, router, lobbyService) {
        _classCallCheck(this, MainMenuComponent);

        this.socketService = socketService;
        this.router = router;
        this.lobbyService = lobbyService;
        this.emptyName = false;
        this.invalidName = false;
        this.name = '';
      }

      _createClass(MainMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showNameField = false;
          this.joiningGame = false;
          this.invalidRoom = false;
          this.socketService.setUpSocket();
        }
      }, {
        key: "onStartGame",
        value: function onStartGame() {
          this.invalidRoom = false;
          this.showNameField = true;
        }
      }, {
        key: "onJoinGame",
        value: function onJoinGame() {
          var _this10 = this;

          console.log(this.lobbyCode);
          this.lobbyService.checkRoom(this.lobbyCode).subscribe(function (res) {
            _this10.joiningGame = true;
            _this10.invalidRoom = false;
            _this10.showNameField = true;
          }, function (err) {
            console.log(err);

            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
              if (err.status == 401) {
                _this10.invalidRoom = true;
              }
            }
          });
        }
      }, {
        key: "onEnterName",
        value: function onEnterName() {
          var _this11 = this;

          // check empty names
          console.log(this.name);

          if (this.name === '') {
            this.emptyName = true;
            this.invalidName = false;
            return;
          } else {
            this.emptyName = false;
          }

          console.log('before');
          this.lobbyService.checkName(this.lobbyCode, this.name).subscribe(function (res) {
            console.log('yis');

            _this11.onConnectGoToGame();

            if (_this11.joiningGame) {
              _this11.socketService.joinExistingRoom(_this11.lobbyCode, _this11.name);
            } else {
              _this11.socketService.joinNewRoom(_this11.name);
            }
          }, function (err) {
            console.log(err);

            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
              if (err.status == 401) {
                _this11.invalidName = true;
              }
            }
          });
        }
      }, {
        key: "onConnectGoToGame",
        value: function onConnectGoToGame() {
          var _this12 = this;

          if (!this.isConnectedSubscription) {
            this.isConnectedSubscription = this.socketService.getIsConnected().subscribe(function () {
              _this12.router.navigate(['/game']);
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.isConnectedSubscription) {
            this.isConnectedSubscription.unsubscribe();
          }
        }
      }]);

      return MainMenuComponent;
    }();

    MainMenuComponent.ɵfac = function MainMenuComponent_Factory(t) {
      return new (t || MainMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lobby_service__WEBPACK_IMPORTED_MODULE_4__["LobbyService"]));
    };

    MainMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainMenuComponent,
      selectors: [["app-main-menu"]],
      decls: 12,
      vars: 7,
      consts: [[1, "container"], [1, "row"], [1, "col"], ["class", "row", 4, "ngIf"], ["id", "noRoom", 4, "ngIf"], ["type", "button", "id", "startGameButton", 1, "btn", "btn-lg", "btn-primary", "buttonPadding", 3, "click"], [1, "separator"], ["id", "noRoom"], ["type", "text", "id", "codeInput", "placeholder", "Room code", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control-lg", "joinForm", 3, "ngModel", "ngModelChange"], ["type", "button", "id", "joinButton", 1, "btn", "btn-lg", "btn-info", "joinForm", "buttonPadding", 3, "click"], ["class", "invalid", 4, "ngIf"], ["type", "text", "id", "nameInput", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control-lg", "joinForm", 3, "ngModel", "ngModelChange"], [1, "invalid"], ["type", "button", "id", "joinButton", 1, "btn", "btn-lg", "btn-success", "joinForm", "buttonPadding", 3, "click"]],
      template: function MainMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Quarantine Cards.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MainMenuComponent_div_5_Template, 4, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MainMenuComponent_div_6_Template, 4, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MainMenuComponent_p_7_Template, 2, 0, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MainMenuComponent_div_8_Template, 3, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MainMenuComponent_div_9_Template, 4, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MainMenuComponent_div_10_Template, 8, 4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MainMenuComponent_div_11_Template, 4, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showNameField);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showNameField);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidRoom);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showNameField);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showNameField);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNameField);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNameField);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: ["[_nghost-%COMP%] {\r\n    display: block;\r\n    font-family: Helvetica;\r\n    text-align: center;\r\n    background-color: #343a40;\r\n    \r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: 5rem;\r\n    padding-top: 10rem;\r\n    padding-bottom: 4rem;\r\n    \r\n    color: white;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\n#noRoom[_ngcontent-%COMP%] {\r\n    color: red;\r\n}\r\n\r\n.invalid[_ngcontent-%COMP%] {\r\n    color: red;\r\n}\r\n\r\n.separator[_ngcontent-%COMP%] {\r\n    margin-top: 2%;\r\n    margin-bottom: 2%;\r\n}\r\n\r\n#startGameButton[_ngcontent-%COMP%]{\r\n    width: 40vw;\r\n}\r\n\r\n.joinForm[_ngcontent-%COMP%] {\r\n    width: 40vw;\r\n    text-align: center;\r\n}\r\n\r\n.gameCodeForm[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    margin: auto;\r\n    margin-top: 4%;\r\n}\r\n\r\n#codeInput[_ngcontent-%COMP%] {\r\n    margin-bottom: 1%;\r\n    font-family: 'Roboto Mono', monospace;\r\n}\r\n\r\n#nameInput[_ngcontent-%COMP%] {\r\n    margin-bottom: 1%;\r\n}\r\n\r\n.buttonPadding[_ngcontent-%COMP%] {\r\n    padding-top: 1.2%;\r\n    padding-bottom: 1.2%;\r\n}\r\n\r\n@media (max-width: 760px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 4rem;\r\n        padding-bottom: 2rem;\r\n        padding-top: 8rem;\r\n    }\r\n\r\n    h2[_ngcontent-%COMP%] {\r\n        font-size: 1.7rem;\r\n    }\r\n\r\n    #startGameButton[_ngcontent-%COMP%] {\r\n        width: 70vw;\r\n    }\r\n\r\n    .joinForm[_ngcontent-%COMP%] {\r\n        width: 70vw;\r\n    }\r\n\r\n    .separator[_ngcontent-%COMP%] {\r\n        margin-top: 8%;\r\n        margin-bottom: 8%;\r\n    }\r\n\r\n    .buttonPadding[_ngcontent-%COMP%] {\r\n        padding-top: 2.5%;\r\n        padding-bottom: 2.5%;\r\n    }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 3.5rem;\r\n        padding-top: 7rem;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media (max-width: 320px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 2.5rem;\r\n        padding-top: 6rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRzs7QUFFSDtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQiwrQ0FBK0M7SUFDL0MsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLG9CQUFvQjtRQUNwQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUEsZ0JBQWdCOztBQUNoQjtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xyXG59ICovXHJcblxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xyXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRyZW07XHJcbiAgICAvKiBmb250LWZhbWlseTogJ1NvdXJjZSBDb2RlIFBybycsIG1vbm9zcGFjZTsgKi9cclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaDIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNub1Jvb20ge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmludmFsaWQge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnNlcGFyYXRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcblxyXG4jc3RhcnRHYW1lQnV0dG9ue1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbn1cclxuXHJcbi5qb2luRm9ybSB7XHJcbiAgICB3aWR0aDogNDB2dztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdhbWVDb2RlRm9ybXtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxufVxyXG5cclxuI2NvZGVJbnB1dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbiNuYW1lSW5wdXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxuXHJcbi5idXR0b25QYWRkaW5nIHtcclxuICAgIHBhZGRpbmctdG9wOiAxLjIlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEuMiU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHJlbTtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0R2FtZUJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDcwdnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmpvaW5Gb3JtIHtcclxuICAgICAgICB3aWR0aDogNzB2dztcclxuICAgIH1cclxuXHJcbiAgICAuc2VwYXJhdG9yIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4JTtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uUGFkZGluZyB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIuNSU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIuNSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA3cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBpUGhvbmUgNS9TRSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnJlbTtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-menu',
          templateUrl: './main-menu.component.html',
          styleUrls: ['./main-menu.component.css']
        }]
      }], function () {
        return [{
          type: _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _lobby_service__WEBPACK_IMPORTED_MODULE_4__["LobbyService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/my-cards/my-cards.component.ts":
  /*!************************************************!*\
    !*** ./src/app/my-cards/my-cards.component.ts ***!
    \************************************************/

  /*! exports provided: MyCardsComponent */

  /***/
  function srcAppMyCardsMyCardsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyCardsComponent", function () {
      return MyCardsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../socket.service */
    "./src/app/socket.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MyCardsComponent_p_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r47 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r47);
      }
    }

    var MyCardsComponent =
    /*#__PURE__*/
    function () {
      function MyCardsComponent(socketService) {
        _classCallCheck(this, MyCardsComponent);

        this.socketService = socketService;
      }

      _createClass(MyCardsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initMyCardsSubscription();
        }
      }, {
        key: "initMyCardsSubscription",
        value: function initMyCardsSubscription() {
          var _this13 = this;

          this.myCardsSubscription = this.socketService.getMyCards().subscribe(function (cards) {
            _this13.myCards = cards;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.myCardsSubscription) {
            this.myCardsSubscription.unsubscribe();
          }
        }
      }]);

      return MyCardsComponent;
    }();

    MyCardsComponent.ɵfac = function MyCardsComponent_Factory(t) {
      return new (t || MyCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]));
    };

    MyCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyCardsComponent,
      selectors: [["app-my-cards"]],
      decls: 9,
      vars: 1,
      consts: [["id", "myCards", 1, "accordion"], [1, "card", "text-white", "bg-dark"], ["id", "headingOne", 1, "card-header"], [1, "mb-0"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "btn", "btn-link", "collapsed"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-parent", "#myCards", 1, "collapse", "show"], [1, "card-body"], ["class", "text-dark", 4, "ngFor", "ngForOf"], [1, "text-dark"]],
      template: function MyCardsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " View My Cards ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MyCardsComponent_p_8_Template, 2, 1, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myCards);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["button[_ngcontent-%COMP%] {\n    color: white;\n}\n\n.card-header[_ngcontent-%COMP%] {\n   background-color: #343a40;\n}\n\n.card-body[_ngcontent-%COMP%] {\n    background-color: whitesmoke;\n}\n\n.card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-family: 'Roboto Slab', serif;\n}\n\n#myCards[_ngcontent-%COMP%] {\n    margin-bottom: 180px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktY2FyZHMvbXktY2FyZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7R0FDRyx5QkFBeUI7QUFDNUI7O0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9teS1jYXJkcy9teS1jYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xufVxuLmNhcmQtYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cbi5jYXJkLWJvZHkgcHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XG59XG5cbiNteUNhcmRzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxODBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyCardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-cards',
          templateUrl: './my-cards.component.html',
          styleUrls: ['./my-cards.component.css']
        }]
      }], function () {
        return [{
          type: _socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent =
    /*#__PURE__*/
    function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 2,
      vars: 0,
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page not found :( sorry bout that");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/player-block/player-block.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/player-block/player-block.component.ts ***!
    \********************************************************/

  /*! exports provided: PlayerBlockComponent */

  /***/
  function srcAppPlayerBlockPlayerBlockComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerBlockComponent", function () {
      return PlayerBlockComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _entity_data_structures_card_modes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../entity/data-structures/card-modes */
    "./src/entity/data-structures/card-modes.ts");
    /* harmony import */


    var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../socket.service */
    "./src/app/socket.service.ts");

    var _c0 = ["voteButton"];

    var PlayerBlockComponent =
    /*#__PURE__*/
    function () {
      function PlayerBlockComponent(socketService) {
        _classCallCheck(this, PlayerBlockComponent);

        this.socketService = socketService;
        this.voted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(PlayerBlockComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this14 = this;

          if (this.currMode == _entity_data_structures_card_modes__WEBPACK_IMPORTED_MODULE_1__["cardMode"].voting) {
            setTimeout(function () {
              _this14.votingEnabled = true;
            });
          } else {
            setTimeout(function () {
              _this14.votingEnabled = false;
            });
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.currMode && this.voteButton != null) {
            if (this.currMode == _entity_data_structures_card_modes__WEBPACK_IMPORTED_MODULE_1__["cardMode"].voting) {
              this.votingEnabled = true;
            } else {
              this.votingEnabled = false;
            }
          }
        }
      }, {
        key: "vote",
        value: function vote() {
          if (this.votingEnabled) {
            this.socketService.submitVote(this.player, this.cardVotingOn); //after emitting the vote event, gameview will change currMode to waiting, and disable voting buttons

            this.voted.emit(true);
          }
        }
      }]);

      return PlayerBlockComponent;
    }();

    PlayerBlockComponent.ɵfac = function PlayerBlockComponent_Factory(t) {
      return new (t || PlayerBlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]));
    };

    PlayerBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlayerBlockComponent,
      selectors: [["app-player-block"]],
      viewQuery: function PlayerBlockComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.voteButton = _t.first);
        }
      },
      inputs: {
        player: "player",
        currMode: "currMode",
        cardVotingOn: "cardVotingOn"
      },
      outputs: {
        voted: "voted"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 7,
      vars: 3,
      consts: [[1, "playerButton"], ["type", "button", "id", "voteButton", 3, "className", "click"], ["voteButton", ""], ["id", "name"], ["id", "score"]],
      template: function PlayerBlockComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerBlockComponent_Template_button_click_1_listener() {
            return ctx.vote();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.votingEnabled ? "btn btn-primary" : "btn btn-light");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.player.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.player.votes.length);
        }
      },
      styles: ["button[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    min-height: 40px;\r\n}\r\n.playerButton[_ngcontent-%COMP%]{\r\n    padding-top: 10px;\r\n    font-size: 15px;\r\n}\r\n#voteButton[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    display: inline-block;\r\n}\r\n#name[_ngcontent-%COMP%] {\r\n    float: left;\r\n}\r\n#score[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n@media screen and (max-width: 768px)\r\n{\r\n    .playerButton[_ngcontent-%COMP%]{\r\n        font-size: 12px;\r\n    }\r\n    #score[_ngcontent-%COMP%] {\r\n        display: block;\r\n        float: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyLWJsb2NrL3BsYXllci1ibG9jay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksY0FBYztRQUNkLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGxheWVyLWJsb2NrL3BsYXllci1ibG9jay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5wbGF5ZXJCdXR0b257XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuI3ZvdGVCdXR0b24ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuI25hbWUge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNzY29yZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KVxyXG57XHJcbiAgICAucGxheWVyQnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgICNzY29yZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-player-block',
          templateUrl: './player-block.component.html',
          styleUrls: ['./player-block.component.css']
        }]
      }], function () {
        return [{
          type: _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]
        }];
      }, {
        player: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        currMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cardVotingOn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        voted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        voteButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["voteButton", {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/playing-card/playing-card.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/playing-card/playing-card.component.ts ***!
    \********************************************************/

  /*! exports provided: PlayingCardComponent */

  /***/
  function srcAppPlayingCardPlayingCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayingCardComponent", function () {
      return PlayingCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _entity_data_structures_card_modes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../entity/data-structures/card-modes */
    "./src/entity/data-structures/card-modes.ts");
    /* harmony import */


    var _card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../card.service */
    "./src/app/card.service.ts");
    /* harmony import */


    var _socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../socket.service */
    "./src/app/socket.service.ts");

    var _c0 = ["cardBackText"];
    var _c1 = ["cardFlipper"];
    var _c2 = ["choiceButton"];

    var PlayingCardComponent =
    /*#__PURE__*/
    function () {
      function PlayingCardComponent(cardService, socketService) {
        _classCallCheck(this, PlayingCardComponent);

        this.cardService = cardService;
        this.socketService = socketService;
        this.cardFlipTime = 600;
      }

      _createClass(PlayingCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          //this is in ngAfterViewInit because the card ElementRef must first be loaded
          // I think really only the second conditional is necessary, but the other 
          // conditionals guard against bad async behavior
          if (this.currMode === undefined) {
            this.cardText.nativeElement.textContent = "Loading...";
          } else if (this.currMode !== _entity_data_structures_card_modes__WEBPACK_IMPORTED_MODULE_1__["cardMode"].myTurn) {
            this.transitionToNewMode();
          } else {
            this.cardText.nativeElement.textContent = this.cardData.card_text;
          }
        } //when the mode changes (players turn to pick card or vote  ), notify the card so it can transition to the new mode

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.currMode !== undefined && changes.currMode) {
            console.log("new mode: ".concat(this.currMode));
            this.transitionToNewMode();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.backendCardSubscription) {
            this.backendCardSubscription.unsubscribe();
          }
        } //modify the text and flip the cards as necessary to enter the new mode

      }, {
        key: "transitionToNewMode",
        value: function transitionToNewMode() {
          console.log('transition');

          if (this.card != null) {
            switch (this.currMode) {
              case _entity_data_structures_card_modes__WEBPACK_IMPORTED_MODULE_1__["cardMode"].voting:
                {
                  this.cardText.nativeElement.textContent = "";
                  this.transitionCardToFace("front");

                  if (this.votingPhraseText == null) {
                    this.cardText.nativeElement.textContent = "vote above !";
                  } else {
                    this.cardText.nativeElement.textContent = this.votingPhraseText;
                  }

                  break;
                }

              case _entity_data_structures_card_modes__WEBPACK_IMPORTED_MODULE_1__["cardMode"].waiting:
                {
                  this.cardText.nativeElement.textContent = "";
                  this.transitionCardToFace("front");
                  this.cardText.nativeElement.textContent = "waiting ...";
                  break;
                }

              case _entity_data_structures_card_modes__WEBPACK_IMPORTED_MODULE_1__["cardMode"].myTurn:
                {
                  this.cardText.nativeElement.textContent = "";
                  this.transitionCardToFace("back");
                  this.cardText.nativeElement.textContent = this.cardData.card_text;
                  break;
                }
            }

            this.disableCardChooseButton();
          }
        } //disable the choice button to select a card when it is not a player's turn

      }, {
        key: "disableCardChooseButton",
        value: function disableCardChooseButton() {
          var choiceButtonIsDisabled = this.choiceButton.nativeElement.classList.contains('disabled');

          if (this.currMode == _entity_data_structures_card_modes__WEBPACK_IMPORTED_MODULE_1__["cardMode"].voting && !choiceButtonIsDisabled || this.currMode == _entity_data_structures_card_modes__WEBPACK_IMPORTED_MODULE_1__["cardMode"].myTurn && choiceButtonIsDisabled || this.currMode == _entity_data_structures_card_modes__WEBPACK_IMPORTED_MODULE_1__["cardMode"].waiting && !choiceButtonIsDisabled) {
            this.choiceButton.nativeElement.classList.toggle('disabled');
          }
        } //flip a card over to the desired face side

      }, {
        key: "transitionCardToFace",
        value: function transitionCardToFace(face) {
          var _this15 = this;

          var cardIsOnFace = this.card.nativeElement.classList.contains('flip'); //switch statement on which card face we would like to end up at after some fancy flipping

          switch (face) {
            case "front":
              {
                console.log('to front');

                if (cardIsOnFace) {
                  setTimeout(function () {
                    return _this15.card.nativeElement.classList.toggle('flip');
                  }, this.cardFlipTime);
                  this.card.nativeElement.classList.toggle('flip');
                } else {
                  this.card.nativeElement.classList.toggle('flip');
                }

                break;
              }
            // NOTE: setTimeout is an asynchronous function, so toggling nativeElement outside of
            // a setTimeout will always execute faster regardless of position in code

            case "back":
              {
                console.log('to back');

                if (cardIsOnFace) {
                  this.card.nativeElement.classList.toggle('flip');
                }

                break;
              }
          }
        }
      }, {
        key: "onCardClick",
        value: function onCardClick(card) {
          if (this.currMode == _entity_data_structures_card_modes__WEBPACK_IMPORTED_MODULE_1__["cardMode"].myTurn) {
            card.classList.toggle('flip');
          }
        }
      }, {
        key: "onCardPicked",
        value: function onCardPicked() {
          if (this.numPlayers > 0) {
            //console.log("card picked: " + this.cardText.nativeElement.textContent);
            this.socketService.pickCard(this.cardData);
          } else {
            // The alert popup is in the parent component, and there's no easy way to trigger
            // it from this component. Thus to prevent someone from picking a card when there's only
            // one person in the lobby, we just pass this function null.
            // The null is handled in the backend to not do any meaningful work, and when that
            // gets back to the frontend and parent component through the socket service,
            // it can still trigger the alert popup.
            this.socketService.pickCard(null);
          }
        }
      }]);

      return PlayingCardComponent;
    }();

    PlayingCardComponent.ɵfac = function PlayingCardComponent_Factory(t) {
      return new (t || PlayingCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]));
    };

    PlayingCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlayingCardComponent,
      selectors: [["app-playing-card"]],
      viewQuery: function PlayingCardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cardText = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.card = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.choiceButton = _t.first);
        }
      },
      inputs: {
        currMode: "currMode",
        votingPhraseText: "votingPhraseText",
        numPlayers: "numPlayers",
        cardData: "cardData"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 13,
      vars: 0,
      consts: [[1, "flip-container", "w-100", "h-100", 3, "click"], ["cardFlipper", ""], [1, "flipper"], [1, "front"], [1, "back"], ["cardBackText", ""], [1, "choiceButton", "btn", "btn-primary", 3, "click"], ["choiceButton", ""]],
      template: function PlayingCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayingCardComponent_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

            var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return ctx.onCardClick(_r41);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Flip me !");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", null, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Back text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayingCardComponent_Template_button_click_10_listener() {
            return ctx.onCardPicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Pick me!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".flip-container[_ngcontent-%COMP%] {\r\n\tperspective: 1000px;\r\n}\r\n.flip-container.flip[_ngcontent-%COMP%]   .flipper[_ngcontent-%COMP%] {\r\n\ttransform: rotateY(180deg);\r\n}\r\n.flip-container[_ngcontent-%COMP%], .front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\r\n\t\r\n\tpadding-bottom: 145%;\r\n}\r\n\r\n.flipper[_ngcontent-%COMP%] {\r\n\ttransition: 0.8s;\r\n\ttransform-style: preserve-3d;\r\n\tborder: none;\r\n\tposition: relative;\r\n}\r\n\r\n.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%] {\r\n\t-webkit-backface-visibility: hidden;\r\n\t        backface-visibility: hidden;\r\n\r\n\tposition: absolute;\r\n\ttop: 0;\r\n  \tleft: 0;\r\n  \r\n  \ttext-align: center;\r\n\tfont-style: bold;\r\n\t\r\n}\r\n.front[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n\tfont-size: 45px;\r\n\tpadding-top: 50%;\t\r\n}\r\n.choiceButton[_ngcontent-%COMP%] {\r\n\tpadding: 2% 2%;\r\n\tfont-size: 1.4em;\r\n}\r\n.back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n\tfont-size: 25px;\r\n\tpadding-top: 20%;\r\n\tfont-family: 'Roboto Slab', serif;\r\n}\r\n@media screen and (max-width: 768px)\r\n{\r\n\t.front[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n\t\tfont-size: 20px;\r\n\t\tpadding-top: 50%;\r\n\t\t\r\n\t  }\r\n\t  .back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n\t\tfont-size: 12px;\r\n\t\tpadding-top: 20%;\r\n\t  }\r\n\t  .choiceButton[_ngcontent-%COMP%] {\r\n\t\t  font-size: 1em;\r\n\t  }\r\n\t  \r\n\t  .flip-container[_ngcontent-%COMP%], .front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%] {\r\n\t\t\r\n\t\tpadding-bottom: 190%;\r\n\t  }\r\n}\r\n\r\n.front[_ngcontent-%COMP%] {\r\n\tz-index: 2;\r\n\t\r\n\t\r\n  transform: rotateY(0deg);\r\n  background-color: #141414;\r\n  color: whitesmoke;\r\n  border: 1px solid white;\r\n  border-radius: 8px;\r\n}\r\n\r\n.back[_ngcontent-%COMP%] {\r\n\t\r\n\tz-index: -1;\r\n  transform: rotateY(180deg);\r\n  background-color: whitesmoke;\r\n  color: #141414;\r\n  border: 1px solid #141414;\r\n  border-radius: 8px;\r\n}\r\n.choiceButton.disabled[_ngcontent-%COMP%] {\r\n\tvisibility: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWluZy1jYXJkL3BsYXlpbmctY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUF3QztBQUN4QztDQUNDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsMEJBQTBCO0FBQzNCO0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTs7Q0FFWixpRUFBaUU7Q0FDakUsb0JBQW9CO0FBQ3JCO0FBRUEseUJBQXlCO0FBQ3pCO0NBQ0MsZ0JBQWdCO0NBQ2hCLDRCQUE0QjtDQUM1QixZQUFZO0NBQ1osa0JBQWtCO0FBQ25CO0FBRUEsa0NBQWtDO0FBQ2xDO0NBQ0MsbUNBQTJCO1NBQTNCLDJCQUEyQjs7Q0FFM0Isa0JBQWtCO0NBQ2xCLE1BQU07R0FDSixPQUFPOztHQUVQLGtCQUFrQjtDQUNwQixnQkFBZ0I7O0FBRWpCO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlDQUFpQztBQUNsQztBQUVBOztDQUVDO0VBQ0MsZUFBZTtFQUNmLGdCQUFnQjs7R0FFZjtHQUNBO0VBQ0QsZUFBZTtFQUNmLGdCQUFnQjtHQUNmO0dBQ0E7SUFDQyxjQUFjO0dBQ2Y7O0dBRUE7RUFDRCw4QkFBOEI7RUFDOUIsb0JBQW9CO0dBQ25CO0FBQ0g7QUFFQSxrQ0FBa0M7QUFDbEM7Q0FDQyxVQUFVO0NBQ1YsaUJBQWlCO0NBQ2pCLG1CQUFtQjtFQUNsQix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCO0FBRUEsZ0NBQWdDO0FBQ2hDO0NBQ0MsZ0JBQWdCO0NBQ2hCLFdBQVc7RUFDViwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wbGF5aW5nLWNhcmQvcGxheWluZy1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlbnRpcmUgY29udGFpbmVyLCBrZWVwcyBwZXJzcGVjdGl2ZSAqL1xyXG4uZmxpcC1jb250YWluZXIge1xyXG5cdHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcbn1cclxuLmZsaXAtY29udGFpbmVyLmZsaXAgLmZsaXBwZXIge1xyXG5cdHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG4uZmxpcC1jb250YWluZXIsIC5mcm9udCwgLmJhY2sge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHJcblx0LyogdXNlZCB0byBhZGp1c3QgaGVpZ2h0IG9mIGNhcmQgdG8gbWFrZSBpdCBzY2FsYWJsZSBmb3IgaGVpZ2h0ICovXHJcblx0cGFkZGluZy1ib3R0b206IDE0NSU7XHJcbn1cclxuXHJcbi8qIGZsaXAgc3BlZWQgZ29lcyBoZXJlICovXHJcbi5mbGlwcGVyIHtcclxuXHR0cmFuc2l0aW9uOiAwLjhzO1xyXG5cdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLyogaGlkZSBiYWNrIG9mIHBhbmUgZHVyaW5nIHN3YXAgKi9cclxuLmZyb250LCAuYmFjayB7XHJcblx0YmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG4gIFx0bGVmdDogMDtcclxuICBcclxuICBcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXN0eWxlOiBib2xkO1xyXG5cdFxyXG59XHJcblxyXG4uZnJvbnQgcHtcclxuXHRmb250LXNpemU6IDQ1cHg7XHJcblx0cGFkZGluZy10b3A6IDUwJTtcdFxyXG59XHJcblxyXG4uY2hvaWNlQnV0dG9uIHtcclxuXHRwYWRkaW5nOiAyJSAyJTtcclxuXHRmb250LXNpemU6IDEuNGVtO1xyXG59XHJcblxyXG4uYmFjayBwe1xyXG5cdGZvbnQtc2l6ZTogMjVweDtcclxuXHRwYWRkaW5nLXRvcDogMjAlO1xyXG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpXHJcbntcclxuXHQuZnJvbnQgcHtcclxuXHRcdGZvbnQtc2l6ZTogMjBweDtcclxuXHRcdHBhZGRpbmctdG9wOiA1MCU7XHJcblx0XHRcclxuXHQgIH1cclxuXHQgIC5iYWNrIHB7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRwYWRkaW5nLXRvcDogMjAlO1xyXG5cdCAgfVxyXG5cdCAgLmNob2ljZUJ1dHRvbiB7XHJcblx0XHQgIGZvbnQtc2l6ZTogMWVtO1xyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAuZmxpcC1jb250YWluZXIsIC5mcm9udCwgLmJhY2sge1xyXG5cdFx0LyogIGluY3JlYXNlIGhlaWdodCBvZiBjYXJkcyAqL1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDE5MCU7XHJcblx0ICB9XHJcbn1cclxuXHJcbi8qIGZyb250IHBhbmUsIHBsYWNlZCBhYm92ZSBiYWNrICovXHJcbi5mcm9udCB7XHJcblx0ei1pbmRleDogMjtcclxuXHQvKiB6LWluZGV4OiAtMTsgKi9cclxuXHQvKiBmb3IgZmlyZWZveCAzMSAqL1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLyogYmFjaywgaW5pdGlhbGx5IGhpZGRlbiBwYW5lICovXHJcbi5iYWNrIHtcclxuXHQvKiB6LWluZGV4OiAyOyAqL1xyXG5cdHotaW5kZXg6IC0xO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgY29sb3I6ICMxNDE0MTQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzE0MTQxNDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5jaG9pY2VCdXR0b24uZGlzYWJsZWQge1xyXG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayingCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-playing-card',
          templateUrl: './playing-card.component.html',
          styleUrls: ['./playing-card.component.css']
        }]
      }], function () {
        return [{
          type: _card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"]
        }, {
          type: _socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]
        }];
      }, {
        currMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        votingPhraseText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        numPlayers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cardData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cardText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["cardBackText", {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }],
        card: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["cardFlipper", {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }],
        choiceButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["choiceButton", {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/results-popup/results-popup.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/results-popup/results-popup.component.ts ***!
    \**********************************************************/

  /*! exports provided: ResultsPopupComponent */

  /***/
  function srcAppResultsPopupResultsPopupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultsPopupComponent", function () {
      return ResultsPopupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../socket.service */
    "./src/app/socket.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["resultsText"];

    function ResultsPopupComponent_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsPopupComponent_button_10_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "End Turn");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResultsPopupComponent_div_11_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsPopupComponent_div_11_div_1_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var player_r6 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.breakTie(player_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r6.name);
      }
    }

    function ResultsPopupComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultsPopupComponent_div_11_div_1_Template, 3, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.tiedWinners);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "display": a0,
        "opacity": 1
      };
    };

    var ResultsPopupComponent =
    /*#__PURE__*/
    function () {
      function ResultsPopupComponent(socketService) {
        _classCallCheck(this, ResultsPopupComponent);

        this.socketService = socketService;
      }

      _createClass(ResultsPopupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isAtie = false;
          this.tiedWinners = [];
          this.popupIsOpen = false;
        } //TODO handle ties

      }, {
        key: "parseVoteResults",
        value: function parseVoteResults(voteResults, winner) {
          var parsedResults = "";
          var reachedArrElements = []; //sort the names so results display consistantely 

          voteResults.sort(function (a, b) {
            return a.name > b.name ? 1 : -1;
          });
          voteResults.forEach(function (player) {
            if (!reachedArrElements.includes(player.name)) {
              var numVotes = voteResults.filter(function (value) {
                return value.name == player.name;
              }).length;
              parsedResults += player.name + " got " + numVotes + " votes! \n";
              reachedArrElements.push(player.name);
            }
          });
          parsedResults += "\n" + winner.name + " wins the card.";
          parsedResults += "\n\nReveal the results to the other players!";
          return parsedResults;
        }
      }, {
        key: "open",
        value: function open(voteResults, winners, cardText) {
          this.popupIsOpen = true;
          this.cardToSend = cardText;

          if (winners.length == 1) {
            this.resultsText.nativeElement.textContent = this.parseVoteResults(voteResults, winners[0]);
            this.voteWinner = winners[0];
            this.isAtie = false;
          } else {
            this.tiedWinners = winners;
            this.isAtie = true;
            this.resultsText.nativeElement.textContent = "Looks like we got ouselves a good old Mexican standoff (there was a tie). Break the tie!";
          }
        }
      }, {
        key: "breakTie",
        value: function breakTie(selectedPlayer) {
          this.voteWinner = selectedPlayer;
          this.close();
        }
      }, {
        key: "close",
        value: function close() {
          this.popupIsOpen = false;
          this.socketService.sendVoteResultsToOtherPlayers(this.voteWinner, this.cardToSend);
          this.socketService.giveUpTurn();
        }
      }]);

      return ResultsPopupComponent;
    }();

    ResultsPopupComponent.ɵfac = function ResultsPopupComponent_Factory(t) {
      return new (t || ResultsPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]));
    };

    ResultsPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResultsPopupComponent,
      selectors: [["app-results-popup"]],
      viewQuery: function ResultsPopupComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.resultsText = _t.first);
        }
      },
      decls: 12,
      vars: 5,
      consts: [["id", "resultsModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "resultsModalTitle", "aria-hidden", "true", 1, "modal", "fade", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "resultsModalTitle", 1, "modal-title"], [1, "modal-body"], ["resultsText", ""], [1, "modal-footer"], ["type", "button", "class", "btn btn-success", "data-dismiss", "modal", 3, "click", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-success", 3, "click"], [1, "row"], ["class", "col-6 tie-break-col", 4, "ngFor", "ngForOf"], [1, "col-6", "tie-break-col"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"]],
      template: function ResultsPopupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Vote Results");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", null, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ResultsPopupComponent_button_10_Template, 2, 0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ResultsPopupComponent_div_11_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.popupIsOpen ? "block" : "none"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAtie);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAtie);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["#resultsModal[_ngcontent-%COMP%] {\r\n    white-space: pre-wrap;\r\n    background: rgba(91, 91, 91, 0.70);\r\n}\r\n.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-family: 'Roboto Slab', serif;\r\n}\r\n.tie-break-col[_ngcontent-%COMP%] {\r\n    padding-bottom: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0cy1wb3B1cC9yZXN1bHRzLXBvcHVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdHMtcG9wdXAvcmVzdWx0cy1wb3B1cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Jlc3VsdHNNb2RhbCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDkxLCA5MSwgOTEsIDAuNzApO1xyXG59XHJcbi5tb2RhbC1ib2R5IHAge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xyXG59XHJcblxyXG4udGllLWJyZWFrLWNvbCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultsPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-results-popup',
          templateUrl: './results-popup.component.html',
          styleUrls: ['./results-popup.component.css']
        }]
      }], function () {
        return [{
          type: _socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]
        }];
      }, {
        resultsText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["resultsText", {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/room-code/room-code.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/room-code/room-code.component.ts ***!
    \**************************************************/

  /*! exports provided: RoomCodeComponent */

  /***/
  function srcAppRoomCodeRoomCodeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomCodeComponent", function () {
      return RoomCodeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RoomCodeComponent =
    /*#__PURE__*/
    function () {
      function RoomCodeComponent() {
        _classCallCheck(this, RoomCodeComponent);
      }

      _createClass(RoomCodeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RoomCodeComponent;
    }();

    RoomCodeComponent.ɵfac = function RoomCodeComponent_Factory(t) {
      return new (t || RoomCodeComponent)();
    };

    RoomCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RoomCodeComponent,
      selectors: [["app-room-code"]],
      inputs: {
        lobbyCode: "lobbyCode"
      },
      decls: 0,
      vars: 0,
      template: function RoomCodeComponent_Template(rf, ctx) {},
      styles: [".card[_ngcontent-%COMP%] {\n    text-align: center;\n    white-space: nowrap;\n    margin-bottom: 20px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n    font-family: 'Roboto Mono', monospace;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9vbS1jb2RlL3Jvb20tY29kZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHIiwiZmlsZSI6InNyYy9hcHAvcm9vbS1jb2RlL3Jvb20tY29kZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jYXJkLWJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XG59XG5cbi8qIC5jYXJkLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbn1cblxuLmNhcmQtYm9keSB7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XG5cbiAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG4gICAgXG4gICAgLmNhcmQtYm9keSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbn0gKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-room-code',
          templateUrl: './room-code.component.html',
          styleUrls: ['./room-code.component.css']
        }]
      }], function () {
        return [];
      }, {
        lobbyCode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/socket.service.ts":
  /*!***********************************!*\
    !*** ./src/app/socket.service.ts ***!
    \***********************************/

  /*! exports provided: SocketService */

  /***/
  function srcAppSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketService", function () {
      return SocketService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SocketService =
    /*#__PURE__*/
    function () {
      function SocketService() {
        _classCallCheck(this, SocketService);

        this.socket = null;
        this.connectedRoom = '';
        this.isTurnOnStart = null;
        this.allOtherPlayersOnStart = [];
      } //get list of all players excluding this current one


      _createClass(SocketService, [{
        key: "getAllOtherPlayersList",
        value: function getAllOtherPlayersList(allPlayers) {
          var _this16 = this;

          console.log("all players: " + allPlayers);
          var output = [];
          allPlayers.forEach(function (player) {
            if (player.Id != _this16.socket.id) {
              output.push(player);
            }
          });
          console.log("all other players: " + output);
          return output;
        }
      }, {
        key: "setUpSocket",
        value: function setUpSocket() {
          if (this.socket) {
            return;
          } //var hostname = 'http://localhost:3000';
          //var hostname = 'https://strawberry-sundae-17314.herokuapp.com';
          //var hostname = 'http://localhost:5000';


          var hostname = 'http://www.qcards.us';
          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(hostname);
        }
      }, {
        key: "getIsConnected",
        value: function getIsConnected() {
          var _this17 = this;

          //this.socket.emit('clientGetIsTurn', this.connectedRoom);
          var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this17.socket.on('connected', function (code, turn, playerList) {
              _this17.connectedRoom = code;
              _this17.isTurnOnStart = turn;
              _this17.allOtherPlayersOnStart = _this17.getAllOtherPlayersList(playerList);
              console.log("is connected to " + code + ", and is turn? " + turn + ", " + playerList);
              observer.next();
            });
          });
          return observable;
        }
      }, {
        key: "disconnectSocket",
        value: function disconnectSocket() {
          if (this.socket) {
            this.socket.disconnect();
          }

          this.socket = null;
          this.connectedRoom = '';
          this.isTurnOnStart = null;
          this.allOtherPlayersOnStart = null;
        }
      }, {
        key: "joinNewRoom",
        value: function joinNewRoom(name) {
          if (this.connectedRoom !== '') {
            console.log("Cannot connect to new lobby while in another lobby");
          } else {
            this.socket.emit('newLobby', name);
          }
        }
      }, {
        key: "joinExistingRoom",
        value: function joinExistingRoom(desiredRoom, name) {
          if (this.connectedRoom !== '') {
            console.log("Cannot connect to new lobby while in another lobby");
          } else {
            this.socket.emit('joinLobby', desiredRoom, name);
          }
        }
      }, {
        key: "sendChatMessage",
        value: function sendChatMessage(message) {
          this.socket.emit('clientSendChat', this.connectedRoom, message);
        }
      }, {
        key: "receiveChatMessage",
        value: function receiveChatMessage() {
          var _this18 = this;

          var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this18.socket.on('serverSendChat', function (msg) {
              console.log(msg);
              observer.next(msg);
            });

            return function () {
              _this18.disconnectSocket();
            };
          });
          return observable;
        }
      }, {
        key: "giveUpTurn",
        value: function giveUpTurn() {
          this.socket.emit('clientGivingUpTurn', this.connectedRoom);
        }
      }, {
        key: "getIsTurn",
        value: function getIsTurn() {
          var _this19 = this;

          var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this19.socket.on('serverSendIsTurn', function (isTurn) {
              observer.next(isTurn);
            });

            return function () {
              _this19.disconnectSocket();
            };
          });
          return observable;
        } //a round is cancelled if it is someone's turn to pick a card and collect votes, but they disconnect

      }, {
        key: "getRoundIsCancelled",
        value: function getRoundIsCancelled() {
          var _this20 = this;

          var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this20.socket.on('roundCancelled', function (idNextRoundHost) {
              var isNewHost;
              isNewHost = false;

              if (_this20.socket.id == idNextRoundHost) {
                isNewHost = true;
              }

              observer.next(isNewHost);
            });

            return function () {
              _this20.disconnectSocket();
            };
          });
          return observable;
        } //signal to the server that a card was picked

      }, {
        key: "pickCard",
        value: function pickCard(card) {
          this.socket.emit('clientPickedCard', this.connectedRoom, card);
        } //wait for the card picked by player with the turn

      }, {
        key: "getPickedCard",
        value: function getPickedCard() {
          var _this21 = this;

          var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this21.socket.on('serverSendCardPicked', function (cardObject) {
              if (cardObject) {
                observer.next(cardObject.card_text);
              } else {
                observer.next(null);
              }
            });

            return function () {
              _this21.disconnectSocket();
            };
          });
          return observable;
        } //wait for the voting results for the round

      }, {
        key: "getVoteResults",
        value: function getVoteResults() {
          var _this22 = this;

          var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this22.socket.on('serverSendVoteResults', function (results, winners, cardVotingOn) {
              observer.next([results, winners, cardVotingOn]);
            });

            return function () {
              _this22.disconnectSocket();
            };
          });
          return observable;
        }
      }, {
        key: "getMyCards",
        value: function getMyCards() {
          var _this23 = this;

          var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this23.socket.on('serverSendUpdatedCards', function (cards) {
              observer.next(cards);
            });

            return function () {
              _this23.disconnectSocket();
            };
          });
          return observable;
        }
      }, {
        key: "revealVoteResults",
        value: function revealVoteResults(results) {
          this.socket.emit('revealVoteResults', this.connectedRoom, results);
        }
      }, {
        key: "submitVote",
        value: function submitVote(playerVotedFor, cardVotingOn) {
          this.socket.emit('clientSendVote', this.connectedRoom, playerVotedFor, cardVotingOn, this.socket.id);
        }
      }, {
        key: "sendVoteResultsToOtherPlayers",
        value: function sendVoteResultsToOtherPlayers(voteWinner, cardVotingOn) {
          this.socket.emit('clientEndingTurn', this.connectedRoom, voteWinner, cardVotingOn);
        } //get the list of all players excluding current player

      }, {
        key: "getOtherPlayerList",
        value: function getOtherPlayerList() {
          var _this24 = this;

          var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this24.socket.on('serverUpdatePlayerList', function (msg) {
              var output = _this24.getAllOtherPlayersList(msg);

              observer.next(output);
            });

            return function () {
              _this24.disconnectSocket();
            };
          });
          return observable;
        }
      }]);

      return SocketService;
    }();

    SocketService.ɵfac = function SocketService_Factory(t) {
      return new (t || SocketService)();
    };

    SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SocketService,
      factory: SocketService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/entity/Card.ts":
  /*!****************************!*\
    !*** ./src/entity/Card.ts ***!
    \****************************/

  /*! exports provided: default */

  /***/
  function srcEntityCardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return Card;
    });

    var Card = function Card(json) {
      _classCallCheck(this, Card);

      if (json) {
        this._id = json._id;
        this.card_text = json.card_text;
        this.card_num = json.card_num;
      } else {
        this._id = '';
        this.card_text = '';
        this.card_num = -1;
      }
    };
    /***/

  },

  /***/
  "./src/entity/data-structures/card-modes.ts":
  /*!**************************************************!*\
    !*** ./src/entity/data-structures/card-modes.ts ***!
    \**************************************************/

  /*! exports provided: cardMode */

  /***/
  function srcEntityDataStructuresCardModesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cardMode", function () {
      return cardMode;
    });

    var cardMode;

    (function (cardMode) {
      cardMode[cardMode["myTurn"] = 0] = "myTurn";
      cardMode[cardMode["voting"] = 1] = "voting";
      cardMode[cardMode["waiting"] = 2] = "waiting";
    })(cardMode || (cardMode = {}));

    ;
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\kmmor\quarantineCards\client\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
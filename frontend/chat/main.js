"use strict";
(self["webpackChunkchat"] = self["webpackChunkchat"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ 9087);
/* harmony import */ var _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rooms/rooms.component */ 4819);
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat.component */ 2226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent },
    { path: 'signup', component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent },
    { path: 'rooms', component: _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_2__.RoomsComponent },
    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__.ChatComponent },
    { path: "", redirectTo: '/login', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { useHash: true }), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
    constructor() {
        this.title = 'chat';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ 9087);
/* harmony import */ var _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rooms/rooms.component */ 4819);
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat/chat.component */ 2226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
        _register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent,
        _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_4__.RoomsComponent,
        _chat_chat_component__WEBPACK_IMPORTED_MODULE_5__.ChatComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule] }); })();


/***/ }),

/***/ 2226:
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatComponent": () => (/* binding */ ChatComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/websocket.service */ 8223);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/chat.service */ 9014);
/* harmony import */ var _services_jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/jwt.service */ 5535);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/stock.service */ 3188);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);












const _c0 = ["scrollMe"];
function ChatComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li")(1, "div")(2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const user_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r3);
} }
function ChatComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li")(1, "div")(2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const message_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 3, message_r4.dateTime, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", message_r4.userName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](message_r4.message);
} }
class ChatComponent {
    constructor(chatSvr, jwtSvr, router, route, socket, stockSvr) {
        this.chatSvr = chatSvr;
        this.jwtSvr = jwtSvr;
        this.router = router;
        this.route = route;
        this.socket = socket;
        this.stockSvr = stockSvr;
        this.messages = [];
        this.users = [];
        this.room = "";
        this.ticket = "";
        this.userName = "";
        this.message = "";
        this.disableScrollDown = false;
    }
    ngOnInit() {
        this.userName = this.jwtSvr.userName;
        this.route.params.subscribe(params => {
            this.room = params["room"];
            this.chatSvr.getRoomUsers(this.room).subscribe(res => {
                this.users = res;
            });
            this.chatSvr.getMessages(this.room).subscribe(res => {
                for (let i = res.length; i > 0; i--) {
                    let message = {
                        userName: res[i - 1].userName,
                        room: res[i - 1].room,
                        message: res[i - 1].message,
                        dateTime: new Date(res[i - 1].dateTime * 1000),
                    };
                    this.messages.push(message);
                }
                this.chatSvr.getChatTicket().subscribe(res => {
                    this.ticket = res;
                    this.connectToSocket();
                    this.messageSub.subscribe(msg => {
                        let message = {
                            userName: msg.userName,
                            room: msg.room,
                            message: msg.message,
                            dateTime: new Date(msg.dateTime * 1000),
                        };
                        console.log(message);
                        this.messages.push(message);
                        this.scrollToBottom();
                    });
                });
            });
        });
    }
    connectToSocket() {
        let url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.socketURL}?userName=${this.userName}&room=${this.room}&ticket=${this.ticket}`;
        console.log(url);
        this.messageSub = this.socket.connect(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
            let msg = JSON.parse(response.data);
            return msg;
        }));
    }
    sendMessage() {
        if (this.message == "") {
            return;
        }
        if (this.message.trim().startsWith("/stock")) {
            let arr = this.message.split("=");
            let req = {
                room: this.room,
                userName: this.userName,
                stockCode: arr[1],
            };
            this.message = "";
            this.stockSvr.stock(req).subscribe(resp => {
                console.log(resp);
            });
            return;
        }
        let seconds = Math.floor(Date.now() / 1000);
        let e = {
            userName: this.userName,
            room: this.room,
            message: this.message,
            dateTime: seconds,
        };
        this.messageSub.next(e);
        this.message = "";
    }
    ngAfterViewChecked() {
        this.scrollToBottom();
    }
    onScroll() {
        let element = this.myScrollContainer.nativeElement;
        let atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
        if (this.disableScrollDown && atBottom) {
            this.disableScrollDown = false;
        }
        else {
            this.disableScrollDown = true;
        }
    }
    scrollToBottom() {
        /*if (this.disableScrollDown) {
            return
        }*/
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_2__.ChatService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_jwt_service__WEBPACK_IMPORTED_MODULE_3__.JwtService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_websocket_service__WEBPACK_IMPORTED_MODULE_0__.WebsocketService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_4__.StockService)); };
ChatComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], viewQuery: function ChatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.myScrollContainer = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_services_websocket_service__WEBPACK_IMPORTED_MODULE_0__.WebsocketService])], decls: 27, vars: 4, consts: [[1, "container", "text-center"], [1, "row"], [1, "column"], ["src", "/front/assets/chatlogo.png", "alt", "", "width", "200", "height", "200", 1, "mb-4"], [1, "h3", "mb-3", "fw-normal"], [1, "col-3", "border", "border-primary", 2, "height", "500px"], [1, "list-unstyled", "mb-0", "h-75"], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "col", "border", "border-secondary", "text-start"], [1, "list-unstyled", "mb-0", 2, "overflow-y", "scroll", "height", "400px", 3, "scroll"], ["scrollMe", ""], [1, "row", "g-3", "mt-4"], [1, "col-auto"], ["for", "message", 1, "visually-hidden"], ["type", "text", "id", "message", "name", "message", "placeholder", "Type here...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "mb-3", 3, "click"], [1, "text-muted"], [1, "ms-3", "text-success"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 1)(7, "div", 5)(8, "ul", 6)(9, "li")(10, "div")(11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ChatComponent_li_13_Template, 4, 1, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 9)(15, "ul", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("scroll", function ChatComponent_Template_ul_scroll_15_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ChatComponent_li_17_Template, 9, 6, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "form", 12)(20, "div", 13)(21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_input_ngModelChange_23_listener($event) { return ctx.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 13)(25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_25_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Welcome to room ", ctx.room, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.message);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function LoginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " User name is required and should be at least 4 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password is required and should be at least 8 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(authSvr, router) {
        this.authSvr = authSvr;
        this.router = router;
        this.loginReq = {
            userName: "",
            password: ""
        };
    }
    ngOnInit() {
    }
    login(form) {
        if (form.invalid) {
            for (const control of Object.keys(form.controls)) {
                form.controls[control].markAsTouched();
            }
            return;
        }
        this.authSvr.login(this.loginReq).subscribe(res => {
            this.router.navigate(["/rooms"]);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 25, vars: 4, consts: [[1, "text-center"], [1, "form-signin", "w-100", "m-auto"], [3, "ngSubmit"], ["formLogin", "ngForm"], ["src", "/front/assets/chatlogo.png", "alt", "", "width", "200", "height", "200", 1, "mb-4"], [1, "h3", "mb-3", "fw-normal"], [1, "form-floating"], ["type", "text", "id", "floatingInput", "name", "userName", "placeholder", "", "required", "", "minlength", "4", 1, "form-control", 3, "ngModel", "ngModelChange"], ["userName", "ngModel"], ["for", "floatingInput"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "password", "id", "password", "name", "password", "placeholder", "", "required", "", "minlength", "8", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["for", "password"], [1, "mb-3"], ["href", "#/signup"], ["type", "submit", 1, "w-100", "btn", "btn-lg", "btn-primary"], [1, "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "main", 1)(2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.login(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Please login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) { return ctx.loginReq.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "User name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6)(14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.loginReq.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.loginReq.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.loginReq.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #f5f5f5;\n}\n\n.form-signin[_ngcontent-%COMP%] {\n  max-width: 330px;\n  padding: 15px;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]:focus-within {\n  z-index: 2;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLmZvcm0tc2lnbmluIHtcbiAgbWF4LXdpZHRoOiAzMzBweDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmZvcm0tc2lnbmluIC5mb3JtLWZsb2F0aW5nOmZvY3VzLXdpdGhpbiB7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cblxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufSJdfQ== */"] });


/***/ }),

/***/ 9087:
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function RegisterComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " User name is required and should be at least 4 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " User name is in use. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " email is required and should be at least 4 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password is required and should be at least 8 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(authSvr, router) {
        this.authSvr = authSvr;
        this.router = router;
        this.exists = false;
        this.user = {
            userName: "",
            password: "",
            email: "",
        };
    }
    ngOnInit() {
    }
    register(form) {
        if (form.invalid || this.exists) {
            for (const control of Object.keys(form.controls)) {
                form.controls[control].markAsTouched();
            }
            return;
        }
        this.authSvr.addUser(this.user).subscribe(res => {
            this.router.navigate(["/login"]);
        });
    }
    validUser() {
        this.authSvr.userExists(this.user.userName).subscribe(res => {
            this.exists = res;
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 28, vars: 7, consts: [[1, "text-center"], [1, "form-signin", "w-100", "m-auto"], [3, "ngSubmit"], ["formRegister", "ngForm"], ["src", "/front/assets/chatlogo.png", "alt", "", "width", "200", "height", "200", 1, "mb-4"], [1, "h3", "mb-3", "fw-normal"], [1, "form-floating"], ["type", "text", "id", "userName", "name", "userName", "placeholder", "", "required", "", "minlength", "4", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["userName", "ngModel"], ["for", "userName"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "email", "id", "email", "name", "email", "placeholder", "", "required", "", "minlength", "4", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "email"], ["type", "password", "id", "floatingPassword", "name", "password", "placeholder", "", "required", "", "minlength", "8", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["for", "floatingPassword"], ["type", "submit", 1, "w-100", "btn", "btn-lg", "btn-primary"], [1, "alert", "alert-danger"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "main", 1)(2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.register(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_8_listener($event) { return ctx.user.userName = $event; })("change", function RegisterComponent_Template_input_change_8_listener() { return ctx.validUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "User name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RegisterComponent_div_12_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RegisterComponent_div_13_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6)(15, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_15_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RegisterComponent_div_19_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 6)(21, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_21_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, RegisterComponent_div_25_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.exists);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r6.invalid && (_r6.dirty || _r6.touched));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #f5f5f5;\n}\n\n.form-signin[_ngcontent-%COMP%] {\n  max-width: 330px;\n  padding: 15px;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]:focus-within {\n  z-index: 2;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLmZvcm0tc2lnbmluIHtcbiAgbWF4LXdpZHRoOiAzMzBweDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmZvcm0tc2lnbmluIC5mb3JtLWZsb2F0aW5nOmZvY3VzLXdpdGhpbiB7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cblxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufSJdfQ== */"] });


/***/ }),

/***/ 4819:
/*!******************************************!*\
  !*** ./src/app/rooms/rooms.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomsComponent": () => (/* binding */ RoomsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/chat.service */ 9014);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function RoomsComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoomsComponent_li_7_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const room_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.selectRoom(room_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const room_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", room_r1, " ");
} }
class RoomsComponent {
    constructor(chatSvr, router) {
        this.chatSvr = chatSvr;
        this.router = router;
        this.selectedRoom = "";
    }
    ngOnInit() {
        this.chatSvr.getRooms().subscribe(rooms => {
            console.log(rooms);
            this.rooms = rooms;
        });
    }
    selectRoom(room) {
        this.selectedRoom = room;
        console.log(this.selectedRoom);
    }
    joinRoom() {
        if (this.selectedRoom == "") {
            return;
        }
        this.router.navigate(['/chat', { room: this.selectedRoom }]);
    }
}
RoomsComponent.ɵfac = function RoomsComponent_Factory(t) { return new (t || RoomsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_0__.ChatService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
RoomsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RoomsComponent, selectors: [["app-rooms"]], decls: 11, vars: 1, consts: [[1, "text-center"], ["src", "/front/assets/chatlogo.png", "alt", "", "width", "200", "height", "200", 1, "mb-4"], [1, "h4", "mb-3", "fw-normal"], [1, "d-flex", "gap-5", "justify-content-center"], [1, "dropdown-menu", "d-block", "position-static", "pt-0", "mx-0", "rounded-3", "shadow", "overflow-hidden", "w-280px"], [1, "list-unstyled", "mb-0"], [4, "ngFor", "ngForOf"], [1, "text-center", "mt-3"], ["type", "button", 1, "mb-3", "btn", "btn-lg", "btn-primary", 3, "click"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center", "gap-2", "py-2", 3, "click"], [1, "d-inline-block", "bg-success", "rounded-circle", "p-1"]], template: function RoomsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Select a room to chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RoomsComponent_li_7_Template, 4, 1, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoomsComponent_Template_button_click_9_listener() { return ctx.joinRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Join");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.rooms);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb29tcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.service */ 5535);






class AuthService {
    constructor(httpClient, jwtService) {
        this.httpClient = httpClient;
        this.jwtService = jwtService;
        this.authUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.authURL;
        this.existsUrl = this.authUrl + "/exists";
        this.addUserurl = this.authUrl + "/add_user";
        this.loginUrl = this.authUrl + "/login";
    }
    login(login) {
        return this.httpClient.post(this.loginUrl, login).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(res => {
            this.jwtService.token = res.data;
            this.jwtService.userName = login.userName;
        }));
    }
    addUser(user) {
        return this.httpClient.put(this.addUserurl, user);
    }
    userExists(userName) {
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().set("userName", userName);
        return this.httpClient.get(this.existsUrl, { params: queryParams }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(result => {
            return result.data;
        }));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_jwt_service__WEBPACK_IMPORTED_MODULE_1__.JwtService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9014:
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatService": () => (/* binding */ ChatService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.service */ 5535);






class ChatService {
    constructor(httpClient, jwtService) {
        this.httpClient = httpClient;
        this.jwtService = jwtService;
        this.chatUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.chatURL;
        this.messagesUrl = this.chatUrl + "/messages";
        this.roomsUrl = this.chatUrl + "/rooms";
        this.roomUsersUrl = this.chatUrl + "/room_users";
        this.chatTicketUrl = this.chatUrl + "/ticket";
        this.socketUrl = this.chatUrl + "/ws";
    }
    _setHeaders() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Authorization", this.jwtService.token);
        return headers;
    }
    getMessages(room) {
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("room", room);
        let headers = this._setHeaders();
        return this.httpClient.get(this.messagesUrl, { params: queryParams, headers: headers }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(resp => {
            return resp.data;
        }));
    }
    getRooms() {
        let headers = this._setHeaders();
        return this.httpClient.get(this.roomsUrl, { headers: headers }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(resp => {
            return resp.data;
        }));
    }
    getRoomUsers(room) {
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("room", room);
        let headers = this._setHeaders();
        return this.httpClient.get(this.roomUsersUrl, { params: queryParams, headers: headers }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(resp => {
            return resp.data;
        }));
    }
    getChatTicket() {
        let headers = this._setHeaders();
        return this.httpClient.get(this.chatTicketUrl, { headers: headers }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(resp => {
            return resp.data;
        }));
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_jwt_service__WEBPACK_IMPORTED_MODULE_1__.JwtService)); };
ChatService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5535:
/*!*****************************************!*\
  !*** ./src/app/services/jwt.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtService": () => (/* binding */ JwtService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class JwtService {
    constructor() {
        this.token = "";
        this.userName = "";
    }
}
JwtService.ɵfac = function JwtService_Factory(t) { return new (t || JwtService)(); };
JwtService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtService, factory: JwtService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3188:
/*!*******************************************!*\
  !*** ./src/app/services/stock.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockService": () => (/* binding */ StockService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);





class StockService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.stockUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stockURL;
        this.stockValueUrl = this.stockUrl + "/";
    }
    stock(req) {
        return this.httpClient.post(this.stockValueUrl, req).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(resp => {
            return resp.data;
        }));
    }
}
StockService.ɵfac = function StockService_Factory(t) { return new (t || StockService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
StockService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: StockService, factory: StockService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8223:
/*!***********************************************!*\
  !*** ./src/app/services/websocket.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebsocketService": () => (/* binding */ WebsocketService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);


class WebsocketService {
    constructor() { }
    connect(url) {
        if (!this.subject) {
            this.subject = this.create(url);
            console.log("Successfully connected: " + url);
        }
        return this.subject;
    }
    create(url) {
        let ws = new WebSocket(url);
        let observable = rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable.create((obs) => {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        let observer = {
            next: (data) => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            }
        };
        return rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject.create(observer, observable);
    }
}
WebsocketService.ɵfac = function WebsocketService_Factory(t) { return new (t || WebsocketService)(); };
WebsocketService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: WebsocketService, factory: WebsocketService.ɵfac });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    chatURL: "http://localhost:6312/chat/v1",
    authURL: "http://localhost:7312/auth/v1",
    stockURL: "http://localhost:5312/stock/v1",
    socketURL: "ws://localhost:6312/chat/v1/ws",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
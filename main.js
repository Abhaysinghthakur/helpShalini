(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div\n{\n    background-color:crimson;\n}h1{\n    font-size:600%;\n    font-style:bold;\n-webkit-padding-after: 0%;\n        padding-block-end: 0%;\ncolor: beige;\n}.navi{\n    font-style:bold;\n    font-size: 100%;\n    \n    \n}a{\n    font-size: 20px;\n    font-style: bold;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:brown\">\n   \n  <h1 style=\"text-align:center\">GAME OF THRONES</h1>\n\n<div style=\"background-color:crimson\">\n<nav class=\"navbar navbar-expand-lg navbar-light bg-red\">\n   <a class=\"navbar-brand\" href=\"https://www.hbo.com/game-of-thrones\"><img src=\"assets/got7.jpg\"  width=\"200px\" height=\"40px\" ></a>\n   <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n     <span class=\"navbar-toggler-icon\"></span>\n   </button>\n   <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n     <ul class=\"navbar-nav\">\n       <li class=\"nav-item active\">\n         <a class=\"nav-link\" href=\"#\"><a [routerLink]=\"['/home']\">Home</a><span class=\"sr-only\">(current)</span></a>\n       </li>\n       <br>\n       <br>\n       \n\n       <li class=\"nav-item dropdown\">\n         <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n           Filter\n         </a>\n         <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n           \n          <a class=\"dropdown-item\" href=\"#\"><a [routerLink]=\"['/character']\">Character</a></a>\n           <a class=\"dropdown-item\" href=\"#\"><a [routerLink]=\"['/episode']\">Houses</a></a>\n           <a class=\"dropdown-item\" href=\"#\"><a [routerLink]=\"['/book']\">Book</a></a>\n         </div>\n       </li>\n     </ul>\n   </div>\n </nav>\n </div>\n </div>\n <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _game_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-http.service */ "./src/app/game-http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//router module used for setting up the application level.






//decorators
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                //routerModule forRoot method to declare possible router in application
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'view', component: _view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"] },
                    { path: 'houses', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
                    { path: 'characters', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
                    { path: 'books', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
                    { path: 'books:bookId', component: _view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"] },
                    { path: 'characters/:characterId', component: _view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"] },
                    { path: 'houses/:housesId', component: _view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"] },
                ], { useHash: true })
            ],
            providers: [_game_http_service__WEBPACK_IMPORTED_MODULE_6__["GameHttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/game-http.service.ts":
/*!**************************************!*\
  !*** ./src/app/game-http.service.ts ***!
  \**************************************/
/*! exports provided: GameHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameHttpService", function() { return GameHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameHttpService = /** @class */ (function () {
    function GameHttpService(_http) {
        this._http = _http;
        this.baseUrl = 'https://anapioficeandfire.com/api';
        console.log("game-http service was called");
    }
    GameHttpService.prototype.handleError = function (err) {
        console.log("Handle error Http calls");
        console.log(err.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.message);
    };
    //method to get all books, characters, houses
    GameHttpService.prototype.getAllBooks = function () {
        var myResponseBooks = this._http.get(this.baseUrl + '/books');
        console.log(myResponseBooks);
        return myResponseBooks;
    };
    GameHttpService.prototype.getAllCharacters = function () {
        var myResponseCharacters = this._http.get(this.baseUrl + '/characters');
        console.log(myResponseCharacters);
        return myResponseCharacters;
    };
    GameHttpService.prototype.getAllHouses = function () {
        var myResponseHouses = this._http.get(this.baseUrl + '/houses');
        console.log(myResponseHouses);
        return myResponseHouses;
    };
    //method to get particular book,character,houses
    GameHttpService.prototype.getSingleBookInformation = function (bookId) {
        var myResponseOfBooks = this._http.get(this.baseUrl + '/books' + '/' + bookId);
        return myResponseOfBooks;
    };
    GameHttpService.prototype.getSingleCharacterInformation = function (characterId) {
        var myResponseOfCharacter = this._http.get(this.baseUrl + '/characters' + '/' + characterId);
        return myResponseOfCharacter;
    };
    GameHttpService.prototype.getSingleHouseInformation = function (houseId) {
        var myResponseOfHouse = this._http.get(this.baseUrl + '/houses' + '/' + houseId);
        return myResponseOfHouse;
    };
    GameHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GameHttpService);
    return GameHttpService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nh3\n{\n    font-size: bold;\n    font-style: italic;\n    color: red;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\" style=\"text-align:center\">\n      <div class=\"col-md-12 title1\" ></div> \n      <br>\n      <br>\n      <br>\n  \n      <div *ngFor=\"let item of allItems\" class=\"col-md-4\">\n        <br>\n        <br>\n        <!--characters-->\n        <div *ngIf=\"item.gender\" class=\"card character1\">\n            <h5 class=\"card-header\">Character</h5>\n            <img class=\"card-img-top\" src=\"assets/got2.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{item.name|uppercase}}</h5>\n              <p class=\"card-text\">Gender:-{{item.gender}}</p>\n              <a href=\"#\" class=\"btn btn-secondary\" [routerLink]=\"['/characters',item.url.split('characters/').pop()]\">View</a>\n            </div>\n          </div>\n        <!--books-->\n         <div *ngIf=\"item.isbn\" class=\"card books1\">\n          <h5 class=\"card-header\">Book</h5>\n          <img class=\"card-img-top\" src=\"assets/got1.jpg\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title booktitle\">{{item.name|uppercase}}</h5>\n            <p class=\"card-text booktext\">Publisher of the book:-{{item.publisher}}</p>\n            <!--To get the id we are popping out other things from url till books/-->\n            <a href=\"#\" class=\"btn btn-secondary\" [routerLink]=\"['/books',item.url.split('books/').pop()]\">View</a>\n          </div>\n        </div>\n        \n  <br>\n  <br>\n           <!--houses-->\n  \n        <div *ngIf=\"item.region\" class=\"card house1\">\n          <h5 class=\"card-header\">House</h5>\n          <img class=\"card-img-top\" src=\"assets/got3.jpg\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{item.name|uppercase}}</h5>\n            <p class=\"card-text\">Region:-{{item.region}}</p>\n            <a href=\"view.html\" class=\"btn btn-secondary\" [routerLink]=\"['/houses',item.url.split('houses/').pop()]\">View\n            </a>\n  \n          </div>\n        </div>\n      </div>\n    </div>\n  \n  \n  </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-http.service */ "./src/app/game-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(gameHttpService) {
        this.gameHttpService = gameHttpService;
        this.allBooks = [];
        this.allCharacters = [];
        this.allHouses = [];
        this.allItems = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allBooks = this.gameHttpService.getAllBooks().subscribe(function (data) {
            console.log("logging data");
            console.log(data);
            _this.allBooks = data;
            _this.allBooks.sort(function (a, b) { return a.name.localeCompare(b.name); });
            _this.allItems = _this.allItems.concat(_this.allBooks);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        this.allCharacters = this.gameHttpService.getAllCharacters().subscribe(function (data) {
            console.log("logging data");
            console.log(data);
            _this.allCharacters = data;
            _this.allCharacters.sort(function (a, b) { return a.name.localeCompare(b.name); });
            _this.allItems = _this.allItems.concat(_this.allCharacters);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        this.allHouses = this.gameHttpService.getAllHouses().subscribe(function (data) {
            console.log("logging data");
            console.log(data);
            _this.allHouses = data;
            _this.allHouses.sort(function (a, b) { return a.name.localeCompare(b.name); });
            _this.allItems = _this.allItems.concat(_this.allHouses);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        console.log("Home Component Destroyed");
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_game_http_service__WEBPACK_IMPORTED_MODULE_1__["GameHttpService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3\n{\n    font-size: bold;\n    font-style: italic;\n    color: red;\n}\nh4{\n    font-size: bold;\n    font-style: italic;\n    color:orangered;\n}"

/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class =\"container-fluid\">\n  \n    <div class=\"container\" *ngIf=\"currentBook\" style=\"word-wrap: break-word;background-color: red\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h1 class=\"heading\" style=\"margin-left: 30%; font-style: italic; font-weight: 700; text-shadow: 0 0 3px #FF0000;\">{{currentBook.name}}</h1>\n        </div>\n      </div>\n      <img src=\"assets/got1.jpg\" class=\"img-fluid\" alt=\"Responsive image\" style=\"margin-left: 30%;margin-top:3%\">\n      <div class=\"row \"style=\"margin-top:6%; font-size:20px;font-weight:bold ; color:hsl(0, 100%, 30%);\">\n        <div class=\"col-md-6\">\n          <div>isbn:- {{currentBook.isbn}}</div>\n          <div>Author:- {{currentBook.authors}}</div>\n          <div>No Of Pages:- {{currentBook.numberOfPages}}</div>\n        </div>\n        <div class=\"col-md-6\">\n          <div>Publisher:- {{currentBook.publisher}}</div>\n          <div>MediaType:- {{currentBook.mediaType}}</div>\n    <div>Released On:- {{currentBook.released|date}}</div>\n        </div>\n      </div>\n      \n      <div class=\"row\" style=\"margin-top: 6%; font-size:16px\">\n        <div class=\"col-md-12\">\n          <div style=\"text-shadow: 0 0 3px #FF0000;font-weight: 700;font-size:28px\">Characters:-</div>\n           <div style=\"margin-top:2%;color:hsl(0, 100%, 30%)\"> {{currentBook.characters}}</div></div></div>\n          <div class=\"row\">\n          <div class =\"col-md-12\">\n          <div style=\"text-shadow: 0 0 3px #FF0000;font-weight: 700;font-size:28px\">Pov Characters:-</div>\n         <div  style=\"margin-top:2%;color:hsl(0, 100%, 30%)\"> {{currentBook.povCharacters}}</div>\n        </div>\n      </div>\n    </div>\n    <br>\n    <br>\n    \n    <!--characters-->\n    <div class=\"container\" *ngIf=\"currentCharacter\"style=\"word-wrap: break-word; background-color: orange\">\n      <div class=\"row\">\n        <div class=\"col-md-12\" style=\"color:#ffbf00;\">\n          <h1 class=\"heading\"style=\"margin-left: 30%; font-style: italic; font-weight: 700;\">{{currentCharacter.name}}</h1>\n        </div>\n      </div>\n      <img src=\"assets/got2.jpg\" class=\"img-fluid\" alt=\"Responsive image\" width=\"500px\" height=\"250px\">\n      <div class=\"row\"style=\"margin-top:4%; font-weight:bold\">\n        <div class=\"col-md-6\" style=\"font-size: 20px\">\n          <div>Gender:- {{currentCharacter.gender}}</div>\n          <div>Culture:- {{currentCharacter.culture}}</div>\n          <div>Born on:- {{currentCharacter.born}}</div>\n          <div>Father:- {{currentCharacter.father}}</div>\n          <div>Mother:- {{currentCharacter.mother}}</div>\n       \n        </div>\n        <div class=\"col-md-6\" style=\"font-size: 20px\">\n            <div>Spouse:- {{currentCharacter.spouse}}</div>\n          <div>Died on:- {{currentCharacter.died}}</div>\n          <div>Title:- {{currentCharacter.titles}}</div>\n          <div>Aliaes :- {{currentCharacter.aliases}}</div>\n          <div>Played By:- {{currentCharacter.playedBy}}</div>\n        </div>\n      </div><hr>\n      <div class=\"row\"style=\"margin-top:4%; font-weight:bold\">\n        <div class=\"col-md-12\">\n          <div>TV Series:- {{currentCharacter.tvSeries}}</div>\n        </div>\n        <div class=\"col-md-12\">\n            <div>Allegiances:- {{currentCharacter.allegiances}}</div>\n          </div>\n          <div class=\"col-md-12\">\n              <div>Books:- {{currentCharacter.books}}</div>\n            </div>\n            <div class=\"col-md-12\">\n                <div>Pov Books:- {{currentCharacter.povBooks}}</div>\n              </div>\n      </div>\n    </div>\n    <!--houses-->\n    <div class=\"container\" *ngIf=\"currentHouse\"style=\"word-wrap: break-word; background-color:black\">\n      <div class=\"row\" style=\"color:coral\">\n        <div class=\"col-md-12\" style=\"text-align: center\">\n          <h1 class=\"heading\">{{currentHouse.name}}</h1>\n        </div>\n      </div>\n      <img src=\"assets/got3.jpg\" class=\"img-fluid\" alt=\"Responsive image\" style=\"margin-left: 30%;margin-top:3%\">\n      <div class=\"row\" style=\"margin-top:3%; color:#ffbf00; margin-left: 3% ; font-size: 20px\">\n        <div class=\"col-md-6\">\n          <div>Region:-{{currentHouse.region}}</div>\n         \n          <div>Words:-{{currentHouse.words}}</div>\n          <div>Title:-{{currentHouse.titles}}</div>\n          <div>Seats:-{{currentHouse.seats}}</div>\n          <div>Overloaded:-{{currentHouse.overloaded}}</div>\n      \n        </div>\n        <div class=\"col-md-6\">\n    \n          <div>Founded On:-{{currentHouse.founded}}</div>\n          <div>Died Out:-{{currentHouse.diedOut}}</div>\n          <div>Ancestoral Weapons:-{{currentHouse.ancestoralWeapons}}</div>\n          <div>Cadet Branches:-{{currentHouse.cadetBranches}}</div>\n    \n        </div>\n      </div><hr>\n      <div class=\"col-md-12\" style=\"margin-top: 3% ;color:#ffbf00; margin-left: 3% ; font-size: 20px\">\n          <div>Coat Of Arms:-{{currentHouse.coatOfArms}}</div>\n      </div>\n      <div class=\"col-md-12\"style=\"color:#ffbf00; margin-left: 3% ; font-size: 20px\">\n          <div>CurrentLord:-{{currentHouse.currentLord}}</div>\n      </div>\n      <div class=\"col-md-12\"style=\"color:#ffbf00; margin-left: 3% ; font-size: 20px\">\n         \n          <div>Heir:-{{currentHouse.heir}}</div>\n      </div>\n      <div class=\"col-md-12\"style=\"color:#ffbf00; margin-left: 3% ; font-size: 20px\">\n        <div>Sworn Members:-{{currentHouse.swornMembers}}</div>\n      </div>\n    </div>\n    </div>"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _game_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game-http.service */ "./src/app/game-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewComponent = /** @class */ (function () {
    function ViewComponent(_route, router, gameHttpService) {
        this._route = _route;
        this.router = router;
        this.gameHttpService = gameHttpService;
        console.log("constructor is called");
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit called");
        //getting bookId from route
        var bookId = this._route.snapshot.paramMap.get('bookId');
        console.log(bookId);
        this.gameHttpService.getSingleBookInformation(bookId).subscribe(function (data) {
            console.log(data);
            _this.currentBook = data;
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        var characterId = this._route.snapshot.paramMap.get('characterId');
        console.log(characterId);
        this.gameHttpService.getSingleCharacterInformation(characterId).subscribe(function (data) {
            console.log(data);
            _this.currentCharacter = data;
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        var houseId = this._route.snapshot.paramMap.get('houseId');
        console.log(houseId);
        this.gameHttpService.getSingleHouseInformation(houseId).subscribe(function (data) {
            console.log(data);
            _this.currentHouse = data;
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _game_http_service__WEBPACK_IMPORTED_MODULE_2__["GameHttpService"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/abhay/Documents/Work/Angular Basic/shalini/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
import './polyfills.server.mjs';
import {
  BehaviorSubject,
  ChangeDetectorRef,
  CommonModule,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  Host,
  HttpClient,
  HttpClientModule,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  RuntimeError,
  Self,
  SkipSelf,
  Subject,
  Version,
  __decorate,
  booleanAttribute,
  bootstrapApplication,
  computed,
  core_exports,
  forkJoin,
  forwardRef,
  from,
  getDOM,
  importProvidersFrom,
  inject,
  isPlatformBrowser,
  isPromise,
  isSubscribable,
  map,
  mergeApplicationConfig,
  provideClientHydration,
  provideHttpClient,
  provideRouter,
  provideServerRendering,
  signal,
  untracked,
  withFetch,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-7YXSY7PT.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PTRYWQQD.mjs";

// angular:jit:template:file:src\app\app.component.html
var app_component_default = '<div class="margine">\r\n\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n</div>\r\n\r\n';

// angular:jit:style:file:src\app\app.component.scss
var app_component_default2 = '@charset "UTF-8";\n\n/* src/app/app.component.scss */\n.margine {\n  margin: -10px !important;\n  padding: -10px !important;\n}\n/*# sourceMappingURL=app.component-JFPP4ETE.css.map */\n';

// angular:jit:template:file:src\components\template\template.component.html
var template_component_default = '<body>\r\n<div *ngFor="let template of templates">\r\n    <h3>{{ template.fact }}</h3>\r\n  </div>\r\n</body>';

// angular:jit:style:file:src\components\template\template.component.scss
var template_component_default2 = "/* src/components/template/template.component.scss */\n/*# sourceMappingURL=template.component-RJBWSR6C.css.map */\n";

// src/components/template/template.service.ts
var TemplateService = class TemplateService2 {
  constructor(http) {
    this.http = http;
    this.templateUrl = "https://catfact.ninja/fact";
  }
  getTemplates() {
    return this.http.get(this.templateUrl);
  }
  static {
    this.ctorParameters = () => [
      { type: HttpClient }
    ];
  }
};
TemplateService = __decorate([
  Injectable({
    providedIn: "root"
  })
], TemplateService);

// src/components/template/template.component.ts
var TemplateComponent = class TemplateComponent2 {
  constructor(templateService) {
    this.templateService = templateService;
    this.templates = [];
  }
  ngOnInit() {
    this.templateService.getTemplates().subscribe((data) => {
      if (Array.isArray(data)) {
        this.templates.push(...data);
      } else if (data && typeof data === "object" && !Array.isArray(data)) {
        this.templates.push(data);
      } else {
        console.error("Unexpected data format:", data);
      }
    }, (error) => {
      console.error("Error fetching templates:", error);
    });
  }
  static {
    this.ctorParameters = () => [
      { type: TemplateService }
    ];
  }
};
TemplateComponent = __decorate([
  Component({
    selector: "app-template",
    template: template_component_default,
    standalone: true,
    imports: [CommonModule],
    styles: [template_component_default2]
  })
], TemplateComponent);

// angular:jit:template:file:src\components\homepage\homepage.component.html
var homepage_component_default = '<section class="hero">\r\n  <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nunu_0.jpg" alt="Nunu Electronics Banner">\r\n  <h2>Nunu<span class="light-text">Electronics</span></h2>\r\n  <a class="btn" href="#products">Browse</a>\r\n</section>\r\n\r\n<section class="products-section" id="products">\r\n  <h3>Our Products</h3>\r\n  <div class="products">\r\n    <div class="product" *ngFor="let product of Products">\r\n      <img [src]="product.image" [alt]="product.productName">\r\n      <h4>{{ product.productName }}</h4>\r\n      <p>{{ product.description }}</p>\r\n      <a (click)="addToCart(product)" href="#" class="btn">Buy Now</a>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<footer>\r\n  <p>&copy; 2024 Nunu Electronics. All rights reserved.</p>\r\n  <p><a href="mailto:support@nunu.com">Contact Us</a> | Phone: +1 800 555 6789</p>\r\n</footer>\r\n';

// angular:jit:style:file:src\components\homepage\homepage.component.scss
var homepage_component_default2 = '/* src/components/homepage/homepage.component.scss */\nbody {\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background-color: #e9ecef;\n  overflow-x: hidden;\n}\nbody::before {\n  content: "";\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.15) 0%,\n      transparent 80%);\n  transform: translate(-50%, -50%);\n  animation: pulse 6s ease-in-out infinite;\n  z-index: -1;\n}\nbody::after {\n  content: "";\n  position: fixed;\n  bottom: -150px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 1000px;\n  height: 500px;\n  background:\n    radial-gradient(\n      ellipse at center,\n      rgba(255, 255, 255, 0.2) 0%,\n      transparent 70%);\n  border-radius: 50% 50% 0 0;\n  z-index: -1;\n  pointer-events: none;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 0.1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n  50% {\n    opacity: 0.25;\n    transform: translate(-50%, -50%) scale(1.2);\n  }\n}\n.hero {\n  position: relative;\n  width: 100%;\n  height: 350px;\n  overflow: hidden;\n}\n.hero img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.hero h2 {\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translateX(-50%);\n  color: rgb(25, 33, 51);\n  font-size: 3rem;\n  margin: 0;\n}\n.light-text {\n  color: #79b0e4;\n}\n.hero .btn {\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 10px 20px;\n  background-color: #ff6b6b;\n  color: white;\n  text-decoration: none;\n  border-radius: 5px;\n  font-size: 1rem;\n}\n.products-section {\n  padding: 40px 20px;\n  background-color: #2b9dd8;\n  color: rgb(32, 38, 70);\n}\n.products {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n  margin-top: 20px;\n}\n.product {\n  position: relative;\n  background-color: white;\n  border-radius: 8px;\n  padding: 15px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  color: #333;\n  overflow: hidden;\n}\n.product img {\n  width: 100%;\n  height: 150px;\n  object-fit: contain;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  transition: transform 0.3s ease-in-out;\n}\n.product img:hover {\n  transform: scale(1.1);\n}\n.product h4 {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.product p {\n  font-size: 0.9rem;\n  color: #666;\n  margin: 8px 0;\n}\n.product .btn {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #28a745;\n  color: white;\n  padding: 8px 15px;\n  border-radius: 5px;\n  text-decoration: none;\n  font-weight: bold;\n  width: 80%;\n  box-sizing: border-box;\n}\n.fixed-buy-btn {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background-color: #28a745;\n  color: white;\n  padding: 12px 20px;\n  font-size: 1rem;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  z-index: 1000;\n  text-decoration: none;\n  font-weight: bold;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\nfooter {\n  background-color: #164a69;\n  color: white;\n  text-align: center;\n  padding: 20px;\n}\nfooter a {\n  color: #b2ebf2;\n  text-decoration: none;\n}\n.product {\n  padding-bottom: 50px;\n}\n/*# sourceMappingURL=homepage.component-KV2MSPDV.css.map */\n';

// src/constants.ts
var APP_CONSTANTS = {
  BACKEND_BASE_URL_DEV: "http://localhost:5142",
  BACKEND_BASE_URL_PROD: "https://nunuelectronics-ehakdyc9e9b3h0ag.westeurope-01.azurewebsites.net",
  APP_TITLE: "Nunu Electronics",
  DEFAULT_LANGUAGE: "en",
  ITEMS_PER_PAGE: 10
};

// src/components/produse/produse.service.ts
var ProduseService = class ProduseService2 {
  constructor(http) {
    this.http = http;
    this.produseUrl = APP_CONSTANTS.BACKEND_BASE_URL_PROD + "/Product";
  }
  getProducts() {
    return this.http.get(this.produseUrl);
  }
  addProduct(product) {
    return this.http.post(this.produseUrl, product);
  }
  static {
    this.ctorParameters = () => [
      { type: HttpClient }
    ];
  }
};
ProduseService = __decorate([
  Injectable({
    providedIn: "root"
  })
], ProduseService);

// src/components/cart/cart.service.ts
var CartService = class CartService2 {
  constructor() {
    this.cartItems = [];
    this.cartItemsSubject = new BehaviorSubject([]);
    this.cartItems$ = this.cartItemsSubject.asObservable();
    if (typeof window !== "undefined" && window.localStorage) {
      const savedCart = localStorage.getItem("cartItems");
      if (savedCart) {
        this.cartItems = JSON.parse(savedCart);
        this.cartItemsSubject.next(this.cartItems);
      }
    }
  }
  getCartItems() {
    return this.cartItems;
  }
  addToCart(item) {
    const existingItem = this.cartItems.find((cartItem) => cartItem.productName === item.productName);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push(__spreadProps(__spreadValues({}, item), { quantity: 1 }));
    }
    this.saveCart();
  }
  removeFromCart(index) {
    this.cartItems.splice(index, 1);
    this.saveCart();
  }
  clearCart() {
    this.cartItems = [];
    this.saveCart();
  }
  saveCart() {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    }
    this.cartItemsSubject.next(this.cartItems);
  }
  static {
    this.ctorParameters = () => [];
  }
};
CartService = __decorate([
  Injectable({
    providedIn: "root"
  })
], CartService);

// src/components/homepage/homepage.component.ts
var HomepageComponent = class HomepageComponent2 {
  constructor(produseService, cartService) {
    this.produseService = produseService;
    this.cartService = cartService;
    this.Products = [];
  }
  ngOnInit() {
    this.produseService.getProducts().subscribe((data) => {
      if (data.length > 6) {
        this.Products = data.sort(() => 0.5 - Math.random()).slice(0, 6);
      } else {
        this.Products = data;
      }
    }, (error) => {
      console.error("Error fetching products:", error);
    });
  }
  addToCart(product) {
    this.cartService.addToCart(product);
  }
  static {
    this.ctorParameters = () => [
      { type: ProduseService },
      { type: CartService }
    ];
  }
};
HomepageComponent = __decorate([
  Component({
    selector: "app-homepage",
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterLink],
    template: homepage_component_default,
    styles: [homepage_component_default2]
  })
], HomepageComponent);

// angular:jit:template:file:src\components\navbar\navbar.component.html
var navbar_component_default = '<nav class="navbar">\r\n  <div class="container">\r\n    <div class="left-side">\r\n      <ul class="nav-links">\r\n        <li *ngIf="isLoggedIn" class="profile-icon">\r\n          <a routerLink="/profile">\r\n            <!-- Afi\u0219eaz\u0103 imaginea de profil din backend -->\r\n            <img [src]="profileImage" alt="Profile" class="user-icon">\r\n          </a>\r\n        </li>\r\n\r\n        <li><a routerLink="/">Home</a></li>\r\n        <li><a routerLink="/contact">Contact</a></li>\r\n        <li><a routerLink="/products">Products</a></li>\r\n\r\n        <li *ngIf="!isLoggedIn">\r\n          <a routerLink="/login">Login</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class="right-side">\r\n      <a routerLink="/cart" class="cart-link">\r\n        <span class="cart-text">Cart</span>\r\n        <div class="cart-icon-wrapper">\r\n          <img src="assets/cart-icon.png" alt="Cart" class="cart-icon">\r\n          <span class="cart-badge" *ngIf="cartCount > 0">{{ cartCount }}</span>\r\n        </div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</nav>\r\n';

// angular:jit:style:file:src\components\navbar\navbar.component.scss
var navbar_component_default2 = "/* src/components/navbar/navbar.component.scss */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.navbar {\n  background-color: #333;\n  height: 70px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 20px;\n}\n.container {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.left-side {\n  display: flex;\n  align-items: center;\n}\n.nav-links {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  gap: 25px;\n}\n.nav-links li {\n  display: flex;\n  align-items: center;\n}\n.nav-links a {\n  color: #fff;\n  text-decoration: none;\n  font-size: 18px;\n  transition: color 0.3s ease;\n}\n.nav-links a:hover {\n  color: #00bcd4;\n}\n.profile-icon img.user-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #00bcd4;\n  transition: transform 0.3s ease, border-color 0.3s ease;\n  cursor: pointer;\n}\n.profile-icon img.user-icon:hover {\n  transform: scale(1.1);\n  border-color: #fff;\n}\n.right-side {\n  display: flex;\n  align-items: center;\n}\n.cart-link {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: white;\n  position: relative;\n}\n.cart-text {\n  font-size: 16px;\n  margin-right: 8px;\n}\n.cart-icon-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.cart-icon {\n  width: 35px;\n  height: 35px;\n  cursor: pointer;\n  transition: transform 0.2s ease-in-out;\n}\n.cart-icon:hover {\n  transform: scale(1.1);\n}\n.cart-badge {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background-color: red;\n  color: white;\n  border-radius: 50%;\n  padding: 2px 6px;\n  font-size: 10px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=navbar.component-DU5RD2PW.css.map */\n";

// src/components/login/login.service.ts
var LoginService = class LoginService2 {
  constructor(http, platformId) {
    this.http = http;
    this.platformId = platformId;
    this.loginUrl = APP_CONSTANTS.BACKEND_BASE_URL_PROD + "/Auth/login";
    const isBrowser = isPlatformBrowser(this.platformId);
    const initialStatus = isBrowser ? !!localStorage.getItem("token") : false;
    this.loggedIn = new BehaviorSubject(initialStatus);
    this.isLoggedIn$ = this.loggedIn.asObservable();
  }
  login(credentials) {
    return this.http.post(this.loginUrl, credentials);
  }
  setLoginStatus(status) {
    this.loggedIn.next(status);
  }
  static {
    this.ctorParameters = () => [
      { type: HttpClient },
      { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID] }] }
    ];
  }
};
LoginService = __decorate([
  Injectable({
    providedIn: "root"
  })
], LoginService);

// src/components/profile/profile.service.ts
var ProfileService = class ProfileService2 {
  constructor(http) {
    this.http = http;
    this.userUrl = APP_CONSTANTS.BACKEND_BASE_URL_PROD + "/api/users";
    this.profileImageSubject = new BehaviorSubject(null);
    this.profileImage$ = this.profileImageSubject.asObservable();
  }
  // Obține imaginea de profil
  getProfileImage(userId) {
    return this.http.get(`${this.userUrl}/${userId}/profile-image`);
  }
  // Actualizează imaginea de profil
  updateProfileImage(userId, imageBase64) {
    this.profileImageSubject.next(imageBase64);
    const dto = { userId, imageBase64 };
    return this.http.post(`${this.userUrl}/profile-image`, dto);
  }
  // Emită noua imagine de profil
  // Obține istoricul comenzilor
  getOrderHistory(userId) {
    const orderUrl = APP_CONSTANTS.BACKEND_BASE_URL_PROD + "/api/orders/user/" + userId;
    return this.http.get(orderUrl);
  }
  static {
    this.ctorParameters = () => [
      { type: HttpClient }
    ];
  }
};
ProfileService = __decorate([
  Injectable({
    providedIn: "root"
  })
], ProfileService);

// src/components/navbar/navbar.component.ts
var NavbarComponent = class NavbarComponent2 {
  constructor(platformId, cartService, loginService, profileService) {
    this.platformId = platformId;
    this.cartService = cartService;
    this.loginService = loginService;
    this.profileService = profileService;
    this.cartCount = 0;
    this.isLoggedIn = false;
    this.profileImage = null;
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeCart();
      this.initializeLoginStatus();
    }
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
  initializeCart() {
    this.sub = this.cartService.cartItems$.subscribe((items) => {
      this.cartCount = items.reduce((total, item) => total + (item.quantity || 0), 0);
    });
  }
  initializeLoginStatus() {
    this.loginService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
      if (status) {
        const userId = this.getUserIdFromToken();
        if (userId) {
          this.profileService.getProfileImage(userId).subscribe({
            next: (response) => {
              this.profileImage = response?.imageBase64 || null;
            },
            error: (err) => console.error("Eroare la \xEEnc\u0103rcarea imaginii de profil:", err)
          });
        }
      } else {
        this.profileImage = null;
      }
    });
    this.profileService.profileImage$.subscribe((image) => {
      this.profileImage = image;
    });
  }
  // Funcție pentru a extrage userId din token, similar cu ce ai avut anterior
  getUserIdFromToken() {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem("token");
      if (!token)
        return 0;
      try {
        const payloadEncoded = token.split(".")[1];
        const decodedPayload = atob(payloadEncoded);
        const claims = JSON.parse(decodedPayload);
        const nameId = claims["nameid"] || claims["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
        return nameId ? parseInt(nameId) : 0;
      } catch (err) {
        console.error("Eroare la decodificarea token-ului", err);
        return 0;
      }
    }
    return 0;
  }
  static {
    this.ctorParameters = () => [
      { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID] }] },
      { type: CartService },
      { type: LoginService },
      { type: ProfileService }
    ];
  }
};
NavbarComponent = __decorate([
  Component({
    selector: "app-navbar",
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: navbar_component_default,
    styles: [navbar_component_default2]
  })
], NavbarComponent);

// src/app/app.component.ts
var AppComponent = class AppComponent2 {
  constructor() {
    this.title = "Nunu-Electronics";
  }
};
AppComponent = __decorate([
  Component({
    selector: "app-root",
    standalone: true,
    imports: [TemplateComponent, HomepageComponent, NavbarComponent, RouterOutlet, RouterLink, RouterLinkActive],
    template: app_component_default,
    styles: [app_component_default2]
  })
], AppComponent);

// angular:jit:template:file:src\components\error-page\error-page.component.html
var error_page_component_default = '<!DOCTYPE html>\r\n<html lang="en" ng-app="">\r\n<head>\r\n  <meta charset="UTF-8">\r\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n  <title>Centered Image with Message</title>\r\n</head>\r\n<body>\r\n    <audio id="pageSound" src="your-sound-file.mp3" autoplay></audio>\r\n  <div class="container">\r\n    <img src="https://cdna.artstation.com/p/assets/images/images/014/896/868/large/x-train-nunu-bot.jpg?1546153109" alt="Centered Image">\r\n    <div class="message">Eroare 404. Doamne Ajuta.</div>\r\n  </div>\r\n</body>\r\n</html>\r\n';

// angular:jit:style:file:src\components\error-page\error-page.component.scss
var error_page_component_default2 = "/* src/components/error-page/error-page.component.scss */\nbody {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  background-color: #f0f0f0;\n  font-family: Arial, sans-serif;\n}\n.container {\n  text-align: center;\n}\n.container img {\n  max-width: 20%;\n  height: auto;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.container .message {\n  margin-top: 16px;\n  font-size: 1.2em;\n  color: #333;\n}\n/*# sourceMappingURL=error-page.component-EO3TPS4N.css.map */\n";

// src/components/error-page/error-page.component.ts
var ErrorPageComponent = class ErrorPageComponent2 {
};
ErrorPageComponent = __decorate([
  Component({
    selector: "app-error-page",
    standalone: true,
    imports: [],
    template: error_page_component_default,
    styles: [error_page_component_default2]
  })
], ErrorPageComponent);

// angular:jit:template:file:src\components\contact-page\contact-page.component.html
var contact_page_component_default = '<div class="container">\r\n    \r\n    <form action="action_page.php">\r\n  \r\n      <label for="fname">First Name</label>\r\n      <input type="text" id="fname" name="firstname" placeholder="Your name..">\r\n  \r\n      <label for="lname">Last Name</label>\r\n      <input type="text" id="lname" name="lastname" placeholder="Your last name..">\r\n  \r\n      <label for="country">Country</label>\r\n      <select id="country" name="country">\r\n        <option value="australia">Australia</option>\r\n        <option value="canada">Canada</option>\r\n        <option value="usa">USA</option>\r\n        <option value="romania">Romania</option>\r\n      </select>\r\n      \r\n      <label for="problem">Problem</label>\r\n      <select id="problem" name="problem">\r\n        <option value="lag">Lag</option>\r\n        <option value="bugging">Bug</option>\r\n        <option value="package">Package not arriving</option>\r\n        <option value="service">Poor service</option>\r\n        <option value="reassurence">Reassurance</option>\r\n        <option value="payment">Payment</option>\r\n        <option value="weird">Something else</option>\r\n      </select>\r\n\r\n      <label for="subject">Subject</label>\r\n      <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>\r\n  \r\n      <input type="submit" value="Submit">\r\n  \r\n    </form>\r\n    \r\n  </div> \r\n  \r\n  ';

// angular:jit:style:file:src\components\contact-page\contact-page.component.scss
var contact_page_component_default2 = "/* src/components/contact-page/contact-page.component.scss */\ninput[type=text],\nselect,\ntextarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  resize: vertical;\n}\ninput[type=submit] {\n  background-color: #04AA6D;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\ninput[type=submit]:hover {\n  background-color: #45a049;\n}\n.container {\n  background-image: url(https://cdnb.artstation.com/p/assets/images/images/014/896/871/large/x-train-.jpg?1546152626);\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=contact-page.component-XBZ2AFBW.css.map */\n";

// src/components/contact-page/contact-page.component.ts
var ContactPageComponent = class ContactPageComponent2 {
};
ContactPageComponent = __decorate([
  Component({
    selector: "app-contact-page",
    standalone: true,
    imports: [],
    template: contact_page_component_default,
    styles: [contact_page_component_default2]
  })
], ContactPageComponent);

// angular:jit:template:file:src\components\produse\produse.component.html
var produse_component_default = '<div class="product-container">\r\n  <div *ngFor="let product of Products" class="product-card">\r\n    <img [src]="product.image" class="product-img" alt="{{ product.productName }}">\r\n    <div class="product-details">\r\n      <h3>{{ product.productName }}</h3>\r\n      <p class="price">${{ product.price }}</p>\r\n      <p class="description">{{ product.description }}</p>\r\n      <!-- Butonul de ad\u0103ugare \xEEn co\u0219 -->\r\n      <button class="add-to-cart-btn" (click)="addToCart(product)">Add to Cart!</button>\r\n    </div>\r\n  </div>\r\n</div>';

// angular:jit:style:file:src\components\produse\produse.component.scss
var produse_component_default2 = '@charset "UTF-8";\n\n/* src/components/produse/produse.component.scss */\nbody {\n  font-family: Arial, sans-serif;\n  background-color: #f5f5f5;\n  margin: 0;\n  padding: 0;\n}\n.product-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding: 20px;\n  justify-content: center;\n}\n.product-card {\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  padding: 15px;\n  width: 220px;\n  text-align: center;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.product-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n.product-img {\n  width: 100%;\n  height: 130px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.product-details h3 {\n  margin: 10px 0 5px;\n  color: #333;\n  font-size: 1.1rem;\n}\n.product-details .price {\n  font-size: 1rem;\n  font-weight: bold;\n  color: #27ae60;\n  margin-bottom: 5px;\n}\n.product-details .description {\n  font-size: 0.9rem;\n  color: #555;\n  white-space: normal;\n}\n.add-to-cart-btn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n.add-to-cart-btn:hover {\n  background-color: #45a049;\n}\n/*# sourceMappingURL=produse.component-JN6EZWJW.css.map */\n';

// src/components/produse/produse.component.ts
var ProduseComponent = class ProduseComponent2 {
  constructor(produseService, cartService) {
    this.produseService = produseService;
    this.cartService = cartService;
    this.Products = [];
  }
  ngOnInit() {
    const startTime = performance.now();
    this.produseService.getProducts().subscribe((data) => {
      this.Products.push(...data);
    }, (error) => {
      console.error("Error fetching products:", error);
    });
  }
  addToCart(product) {
    this.cartService.addToCart(product);
    console.log("Produsul a fost ad\u0103ugat \xEEn co\u0219:", product);
    console.log(this.cartService.getCartItems());
  }
  static {
    this.ctorParameters = () => [
      { type: ProduseService },
      { type: CartService }
    ];
  }
};
ProduseComponent = __decorate([
  Component({
    selector: "app-produse",
    standalone: true,
    imports: [CommonModule],
    template: produse_component_default,
    styles: [produse_component_default2]
  })
], ProduseComponent);

// angular:jit:template:file:src\components\cart\cart.component.html
var cart_component_default = '<div class="cart-container">\r\n    <h2>Your Shopping Cart</h2>\r\n  \r\n    <div *ngIf="cartItems.length === 0" class="empty-cart-message">\r\n      <p>Your cart is empty!</p>\r\n    </div>\r\n  \r\n    <div *ngFor="let item of cartItems; let i = index" class="cart-item">\r\n      <img [src]="item.image" class="cart-item-image" alt="{{ item.productName }}">\r\n      <div class="cart-item-details">\r\n        <h3>{{ item.productName }}</h3>\r\n        <p class="price">${{ item.price }}</p>\r\n  \r\n        <div class="quantity-container">\r\n          <button (click)="decreaseQuantity(i)" [disabled]="item.quantity <= 1">-</button>\r\n          <span class="quantity">Quantity: {{ item.quantity }}</span>\r\n          <button (click)="increaseQuantity(i)">+</button>\r\n        </div>\r\n  \r\n        <button class="remove-btn" (click)="removeFromCart(i)">Remove</button>\r\n      </div>\r\n    </div>\r\n  \r\n    <div *ngIf="cartItems.length > 0" class="cart-summary">\r\n      <p>Total: ${{ getTotal() }}</p>\r\n      <div class="cart-actions">\r\n        <button class="clear-cart-btn" (click)="clearCart()">Clear Cart</button>\r\n        <button class="checkout-btn" (click)="onCheckout()">Proceed to Checkout</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  ';

// angular:jit:style:file:src\components\cart\cart.component.scss
var cart_component_default2 = '@charset "UTF-8";\n\n/* src/components/cart/cart.component.scss */\n.cart-container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  font-family: Arial, sans-serif;\n  background-color: #f8f8f8;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\nh2 {\n  text-align: center;\n  margin-bottom: 20px;\n  font-size: 24px;\n  color: #333;\n}\n.empty-cart-message {\n  text-align: center;\n  font-size: 18px;\n  color: #888;\n  font-style: italic;\n}\n.cart-item {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #ddd;\n  padding: 15px 0;\n  margin-bottom: 10px;\n}\n.cart-item-image {\n  width: 100px;\n  height: 100px;\n  object-fit: cover;\n  margin-right: 20px;\n  border-radius: 5px;\n}\n.cart-item-details {\n  flex: 1;\n}\n.cart-item-details h3 {\n  font-size: 18px;\n  margin: 0;\n  color: #333;\n}\n.cart-item-details p.price {\n  font-size: 16px;\n  font-weight: bold;\n  color: #4CAF50;\n  margin-top: 5px;\n}\n.remove-btn {\n  background-color: #ff3333;\n  color: white;\n  padding: 8px 16px;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  border-radius: 5px;\n  transition: background-color 0.3s ease;\n}\n.remove-btn:hover {\n  background-color: #e60000;\n}\n.cart-summary {\n  text-align: right;\n  margin-top: 20px;\n  padding: 10px;\n  background-color: #f1f1f1;\n  border-radius: 5px;\n}\n.cart-summary p {\n  font-size: 20px;\n  font-weight: bold;\n  color: #333;\n}\n.cart-actions {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 15px;\n}\n.clear-cart-btn,\n.checkout-btn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: background-color 0.3s ease;\n}\n.clear-cart-btn:hover,\n.checkout-btn:hover {\n  background-color: #45a049;\n}\n.checkout-btn {\n  background-color: #008CBA;\n}\n.checkout-btn:hover {\n  background-color: #007b8b;\n}\n.quantity-container {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n}\n.quantity-container button {\n  background-color: #00bcd4;\n  color: white;\n  border: none;\n  padding: 5px 10px;\n  font-size: 18px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  border-radius: 5px;\n}\n.quantity-container button:hover {\n  background-color: #0097a7;\n}\n.quantity-container span {\n  margin: 0 10px;\n  font-size: 16px;\n  color: #333;\n}\n.quantity-container button[disabled] {\n  background-color: #ccc;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=cart.component-RFC6WYEZ.css.map */\n';

// src/components/cart/cart.component.ts
var CartComponent = class CartComponent2 {
  constructor(cartService, router) {
    this.cartService = cartService;
    this.router = router;
    this.cartItems = [];
  }
  ngOnInit() {
    this.sub = this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
  }
  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }
  removeFromCart(index) {
    this.cartService.removeFromCart(index);
  }
  clearCart() {
    this.cartService.clearCart();
  }
  getTotal() {
    const total = this.cartItems.reduce((total2, item) => total2 + item.price * item.quantity, 0);
    return total.toFixed(2);
  }
  increaseQuantity(index) {
    this.cartItems[index].quantity += 1;
    this.cartService.saveCart();
  }
  decreaseQuantity(index) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity -= 1;
      this.cartService.saveCart();
    }
  }
  onCheckout() {
    this.router.navigate(["/orderdetails"]);
  }
  static {
    this.ctorParameters = () => [
      { type: CartService },
      { type: Router }
    ];
  }
};
CartComponent = __decorate([
  Component({
    selector: "app-cart",
    standalone: true,
    imports: [CommonModule],
    template: cart_component_default,
    styles: [cart_component_default2]
  })
], CartComponent);

// angular:jit:template:file:src\components\thank-you\thank-you.component.html
var thank_you_component_default = '<div class="thank-you-container">\r\n    <h2>Thank You for Your Purchase!</h2>\r\n  \r\n    <div class="thank-you-message">\r\n      <p>Your order has been successfully processed. We appreciate your business!</p>\r\n      <p>You will receive a confirmation email shortly with your order details.</p>\r\n    </div>';

// angular:jit:style:file:src\components\thank-you\thank-you.component.scss
var thank_you_component_default2 = "/* src/components/thank-you/thank-you.component.scss */\n.thank-you-container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 40px;\n  font-family: Arial, sans-serif;\n  background-color: #f8f8f8;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\nh2 {\n  font-size: 28px;\n  color: #333;\n  margin-bottom: 20px;\n}\n.thank-you-message {\n  font-size: 18px;\n  color: #555;\n  margin-bottom: 30px;\n}\n.thank-you-actions {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n}\n.continue-shopping-btn,\n.view-order-btn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 12px 24px;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: background-color 0.3s ease;\n}\n.continue-shopping-btn:hover,\n.view-order-btn:hover {\n  background-color: #45a049;\n}\n.view-order-btn {\n  background-color: #008CBA;\n}\n.view-order-btn:hover {\n  background-color: #007b8b;\n}\n/*# sourceMappingURL=thank-you.component-2YCIB6OQ.css.map */\n";

// src/components/thank-you/thank-you.component.ts
var ThankYouComponent = class ThankYouComponent2 {
};
ThankYouComponent = __decorate([
  Component({
    selector: "app-thank-you",
    standalone: true,
    imports: [],
    template: thank_you_component_default,
    styles: [thank_you_component_default2]
  })
], ThankYouComponent);

// angular:jit:template:file:src\components\login\login.component.html
var login_component_default = `<div class="login-container">\r
    <h2>Autentificare</h2>\r
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">\r
      <div>\r
        <label for="username">User</label>\r
        <input id="username" type="username" formControlName="username" />\r
        <div *ngIf="loginForm.controls['username'].invalid && loginForm.controls['username'].touched">\r
          username invalid\r
        </div>\r
      </div>\r
      <div>\r
        <label for="password">Parol\u0103</label>\r
        <input id="password" type="password" formControlName="password" />\r
        <div *ngIf="loginForm.controls['password'].invalid && loginForm.controls['password'].touched">\r
          Parola trebuie s\u0103 aib\u0103 cel pu\u021Bin 6 caractere\r
        </div>\r
      </div>\r
      <button type="submit" [disabled]="loginForm.invalid">Autentificare</button>\r
      <button type="button" (click)="navigateToRegister()">\xCEnregistrare</button>\r
      <div *ngIf="errorMessage" class="error-message">{{ errorMessage }}</div>\r
    </form>\r
  </div>\r
  `;

// angular:jit:style:file:src\components\login\login.component.scss
var login_component_default2 = "/* src/components/login/login.component.scss */\n.login-container {\n  width: 300px;\n  margin: 50px auto;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  background: #fff;\n}\nh2 {\n  margin-bottom: 20px;\n}\ndiv {\n  margin-bottom: 15px;\n  text-align: left;\n}\nlabel {\n  display: block;\n  font-weight: bold;\n}\ninput {\n  width: 100%;\n  padding: 8px;\n  margin-top: 5px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\nbutton {\n  width: 100%;\n  padding: 10px;\n  margin-top: 10px;\n  border: none;\n  border-radius: 4px;\n  background-color: #28a745;\n  color: white;\n  font-size: 16px;\n  cursor: pointer;\n}\nbutton[type=button] {\n  background-color: #007bff;\n}\nbutton:disabled {\n  background-color: #ccc;\n  cursor: not-allowed;\n}\n.error-message {\n  color: red;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=login.component-7LPFF5AT.css.map */\n";

// node_modules/@angular/forms/fesm2022/forms.mjs
var BaseControlValueAccessor = class _BaseControlValueAccessor {
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
  }
  /**
   * Helper method that sets a property on a target element using the current Renderer
   * implementation.
   * @nodoc
   */
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  /**
   * Registers a function called when the control is touched.
   * @nodoc
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Sets the "disabled" property on the range input element.
   * @nodoc
   */
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _BaseControlValueAccessor,
      deps: [{
        token: Renderer2
      }, {
        token: ElementRef
      }],
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _BaseControlValueAccessor,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: BaseControlValueAccessor,
  decorators: [{
    type: Directive
  }],
  ctorParameters: () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }]
});
var BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _BuiltInControlValueAccessor,
      deps: null,
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _BuiltInControlValueAccessor,
      usesInheritance: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: BuiltInControlValueAccessor,
  decorators: [{
    type: Directive
  }]
});
var NG_VALUE_ACCESSOR = new InjectionToken(ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "checked" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("checked", value);
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _CheckboxControlValueAccessor,
      deps: null,
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _CheckboxControlValueAccessor,
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        listeners: {
          "change": "onChange($event.target.checked)",
          "blur": "onTouched()"
        }
      },
      providers: [CHECKBOX_VALUE_ACCESSOR],
      usesInheritance: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: CheckboxControlValueAccessor,
  decorators: [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($event.target.checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR]
    }]
  }]
});
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(ngDevMode ? "CompositionEventMode" : "");
var DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    this._composing = false;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /** @internal */
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  /** @internal */
  _compositionStart() {
    this._composing = true;
  }
  /** @internal */
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _DefaultValueAccessor,
      deps: [{
        token: Renderer2
      }, {
        token: ElementRef
      }, {
        token: COMPOSITION_BUFFER_MODE,
        optional: true
      }],
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _DefaultValueAccessor,
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      host: {
        listeners: {
          "input": "$any(this)._handleInput($event.target.value)",
          "blur": "onTouched()",
          "compositionstart": "$any(this)._compositionStart()",
          "compositionend": "$any(this)._compositionEnd($event.target.value)"
        }
      },
      providers: [DEFAULT_VALUE_ACCESSOR],
      usesInheritance: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: DefaultValueAccessor,
  decorators: [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      // TODO: vsavkin replace the above selector with the one below it once
      // https://github.com/angular/angular/issues/3011 is implemented
      // selector: '[ngModel],[formControl],[formControlName]',
      host: {
        "(input)": "$any(this)._handleInput($event.target.value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "$any(this)._compositionStart()",
        "(compositionend)": "$any(this)._compositionEnd($event.target.value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR]
    }]
  }],
  ctorParameters: () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }]
});
function isEmptyInputValue(value) {
  return value == null || (typeof value === "string" || Array.isArray(value)) && value.length === 0;
}
function hasValidLength(value) {
  return value != null && typeof value.length === "number";
}
var NG_VALIDATORS = new InjectionToken(ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var Validators = class {
  /**
   * @description
   * Validator that requires the control's value to be greater than or equal to the provided number.
   *
   * @usageNotes
   *
   * ### Validate against a minimum of 3
   *
   * ```typescript
   * const control = new FormControl(2, Validators.min(3));
   *
   * console.log(control.errors); // {min: {min: 3, actual: 2}}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `min` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static min(min) {
    return minValidator(min);
  }
  /**
   * @description
   * Validator that requires the control's value to be less than or equal to the provided number.
   *
   * @usageNotes
   *
   * ### Validate against a maximum of 15
   *
   * ```typescript
   * const control = new FormControl(16, Validators.max(15));
   *
   * console.log(control.errors); // {max: {max: 15, actual: 16}}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `max` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static max(max) {
    return maxValidator(max);
  }
  /**
   * @description
   * Validator that requires the control have a non-empty value.
   *
   * @usageNotes
   *
   * ### Validate that the field is non-empty
   *
   * ```typescript
   * const control = new FormControl('', Validators.required);
   *
   * console.log(control.errors); // {required: true}
   * ```
   *
   * @returns An error map with the `required` property
   * if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static required(control) {
    return requiredValidator(control);
  }
  /**
   * @description
   * Validator that requires the control's value be true. This validator is commonly
   * used for required checkboxes.
   *
   * @usageNotes
   *
   * ### Validate that the field value is true
   *
   * ```typescript
   * const control = new FormControl('some value', Validators.requiredTrue);
   *
   * console.log(control.errors); // {required: true}
   * ```
   *
   * @returns An error map that contains the `required` property
   * set to `true` if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static requiredTrue(control) {
    return requiredTrueValidator(control);
  }
  /**
   * @description
   * Validator that requires the control's value pass an email validation test.
   *
   * Tests the value using a [regular
   * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
   * pattern suitable for common use cases. The pattern is based on the definition of a valid email
   * address in the [WHATWG HTML
   * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
   * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
   * lengths of different parts of the address).
   *
   * The differences from the WHATWG version include:
   * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
   * - Disallow `local-part` to be longer than 64 characters.
   * - Disallow the whole address to be longer than 254 characters.
   *
   * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
   * validate the value against a different pattern.
   *
   * @usageNotes
   *
   * ### Validate that the field matches a valid email pattern
   *
   * ```typescript
   * const control = new FormControl('bad@', Validators.email);
   *
   * console.log(control.errors); // {email: true}
   * ```
   *
   * @returns An error map with the `email` property
   * if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static email(control) {
    return emailValidator(control);
  }
  /**
   * @description
   * Validator that requires the length of the control's value to be greater than or equal
   * to the provided minimum length. This validator is also provided by default if you use the
   * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
   * only for types that have a numeric `length` property, such as strings or arrays. The
   * `minLength` validator logic is also not invoked for values when their `length` property is 0
   * (for example in case of an empty string or an empty array), to support optional controls. You
   * can use the standard `required` validator if empty values should not be considered valid.
   *
   * @usageNotes
   *
   * ### Validate that the field has a minimum of 3 characters
   *
   * ```typescript
   * const control = new FormControl('ng', Validators.minLength(3));
   *
   * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
   * ```
   *
   * ```html
   * <input minlength="5">
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `minlength` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static minLength(minLength) {
    return minLengthValidator(minLength);
  }
  /**
   * @description
   * Validator that requires the length of the control's value to be less than or equal
   * to the provided maximum length. This validator is also provided by default if you use the
   * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
   * only for types that have a numeric `length` property, such as strings or arrays.
   *
   * @usageNotes
   *
   * ### Validate that the field has maximum of 5 characters
   *
   * ```typescript
   * const control = new FormControl('Angular', Validators.maxLength(5));
   *
   * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
   * ```
   *
   * ```html
   * <input maxlength="5">
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `maxlength` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static maxLength(maxLength) {
    return maxLengthValidator(maxLength);
  }
  /**
   * @description
   * Validator that requires the control's value to match a regex pattern. This validator is also
   * provided by default if you use the HTML5 `pattern` attribute.
   *
   * @usageNotes
   *
   * ### Validate that the field only contains letters or spaces
   *
   * ```typescript
   * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
   *
   * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
   * ```
   *
   * ```html
   * <input pattern="[a-zA-Z ]*">
   * ```
   *
   * ### Pattern matching with the global or sticky flag
   *
   * `RegExp` objects created with the `g` or `y` flags that are passed into `Validators.pattern`
   * can produce different results on the same input when validations are run consecutively. This is
   * due to how the behavior of `RegExp.prototype.test` is
   * specified in [ECMA-262](https://tc39.es/ecma262/#sec-regexpbuiltinexec)
   * (`RegExp` preserves the index of the last match when the global or sticky flag is used).
   * Due to this behavior, it is recommended that when using
   * `Validators.pattern` you **do not** pass in a `RegExp` object with either the global or sticky
   * flag enabled.
   *
   * ```typescript
   * // Not recommended (since the `g` flag is used)
   * const controlOne = new FormControl('1', Validators.pattern(/foo/g));
   *
   * // Good
   * const controlTwo = new FormControl('1', Validators.pattern(/foo/));
   * ```
   *
   * @param pattern A regular expression to be used as is to test the values, or a string.
   * If a string is passed, the `^` character is prepended and the `$` character is
   * appended to the provided string (if not already present), and the resulting regular
   * expression is used to test the values.
   *
   * @returns A validator function that returns an error map with the
   * `pattern` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static pattern(pattern) {
    return patternValidator(pattern);
  }
  /**
   * @description
   * Validator that performs no operation.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static nullValidator(control) {
    return nullValidator(control);
  }
  static compose(validators) {
    return compose(validators);
  }
  /**
   * @description
   * Compose multiple async validators into a single function that returns the union
   * of the individual error objects for the provided control.
   *
   * @returns A validator function that returns an error map with the
   * merged error objects of the async validators if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static composeAsync(validators) {
    return composeAsync(validators);
  }
};
function minValidator(min) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
      return null;
    }
    return control.value.length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    return hasValidLength(control.value) && control.value.length > maxLength ? {
      "maxlength": {
        "requiredLength": maxLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function patternValidator(pattern) {
  if (!pattern) return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^") regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$") regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null) return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators) return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  constructor() {
    this._rawValidators = [];
    this._rawAsyncValidators = [];
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Reports the value of the control if it is present, otherwise null.
   */
  get value() {
    return this.control ? this.control.value : null;
  }
  /**
   * @description
   * Reports whether the control is valid. A control is considered valid if no
   * validation errors exist with the current value.
   * If the control is not present, null is returned.
   */
  get valid() {
    return this.control ? this.control.valid : null;
  }
  /**
   * @description
   * Reports whether the control is invalid, meaning that an error exists in the input value.
   * If the control is not present, null is returned.
   */
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  /**
   * @description
   * Reports whether a control is pending, meaning that async validation is occurring and
   * errors are not yet available for the input value. If the control is not present, null is
   * returned.
   */
  get pending() {
    return this.control ? this.control.pending : null;
  }
  /**
   * @description
   * Reports whether the control is disabled, meaning that the control is disabled
   * in the UI and is exempt from validation checks and excluded from aggregate
   * values of ancestor controls. If the control is not present, null is returned.
   */
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  /**
   * @description
   * Reports whether the control is enabled, meaning that the control is included in ancestor
   * calculations of validity or value. If the control is not present, null is returned.
   */
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  /**
   * @description
   * Reports the control's validation errors. If the control is not present, null is returned.
   */
  get errors() {
    return this.control ? this.control.errors : null;
  }
  /**
   * @description
   * Reports whether the control is pristine, meaning that the user has not yet changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  /**
   * @description
   * Reports whether the control is dirty, meaning that the user has changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  /**
   * @description
   * Reports whether the control is touched, meaning that the user has triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get touched() {
    return this.control ? this.control.touched : null;
  }
  /**
   * @description
   * Reports the validation status of the control. Possible values include:
   * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
   * If the control is not present, null is returned.
   */
  get status() {
    return this.control ? this.control.status : null;
  }
  /**
   * @description
   * Reports whether the control is untouched, meaning that the user has not yet triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  /**
   * @description
   * Returns a multicasting observable that emits a validation status whenever it is
   * calculated for the control. If the control is not present, null is returned.
   */
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  /**
   * @description
   * Returns a multicasting observable of value changes for the control that emits every time the
   * value of the control changes in the UI or programmatically.
   * If the control is not present, null is returned.
   */
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return null;
  }
  /**
   * Sets synchronous validators for this directive.
   * @internal
   */
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  /**
   * Sets asynchronous validators for this directive.
   * @internal
   */
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  /**
   * @description
   * Synchronous validator function composed of all the synchronous validators registered with this
   * directive.
   */
  get validator() {
    return this._composedValidatorFn || null;
  }
  /**
   * @description
   * Asynchronous validator function composed of all the asynchronous validators registered with
   * this directive.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  /**
   * Internal function to register callbacks that should be invoked
   * when directive instance is being destroyed.
   * @internal
   */
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  /**
   * Internal function to invoke all registered "on destroy" callbacks.
   * Note: calling this function also clears the list of callbacks.
   * @internal
   */
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Resets the control with the provided value if the control is present.
   */
  reset(value = void 0) {
    if (this.control) this.control.reset(value);
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  /**
   * @description
   * The top-level form directive for the control.
   */
  get formDirective() {
    return null;
  }
  /**
   * @description
   * The path to this group.
   */
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  constructor() {
    super(...arguments);
    this._parent = null;
    this.name = null;
    this.valueAccessor = null;
  }
};
var AbstractControlStatus = class {
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    this._cd?.control?._touched?.();
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    this._cd?.control?._pristine?.();
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    this._cd?.control?._status?.();
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    this._cd?._submitted?.();
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
  "[class.ng-submitted]": "isSubmitted"
});
var NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _NgControlStatus,
      deps: [{
        token: NgControl,
        self: true
      }],
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _NgControlStatus,
      selector: "[formControlName],[ngModel],[formControl]",
      host: {
        properties: {
          "class.ng-untouched": "isUntouched",
          "class.ng-touched": "isTouched",
          "class.ng-pristine": "isPristine",
          "class.ng-dirty": "isDirty",
          "class.ng-valid": "isValid",
          "class.ng-invalid": "isInvalid",
          "class.ng-pending": "isPending"
        }
      },
      usesInheritance: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: NgControlStatus,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost
    }]
  }],
  ctorParameters: () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }]
});
var NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _NgControlStatusGroup,
      deps: [{
        token: ControlContainer,
        optional: true,
        self: true
      }],
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _NgControlStatusGroup,
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
      host: {
        properties: {
          "class.ng-untouched": "isUntouched",
          "class.ng-touched": "isTouched",
          "class.ng-pristine": "isPristine",
          "class.ng-dirty": "isDirty",
          "class.ng-valid": "isValid",
          "class.ng-invalid": "isInvalid",
          "class.ng-pending": "isPending",
          "class.ng-submitted": "isSubmitted"
        }
      },
      usesInheritance: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: NgControlStatusGroup,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
      host: ngGroupStatusHost
    }]
  }],
  ctorParameters: () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }]
});
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
function controlParentException(nameOrIndex) {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive. You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
  if (nameOrIndex == null || nameOrIndex === "") {
    return "";
  }
  const valueType = typeof nameOrIndex === "string" ? "name" : "index";
  return `Affected Form Control ${valueType}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
var ControlEvent = class {
};
var ValueChangeEvent = class extends ControlEvent {
  constructor(value, source) {
    super();
    this.value = value;
    this.source = source;
  }
};
var PristineChangeEvent = class extends ControlEvent {
  constructor(pristine, source) {
    super();
    this.pristine = pristine;
    this.source = source;
  }
};
var TouchedChangeEvent = class extends ControlEvent {
  constructor(touched, source) {
    super();
    this.touched = touched;
    this.source = source;
  }
};
var StatusChangeEvent = class extends ControlEvent {
  constructor(status, source) {
    super();
    this.status = status;
    this.source = source;
  }
};
var FormSubmittedEvent = class extends ControlEvent {
  constructor(source) {
    super();
    this.source = source;
  }
};
var FormResetEvent = class extends ControlEvent {
  constructor(source) {
    super();
    this.source = source;
  }
};
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validators The function or array of functions that is used to determine the validity of
   *     this control synchronously.
   * @param asyncValidators The function or array of functions that is used to determine validity of
   *     this control asynchronously.
   */
  constructor(validators, asyncValidators) {
    this._pendingDirty = false;
    this._hasOwnPendingAsyncValidator = null;
    this._pendingTouched = false;
    this._onCollectionChange = () => {
    };
    this._parent = null;
    this._status = computed(() => this.statusReactive());
    this.statusReactive = signal(void 0);
    this._pristine = computed(() => this.pristineReactive());
    this.pristineReactive = signal(true);
    this._touched = computed(() => this.touchedReactive());
    this.touchedReactive = signal(false);
    this._events = new Subject();
    this.events = this._events.asObservable();
    this._onDisabledChange = [];
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  /**
   * Returns the function that is used to determine the validity of this control synchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  /**
   * Returns the function that is used to determine the validity of this control asynchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  /**
   * The parent control.
   */
  get parent() {
    return this._parent;
  }
  /**
   * The validation status of the control.
   *
   * @see {@link FormControlStatus}
   *
   * These status values are mutually exclusive, so a control cannot be
   * both valid AND invalid or invalid AND disabled.
   */
  get status() {
    return untracked(this.statusReactive);
  }
  set status(v) {
    untracked(() => this.statusReactive.set(v));
  }
  /**
   * A control is `valid` when its `status` is `VALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control has passed all of its validation tests,
   * false otherwise.
   */
  get valid() {
    return this.status === VALID;
  }
  /**
   * A control is `invalid` when its `status` is `INVALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control has failed one or more of its validation checks,
   * false otherwise.
   */
  get invalid() {
    return this.status === INVALID;
  }
  /**
   * A control is `pending` when its `status` is `PENDING`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control is in the process of conducting a validation check,
   * false otherwise.
   */
  get pending() {
    return this.status == PENDING;
  }
  /**
   * A control is `disabled` when its `status` is `DISABLED`.
   *
   * Disabled controls are exempt from validation checks and
   * are not included in the aggregate value of their ancestor
   * controls.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control is disabled, false otherwise.
   */
  get disabled() {
    return this.status === DISABLED;
  }
  /**
   * A control is `enabled` as long as its `status` is not `DISABLED`.
   *
   * @returns True if the control has any status other than 'DISABLED',
   * false if the status is 'DISABLED'.
   *
   * @see {@link AbstractControl.status}
   *
   */
  get enabled() {
    return this.status !== DISABLED;
  }
  /**
   * A control is `pristine` if the user has not yet changed
   * the value in the UI.
   *
   * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get pristine() {
    return untracked(this.pristineReactive);
  }
  set pristine(v) {
    untracked(() => this.pristineReactive.set(v));
  }
  /**
   * A control is `dirty` if the user has changed the value
   * in the UI.
   *
   * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get dirty() {
    return !this.pristine;
  }
  /**
   * True if the control is marked as `touched`.
   *
   * A control is marked `touched` once the user has triggered
   * a `blur` event on it.
   */
  get touched() {
    return untracked(this.touchedReactive);
  }
  set touched(v) {
    untracked(() => this.touchedReactive.set(v));
  }
  /**
   * True if the control has not been marked as touched
   *
   * A control is `untouched` if the user has not yet triggered
   * a `blur` event on it.
   */
  get untouched() {
    return !this.touched;
  }
  /**
   * Reports the update strategy of the `AbstractControl` (meaning
   * the event on which the control updates itself).
   * Possible values: `'change'` | `'blur'` | `'submit'`
   * Default value: `'change'`
   */
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  /**
   * Sets the synchronous validators that are active on this control.  Calling
   * this overwrites any existing synchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addValidators()` method instead.
   */
  setValidators(validators) {
    this._assignValidators(validators);
  }
  /**
   * Sets the asynchronous validators that are active on this control. Calling this
   * overwrites any existing asynchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addAsyncValidators()` method instead.
   */
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  /**
   * Add a synchronous validator or validators to this control, without affecting other validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect. If duplicate validator functions
   * are present in the `validators` array, only the first instance would be added to a form
   * control.
   *
   * @param validators The new validator function or functions to add to this control.
   */
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  /**
   * Add an asynchronous validator or validators to this control, without affecting other
   * validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect.
   *
   * @param validators The new asynchronous validator function or functions to add to this control.
   */
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Remove a synchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found,
   * it is ignored.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<string | null>('', Validators.required);
   * ctrl.removeValidators(Validators.required);
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<string | null>('', minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   *
   * ctrl.removeValidators(minValidator);
   * ```
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The validator or validators to remove.
   */
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  /**
   * Remove an asynchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found, it
   * is ignored.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The asynchronous validator or validators to remove.
   */
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Check whether a synchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<number | null>(0, Validators.required);
   * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<number | null>(0, minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   * ```
   *
   * @param validator The validator to check for presence. Compared by function reference.
   * @returns Whether the provided validator was found on this control.
   */
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  /**
   * Check whether an asynchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @param validator The asynchronous validator to check for presence. Compared by function
   *     reference.
   * @returns Whether the provided asynchronous validator was found on this control.
   */
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  /**
   * Empties out the synchronous validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearValidators() {
    this.validator = null;
  }
  /**
   * Empties out the async validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  markAsTouched(opts = {}) {
    const changed = this.touched === false;
    this.touched = true;
    const sourceControl = opts.sourceControl ?? this;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsTouched(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(true, sourceControl));
    }
  }
  /**
   * Marks the control and all its descendant controls as `touched`.
   * @see {@link markAsTouched()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `emitEvent`: When true or not supplied (the default), the `events`
   * observable emits a `TouchedChangeEvent` with the `touched` property being `true`.
   * When false, no events are emitted.
   */
  markAllAsTouched(opts = {}) {
    this.markAsTouched({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsTouched(opts));
  }
  markAsUntouched(opts = {}) {
    const changed = this.touched === true;
    this.touched = false;
    this._pendingTouched = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true,
        emitEvent: opts.emitEvent,
        sourceControl
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(false, sourceControl));
    }
  }
  markAsDirty(opts = {}) {
    const changed = this.pristine === true;
    this.pristine = false;
    const sourceControl = opts.sourceControl ?? this;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsDirty(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(false, sourceControl));
    }
  }
  markAsPristine(opts = {}) {
    const changed = this.pristine === false;
    this.pristine = true;
    this._pendingDirty = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(true, sourceControl));
    }
  }
  markAsPending(opts = {}) {
    this.status = PENDING;
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsPending(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  /**
   * Enables the control. This means the control is included in validation checks and
   * the aggregate value of its parent. Its status recalculates based on its value and
   * its validators.
   *
   * By default, if the control has children, all children are enabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configure options that control how the control propagates changes and
   * emits events when marked as untouched
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`,
   * `valueChanges` and `events`
   * observables emit events with the latest status and value when the control is enabled.
   * When false, no events are emitted.
   */
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts, sourceControl) {
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent._updatePristine({}, sourceControl);
      }
      this._parent._updateTouched({}, sourceControl);
    }
  }
  /**
   * Sets the parent of the control
   *
   * @param parent The new parent.
   */
  setParent(parent) {
    this._parent = parent;
  }
  /**
   * The raw value of this control. For most control implementations, the raw value will include
   * disabled children.
   */
  getRawValue() {
    return this.value;
  }
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      const shouldHaveEmitted = this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
      }
    }
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  /** @internal */
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(shouldHaveEmitted, emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = {
        emitEvent: emitEvent !== false
      };
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = null;
        this.setErrors(errors, {
          emitEvent,
          shouldHaveEmitted
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      const shouldHaveEmitted = this._hasOwnPendingAsyncValidator?.emitEvent ?? false;
      this._hasOwnPendingAsyncValidator = null;
      return shouldHaveEmitted;
    }
    return false;
  }
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
  }
  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control. If a string is provided, passing it as a string literal will result in improved type
   * information. Likewise, if an array is provided, passing it `as const` will cause improved type
   * information to be available.
   *
   * @usageNotes
   * ### Retrieve a nested control
   *
   * For example, to get a `name` control nested within a `person` sub-group:
   *
   * * `this.form.get('person.name');`
   *
   * -OR-
   *
   * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
   *
   * ### Retrieve a control in a FormArray
   *
   * When accessing an element inside a FormArray, you can use an element index.
   * For example, to get a `price` control from the first element in an `items` array you can use:
   *
   * * `this.form.get('items.0.price');`
   *
   * -OR-
   *
   * * `this.form.get(['items', 0, 'price']);`
   */
  get(path) {
    let currPath = path;
    if (currPath == null) return null;
    if (!Array.isArray(currPath)) currPath = currPath.split(".");
    if (currPath.length === 0) return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control && control.errors ? control.errors[errorCode] : null;
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  /**
   * Retrieves the top-level ancestor of this control.
   */
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  /** @internal */
  _updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (emitEvent || shouldHaveEmitted) {
      this._events.next(new StatusChangeEvent(this.status, changedControl));
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
    }
  }
  /** @internal */
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled()) return DISABLED;
    if (this.errors) return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
    if (this._anyControlsHaveStatus(INVALID)) return INVALID;
    return VALID;
  }
  /** @internal */
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  /** @internal */
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  /** @internal */
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  /** @internal */
  _updatePristine(opts, changedControl) {
    const newPristine = !this._anyControlsDirty();
    const changed = this.pristine !== newPristine;
    this.pristine = newPristine;
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts, changedControl);
    }
    if (changed) {
      this._events.next(new PristineChangeEvent(this.pristine, changedControl));
    }
  }
  /** @internal */
  _updateTouched(opts = {}, changedControl) {
    this.touched = this._anyControlsTouched();
    this._events.next(new TouchedChangeEvent(this.touched, changedControl));
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts, changedControl);
    }
  }
  /** @internal */
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  /** @internal */
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  /**
   * Check to see if parent has been marked artificially dirty.
   *
   * @internal
   */
  _parentMarkedDirty(onlySelf) {
    const parentDirty = this._parent && this._parent.dirty;
    return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
  }
  /** @internal */
  _find(name) {
    return null;
  }
  /**
   * Internal implementation of the `setValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  /**
   * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  /**
   * Creates a new `FormGroup` instance.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
      // so we set `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  registerControl(name, control) {
    if (this.controls[name]) return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Remove a control from this group. In a strongly-typed group, required controls cannot be
   * removed.
   *
   * This method also updates the value and validity of the control.
   *
   * @param name The control name to remove from the collection
   * @param options Specifies whether this FormGroup instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeControl(name, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    if (control) this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  /**
   * Sets the value of the `FormGroup`. It accepts an object that matches
   * the structure of the group, with control names as keys.
   *
   * @usageNotes
   * ### Set the complete value for the form group
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl(),
   *   last: new FormControl()
   * });
   *
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.setValue({first: 'Nancy', last: 'Drew'});
   * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
   * ```
   *
   * @throws When strict checks fail, such as setting the value of a control
   * that doesn't exist or if you exclude a value of a control that does exist.
   *
   * @param value The new value for the control that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes
   * and emits events after the value changes.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormGroup`. It accepts an object with control
   * names as keys, and does its best to match the values to the correct controls
   * in the group.
   *
   * It accepts both super-sets and sub-sets of the group without throwing an error.
   *
   * @usageNotes
   * ### Patch the value for a form group
   *
   * ```
   * const form = new FormGroup({
   *    first: new FormControl(),
   *    last: new FormControl()
   * });
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.patchValue({first: 'Nancy'});
   * console.log(form.value);   // {first: 'Nancy', last: null}
   * ```
   *
   * @param value The object that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes and
   * emits events after the value is patched.
   * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
   * true.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control value
   * is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null) return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(
          /* Guaranteed to be present, due to the outer forEach. */
          value[name],
          {
            onlySelf: true,
            emitEvent: options.emitEvent
          }
        );
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
   * the value of all descendants to their default values, or null if no defaults were provided.
   *
   * You reset to a specific form state by passing in a map of states
   * that matches the structure of your form, with control names as keys. The state
   * is a standalone value or a form state object with both a value and a disabled
   * status.
   *
   * @param value Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options Configuration options that determine how the control propagates changes
   * and emits events when the group is reset.
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * @usageNotes
   *
   * ### Reset the form group values
   *
   * ```ts
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * console.log(form.value);  // {first: 'first name', last: 'last name'}
   *
   * form.reset({ first: 'name', last: 'last name' });
   *
   * console.log(form.value);  // {first: 'name', last: 'last name'}
   * ```
   *
   * ### Reset the form group values and disabled status
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * form.reset({
   *   first: {value: 'name', disabled: true},
   *   last: 'last'
   * });
   *
   * console.log(form.value);  // {last: 'last'}
   * console.log(form.get('first').status);  // 'DISABLED'
   * ```
   */
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the `FormGroup`, including any disabled controls.
   *
   * Retrieves all values regardless of disabled status.
   */
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this._reduceValue();
  }
  /** @internal */
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  /** @internal */
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  /** @internal */
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  /** @internal */
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  /** @internal */
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken("CallSetDisabledState", {
  providedIn: "root",
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control) _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor) _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop);
    dir.valueAccessor.registerOnTouched(noop);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change") updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange) updateControl(control, dir);
    if (control.updateOn !== "submit") control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty) control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent) dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1) return `path: '${path.join(" -> ")}'`;
  if (path?.[0]) return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model")) return false;
  const change = changes["model"];
  if (change.isFirstChange()) return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors) return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode)) _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor) return customAccessor;
  if (builtinAccessor) return builtinAccessor;
  if (defaultAccessor) return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never") return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var NgForm = class _NgForm extends ControlContainer {
  /**
   * @description
   * Returns whether the form submission has been triggered.
   */
  get submitted() {
    return untracked(this.submittedReactive);
  }
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._submitted = computed(() => this.submittedReactive());
    this.submittedReactive = signal(false);
    this._directives = /* @__PURE__ */ new Set();
    this.ngSubmit = new EventEmitter();
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  /** @nodoc */
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  /**
   * @description
   * The directive instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * The internal `FormGroup` instance.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it is always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Returns a map of the controls in this group.
   */
  get controls() {
    return this.form.controls;
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `NgModel` directive instance.
   */
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `NgModel` directive.
   *
   * @param dir The `NgModel` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `NgModel` instance from the internal list of directives
   *
   * @param dir The `NgModel` directive instance.
   */
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
      this._directives.delete(dir);
    });
  }
  /**
   * @description
   * Adds a new `NgModelGroup` directive instance to the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  /**
   * @description
   * Removes the `NgModelGroup` directive instance from the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
    });
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `NgControl` directive.
   *
   * @param dir The `NgControl` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  /**
   * @description
   * Sets the value for this `FormGroup`.
   *
   * @param value The new value
   */
  setValue(value) {
    this.control.setValue(value);
  }
  /**
   * @description
   * Method called when the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submittedReactive.set(true);
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submittedReactive.set(false);
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _NgForm,
      deps: [{
        token: NG_VALIDATORS,
        optional: true,
        self: true
      }, {
        token: NG_ASYNC_VALIDATORS,
        optional: true,
        self: true
      }, {
        token: CALL_SET_DISABLED_STATE,
        optional: true
      }],
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _NgForm,
      selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
      inputs: {
        options: ["ngFormOptions", "options"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      host: {
        listeners: {
          "submit": "onSubmit($event)",
          "reset": "onReset()"
        }
      },
      providers: [formDirectiveProvider$1],
      exportAs: ["ngForm"],
      usesInheritance: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: NgForm,
  decorators: [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm"
    }]
  }],
  ctorParameters: () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }],
  propDecorators: {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  }
});
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.defaultValue = null;
    this._onChange = [];
    this._pendingChange = false;
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set
      // `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    this._pendingChange = false;
  }
  /**  @internal */
  _updateValue() {
  }
  /**  @internal */
  _anyControls(condition) {
    return false;
  }
  /**  @internal */
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  /** @internal */
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  /** @internal */
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  /** @internal */
  _forEachChild(cb) {
  }
  /** @internal */
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty) this.markAsDirty();
      if (this._pendingTouched) this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  /** @nodoc */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormGroup(this);
    }
  }
  /**
   * @description
   * The `FormGroup` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  /**
   * @description
   * The path to this group from the top-level directive.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /** @internal */
  _checkParentType() {
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _AbstractFormGroupDirective,
      deps: null,
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _AbstractFormGroupDirective,
      usesInheritance: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: AbstractFormGroupDirective,
  decorators: [{
    type: Directive
  }]
});
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = "";
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _NgModelGroup,
      deps: [{
        token: ControlContainer,
        host: true,
        skipSelf: true
      }, {
        token: NG_VALIDATORS,
        optional: true,
        self: true
      }, {
        token: NG_ASYNC_VALIDATORS,
        optional: true,
        self: true
      }],
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _NgModelGroup,
      selector: "[ngModelGroup]",
      inputs: {
        name: ["ngModelGroup", "name"]
      },
      providers: [modelGroupProvider],
      exportAs: ["ngModelGroup"],
      usesInheritance: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: NgModelGroup,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup"
    }]
  }],
  ctorParameters: () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }],
  propDecorators: {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  }
});
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var NgModel = class _NgModel extends NgControl {
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this.control = new FormControl();
    this._registered = false;
    this.name = "";
    this.update = new EventEmitter();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    this.formDirective && this.formDirective.removeControl(this);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return this._getPath(this.name);
  }
  /**
   * @description
   * The top-level directive for this control if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value emitted by `ngModelChange`.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if (!this._isStandalone()) {
      this._checkParentType();
    }
    this._checkName();
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
        throw formGroupNameException();
      } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
        throw modelParentException();
      }
    }
  }
  _checkName() {
    if (this.options && this.options.name) this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _NgModel,
      deps: [{
        token: ControlContainer,
        host: true,
        optional: true
      }, {
        token: NG_VALIDATORS,
        optional: true,
        self: true
      }, {
        token: NG_ASYNC_VALIDATORS,
        optional: true,
        self: true
      }, {
        token: NG_VALUE_ACCESSOR,
        optional: true,
        self: true
      }, {
        token: ChangeDetectorRef,
        optional: true
      }, {
        token: CALL_SET_DISABLED_STATE,
        optional: true
      }],
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _NgModel,
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      inputs: {
        name: "name",
        isDisabled: ["disabled", "isDisabled"],
        model: ["ngModel", "model"],
        options: ["ngModelOptions", "options"]
      },
      outputs: {
        update: "ngModelChange"
      },
      providers: [formControlBinding$1],
      exportAs: ["ngModel"],
      usesInheritance: true,
      usesOnChanges: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: NgModel,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel"
    }]
  }],
  ctorParameters: () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }],
  propDecorators: {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  }
});
var \u0275NgNoValidate = class _\u0275NgNoValidate {
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _\u0275NgNoValidate,
      deps: [],
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _\u0275NgNoValidate,
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        attributes: {
          "novalidate": ""
        }
      },
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: \u0275NgNoValidate,
  decorators: [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      }
    }]
  }]
});
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _NumberValueAccessor,
      deps: null,
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _NumberValueAccessor,
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        listeners: {
          "input": "onChange($event.target.value)",
          "blur": "onTouched()"
        }
      },
      providers: [NUMBER_VALUE_ACCESSOR],
      usesInheritance: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: NumberValueAccessor,
  decorators: [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR]
    }]
  }]
});
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var RadioControlRegistry = class _RadioControlRegistry {
  constructor() {
    this._accessors = [];
  }
  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  /**
   * @description
   * Removes a control from the internal registry. For internal use only.
   */
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  /**
   * @description
   * Selects a radio button. For internal use only.
   */
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _RadioControlRegistry,
      deps: [],
      target: FactoryTarget.Injectable
    });
  }
  static {
    this.\u0275prov = \u0275\u0275ngDeclareInjectable({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _RadioControlRegistry,
      providedIn: "root"
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: RadioControlRegistry,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }]
});
var RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
    this.setDisabledStateFired = false;
    this.onChange = () => {
    };
    this.callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
      optional: true
    }) ?? setDisabledStateDefault;
  }
  /** @nodoc */
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  /** @nodoc */
  ngOnDestroy() {
    this._registry.remove(this);
  }
  /**
   * Sets the "checked" property value on the radio input element.
   * @nodoc
   */
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  /** @nodoc */
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  /**
   * Sets the "value" on the radio input element and unchecks it.
   *
   * @param value
   */
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName) this.name = this.formControlName;
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _RadioControlValueAccessor,
      deps: [{
        token: Renderer2
      }, {
        token: ElementRef
      }, {
        token: RadioControlRegistry
      }, {
        token: Injector
      }],
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _RadioControlValueAccessor,
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      inputs: {
        name: "name",
        formControlName: "formControlName",
        value: "value"
      },
      host: {
        listeners: {
          "change": "onChange()",
          "blur": "onTouched()"
        }
      },
      providers: [RADIO_VALUE_ACCESSOR],
      usesInheritance: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: RadioControlValueAccessor,
  decorators: [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR]
    }]
  }],
  ctorParameters: () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }],
  propDecorators: {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  }
});
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _RangeValueAccessor,
      deps: null,
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _RangeValueAccessor,
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        listeners: {
          "change": "onChange($event.target.value)",
          "input": "onChange($event.target.value)",
          "blur": "onTouched()"
        }
      },
      providers: [RANGE_VALUE_ACCESSOR],
      usesInheritance: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: RangeValueAccessor,
  decorators: [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR]
    }]
  }]
});
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var FormControlDirective = class _FormControlDirective extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  static {
    this._ngModelWarningSentOnce = false;
  }
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(
          previousForm,
          this,
          /* validateControlPresenceOnChange */
          false
        );
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(
        this.form,
        this,
        /* validateControlPresenceOnChange */
        false
      );
    }
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * The `FormControl` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _FormControlDirective,
      deps: [{
        token: NG_VALIDATORS,
        optional: true,
        self: true
      }, {
        token: NG_ASYNC_VALIDATORS,
        optional: true,
        self: true
      }, {
        token: NG_VALUE_ACCESSOR,
        optional: true,
        self: true
      }, {
        token: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        optional: true
      }, {
        token: CALL_SET_DISABLED_STATE,
        optional: true
      }],
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _FormControlDirective,
      selector: "[formControl]",
      inputs: {
        form: ["formControl", "form"],
        isDisabled: ["disabled", "isDisabled"],
        model: ["ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      providers: [formControlBinding],
      exportAs: ["ngForm"],
      usesInheritance: true,
      usesOnChanges: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: FormControlDirective,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm"
    }]
  }],
  ctorParameters: () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }],
  propDecorators: {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  }
});
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var FormGroupDirective = class _FormGroupDirective extends ControlContainer {
  /**
   * @description
   * Reports whether the form submission has been triggered.
   */
  get submitted() {
    return untracked(this._submittedReactive);
  }
  // TODO(atscott): Remove once invalid API usage is cleaned up internally
  set submitted(value) {
    this._submittedReactive.set(value);
  }
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._submitted = computed(() => this._submittedReactive());
    this._submittedReactive = signal(false);
    this._onCollectionChange = () => this._updateDomValue();
    this.directives = [];
    this.form = null;
    this.ngSubmit = new EventEmitter();
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  /**
   * @description
   * Returns this directive's instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * Returns the `FormGroup` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `FormControlName` directive instance.
   */
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `FormControlName` directive
   *
   * @param dir The `FormControlName` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `FormControlName` instance from the internal list of directives
   *
   * @param dir The `FormControlName` directive instance.
   */
  removeControl(dir) {
    cleanUpControl(
      dir.control || null,
      dir,
      /* validateControlPresenceOnChange */
      false
    );
    removeListItem$1(this.directives, dir);
  }
  /**
   * Adds a new `FormGroupName` directive instance to the form.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
   *
   * @param dir The `FormGroupName` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `FormControlName` directive.
   *
   * @param dir The `FormControlName` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  /**
   * @description
   * Method called with the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this._submittedReactive.set(true);
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this._submittedReactive.set(false);
    this.form._events.next(new FormResetEvent(this.form));
  }
  /** @internal */
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    if (this.form) {
      const ctrl = this.form.get(dir.path);
      if (ctrl) {
        const isControlUpdated = cleanUpFormContainer(ctrl, dir);
        if (isControlUpdated) {
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    if (this._oldForm) {
      this._oldForm._registerOnCollectionChange(() => {
      });
    }
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _FormGroupDirective,
      deps: [{
        token: NG_VALIDATORS,
        optional: true,
        self: true
      }, {
        token: NG_ASYNC_VALIDATORS,
        optional: true,
        self: true
      }, {
        token: CALL_SET_DISABLED_STATE,
        optional: true
      }],
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _FormGroupDirective,
      selector: "[formGroup]",
      inputs: {
        form: ["formGroup", "form"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      host: {
        listeners: {
          "submit": "onSubmit($event)",
          "reset": "onReset()"
        }
      },
      providers: [formDirectiveProvider],
      exportAs: ["ngForm"],
      usesInheritance: true,
      usesOnChanges: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: FormGroupDirective,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm"
    }]
  }],
  ctorParameters: () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }],
  propDecorators: {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  }
});
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _FormGroupName,
      deps: [{
        token: ControlContainer,
        host: true,
        optional: true,
        skipSelf: true
      }, {
        token: NG_VALIDATORS,
        optional: true,
        self: true
      }, {
        token: NG_ASYNC_VALIDATORS,
        optional: true,
        self: true
      }],
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _FormGroupName,
      selector: "[formGroupName]",
      inputs: {
        name: ["formGroupName", "name"]
      },
      providers: [formGroupNameProvider],
      usesInheritance: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: FormGroupName,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider]
    }]
  }],
  ctorParameters: () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }],
  propDecorators: {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  }
});
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var FormArrayName = class _FormArrayName extends ControlContainer {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /**
   * A lifecycle method called when the directive's inputs are initialized. For internal use only.
   * @throws If the directive does not have a valid parent.
   * @nodoc
   */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormArray(this);
  }
  /**
   * A lifecycle method called before the directive's instance is destroyed. For internal use only.
   * @nodoc
   */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormArray(this);
    }
  }
  /**
   * @description
   * The `FormArray` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormArray(this);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _FormArrayName,
      deps: [{
        token: ControlContainer,
        host: true,
        optional: true,
        skipSelf: true
      }, {
        token: NG_VALIDATORS,
        optional: true,
        self: true
      }, {
        token: NG_ASYNC_VALIDATORS,
        optional: true,
        self: true
      }],
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _FormArrayName,
      selector: "[formArrayName]",
      inputs: {
        name: ["formArrayName", "name"]
      },
      providers: [formArrayNameProvider],
      usesInheritance: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: FormArrayName,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider]
    }]
  }],
  ctorParameters: () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }],
  propDecorators: {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  }
});
function _hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var FormControlName = class _FormControlName extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  static {
    this._ngModelWarningSentOnce = false;
  }
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._added = false;
    this.name = null;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (!this._added) this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeControl(this);
    }
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
        throw ngModelGroupException();
      } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
        throw controlParentException(this.name);
      }
    }
  }
  _setUpControl() {
    this._checkParentType();
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _FormControlName,
      deps: [{
        token: ControlContainer,
        host: true,
        optional: true,
        skipSelf: true
      }, {
        token: NG_VALIDATORS,
        optional: true,
        self: true
      }, {
        token: NG_ASYNC_VALIDATORS,
        optional: true,
        self: true
      }, {
        token: NG_VALUE_ACCESSOR,
        optional: true,
        self: true
      }, {
        token: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        optional: true
      }],
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _FormControlName,
      selector: "[formControlName]",
      inputs: {
        name: ["formControlName", "name"],
        isDisabled: ["disabled", "isDisabled"],
        model: ["ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      providers: [controlNameBinding],
      usesInheritance: true,
      usesOnChanges: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: FormControlName,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding]
    }]
  }],
  ctorParameters: () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }],
  propDecorators: {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  }
});
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null) return `${value}`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on the select element.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  /** @internal */
  _registerOption() {
    return (this._idCounter++).toString();
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value)) return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _SelectControlValueAccessor,
      deps: null,
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _SelectControlValueAccessor,
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      inputs: {
        compareWith: "compareWith"
      },
      host: {
        listeners: {
          "change": "onChange($event.target.value)",
          "blur": "onTouched()"
        }
      },
      providers: [SELECT_VALUE_ACCESSOR],
      usesInheritance: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: SelectControlValueAccessor,
  decorators: [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR]
    }]
  }],
  propDecorators: {
    compareWith: [{
      type: Input
    }]
  }
});
var NgSelectOption = class _NgSelectOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) this.id = this._select._registerOption();
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null) return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    this._setElementValue(value);
    if (this._select) this._select.writeValue(this._select.value);
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _NgSelectOption,
      deps: [{
        token: ElementRef
      }, {
        token: Renderer2
      }, {
        token: SelectControlValueAccessor,
        host: true,
        optional: true
      }],
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _NgSelectOption,
      selector: "option",
      inputs: {
        ngValue: "ngValue",
        value: "value"
      },
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: NgSelectOption,
  decorators: [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }],
  ctorParameters: () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }],
  propDecorators: {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  }
});
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null) return `${value}`;
  if (typeof value === "string") value = `'${value}'`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on one or of more of the select's options.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(ids.indexOf(o.toString()) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  /**
   * Registers a function called when the control value changes
   * and writes an array of the selected options.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  /** @internal */
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _SelectMultipleControlValueAccessor,
      deps: null,
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _SelectMultipleControlValueAccessor,
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      inputs: {
        compareWith: "compareWith"
      },
      host: {
        listeners: {
          "change": "onChange($event.target)",
          "blur": "onTouched()"
        }
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR],
      usesInheritance: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: SelectMultipleControlValueAccessor,
  decorators: [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
    }]
  }],
  propDecorators: {
    compareWith: [{
      type: Input
    }]
  }
});
var \u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null) return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @internal */
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _\u0275NgSelectMultipleOption,
      deps: [{
        token: ElementRef
      }, {
        token: Renderer2
      }, {
        token: SelectMultipleControlValueAccessor,
        host: true,
        optional: true
      }],
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _\u0275NgSelectMultipleOption,
      selector: "option",
      inputs: {
        ngValue: "ngValue",
        value: "value"
      },
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: \u0275NgSelectMultipleOption,
  decorators: [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }],
  ctorParameters: () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }],
  propDecorators: {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  }
});
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var AbstractValidatorDirective = class _AbstractValidatorDirective {
  constructor() {
    this._validator = nullValidator;
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input);
      this._validator = this._enabled ? this.createValidator(input) : nullValidator;
      if (this._onChange) {
        this._onChange();
      }
    }
  }
  /** @nodoc */
  validate(control) {
    return this._validator(control);
  }
  /** @nodoc */
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  /**
   * @description
   * Determines whether this validator should be active or not based on an input.
   * Base class implementation checks whether an input is defined (if the value is different from
   * `null` and `undefined`). Validator classes that extend this base class can override this
   * function with the logic specific to a particular validator directive.
   */
  enabled(input) {
    return input != null;
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _AbstractValidatorDirective,
      deps: [],
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _AbstractValidatorDirective,
      usesOnChanges: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: AbstractValidatorDirective,
  decorators: [{
    type: Directive
  }]
});
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "max";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (max) => maxValidator(max);
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _MaxValidator,
      deps: null,
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _MaxValidator,
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      inputs: {
        max: "max"
      },
      host: {
        properties: {
          "attr.max": "_enabled ? max : null"
        }
      },
      providers: [MAX_VALIDATOR],
      usesInheritance: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: MaxValidator,
  decorators: [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      }
    }]
  }],
  propDecorators: {
    max: [{
      type: Input
    }]
  }
});
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var MinValidator = class _MinValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "min";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (min) => minValidator(min);
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _MinValidator,
      deps: null,
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _MinValidator,
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      inputs: {
        min: "min"
      },
      host: {
        properties: {
          "attr.min": "_enabled ? min : null"
        }
      },
      providers: [MIN_VALIDATOR],
      usesInheritance: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: MinValidator,
  decorators: [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      }
    }]
  }],
  propDecorators: {
    min: [{
      type: Input
    }]
  }
});
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "required";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => requiredValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _RequiredValidator,
      deps: null,
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _RequiredValidator,
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      inputs: {
        required: "required"
      },
      host: {
        properties: {
          "attr.required": '_enabled ? "" : null'
        }
      },
      providers: [REQUIRED_VALIDATOR],
      usesInheritance: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: RequiredValidator,
  decorators: [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }],
  propDecorators: {
    required: [{
      type: Input
    }]
  }
});
var CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  constructor() {
    super(...arguments);
    this.createValidator = (input) => requiredTrueValidator;
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _CheckboxRequiredValidator,
      deps: null,
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _CheckboxRequiredValidator,
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      host: {
        properties: {
          "attr.required": '_enabled ? "" : null'
        }
      },
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      usesInheritance: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: CheckboxRequiredValidator,
  decorators: [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }]
});
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "email";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => emailValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _EmailValidator,
      deps: null,
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _EmailValidator,
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      inputs: {
        email: "email"
      },
      providers: [EMAIL_VALIDATOR],
      usesInheritance: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: EmailValidator,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR]
    }]
  }],
  propDecorators: {
    email: [{
      type: Input
    }]
  }
});
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "minlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (minlength) => minLengthValidator(minlength);
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _MinLengthValidator,
      deps: null,
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _MinLengthValidator,
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      inputs: {
        minlength: "minlength"
      },
      host: {
        properties: {
          "attr.minlength": "_enabled ? minlength : null"
        }
      },
      providers: [MIN_LENGTH_VALIDATOR],
      usesInheritance: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: MinLengthValidator,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      }
    }]
  }],
  propDecorators: {
    minlength: [{
      type: Input
    }]
  }
});
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "maxlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (maxlength) => maxLengthValidator(maxlength);
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _MaxLengthValidator,
      deps: null,
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _MaxLengthValidator,
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      inputs: {
        maxlength: "maxlength"
      },
      host: {
        properties: {
          "attr.maxlength": "_enabled ? maxlength : null"
        }
      },
      providers: [MAX_LENGTH_VALIDATOR],
      usesInheritance: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: MaxLengthValidator,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      }
    }]
  }],
  propDecorators: {
    maxlength: [{
      type: Input
    }]
  }
});
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "pattern";
    this.normalizeInput = (input) => input;
    this.createValidator = (input) => patternValidator(input);
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _PatternValidator,
      deps: null,
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "14.0.0",
      version: "18.2.13",
      type: _PatternValidator,
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      inputs: {
        pattern: "pattern"
      },
      host: {
        properties: {
          "attr.pattern": "_enabled ? pattern : null"
        }
      },
      providers: [PATTERN_VALIDATOR],
      usesInheritance: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: PatternValidator,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      }
    }]
  }],
  propDecorators: {
    pattern: [{
      type: Input
    }]
  }
});
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
var \u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _\u0275InternalFormsSharedModule,
      deps: [],
      target: FactoryTarget.NgModule
    });
  }
  static {
    this.\u0275mod = \u0275\u0275ngDeclareNgModule({
      minVersion: "14.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _\u0275InternalFormsSharedModule,
      declarations: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator],
      exports: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator]
    });
  }
  static {
    this.\u0275inj = \u0275\u0275ngDeclareInjector({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _\u0275InternalFormsSharedModule
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: \u0275InternalFormsSharedModule,
  decorators: [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }]
});
var FormArray = class extends AbstractControl {
  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
      // to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
   *     around from the back, and if index is greatly negative (less than `-length`), the result is
   * undefined. This behavior is the same as `Array.at(index)`.
   */
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  /**
   * Insert a new `AbstractControl` at the end of the array.
   *
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is added.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  push(control, options = {}) {
    this.controls.push(control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Insert a new `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to insert the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
   * This behavior is the same as `Array.splice(index, 0, control)`.
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is inserted.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Remove the control at the given `index` in the array.
   *
   * @param index Index in the array to remove the control.  If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), removes the first
   *     element. This behavior is the same as `Array.splice(index, 1)`.
   * @param options Specifies whether this FormArray instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Replace an existing control.
   *
   * @param index Index in the array to replace the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
   *     element. This behavior is the same as `Array.splice(index, 1, control)`.
   * @param control The `AbstractControl` control to replace the existing control
   * @param options Specifies whether this FormArray instance should emit events after an
   *     existing control is replaced with a new one.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * replaced with a new one. When false, no events are emitted.
   */
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Length of the control array.
   */
  get length() {
    return this.controls.length;
  }
  /**
   * Sets the value of the `FormArray`. It accepts an array that matches
   * the structure of the control.
   *
   * This method performs strict checks, and throws an error if you try
   * to set the value of a control that doesn't exist or if you exclude the
   * value of a control.
   *
   * @usageNotes
   * ### Set the values for the controls in the form array
   *
   * ```
   * const arr = new FormArray([
   *   new FormControl(),
   *   new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.setValue(['Nancy', 'Drew']);
   * console.log(arr.value);   // ['Nancy', 'Drew']
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormArray`. It accepts an array that matches the
   * structure of the control, and does its best to match the values to the correct
   * controls in the group.
   *
   * It accepts both super-sets and sub-sets of the array without throwing an error.
   *
   * @usageNotes
   * ### Patch the values for controls in a form array
   *
   * ```
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.patchValue(['Nancy']);
   * console.log(arr.value);   // ['Nancy', null]
   * ```
   *
   * @param value Array of latest values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control
   * value is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null) return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
   * value of all descendants to null or null maps.
   *
   * You reset to a specific form state by passing in an array of states
   * that matches the structure of the control. The state is a standalone value
   * or a form state object with both a value and a disabled status.
   *
   * @usageNotes
   * ### Reset the values in a form array
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * arr.reset(['name', 'last name']);
   *
   * console.log(arr.value);  // ['name', 'last name']
   * ```
   *
   * ### Reset the values in a form array and the disabled status for the first control
   *
   * ```
   * arr.reset([
   *   {value: 'name', disabled: true},
   *   'last'
   * ]);
   *
   * console.log(arr.value);  // ['last']
   * console.log(arr.at(0).status);  // 'DISABLED'
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the array, including any disabled controls.
   *
   * Reports all values regardless of disabled status.
   */
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  /**
   * Remove all controls in the `FormArray`.
   *
   * @param options Specifies whether this FormArray instance should emit events after all
   *     controls are removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when all controls
   * in this FormArray instance are removed. When false, no events are emitted.
   *
   * @usageNotes
   * ### Remove all elements from a FormArray
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.length);  // 2
   *
   * arr.clear();
   * console.log(arr.length);  // 0
   * ```
   *
   * It's a simpler and more efficient alternative to removing all elements one by one:
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   *
   * while (arr.length) {
   *    arr.removeAt(0);
   * }
   * ```
   */
  clear(options = {}) {
    if (this.controls.length < 1) return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Adjusts a negative index by summing it with the length of the array. For very negative
   * indices, the result may remain negative.
   * @internal
   */
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  /** @internal */
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  /** @internal */
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled) return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  /** @internal */
  _find(name) {
    return this.at(name) ?? null;
  }
};
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var FormBuilder = class _FormBuilder {
  constructor() {
    this.useNonNullable = false;
  }
  /**
   * @description
   * Returns a FormBuilder in which automatically constructed `FormControl` elements
   * have `{nonNullable: true}` and are non-nullable.
   *
   * **Constructing non-nullable controls**
   *
   * When constructing a control, it will be non-nullable, and will reset to its initial value.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.control('Alex'); // FormControl<string>
   * name.reset();
   * console.log(name); // 'Alex'
   * ```
   *
   * **Constructing non-nullable groups or arrays**
   *
   * When constructing a group or array, all automatically created inner controls will be
   * non-nullable, and will reset to their initial values.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
   * name.reset();
   * console.log(name); // {who: 'Alex'}
   * ```
   * **Constructing *nullable* fields on groups or arrays**
   *
   * It is still possible to have a nullable field. In particular, any `FormControl` which is
   * *already* constructed will not be altered. For example:
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * // FormGroup<{who: FormControl<string|null>}>
   * let name = nnfb.group({who: new FormControl('Alex')});
   * name.reset(); console.log(name); // {who: null}
   * ```
   *
   * Because the inner control is constructed explicitly by the caller, the builder has
   * no control over how it is created, and cannot exclude the `null`.
   */
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  /**
   * @description
   * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
   * containing all the keys and corresponding inner control types.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param options Configuration options object for the `FormRecord`. The object should have the
   * `AbstractControlOptions` type and might contain the following fields:
   * * `validators`: A synchronous validator function, or an array of validator functions.
   * * `asyncValidators`: A single async validator or array of async validator functions.
   * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
   * | submit').
   */
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  /**
   * @description
   * Constructs a new `FormControl` with the given state, validators and options. Sets
   * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
   * control will be nullable. Accepts a single generic argument, which is the type  of the
   * control's value.
   *
   * @param formState Initializes the control with an initial state value, or
   * with an object that contains both a value and a disabled status.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or a `FormControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator
   * functions.
   *
   * @usageNotes
   *
   * ### Initialize a control as disabled
   *
   * The following example returns a control with an initial value in a disabled state.
   *
   * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
   * </code-example>
   */
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  /**
   * Constructs a new `FormArray` from the given array of configurations,
   * validators and options. Accepts a single generic argument, which is the type of each control
   * inside the array.
   *
   * @param controls An array of child controls or control configs. Each child control is given an
   *     index when it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
   *     `AbstractControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions.
   */
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  /** @internal */
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  /** @internal */
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _FormBuilder,
      deps: [],
      target: FactoryTarget.Injectable
    });
  }
  static {
    this.\u0275prov = \u0275\u0275ngDeclareInjectable({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _FormBuilder,
      providedIn: "root"
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: FormBuilder,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }]
});
var NonNullableFormBuilder = class _NonNullableFormBuilder {
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _NonNullableFormBuilder,
      deps: [],
      target: FactoryTarget.Injectable
    });
  }
  static {
    this.\u0275prov = \u0275\u0275ngDeclareInjectable({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _NonNullableFormBuilder,
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: NonNullableFormBuilder,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }]
});
var UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  /**
   * Like `FormBuilder#control`, except the resulting control is untyped.
   */
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  /**
   * Like `FormBuilder#array`, except the resulting array is untyped.
   */
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _UntypedFormBuilder,
      deps: null,
      target: FactoryTarget.Injectable
    });
  }
  static {
    this.\u0275prov = \u0275\u0275ngDeclareInjectable({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _UntypedFormBuilder,
      providedIn: "root"
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: UntypedFormBuilder,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }]
});
var VERSION = new Version("18.2.13");
var FormsModule = class _FormsModule {
  /**
   * @description
   * Provides options for configuring the forms module.
   *
   * @param opts An object of configuration options
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _FormsModule,
      deps: [],
      target: FactoryTarget.NgModule
    });
  }
  static {
    this.\u0275mod = \u0275\u0275ngDeclareNgModule({
      minVersion: "14.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _FormsModule,
      declarations: [NgModel, NgModelGroup, NgForm],
      exports: [\u0275InternalFormsSharedModule, NgModel, NgModelGroup, NgForm]
    });
  }
  static {
    this.\u0275inj = \u0275\u0275ngDeclareInjector({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _FormsModule,
      imports: [\u0275InternalFormsSharedModule]
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: FormsModule,
  decorators: [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }]
});
var ReactiveFormsModule = class _ReactiveFormsModule {
  /**
   * @description
   * Provides options for configuring the reactive forms module.
   *
   * @param opts An object of configuration options
   * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
   * binding is used with reactive form directives.
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _ReactiveFormsModule,
      deps: [],
      target: FactoryTarget.NgModule
    });
  }
  static {
    this.\u0275mod = \u0275\u0275ngDeclareNgModule({
      minVersion: "14.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _ReactiveFormsModule,
      declarations: [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName],
      exports: [\u0275InternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName]
    });
  }
  static {
    this.\u0275inj = \u0275\u0275ngDeclareInjector({
      minVersion: "12.0.0",
      version: "18.2.13",
      ngImport: core_exports,
      type: _ReactiveFormsModule,
      imports: [\u0275InternalFormsSharedModule]
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.13",
  ngImport: core_exports,
  type: ReactiveFormsModule,
  decorators: [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }]
});

// src/components/login/login.component.ts
var LoginComponent = class LoginComponent2 {
  constructor(fb, loginService, router) {
    this.fb = fb;
    this.loginService = loginService;
    this.router = router;
    this.errorMessage = "";
    this.loginForm = this.fb.group({
      username: [
        ""
      ],
      password: [""]
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe({
        next: (response) => {
          localStorage.setItem("token", response.token);
          this.loginService.setLoginStatus(true);
          this.router.navigate([""]);
        },
        error: (err) => {
          this.errorMessage = "Autentificare e\u0219uat\u0103. Verifica\u021Bi datele!";
        }
      });
    }
  }
  navigateToRegister() {
    this.router.navigate(["/register"]);
  }
  static {
    this.ctorParameters = () => [
      { type: FormBuilder },
      { type: LoginService },
      { type: Router }
    ];
  }
};
LoginComponent = __decorate([
  Component({
    selector: "app-login",
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    template: login_component_default,
    styles: [login_component_default2]
  })
], LoginComponent);

// angular:jit:template:file:src\components\register\register.component.html
var register_component_default = `<div class="login-container">\r
    <h2>Inregistrare</h2>\r
    <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">\r
      <div>\r
        <label for="username">User</label>\r
        <input id="username" type="username" formControlName="username" />\r
        <div *ngIf="registerForm.controls['username'].invalid && registerForm.controls['username'].touched">\r
          username invalid\r
        </div>\r
      </div>\r
      <div>\r
        <label for="password">Parol\u0103</label>\r
        <input id="password" type="password" formControlName="password" />\r
        <div *ngIf="registerForm.controls['password'].invalid && registerForm.controls['password'].touched">\r
          Parola trebuie s\u0103 aib\u0103 cel pu\u021Bin 6 caractere\r
        </div>\r
      </div>\r
      <button type="submit" [disabled]="registerForm.invalid">Autentificare</button>\r
      <div *ngIf="errorMessage" class="error-message">{{ errorMessage }}</div>\r
    </form>\r
  </div>\r
  `;

// angular:jit:style:file:src\components\register\register.component.scss
var register_component_default2 = "/* src/components/register/register.component.scss */\n.login-container {\n  width: 300px;\n  margin: 50px auto;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  background: #fff;\n}\nh2 {\n  margin-bottom: 20px;\n}\ndiv {\n  margin-bottom: 15px;\n  text-align: left;\n}\nlabel {\n  display: block;\n  font-weight: bold;\n}\ninput {\n  width: 100%;\n  padding: 8px;\n  margin-top: 5px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\nbutton {\n  width: 100%;\n  padding: 10px;\n  margin-top: 10px;\n  border: none;\n  border-radius: 4px;\n  background-color: #28a745;\n  color: white;\n  font-size: 16px;\n  cursor: pointer;\n}\nbutton[type=button] {\n  background-color: #007bff;\n}\nbutton:disabled {\n  background-color: #ccc;\n  cursor: not-allowed;\n}\n.error-message {\n  color: red;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=register.component-SZFQ2L4Y.css.map */\n";

// src/components/register/regiser.service.ts
var RegisterService = class RegisterService2 {
  constructor(http) {
    this.http = http;
    this.registerUrl = APP_CONSTANTS.BACKEND_BASE_URL_PROD + "/Auth/register";
  }
  register(credentials) {
    return this.http.post(this.registerUrl, credentials);
  }
  static {
    this.ctorParameters = () => [
      { type: HttpClient }
    ];
  }
};
RegisterService = __decorate([
  Injectable({
    providedIn: "root"
  })
], RegisterService);

// src/components/register/register.component.ts
var RegisterComponent = class RegisterComponent2 {
  constructor(fb, registerService, router) {
    this.fb = fb;
    this.registerService = registerService;
    this.router = router;
    this.errorMessage = "";
    this.registerForm = this.fb.group({
      username: [
        ""
      ],
      password: [""]
    });
  }
  onSubmit() {
    if (this.registerForm.valid) {
      this.registerService.register(this.registerForm.value).subscribe({
        next: (response) => {
          this.router.navigate([""]);
        },
        error: (err) => {
          this.errorMessage = "Inregistrare e\u0219uat\u0103. Verifica\u021Bi datele!";
        }
      });
    }
  }
  static {
    this.ctorParameters = () => [
      { type: FormBuilder },
      { type: RegisterService },
      { type: Router }
    ];
  }
};
RegisterComponent = __decorate([
  Component({
    selector: "app-register",
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    template: register_component_default,
    styles: [register_component_default2]
  })
], RegisterComponent);

// angular:jit:template:file:src\components\orderdetails\orderdetails.component.html
var orderdetails_component_default = '<div class="order-form-container">\r\n    <h2>Finalizeaz\u0103 comanda</h2>\r\n    <form [formGroup]="orderForm" (ngSubmit)="onSubmit()">\r\n      <div class="form-group">\r\n        <label for="ShippingAddress">Adres\u0103 de livrare</label>\r\n        <input id="ShippingAddress" formControlName="ShippingAddress" type="text" required />\r\n      </div>\r\n  \r\n      <button type="submit" [disabled]="orderForm.invalid">Trimite comanda</button>\r\n    </form>\r\n  </div>\r\n  ';

// angular:jit:style:file:src\components\orderdetails\orderdetails.component.scss
var orderdetails_component_default2 = "/* src/components/orderdetails/orderdetails.component.scss */\n.order-form-container {\n  max-width: 500px;\n  margin: auto;\n  padding: 2rem;\n  background-color: #f7f7f7;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.form-group {\n  margin-bottom: 1rem;\n}\ninput {\n  width: 100%;\n  padding: 0.5rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\nbutton {\n  background-color: #007bff;\n  color: white;\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=orderdetails.component-FSKHWKHG.css.map */\n";

// src/components/orderdetails/order.service.ts
var OrderService = class OrderService2 {
  constructor(http) {
    this.http = http;
    this.orderUrl = APP_CONSTANTS.BACKEND_BASE_URL_PROD + "/api/orders";
  }
  createOrder(orderData) {
    return this.http.post(this.orderUrl, orderData);
  }
  static {
    this.ctorParameters = () => [
      { type: HttpClient }
    ];
  }
};
OrderService = __decorate([
  Injectable({
    providedIn: "root"
  })
], OrderService);

// src/components/orderdetails/orderdetails.component.ts
var OrderDetailsComponent = class OrderDetailsComponent2 {
  constructor(fb, orderService, router, cartService) {
    this.fb = fb;
    this.orderService = orderService;
    this.router = router;
    this.cartService = cartService;
    this.orderForm = this.fb.group({
      ShippingAddress: ["", Validators.required]
    });
  }
  onSubmit() {
    if (this.orderForm.valid) {
      const userId = this.getUserIdFromToken();
      if (!userId) {
        console.error("Invalid user ID from token.");
        return;
      }
      const products = this.getProductsFromCart();
      const payload = {
        userId,
        products,
        ShippingAddress: this.orderForm.value.ShippingAddress
      };
      this.orderService.createOrder(payload).subscribe({
        next: () => {
          this.cartService.clearCart();
          this.router.navigate(["/thankyou"]);
        },
        error: (err) => console.error("Order error", err)
      });
    }
  }
  getUserIdFromToken() {
    const token = localStorage.getItem("token");
    if (!token)
      return 0;
    try {
      const payloadEncoded = token.split(".")[1];
      const decodedPayload = atob(payloadEncoded);
      const claims = JSON.parse(decodedPayload);
      const nameId = claims["nameid"] || claims["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
      return nameId ? parseInt(nameId) : 0;
    } catch (err) {
      console.error("Invalid JWT token", err);
      return 0;
    }
  }
  getProductsFromCart() {
    return this.cartService.getCartItems();
  }
  static {
    this.ctorParameters = () => [
      { type: FormBuilder },
      { type: OrderService },
      { type: Router },
      { type: CartService }
    ];
  }
};
OrderDetailsComponent = __decorate([
  Component({
    selector: "app-orderdetails",
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    template: orderdetails_component_default,
    styles: [orderdetails_component_default2]
  })
], OrderDetailsComponent);

// angular:jit:template:file:src\components\profile\profile.component.html
var profile_component_default = `<div class="profile-container">\r
    <div class="profile-header">\r
      <div class="profile-image">\r
        <!-- Afi\u0219eaz\u0103 imaginea de profil dac\u0103 exist\u0103 -->\r
        <img *ngIf="imageBase64" [src]="imageBase64" alt="Profile Image" class="user-icon" />\r
        \r
        <!-- Input-ul de fi\u0219iere care se deschide c\xE2nd utilizatorul apas\u0103 pe butonul Edit -->\r
        <input type="file" (change)="onFileSelected($event)" class="file-input" />\r
  \r
        <!-- Buton pentru selectarea imaginii de profil -->\r
        <button class="edit-btn" (click)="triggerFileInput()">Edit Profile Image</button>\r
      </div>\r
  \r
      <!-- Salutul pentru utilizator cu username -->\r
      <h2 class="user-name">Hello, {{ username || 'User' }}</h2>\r
      \r
      <!-- Buton de logout -->\r
      <button class="logout-btn" (click)="logout()">Logout</button>\r
    </div>\r
  \r
    <div class="order-history">\r
      <h3>Your Order History</h3>\r
      \r
      <!-- Mesajul c\xE2nd nu exist\u0103 comenzi -->\r
      <div *ngIf="orderHistory.length === 0" class="no-orders">No orders found.</div>\r
  \r
      <!-- List\u0103 comenzi -->\r
      <div *ngFor="let order of orderHistory" class="order-item">\r
        <div class="order-id">Order ID: {{ order.id }}</div>\r
        <div class="order-date">Order Date: {{ order.purchaseDate | date:'yyyy-MM-dd HH:mm' }}</div>\r
        <div class="order-status">Payment Status: {{ order.paymentStatus }}</div>\r
        <div class="shipping-address">Shipping Address: {{ order.shippingAddress }}</div>\r
        <div class="order-total">Total Price: \${{ order.totalPrice }}</div>\r
      </div>\r
    </div>\r
  </div>\r
  `;

// angular:jit:style:file:src\components\profile\profile.component.scss
var profile_component_default2 = "/* src/components/profile/profile.component.scss */\n.profile-container {\n  padding: 20px;\n  background-color: #f9f9f9;\n}\n.profile-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.profile-image {\n  position: relative;\n}\n.user-icon {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.file-input {\n  display: none;\n}\n.edit-btn,\n.logout-btn {\n  margin-top: 10px;\n  padding: 10px 20px;\n  border: none;\n  background-color: #007bff;\n  color: white;\n  cursor: pointer;\n  font-size: 16px;\n  border-radius: 5px;\n}\n.edit-btn:hover,\n.logout-btn:hover {\n  background-color: #0056b3;\n}\n.order-history {\n  margin-top: 30px;\n}\n.order-item {\n  background-color: #fff;\n  padding: 15px;\n  margin-bottom: 10px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.order-id,\n.order-date,\n.order-status,\n.shipping-address,\n.order-total {\n  font-size: 14px;\n  margin: 5px 0;\n}\n/*# sourceMappingURL=profile.component-42RRTLOU.css.map */\n";

// src/components/profile/profile.component.ts
var ProfileComponent = class ProfileComponent2 {
  constructor(profileService, loginService, router, renderer, platformId) {
    this.profileService = profileService;
    this.loginService = loginService;
    this.router = router;
    this.renderer = renderer;
    this.platformId = platformId;
    this.imageBase64 = null;
    this.username = null;
    this.userId = null;
    this.orderHistory = [];
  }
  ngOnInit() {
    this.username = this.getUsernameFromToken();
    this.userId = this.getUserIdFromToken();
    if (this.username && this.userId) {
      this.profileService.getProfileImage(this.userId).subscribe({
        next: (image) => {
          if (image && image.imageBase64) {
            this.imageBase64 = image.imageBase64;
          }
        },
        error: (err) => console.error("Eroare la \xEEnc\u0103rcarea imaginii de profil:", err)
      });
      this.profileService.getOrderHistory(this.userId).subscribe({
        next: (orders) => {
          this.orderHistory = orders;
        },
        error: (err) => console.error("Eroare la \xEEnc\u0103rcarea istoricului comenzilor:", err)
      });
    }
  }
  // Verificăm dacă aplicația rulează pe browser
  getUsernameFromToken() {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }
    const token = localStorage.getItem("token");
    if (!token)
      return null;
    try {
      const payloadEncoded = token.split(".")[1];
      const decodedPayload = atob(payloadEncoded);
      const claims = JSON.parse(decodedPayload);
      const username = claims["name"] || claims["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
      return username ? username : null;
    } catch (err) {
      console.error("Eroare la decodificarea token-ului", err);
      return null;
    }
  }
  getUserIdFromToken() {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }
    const token = localStorage.getItem("token");
    if (!token)
      return null;
    try {
      const payloadEncoded = token.split(".")[1];
      const decodedPayload = atob(payloadEncoded);
      const claims = JSON.parse(decodedPayload);
      const userId = claims["nameid"] || claims["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
      return userId ? parseInt(userId) : null;
    } catch (err) {
      console.error("Eroare la decodificarea token-ului", err);
      return null;
    }
  }
  // Folosim Renderer2 pentru a simula un click pe input-ul de fișiere
  onFileSelected(event) {
    const input = event.target;
    if (input?.files?.[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result;
        this.imageBase64 = base64;
        if (this.userId) {
          this.profileService.updateProfileImage(this.userId, base64).subscribe({
            next: () => alert("Imaginea a fost actualizat\u0103!"),
            error: (err) => console.error("Eroare la upload:", err)
          });
        }
      };
      reader.readAsDataURL(file);
    }
  }
  // Metoda pentru a deschide selectorul de fișiere
  triggerFileInput() {
    const fileInput = document.querySelector(".file-input");
    if (fileInput) {
      this.renderer.selectRootElement(fileInput).click();
    }
  }
  logout() {
    localStorage.removeItem("token");
    this.loginService.setLoginStatus(false);
    this.router.navigate(["/login"]);
  }
  static {
    this.ctorParameters = () => [
      { type: ProfileService },
      { type: LoginService },
      { type: Router },
      { type: Renderer2 },
      { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID] }] }
    ];
  }
};
ProfileComponent = __decorate([
  Component({
    selector: "app-profile",
    template: profile_component_default,
    standalone: true,
    imports: [CommonModule],
    styles: [profile_component_default2]
  })
], ProfileComponent);

// angular:jit:template:file:src\components\admin-add-product\admin-add-product.component.html
var admin_add_product_component_default = '<h2>Add New Product</h2>\r\n<form [formGroup]="productForm" (ngSubmit)="onSubmit()">\r\n  <label>Product Name:</label>\r\n  <input formControlName="productName" />\r\n\r\n  <label>Price:</label>\r\n  <input type="number" formControlName="price" />\r\n\r\n  <label>Stock:</label>\r\n  <input type="number" formControlName="stockQuantity" />\r\n\r\n  <label>Product Image:</label>\r\n  <label class="file-input-label">\r\n    Upload Product Image\r\n    <input type="file" (change)="onFileSelected($event)" class="file-input" hidden />\r\n  </label>\r\n  \r\n  <!-- Image Preview -->\r\n  <div *ngIf="imageBase64">\r\n    <h4>Image Preview:</h4>\r\n    <img [src]="imageBase64" alt="Product Image Preview" class="image-preview"/>\r\n  </div>\r\n\r\n  <label>Description:</label>\r\n  <textarea formControlName="description"></textarea>\r\n\r\n  <label>Detailed Description:</label>\r\n  <textarea formControlName="detailedDescription"></textarea>\r\n\r\n  <label>Tag ID:</label>\r\n  <input type="number" formControlName="tagId" />\r\n\r\n  <!-- Submit button -->\r\n  <button type="submit" [disabled]="productForm.invalid || !imageBase64">\r\n    Add Product\r\n  </button>\r\n</form>\r\n';

// angular:jit:style:file:src\components\admin-add-product\admin-add-product.component.scss
var admin_add_product_component_default2 = '@charset "UTF-8";\n\n/* src/components/admin-add-product/admin-add-product.component.scss */\nform {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 20px;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\nh2 {\n  text-align: center;\n  color: #333;\n  font-size: 1.5rem;\n  margin-bottom: 20px;\n  font-weight: bold;\n}\nlabel {\n  display: block;\n  font-weight: bold;\n  margin-bottom: 8px;\n  color: #555;\n  font-size: 1rem;\n}\ninput,\ntextarea {\n  width: 100%;\n  padding: 12px;\n  margin-bottom: 15px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1rem;\n  box-sizing: border-box;\n  transition: border-color 0.3s ease;\n}\ninput:focus,\ntextarea:focus {\n  border-color: #6c5ce7;\n  outline: none;\n}\ntextarea {\n  height: 100px;\n  resize: vertical;\n}\ninput[type=file] {\n  display: none;\n}\n.file-input-label {\n  display: inline-block;\n  background-color: #6c5ce7;\n  color: white;\n  padding: 10px 20px;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.file-input-label:hover {\n  background-color: #5a4bcf;\n}\n.image-preview {\n  width: 100%;\n  max-width: 200px;\n  margin-top: 10px;\n  border-radius: 8px;\n  border: 1px solid #ccc;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\nbutton {\n  display: inline-block;\n  width: 100%;\n  padding: 12px;\n  background-color: #6c5ce7;\n  color: white;\n  font-size: 1.1rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\nbutton:disabled {\n  background-color: #ccc;\n  cursor: not-allowed;\n}\nbutton:hover:enabled {\n  background-color: #5a4bcf;\n}\n.loading {\n  display: block;\n  text-align: center;\n  margin-top: 20px;\n  font-size: 1.2rem;\n  color: #ff9800;\n}\n@media (max-width: 600px) {\n  form {\n    padding: 15px;\n  }\n  h2 {\n    font-size: 1.2rem;\n  }\n  label {\n    font-size: 0.9rem;\n  }\n  button {\n    font-size: 1rem;\n  }\n}\n.file-input-label {\n  display: block;\n  width: 96%;\n  background-color: #6c5ce7;\n  color: white;\n  padding: 12px;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: center;\n  margin-bottom: 20px;\n  font-size: 1.1rem;\n}\n.file-input-label:hover {\n  background-color: #5a4bcf;\n}\n/*# sourceMappingURL=admin-add-product.component-APCBRGNE.css.map */\n';

// src/components/admin-add-product/admin-add-product.component.ts
var AdminAddProductComponent = class AdminAddProductComponent2 {
  constructor(fb, productService) {
    this.fb = fb;
    this.productService = productService;
    this.imageBase64 = null;
    this.productForm = this.fb.group({
      productName: ["", Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      stockQuantity: [0, [Validators.required, Validators.min(0)]],
      description: ["", Validators.required],
      detailedDescription: ["", Validators.required],
      tagId: [1, Validators.required]
    });
  }
  // Method to handle file selection
  onFileSelected(event) {
    const input = event.target;
    if (input?.files?.[0]) {
      const file = input.files[0];
      console.log("File selected:", file);
      const reader = new FileReader();
      reader.onload = () => {
        this.imageBase64 = reader.result;
        console.log("Image Base64:", this.imageBase64);
      };
      reader.readAsDataURL(file);
    }
  }
  // Trigger file input click
  triggerFileInput() {
    const fileInput = document.querySelector(".file-input");
    if (fileInput) {
      fileInput.click();
    }
  }
  // Method to submit the form
  onSubmit() {
    if (this.productForm.valid && this.imageBase64) {
      const product = {
        productName: this.productForm.value.productName || "",
        price: this.productForm.value.price || 0,
        stockQuantity: this.productForm.value.stockQuantity || 0,
        image: this.imageBase64 || "",
        // Using base64 for the image
        description: this.productForm.value.description || "",
        detailedDescription: this.productForm.value.detailedDescription || "",
        tagId: this.productForm.value.tagId || 1,
        createdDate: /* @__PURE__ */ new Date()
        // Add current date for createdDate
      };
      this.productService.addProduct(product).subscribe({
        next: (response) => {
          alert(response.message);
          this.productForm.reset();
          this.imageBase64 = null;
        },
        error: (err) => {
          alert("Error adding product: " + err.error);
        }
      });
    } else {
      alert("Please complete all fields and upload an image.");
    }
  }
  static {
    this.ctorParameters = () => [
      { type: FormBuilder },
      { type: ProduseService }
    ];
  }
};
AdminAddProductComponent = __decorate([
  Component({
    selector: "app-admin-add-product",
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    // Import ReactiveFormsModule and CommonModule
    template: admin_add_product_component_default,
    styles: [admin_add_product_component_default2]
  })
], AdminAddProductComponent);

// src/app/app.routes.ts
var routes = [
  { path: "template", component: TemplateComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "contact", component: ContactPageComponent },
  { path: "", component: HomepageComponent },
  { path: "products", component: ProduseComponent },
  { path: "cart", component: CartComponent },
  { path: "thankyou", component: ThankYouComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "orderdetails", component: OrderDetailsComponent },
  { path: "profile", component: ProfileComponent },
  { path: "addproduct", component: AdminAddProductComponent },
  { path: "**", component: ErrorPageComponent }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(withFetch())
  ]
  // Adăugăm activarea fetch pentru HttpClient]
};

// src/app/app.config.server.ts
var serverConfig = {
  providers: [
    provideServerRendering()
  ]
};
var config = mergeApplicationConfig(appConfig, serverConfig);

// src/main.server.ts
var bootstrap = () => bootstrapApplication(AppComponent, config);
var main_server_default = bootstrap;

export {
  main_server_default
};
//# sourceMappingURL=chunk-C64AN7WV.mjs.map

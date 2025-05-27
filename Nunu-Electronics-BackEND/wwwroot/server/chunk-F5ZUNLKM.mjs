import './polyfills.server.mjs';
import {
  CommonModule,
  HttpClient,
  HttpClientModule,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  RouterOutlet,
  bootstrapApplication,
  importProvidersFrom,
  mergeApplicationConfig,
  provideClientHydration,
  provideHttpClient,
  provideRouter,
  provideServerRendering,
  withFetch,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NHJTZF6F.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PTRYWQQD.mjs";

// src/components/template/template.service.ts
var TemplateService = class _TemplateService {
  constructor(http) {
    this.http = http;
    this.templateUrl = "https://catfact.ninja/fact";
  }
  getTemplates() {
    return this.http.get(this.templateUrl);
  }
  static {
    this.\u0275fac = function TemplateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplateService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TemplateService, factory: _TemplateService.\u0275fac, providedIn: "root" });
  }
};

// src/components/template/template.component.ts
function TemplateComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const template_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(template_r1.fact);
  }
}
var TemplateComponent = class _TemplateComponent {
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
    this.\u0275fac = function TemplateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplateComponent)(\u0275\u0275directiveInject(TemplateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplateComponent, selectors: [["app-template"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"]], template: function TemplateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "body");
        \u0275\u0275template(1, TemplateComponent_div_1_Template, 3, 1, "div", 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.templates);
      }
    }, dependencies: [CommonModule, NgForOf] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplateComponent, { className: "TemplateComponent", filePath: "src\\components\\template\\template.component.ts", lineNumber: 13 });
})();

// src/constants.ts
var APP_CONSTANTS = {
  BACKEND_BASE_URL_DEV: "http://localhost:5142",
  BACKEND_BASE_URL_PROD: "https://nunuelectronics-ehakdyc9e9b3h0ag.westeurope-01.azurewebsites.net",
  APP_TITLE: "Nunu Electronics",
  DEFAULT_LANGUAGE: "en",
  ITEMS_PER_PAGE: 10
};

// src/components/produse/produse.service.ts
var ProduseService = class _ProduseService {
  constructor(http) {
    this.http = http;
    this.produseUrl = APP_CONSTANTS.BACKEND_BASE_URL_PROD + "/Product";
  }
  getServices() {
    return this.http.get(this.produseUrl);
  }
  static {
    this.\u0275fac = function ProduseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProduseService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProduseService, factory: _ProduseService.\u0275fac, providedIn: "root" });
  }
};

// src/components/homepage/homepage.component.ts
function HomepageComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementStart(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 10);
    \u0275\u0275text(7, "Buy Now");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", product_r1.image, \u0275\u0275sanitizeUrl)("alt", product_r1.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r1.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r1.description);
  }
}
var HomepageComponent = class _HomepageComponent {
  constructor(produseService) {
    this.produseService = produseService;
    this.Products = [];
  }
  ngOnInit() {
    this.produseService.getServices().subscribe((data) => {
      if (data.length > 2) {
        this.Products = data.sort(() => 0.5 - Math.random()).slice(0, 2);
      } else {
        this.Products = data;
      }
    }, (error) => {
      console.error("Error fetching products:", error);
    });
  }
  static {
    this.\u0275fac = function HomepageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomepageComponent)(\u0275\u0275directiveInject(ProduseService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomepageComponent, selectors: [["app-homepage"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 1, consts: [[1, "hero"], ["routerLink", "/products", 1, "btn"], ["href", "#about", 1, "btn"], ["id", "products", 1, "products-section"], [1, "products"], ["class", "product", 4, "ngFor", "ngForOf"], ["id", "about", 1, "about-section"], ["href", "mailto:support@nunu.com"], [1, "product"], [3, "src", "alt"], ["href", "#", 1, "btn"]], template: function HomepageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header")(1, "h1");
        \u0275\u0275text(2, "Nunu Electronics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Empowering Technology, Guided by Faith");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "section", 0)(6, "h2");
        \u0275\u0275text(7, "Innovating Today, Empowering Tomorrow");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "Discover cutting-edge electronics designed to simplify your life and guided by higher values.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 1);
        \u0275\u0275text(11, "Products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "a", 2);
        \u0275\u0275text(13, "Learn More");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "section", 3)(15, "h3");
        \u0275\u0275text(16, "Our Best Sellers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 4);
        \u0275\u0275template(18, HomepageComponent_div_18_Template, 8, 4, "div", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "section", 6)(20, "h3");
        \u0275\u0275text(21, "Why Nunu Electronics?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p");
        \u0275\u0275text(23, "We blend innovation with purpose, creating products inspired by integrity and faith.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "footer")(25, "p");
        \u0275\u0275text(26, "\xA9 2024 Nunu Electronics. All rights reserved.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "p")(28, "a", 7);
        \u0275\u0275text(29, "Contact Us");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, " | Phone: +1 800 555 6789");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(18);
        \u0275\u0275property("ngForOf", ctx.Products);
      }
    }, dependencies: [CommonModule, NgForOf, RouterLink], styles: ['@charset "UTF-8";\n\n\n\nhtml[_ngcontent-%COMP%], \nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n}\nheader[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #7f8fa6,\n      #dcdde1);\n  color: #2c3e50;\n  text-align: center;\n  padding: 20px;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2.5em;\n}\nheader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  font-size: 1.2em;\n}\n.hero[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px 20px;\n  background-color: #7fb6e6;\n  color: #2c3e50;\n  width: 100%;\n  box-sizing: border-box;\n}\n.hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n}\n.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.hero[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 20px 10px;\n  padding: 10px 20px;\n  font-size: 1em;\n  background: #0078d4;\n  color: #fff;\n  text-decoration: none;\n  border-radius: 5px;\n}\n.hero[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background: #005bb5;\n}\n.products-section[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  text-align: center;\n  background-color: #7fb6e6;\n  width: 100%;\n  box-sizing: border-box;\n}\n.products-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-size: 2em;\n  color: #2c3e50;\n}\n.products[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.product[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  width: 250px;\n  text-align: center;\n}\n.product[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 10px;\n}\n.product[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin: 10px 0;\n}\n.product[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: #666;\n}\n.product[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 10px;\n  padding: 10px 20px;\n  font-size: 1em;\n  background: #28a745;\n  color: #fff;\n  text-decoration: none;\n  border-radius: 5px;\n}\n.product[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background: #218838;\n}\n.about-section[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  text-align: center;\n  background-color: #7fb6e6;\n  width: 100%;\n  box-sizing: border-box;\n}\n.about-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-weight: bold;\n  color: #2c3e50;\n  letter-spacing: 1px;\n}\n.about-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  color: #666;\n}\nfooter[_ngcontent-%COMP%] {\n  background: #2c3e50;\n  color: #fff;\n  text-align: center;\n  padding: 20px;\n  font-size: 0.9em;\n  width: 100%;\n  box-sizing: border-box;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1abc9c;\n  text-decoration: none;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=homepage.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomepageComponent, { className: "HomepageComponent", filePath: "src\\components\\homepage\\homepage.component.ts", lineNumber: 13 });
})();

// src/components/navbar/navbar.component.ts
var NavbarComponent = class _NavbarComponent {
  static {
    this.\u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 0, consts: [[1, "navbar"], [1, "container"], [1, "nav-links"], ["routerLink", "/"], ["routerLink", "/contact"], ["routerLink", "/products"], [1, "cart-container"], ["routerLink", "/cart"], [1, "cart-text"], ["src", "assets/cart-icon.png", "alt", "Cart", 1, "cart-icon"]], template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "ul", 2)(3, "li")(4, "a", 3);
        \u0275\u0275text(5, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "li")(7, "a", 4);
        \u0275\u0275text(8, "Contact");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "li")(10, "a", 5);
        \u0275\u0275text(11, "Products");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 6)(13, "a", 7)(14, "span", 8);
        \u0275\u0275text(15, "Cart");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "img", 9);
        \u0275\u0275elementEnd()()()();
      }
    }, dependencies: [RouterLink], styles: ['@charset "UTF-8";\n\n\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.navbar[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: #fff;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.nav-links[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  margin: 0;\n  padding: 0;\n}\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #00bcd4;\n}\n.cart-container[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n}\n.cart-text[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 16px;\n  margin-right: 8px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.cart-icon[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  cursor: pointer;\n  transition: transform 0.2s ease-in-out;\n  vertical-align: middle;\n}\n.cart-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n/*# sourceMappingURL=navbar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src\\components\\navbar\\navbar.component.ts", lineNumber: 11 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  constructor() {
    this.title = "Nunu-Electronics";
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 0, consts: [[1, "margine"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-navbar")(2, "router-outlet");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [NavbarComponent, RouterOutlet], styles: ['@charset "UTF-8";\n\n\n\n.margine[_ngcontent-%COMP%] {\n  margin: -10px !important;\n  padding: -10px !important;\n}\n/*# sourceMappingURL=app.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 13 });
})();

// src/components/error-page/error-page.component.ts
var ErrorPageComponent = class _ErrorPageComponent {
  static {
    this.\u0275fac = function ErrorPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ErrorPageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ErrorPageComponent, selectors: [["app-error-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 0, consts: [["lang", "en", "ng-app", ""], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["id", "pageSound", "src", "your-sound-file.mp3", "autoplay", ""], [1, "container"], ["src", "https://cdna.artstation.com/p/assets/images/images/014/896/868/large/x-train-nunu-bot.jpg?1546153109", "alt", "Centered Image"], [1, "message"]], template: function ErrorPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "html", 0)(1, "head");
        \u0275\u0275element(2, "meta", 1)(3, "meta", 2);
        \u0275\u0275elementStart(4, "title");
        \u0275\u0275text(5, "Centered Image with Message");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "body");
        \u0275\u0275element(7, "audio", 3);
        \u0275\u0275elementStart(8, "div", 4);
        \u0275\u0275element(9, "img", 5);
        \u0275\u0275elementStart(10, "div", 6);
        \u0275\u0275text(11, "Eroare 404. Doamne Ajuta.");
        \u0275\u0275elementEnd()()()();
      }
    }, styles: ["\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  background-color: #f0f0f0;\n  font-family: Arial, sans-serif;\n}\n.container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 20%;\n  height: auto;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 1.2em;\n  color: #333;\n}\n/*# sourceMappingURL=error-page.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ErrorPageComponent, { className: "ErrorPageComponent", filePath: "src\\components\\error-page\\error-page.component.ts", lineNumber: 10 });
})();

// src/components/contact-page/contact-page.component.ts
var ContactPageComponent = class _ContactPageComponent {
  static {
    this.\u0275fac = function ContactPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactPageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactPageComponent, selectors: [["app-contact-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 40, vars: 0, consts: [[1, "container"], ["action", "action_page.php"], ["for", "fname"], ["type", "text", "id", "fname", "name", "firstname", "placeholder", "Your name.."], ["for", "lname"], ["type", "text", "id", "lname", "name", "lastname", "placeholder", "Your last name.."], ["for", "country"], ["id", "country", "name", "country"], ["value", "australia"], ["value", "canada"], ["value", "usa"], ["value", "romania"], ["for", "problem"], ["id", "problem", "name", "problem"], ["value", "lag"], ["value", "bugging"], ["value", "package"], ["value", "service"], ["value", "reassurence"], ["value", "payment"], ["value", "weird"], ["for", "subject"], ["id", "subject", "name", "subject", "placeholder", "Write something..", 2, "height", "200px"], ["type", "submit", "value", "Submit"]], template: function ContactPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "form", 1)(2, "label", 2);
        \u0275\u0275text(3, "First Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "input", 3);
        \u0275\u0275elementStart(5, "label", 4);
        \u0275\u0275text(6, "Last Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "input", 5);
        \u0275\u0275elementStart(8, "label", 6);
        \u0275\u0275text(9, "Country");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "select", 7)(11, "option", 8);
        \u0275\u0275text(12, "Australia");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "option", 9);
        \u0275\u0275text(14, "Canada");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "option", 10);
        \u0275\u0275text(16, "USA");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "option", 11);
        \u0275\u0275text(18, "Romania");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "label", 12);
        \u0275\u0275text(20, "Problem");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "select", 13)(22, "option", 14);
        \u0275\u0275text(23, "Lag");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "option", 15);
        \u0275\u0275text(25, "Bug");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "option", 16);
        \u0275\u0275text(27, "Package not arriving");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "option", 17);
        \u0275\u0275text(29, "Poor service");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "option", 18);
        \u0275\u0275text(31, "Reassurance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "option", 19);
        \u0275\u0275text(33, "Payment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "option", 20);
        \u0275\u0275text(35, "Something else");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "label", 21);
        \u0275\u0275text(37, "Subject");
        \u0275\u0275elementEnd();
        \u0275\u0275element(38, "textarea", 22)(39, "input", 23);
        \u0275\u0275elementEnd()();
      }
    }, styles: ["\n\ninput[type=text][_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  resize: vertical;\n}\ninput[type=submit][_ngcontent-%COMP%] {\n  background-color: #04AA6D;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\ninput[type=submit][_ngcontent-%COMP%]:hover {\n  background-color: #45a049;\n}\n.container[_ngcontent-%COMP%] {\n  background-image: url(https://cdnb.artstation.com/p/assets/images/images/014/896/871/large/x-train-.jpg?1546152626);\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=contact-page.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactPageComponent, { className: "ContactPageComponent", filePath: "src\\components\\contact-page\\contact-page.component.ts", lineNumber: 10 });
})();

// src/components/cart/cart.service.ts
var CartService = class _CartService {
  constructor() {
    this.cartItems = [];
    if (typeof window !== "undefined" && window.localStorage) {
      const savedCart = localStorage.getItem("cartItems");
      if (savedCart) {
        this.cartItems = JSON.parse(savedCart);
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
  }
  static {
    this.\u0275fac = function CartService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
  }
};

// src/components/produse/produse.component.ts
function ProduseComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "img", 3);
    \u0275\u0275elementStart(2, "div", 4)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 7);
    \u0275\u0275listener("click", function ProduseComponent_div_1_Template_button_click_9_listener() {
      const product_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addToCart(product_r2));
    });
    \u0275\u0275text(10, "Add to Cart!");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("alt", product_r2.productName);
    \u0275\u0275property("src", product_r2.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r2.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", product_r2.price, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r2.description);
  }
}
var ProduseComponent = class _ProduseComponent {
  constructor(produseService, cartService) {
    this.produseService = produseService;
    this.cartService = cartService;
    this.Products = [];
  }
  ngOnInit() {
    const startTime = performance.now();
    this.produseService.getServices().subscribe((data) => {
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
    this.\u0275fac = function ProduseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProduseComponent)(\u0275\u0275directiveInject(ProduseService), \u0275\u0275directiveInject(CartService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProduseComponent, selectors: [["app-produse"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "product-container"], ["class", "product-card", 4, "ngFor", "ngForOf"], [1, "product-card"], [1, "product-img", 3, "src", "alt"], [1, "product-details"], [1, "price"], [1, "description"], [1, "add-to-cart-btn", 3, "click"]], template: function ProduseComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ProduseComponent_div_1_Template, 11, 5, "div", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.Products);
      }
    }, dependencies: [CommonModule, NgForOf], styles: ['@charset "UTF-8";\n\n\n\nbody[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  background-color: #f5f5f5;\n  margin: 0;\n  padding: 0;\n}\n.product-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding: 20px;\n  justify-content: center;\n}\n.product-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  padding: 15px;\n  width: 220px;\n  text-align: center;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n.product-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 130px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.product-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 10px 0 5px;\n  color: #333;\n  font-size: 1.1rem;\n}\n.product-details[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n  color: #27ae60;\n  margin-bottom: 5px;\n}\n.product-details[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #555;\n  white-space: normal;\n}\n.add-to-cart-btn[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n.add-to-cart-btn[_ngcontent-%COMP%]:hover {\n  background-color: #45a049;\n}\n/*# sourceMappingURL=produse.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProduseComponent, { className: "ProduseComponent", filePath: "src\\components\\produse\\produse.component.ts", lineNumber: 16 });
})();

// src/components/cart/cart.component.ts
function CartComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p");
    \u0275\u0275text(2, "Your cart is empty!");
    \u0275\u0275elementEnd()();
  }
}
function CartComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "img", 6);
    \u0275\u0275elementStart(2, "div", 7)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 9)(8, "button", 10);
    \u0275\u0275listener("click", function CartComponent_div_4_Template_button_click_8_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.decreaseQuantity(i_r2));
    });
    \u0275\u0275text(9, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 11);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 12);
    \u0275\u0275listener("click", function CartComponent_div_4_Template_button_click_12_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.increaseQuantity(i_r2));
    });
    \u0275\u0275text(13, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 13);
    \u0275\u0275listener("click", function CartComponent_div_4_Template_button_click_14_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeFromCart(i_r2));
    });
    \u0275\u0275text(15, "Remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("alt", item_r4.productName);
    \u0275\u0275property("src", item_r4.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", item_r4.price, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", item_r4.quantity <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Quantity: ", item_r4.quantity, "");
  }
}
function CartComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15)(4, "button", 16);
    \u0275\u0275listener("click", function CartComponent_div_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearCart());
    });
    \u0275\u0275text(5, "Clear Cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 17);
    \u0275\u0275listener("click", function CartComponent_div_5_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCheckout());
    });
    \u0275\u0275text(7, "Proceed to Checkout");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Total: $", ctx_r2.getTotal(), "");
  }
}
var CartComponent = class _CartComponent {
  constructor(cartService, router) {
    this.cartService = cartService;
    this.router = router;
    this.cartItems = [];
  }
  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }
  removeFromCart(index) {
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getCartItems();
  }
  clearCart() {
    this.cartService.clearCart();
    this.cartItems = this.cartService.getCartItems();
  }
  getTotal() {
    const total = this.cartItems.reduce((total2, item) => total2 + item.price * item.quantity, 0);
    return total.toFixed(2);
  }
  // Crește cantitatea produsului
  increaseQuantity(index) {
    this.cartItems[index].quantity += 1;
  }
  // Scade cantitatea produsului
  decreaseQuantity(index) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity -= 1;
    }
  }
  onCheckout() {
    this.cartService.clearCart();
    this.router.navigate(["/thankyou"]);
  }
  static {
    this.\u0275fac = function CartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartComponent)(\u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 3, consts: [[1, "cart-container"], ["class", "empty-cart-message", 4, "ngIf"], ["class", "cart-item", 4, "ngFor", "ngForOf"], ["class", "cart-summary", 4, "ngIf"], [1, "empty-cart-message"], [1, "cart-item"], [1, "cart-item-image", 3, "src", "alt"], [1, "cart-item-details"], [1, "price"], [1, "quantity-container"], [3, "click", "disabled"], [1, "quantity"], [3, "click"], [1, "remove-btn", 3, "click"], [1, "cart-summary"], [1, "cart-actions"], [1, "clear-cart-btn", 3, "click"], [1, "checkout-btn", 3, "click"]], template: function CartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Your Shopping Cart");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, CartComponent_div_3_Template, 3, 0, "div", 1)(4, CartComponent_div_4_Template, 16, 6, "div", 2)(5, CartComponent_div_5_Template, 8, 1, "div", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.cartItems.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.cartItems);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.cartItems.length > 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n.cart-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  font-family: Arial, sans-serif;\n  background-color: #f8f8f8;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n  font-size: 24px;\n  color: #333;\n}\n.empty-cart-message[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n  color: #888;\n  font-style: italic;\n}\n.cart-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #ddd;\n  padding: 15px 0;\n  margin-bottom: 10px;\n}\n.cart-item-image[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  object-fit: cover;\n  margin-right: 20px;\n  border-radius: 5px;\n}\n.cart-item-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.cart-item-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0;\n  color: #333;\n}\n.cart-item-details[_ngcontent-%COMP%]   p.price[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: #4CAF50;\n  margin-top: 5px;\n}\n.remove-btn[_ngcontent-%COMP%] {\n  background-color: #ff3333;\n  color: white;\n  padding: 8px 16px;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  border-radius: 5px;\n  transition: background-color 0.3s ease;\n}\n.remove-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e60000;\n}\n.cart-summary[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 20px;\n  padding: 10px;\n  background-color: #f1f1f1;\n  border-radius: 5px;\n}\n.cart-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  color: #333;\n}\n.cart-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 15px;\n}\n.clear-cart-btn[_ngcontent-%COMP%], \n.checkout-btn[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: background-color 0.3s ease;\n}\n.clear-cart-btn[_ngcontent-%COMP%]:hover, \n.checkout-btn[_ngcontent-%COMP%]:hover {\n  background-color: #45a049;\n}\n.checkout-btn[_ngcontent-%COMP%] {\n  background-color: #008CBA;\n}\n.checkout-btn[_ngcontent-%COMP%]:hover {\n  background-color: #007b8b;\n}\n.quantity-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n}\n.quantity-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #00bcd4;\n  color: white;\n  border: none;\n  padding: 5px 10px;\n  font-size: 18px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  border-radius: 5px;\n}\n.quantity-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0097a7;\n}\n.quantity-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  font-size: 16px;\n  color: #333;\n}\n.quantity-container[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  background-color: #ccc;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=cart.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src\\components\\cart\\cart.component.ts", lineNumber: 12 });
})();

// src/components/thank-you/thank-you.component.ts
var ThankYouComponent = class _ThankYouComponent {
  static {
    this.\u0275fac = function ThankYouComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThankYouComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThankYouComponent, selectors: [["app-thank-you"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 0, consts: [[1, "thank-you-container"], [1, "thank-you-message"]], template: function ThankYouComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Thank You for Your Purchase!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1)(4, "p");
        \u0275\u0275text(5, "Your order has been successfully processed. We appreciate your business!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "You will receive a confirmation email shortly with your order details.");
        \u0275\u0275elementEnd()()();
      }
    }, styles: ["\n\n.thank-you-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 40px;\n  font-family: Arial, sans-serif;\n  background-color: #f8f8f8;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #333;\n  margin-bottom: 20px;\n}\n.thank-you-message[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #555;\n  margin-bottom: 30px;\n}\n.thank-you-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n}\n.continue-shopping-btn[_ngcontent-%COMP%], \n.view-order-btn[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 12px 24px;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: background-color 0.3s ease;\n}\n.continue-shopping-btn[_ngcontent-%COMP%]:hover, \n.view-order-btn[_ngcontent-%COMP%]:hover {\n  background-color: #45a049;\n}\n.view-order-btn[_ngcontent-%COMP%] {\n  background-color: #008CBA;\n}\n.view-order-btn[_ngcontent-%COMP%]:hover {\n  background-color: #007b8b;\n}\n/*# sourceMappingURL=thank-you.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThankYouComponent, { className: "ThankYouComponent", filePath: "src\\components\\thank-you\\thank-you.component.ts", lineNumber: 10 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "template", component: TemplateComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "contact", component: ContactPageComponent },
  { path: "", component: HomepageComponent },
  { path: "products", component: ProduseComponent },
  { path: "cart", component: CartComponent },
  { path: "thankyou", component: ThankYouComponent },
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
//# sourceMappingURL=chunk-F5ZUNLKM.mjs.map

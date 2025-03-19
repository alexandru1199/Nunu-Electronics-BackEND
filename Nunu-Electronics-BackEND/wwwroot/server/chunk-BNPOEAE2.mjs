import './polyfills.server.mjs';
import {
  CommonModule,
  DatePipe,
  HttpClient,
  HttpClientModule,
  NgForOf,
  RouterLink,
  RouterOutlet,
  bootstrapApplication,
  importProvidersFrom,
  mergeApplicationConfig,
  provideClientHydration,
  provideRouter,
  provideServerRendering,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-F2FHP4ZL.mjs";

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

// src/components/homepage/homepage.component.ts
var HomepageComponent = class _HomepageComponent {
  static {
    this.\u0275fac = function HomepageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomepageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomepageComponent, selectors: [["app-homepage"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 46, vars: 0, consts: [[1, "hero"], ["href", "#products", 1, "btn"], ["href", "#about", 1, "btn"], ["id", "products", 1, "products-section"], [1, "products"], [1, "product"], ["src", "https://www.mobafire.com/images/champion/skins/landscape/nunu-amp-willump-fright-night-762x.jpg", "alt", "Smart Speaker"], ["href", "#", 1, "btn"], ["src", "https://www.mobafire.com/images/champion/skins/landscape/nunu-amp-willump-cosmic-paladins-762x.jpg", "alt", "Guiding Light Lamp"], ["id", "about", 1, "about-section"], ["href", "mailto:support@nunu.com"]], template: function HomepageComponent_Template(rf, ctx) {
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
        \u0275\u0275text(11, "Explore Products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "a", 2);
        \u0275\u0275text(13, "Learn More");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "section", 3)(15, "h3");
        \u0275\u0275text(16, "Our Best Sellers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 4)(18, "div", 5);
        \u0275\u0275element(19, "img", 6);
        \u0275\u0275elementStart(20, "h4");
        \u0275\u0275text(21, "Nunu Smart Speaker");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p");
        \u0275\u0275text(23, "Your personal assistant for a connected home.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "a", 7);
        \u0275\u0275text(25, "Buy Now");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 5);
        \u0275\u0275element(27, "img", 8);
        \u0275\u0275elementStart(28, "h4");
        \u0275\u0275text(29, "Guiding Nunu Lamp");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p");
        \u0275\u0275text(31, "A soothing light to inspire every moment.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "a", 7);
        \u0275\u0275text(33, "Buy Now");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(34, "section", 9)(35, "h3");
        \u0275\u0275text(36, "Why Nunu Electronics?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "p");
        \u0275\u0275text(38, "We blend innovation with purpose, creating products inspired by integrity and faith.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "footer")(40, "p");
        \u0275\u0275text(41, "\xA9 2024 Nunu Electronics. All rights reserved.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "p")(43, "a", 10);
        \u0275\u0275text(44, "Contact Us");
        \u0275\u0275elementEnd();
        \u0275\u0275text(45, " | Phone: +1 800 555 6789");
        \u0275\u0275elementEnd()();
      }
    }, styles: ["\n\nhtml[_ngcontent-%COMP%], \nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n}\nheader[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #7f8fa6,\n      #dcdde1);\n  color: #2c3e50;\n  text-align: center;\n  padding: 20px;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2.5em;\n}\nheader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  font-size: 1.2em;\n}\n.hero[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px 20px;\n  background-color: #7fb6e6;\n  color: #2c3e50;\n  width: 100%;\n  box-sizing: border-box;\n}\n.hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n}\n.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.hero[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 20px 10px;\n  padding: 10px 20px;\n  font-size: 1em;\n  background: #0078d4;\n  color: #fff;\n  text-decoration: none;\n  border-radius: 5px;\n}\n.hero[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background: #005bb5;\n}\n.products-section[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  text-align: center;\n  background-color: #7fb6e6;\n  width: 100%;\n  box-sizing: border-box;\n}\n.products-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-size: 2em;\n  color: #2c3e50;\n}\n.products[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.product[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  width: 250px;\n  text-align: center;\n}\n.product[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  border-radius: 10px;\n}\n.product[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin: 10px 0;\n}\n.product[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: #666;\n}\n.product[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 10px;\n  padding: 10px 20px;\n  font-size: 1em;\n  background: #28a745;\n  color: #fff;\n  text-decoration: none;\n  border-radius: 5px;\n}\n.product[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background: #218838;\n}\n.about-section[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  text-align: center;\n  background-color: #7fb6e6;\n  width: 100%;\n  box-sizing: border-box;\n}\n.about-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-weight: bold;\n  color: #2c3e50;\n  letter-spacing: 1px;\n}\n.about-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  color: #666;\n}\nfooter[_ngcontent-%COMP%] {\n  background: #2c3e50;\n  color: #fff;\n  text-align: center;\n  padding: 20px;\n  font-size: 0.9em;\n  width: 100%;\n  box-sizing: border-box;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1abc9c;\n  text-decoration: none;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=homepage.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomepageComponent, { className: "HomepageComponent", filePath: "src\\components\\homepage\\homepage.component.ts", lineNumber: 10 });
})();

// src/components/navbar/navbar.component.ts
var NavbarComponent = class _NavbarComponent {
  constructor() {
    this.isMenuOpen = false;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  test() {
    console.log("CLICK!");
  }
  static {
    this.\u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 0, consts: [[1, "navbar"], [1, "container"], [1, "nav-links"], ["routerLink", "/"], ["routerLink", "/contact"], ["routerLink", "/products"]], template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "ul", 2)(3, "li")(4, "a", 3);
        \u0275\u0275text(5, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "li")(7, "a", 4);
        \u0275\u0275text(8, "Contact");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "li")(10, "a", 5);
        \u0275\u0275text(11, "Products");
        \u0275\u0275elementEnd()()()()();
      }
    }, dependencies: [RouterLink], styles: ['@charset "UTF-8";\n\n\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.navbar[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: #fff;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 20px;\n}\n.nav-links[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  margin: 0;\n  padding: 0;\n}\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #00bcd4;\n}\n/*# sourceMappingURL=navbar.component.css.map */'] });
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

// src/components/produse/produse.component.ts
function ProduseComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "img", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r1.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Product ID: ", product_r1.productId, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Price: $", product_r1.price, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Stock: ", product_r1.stockQuantity, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Created: ", \u0275\u0275pipeBind2(12, 6, product_r1.createdDate, "mediumDate"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", product_r1.image, \u0275\u0275sanitizeUrl);
  }
}
var ProduseComponent = class _ProduseComponent {
  constructor(produseService) {
    this.produseService = produseService;
    this.Products = [];
  }
  ngOnInit() {
    this.produseService.getServices().subscribe((data) => {
      this.Products.push(...data);
    }, (error) => {
      console.error("Error fetching products:", error);
    });
  }
  static {
    this.\u0275fac = function ProduseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProduseComponent)(\u0275\u0275directiveInject(ProduseService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProduseComponent, selectors: [["app-produse"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "product-container"], ["class", "product-card", 4, "ngFor", "ngForOf"], [1, "product-card"], [1, "product-details"], [1, "product-img", 3, "src"]], template: function ProduseComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "body")(1, "div", 0);
        \u0275\u0275template(2, ProduseComponent_div_2_Template, 14, 9, "div", 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.Products);
      }
    }, dependencies: [CommonModule, NgForOf, DatePipe], styles: ["\n\nbody[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  background-color: #f5f5f5;\n  margin: 0;\n  padding: 0;\n}\n.product-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding: 20px;\n  justify-content: center;\n}\n.product-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  padding: 15px;\n  width: 250px;\n  text-align: center;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n.product-img[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.product-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  color: #333;\n  font-size: 1.2rem;\n}\n.product-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  color: #555;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=produse.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProduseComponent, { className: "ProduseComponent", filePath: "src\\components\\produse\\produse.component.ts", lineNumber: 13 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "template", component: TemplateComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "contact", component: ContactPageComponent },
  { path: "", component: HomepageComponent },
  { path: "products", component: ProduseComponent },
  { path: "**", component: ErrorPageComponent }
];

// src/app/app.config.ts
var appConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(HttpClientModule)]
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
//# sourceMappingURL=chunk-BNPOEAE2.mjs.map

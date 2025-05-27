import './polyfills.server.mjs';
import {
  CommonModule,
  Component,
  HttpClient,
  HttpClientModule,
  Injectable,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  __decorate,
  bootstrapApplication,
  importProvidersFrom,
  mergeApplicationConfig,
  provideClientHydration,
  provideHttpClient,
  provideRouter,
  provideServerRendering,
  withFetch
} from "./chunk-RKONAYNN.mjs";
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
var homepage_component_default = '\r\n<header>\r\n  <h1>Nunu Electronics</h1>\r\n  <p>Empowering Technology, Guided by Faith</p>\r\n</header>\r\n\r\n<section class="hero">\r\n  <h2>Innovating Today, Empowering Tomorrow</h2>\r\n  <p>Discover cutting-edge electronics designed to simplify your life and guided by higher values.</p>\r\n  <a class="btn" routerLink="/products">Products</a>\r\n\r\n  <a href="#about" class="btn">Learn More</a>\r\n</section>\r\n\r\n<section class="products-section" id="products">\r\n  <h3>Our Best Sellers</h3>\r\n  <div class="products">\r\n    <div class="product" *ngFor="let product of Products">\r\n      <img [src]="product.image" [alt]="product.productName">\r\n      <h4>{{ product.productName }}</h4>\r\n      <p>{{product.description}}</p> <!-- Descriere fix\u0103 -->\r\n      <a href="#" class="btn">Buy Now</a>\r\n      \r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n<section class="about-section" id="about">\r\n  <h3>Why Nunu Electronics?</h3>\r\n  <p>We blend innovation with purpose, creating products inspired by integrity and faith.</p>\r\n</section>\r\n\r\n<footer>\r\n  <p>&copy; 2024 Nunu Electronics. All rights reserved.</p>\r\n  <p><a href="mailto:support@nunu.com">Contact Us</a> | Phone: +1 800 555 6789</p>\r\n</footer>\r\n';

// angular:jit:style:file:src\components\homepage\homepage.component.scss
var homepage_component_default2 = '@charset "UTF-8";\n\n/* src/components/homepage/homepage.component.scss */\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n}\nheader {\n  background:\n    linear-gradient(\n      90deg,\n      #7f8fa6,\n      #dcdde1);\n  color: #2c3e50;\n  text-align: center;\n  padding: 20px;\n}\nheader h1 {\n  margin: 0;\n  font-size: 2.5em;\n}\nheader p {\n  margin: 10px 0 0;\n  font-size: 1.2em;\n}\n.hero {\n  text-align: center;\n  padding: 50px 20px;\n  background-color: #7fb6e6;\n  color: #2c3e50;\n  width: 100%;\n  box-sizing: border-box;\n}\n.hero h2 {\n  font-size: 2.5em;\n}\n.hero p {\n  font-size: 1.2em;\n}\n.hero .btn {\n  display: inline-block;\n  margin: 20px 10px;\n  padding: 10px 20px;\n  font-size: 1em;\n  background: #0078d4;\n  color: #fff;\n  text-decoration: none;\n  border-radius: 5px;\n}\n.hero .btn:hover {\n  background: #005bb5;\n}\n.products-section {\n  padding: 40px 20px;\n  text-align: center;\n  background-color: #7fb6e6;\n  width: 100%;\n  box-sizing: border-box;\n}\n.products-section h3 {\n  margin-bottom: 20px;\n  font-size: 2em;\n  color: #2c3e50;\n}\n.products {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.product {\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  width: 250px;\n  text-align: center;\n}\n.product img {\n  max-width: 100%;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 10px;\n}\n.product h4 {\n  font-size: 1.2em;\n  margin: 10px 0;\n}\n.product p {\n  font-size: 1em;\n  color: #666;\n}\n.product .btn {\n  display: inline-block;\n  margin: 10px;\n  padding: 10px 20px;\n  font-size: 1em;\n  background: #28a745;\n  color: #fff;\n  text-decoration: none;\n  border-radius: 5px;\n}\n.product .btn:hover {\n  background: #218838;\n}\n.about-section {\n  padding: 40px 20px;\n  text-align: center;\n  background-color: #7fb6e6;\n  width: 100%;\n  box-sizing: border-box;\n}\n.about-section h3 {\n  font-size: 2.5em;\n  font-weight: bold;\n  color: #2c3e50;\n  letter-spacing: 1px;\n}\n.about-section p {\n  font-size: 1.2em;\n  color: #666;\n}\nfooter {\n  background: #2c3e50;\n  color: #fff;\n  text-align: center;\n  padding: 20px;\n  font-size: 0.9em;\n  width: 100%;\n  box-sizing: border-box;\n}\nfooter a {\n  color: #1abc9c;\n  text-decoration: none;\n}\nfooter a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=homepage.component-USALWD3V.css.map */\n';

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
  getServices() {
    return this.http.get(this.produseUrl);
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

// src/components/homepage/homepage.component.ts
var HomepageComponent = class HomepageComponent2 {
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
    this.ctorParameters = () => [
      { type: ProduseService }
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
var navbar_component_default = '<nav class="navbar">\r\n  <div class="container">\r\n    <ul class="nav-links">\r\n      <li><a routerLink="/">Home</a></li>\r\n      <li><a routerLink="/contact">Contact</a></li>\r\n      <li><a routerLink="/products">Products</a></li>\r\n    </ul>\r\n\r\n    <!-- Co\u0219ul de cump\u0103r\u0103turi la dreapta cu text -->\r\n    <div class="cart-container">\r\n      <a routerLink="/cart">\r\n      <span class="cart-text">Cart</span>\r\n        <img src="assets/cart-icon.png" alt="Cart" class="cart-icon">\r\n      </a>\r\n    </div>\r\n  </div>\r\n</nav>\r\n';

// angular:jit:style:file:src\components\navbar\navbar.component.scss
var navbar_component_default2 = '@charset "UTF-8";\n\n/* src/components/navbar/navbar.component.scss */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.navbar {\n  background-color: #333;\n  color: #fff;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n.container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.nav-links {\n  list-style: none;\n  display: flex;\n  margin: 0;\n  padding: 0;\n}\n.nav-links li {\n  margin-right: 20px;\n}\n.nav-links a {\n  color: #fff;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.nav-links a:hover {\n  color: #00bcd4;\n}\n.cart-container {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n}\n.cart-text {\n  color: white;\n  font-size: 16px;\n  margin-right: 8px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.cart-icon {\n  width: 35px;\n  height: 35px;\n  cursor: pointer;\n  transition: transform 0.2s ease-in-out;\n  vertical-align: middle;\n}\n.cart-icon:hover {\n  transform: scale(1.1);\n}\n/*# sourceMappingURL=navbar.component-ZUHLZAQ3.css.map */\n';

// src/components/navbar/navbar.component.ts
var NavbarComponent = class NavbarComponent2 {
};
NavbarComponent = __decorate([
  Component({
    selector: "app-navbar",
    standalone: true,
    imports: [RouterOutlet, RouterLink],
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

// src/components/cart/cart.service.ts
var CartService = class CartService2 {
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
    this.ctorParameters = () => [];
  }
};
CartService = __decorate([
  Injectable({
    providedIn: "root"
  })
], CartService);

// src/components/produse/produse.component.ts
var ProduseComponent = class ProduseComponent2 {
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
    imports: [CommonModule, RouterOutlet, RouterLink],
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
    this.ctorParameters = () => [
      { type: CartService },
      { type: Router }
    ];
  }
};
CartComponent = __decorate([
  Component({
    selector: "app-cart",
    imports: [CommonModule],
    standalone: true,
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
//# sourceMappingURL=chunk-7FO3MIOM.mjs.map

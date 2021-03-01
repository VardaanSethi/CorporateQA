import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { HttpClientModule } from '@angular/common/http';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            NavigationComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            AuthenticationModule,
            HttpClientModule,
            NgbModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
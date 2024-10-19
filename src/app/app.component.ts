import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginPageComponent, MainPageComponent, NavbarComponent],
  template: `
  <app-navbar/>
  <router-outlet/>`
})
export class AppComponent {
  title = 'json-converter';
}

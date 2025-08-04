import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TopBarComponent } from './top-bar/top-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TopBarComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    TopBarComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent
  ]
})
export class LayoutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { ProductTabsComponent } from './components/product-tabs/product-tabs.component';
import { FeaturedCategoriesComponent } from './components/featured-categories/featured-categories.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HomeComponent,
    HeroBannerComponent,
    ProductTabsComponent,
    FeaturedCategoriesComponent,
    CollectionsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbCarouselModule
  ]
})
export class HomeModule { }

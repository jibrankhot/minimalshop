import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { ProductTabsComponent } from './components/product-tabs/product-tabs.component';
import { PromoBannersComponent } from './components/promo-banners/promo-banners.component';
import { FeaturedCategoriesComponent } from './components/featured-categories/featured-categories.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { BrandCarouselComponent } from './components/brand-carousel/brand-carousel.component';

@NgModule({
  declarations: [HomeComponent, HeroBannerComponent, CollectionsComponent, ProductTabsComponent, PromoBannersComponent, FeaturedCategoriesComponent, NewsletterComponent, BrandCarouselComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../shared/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('collectionsSection') collectionsSection!: ElementRef;
  @ViewChild('productTabs') productTabs!: ElementRef;

  featuredProduct: Product = {
    id: 1,
    name: 'Summer Linen Shirt',
    desc: 'Step into the new season with our effortlessly stylish outerwear collection, made for comfort and class.',
    image: 'assets/images/image1.webp',
    price: '₹1,999'
  };

  updateFeaturedProduct(product: Product) {
    this.featuredProduct = { ...product };

    setTimeout(() => {
      const section = this.collectionsSection?.nativeElement;
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });

      section.classList.add('flash-focus');
      setTimeout(() => section.classList.remove('flash-focus'), 1000);
    }, 150);
  }

  scrollToProductTabs() {
    this.productTabs?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

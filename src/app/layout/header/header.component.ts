import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { faSearch, faHeart, faShoppingBag, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faSearch = faSearch;
  faHeart = faHeart;
  faShoppingBag = faShoppingBag;
  faBars = faBars;
  faTimes = faTimes;

  isHeaderHidden = false;
  lastScroll = 0;
  isMobile = false;
  isMobileMenuOpen = false;
  activeDropdown: string | null = null;
  cartCount = 0;

  newProducts = [
    {
      id: 1,
      name: 'Casual Striped Shirt',
      price: '$39.99',
      desc: 'Step into the new season with our effortlessly stylish outerwear collection, made for comfort and class.',
      img: 'assets/images/image1.webp'
    },
    {
      id: 2,
      name: 'Vintage Denim Jacket',
      price: '$59.00',
      desc: 'Step into the new season with our effortlessly stylish outerwear collection, made for comfort and class.',
      img: 'assets/images/image2.webp'
    },
    {
      id: 3,
      name: 'Floral Summer Dress',
      price: '$49.99',
      desc: 'Step into the new season with our effortlessly stylish outerwear collection, made for comfort and class.',
      img: 'assets/images/image3.webp'
    },
    {
      id: 4,
      name: 'Classic White Tee',
      price: '$19.99',
      desc: 'Step into the new season with our effortlessly stylish outerwear collection, made for comfort and class.',
      img: 'assets/images/image4.webp'
    }
  ];

  featuredProduct = this.newProducts[1];

  constructor(private router: Router, private cartService: CartService) {
    this.checkIsMobile();
  }

  ngOnInit(): void {
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.checkIsMobile();
  }

  checkIsMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

  toggleDropdown(menu: string) {
    if (this.isMobile) {
      this.activeDropdown = this.activeDropdown === menu ? null : menu;
    }
  }

  isDropdownActive(menu: string): boolean {
    return this.isMobile && this.activeDropdown === menu;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.activeDropdown = null;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    const clickedInsideNav = target.closest('nav.main-nav');
    const clickedToggle = target.closest('.mobile-toggle');
    if (!clickedInsideNav && !clickedToggle && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    this.isHeaderHidden = currentScroll > this.lastScroll && currentScroll > 100;
    this.lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  }

  onNewProductClick(product: any) {
    this.featuredProduct = product;
  }

  onFeaturedProductClick(product: any) {
    this.router.navigate(['/product', product.id]);
    this.closeMobileMenu();
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandCarouselComponent } from './brand-carousel.component';

describe('BrandCarouselComponent', () => {
  let component: BrandCarouselComponent;
  let fixture: ComponentFixture<BrandCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandCarouselComponent]
    });
    fixture = TestBed.createComponent(BrandCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

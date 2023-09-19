import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPreviewCardComponent } from './product-preview-card.component';

describe('ProductPreviewCardComponent', () => {
  let component: ProductPreviewCardComponent;
  let fixture: ComponentFixture<ProductPreviewCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPreviewCardComponent]
    });
    fixture = TestBed.createComponent(ProductPreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

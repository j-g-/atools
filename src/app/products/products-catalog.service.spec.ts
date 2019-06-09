import { TestBed } from '@angular/core/testing';

import { ProductsCatalogService } from './products-catalog.service';

describe('ProductsCatalogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsCatalogService = TestBed.get(ProductsCatalogService);
    expect(service).toBeTruthy();
  });
});

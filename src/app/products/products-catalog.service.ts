import { Injectable } from '@angular/core';
import { ProductInfo } from './product-info';
import { Catalog } from './catalog';

@Injectable({
  providedIn: 'root'
})
export class ProductsCatalogService {
  currentProducts:Map<string,ProductInfo>;
  catalog:Catalog;
  constructor() { 
    this.catalog = new Catalog();
    this.currentProducts = this.catalog.getCurrentProducts();
  }
}

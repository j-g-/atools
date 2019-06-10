import { Component, OnInit } from '@angular/core';
import { ProductsCatalogService } from 'src/app/products/products-catalog.service';
import { Catalog } from 'src/app/products/catalog';

@Component({
  selector: 'app-sale-editor',
  templateUrl: './sale-editor.component.html',
  styleUrls: ['./sale-editor.component.css']
})
export class SaleEditorComponent implements OnInit {
  productsCatalog:Catalog; 
  productNames:Iterator<string>; 

  constructor(private productsCatalogServie:ProductsCatalogService) { }

  ngOnInit() {
    this.productsCatalog = this.productsCatalogServie.catalog;
    this.productNames = this.productsCatalog.getCurrentProducts().keys();
      
  }

}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: any[]

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(res => {
      console.log(JSON.stringify(res))
      this.products = Object.values(res)
    }
    )
  }

}

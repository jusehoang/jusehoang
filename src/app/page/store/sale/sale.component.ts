import { Component, OnInit } from '@angular/core';
import { BillService } from 'src/app/@services/bill.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

  constructor(private billingService: BillService) { }

  ngOnInit(): void {
    this.billingService.getSale().subscribe(data => {
      console.log(data);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/@core/models/bill.model';
import { BillService } from 'src/app/@services/bill.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {
  listBill!: Bill[];
  constructor(private billingService: BillService) { }

  ngOnInit(): void {
    const id = localStorage.getItem('id')
    if(id){
      this.billingService.getSale(id).subscribe(data => {
        this.listBill = data.list_bill
      })
    }
  }

}

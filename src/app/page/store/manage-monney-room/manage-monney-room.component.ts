import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/@core/models/bill.model';
import { Room } from 'src/app/@core/models/room.model';
import { BillService } from 'src/app/@services/bill.service';
import { MessageService } from 'src/app/@services/message.service';

@Component({
  selector: 'app-manage-monney-room',
  templateUrl: './manage-monney-room.component.html',
  styleUrls: ['./manage-monney-room.component.scss']
})
export class ManageMonneyRoomComponent implements OnInit {
  listBill!: Bill[];
  constructor(
    private billService: BillService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    const id = localStorage.getItem('id')
    if(id){
      this.billService.getSale(id).subscribe(data => {
        this.listBill = data.list_bill.filter((item) => item.status == 'UNPAID')
      })
    }
  }

  updateBill(id: number) {
    this.billService.updateStatus(id).subscribe(data => {
      this.messageService.showMessage({
        content: 'Cập nhật thành công'
      });
      this.billService.getBill("UNPAID").subscribe(data => {
        this.listBill = data.content;
      })
    })
  }

}

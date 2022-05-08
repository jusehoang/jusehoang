import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Room } from 'src/app/@core/models/room.model';
import { BillService } from 'src/app/@services/bill.service';
import { MessageService } from 'src/app/@services/message.service';
import { RoomService } from 'src/app/@services/room.service';

@Component({
  selector: 'app-manage-book-room',
  templateUrl: './manage-book-room.component.html',
  styleUrls: ['./manage-book-room.component.scss']
})
export class ManageBookRoomComponent implements OnInit {
  listRoom!: Room[];
  isVisible = false;
  id = '';
  form!: FormGroup;
  dateFormat='MM';
  date = '';
  constructor(
    private roomService: RoomService,
    private router: Router,
    private fb: FormBuilder,
    private bill: BillService,
    private messageService: MessageService
  ) {
    this.form = fb.group({
      month: ['', Validators.required],
      year: ['', Validators.required],
      electric_number: ['', Validators.required],
      water_number: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.roomService.getRoomHire().subscribe(room => {
      this.listRoom = room;
    })
  }

  addBill(id: string){
    this.router.navigate(['store', 'add-bill'], {queryParams: {id: id}})
  }

  showModal(id: string){
    this.id = id;
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    this.form.patchValue({
      month: month,
      year: year
    });
    this.isVisible = true;
  }

  handleCancel(){
    this.isVisible = false;
  }

  handleOk(){
    this.addBill1();
  }

  addBill1(){
    if(this.form.invalid){
      Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    } else {
        this.bill.createBillCheckout(this.id, this.form.value.month, this.form.value.year, this.form.value.electric_number, this.form.value.water_number, 1).subscribe(data => {
          this.messageService.showMessage({
            content: 'Bạn đã trả phòng thành công'
          });
          this
        })
    }
  }
}

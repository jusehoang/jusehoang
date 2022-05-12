import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BillService } from 'src/app/@services/bill.service';
import { MessageService } from 'src/app/@services/message.service';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss']
})
export class AddBillComponent implements OnInit {
  form: FormGroup;
  dateFormat='MM';
  date = '';
  id!: string | null;
  constructor(private fb: FormBuilder, private bill: BillService, private activeRoute: ActivatedRoute, private messageService: MessageService) {
    this.form = fb.group({
      month: ['', Validators.required],
      year: ['', Validators.required],
      electric_number: ['', Validators.required],
      water_number: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe(params => {
      const id = params.get('id');
      if(id){
        this.id = params.get('id');
      }
    })
  }

  addBill(){
    if(this.form.invalid){
      Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    } else {
      if(this.id !== null){
        this.bill.createBill(this.id, this.form.value.month, this.form.value.year, this.form.value.electric_number, this.form.value.water_number, 1).subscribe({
          next: () => {
            this.messageService.showMessage({
              content: 'Tạo hóa đơn thành công'
            })
          },
          error: (error) => {
            this.messageService.showMessage({
              content: error
            })
          }
        })
      }
    }
  }
}

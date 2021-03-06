import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BillService } from 'src/app/@services/bill.service';

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.scss']
})
export class EditBillComponent implements OnInit {
  form: FormGroup;
  dateFormat='MM';
  date = '';
  id!: string | null;
  constructor(private fb: FormBuilder, private bill: BillService, private activeRoute: ActivatedRoute) {
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
        this.bill.createBill(this.id, this.form.value.month, this.form.value.year, this.form.value.electric_number, this.form.value.water_number, 1).subscribe(data => {
          console.log(data);
        })
      }
    }
  }
}

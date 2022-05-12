import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Room } from 'src/app/@core/models/room.model';
import { MessageService } from 'src/app/@services/message.service';
import { RoomService } from 'src/app/@services/room.service';
import { UserService } from 'src/app/@services/user.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit {
  room!: Room;
  visible = false;
  isVisible = false;
  formBookRoom: FormGroup;
  isLogin = false;
  dateFormat = 'dd/MM/yyyy';
  id: string | null = null;
  constructor(
    private fb: FormBuilder,
    private user: UserService,
    private message: MessageService,
    private router: Router,
    private roomService: RoomService,
    private activeRoute: ActivatedRoute) {
    this.user.isLogin.subscribe(data => {
      this.isLogin = data;
    })
    this.formBookRoom = this.fb.group({
      fullName: ['', Validators.required],
      tel: ['', Validators.required],
      startDate: ['', Validators.required],
      note: ['']
    })
   }

  ngOnInit(): void {
    // this.roomService.getRoomById()
    // this.activeRoute.paramMap.pipe(
    //   map(params => params.get('id')),
    //   switchMap(id => this.roomService.getRoomById(id))
    // )
    this.activeRoute.queryParamMap.subscribe(params => {
      this.id  = params.get('id');
      console.log(this.id);
      if(this.id != null){
        this.roomService.getRoomById(this.id).subscribe(data => {
          this.room = data;
        })
      }
    })
  }

  handleCancel() {
    this.isVisible = false;
  }

  handleOk() {
    if(this.formBookRoom.invalid){
      Object.values(this.formBookRoom.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    } else {
      if(this.id != null){
        this.roomService.bookRoom(this.id, 'approved', this.formBookRoom.value.startDate, this.formBookRoom.value.note).subscribe({
          next: () => {
            this.message.showMessage({
              content: 'Bạn đã đặt phòng thành công'
            })
          },
          error: (error) => {
            this.message.showMessage({
              content: error
            })
          }
        });
      }
    }
  }

  showModal(): void {
    console.log(this.isLogin)
    if(!this.isLogin) {
      this.message.showConfirmMessage({content: 'Để muốn đặt phòng bạn phải đăng nhập. Bạn có muốn đăng nhập không?', okText: 'Yes'}).subscribe(
        (confirm) => {
          if(confirm) {
            this.router.navigate(['/login']);
          }
        }
      )
    } else {
      this.isVisible = true;
    }

  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { ModalOptions, NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { assignIn } from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private readonly messageObjects$ = new BehaviorSubject<any>(null);
  private readonly messages: Message[] = [];
  constructor(private readonly modalService: NzModalService) {
  }

  getMessageObservable(): Observable<any> {
    return this.messageObjects$.asObservable();
  }

  showConfirmMessage(message: Message): Observable<boolean> {
    return new Observable<boolean>((subscriber) => {
      this.modalService.confirm(this.calculateModalOptions({...message, isConfirm: true}, subscriber));
    })
  }

  showMessage(message: Message) {
    if(!message.type) {
      message.type = 'info';
    }
    const isMessageExist = this.messages.some((item) => item.content === message.content && item.type === message.type);
    if(isMessageExist) {
      return
    }
    this.messages.push(message);
    if(this.messages.length === 1){
      this.showModal(message);
    }
  }

  private showModal(message: Message) {
    let modalRef: NzModalRef;
    switch (message.type) {
      case 'info':
        modalRef = this.modalService.info(this.calculateModalOptions(message));
        break;
      case 'success':
        modalRef = this.modalService.success(this.calculateModalOptions(message));
        break;
      case 'error':
      case 'danger':
        modalRef = this.modalService.error(this.calculateModalOptions(message));
        break;
      case 'warning':
        modalRef = this.modalService.warning(this.calculateModalOptions(message));
        break;
      default :
        modalRef = this.modalService.info(this.calculateModalOptions(message));
        break;
    }
  }

  private calculateModalOptions(message: Message, subscriber?: Subscriber<boolean>): ModalOptions {
    const m: Message = assignIn({}, DEFAULT_MESSAGE, message);
    const options: ModalOptions = {
      nzTitle: m.title,
      nzContent: m.content,
      nzOkText: m.okText,
      nzCancelText: m.isConfirm ? m.cancelText : null,
      nzOkDanger: message.type === 'danger',
      nzCentered: true,
      nzOnOk: () => {
        if(subscriber) {
          subscriber.next(true);
          subscriber.complete();
        }
      },
      nzOnCancel: () => {
        if(subscriber) {
          subscriber.next(false);
          subscriber.complete();
        }
      }
    }

    return options;
  }
}

export interface Message {
  title?: string;
  content: string;
  okText?: string;
  cancelText?: string;
  isConfirm?: boolean;
  type?: 'info' | 'success' | 'error' | 'warning' | 'danger' | null;
}

const DEFAULT_MESSAGE: Message = {
  content: '',
  okText: 'OK',
  cancelText: 'No'
}

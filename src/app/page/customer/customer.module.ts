import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ThemesModule } from "src/app/@themes/themes.module";
import { HistoryBookRoomComponent } from "./history-book-room/history-book-room.component";
import { ManageBookRoomComponent } from './manage-book-room/manage-book-room.component';
import { RequestToStoreComponent } from './request-to-store/request-to-store.component';

@NgModule({
  declarations: [HistoryBookRoomComponent, ManageBookRoomComponent, RequestToStoreComponent],
  imports: [CommonModule, ThemesModule, RouterModule]
})
export class CustomerModule {}

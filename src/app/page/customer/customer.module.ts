import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ThemesModule } from "src/app/@themes/themes.module";
import { HistoryBookRoomComponent } from "./history-book-room/history-book-room.component";
import { ManageBookRoomComponent } from './manage-book-room/manage-book-room.component';

@NgModule({
  declarations: [HistoryBookRoomComponent, ManageBookRoomComponent],
  imports: [CommonModule, ThemesModule]
})
export class CustomerModule {}

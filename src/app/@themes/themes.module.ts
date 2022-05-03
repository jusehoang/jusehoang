import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HeaderComponent } from './header/header.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

const MODULES = [
  NzButtonModule,
  NzMenuModule,
  NzIconModule,
  NzDropDownModule,
  NzCarouselModule,
  NzLayoutModule,
  NzAvatarModule,
  NzCardModule,
  NzFormModule,
  NzInputModule,
  NzDatePickerModule,
  NzTypographyModule,
  NzGridModule,
  NzPaginationModule,
  NzImageModule,
  NzDrawerModule,
  NzListModule,
  NzModalModule,
  NzTableModule,
  NzSelectModule,
  NzSpaceModule,
  NzUploadModule,
  NzNotificationModule
]

const COMPONENTS = [HeaderComponent]

@NgModule({
  imports: [...MODULES, CommonModule, RouterModule],
  exports: [...MODULES, ...COMPONENTS],
  declarations: [
    ...COMPONENTS
  ]
})
export class ThemesModule {}

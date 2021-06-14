import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbSidebarModule,
  NbLayoutModule,
  NbMenuModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { ChartModule } from 'angular2-chartjs';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AdminComponent } from './admin.component';
import { InprogressEmailsComponent } from './email/inprogress-emails/inprogress-emails.component';
import {MatTableModule} from '@angular/material/table'; 

@NgModule({
  imports: [
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    MatTableModule,
  ],
  declarations: [
    AdminComponent,
    InprogressEmailsComponent
  ],
  providers: [
    
  ],
})
export class AdminModule { }

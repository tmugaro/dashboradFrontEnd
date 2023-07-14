import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    NgxEchartsModule.forRoot({
     
      echarts: () => import('echarts'),
    }),
  ],
  imports: [
    NgxEchartsModule.forRoot({ echarts }),
  ],

})
export class AppModule { }

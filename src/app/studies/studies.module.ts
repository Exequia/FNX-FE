import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

import { StudiesRoutingModule } from './studies-routing.module';
import { HomeComponent } from './home/home.component';
import { TimeLineComponent } from './time-line/time-line.component';

@NgModule({
  imports: [
    CommonModule,
    StudiesRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [HomeComponent, TimeLineComponent]
})
export class StudiesModule {}

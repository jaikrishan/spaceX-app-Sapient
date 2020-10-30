import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SpacexDetailsComponent } from './spacex-details/spacex-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {SpacexService} from './spacex.service';
@NgModule({
  declarations: [
    AppComponent,
    SpacexDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SpacexService],
  bootstrap: [AppComponent]
})
export class AppModule { }

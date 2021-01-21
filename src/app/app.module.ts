import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { GroupfilterPipe } from './shared/pipes/groupfilter.pipe';
// import { UserfilterPipe } from './users/pipes/userfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TestComponent,
    HeaderComponent,
    GroupfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

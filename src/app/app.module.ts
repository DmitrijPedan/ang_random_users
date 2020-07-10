import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { registerLocaleData } from "@angular/common";
import LocaleRu from '@angular/common/locales/ru';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LoggerComponent } from './logger/logger.component';

registerLocaleData(LocaleRu, 'ru');

@NgModule({
  declarations: [ AppComponent, UsersComponent, UserDetailComponent, AddUserComponent, LoggerComponent ],
  imports: [ BrowserModule, HttpClientModule, FormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

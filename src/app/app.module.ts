import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './myComponents/form/form.component';
import { LoginStuComponent } from './myComponents/login-stu/login-stu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFacComponent } from './myComponents/login-fac/login-fac.component';
import { FacHomeComponent } from './myComponents/fac-home/fac-home.component';
import { StudentListComponent } from './myComponents/student-list/student-list.component';
import { QuestionCardComponent } from './myComponents/question-card/question-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginStuComponent,
    LoginFacComponent,
    FacHomeComponent,
    StudentListComponent,
    QuestionCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

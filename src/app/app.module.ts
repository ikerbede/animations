import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  declarations: [AppComponent, OpenCloseComponent, TodosComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

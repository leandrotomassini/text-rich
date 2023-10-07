import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, EditorModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

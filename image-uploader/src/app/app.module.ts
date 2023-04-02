import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { UploadComponent } from './components/upload/upload.component';
import { UploadedComponent } from './components/uploaded/uploaded.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RootComponent } from './components/root/root.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import { DragAndDropDirective } from './directives/drag-and-drop.directive';

@NgModule({
  declarations: [
    UploadComponent,
    UploadedComponent,
    LoadingComponent,
    RootComponent,
    FooterComponent,
    DragAndDropDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }

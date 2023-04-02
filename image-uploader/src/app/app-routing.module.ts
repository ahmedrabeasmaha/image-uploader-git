import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UploadComponent} from "./components/upload/upload.component";
import {UploadedComponent} from "./components/uploaded/uploaded.component";

const routes: Routes = [
  { path: '', component: UploadComponent },
  { path: 'image', component: UploadedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

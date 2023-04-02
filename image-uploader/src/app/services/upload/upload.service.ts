import {Injectable} from '@angular/core';
import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Image} from "../../interfaces/image";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private _http: HttpClient) {
  }

  addImage(image: FormData): Observable<Image> {
    return this._http.post<Image>(`${environment.apiUrl}image/add`, image).pipe();
  }
}

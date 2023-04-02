import {AfterViewInit, Component} from '@angular/core';
import {LoadingService} from "../../services/loading/loading.service";
import {Router} from "@angular/router";
import {UploadService} from "../../services/upload/upload.service";
import {Image} from "../../interfaces/image";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})

export class UploadComponent {
  loading: LoadingService;

  constructor(private _loading: LoadingService, private _router: Router, private _upload: UploadService) {
    this.loading = _loading;
  }

  private async uploadFile(file: File): Promise<void> {
    this.loading.setLoading(true);
    const formData: FormData = new FormData();
    formData.append('image', file);
    await this._upload.addImage(formData).subscribe({
      next: (res: Image) => {
        this._router.navigate(['image'], {state: {link: res.image}});
      }
    });
  }

  async onDrop(event: Array<File>): Promise<void> {
    await this.uploadFile(event[0]);
  }

  async onChange(event: Event): Promise<void> {
    const file: HTMLInputElement = event.target as HTMLInputElement;
    await this.uploadFile(file.files![0]);
  }

}

import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoadingService} from "../../services/loading/loading.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-uploaded',
  templateUrl: './uploaded.component.html',
  styleUrls: ['./uploaded.component.scss']
})
export class UploadedComponent implements OnInit {
  image!: string;
  link!: string;
  active: boolean = false;

  constructor(private _loading: LoadingService, private _router: Router) {
    this.link = this._router.getCurrentNavigation()!.extras.state!['link'];
  }

  ngOnInit(): void {
    this._loading.setLoading(false);
    this.image = environment.imageUrl + this.link;
  }

  async copyLink() {
    await navigator.clipboard.writeText(environment.imageUrl + this.link);
    this.active = true;
    setTimeout(() => {
      this.active = false;
    }, 5000);
  }

  closeCopy() {
    this.active = false;
  }

}

import {Component} from '@angular/core';
import {LoadingService} from "../../services/loading/loading.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  loading!: LoadingService;

  constructor(private _loading: LoadingService) {
    this.loading = _loading;
  }
}

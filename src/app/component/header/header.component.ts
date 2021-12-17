import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthorizationService } from '../services/authorization/authorization.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public title: string = "food & cooking"
  public authUser!: boolean


  constructor(
    private _authorizationService: AuthorizationService
  ) {

  }

  ngOnInit(): void {
    if (this._authorizationService.authUserLocal) {
      this.authUser = this._authorizationService.authUserLocal
    } else {
      this.authUser = false
    }
  }

}

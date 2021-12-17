import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './component/services/authorization/authorization.service';
import { FavoritesDataService } from './component/services/favorites-data/favorites-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public userInfoFromLocalJSON: string = localStorage.getItem('user') as string
  public userInfoFromLocal!: any

  constructor(
    private _authorizationService: AuthorizationService
  ) { }

  ngOnInit(): void {
    if (this.userInfoFromLocalJSON !== null && this.userInfoFromLocalJSON !== '') {
      this.userInfoFromLocal = JSON.parse(this.userInfoFromLocalJSON)
      this._authorizationService.authUserLocal = this.userInfoFromLocal['auth']
      this._authorizationService.infoUserLocal = this.userInfoFromLocal['user']
    } else {
      this._authorizationService.authUserLocal = false
    }
  }

}

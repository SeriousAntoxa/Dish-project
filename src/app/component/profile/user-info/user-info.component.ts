import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization/authorization.service';
import { User } from '../model/UserModel';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  public user!: User

  constructor(
    private _router: Router,
    private _authorizationService: AuthorizationService,
  ) { }

  ngOnInit(): void {
    console.log(this._authorizationService.authUserLocal);
    console.log(this._authorizationService.infoUserLocal);
    
    if (this._authorizationService.authUserLocal === true) {
      this.user = this._authorizationService.infoUserLocal
    }
  }

  exit() {
    this._router.navigate(['/'])
    localStorage.clear()
    this._authorizationService.authUserLocal = false
 }
}

import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization/authorization.service';
import { User } from '../../profile/model/UserModel';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  @Input() authUser!: boolean
  public user!: User
 
  constructor(
    public authorizationService: AuthorizationService
  ) { 
    this.user = this.authorizationService.infoUserLocal
  }

  ngOnInit(): void {
  
    if (this.authorizationService.authUserLocal) {
      this.authUser = this.authorizationService.authUserLocal
    } else {
      this.authUser = false
    }
  }

}

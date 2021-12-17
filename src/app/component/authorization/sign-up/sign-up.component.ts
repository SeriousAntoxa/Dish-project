import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from '../../guards/message/message.guard';
import { AuthorizationService } from '../../services/authorization/authorization.service';
import { User } from '../../profile/model/UserModel';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, ComponentCanDeactivate {

  public userName: string = ''
  public userPassword: string = ''
  public userEmail: string = ''

  public disabledFormBtn: string = 'singUpFormName.untouched || singUpFormPassword.untouched || singUpFormName.invalid && singUpFormName.touched || singUpFormPassword.invalid && singUpFormPassword.touched'

  constructor(
    private _router: Router,
    private _authorizationService: AuthorizationService
  ) { }

  ngOnInit(): void {
  }

  public submit(): void {
    const user: User = {
      name: this.userName,
      password: this.userPassword,
      email: this.userEmail,
    }

    if (this.userName !== '') {
      this._authorizationService.validUser().subscribe(usersArr => {
        let validUser = usersArr.find((item: string) => item == this.userName)

        if (validUser === undefined) {
          this._authorizationService.createUser(user).subscribe(newUser => {
            console.log('user add', newUser)
            this._router.navigate(['/log-in'])
          })
        } else {
          console.log(`имя ${this.userName} занято`);
        }

      })
    }
  }

  canDeactivate(): boolean | Observable<boolean> {
    return confirm("Exit page?");
  }
}

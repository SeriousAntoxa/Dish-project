import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from '../../guards/message/message.guard';
import { AuthorizationService } from '../../services/authorization/authorization.service';
import { FavoritesDataService } from '../../services/favorites-data/favorites-data.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit, ComponentCanDeactivate {

  public userName: string | null = ''
  public userPassword: string | null = ''

  constructor(
    private _router: Router,
    private _authorizationService: AuthorizationService,
    private favoritesDataService: FavoritesDataService,
  ) { }

  ngOnInit(): void {
  }

  public submit(): void {
    if (this.userName !== '') {
      this._authorizationService.validUser().subscribe(usersArr => {
        let validUser = usersArr.find((item: string) => item == this.userName)

        if (validUser !== undefined) {
          this._authorizationService.getUsers(validUser).subscribe((item: any) => {

            if (item[0].password === this.userPassword) {
              let ourUser = {
                user: item[0],
                auth: true
              }
              this._router.navigate(['/home'])
              localStorage.clear()
              localStorage.setItem("user", JSON.stringify(ourUser))
              this._authorizationService.authUserLocal = true
            } else {
              console.log(`пароль не верный`);
            }
          })

        } else {
          console.log(`Пользователь ${this.userName} не найден`);
        }
      })
    }
  }

  public signUp(): void {
    this._router.navigate(['/sign-up'])
  }

  canDeactivate(): boolean | Observable<boolean> {
    return confirm("Exit page?");
  }
}

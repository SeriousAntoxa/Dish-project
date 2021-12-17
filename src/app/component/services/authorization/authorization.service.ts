import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { find, map } from 'rxjs/operators';
import { User } from '../../profile/model/UserModel';



export interface CreateUser {
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  public authUserLocal: boolean = false
  public infoUserLocal!: User

  static UrlUsersDb = "https://dishapp-users-default-rtdb.firebaseio.com/"

  constructor(
    private _httpClient: HttpClient
  ) { }

  createUser(user: User): Observable<User> {
    return this._httpClient.post<CreateUser>(`${AuthorizationService.UrlUsersDb}/users/${user.name}.json`, user)
      .pipe(map(res => {
        return { ...user, id: res.name }
      }))
  }

  validUser(): Observable<any> {
    return this._httpClient.get<any>(`${AuthorizationService.UrlUsersDb}/users.json`)
      .pipe(map((users) => {
        return Object.keys(users)
      }))
  }

  getUsers(name: string): Observable<any> {
    return this._httpClient.get<any>(`${AuthorizationService.UrlUsersDb}/users/${name}.json`)
      .pipe(map(user => {
        return Object.values(user)
      }))
  }

}

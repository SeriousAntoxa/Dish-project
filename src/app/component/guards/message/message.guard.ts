import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class MessageGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean {
    return component.canDeactivate()
  }

}

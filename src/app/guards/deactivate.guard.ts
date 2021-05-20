import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {RegistrationComponent} from '../main/registration/registration.component';
import {RecoverComponent} from '../main/recover/recover.component';
import {ContactsComponent} from '../main/contacts/contacts.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<RegistrationComponent | ContactsComponent> {
  canDeactivate(
    component: RegistrationComponent | RecoverComponent | ContactsComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return confirm('Changes will not be saved. Are you sure you want to leave this page?');
  }
}

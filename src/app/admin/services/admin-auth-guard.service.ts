import { UserService } from 'src/app/shared/services/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$.pipe(
      map( appUser => appUser.isAdmin )
    );
  }
}

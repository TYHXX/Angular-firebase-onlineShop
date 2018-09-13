import { UserService } from 'src/app/shared/services/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService, private auth: AuthService, router: Router) {
    auth.user$.subscribe(user => {
      if (user) {
        userService.save(user);

        const returnUrl = localStorage.getItem('returnUrl');
        if (returnUrl) {
          localStorage.removeItem('returnUrl');
          router.navigateByUrl(returnUrl);
        }
      }
    });
  }

  ngOnInit() {
    // this.auth.logout();
  }
    
}

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
     // this.authService.login(this.email,this.password).subscribe(user => console.log(user));
    this.authService.login(this.email,this.password).subscribe(user => this.router.navigateByUrl('/ideas'));
  }

  registration() {
    this.authService.registration();
  }
}

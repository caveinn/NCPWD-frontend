import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;
  email = '';
  password = '';

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.logIn(this.email, this.password).subscribe( user => {
      console.log(user);
      this.router.navigate(['main']);

    }, err => {
      console.log('found an error', err);
    }, () => {
      console.log('call completed');
    });
  }

}

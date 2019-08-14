import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  submitted = false;
  user = new User('', '', '');
  constructor(private userService: UserService, private  router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    this.userService.signUp(this.user).subscribe(user => this.router.navigate(['login']));
  }

}

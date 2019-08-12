import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  submitted = false;
  user = new User('', '', '');
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    this.userService.signUp(this.user).subscribe(user => console.log(user))
    console.log('submitted');
  }

}

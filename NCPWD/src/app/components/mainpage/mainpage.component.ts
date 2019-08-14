import { Component, OnInit } from '@angular/core';
import {Topic} from '../../models/topic';
import { MainpageService} from '../../services/mainpage.service';
import { UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {Profile} from '../../models/profile';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  topics: Topic [];
  profiles: Profile[];

  getTopics(): void {
    this.mainPageService.getTopics().subscribe(topics => {
      this.topics = topics; console.log(topics); }, err => console.log('an error occured', err),
      () => console.log('completed'));
  }
  getUsers(): void {
    this.userService.getProfiles().subscribe(profiles => this.profiles = profiles, err => console.log(err));
  }

  constructor(private mainPageService: MainpageService, private userService: UserService) { }

  ngOnInit() {
    this.getTopics();
    this.getUsers();
  }

}

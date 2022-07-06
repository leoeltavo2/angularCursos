import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [AuthService]
})
export class ProfileComponent implements OnInit {

  public isLogged = true;
  public user: any;
  constructor(private authSVC: AuthService) { }

  async ngOnInit() {
    this.user = await this.authSVC.getCurrentUser();
  }

}

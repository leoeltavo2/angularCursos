import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[AuthService]
})
export class HeaderComponent implements OnInit {


  public isLogged = false;
  public user: any;
  constructor(private authSVC: AuthService) { }

  async ngOnInit() {
  this.user = await this.authSVC.getCurrentUser();
  if(this.user){
    this.isLogged = true;
    
    // console.log("el email es--->", user)
  }
  }

  onLogout(){
    this.authSVC.logout();
    
      window.location.reload();
      // this.router.navigate(['']);
    
  }

}

import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  constructor(private router:Router) { }

  goToMenuA(){
    this.router.navigate(['/menu-alumno'])

  }

  ngOnInit() {
  }

}

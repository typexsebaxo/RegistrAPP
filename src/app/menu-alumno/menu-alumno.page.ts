import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-menu-alumno',
  templateUrl: './menu-alumno.page.html',
  styleUrls: ['./menu-alumno.page.scss'],
})
export class MenuAlumnoPage implements OnInit {

  constructor(private router:Router) { }

  goToCamara(){
    this.router.navigate(['/camara'])

  }

  goToAsistencia(){
    this.router.navigate(['/asistencia'])

  }

  ngOnInit() {
  }

}

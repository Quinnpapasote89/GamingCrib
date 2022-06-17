import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

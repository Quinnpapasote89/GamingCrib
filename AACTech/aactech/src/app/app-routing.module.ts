import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginTelComponent } from './login-tel/login-tel.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductosComponent } from './productos/productos.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AdminChartComponent } from './admin-chart/admin-chart.component';
import { VistaComponent } from './vista/vista.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'telefono',component: LoginTelComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin-chart', component:AdminChartComponent},
  {path: 'vista/:id', component: VistaComponent},
  {path: '**',pathMatch:'full',redirectTo:'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

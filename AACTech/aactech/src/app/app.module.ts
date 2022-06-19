import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginTelComponent } from './login-tel/login-tel.component';
import { AdminComponent } from './admin/admin.component';
import { AdminChartComponent } from './admin-chart/admin-chart.component';
import { VistaComponent } from './vista/vista.component';
import { NgChartsModule } from 'ng2-charts';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AdminAddproductoComponent } from './admin-addproducto/admin-addproducto.component';
import { AdminConsulProdComponent } from './admin-consul-prod/admin-consul-prod.component';
import { AdminAddProvComponent } from './admin-add-prov/admin-add-prov.component';
import { AdminConsulProvComponent } from './admin-consul-prov/admin-consul-prov.component';
import { AdminConsulIngresosComponent } from './admin-consul-ingresos/admin-consul-ingresos.component';
import { AdminConsulPedidosComponent } from './admin-consul-pedidos/admin-consul-pedidos.component';
import { HistorialComponent } from './historial/historial.component';
import { DashadminComponent } from './dashadmin/dashadmin.component';
import { AdminProdEditComponent } from './admin-prod-edit/admin-prod-edit.component';
import { StorageModule } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent,
    ProductosComponent,
    ContactoComponent,
    LoginComponent,
    RegisterComponent,
    LoginTelComponent,
    AdminComponent,
    AdminChartComponent,
    VistaComponent,
    AdminAddproductoComponent,
    AdminConsulProdComponent,
    AdminAddProvComponent,
    AdminConsulProvComponent,
    AdminConsulIngresosComponent,
    AdminConsulPedidosComponent,
    HistorialComponent,
    DashadminComponent,
    AdminProdEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgChartsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

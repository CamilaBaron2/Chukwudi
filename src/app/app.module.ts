import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { RestauranteShellComponent } from './restaurante/containers/restaurante-shell/restaurante-shell.component';
import { DeliveryComponent } from './restaurante/components/delivery/delivery.component';
import { CategoriasComponent } from './restaurante/components/categorias/categorias.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './restaurante/components/productos/productos.component';
import { ProductoComponent } from './restaurante/components/producto/producto.component';
import { OrderComponent } from './pedidos/components/order/order.component';
import { PedidosShellComponent } from './pedidos/containers/pedidos-shell/pedidos-shell.component';
import { UserComponent } from './pedidos/components/user/user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RestauranteShellComponent,
    DeliveryComponent,
    CategoriasComponent,
    ProductosComponent,
    ProductoComponent,
    OrderComponent,
    PedidosShellComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

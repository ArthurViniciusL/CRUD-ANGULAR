import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './views/home/home.component';

import { MatCardModule } from '@angular/material/card';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductTableComponent } from './components/product/product-table/product-table.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { AboutCrudComponent } from './views/about-crud/about-crud.component';
import { LicenseComponent } from './views/license/license.component';

import { MatTooltipModule } from '@angular/material/tooltip';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    LicenseComponent,
    AboutCrudComponent,
    ProductTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatTooltipModule,
    CdkScrollable,
    MatSelectModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

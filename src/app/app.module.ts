import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReclamacaoApiService } from './reclamacao-api.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReclamacaoComponent } from './reclamacao/reclamacao.component';
import { AddEditReclamacaoComponent } from './reclamacao/add-edit-reclamacao/add-edit-reclamacao.component';

const routes: Routes = [
  { path: 'reclamacao', component: ReclamacaoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ReclamacaoComponent,
    AddEditReclamacaoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ReclamacaoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

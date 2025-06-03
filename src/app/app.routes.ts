import { Routes } from '@angular/router';
import {Home} from './componente/home/home';
import {Organizador} from './model/organizador';
import {Artista} from './model/artista';

export const routes: Routes = [
  {path: '', component: Home, pathMatch: 'full'},
  {path: 'artista', component: Artista},
  {path: 'organizador', component: Organizador},

];

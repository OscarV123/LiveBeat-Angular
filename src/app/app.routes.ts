import { Routes } from '@angular/router';
import {Home} from './componente/home/home';

// import {Organizador} from './model/organizador';
// import {Artista} from './model/artista';

import {Organizador} from './componente/organizador/organizador';
import {Artista} from './componente/artista/artista';

export const routes: Routes = [
  {path: '', component: Home, pathMatch: 'full'},
  {path: 'artista', component: Artista},
  {path: 'organizador', component: Organizador},

];

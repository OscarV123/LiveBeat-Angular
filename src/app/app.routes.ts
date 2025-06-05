import { Routes } from '@angular/router';
import { LandingPage } from './componente/landing-page/landing-page';
import { Organizador } from './componente/organizador/organizador';
import { Artista } from './componente/artista/artista';
import { SobreNosotros } from './componente/sobre-nosotros/sobre-nosotros';

export const routes: Routes = [
  {path: '', component: LandingPage, pathMatch: 'full'},
  {path: 'artista', component: Artista},
  {path: 'organizador', component: Organizador},
  {path: 'sobre-nosotros', component: SobreNosotros},
];

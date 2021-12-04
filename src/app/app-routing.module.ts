import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'homepagina',
    loadChildren: () => import('./pages/homepagina/homepagina.module').then( m => m.HomepaginaPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'epd',
    loadChildren: () => import('./pages/epd/epd.module').then( m => m.EpdPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'alarmnummer',
    loadChildren: () => import('./pages/alarmnummer/alarmnummer.module').then( m => m.AlarmnummerPageModule)
  },
  {
    path: 'specialist',
    loadChildren: () => import('./pages/specialist/specialist.module').then( m => m.SpecialistPageModule)
  },
  {
    path: 'bloedonderzoek',
    loadChildren: () => import('./pages/bloedonderzoek/bloedonderzoek.module').then( m => m.BloedonderzoekPageModule)
  },
  {
    path: 'afspraakmaken',
    loadChildren: () => import('./pages/afspraakmaken/afspraakmaken.module').then( m => m.AfspraakmakenPageModule)
  },
  {
    path: 'accountmaken',
    loadChildren: () => import('./pages/accountmaken/accountmaken.module').then( m => m.AccountmakenPageModule)
  },
  {
    path: 'berichten',
    loadChildren: () => import('./pages/berichten/berichten.module').then( m => m.BerichtenPageModule)
  },
  {
    path: 'uitloggen',
    loadChildren: () => import('./pages/uitloggen/uitloggen.module').then( m => m.UitloggenPageModule)
  },
  {
    path: 'maakeenaccountaan',
    loadChildren: () => import('./pages/maakeenaccountaan/maakeenaccountaan.module').then( m => m.MaakeenaccountaanPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

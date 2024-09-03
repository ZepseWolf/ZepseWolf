import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Guards
import { AuthGuard } from './services/auth/auth.guard';

// Component's modules
import { HomeModule } from './modules/home/home.module';
import { DigimonModule } from './modules/digimon/digimon.module';
import { EdocModule } from './modules/edoc/edoc.module';
import { MatchingModule } from './modules/matching/matching.module';
import { NaivebayesModule } from './modules/naivebayes/naivebayes.module';
import { NegativecnnModule } from './modules/negativecnn/negativecnn.module';
import { ScopemobileModule } from './modules/scopemobile/scopemobile.module';
import { ScopewebModule } from './modules/scopeweb/scopeweb.module';
import { SingaporeecoModule } from './modules/singaporeeco/singaporeeco.module';
import { SmartcityModule } from './modules/smartcity/smartcity.module';
import { SnapnypModule } from './modules/snapnyp/snapnyp.module';
import { SteganoModule } from './modules/stegano/stegano.module';
import { VtepModule } from './modules/vtep/vtep.module';
import { LorableModule } from './modules/lorable/lorable.module';
import { AirstrikeModule } from './modules/airstrike/airstrike.module';

const routes: Routes = [
  {path: '' , redirectTo: 'home' , pathMatch: 'full' },
  {
    path: 'home',
    loadChildren:() => HomeModule,
    canActivate:[AuthGuard]
  },
  {
    path: 'digimon',
    loadChildren:() => DigimonModule
  },
  {
    path: 'edoc',
    loadChildren:() => EdocModule
  },
  {
    path: 'matching',
    loadChildren:() => MatchingModule
  },
  {
    path: 'naivebayes',
    loadChildren:() => NaivebayesModule
  },
  {
    path: 'negativecnn',
    loadChildren:() => NegativecnnModule
  },
  {
    path: 'scopemobile',
    loadChildren:() => ScopemobileModule
  },
  {
    path: 'scopeweb',
    loadChildren:() => ScopewebModule
  },
  {
    path: 'singaporeeco',
    loadChildren:() => SingaporeecoModule
  },
  {
    path: 'smartcity',
    loadChildren:() => SmartcityModule
  },
  {
    path: 'snapnyp',
    loadChildren:() => SnapnypModule
  },
  {
    path: 'stegano',
    loadChildren:() => SteganoModule
  },
  {
    path: 'vtep',
    loadChildren:() => VtepModule
  },
  {
    path: 'lorable',
    loadChildren:() => LorableModule
  },
  {
    path: 'airstrike',
    loadChildren:() => AirstrikeModule
  },
  {path: '**' , redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

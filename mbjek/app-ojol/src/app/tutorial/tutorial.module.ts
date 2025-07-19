import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TutorialPageRoutingModule } from './tutorial-routing.module';  // Routing spesifik SplashPage
import { TutorialPage } from './tutorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialPageRoutingModule,
    TutorialPage
  ]
})
export class TutorialPageModule {}
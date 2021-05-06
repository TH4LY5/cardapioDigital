import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecionarMesaPageRoutingModule } from './selecionar-mesa-routing.module';

import { SelecionarMesaPage } from './selecionar-mesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecionarMesaPageRoutingModule
  ],
  declarations: [SelecionarMesaPage]
})
export class SelecionarMesaPageModule {}

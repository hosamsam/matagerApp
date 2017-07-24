import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservedshelfsPage } from './reservedshelfs';
import { HsaloaderComponentModule } from '../../components/hsa-loader/hsa-loader.module';
@NgModule({
  declarations: [
    ReservedshelfsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservedshelfsPage),
    HsaloaderComponentModule
  ],
  exports: [
    ReservedshelfsPage
  ]
})
export class ReservedshelfsPageModule {}
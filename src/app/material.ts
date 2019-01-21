import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatButtonModule, MatToolbarModule, MatIconModule,
  MatMenuModule, MatListModule , MatCardModule , MatGridListModule , MatRadioModule , MatTabsModule} from '@angular/material';



@NgModule({
  imports : [MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule, MatCardModule , MatGridListModule ,MatMenuModule, MatRadioModule],
  exports : [MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule , MatCardModule , MatGridListModule ,MatMenuModule, MatRadioModule] ,
})
export class MaterialModule {}
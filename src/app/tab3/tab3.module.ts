import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import {MatChipsModule} from '@angular/material/chips' ;
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    MatChipsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatIconModule,
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}

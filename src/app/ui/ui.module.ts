import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table'; 

import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    CardComponent,
    TableComponent
  ],
  exports: [CardComponent, TableComponent],
  imports: [
    CdkTableModule,
    CommonModule,
  ]
})
export class UiModule { }

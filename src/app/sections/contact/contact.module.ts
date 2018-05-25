import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact';
import { MatInputModule, MatButtonModule } from "@angular/material";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  declarations: [ ContactComponent ],
  exports:      [ ContactComponent ]
})

export class ContactModule {};

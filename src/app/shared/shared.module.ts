import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockUIModule } from 'ng-block-ui';
import {
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatSliderModule,
  MatSortModule,
  MatTooltipModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatSnackBarModule
} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MccColorPickerModule } from 'material-community-components';
import { BlockTemplateComponent } from './templates/block-template/block-template.component';

@NgModule({
  declarations: [
    BlockTemplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSliderModule,
    MatRippleModule,
    MatSelectModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    MccColorPickerModule.forRoot({
      empty_color: '#ffffff',
      used_colors: ['#000000', '#FFF555']
    })
  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatSliderModule,
    MatSelectModule,
    MatInputModule,
    MatRippleModule,
    MatChipsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MccColorPickerModule,
    BlockUIModule
  ],
  entryComponents: [
    BlockTemplateComponent
  ]
})
export class SharedModule { }

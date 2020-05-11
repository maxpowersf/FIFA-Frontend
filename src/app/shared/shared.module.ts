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
  MatSnackBarModule,
  MatGridListModule,
  MatCheckboxModule
} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MccColorPickerModule } from 'material-community-components';
import { BlockTemplateComponent } from './templates/block-template/block-template.component';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { ListLayoutComponent } from './components/list-layout/list-layout.component';
import { TableComponent } from './components/table/table.component';
import { TranslateHeaderPipe } from './pipes/translate-header.pipe';

@NgModule({
  declarations: [
    BlockTemplateComponent,
    FormLayoutComponent,
    ListLayoutComponent,
    TableComponent,
    TranslateHeaderPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
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
    MatCheckboxModule,
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
    MatGridListModule,
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
    MatCheckboxModule,
    MccColorPickerModule,
    BlockUIModule,
    FormLayoutComponent,
    ListLayoutComponent,
    TableComponent
  ],
  entryComponents: [
    BlockTemplateComponent,
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockUIModule } from 'ng-block-ui';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MccColorPickerModule } from 'material-community-components/color-picker';
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
    TranslateHeaderPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatGridListModule,
    MatTabsModule,
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
    MatDatepickerModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatSnackBarModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent,
    }),
    MccColorPickerModule.forRoot({
      empty_color: '#ffffff',
      used_colors: ['#000000', '#FFF555'],
    }),
  ],
  exports: [
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatSliderModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
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
    TableComponent,
  ],
})
export class SharedModule {}

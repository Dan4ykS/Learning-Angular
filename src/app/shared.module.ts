import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoaderDataComponent } from './components/loader-data/loader-data.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { TrimTextPipe } from './pipes/trim-text.pipe';

@NgModule({
  declarations: [LoaderDataComponent, CapitalizePipe, TrimTextPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoaderDataComponent,
    CapitalizePipe,
    TrimTextPipe,
  ],
})
export class SharedModule {}

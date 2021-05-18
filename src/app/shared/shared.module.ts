import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormToggleSwitchComponent } from './form-toggle-switch/form-toggle-switch.component';
import { ModalComponent } from './modal/modal.component';
import { DeleteModalComponent } from './modal/delete-modal/delete-modal.component';
import { NotificationComponent } from './notification/notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SvgComponent } from './svg/svg.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
const components = [
  ModalComponent,
  FormInputComponent,
  FormSelectComponent,
  NotificationComponent,
  FormToggleSwitchComponent,
  DeleteModalComponent,
  SvgComponent,
  MultiselectComponent,
  FormToggleSwitchComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule.forRoot(),
  ],
  exports: [
    ...components,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
  ],
})
export class SharedModule {}

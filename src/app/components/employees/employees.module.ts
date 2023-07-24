import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { AccordionModule, BadgeModule, BreadcrumbModule, ButtonGroupModule, ButtonModule, CardModule, DropdownModule, FormModule, GridModule, ListGroupModule, NavModule, PaginationModule, SharedModule, SpinnerModule, TableModule, TabsModule, TooltipModule, UtilitiesModule } from '@coreui/angular';
import { FormsRoutingModule } from 'src/app/views/forms/forms-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    EmployeeCreateComponent,
    EmployeeListComponent,
    EmployeeEditComponent
  ],
  imports: [
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FormModule,
    GridModule,
    ListGroupModule,
    NavModule,
    PaginationModule,
    SharedModule,
    SpinnerModule,
    TableModule,
    TabsModule,
    TooltipModule,
    UtilitiesModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CommonModule,
    EmployeesRoutingModule,
    CommonModule,
    FormsRoutingModule,
    DocsComponentsModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule,
    IconModule,
    TableModule,
    PaginationModule,
    TabsModule,
    TooltipModule,
    UtilitiesModule,
    NavModule,
    TranslateModule
    
  ]
})
export class EmployeesModule { }

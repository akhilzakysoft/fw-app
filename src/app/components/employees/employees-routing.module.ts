import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';

const routes: Routes = [
   {
    path: '',
    data: {
      title: 'Employee',
    },
    
    children: [
      {
        path: '',
        component: EmployeeListComponent,
        // pathMatch: 'full',
        // redirectTo: 'create-list',
      },
      {
        path: 'create-employee',
        component: EmployeeCreateComponent,
        data: {
          title: 'Create Employee',
        }
      },
        { path: 'edit-employee/:id', 
          component: EmployeeEditComponent,
          data: {
            title: 'Create Employee',
          },
        },
      
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { 

  
}

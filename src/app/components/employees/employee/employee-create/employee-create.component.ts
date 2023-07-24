import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent {
  customStylesValidated = false;
  browserDefaultsValidated = false;
  tooltipValidated = false;

  constructor(public translate: TranslateService) { }

  ngOnInit(): void { }

  onSubmit1() {
    this.customStylesValidated = true;
    console.log('Submit... 1');
  }
  onReset1() {
    this.customStylesValidated = false;
    console.log('Reset... 1');
  }

}

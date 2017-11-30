import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-fb',
  templateUrl: './reactive-fb.component.html',
  styleUrls: ['./reactive-fb.component.scss']
})
export class ReactiveFbComponent implements OnInit {
  myFBFormGroup: FormGroup;
  nameControl: FormControl;
  fv;
  constructor(private fb: FormBuilder) {
    this.nameControl = new FormControl('', [Validators.maxLength(10)]);
    this.myFBFormGroup = this.fb.group({
      name: this.nameControl,
      age: [0, [this.ageValidator]],
      l: this.fb.group({
        firstName: '',
        lastName: ''
      }, {validator: this.fullnameValidator})
    });
  }

  ngOnInit() {
  }

  ageValidator(control: FormControl): any {
    // const value = (control.value || '') + ''; // 1->'1'
    // const valid = value.match(/^\d {1,2}$/);// 10-99. + :1 or more
    const value = control.value;
    return( value < 100 && value >= 0 ) ? null : {age: { actualAge: value, requiredAge: '0-99'}}
  }

  fullnameValidator({value}: FormGroup) {
    // {value} = formGroup;
    const { firstName, lastName} = value;
    return firstName.length <= 5 && lastName.length <= 5 ? null : {fullName: 'not valid'};
  }

  onSubmit() {
    console.log(this.myFBFormGroup.status);
    const nameErr = this.nameControl.errors;
    console.log('name errors', nameErr);
    const ageErr = this.myFBFormGroup.get('age').errors;
    console.log('age errors', ageErr);
    const fullNameErr = this.myFBFormGroup.get('fullName').errors;
    console.log('fullName errors', fullNameErr);
    // touched vs untouched
    console.log('name touched', this.nameControl.touched);
    // pristine vs dirty
    console.log('age dirty', this.myFBFormGroup.dirty);
    this.fv = this.myFBFormGroup.value;
  }
}

import { Component, OnInit } from '@angular/core';
import {ViewencapsulationEmulatedComponent} from './viewencapsulation-emulated/viewencapsulation-emulated.component';
import {ViewencapsulationNativeComponent} from './viewencapsulation-native/viewencapsulation-native.component';
import {ViewencapsulationNoneComponent} from './viewencapsulation-none/viewencapsulation-none.component';
@Component({
  selector: 'app-view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrls: ['./view-encapsulation.component.scss']
})
export class ViewEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewencapsulationNativeComponent } from './viewencapsulation-native.component';

describe('ViewencapsulationNativeComponent', () => {
  let component: ViewencapsulationNativeComponent;
  let fixture: ComponentFixture<ViewencapsulationNativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewencapsulationNativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewencapsulationNativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

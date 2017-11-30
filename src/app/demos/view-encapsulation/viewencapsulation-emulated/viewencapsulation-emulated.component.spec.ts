import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewencapsulationEmulatedComponent } from './viewencapsulation-emulated.component';

describe('ViewencapsulationEmulatedComponent', () => {
  let component: ViewencapsulationEmulatedComponent;
  let fixture: ComponentFixture<ViewencapsulationEmulatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewencapsulationEmulatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewencapsulationEmulatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewencapsulationNoneComponent } from './viewencapsulation-none.component';

describe('ViewencapsulationNoneComponent', () => {
  let component: ViewencapsulationNoneComponent;
  let fixture: ComponentFixture<ViewencapsulationNoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewencapsulationNoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewencapsulationNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

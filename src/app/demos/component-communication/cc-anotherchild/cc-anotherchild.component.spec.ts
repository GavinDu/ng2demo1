import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcAnotherchildComponent } from './cc-anotherchild.component';

describe('CcAnotherchildComponent', () => {
  let component: CcAnotherchildComponent;
  let fixture: ComponentFixture<CcAnotherchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcAnotherchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcAnotherchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

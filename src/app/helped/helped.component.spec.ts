import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpedComponent } from './helped.component';

describe('HelpedComponent', () => {
  let component: HelpedComponent;
  let fixture: ComponentFixture<HelpedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

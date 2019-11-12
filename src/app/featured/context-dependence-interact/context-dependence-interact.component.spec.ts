import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextDependenceInteractComponent } from './context-dependence-interact.component';

describe('ContextDependenceInteractComponent', () => {
  let component: ContextDependenceInteractComponent;
  let fixture: ComponentFixture<ContextDependenceInteractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextDependenceInteractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextDependenceInteractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

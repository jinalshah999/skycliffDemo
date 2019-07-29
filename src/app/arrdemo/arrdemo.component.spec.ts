import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrdemoComponent } from './arrdemo.component';

describe('ArrdemoComponent', () => {
  let component: ArrdemoComponent;
  let fixture: ComponentFixture<ArrdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

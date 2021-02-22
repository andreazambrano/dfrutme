import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullorderdetailComponent } from './fullorderdetail.component';

describe('FullorderdetailComponent', () => {
  let component: FullorderdetailComponent;
  let fixture: ComponentFixture<FullorderdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullorderdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullorderdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

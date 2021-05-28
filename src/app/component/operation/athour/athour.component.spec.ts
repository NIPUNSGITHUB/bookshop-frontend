import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthourComponent } from './athour.component';

describe('AthourComponent', () => {
  let component: AthourComponent;
  let fixture: ComponentFixture<AthourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsstorageComponent } from './lsstorage.component';

describe('LsstorageComponent', () => {
  let component: LsstorageComponent;
  let fixture: ComponentFixture<LsstorageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LsstorageComponent]
    });
    fixture = TestBed.createComponent(LsstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

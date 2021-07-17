import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedPageComponent } from './finished-page.component';

describe('FinishedPageComponent', () => {
  let component: FinishedPageComponent;
  let fixture: ComponentFixture<FinishedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndCondtionsComponent } from './terms-and-condtions.component';

describe('TermsAndCondtionsComponent', () => {
  let component: TermsAndCondtionsComponent;
  let fixture: ComponentFixture<TermsAndCondtionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsAndCondtionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsAndCondtionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailnputComponent } from './emailnput.component';

describe('EmailnputComponent', () => {
  let component: EmailnputComponent;
  let fixture: ComponentFixture<EmailnputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailnputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailnputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

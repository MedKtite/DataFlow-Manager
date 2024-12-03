import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMTPAPIComponent } from './smtp-api.component';

describe('SMTPAPIComponent', () => {
  let component: SMTPAPIComponent;
  let fixture: ComponentFixture<SMTPAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SMTPAPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SMTPAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

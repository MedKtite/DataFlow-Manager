import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendersDomainsComponent } from './senders-domains.component';

describe('SendersDomainsComponent', () => {
  let component: SendersDomainsComponent;
  let fixture: ComponentFixture<SendersDomainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendersDomainsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendersDomainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

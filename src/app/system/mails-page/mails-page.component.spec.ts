import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailsPageComponent } from './mails-page.component';

describe('MailsPageComponent', () => {
  let component: MailsPageComponent;
  let fixture: ComponentFixture<MailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

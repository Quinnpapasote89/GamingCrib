import { TestBed } from '@angular/core/testing';

import { MailsendService } from './mailsend.service';

describe('MailsendService', () => {
  let service: MailsendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailsendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

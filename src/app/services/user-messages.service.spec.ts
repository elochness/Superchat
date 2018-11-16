import { TestBed } from '@angular/core/testing';

import { UserMessagesService } from './user-messages.service';

describe('UserMessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserMessagesService = TestBed.get(UserMessagesService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MessageGuard } from './message.guard';

describe('MessageGuard', () => {
  let guard: MessageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MessageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';
import Spy = jasmine.Spy;

import { UsersService } from './users.service';
import { UsersServiceMock } from './users.service.mock';

describe('UsersService', () => {
  let usersServiceMock:  Partial<UsersService>;
  let usersServiceLoginSpy: Spy;
  let usersServiceLogoutSpy: Spy;

  beforeEach(() => {
    usersServiceMock = new UsersServiceMock();
    usersServiceLoginSpy = spyOn(usersServiceMock, 'login');
    usersServiceLogoutSpy = spyOn(usersServiceMock, 'logout');

    TestBed.configureTestingModule({
      providers: [
        // UsersService
        {provide: UsersService, useValue: usersServiceMock},
      ]
    });
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

  it('logout should be undefined', inject([UsersService], (service: UsersService) => {
    expect(service.logout()).toBeUndefined();
  }));


  it('login should be success', inject([UsersService], (service: UsersService) => {
    expect(service.login('fnx','fnx')).toBeUndefined();
  }));
});

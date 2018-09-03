import { Observable, of } from 'rxjs';
import { Iresponse } from '../models/services';
import { Iuser } from '../models/user';

export class UsersServiceMock {

  login(email:string, pass:string) : Observable<any> {
    return new Observable();
  }

  logout() : Iuser {
    return undefined;
  }
}

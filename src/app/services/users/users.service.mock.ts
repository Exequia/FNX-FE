import { Observable, of } from 'rxjs'
import { Iuser } from '../../models/user'

export class UsersServiceMock {
  login(email: string, pass: string): Observable<any> {
    return new Observable()
  }

  logout(): Iuser {
    return undefined
  }
}

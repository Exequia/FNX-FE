import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../../message/services/message.service';
import { Imessage } from '../../message/models/messages';
import { Iresponse } from '../../models/services';
import { Iuser } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private server = { local: 'http://localhost:777/' };
  private service = 'users/';

  private user: Iuser;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /** Log a HeroService message with the MessageService */
  private log(message: Imessage) {
    this.messageService.add(message);
  }

  /** return a clone object os the current user */
  private getUser(): Iuser {
    return JSON.parse(JSON.stringify(this.user));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.messageService.clearAll();

      const message: Imessage = {
        type: 'danger',
        title: 'Error en: ' + this.service + '/' + operation,
        text: error.message
      };

      this.log(message);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**
   * Call to the backend service to login User and return and error alert or copy of data user
   *
   */
  login(email: string, pass: string) {
    this.messageService.clearAll();

    return this.http
      .get<Iresponse>(
        this.server.local +
          this.service +
          'login?email=' +
          email +
          '&pass=' +
          pass
      )
      .pipe(
        map(res => {
          if (res.status === 0) {
            const message: Imessage = {
              type: 'danger',
              title: 'Login error',
              text: res.msg
            };

            this.log(message);
          } else {
            this.user = res.data;
            return this.getUser();
          }
        }),
        // tap(user => this.log({
        //     type: 'info',
        //     title: 'Usuario recuperado',
        //     text: JSON.stringify(user)
        //   })
        // ),
        catchError(this.handleError<any>('loggin'))
      );
  }

  /**
   * Delete the user data info
   *
   */
  logout() {
    this.messageService.clearAll();
    this.user = undefined;
    return this.user;
  }
}

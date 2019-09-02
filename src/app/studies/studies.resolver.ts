import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { FilesService } from '../services/files/files.service';
import { ICourse } from './models/ICourse';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class StudiesResolver implements Resolve<Observable<ICourse[]>> {
  constructor(private router: Router, private fileService: FilesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICourse[]> {
    const filePath = route.data['filePath'];
    const studies = this.getStudiesFile(filePath);
    return studies;

    /// TODO -> Manage file errors
    // return this.getStudiesFile(filePath).pipe(error => {
    //   // this.router.navigate(['/404']);
    //   this.router.navigate(['/']);
    //   return error;
    // });

    // try {
    //   return this.getStudiesFile(filePath);
    // } catch (err) {
    //   this.router.navigateByUrl('/', { skipLocationChange: true });
    //   // this.router.navigate(['/']);
    // }
  }

  public getStudiesFile(filePath: string): Observable<any> {
    return this.fileService.readFile(filePath);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilesService } from '../../services/files/files.service';

@Injectable({
  providedIn: 'root'
})
export class StudiesServiceService {
  constructor(private filesService: FilesService) {}

  public getStudiesFile(filePath: string): Observable<any> {
    return this.filesService.readFile(filePath);
  }
}

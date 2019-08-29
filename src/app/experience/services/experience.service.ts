import { Injectable } from '@angular/core';
import { FilesService } from '../../services/files/files.service';
import { Ijob } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  jobExperiencies: Array<Ijob>;

  constructor(private fileService: FilesService) {}

  readJobExperiencies() {
    return this.fileService.readFile('./assets/files/jobExperiencies.json');
  }

  async getExperiencies(): Promise<Array<Ijob>> {
    if (!this.jobExperiencies) {
      this.jobExperiencies = <Array<Ijob>>(
        await this.readJobExperiencies().toPromise()
      );
    }
    return this.jobExperiencies;
  }

  getDomain(expirienceTime: number): any {
    const timeStructure = {
      year: 31536000,
      month: 2592000
      // 'week': 604800,
      // 'day': 86400,
      // 'hour': 3600,
      // 'minute': 60,
      // 'second': 1
    };

    const domainLevel = {
      learning: 'learning',
      low: 'low',
      medium: 'medium',
      high: 'high',
      master: 'master'
    };

    const expirience: any = {};
    const timeExpirience = {};

    expirience.timeExpirience = timeExpirience;

    if (expirienceTime > timeStructure.year * 2) {
      expirience.domain = domainLevel.master;
    } else if (expirienceTime >= timeStructure.year) {
      expirience.domain = domainLevel.high;
    } else if (expirienceTime >= timeStructure.month * 6) {
      expirience.domain = domainLevel.medium;
    } else if (expirienceTime >= timeStructure.month) {
      expirience.domain = domainLevel.low;
    } else {
      expirience.domain = domainLevel.learning;
    }

    Object.keys(timeStructure).forEach(function(time) {
      timeExpirience[time] =
        time === 'month'
          ? Math.ceil(expirienceTime / timeStructure[time])
          : Math.floor(expirienceTime / timeStructure[time]);
      expirienceTime -= timeExpirience[time] * timeStructure[time];
    });

    return expirience;
  }
}

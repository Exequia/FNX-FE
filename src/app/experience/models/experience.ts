export interface Ijob {
  'id': number;
  'company': string;
  'companyURL': string;
  'dateInit': Date;
  'dateEnd': Date;
  'role': string;
  'description': string;
  'skills': Array<ISkillExpirience>;
}

export interface ISkillExpirience {
  'skill': ISkill;
  'expiriencies'?: Array<ItimeExpirience>;
  'time': number;
  'domain': Domain;
}

export interface ISkill {
  'id': number;
  'name': string;
}

export interface ItimeExpirience {
  'dateInit': Date;
  'dateEnd': Date;
  'time': number;
}

export class Domain {

  static getDomain (expirienceTime : number) : any {

    let timeStructure = {
      'year': 31536000,
      'month': 2592000,
      // 'week': 604800,
      // 'day': 86400,
      // 'hour': 3600,
      // 'minute': 60,
      // 'second': 1
    };

    let domainLevel = {
      'learning': 'learning',
      'low': 'low',
      'medium': 'medium',
      'high': 'high',
      'master': 'master'
    }

    let expirience : any = {};
    let timeExpirience = {};

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

    Object.keys(timeStructure).forEach(function(time){

      timeExpirience[time] = (time==='month') ? Math.ceil(expirienceTime /timeStructure[time]) : Math.floor(expirienceTime /timeStructure[time]);
      expirienceTime -= timeExpirience[time] * timeStructure[time];

    });

    return expirience;
  }

  getDomainLevel () {

  }
}
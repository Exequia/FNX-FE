import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBadgeComponent } from './skill-badge.component';

describe('SkillBadgeComponent', () => {
  let component: SkillBadgeComponent;
  let fixture: ComponentFixture<SkillBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkillBadgeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

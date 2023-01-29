import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecExperienceComponent } from './sec-experience.component';

describe('SecExperienceComponent', () => {
  let component: SecExperienceComponent;
  let fixture: ComponentFixture<SecExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

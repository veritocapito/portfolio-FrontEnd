import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecEducationComponent } from './sec-education.component';

describe('SecEducationComponent', () => {
  let component: SecEducationComponent;
  let fixture: ComponentFixture<SecEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

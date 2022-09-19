import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecProjectsComponent } from './sec-projects.component';

describe('SecProjectsComponent', () => {
  let component: SecProjectsComponent;
  let fixture: ComponentFixture<SecProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

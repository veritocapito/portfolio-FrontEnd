import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecAboutComponent } from './sec-about.component';

describe('SecAboutComponent', () => {
  let component: SecAboutComponent;
  let fixture: ComponentFixture<SecAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

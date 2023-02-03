import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAboutAddComponent } from './modal-about-add.component';

describe('ModalAboutAddComponent', () => {
  let component: ModalAboutAddComponent;
  let fixture: ComponentFixture<ModalAboutAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAboutAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAboutAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSkillAddComponent } from './modal-skill-add.component';

describe('ModalSkillAddComponent', () => {
  let component: ModalSkillAddComponent;
  let fixture: ComponentFixture<ModalSkillAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSkillAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSkillAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

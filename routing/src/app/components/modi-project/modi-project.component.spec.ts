import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiProjectComponent } from './modi-project.component';

describe('ModiProjectComponent', () => {
  let component: ModiProjectComponent;
  let fixture: ComponentFixture<ModiProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModiProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

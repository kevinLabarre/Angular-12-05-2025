import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceHeritageComponent } from './exercice-heritage.component';

describe('ExerciceHeritageComponent', () => {
  let component: ExerciceHeritageComponent;
  let fixture: ComponentFixture<ExerciceHeritageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciceHeritageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceHeritageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

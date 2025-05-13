import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBankComponent } from './child-bank.component';

describe('ChildBankComponent', () => {
  let component: ChildBankComponent;
  let fixture: ComponentFixture<ChildBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildBankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

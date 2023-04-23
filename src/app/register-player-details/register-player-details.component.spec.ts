import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPlayerDetailsComponent } from './register-player-details.component';

describe('RegisterPlayerDetailsComponent', () => {
  let component: RegisterPlayerDetailsComponent;
  let fixture: ComponentFixture<RegisterPlayerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPlayerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPlayerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

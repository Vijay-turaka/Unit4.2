import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPlayerDetailsComponent } from './get-player-details.component';

describe('GetPlayerDetailsComponent', () => {
  let component: GetPlayerDetailsComponent;
  let fixture: ComponentFixture<GetPlayerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPlayerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPlayerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

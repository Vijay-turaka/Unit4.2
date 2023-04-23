import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlayerDetailsComponent } from './update-player-details.component';

describe('UpdatePlayerDetailsComponent', () => {
  let component: UpdatePlayerDetailsComponent;
  let fixture: ComponentFixture<UpdatePlayerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePlayerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePlayerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

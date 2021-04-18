import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvataarComponent } from './avatar.component';

describe('AvataarComponent', () => {
  let component: AvataarComponent;
  let fixture: ComponentFixture<AvataarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvataarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvataarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

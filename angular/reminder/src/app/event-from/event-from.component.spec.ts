import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFromComponent } from './event-from.component';

describe('EventFromComponent', () => {
  let component: EventFromComponent;
  let fixture: ComponentFixture<EventFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

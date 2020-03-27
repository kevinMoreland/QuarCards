import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBlockComponent } from './player-block.component';

describe('PlayerBlockComponent', () => {
  let component: PlayerBlockComponent;
  let fixture: ComponentFixture<PlayerBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

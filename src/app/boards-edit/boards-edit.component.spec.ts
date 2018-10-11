import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsEditComponent } from './boards-edit.component';

describe('BoardsEditComponent', () => {
  let component: BoardsEditComponent;
  let fixture: ComponentFixture<BoardsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

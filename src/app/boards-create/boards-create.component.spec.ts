import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsCreateComponent } from './boards-create.component';

describe('BoardsCreateComponent', () => {
  let component: BoardsCreateComponent;
  let fixture: ComponentFixture<BoardsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

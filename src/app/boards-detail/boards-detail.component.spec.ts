import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsDetailComponent } from './boards-detail.component';

describe('BoardsDetailComponent', () => {
  let component: BoardsDetailComponent;
  let fixture: ComponentFixture<BoardsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

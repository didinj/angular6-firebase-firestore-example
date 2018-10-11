import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { FsService } from '../fs.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

  displayedColumns = ['title', 'description', 'author'];
  dataSource = new BoardDataSource(this.fs);

  constructor(private fs: FsService) {
  }

  ngOnInit() {
  }

}

export class BoardDataSource extends DataSource<any> {

  constructor(private fs: FsService) {
    super()
  }

  connect() {
    return this.fs.getBoards();
  }

  disconnect() {

  }
}

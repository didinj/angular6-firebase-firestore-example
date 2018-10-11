import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FsService } from '../fs.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-boards-edit',
  templateUrl: './boards-edit.component.html',
  styleUrls: ['./boards-edit.component.css']
})
export class BoardsEditComponent implements OnInit {

  boardsForm: FormGroup;
  id:string = '';
  title:string = '';
  description:string = '';
  author:string = '';

  constructor(private router: Router, private route: ActivatedRoute, private fs: FsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getBoard(this.route.snapshot.params['id']);
    this.boardsForm = this.formBuilder.group({
      'title' : [null, Validators.required],
      'description' : [null, Validators.required],
      'author' : [null, Validators.required]
    });
  }

  getBoard(id) {
    this.fs.getBoard(id).subscribe(data => {
      this.id = data.key;
      this.boardsForm.setValue({
        title: data.title,
        description: data.description,
        author: data.author
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.fs.updateBoards(this.id, form)
      .subscribe(res => {
          this.router.navigate(['/boards']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  boardsDetails() {
    this.router.navigate(['/boards-details', this.id]);
  }

}

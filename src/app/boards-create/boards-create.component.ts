import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FsService } from '../fs.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-boards-create',
  templateUrl: './boards-create.component.html',
  styleUrls: ['./boards-create.component.css']
})
export class BoardsCreateComponent implements OnInit {

  boardsForm: FormGroup;
  title:string='';
  description:string='';
  author:string='';

  constructor(private router: Router, private fs: FsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.boardsForm = this.formBuilder.group({
      'title' : [null, Validators.required],
      'description' : [null, Validators.required],
      'author' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.fs.postBoards(form)
      .subscribe(res => {
          let id = res['key'];
          this.router.navigate(['/boards-details', id]);
        }, (err) => {
          console.log(err);
        });
  }

}

import { DialogRef } from '@angular/cdk/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
})
export class CommentFormComponent implements OnInit {
  commentForm!: FormGroup;
  isSubmitted = false;
  @Input() idTask :number | undefined;

  constructor(private fb: FormBuilder, public dialogRef: DialogRef<string>) {}

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      comment: ['', Validators.required],
      user : "admin",
      id : this.idTask
    });
    // this.commentForm.valueChanges.subscribe(console.log);
  }
  get comment() {
    return this.commentForm.get('comment');
  }
  onSubmit(): void {
    // console.log(this.commentForm);
    this.isSubmitted = true;
    if (!this.commentForm.valid) {
      false;
    } else {
      this.dialogRef.close(JSON.stringify(this.commentForm.value));
    }
  }
}

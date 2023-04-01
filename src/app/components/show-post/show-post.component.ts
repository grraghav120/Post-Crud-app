import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { DataService } from '../data.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DeletePostComponent } from '../delete-post/delete-post.component';
@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss'],
})
export class ShowPostComponent implements OnInit {
  posts: Post[] = [];
  constructor(public data: DataService,public dialog: MatDialog) {}
  ngOnInit(): void {
    this.posts = this.data.getAllPost();
  }

  openDialog(id:any): void {
    const dialogEf=this.dialog.open(DeletePostComponent, {});
    dialogEf.afterClosed().subscribe((res)=>{
      if(res===true){
          this.onDeletePost(id);
      }
    })
    
  }

  onDeletePost(id: any) {
    this.data.deletePost(id);
    this.posts = this.data.getAllPost();
  }
}

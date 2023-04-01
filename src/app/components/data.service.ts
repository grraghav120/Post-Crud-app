import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  posts:Post[]=[];
  constructor() { }

  getAllPost(){
    this.posts=localStorage.getItem('posts')? JSON.parse(localStorage.getItem('posts') as string):[];
    console.log(this.posts);
    return this.posts;
  }
  deletePost(id:any){
    this.posts=localStorage.getItem('posts')? JSON.parse(localStorage.getItem('posts') as string):[];
    this.posts=this.posts.filter((x:any)=> x.id!==id);
    localStorage.setItem('posts',JSON.stringify(this.posts));
  }
  addPost(title:string,content:string,name:string){
    const newPost={title:title,content:content,name:name,id:new Date()}
    this.posts.push(newPost)
    localStorage.setItem('posts',JSON.stringify(this.posts));
  }
}

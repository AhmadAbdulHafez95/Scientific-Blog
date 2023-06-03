import { Comment } from "./Comment";
export class BlogPost{
    constructor() {
        this._id = '';
        this.title = 'ahmad';
        this.postDate="";
        this.featuredImage='';
        this.post='';
        this.comments=[];
        this.postedBy='';
        this.category='';
        this.tags=[];
        this.isPrivate=true;
        this.views=1;

      }
      
 _id: string;
 title: string;
 postDate: string;
 featuredImage: string;
 post!: string;
 postedBy: string;
 comments: Array<Comment>;
 category: string;
 tags: Array<string>;
 isPrivate: Boolean;
 views: number;
}
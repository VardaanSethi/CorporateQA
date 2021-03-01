export class Question {
    title:any;
    description:any;
    categoryId:any;
    userId:any;
    upVotes:any=[];
    views:any=0;
    constructor(title:any,description:any,categoryId:any,userId:any){
        this.title=title;
        this.description=description;
        this.categoryId=categoryId;
        this.userId=userId;
    }
}

export class Answer {
    description:any;
    questionId:any;
    userId:any;
    likes:Array<string>=[];
    dislikes:Array<string>=[];
    isBestSolution=false;

    constructor(description:any,questionId:any,userId:any){
        this.description=description;
        this.questionId=questionId;
        this.userId=userId;
    }
}

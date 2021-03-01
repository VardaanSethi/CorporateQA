using System;
using System.Collections.Generic;
using System.Text;

namespace QA.Data
{
    public class QuestionView
    {
        public int QuestionId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int CategoryId { get; set; }
        public int Views { get; set; }
        public DateTime CreatedOn { get; set; }
        public string UpVotes { get; set; }
        public string UserId { get; set; }
        public string AnswersUserId { get; set; }
        public string ProfileImageUrl { get; set; }
        public string UserName { get; set; }
        public int Answers { get; set; }
        public int BestSolution { get; set; }
    }
}

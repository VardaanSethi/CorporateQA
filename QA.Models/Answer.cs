using System;
using System.Collections.Generic;

namespace QA.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public List<string> Likes { get; set; }
        public List<string> Dislikes { get; set; }
        public int QuestionId { get; set; }
        public string UserId { get; set; }
        public bool IsBestSolution { get; set; }
        public DateTime CreatedOn { get; set; }
        public Answer()
        {
            this.CreatedOn = DateTime.Now;
        }
    }
}

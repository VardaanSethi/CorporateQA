using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace QA.Data
{
    [Table("Answer")]
    public class Answer
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string Likes { get; set; }
        public string Dislikes { get; set; }
        public int QuestionId { get; set; }
        public string UserId { get; set; }
        public bool IsBestSolution { get; set; }
        public DateTime CreatedOn { get; set; }

    }
}

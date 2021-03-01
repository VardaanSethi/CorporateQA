using System;
using System.Collections.Generic;
using System.Text;

namespace QA.Data
{
    public class UsersView
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string JobRole { get; set; }
        public string Department { get; set; }
        public string JobLocation { get; set; }
        public string ProfileImageUrl { get; set; }
        public int QuestionsAsked { get; set; }
        public int QuestionsAnswered { get; set; }
        public int QuestionsSolved { get; set; }
        public string Likes { get; set; }
        public string Dislikes { get; set; }
    }
}

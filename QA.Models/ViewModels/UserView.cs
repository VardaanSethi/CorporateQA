using System;
using System.Collections.Generic;
using System.Text;

namespace QA.Models.ViewModels
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
        public List<string> Likes { get; set; }
        public List<string> Dislikes { get; set; }
    }
}

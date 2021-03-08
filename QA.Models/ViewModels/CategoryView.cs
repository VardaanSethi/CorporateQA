using System;
using System.Collections.Generic;
using System.Text;

namespace QA.Models.ViewModels
{
    public class CategoryView
    {
        public int CategoryId { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int CategoryQuestionCountThisWeek { get; set; }
        public int CategoryQuestionCountThisMonth { get; set; }
    }
}

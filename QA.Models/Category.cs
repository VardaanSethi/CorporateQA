using System;
using System.Collections.Generic;
using System.Text;
using Dapper.Contrib.Extensions;
namespace QA.Models
{
    [Table("Category")]
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}

using QA.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace QA.Services.Contracts
{
    public interface ICategoryService
    {
        IEnumerable<Category> GetCategories();
        int PostCategory(Category category);
        IEnumerable<object> GetCategoryQuestionLookup();
        IEnumerable<object> SearchCategories(string category);
    }
}

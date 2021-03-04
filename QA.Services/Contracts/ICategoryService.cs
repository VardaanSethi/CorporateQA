using QA.Models;
using System.Collections.Generic;

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

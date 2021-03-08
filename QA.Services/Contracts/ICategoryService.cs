using QA.Models;
using QA.Models.ViewModels;
using System.Collections.Generic;

namespace QA.Services.Contracts
{
    public interface ICategoryService
    {
        IEnumerable<Category> GetCategories();
        int AddCategory(Category category);
        IEnumerable<CategoryView> GetCategoryQuestionLookup();
        IEnumerable<CategoryView> SearchCategories(string category);
    }
}

using Microsoft.AspNetCore.Mvc;
using QA.Models;
using QA.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CorporateQA.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService CategoryService;
        public CategoryController(ICategoryService categoryService)
        {
            this.CategoryService = categoryService;
        }

        [Route("categories")]
        public IActionResult GetCategories()
        {
            return Ok(this.CategoryService.GetCategories());
        }

        [Route("categoryquestionlookup")]

        public IActionResult GetCategoryQuestionLookup()
        {
            return Ok(this.CategoryService.GetCategoryQuestionLookup());
        }

        [Route("searchcategories/{category}")]
        public IActionResult SearchCategories(string category)
        {
            return Ok(this.CategoryService.SearchCategories(category));
        }

        [Route("category")]
        public IActionResult PostCategory(Category category)
        {
            return Ok(this.CategoryService.PostCategory(category));
        }

    }
}

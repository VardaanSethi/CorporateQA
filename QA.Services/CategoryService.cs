using AutoMapper;
using Dapper;
using Microsoft.Extensions.Configuration;
using QA.Models;
using QA.Services.Contracts;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using Dapper.Contrib.Extensions;

namespace QA.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly IDbConnection Db;
        private readonly IMapper Mapper;
        public CategoryService(IConfiguration configuration, IMapper mapper)
        {
            this.Db = new SqlConnection(configuration.GetConnectionString("DefaultConnection"));
            this.Mapper = mapper;
        }

        public IEnumerable<Category> GetCategories()
        {
            return this.Mapper.Map<IEnumerable<Category>>(this.Db.GetAll<QA.Data.Category>());
        }

        public IEnumerable<object> GetCategoryQuestionLookup()
        {
            return this.Db.Query<object>("SELECT * FROM CategoriesView");
        }

        public IEnumerable<object> SearchCategories(string category)
        {
            return this.Db.Query<object>($"SELECT * FROM CategoriesView WHERE Name LIKE '{category}%'");
        }

        public int PostCategory(Category category)
        {
            return (int)this.Db.Insert<QA.Data.Category>(this.Mapper.Map<QA.Data.Category>(category));
        }
    }
}
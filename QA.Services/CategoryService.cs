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
        private readonly DapperConnection Db;
        private readonly IMapper Mapper;
        public CategoryService(IMapper mapper, DapperConnection dapperConnection)
        {
            Db = dapperConnection;
            Mapper = mapper;
        }
        public IEnumerable<Category> GetCategories()
        {
            return Mapper.Map<IEnumerable<Category>>(Db.dapperConnection.GetAll<QA.Data.Category>());
        }

        public IEnumerable<object> GetCategoryQuestionLookup()
        {
            return Db.dapperConnection.Query<object>("SELECT * FROM CategoriesView");
        }

        public IEnumerable<object> SearchCategories(string category)
        {
            return Db.dapperConnection.Query<object>($"SELECT * FROM CategoriesView WHERE Name LIKE '{category}%'");
        }

        public int PostCategory(Category category)
        {
            return (int)Db.dapperConnection.Insert<QA.Data.Category>(this.Mapper.Map<QA.Data.Category>(category));
        }
    }
}
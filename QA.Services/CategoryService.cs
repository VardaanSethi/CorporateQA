using AutoMapper;
using Dapper;
using QA.Models;
using QA.Services.Contracts;
using System.Collections.Generic;
using Dapper.Contrib.Extensions;
using QA.Models.ViewModels;

namespace QA.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly DapperConnection Db;
        private readonly IMapper Mapper;
        public CategoryService(IMapper mapper, DapperConnection dapperDb)
        {
            Db = dapperDb;
            Mapper = mapper;
        }
        public IEnumerable<Category> GetCategories()
        {
            return Db.dapperDb.Query<QA.Data.Category>("SELECT * FROM Category").MapAllTo<IEnumerable<QA.Data.Category>, Category>();
        }

        public IEnumerable<CategoryView> GetCategoryQuestionLookup()
        {
            return Db.dapperDb.Query<CategoryView>("SELECT * FROM CategoriesView");
        }

        public IEnumerable<CategoryView> SearchCategories(string category)
        {
            return Db.dapperDb.Query<CategoryView>($"SELECT * FROM CategoriesView WHERE Name LIKE '{category}%'");
        }

        public int AddCategory(Category category)
        {
            return (int)Db.dapperDb.Insert<QA.Data.Category>(this.Mapper.Map<QA.Data.Category>(category));
        }
    }


    /// <summary>
    /// Extension Method Defination
    /// </summary>
    public static class MappingExtension
    {
        public static D MapTo<S, D>(this S data)
        {
            return Mapper.Map<D>(data);
        }

        public static IEnumerable<D> MapAllTo<S, D>(this S data)
        {
            return Mapper.Map<IEnumerable<D>>(data);
        }
    }
}
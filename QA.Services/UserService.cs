using AutoMapper;
using Microsoft.Extensions.Configuration;
using QA.Models.ViewModels;
using QA.Services.Contracts;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using Dapper;
using System.Linq;

namespace QA.Services
{
    public class UserService : IUserService
    {
        private readonly IDbConnection Db;
        private readonly IMapper Mapper;
        public UserService(IConfiguration configuration, IMapper mapper)
        {
            this.Db = new SqlConnection(configuration.GetConnectionString("DefaultConnection"));
            this.Mapper = mapper;
        }
        public IEnumerable<UsersView> GetUsers()
        {
            var sql = "SELECT * FROM UsersView";
            return this.Mapper.Map<IEnumerable<UsersView>>(this.Db.Query<QA.Data.UsersView>(sql));
        }

        public UsersView GetUser(string userId)
        {
            return this.Mapper.Map<UsersView>(this.Db.Query<QA.Data.UsersView>($"SELECT * FROM UsersView WHERE Id='{userId}'").FirstOrDefault());
        }

        public IEnumerable<QuestionView> GetUserQuestions(string userId)
        {
            return this.Mapper.Map<IEnumerable<QuestionView>>(this.Db.Query<QA.Data.QuestionView>($"SELECT * FROM QuestionsView WHERE UserId='{userId}'"));
        }

        public IEnumerable<UsersView> GetSearchUser(string userName)
        {
            return this.Mapper.Map<IEnumerable<UsersView>>(this.Db.Query<QA.Data.UsersView>($"SELECT * FROM UsersView WHERE UserName LIKE '{userName}%'"));
        }

        public IEnumerable<AnswerView> GetAnswers(int questionId)
        {
            return this.Mapper.Map<IEnumerable<AnswerView>>(this.Db.Query<QA.Data.AnswerView>($"SELECT * FROM AnswersView WHERE QuestionId={questionId}"));
        }
    }
}

using AutoMapper;
using QA.Models.ViewModels;
using QA.Services.Contracts;
using System.Collections.Generic;
using Dapper;
using System.Linq;

namespace QA.Services
{
    public class UserService : IUserService
    {
        private readonly DapperConnection Db;
        private readonly IMapper Mapper;
        public UserService(IMapper mapper, DapperConnection dapperConnection)
        {
            Db = dapperConnection;
            Mapper = mapper;
        }
        public IEnumerable<UsersView> GetUsers()
        {
            var sql = "SELECT * FROM UsersView";
            return this.Mapper.Map<IEnumerable<UsersView>>(Db.dapperConnection.Query<QA.Data.UsersView>(sql));
        }

        public UsersView GetUser(string userId)
        {
            return this.Mapper.Map<UsersView>(Db.dapperConnection.Query<QA.Data.UsersView>($"SELECT * FROM UsersView WHERE Id='{userId}'").FirstOrDefault());
        }

        public IEnumerable<QuestionView> GetUserQuestions(string userId)
        {
            return this.Mapper.Map<IEnumerable<QuestionView>>(Db.dapperConnection.Query<QA.Data.QuestionView>($"SELECT * FROM QuestionsView WHERE UserId='{userId}'"));
        }

        public IEnumerable<UsersView> GetSearchUser(string userName)
        {
            return this.Mapper.Map<IEnumerable<UsersView>>(Db.dapperConnection.Query<QA.Data.UsersView>($"SELECT * FROM UsersView WHERE UserName LIKE '{userName}%'"));
        }

        public IEnumerable<AnswerView> GetAnswers(int questionId)
        {
            return this.Mapper.Map<IEnumerable<AnswerView>>(Db.dapperConnection.Query<QA.Data.AnswerView>($"SELECT * FROM AnswersView WHERE QuestionId={questionId}"));
        }
    }
}

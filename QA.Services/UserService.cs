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
        public UserService(DapperConnection dapperDb)
        {
            Db = dapperDb;
        }
        public IEnumerable<UsersView> GetUsers()
        {
            return Db.dapperDb.Query<QA.Data.UsersView>("SELECT * FROM UsersView").MapAllTo<IEnumerable<QA.Data.UsersView>, UsersView>();
        }

        public UsersView GetUser(string userId)
        {
            return Db.dapperDb.Query<QA.Data.UsersView>($"SELECT * FROM UsersView WHERE Id='{userId}'").FirstOrDefault().MapTo<QA.Data.UsersView, UsersView>();
        }

        public IEnumerable<QuestionView> GetUserQuestions(string userId)
        {
            return Db.dapperDb.Query<QA.Data.QuestionView>($"SELECT * FROM QuestionsView WHERE UserId='{userId}'").MapAllTo<IEnumerable<QA.Data.QuestionView>, QuestionView>();
        }

        public IEnumerable<UsersView> GetSearchUser(string userName)
        {
            return Db.dapperDb.Query<QA.Data.UsersView>($"SELECT * FROM UsersView WHERE UserName LIKE '{userName}%'").MapAllTo<IEnumerable<QA.Data.UsersView>, UsersView>();
        }

        public IEnumerable<AnswerView> GetAnswers(int questionId)
        {
            return Db.dapperDb.Query<QA.Data.AnswerView>($"SELECT * FROM AnswersView WHERE QuestionId={questionId}").MapAllTo<IEnumerable<QA.Data.AnswerView>, AnswerView>();
        }
    }
}

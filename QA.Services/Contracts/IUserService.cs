using QA.Models.ViewModels;
using System.Collections.Generic;

namespace QA.Services.Contracts
{
    public interface IUserService
    {
        IEnumerable<UsersView> GetUsers();
        UsersView GetUser(string userId);
        IEnumerable<QuestionView> GetUserQuestions(string userId);
        IEnumerable<UsersView> GetSearchUser(string userName);
        IEnumerable<AnswerView> GetAnswers(int questionId);
    }
}

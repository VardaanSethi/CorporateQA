using QA.Models;
using QA.Models.ViewModels;
using System.Collections.Generic;

namespace QA.Services.Contracts
{
    public interface IHomeService
    {
        IEnumerable<QuestionView> GetQuestions();
        IEnumerable<QuestionView> GetQuestionsByCategory(int categoryId);
        int AddQuestion(Question question);
        int AddAnswer(Answer answer);
        void AddLikes(List<string> likes, int answerId);
        void AddDislikes(List<string> dislikes, int answerId);
        void AddUpVotes(List<string> upVotes, int questionId);
        void AddViews(int views, int questionId);
        IEnumerable<QuestionView> GetSearchQuestions(string questionTitle);
        void AddBestSolution(bool isBestSolution, int answerId);
        IEnumerable<QuestionView> GetQuestionsByDate(int date);
        IEnumerable<QuestionView> GetUnSolvedQuestions();
        IEnumerable<QuestionView> GetSolvedQuestions();
        IEnumerable<QuestionView> GetUserParticipation(string userId);
    }
}

using QA.Models;
using QA.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace QA.Services.Contracts
{
    public interface IHomeService
    {
        List<QuestionView> GetQuestions();
        List<QuestionView> GetQuestionsByCategory(int categoryId);
        int PostQuestion(Question question);
        int PostAnswer(Answer answer);
        void PostLikes(List<string> likes, int answerId);
        void PostDislikes(List<string> dislikes, int answerId);
        void PostUpVotes(List<string> upVotes, int questionId);
        void PostViews(int views, int questionId);
        List<QuestionView> GetSearchQuestions(string questionTitle);
        void PostBestSolution(bool isBestSolution, int answerId);
        List<QuestionView> GetQuestionsByDate(int date);
        List<QuestionView> GetUnSolvedQuestions();
        List<QuestionView> GetSolvedQuestions();
        List<QuestionView> GetUserParticipation(string userId);
    }
}

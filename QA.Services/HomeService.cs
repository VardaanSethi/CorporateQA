using AutoMapper;
using Dapper;
using Microsoft.Extensions.Configuration;
using QA.Models;
using QA.Models.ViewModels;
using QA.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using Dapper.Contrib.Extensions;

namespace QA.Services
{
    public class HomeService : IHomeService
    {
        private readonly DapperConnection Db;
        private readonly IMapper Mapper;
        public HomeService(IMapper mapper, DapperConnection dapperDb)
        {
            Db = dapperDb;
            Mapper = mapper;
        }

        public IEnumerable<QuestionView> GetQuestions()
        {
            return Db.dapperDb.Query<QA.Data.QuestionView>($"SELECT * FROM QuestionsView").MapAllTo<IEnumerable<QA.Data.QuestionView>, QuestionView>();
        }

        public IEnumerable<QuestionView> GetQuestionsByCategory(int categoryId)
        {
            return Db.dapperDb.Query<QA.Data.QuestionView>($"SELECT * FROM QuestionsView WHERE CategoryId={categoryId}").MapAllTo<IEnumerable<QA.Data.QuestionView>, QuestionView>();
        }

        public int AddQuestion(Question question)
        {
            return  (int)Db.dapperDb.Insert<QA.Data.Question>(this.Mapper.Map<QA.Data.Question>(question));
        }

        public int AddAnswer(Answer answer)
        {
            return (int)Db.dapperDb.Insert<QA.Data.Answer>(this.Mapper.Map<QA.Data.Answer>(answer));
        }

        public void AddLikes(List<string> likes, int answerId)
        {
            var answer = this.Mapper.Map<Answer>(Db.dapperDb.Get<QA.Data.Answer>(answerId));
            answer.Likes = likes;
            Db.dapperDb.Update<QA.Data.Answer>(this.Mapper.Map<QA.Data.Answer>(answer));
        }
        public void AddDislikes(List<string> dislikes, int answerId)
        {
            var answer = this.Mapper.Map<Answer>(Db.dapperDb.Get<QA.Data.Answer>(answerId));
            answer.Dislikes = dislikes;
            Db.dapperDb.Update<QA.Data.Answer>(this.Mapper.Map<QA.Data.Answer>(answer));
        }

        public void AddUpVotes(List<string> upVotes, int questionId)
        {
            var question = this.Mapper.Map<Question>(Db.dapperDb.Get<QA.Data.Question>(questionId));
            question.UpVotes = upVotes;
            Db.dapperDb.Update<QA.Data.Question>(Mapper.Map<QA.Data.Question>(question));
        }

        public void AddViews(int views, int questionId)
        {
            var question = this.Mapper.Map<Question>(Db.dapperDb.Get<QA.Data.Question>(questionId));
            question.Views++;
            Db.dapperDb.Update<QA.Data.Question>(this.Mapper.Map<QA.Data.Question>(question));
        }

        public IEnumerable<QuestionView> GetSearchQuestions(string questionTitle)
        {
            return Db.dapperDb.Query<QA.Data.QuestionView>($"SELECT * FROM QuestionsView WHERE Title LIKE '{questionTitle}%'").MapAllTo<IEnumerable<QA.Data.QuestionView>, QuestionView>();
        }

        public void AddBestSolution(bool isBestSolution, int answerId)
        {
            var answer = this.Mapper.Map<Answer>(Db.dapperDb.Get<QA.Data.Answer>(answerId));
            answer.IsBestSolution = isBestSolution;
            Db.dapperDb.Update<QA.Data.Answer>(this.Mapper.Map<QA.Data.Answer>(answer));
        }

        public IEnumerable<QuestionView> GetQuestionsByDate(int date)
        {
            var requiredDate = DateTime.Now.AddDays(-date).ToString("yyyy-MM-dd hh:mm:ss.sss");
            return Db.dapperDb.Query<QA.Data.QuestionView>($"SELECT * FROM QuestionsView WHERE CreatedOn>'{requiredDate}'").MapAllTo<IEnumerable<QA.Data.QuestionView>, QuestionView>();
        }

        public IEnumerable<QuestionView> GetSolvedQuestions()
        {
            return Db.dapperDb.Query<QA.Data.QuestionView>($"SELECT * FROM QuestionsView WHERE BestSolution IS NOT NULL").MapAllTo<IEnumerable<QA.Data.QuestionView>, QuestionView>();
        }

        public IEnumerable<QuestionView> GetUnSolvedQuestions()
        {
            return Db.dapperDb.Query<QA.Data.QuestionView>($"SELECT * FROM QuestionsView WHERE BestSolution IS NULL").MapAllTo<IEnumerable<QA.Data.QuestionView>, QuestionView>();
        }

        public IEnumerable<QuestionView> GetUserParticipation(string userId)
        {
            return Db.dapperDb.Query<QA.Data.QuestionView>($"SELECT * FROM QuestionsView WHERE AnswersUserId='{userId}'").MapAllTo<IEnumerable<QA.Data.QuestionView>, QuestionView>();
        }
    }
}
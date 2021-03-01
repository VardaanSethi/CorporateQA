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
using System.Text;
using System.Linq;
using Dapper.Contrib.Extensions;

namespace QA.Services
{
    public class HomeService : IHomeService
    {
        private readonly IDbConnection Db;
        private readonly IMapper Mapper;
        public HomeService(IConfiguration configuration, IMapper mapper)
        {
            this.Db = new SqlConnection(configuration.GetConnectionString("DefaultConnection"));
            this.Mapper = mapper;
        }

        public List<QuestionView> GetQuestions()
        {
            var sql = $"SELECT * FROM QuestionsView";
            return this.Mapper.Map<List<QuestionView>>(this.Db.Query<QA.Data.QuestionView>(sql).ToList());
        }

        public List<QuestionView> GetQuestionsByCategory(int categoryId)
        {
            var sql = $"SELECT * FROM QuestionsView WHERE CategoryId={categoryId}";
            return this.Mapper.Map<List<QuestionView>>(this.Db.Query<QA.Data.QuestionView>(sql).ToList());

        }

        public int PostQuestion(Question question)
        {
            return (int)this.Db.Insert<QA.Data.Question>(this.Mapper.Map<QA.Data.Question>(question));
        }


        public int PostAnswer(Answer answer)
        {
            return (int)this.Db.Insert<QA.Data.Answer>(this.Mapper.Map<QA.Data.Answer>(answer));
        }

        public void PostLikes(List<string> likes, int answerId)
        {
            var answer = this.Mapper.Map<Answer>(this.Db.Get<QA.Data.Answer>(answerId));
            answer.Likes = likes;
            this.Db.Update<QA.Data.Answer>(this.Mapper.Map<QA.Data.Answer>(answer));
        }
        public void PostDislikes(List<string> dislikes, int answerId)
        {
            var answer = this.Mapper.Map<Answer>(this.Db.Get<QA.Data.Answer>(answerId));
            answer.Dislikes = dislikes;
            this.Db.Update<QA.Data.Answer>(this.Mapper.Map<QA.Data.Answer>(answer));
        }

        public void PostUpVotes(List<string> upVotes, int questionId)
        {
            var question = this.Mapper.Map<Question>(this.Db.Get<QA.Data.Question>(questionId));
            question.UpVotes = upVotes;
            this.Db.Update<QA.Data.Question>(this.Mapper.Map<QA.Data.Question>(question));
        }

        public void PostViews(int views, int questionId)
        {
            var question = this.Mapper.Map<Question>(this.Db.Get<QA.Data.Question>(questionId));
            question.Views++;
            this.Db.Update<QA.Data.Question>(this.Mapper.Map<QA.Data.Question>(question));
        }

        public List<QuestionView> GetSearchQuestions(string questionTitle)
        {
            var sql = $"SELECT * FROM QuestionsView WHERE Title LIKE '{questionTitle}%'";
            return this.Mapper.Map<List<QuestionView>>(this.Db.Query<QA.Data.QuestionView>(sql).ToList());
        }
        public void PostBestSolution(bool isBestSolution, int answerId)
        {
            var answer = this.Mapper.Map<Answer>(this.Db.Get<QA.Data.Answer>(answerId));
            answer.IsBestSolution = isBestSolution;
            this.Db.Update<QA.Data.Answer>(this.Mapper.Map<QA.Data.Answer>(answer));
        }

        public List<QuestionView> GetQuestionsByDate(int date)
        {
            var sql = $"SELECT * FROM QuestionsView WHERE CreatedOn>'{DateTime.Now.AddDays(-date)}'";
            return this.Mapper.Map<List<QuestionView>>(this.Db.Query<QA.Data.QuestionView>(sql).ToList());
        }

        public List<QuestionView> GetSolvedQuestions()
        {
            var sql = $"SELECT * FROM QuestionsView WHERE BestSolution IS NOT NULL";
            return this.Mapper.Map<List<QuestionView>>(this.Db.Query<QA.Data.QuestionView>(sql).ToList());
        }
        public List<QuestionView> GetUnSolvedQuestions()
        {
            var sql = $"SELECT * FROM QuestionsView WHERE BestSolution IS NULL";
            return this.Mapper.Map<List<QuestionView>>(this.Db.Query<QA.Data.QuestionView>(sql).ToList());
        }
        public List<QuestionView> GetUserParticipation(string userId)
        {
            var sql = $"SELECT * FROM QuestionsView WHERE AnswersUserId='{userId}'";
            return this.Mapper.Map<List<QuestionView>>(this.Db.Query<QA.Data.QuestionView>(sql).ToList());
        }
    }
}

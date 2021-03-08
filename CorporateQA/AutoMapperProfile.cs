using AutoMapper;
using Newtonsoft.Json;
using QA.Models;
using QA.Models.ViewModels;
using System;
using System.Collections.Generic;

namespace CorporateQA
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Category, QA.Data.Category>();
            CreateMap<QA.Data.Category, Category>();

            CreateMap<Question, QA.Data.Question>()
                .ForMember(d => d.CategoryId, options => options.MapFrom(s => Convert.ToInt64(s.CategoryId)))
                .ForMember(d => d.UpVotes, options => options.MapFrom(s => JsonConvert.SerializeObject(s.UpVotes)));

            CreateMap<QA.Data.Question, Question>()
                .ForMember(d => d.UpVotes, options => options.MapFrom(s => JsonConvert.DeserializeObject<List<string>>(s.UpVotes)));

            CreateMap<Answer, QA.Data.Answer>()
                .ForMember(d => d.Likes, options => options.MapFrom(s => JsonConvert.SerializeObject(s.Likes)))
                .ForMember(d => d.Dislikes, options => options.MapFrom(s => JsonConvert.SerializeObject(s.Dislikes)));

            CreateMap<QA.Data.Answer, Answer>()
               .ForMember(d => d.Likes, options => options.MapFrom(s => JsonConvert.DeserializeObject<List<string>>(s.Likes)))
               .ForMember(d => d.Dislikes, options => options.MapFrom(s => JsonConvert.DeserializeObject<List<string>>(s.Dislikes)));

            CreateMap<QA.Data.AnswerView, AnswerView>()
                .ForMember(d => d.Likes, options => options.MapFrom(s => JsonConvert.DeserializeObject<List<string>>(s.Likes)))
                .ForMember(d => d.Dislikes, options => options.MapFrom(s => JsonConvert.DeserializeObject<List<string>>(s.Dislikes)));

            CreateMap<QA.Data.QuestionView, QuestionView>()
               .ForMember(d => d.UpVotes, options => options.MapFrom(s => JsonConvert.DeserializeObject<List<string>>(s.UpVotes)));


            CreateMap<QA.Data.UsersView, UsersView>()
                 .ForMember(d => d.Likes, options => options.MapFrom(s => JsonConvert.DeserializeObject<List<string>>(s.Likes)))
                 .ForMember(d => d.Dislikes, options => options.MapFrom(s => JsonConvert.DeserializeObject<List<string>>(s.Dislikes)));

        }
    }
}

using Microsoft.AspNetCore.Mvc;
using QA.Models;
using QA.Services.Contracts;
using System.Collections.Generic;

namespace CorporateQA.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IHomeService HomeService;
        public HomeController(IHomeService homeService)
        {
            this.HomeService = homeService;
        }
        public IActionResult Index()
        {
            return Ok("QA");
        }

        [Route("questions")]
        public IActionResult GetQuestions()
        {
            return Ok(this.HomeService.GetQuestions());
        }

        [Route("questionsbycategory/{categoryId}")]

        public IActionResult GetQuestionsByCategory(int categoryId)
        {
            return Ok(this.HomeService.GetQuestionsByCategory(categoryId));
        }

        [Route("question")]

        public IActionResult PostQuestion(Question question)
        {
            return Ok(this.HomeService.PostQuestion(question));
        }

        [Route("answer")]

        public IActionResult PostAnswer(Answer answer)
        {
            return Ok(this.HomeService.PostAnswer(answer));
        }

        [Route("likes/{answerId}")]
        public IActionResult PostLikes(List<string> likes, int answerId)
        {
            this.HomeService.PostLikes(likes, answerId);
            return Ok();
        }
        [Route("dislikes/{answerId}")]
        public IActionResult PostDislikes(List<string> dislikes, int answerId)
        {
            this.HomeService.PostDislikes(dislikes, answerId);
            return Ok();
        }
        [Route("upvotes/{questionId}")]
        public IActionResult PostUpVotes(List<string> upVotes, int questionId)
        {
            this.HomeService.PostUpVotes(upVotes, questionId);
            return Ok();
        }

        [Route("views/{questionId}")]
        public IActionResult PostViews(int views, int questionId)
        {
            this.HomeService.PostViews(views, questionId);
            return Ok();
        }

        [Route("searchquestions/{questionTitle}")]

        public IActionResult GetSearchQuestions(string questionTitle)
        {
            return Ok(this.HomeService.GetSearchQuestions(questionTitle));
        }

        [Route("bestsolution/{answerId}/{isBestSolution}")]

        public IActionResult GetBestSolution(bool isBestSolution, int answerId)
        {
            this.HomeService.PostBestSolution(isBestSolution, answerId);
            return Ok();
        }

        [Route("questionsbydate/{date}")]
        public IActionResult GetQuestionsByDate(int date)
        {
            return Ok(this.HomeService.GetQuestionsByDate(date));
        }

        [Route("solvedquestions")]
        public IActionResult GetSolvedQuestions()
        {
            return Ok(this.HomeService.GetSolvedQuestions());
        }

        [Route("unsolvedquestions")]
        public IActionResult GetUnSolvedQuestions()
        {
            return Ok(this.HomeService.GetUnSolvedQuestions());
        }

        [Route("userparticipation/{userId}")]
        public IActionResult GetUserParticipation(string userId)
        {
            return Ok(this.HomeService.GetUserParticipation(userId));
        }
    }
}

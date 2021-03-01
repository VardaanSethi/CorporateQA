using Microsoft.AspNetCore.Mvc;
using QA.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CorporateQA.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService UserService;
        public UserController(IUserService userService)
        {
            this.UserService = userService;
        }
        [Route("users")]

        public IActionResult GetUsers()
        {
            return Ok(this.UserService.GetUsers());
        }

        [Route("user/{userId}")]

        public IActionResult GetUser(string userId)
        {
            return Ok(this.UserService.GetUser(userId));
        }

        [Route("userquestions/{userId}")]

        public IActionResult GetUserQuestions(string userId)
        {
            return Ok(this.UserService.GetUserQuestions(userId));
        }

        [Route("searchuser/{userName}")]

        public IActionResult GetSearchUser(string userName)
        {
            return Ok(this.UserService.GetSearchUser(userName));
        }

        [Route("answers/{questionId}")]

        public IActionResult GetAnswers(int questionId)
        {
            return Ok(this.UserService.GetAnswers(questionId));
        }
    }
}

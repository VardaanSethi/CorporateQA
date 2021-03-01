using System;
using System.Collections.Generic;
using System.Text;

namespace QA.Data
{
    public class Signup
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string JobRole { get; set; }
        public string Profile { get; set; }
        public string ProfileImageUrl { get; set; }
        public string Department { get; set; }
        public string JobLocation { get; set; }
    }
    public class Signin
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}

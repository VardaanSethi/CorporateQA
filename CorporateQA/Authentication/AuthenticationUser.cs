using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CorporateQA.Authentication
{
    public class AuthenticationUser : IdentityUser
    {
        public string JobRole { get; set; }
        public string ProfileImageUrl { get; set; }
        public string Department { get; set; }
        public string JobLocation { get; set; }
    }
}

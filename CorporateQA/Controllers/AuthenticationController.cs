using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using CorporateQA.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using QA.Models;

namespace CorporateQA.Controllers
{
        [Route("api/[controller]")]
        [ApiController]
        public class AuthenticationController : ControllerBase
        {
            private readonly UserManager<AuthenticationUser> UserManager;
            private readonly RoleManager<IdentityRole> RoleManager;

            private readonly IConfiguration Configuration;

            public AuthenticationController(UserManager<AuthenticationUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration)
            {
                this.UserManager = userManager;
                this.RoleManager = roleManager;
                this.Configuration = configuration;
            }

            [Route("signup")]

            public async Task<IActionResult> PostSignup([FromBody] Signup user)
            {
                var userExist = await UserManager.FindByNameAsync(user.UserName);
                if (userExist != null)
                {
                    return Ok(new Response { Status = "Error", Message = "User Already Exists" });

                }
                AuthenticationUser authenticationUser = new AuthenticationUser()
                {
                    Email = user.Email,
                    SecurityStamp = Guid.NewGuid().ToString(),
                    UserName = user.UserName,
                    Department = user.Department,
                    JobLocation = user.JobLocation,
                    JobRole = user.JobRole,
                    ProfileImageUrl = user.ProfileImageUrl
                };

                var result = await this.UserManager.CreateAsync(authenticationUser, user.Password);
                if (!result.Succeeded)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Cant create user" });
                }

                if (!await this.RoleManager.RoleExistsAsync("Admin"))
                    await this.RoleManager.CreateAsync(new IdentityRole("Admin"));

                if (!await this.RoleManager.RoleExistsAsync("User"))
                    await this.RoleManager.CreateAsync(new IdentityRole("User"));


                await this.UserManager.AddToRoleAsync(authenticationUser, "User");

                return Ok(new Response { Status = "Success", Message = "Account Created Successfully" });
            }


            [Route("signin")]

            public async Task<IActionResult> PostSignin([FromBody] Signin user)
            {
                var userExist = await this.UserManager.FindByNameAsync(user.UserName);
                if (userExist != null && await this.UserManager.CheckPasswordAsync(userExist, user.Password))
                {
                    var userRoles = await this.UserManager.GetRolesAsync(userExist);
                    var role = await this.UserManager.IsInRoleAsync(userExist, "Admin") ? "Admin" : "User";
                    var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name,userExist.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString())
                };

                    foreach (var userRole in userRoles)
                    {
                        authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                    }

                    var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JWT:Secret"]));

                    var token = new JwtSecurityToken
                    (
                        issuer: Configuration["JWT:ValidIssuer"],
                        audience: Configuration["JWT:ValidAudience"],
                        expires: DateTime.Now.AddHours(5),
                        claims: authClaims,
                        signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                    );

                    return Ok(new
                    {
                        token = new JwtSecurityTokenHandler().WriteToken(token),
                        expiration = token.ValidTo,
                        user = userExist.UserName,
                        id = userExist.Id,
                        profileImageUrl = userExist.ProfileImageUrl,
                        status = "Success",
                        message = "Login Successful",
                        role = role
                    });
                }
                return Ok(new Response { Status = "Error", Message = "Wrong UserName and Password" });
            }

        }
    }
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TopLearn.Models
{
    public class LoginRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public bool RememberMe { get; set; }
    }
}
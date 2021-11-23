using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace TopLearn.Db.Entity
{
    public class AppDbContext : IdentityDbContext
    {

        public AppDbContext(DbContextOptions dbContextOptions)
        : base(dbContextOptions)
        {

        }
        
    }
}
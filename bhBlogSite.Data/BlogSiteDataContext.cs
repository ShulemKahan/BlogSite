using Microsoft.EntityFrameworkCore;
using System;

namespace bhBlogSite.Data
{
    
        public class BlogSiteDataContext : DbContext
        {
            private readonly string _connectionString;

            public BlogSiteDataContext(string connectionString)
            {
                _connectionString = connectionString;
            }

            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                optionsBuilder.UseSqlServer(_connectionString);
            }

        
        public DbSet<BlogPost> BlogPosts { get; set; }
        public DbSet<Comment> Comments { get; set; }

           
        }
    
}

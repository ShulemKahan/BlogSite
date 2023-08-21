using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bhBlogSite.Data
{
    public class BlogSiteRepository
    {
        private readonly string _connectionString;

        public BlogSiteRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddPost(BlogPost post)
        {
            using var context = new BlogSiteDataContext(_connectionString);
            context.BlogPosts.Add(post);
            context.SaveChanges();
        }

        public List<BlogPost> GetAll()
        {
            using var context = new BlogSiteDataContext(_connectionString);
            return context.BlogPosts.Include(p => p.Comments).OrderByDescending(d => d.Date).ToList();
        }

        public BlogPost GetPostById(int id)
        {
            using var context = new BlogSiteDataContext(_connectionString);
            return context.BlogPosts.Include(b => b.Comments).FirstOrDefault(b => b.Id == id);
        }

        public void AddComment(Comment comment)
        {

            using var context = new BlogSiteDataContext(_connectionString);
            context.Comments.Add(comment);
            context.SaveChanges();
        }

        public int GetCommentsAmount(int id)
        {
            using var context = new BlogSiteDataContext(_connectionString);
            return context.Comments.Where(c => c.BlogPostId == id).Count();
        }

        public int GetNewestId()
        {
            using var context = new BlogSiteDataContext(_connectionString);
            return context.BlogPosts.OrderByDescending(p => p.Date).FirstOrDefault().Id;
        }

    }
}

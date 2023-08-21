using bhBlogSite.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bhBlogSite.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BlogSiteController : ControllerBase
    {
        private string _connectionString;

        public BlogSiteController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("addpost")]
        public void AddPost(BlogPost post)
        {
            post.Date = DateTime.Now;
            var repo = new BlogSiteRepository(_connectionString);
            repo.AddPost(post);
        }

        [HttpGet]
        [Route("getall")]
        public List<BlogPost> GetAll()
        {
            var repo = new BlogSiteRepository(_connectionString);
            return repo.GetAll();
        }

        [HttpGet]
        [Route("getpostbyid")]
        public BlogPost GetPostById(int id)
        {
            var repo = new BlogSiteRepository(_connectionString);
            return repo.GetPostById(id);
        }

        [HttpPost]
        [Route("addcomment")]
        public void AddComment(Comment comment)
        {
            comment.CommentedOn = DateTime.Now;
            
            var repo = new BlogSiteRepository(_connectionString);
            repo.AddComment(comment);
        }

        [HttpGet]
        [Route("getcommentsamount")]
        public int GetCommentsAmount(int id)
        {
            var repo = new BlogSiteRepository(_connectionString);
            return repo.GetCommentsAmount(id);
        }

        [HttpGet]
        [Route("getnewestid")]
        public int GetNewestId()
        {
            var repo = new BlogSiteRepository(_connectionString);
            return repo.GetNewestId();
        }
    }
}

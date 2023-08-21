using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace bhBlogSite.Data
{
    public class Comment
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string CommentBody { get; set; }
        public DateTime CommentedOn { get; set; }
        public int BlogPostId { get; set; }

        [JsonIgnore]
        public BlogPost BlogPost { get; set; }
    }
}

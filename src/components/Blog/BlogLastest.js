import "./Blog.scss";
import BlogItem from "./BlogItem";
import {blog} from './../../helpers/blogList'

const BlogLastest = () => {  

    const blogLastestItems = blog.slice(-4);

    return ( 
        <section className="blog">

        <div className="blog__content container container--pall">

          <h2>Latest Articles</h2>

          <div className="blog__grid">

          {blogLastestItems.map((p) => {
            return (
              <BlogItem key={p.id} title={p.title} author={p.author} description={p.description} imagePreview={p.imagePreview}/>
            )
          })}

          </div>

        </div>

      </section>
     );
}
 
export default BlogLastest;
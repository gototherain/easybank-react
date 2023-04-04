import "./Blog.scss";
import BlogItem from "./BlogItem";
import {blog} from '../../helpers/blogList'

const BlogLastest = () => {  

    return ( 
        <section className="blog">

        <div className="blog__content container container--pall">

          <h2>Latest Articles</h2>

          <div className="blog__grid">

          {blog.slice(0, 4).map((p, index) => {
            return (
              <BlogItem key={p.id} index={index} title={p.title} author={p.author} description={p.description} imagePreview={p.imagePreview}/>
            )
          })}

          </div>

        </div>

      </section>
     );
}
 
export default BlogLastest;
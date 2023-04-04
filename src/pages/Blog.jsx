import "../components/Blog/Blog.scss";
import BlogItem from "../components/Blog/BlogItem";
import { blog } from '../helpers/blogList'

const Blog = () => {
  return (
    <section className="blog">

      <div className="blog__content container container--pall">

        <h2>Blog</h2>

        <div className="blog__grid">

          {blog.map((p, index) => {
            return (
              <BlogItem key={p.id} index={index} title={p.title} author={p.author} description={p.description} imagePreview={p.imagePreview}/>
            )
          })}



        </div>

      </div>

    </section>
  );
}

export default Blog;
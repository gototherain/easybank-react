import { useParams } from "react-router-dom";
import {blog} from "../helpers/blogList"
import BtnSource from "../components/BtnSource/BtnSource";

const BlogItem = () => {
  const {id} = useParams();
  const blogItem = blog[id];

  const bgImage = {
    backgroundImage: `url(${blogItem.image})`,
  };

  return (
    <section className="blogItem">
      <div className="blogItem__image" style={bgImage}>
        <div className="container container--pall">
          <h1 className="blogItem__title">{blogItem.title}</h1>
          <div className="blogItem__author">{blogItem.author}</div>
        </div>
      </div>
      <div className="container container--pall">
        <div className="blogItem__description" dangerouslySetInnerHTML={{__html: blogItem.fullDescription}}>
     
        </div>

        {blogItem.source && (
          <BtnSource link={blogItem.source} title={blogItem.title} />

        )}
        

      </div>
    </section>
  );
};

export default BlogItem;

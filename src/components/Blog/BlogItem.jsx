import { NavLink } from "react-router-dom";
const BlogItem = (p) => {

    const bgImage = {
        backgroundImage: `url(${p.imagePreview})`
    }

    return (
        <NavLink to={`/blog/${p.index}`} className="blog__item">
            <div className="blog__image" style={bgImage}>
            
            </div>
            <div className="blog__text">
                <div className="blog__author">
                    By {p.author}
                </div>
                <div className="blog__title">
                    {p.title}
                </div>
                <div className="blog__description">
                    {p.description}
                </div>

            </div>
        </NavLink>
    );
}

export default BlogItem;
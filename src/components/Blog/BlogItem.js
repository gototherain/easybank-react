const BlogItem = (p) => {

    const bgImage = {
        backgroundImage: `url(${p.imagePreview})`
    }

    return (
        <a href="#" className="blog__item">
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
        </a>
    );
}

export default BlogItem;
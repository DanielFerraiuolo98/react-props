import posts from "../data/posts.js";

function Main() {
    // Oggetto per mappare i tag ai colori
    const tagColors = {
        "js": "blue",
        "css": "orange",
        "html": "green",
        "php": "purple"
    };

    const post = [...posts];
    return (
        <main className="container">
            <div className="row gy-4">
                {post.filter((immagine) => immagine.published)
                    .map((immagine) => (
                        <div className="col-12 col-md-4 col-lg-4" key={immagine.id}>
                            <img src="https://placehold.co/600x400" alt="immagine di placeholder" />
                            <h2>{immagine.title}</h2>
                            <p>{immagine.content}</p>
                            <div>
                                {immagine.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="tag"
                                        style={{ color: tagColors[tag], marginRight: "10px" }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
            </div>
        </main>
    );
}

export default Main;



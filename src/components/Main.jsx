import posts from "../data/posts.js";

function Main() {
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
                            <p className="tag">{immagine.tags}</p>
                        </div>
                    ))}
            </div>
        </main>
    );
}

export default Main;

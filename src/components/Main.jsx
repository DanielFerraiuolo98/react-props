import posts from "../data/posts.js";
import Card from "./Card.jsx";

function Main() {
    const post = [...posts];
    return (
        <main className="container">
            <div className="row gy-4">
                {post.length > 0
                    ? post.map((immagine) => (
                        <div className="col-12 col-md-6 col-lg-4" key={immagine.id}>
                            <Card
                                item={immagine}
                                title={immagine.title}
                                image={immagine.image}
                                content={immagine.content}
                                tags={immagine.tags}
                                published={immagine.published}
                            />
                        </div>
                    ))
                    : "Non ci sono post"}
            </div>
        </main>
    );
}

export default Main;
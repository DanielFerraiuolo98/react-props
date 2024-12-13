function Card({
    image = "https://placehold.co/600x400",
    title,
    tags,
    content,
    published,
}) {
    return (
        <>
            <img
                src={"https://placehold.co/600x400"}
                alt={title}
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <div>{tags}</div>
                <div>{published}</div>
            </div>
        </>
    );
}



export default Card;
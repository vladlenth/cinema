function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster,
    } = props;

    return (
        <div id={id} className='card'>
            <div className='card-image waves-effect waves-block waves-light'>
                {poster === 'N/A' ? (
                    <img
                        className='activator'
                        src={`https://placehold.co/58x40?text=Pics+NotFound`}
                        alt='Placeholder'
                    />
                ) : (
                    <img className='activator' src={poster} alt={title} />
                )}
            </div>
            <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                    {title}
                </span>
                <p>
                    {year} <span>{type}</span>
                </p>
            </div>
        </div>
    );
}

export { Movie };

export const Quote = ({ quote, author, series }) => {
  return (
    <figure className="text-end">
      <blockquote className="blockquote">
        <p>{quote}</p>
      </blockquote>
      <figcaption className="blockquote-footer">
        {author} in <cite title="Source Title">{series}</cite>
      </figcaption>
    </figure>
  );
};

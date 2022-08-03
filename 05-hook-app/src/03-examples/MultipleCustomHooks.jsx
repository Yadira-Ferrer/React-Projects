import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  // Para desestructurar el objeto de un arreglo si no es nulo.
  const { author, quote, series } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {isLoading ? (
        <div className="alert alert-info text-center mt-2">
          <h3>Loading...</h3>
        </div>
      ) : (
        <figure className="text-end">
          <blockquote className="blockquote">
            <p>{quote}</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            {author} in <cite title="Source Title">{series}</cite>
          </figcaption>
        </figure>
      )}
      <button
        className="btn btn-dark"
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next Quote
      </button>
    </>
  );
};

import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';

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
        <LoadingQuote />
      ) : (
        <Quote quote={quote} author={author} series={series} />
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

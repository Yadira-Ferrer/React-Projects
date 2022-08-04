import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ quote, author, series }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <figure className="text-end">
          <blockquote className="blockquote">
            <p ref={pRef}>{quote}</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            {author} in <cite title="Source Title">{series}</cite>
          </figcaption>
        </figure>
        <code>{JSON.stringify(boxSize)}</code>
      </div>
    </>
  );
};

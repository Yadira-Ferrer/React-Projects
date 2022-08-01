import { useEffect } from 'react';

export const Message = () => {
  useEffect(() => {
    console.log('Message mounted...');

    return () => {
      console.log('Message unmounted...');
    };
  }, []);

  return (
    <>
      <div className="alert alert-info mt-2" role="alert">
        Ese usuario ya existe...
      </div>
    </>
  );
};

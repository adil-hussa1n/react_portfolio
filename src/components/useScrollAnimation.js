import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useScrollAnimation = (options = {}) => {
  const { ref, inView } = useInView(options);

  useEffect(() => {
    if (inView) {
      ref.current.classList.add('animate');
    } else {
      ref.current.classList.remove('animate');
    }
  }, [inView, ref]);

  return ref;
};

export default useScrollAnimation;

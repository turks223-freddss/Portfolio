import useInView from './hooks/useInView';

export default function Section({ id, color = 'bg-transparent', children }) {
    const [ref, isVisible] = useInView(0.1); // You can adjust the threshold
    return (
      <section
        ref={ref}
        id={id}
        className={`
          h-screen w-screen snap-start flex items-center justify-center overflow-y-auto
          transform transition-all duration-[2500ms] ease-out
          ${color}
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-8'}
        `}
      >
        <div className=' max-h-screen overflow-y-auto flex items-center justify-center'>
        {children}
        </div>
        
      </section>
    );
  }
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-10 px-4">
      <img
        src={`${import.meta.env.BASE_URL}logo-las-gemelas.jpeg`}
        alt="Fast Food Las Gemelas Logo"
        className="animate-float animate-pulse-glow w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-brand-red dark:border-brand-gold object-cover"
      />
      <h1 className="animate-shimmer mt-5 text-5xl sm:text-6xl font-heading tracking-widest text-brand-dark dark:text-brand-gold uppercase">
        Las Gemelas
      </h1>
      <p className="mt-1 text-sm sm:text-base text-gray-600 dark:text-brand-gray font-semibold tracking-wide uppercase">
        Fast Food
      </p>
      <p className="mt-3 text-xs text-brand-red dark:text-brand-red-light tracking-widest uppercase font-semibold">
        {'\uD83D\uDD25'} &iexcl;La casa del verdadero placer! {'\uD83D\uDD25'}
      </p>
    </section>
  );
}

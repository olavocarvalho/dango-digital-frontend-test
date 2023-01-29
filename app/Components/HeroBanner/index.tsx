export function HeroBanner() {
  return (
    <div className="bg-slate-900">
      <nav className="mx-auto max-w-4xl px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex flex-col overflow-hidden md:py-24 py-14 md:px-20 justify-center items-center">
          <h1 className="font-serif font-extrabold uppercase text-center text-slate-50 md:text-7xl text-5xl">
            Browse our products
          </h1>
          <p className="mt-6 font-sans text-base text-slate-200 text-center px-4">
            Our biology inspired supplements supports the body and mind during
            the fasting period. Get all the essential nutrients, minerals and
            vitamins your body needs.
          </p>
        </div>
      </nav>
    </div>
  );
}

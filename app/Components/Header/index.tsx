// TODO: Animate and resize header on scroll: https://www.skillthrive.com/hunter/posts/change-nav-on-scroll

import { Totalizer } from "../Totalizer";

export function Header() {
  return (
    <div className="bg-slate-900 sticky top-0 z-50 bg-opacity-95 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative flex md:py-8 py-6 items-center justify-between text-slate-50">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start font-serif font-extrabold text-2xl">
            FASTING
            <span className="text-slate-300 font-medium">SUPLEMENTS</span>
          </div>
          <div className="flex flex-col flex-auto items-end justify-center">
            <Totalizer />
          </div>
        </div>
      </nav>
    </div>
  );
}

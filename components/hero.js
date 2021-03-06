export default function Hero() {
  return (
    <div className="text-center">
      <h1 className="text-4xl tracking-tight font-extrabold text-neutral-800 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">Data to enrich your</span>{' '}
        <span className="block text-amber-300 xl:inline">online business</span>
      </h1>
      <p className="mt-3 max-w-md mx-auto text-base text-neutral-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
        fugiat veniam occaecat fugiat aliqua.
      </p>
      <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div className="rounded-md shadow">
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-300 hover:bg-amber-700 md:py-4 md:text-lg md:px-10"
          >
            Get started
          </a>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-amber-300 bg-white hover:bg-neutral-50 md:py-4 md:text-lg md:px-10"
          >
            Live demo
          </a>
        </div>
      </div>
    </div>
  )
}

import Logo from "components/logo";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-sm text-center mx-auto">
        <Link href="/">
          <a
            aria-label="View"
            className="inline-block mb-5 rounded-full sm:mx-auto"
          >
            <div className="flex items-center justify-center w-52 h-52 mb-4 rounded-full  p-4">
              <Logo className="p-4" />
            </div>
          </a>
        </Link>
        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          🚧 Neurolândia 🚧
        </h2>
        <p className="text-base text-gray-700 md:text-lg sm:px-4">
          Ainda estamos em construção. <br /> Em breve estaremos disponíveis.
        </p>
        <hr className="w-full my-8 border-gray-300" />
      </div>
    </div>
  );
};
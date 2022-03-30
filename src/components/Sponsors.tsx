import { sponsors } from "../utils/sponsors";

export default function Sponsors() {
  return (
    <section id="sponsors" className="bg-indigo-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div className="lg:sticky top-6">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Sponsors
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              We truly would not be here without our sponsors of all levels!
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a
                  href="#sponsors"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Become a Sponsor
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#sponsors"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-800 bg-indigo-200 hover:bg-indigo-100"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-12">
            {sponsors.map((tier, i) => tier.sponsors && tier.sponsors.length > 0 && (
              <div key={`tier-${i}`}>
                <h3 className="text-2xl text-indigo-900 font-semibold">{tier.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{tier.description}</p>
                <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:grid-cols-2">
                  {tier.sponsors.map((sponsor, j) => (
                    <a
                      key={`sponsor-${j}`}
                      href={sponsor.href}
                      target="_blank"
                      rel="noreferrer"
                      className="col-span-1 flex justify-center py-8 px-8 bg-white hover:bg-gray-50"
                    >
                      {sponsor.logo ? (
                        <img
                          className="max-h-12"
                          src={sponsor.logo}
                          alt={sponsor.name}
                        />
                      ): (
                        <span className="font-semibold text-indigo-900">{sponsor.name}</span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
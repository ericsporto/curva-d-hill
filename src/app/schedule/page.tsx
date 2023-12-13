'use client';

import { shows } from "@/utils/schedule";

export default function Schedule() {
  return (
    <main
      className="flex flex-col lg:flex-row justify-between h-full w-full gap-4 px-8 items-start lg:items-center relative"
      style={{
        backgroundImage: `url(/assets/fundo-curva-contractor.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
      }}
    >
      <div className="w-full text-gray-200 z-10 py-4">
        <h1 className="text-xl lg:text-5xl font-bold">Próximos Shows:</h1>
        <div className="mx-auto max-w-7xl">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-900">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-xl font-semibold text-white sm:pl-0"
                        >
                          Data
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-xl font-semibold text-white"
                        >
                          Local
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-xl font-semibold text-white"
                        >
                          Cidade
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-900">
                      {shows.map((show, index) => (
                        <tr key={index}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg font-medium text-white sm:pl-0">
                            {show.date}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-300">
                            {show.place}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-300">
                            {show.city}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-black lg:opacity-90"
        style={{ zIndex: 1 }}
      />
    </main>
  );
}

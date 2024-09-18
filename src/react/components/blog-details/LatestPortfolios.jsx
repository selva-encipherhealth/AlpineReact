import React, { useEffect, useState } from 'react';
import { portfolioData } from '../../data/portfolioData'; // Adjust the import path as necessary
import Reveal from '../../components/common/ScrollAnimation'; // Adjust the import path as necessary

const LatestPortfolios = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    const allProductDetails = portfolioData?.reduce((accumulator, item) => {
      return accumulator.concat(item.portfolioDetails);
    }, []);

    setPortfolioItems(allProductDetails);
  }, []);

  return (
    <div className="border border-solid border-gray-300 rounded-lg mt-10">
      {/* LATEST PROJECTS */}
      <div className="py-5 px-8 border-b border-solid border-gray-300">
        <h3 className="text-3xl font-semibold">Our Projects</h3>
      </div>

      <ul className="py-5 px-8">
        {portfolioItems?.slice(0, 3)?.map((portfolio, i) => (
          <Reveal key={i} from={20}>
            {/* LATEST PROJECT */}
            <li className="flex gap-4 py-3 border-b border-solid border-gray-300 last:border-b-0 text-gray-700 transition-all duration-500">
              <a
                href={`/portfolio/${portfolio?.portfolioName
                  ?.toLowerCase()
                  ?.split(' ')
                  ?.join('-')}`}
                className="flex-shrink-0"
              >
                <img
                  src={portfolio?.portfolioHeaderImage}
                  alt={portfolio?.portfolioName}
                  width={100}
                  height={100}
                  className="min-h-[80px] min-w-[100px] max-w-[100px] max-h-[80px] object-cover object-top rounded-md"
                  loading="lazy" // Similar to priority in Next.js
                />
              </a>

              <div>
                <h3 className="text-xl font-semibold line-clamp-1">{portfolio?.portfolioName}</h3>
                <a
                  href={`/portfolio/${portfolio?.portfolioName
                    ?.toLowerCase()
                    ?.split(' ')
                    ?.join('-')}`}
                  className="hover:text-primary text-base"
                >
                  See Details
                </a>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
};

export default LatestPortfolios;

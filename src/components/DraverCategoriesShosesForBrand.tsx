
import React from "react";

interface BrandData {
  styles: string[];
  features: string[];
  price_range: string;
  target_audience: string[];
  special_collections: string[];
}

type Props = {
  brand: string;
  categories: BrandData;
};

const DraverCategoriesShosesForBrand: React.FC<Props> = ({ categories }) => {
  return (
    <div className="p-4 border-b">
      <div className="mt-2 grid grid-cols-4 gap-4">
        <div>
          <h3 className="font-semibold ">Стили:</h3>
          <ul className="flex flex-col items-start">
            {categories.styles.map((style, index) => (
              <button key={index} className="text-left">{style}</button>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold ">Особенности:</h3>
          <ul className="flex flex-col items-start">
            {categories.features.map((feature, index) => (
              <button key={index} className="text-left">{feature}</button>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold ">Целевая аудитория:</h3>
          <ul className="flex flex-col items-start">
            {categories.target_audience.map((audience, index) => (
              <button key={index} className="text-left">{audience}</button>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Специальные коллекции:</h3>
          <ul className="flex flex-col items-start">
            {categories.special_collections.map((collection, index) => (
              <button key={index} className="text-left">{collection}</button>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DraverCategoriesShosesForBrand;

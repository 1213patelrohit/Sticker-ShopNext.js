import Image from "next/image";
import React from "react";
type Props = {
  data: {
    id: number;
    image: string;
    name: string;
    eth: number;
  };
};

const TopCollectionCard = ({ data }: Props) => {
  return (
    <div className="rounded-2xl  hover:shadow-md transition-all duration-150 border-2 cursor-pointer border-gray-300 border-opacity-30 p-5  ">
      <div className="flex items-center space-x-6">
        <div>
          <Image src={data.image} alt="img" width={48} height={48} />
        </div>
        <div>
          <h1 className=" text-base mb-2 text-blue-950 hover:text-blue-800 font-bold">
            {data.name}
          </h1>
          <span className=" text-sm text-black text-opacity-50 ">
            {data.eth} Price
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopCollectionCard;

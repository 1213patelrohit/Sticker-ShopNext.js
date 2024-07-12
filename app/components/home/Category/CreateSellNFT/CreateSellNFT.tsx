import React from "react";
import CreateSellNftCards from "./CreateSellNftCards";

const CreateSellNFT = () => {
  return (
    <div className="pt-16 pb-20 ">
      <h1 className=" text-center font-bold md:text-4xl text-blue-950">
        Create and Sell Your Stickers
      </h1>
      <div className=" w-[80%] mt-8 md:mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
      <div>
          <CreateSellNftCards
            image="/images/p1.png"
            title="1.Set Up Your Wallet "
          />
        </div><div>
          <CreateSellNftCards
            image="/images/p2.png"
            title="2.Create Your Collection "
          />
        </div><div>
          <CreateSellNftCards
            image="/images/p3.png"
            title="3. Add Your Stickers "
          />
        </div><div>
          <CreateSellNftCards
            image="/images/p4.png"
            title="1.List Them for Sale "
          />
        </div>
      </div>
    </div>
  );
};

export default CreateSellNFT;

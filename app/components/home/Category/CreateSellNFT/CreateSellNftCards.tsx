import Image from "next/image";
import React from "react";
type Props = {
  image: string;
  title: string;
};

const CreateSellNftCards = ({ image, title }: Props) => {
  return (
    <div>
      <Image src={image} alt="img" width={60} height={60} className="mx-auto" />
      <h1 className="mt-8 mb-2 text-center text-lg text-blue-950 font-bold">{title}</h1>
      <p className="text-sm text-center text-black text-opacity-60">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati accusamus laudantium veniam vero. Iste perferendis ab consectetur dicta asperiores
      </p>
    </div>
  );
};

export default CreateSellNftCards;

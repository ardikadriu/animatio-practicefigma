import Image from "next/image";
import photo2 from "@/public/photo2.png";

const Images = () => {
  return (
    <div className="flex items-center w-[1920px] ">
      <div className="flex items-center justify-end">
        <svg
          className="mr-4"
          width="209"
          height="2"
          viewBox="0 0 209 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="208.292" y1="1" x2="1.52588e-05" y2="1" stroke="black" />
        </svg>

        <div className="">
          <h1 className="font-abc text-[31px]">WHAT WILL YOU CHOOSE</h1>
        </div>
      </div>
      <div className="flex flex-col ml-[167px] mr-[20px]    ">
        <h2 className="text-[21px] font-abc mb-[14px] tracking-[1.6px] leading-[15.7px]">
          PICTURE 1
        </h2>
        <svg
          className=""
          width="92"
          height="2"
          viewBox="0 0 92 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.36853"
            y1="1.13013"
            x2="91.527"
            y2="1.13013"
            stroke="#394223"
          />
        </svg>

        <h2 className="text-[21px] font-abc mt-[130px] mb-[130px] tracking-[1.6px] leading-[15.7px]">
          PICTURE 2
        </h2>
        <h2 className="text-[21px] font-abc tracking-[1.6px] leading-[15.7px] ">
          PICTURE 3
        </h2>
      </div>
      <div className="flex justify-center">
        <Image
          className="ml-[100px] mb-[179px]   "
          src={photo2}
          width={750}
          height={750}
          alt="secondphoto"
        />
      </div>
    </div>
  );
};

export default Images;

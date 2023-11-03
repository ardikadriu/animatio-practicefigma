import Image from "next/image";
import photo1 from "@/public/photo1.png";

const Photo = () => {
  return (
    <div className="  justify-center mb-[217px] shrink-0">
      <Image src={photo1} width={1400} height={1082} alt="nope" />
    </div>
  );
};

export default Photo;

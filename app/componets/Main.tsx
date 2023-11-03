import Header from "./Header";
import Paragraph from "./Paragraph";
import Photo from "./Photo";

const Main = () => {
  return (
    <main className="w-[1920px]  flex items-center flex-col">
      <Paragraph />
      <Photo />
    </main>
  );
};

export default Main;

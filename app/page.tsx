import Header from "./componets/Header";
import Main from "./componets/Main";
import Paragraph from "./componets/Paragraph";
import Images from "./componets/Images";
import Footer from "./componets/Footer";
import Photo from "./componets/Photo";

export default function Home() {
  return (
    <main className="w-full  ">
      <Header />
      <Main />
      <Images />
      <Footer />
    </main>
  );
}

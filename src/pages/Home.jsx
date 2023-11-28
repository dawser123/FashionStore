import Newsletter from "../components/Newsletter";
import HeadCard from "../components/UI/Card/HeadCard";

function Home() {
  return (
    <>
      <main className="lg:flex-row mx-auto mt-[120px] flex max-w-[80%] flex-col items-center justify-center">
        <HeadCard
          name="Clothes"
          img={
            "https://cdn.pixabay.com/photo/2014/08/26/21/48/sweatshirts-428607_1280.jpg"
          }
          path="/clothes"
        />
        <HeadCard
          name="Shoes"
          img={
            "https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_1280.jpg"
          }
          path="/shoes"
        />
        <HeadCard
          name="Watches"
          img={
            "https://cdn.pixabay.com/photo/2016/02/17/09/20/watches-1204696_1280.jpg"
          }
          path="/watches"
        />
      </main>
      <Newsletter />
    </>
  );
}

export default Home;

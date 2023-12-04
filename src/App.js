import D1 from "../src/assets/redPixel.jpeg";
import { useState, useEffect } from "react";
import Header from "./Header";
import Loader from "./Loader";

function App() {
  const [cardDetail, setcardDetail] = useState([]);
  const [candidateNumber, setcandidateNumber] = useState();
  const [Loading, setLoading] = useState(true);
  const [blackWhite, setblackWhite] = useState(false);

  useEffect(() => {
    const res = fetch(
      `https://randomuser.me/api/?page=1&results=${candidateNumber}&seed=abc`
    );
    
      res.then((res) => res.json())
      .then((value) => {
        
        setcardDetail(value.results);
        setLoading(false);
      });
  }, [candidateNumber]);

  const handleChange = (number) => {
    setcandidateNumber(number);
  };

  return (
    <main
      className="w-screen relative h-screen overflow-y-auto"
      style={{ backgroundImage: `url(${D1})` }}
    >
      <Header handleChange={handleChange} />
      <div className="w-screen h-auto mt-[10px] min-h-[90%] flex justify-center items-center gap-3 flex-wrap p-2 ">
      {Loading ? (
              <Loader />
            ) :(
        cardDetail.length?
          (cardDetail.map((card) =>
            (
              <article key={card.name}
                onMouseEnter={() => {
                  setblackWhite((value) => !value);
                }}
                onMouseLeave={() => {
                  setblackWhite((value) => !value);
                }}
                className=" flex h-auto font-sens font-normal hover:scale-95 hover:bg-[#008000b3] hover:shadow-[5px_5px_0px_1px_rgba(255,255,255,0.6)] hover:text-white transition cursor-pointer text-md bg-[#fdc448] rounded-lg shadow-xl"
              >
                <section className="flex justify-center  p-3 items-center hover:scale-120 transition duration-300 ease-in-out">
                  <div className="overflow-hidden">
                    {" "}
                    <img
                      className={`hover:${
                        blackWhite ?"grayscale-[100%]" : "grayscale-[20%]"}  transition duration-200 ease-in-out`}
                      src={card.picture.large}
                      alt={card.name.first}
                    />
                  </div>
                </section>
                <section className="flex flex-col p-3 justify-center items-center g-2 ">
                  <div className="flex flex-col gap-1">
                    <span>
                      {card.name.title} {card.name.first} {card.name.last}
                    </span>
                    <span>{card.gender}</span>
                    <span>{card.phone}</span>
                  </div>
                </section>
              </article>
            )
          )):(<article>Enter the number of candidates</article>)

          )}
      </div>
    </main>
  );
}

export default App;

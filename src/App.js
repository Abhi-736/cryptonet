import D1 from "../src/assets/redPixel.jpeg";
import { useState, useEffect } from "react";
import Header from './Header';

function App() {
  const [cardDetail, setcardDetail] = useState([]);
  const [candidateNumber, setcandidateNumber]= useState(5)

  useEffect(() => {
    const res = fetch(`https://randomuser.me/api/?page=1&results=${candidateNumber}&seed=abc`);
    res
      .then((res) => res.json())
      .then((value) => {
        console.log(value.results);
        setcardDetail(value.results);
      });
  }, [candidateNumber]);
  const handleChange=(number)=>{
setcandidateNumber(number)
  }

  return (
    <main className="w-screen relative h-screen overflow-y-auto" style={{ backgroundImage: `url(${D1})` }}>
      <Header handleChange={handleChange}/>
    <div
      className="w-screen h-auto mt-[70px] flex justify-center gap-3 items-center flex-wrap "
    > 
      {cardDetail &&
        cardDetail.map((card) => (

          <article className=" flex h-auto font-sens font-normal hover:scale-95 hover:bg-[#ffda54] transition cursor-pointer text-md bg-[#fdc448] rounded-lg shadow-xl">
            <section className="flex justify-center  p-3 items-center hover:scale-120 transition duration-300 ease-in-out">
             
             <div className="overflow-hidden"> <img 
                className=" hover:grayscale-[100%] hover:scale-[0.95] transition duration-200 ease-in-out"
                src={card.picture.large}
                alt={card.name.first}
              /></div>
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

        ))}
    </div>
    </main>
  );
}

export default App;

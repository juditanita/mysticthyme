import React from "react";

import ClearBtn from "../components/ShortComponets/ClearBtn";
import { Link } from "react-router-dom";
import FAQuestions from "../components/FAQuestions";
import { getWorkshops } from "../api";
import Loading from "../components/ShortComponets/Loading";
import ErrorShort from "../components/ShortComponets/ErrorShort";

function Workshops() {
  const [workshops, setWorkshops] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const [error, setError] = React.useState(null);

 

  React.useEffect(() => {
    async function loadWorkshops() {
      setLoading(true);
      try {
        const data = await getWorkshops();

        setWorkshops(data);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadWorkshops();
  }, []);

  if (loading) {
    <Loading />;
  }
  if (error) {
    <ErrorShort children={`There was an error: ${error.message}`} />;
  }
  //map through all the workshop for booking now just go to contact page
  const workshopEl = workshops
    .filter((item) => item.placesAvailable)
    .map((item) => {
      return (
        <div key={item.id}>
          <Link to="/contact">
            <div className="w-11/12 md:w-2/3 px-auto my-10 text-center mx-4 md:mx-auto rounded overflow-hidden shadow-lg grid  grid-cols-1  md:grid-cols-3">
              <img
                className="w-full md:h-full  md:px-0 sm:px-8  px-2 col-span-1"
                src={item.img}
                alt=""
              />
              <div className="px-6 py-4   col-span-1 md:col-span-2">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">{item.description}</p>
                <span className=" w-2/3 md:col-span-2  col-span-1 px-3 py-1 text-sm font-bold text-gray-700 mr-2 my-2 ">
                  cost:{" "}
                  <span className="text-red-800 ">{item.price}/person</span>
                </span>
              </div>
              <div className="bg-red-200 order-first mx-2 sm:mx-8 md:order-none md:mx-0 col-span-1 md:w-full flex flex-col ">
                <span className="inline-block    text-md py-4 font-semibold text-red-800  ">
                  {" "}
                  {item.placesAvailable} places available
                </span>
              </div>
              <div className="col-span-1  md:col-span-2">
                <ClearBtn classN={`bg-white mb-4 `}>Get Tickets</ClearBtn>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  return (
    <>
      <section className="container">
        <h2 className="text-2xl md:text-4xl text-center my-12">
          Upcoming workshops
        </h2>

        {workshopEl}

        {/* get more by faq */}
        <div className="bg-red-200">
          <FAQuestions />
        </div>
      </section>
    </>
  );
}

export default Workshops;

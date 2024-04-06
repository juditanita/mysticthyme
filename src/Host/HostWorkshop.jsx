import React from "react";
import { Link } from "react-router-dom";
import WorkshopCard from "../components/ShortComponets/WorkshopCard";
import { getHostWorkshops } from "../api";
import Loading from "../components/ShortComponets/Loading";

function HostWorkshop() {
  const [workshops, setWorkshops] = React.useState([]);
  const [error, setError] = React.useState(null);

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function loadHostWorkshops() {
      setLoading(true);
      try {
        const data = await getHostWorkshops();

        setWorkshops(data);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadHostWorkshops();
  }, []);

  if (loading) {
    <Loading />;
  }

  if (error) {
    return (
      <h1
        className="text-center w-full text-3xl h-screen"
        aria-live="assertive"
      >
        There was an error: {error.message}
      </h1>
    );
  }
  const workshopEl = workshops.map((workshop) => {
    const { id } = workshop;

    return (
      <Link to={workshop.id} >
       
        <WorkshopCard
          key={id}
          {...workshop}
          classN={`hidden`}
        
        />
       
      </Link>
    );
  });
  return (
    <section className="container ">
      <h1 className="text-center my-8">Your listed workshops</h1>

      <div>{workshops && <section className="container">{workshopEl}</section>}</div>
    </section>
  );
}

export default HostWorkshop;

import Counter from "@/app/_components/Counter";
import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";
import CabinList from "../_components/CabinList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

//In seconds
//revalidate is only for static page
// export const revalidate = 3600;

export const metadata = {
  title: "Cabins",
};

export default async function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious suites, located right in the heart of Santorini’s
        iconic whitewashed cliffs. Imagine waking up to breathtaking views of
        the deep blue Aegean Sea, spending your days wandering the charming
        narrow streets, or simply unwinding in your private pool under the
        golden Greek sun. Embrace the island’s beauty and serenity in your own
        little home away from home. The perfect escape for a peaceful,
        unforgettable vacation. Welcome to paradise.
      </p>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}

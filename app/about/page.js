import Image from "next/image";
import image2 from "@/public/about-1.png";
import image1 from "@/public/about-2.png";
import { getCabins } from "../_lib/data-service";

export const revalidate = 86400;

export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to Steven&apos;s Suites
        </h1>

        <div className="space-y-8">
          <p>
            Where breathtaking views and comfortable living blend seamlessly.
            Tucked into the heart of Santorini’s iconic cliffs, this is your
            paradise away from home. But it’s not just about the luxurious
            suites — it’s about the experience of reconnecting with the simple
            joys of life, shared with family and loved ones.
          </p>
          <p>
            Our {cabins.length} suites offer a cozy retreat, but the real magic
            lies just beyond your doorstep. Stroll through charming whitewashed
            streets, feel the sea breeze on your skin, and watch the sun set
            over the Aegean Sea from the comfort of your balcony or private
            pool.
          </p>
          <p>
            This is where lasting memories are made, surrounded by the timeless
            beauty of Santorini. A place to slow down, savor the moment, and
            feel the joy of being together in one of the world’s most beautiful
            settings.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
        />
      </div>

      <div className="relative  aspect-square col-span-2">
        <Image
          src={image2}
          fill
          className="object-cover"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Professionally Managed Since 1974
        </h1>

        <div className="space-y-8">
          <p>
            Since 1974, Steven’s Suites has been a trusted retreat, managed by a
            dedicated team of hospitality professionals. Built on a tradition of
            excellence, our team is committed to providing a warm, welcoming
            experience while maintaining the timeless charm of Santorini.
          </p>
          <p>
            Over the years, we’ve blended the island’s breathtaking beauty with
            personalized service and professional care. Here, you’re not just a
            guest — you’re part of a community that values comfort, relaxation,
            and unforgettable moments. We look forward to welcoming you to
            Steven’s Suites, where tradition meets refined hospitality.
          </p>

          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

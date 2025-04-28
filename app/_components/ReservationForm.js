"use client";

import { differenceInDays } from "date-fns";
import { useReservation } from "./ReservationContext";
import { createBooking } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function ReservationForm({ cabin, user, settings }) {
  // CHANGE
  const { maxCapacity, regularPrice, discount, id } = cabin;
  const { range, resetRange } = useReservation();

  function toUTCMidnight(date) {
    if (!date) return undefined;
    return new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );
  }

  const startDate = toUTCMidnight(range.from);
  const endDate = toUTCMidnight(range.to);

  const numNights = differenceInDays(endDate, startDate);

  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId: id,
  };

  const createBookingWithData = createBooking.bind(null, bookingData);

  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="bg-primary-900 flex flex-col h-full">
      <div className="bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center">
        <p>Logged in as</p>

        <div className="flex gap-4 items-center">
          <img
            // Important to display google profile images
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div>
      </div>

      <form
        className="bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col"
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2 ">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div>
          <label htmlFor="promoCode">Promo Code ?</label>
          <input
            name="promoCode"
            id="promoCode"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="py-10">
          <p className=" text-accent-500 text-xl">
            You need to book at least {minBookingLength + 1} days
          </p>
          <p className="text-accent-500 text-xl">
            Maximum {maxBookingLength} days
          </p>
        </div>

        <div className="flex justify-end items-center gap-6 pt-10">
          {!(startDate && endDate) ? (
            <p className="text-primary-300 text-base">
              Start by selecting dates
            </p>
          ) : (
            <SubmitButton pendingLabel="Reserving...">Reserve Now</SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;

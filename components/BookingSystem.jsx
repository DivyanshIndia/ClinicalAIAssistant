"use client"
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller } from "react-hook-form";

const BookingSystem = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const generateTimeSlots = () => {
    const slots = {};
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        slots[time] = true; // Assuming all slots are initially available
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const onSubmit = (data) => {
    console.log({ ...data, timeSlot: selectedTimeSlot });
    // Handle the booking logic here
  };

  return (
    <div className="container mx-auto ">
      <div className="bg-black/10 shadow-md rounded px-4 md:px-12 pt-6 pb-8 mb-4 flex flex-col">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold text-center text-white">
          Book an Appointment
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-white text-sm font-bold mb-2"
            >
              Choose a Date
            </label>
            <Controller
              control={control}
              name="date"
              rules={{ required: "Date is required" }}
              render={({ field }) => (
                <DatePicker
                  className="form-input block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  minDate={new Date()} // Restrict past dates
                  calendarClassName="tailwind-datepicker"
                />
              )}
            />
            {errors.date && (
              <p className="text-red-500 text-xs italic">
                {errors.date.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="timeSlot"
              className="block text-white text-sm font-bold mb-2"
            >
              Select a Time Slot
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Object.entries(timeSlots).map(([time, isAvailable]) => (
                <button
                  key={time}
                  type="button"
                  className={`py-2 px-4 border rounded ${
                    isAvailable
                      ? selectedTimeSlot === time
                        ? "bg-blue-500 text-white" // Highlight selected slot
                        : "bg-green-200 hover:bg-green-300"
                      : "bg-gray-300 cursor-not-allowed"
                  } focus:outline-none`}
                  disabled={!isAvailable}
                  onClick={() => setSelectedTimeSlot(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingSystem;

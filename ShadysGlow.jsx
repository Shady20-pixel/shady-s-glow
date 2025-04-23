
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ShadysGlow() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const availableSlots = {
    "2025-04-23": ["9:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"],
    "2025-04-24": ["9:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"],
    "2025-04-25": [],
  };

  const times = selectedDate ? availableSlots[selectedDate] || [] : [];

  return (
    <div className="bg-gradient-to-br from-pink-100 to-purple-200 min-h-screen p-6">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold text-pink-700">Shady's Glow</h1>
        <p className="text-lg mt-2 text-gray-700">Braiding & Beauty Services in Winnipeg, MB</p>
        <a href="#booking">
          <Button className="mt-4">Book Now</Button>
        </a>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Knotless Braids", "Box Braids", "Twists", "Cornrows", "Feed-in Braids", "Locs"].map((service) => (
            <Card key={service} className="rounded-2xl shadow-md">
              <CardContent className="p-4 text-center text-gray-800 font-medium">
                <a href="#" className="underline text-pink-600">{service}</a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Gallery</h2>
        <p className="text-gray-600">Photos coming soon. Stay tuned!</p>
        <a href="#" className="text-pink-500 underline">Upload gallery photos</a>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">About Shady</h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-center">
          Welcome to Shady's Glow! I'm passionate about making you feel beautiful and confident through stylish braiding and beauty services. Based in Winnipeg, MB, I bring skill and creativity to every look.
        </p>
      </section>

      <section id="booking" className="py-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Book an Appointment</h2>
        <p className="text-gray-700 mb-4">Call or text: <strong>431-990-4478</strong> or email <strong>kilanifolashade8@gmail.com</strong></p>
        <p className="text-pink-700 font-semibold mb-2">Non-refundable Booking Fees: $20 for Cornrows | $50 for Braids</p>

        <form
          action="https://formsubmit.co/kilanifolashade8@gmail.com"
          method="POST"
          className="max-w-md mx-auto space-y-4"
        >
          <input className="w-full p-2 border border-pink-300 rounded" type="text" name="name" placeholder="Your Name" required />
          <input className="w-full p-2 border border-pink-300 rounded" type="email" name="email" placeholder="Your Email" required />
          <label className="block text-gray-700">Select Date:</label>
          <input className="w-full p-2 border border-pink-300 rounded" type="date" name="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} required />
          <label className="block text-gray-700">Select Time:</label>
          <select className="w-full p-2 border border-pink-300 rounded" name="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required disabled={times.length === 0}>
            <option value="">{times.length === 0 ? "Fully booked" : "Select time"}</option>
            {times.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
          <textarea className="w-full p-2 border border-pink-300 rounded" name="message" placeholder="Your Message" required />
          <input type="hidden" name="_captcha" value="false" />
          <Button type="submit">Send Booking Request</Button>
        </form>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Contact</h2>
        <p className="text-center text-gray-600">Follow us on social media – coming soon!</p>
      </section>
    </div>
  );
}

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const testimonials = [
  {
    quote:
      "“The portrait was absolutely perfect—Debora captured every detail flawlessly.”",
    author: "Hanna Frei",
  },
  {
    quote:
      "“Her pet illustration brought my dog to life more beautifully than I ever imagined.”",
    author: "Ana",
  },
  {
    quote:
      "“The fantasy scene she made is now the highlight of my gaming stream overlay!”",
    author: "Carolyn",
  },
  // …add more as Debora collects them
];

export default function TestimonialsCarousel() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-zinc-900">
        Client Testimonials
      </h2>
      <div className="max-w-3xl mx-auto">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center text-zinc-900">
                <p className="italic text-lg mb-4">{t.quote}</p>
                <p className="font-semibold">— {t.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

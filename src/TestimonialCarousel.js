import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "“Having Jagadish as a Graduate Assistant for two semesters was an absolute privilege. He played a crucial role in smoothly running the web development course, ensuring students had the guidance and resources they needed to succeed. His approach on clearing doubts has made impact on the student scores. I truly appreciate his contributions and commend his outstanding support.”",
    name: "Charles Hoot",
    date: "04/29/2024",
  },
  {
    text: "“Jagadish's expertise and passion for web development truly set him apart as an instructor. His ability to break down complex concepts and engage students made his classes both insightful and enjoyable. I personally loved attending his sessions and greatly appreciate his outstanding teaching. He is a valuable asset to any learning environment.”",
    name: "Recruiter, Cristle Academy - IND",
    date: "12/24/2024",
  },
  {
    text: "“Jagadish has an exceptional grasp of stock market concepts, seamlessly blending fundamental and technical analysis to make informed investment decisions. His deep understanding and analytical approach have impressed both his mentors and peers. His dedication to continuous learning in the stock market is truly commendable”",
    name: "Trainer, Smart retail trader Academy - IND",
    date: "12/26/2022",
  },
  {
    text: "“Having Jagadish as a Graduate Assistant for two semesters was an absolute privilege. He played a crucial role in smoothly running the web development course, ensuring students had the guidance and resources they needed to succeed. His approach on clearing doubts has made impact on the student scores. I truly appreciate his contributions and commend his outstanding support.”",
    name: "Charles Hoot",
    date: "04/29/2024",
  },
];

export default function TestimonialCarousel() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Testimonials</h2>

      <div className="relative">
        <Swiper
          modules={[Pagination]}
          pagination={{ el: ".custom-pagination", clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-black text-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <p className="text-sm italic">{testimonial.text}</p>
                <p className="font-bold mt-4">{testimonial.name}</p>
                <p className="text-red-400 text-sm">{testimonial.date}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination - Separate from Swiper */}
        <div className="custom-pagination flex justify-center mt-6"></div>
      </div>
    </div>
  );
}

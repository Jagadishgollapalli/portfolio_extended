import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import RevealSection from "./RevealSection";
import SectionHeading from "./SectionHeading";

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
];

export default function TestimonialCarousel() {
  return (
    <section
      id="testimonials"
      className="py-20 sm:py-24 px-4 sm:px-6 border-t border-surface-border/80"
    >
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <SectionHeading
            align="center"
            step="05 — Voices"
            title="Testimonials"
            subtitle="Feedback from professors, partners, and collaborators."
          />
        </RevealSection>

        <RevealSection>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={22}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full pb-14 [&_.swiper-pagination-bullet-active]:!bg-accent [&_.swiper-pagination-bullet]:!bg-surface-border [&_.swiper-pagination-bullet]:!opacity-100"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={`${testimonial.name}-${index}`}>
                <blockquote className="relative h-full rounded-2xl card-premium p-6 md:p-7 flex flex-col motion-safe:transition duration-300 hover:border-accent/30 hover:shadow-lift hover:-translate-y-0.5 motion-reduce:hover:translate-y-0">
                  <span
                    className="font-display text-6xl text-accent/25 leading-none mb-2 select-none"
                    aria-hidden
                  >
                    “
                  </span>
                  <p className="text-base sm:text-lg text-ink-muted leading-relaxed flex-1 -mt-2">
                    {testimonial.text}
                  </p>
                  <footer className="mt-6 pt-5 border-t border-surface-border/80">
                    <cite className="not-italic font-display font-semibold text-ink text-lg block tracking-tight">
                      {testimonial.name}
                    </cite>
                    <p className="font-mono text-xs sm:text-sm text-accent mt-2 uppercase tracking-wider">
                      {testimonial.date}
                    </p>
                  </footer>
                </blockquote>
              </SwiperSlide>
            ))}
          </Swiper>
        </RevealSection>
      </div>
    </section>
  );
}

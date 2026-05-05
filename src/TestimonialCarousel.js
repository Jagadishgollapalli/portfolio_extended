import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import RevealSection from "./RevealSection";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    text: "Having Jagadish as a Graduate Assistant for two semesters was an absolute privilege. He played a crucial role in smoothly running the web development course, ensuring students had the guidance and resources they needed to succeed. His approach on clearing doubts has made impact on the student scores. I truly appreciate his contributions and commend his outstanding support.",
    name: "Charles Hoot",
    role: "Professor · Graduate Faculty",
    date: "04/29/2024",
  },
  {
    text: "Jagadish's expertise and passion for web development truly set him apart as an instructor. His ability to break down complex concepts and engage students made his classes both insightful and enjoyable. I personally loved attending his sessions and greatly appreciate his outstanding teaching. He is a valuable asset to any learning environment.",
    name: "Cristle Academy",
    role: "Recruiter · India",
    date: "12/24/2024",
  },
  {
    text: "Jagadish has an exceptional grasp of stock market concepts, seamlessly blending fundamental and technical analysis to make informed investment decisions. His deep understanding and analytical approach have impressed both his mentors and peers. His dedication to continuous learning is truly commendable.",
    name: "Smart Retail Trader Academy",
    role: "Trainer · India",
    date: "12/26/2022",
  },
];

export default function TestimonialCarousel() {
  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-28 px-4 sm:px-6 border-t border-surface-border/60"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent pointer-events-none"
      />
      <div className="relative max-w-6xl mx-auto">
        <RevealSection>
          <SectionHeading
            eyebrow="VOICES"
            title="Trusted by"
            highlight="collaborators"
            subtitle="Feedback from professors, partners, and teammates."
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
            {testimonials.map((t, index) => (
              <SwiperSlide key={`${t.name}-${index}`} className="!h-auto">
                <blockquote className="relative h-full rounded-2xl border border-surface-border/70 bg-surface-card/40 backdrop-blur-md p-7 md:p-8 flex flex-col transition-all duration-500 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lift">
                  <span
                    aria-hidden
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/30 text-accent"
                  >
                    <Quote className="h-4 w-4" />
                  </span>
                  <p className="mt-5 text-base sm:text-[1.05rem] text-ink-muted leading-relaxed flex-1">
                    "{t.text}"
                  </p>
                  <footer className="mt-7 pt-5 border-t border-surface-border/60">
                    <cite className="not-italic font-display font-bold text-ink text-lg block tracking-tight">
                      {t.name}
                    </cite>
                    <p className="text-sm text-ink-muted mt-1">{t.role}</p>
                    <p className="font-mono text-xs text-accent mt-2 uppercase tracking-[0.18em]">
                      {t.date}
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

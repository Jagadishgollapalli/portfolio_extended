import React from "react";

const ExperienceCards = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 space-y-6">
      {/* Top Section */}
      <div className="grid grid-cols-3 gap-6">
        {[
          {
            title: "UI/UX Design",
            icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
            desc: "  Skilled in developing dynamic and responsive user interfaces using React.js, modern UI libraries, and performance optimization techniques",
          },
          {
            title: "Backend Development",
            icon: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
            desc: "  Proficient in building scalable and secure backend systems with Java, Spring Boot, REST APIs, and microservices architecture",
          },
          {
            title: "Server & Cloud",
            icon: "https://cdn-icons-png.flaticon.com/512/10096/10096351.png",
            desc: "Experienced in deploying, managing, and scaling applications using AWS services like EC2, S3, Lambda, and cloudwatch",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 rounded-xl shadow-lg text-center"
          >
            <div className="flex justify-center mb-3">
              <img src={item.icon} alt={item.title} className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-3 gap-6">
        <div className="p-6 bg-blue-50 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-3">Education</h3>
          <p className="text-sm font-semibold">2023 - 2024</p>
          <p className="font-bold">Masters in Applied Computer Science</p>
          <p className="text-sm">Northwest Missouri State University</p>

          <p className="text-sm font-semibold mt-3">2017 - 2021</p>
          <p className="font-bold">B.TECH in Electrical & Electronics</p>
          <p className="text-sm">JNTU University</p>
        </div>

        <div className="p-6 bg-green-50 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-3">Experiences</h3>
          <p className="text-sm font-semibold">2024 - 2025</p>
          <p className="font-bold">CRST Inc</p>
          <p className="text-sm">Java Full Stack Developer</p>

          <p className="text-sm font-semibold mt-3">2021 - 2022</p>
          <p className="font-bold">Juhomi LTD</p>
          <p className="text-sm">Java Full Stack Developer</p>
        </div>

        <div className="p-6 bg-purple-50 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-3">Interests</h3>
          <p className="text-sm font-semibold">2018 - Present</p>
          <p className="font-bold">
            Passionate Learner of Indian Stock Markets
          </p>
          <p className="text-sm">Smart Retail Trader</p>

          <p className="text-sm font-semibold mt-3">2017 - 2020</p>
          <p className="font-bold">Guvi Geek Networks</p>
          <p className="text-sm">
            Web Developer (Frontend & Backend) - Internship Programme
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCards;

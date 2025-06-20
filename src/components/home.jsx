import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaFacebook,
  FaTiktok,
  FaTelegram,
  FaPhoneAlt
} from "react-icons/fa";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");


  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 text-pink-800 font-serif">

      {/* Navigation Bar */}
      <nav className="bg-white bg-opacity-90 shadow-md sticky top-0 z-50 backdrop-blur-sm">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 flex items-center justify-between py-3">
    <h1 className="text-xl sm:text-3xl font-bold text-pink-700">My Portfolio</h1>
    <button
      className="sm:hidden text-pink-700 text-2xl focus:outline-none"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <FaTimes /> : <FaBars />}
    </button>
    <ul
      className={`${
        menuOpen ? "flex" : "hidden"
      } flex-col sm:flex sm:flex-row gap-4 sm:gap-6 text-sm sm:text-base font-medium text-pink-700 sm:items-center absolute sm:static right-0 bg-white sm:bg-transparent bg-opacity-95 px-6 py-4 sm:p-0 shadow-md sm:shadow-none backdrop-blur-md sm:backdrop-blur-none rounded-l-xl sm:rounded-none transition-all duration-300`}
      style={menuOpen ? {
        top: "100%",
        borderTopLeftRadius: "8px",
        borderBottomLeftRadius: "8px"
      } : {}}
    >
   {["home", "about", "skills", "projects", "certificates", "contact"].map((section) => (
        <li key={section}>
          <a
            href={`#${section}`}
            onClick={() => {
              setMenuOpen(false);
              setActive(section);
            }}
            className={`hover:text-pink-500 transition-all duration-300 ${
              active === section ? "text-pink-500 font-bold underline" : ""
            }`}
          >
            {section === "home"
              ? "Home"
              : section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, " $1")}
          </a>
        </li>
      ))}
    </ul>
  </div>
</nav>

      {/* Intro Section */}
      <section className="text-center pt-14 pb-20 px-4 sm:px-6">
        <img
          src="leng.jpg"
          className="mx-auto w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-pink-300 shadow-xl mb-4 object-cover"
        />
        <h1 className="text-2xl sm:text-5xl font-bold mb-2 text-pink-800 leading-tight">Rossellah Marie Bodaño</h1>
        <p className="text-sm sm:text-lg max-w-md sm:max-w-xl mx-auto text-pink-700">
          Frontend Developer · UI/UX Specialist
        </p>
      </section>

      {/* About Me */}
      <section
  id="about"
  className="scroll-mt-24 bg-white bg-opacity-60 rounded-2xl p-5 sm:p-8 mb-8 shadow-md border border-pink-300 max-w-[95%] sm:max-w-4xl mx-4 sm:mx-auto hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
>

  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-pink-800">About Me</h2>
  <p className="text-base text-center text-pink-700 leading-relaxed">
I am an Information Technology student and a dedicated web developer from Gaddani, Tayum, Abra, with a profound appreciation for pastel color palettes, refined aesthetics, and meticulous, pixel-perfect layouts. I specialize in designing clean, intuitive interfaces that seamlessly merge visual elegance with robust functionality, ensuring that every design not only captivates the eye but also provides a comfortable and user-friendly experience.

Equipped with advanced skills in HTML, CSS, JavaScript, Bootstrap, and React, I excel in transforming conceptual ideas into responsive, interactive web applications. Additionally, I am actively expanding my expertise in back-end technologies such as PHP, MySQL, and Python, with the goal of evolving into a proficient full-stack developer. Whether engaged in academic projects or personal endeavors, I approach each challenge with creativity, precision, and an unwavering commitment to excellence.
  </p>
</section>

 <section id="skills" className="pt-4 pb-12 px-6">
  <div className="max-w-screen-lg mx-auto text-center">
    <h2 className="text-3xl font-bold text-pink-700 mb-8 font-[Times_New_Roman] tracking-wide animate-pulse">
      Skills
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-pink-900 font-medium">
      {[
        { name: "HTML", img: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
        { name: "CSS", img: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
        { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
        { name: "React", img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
        { name: "Tailwind CSS", img: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
        { name: "Python", img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
       
      ].map((skill, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-pink-200 transition-transform duration-300 transform hover:scale-105 active:scale-105 focus:scale-105 border border-pink-100 flex flex-col items-center"
        >
          <img
            src={skill.img}
            alt={skill.name}
            className="w-16 h-16 mb-4 object-contain rounded-full border border-pink-200 shadow-sm"
          />
          <p className="text-lg font-semibold text-pink-700">{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
</section><br></br>

      {/* Featured Projects */}
      <section id="projects" className="scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6">
         <h2 className="text-3xl font-bold text-center text-pink-700 mb-8 font-[Times_New_Roman] tracking-wide animate-pulse">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          {[
            {
              title: "Converter Website",
              desc: "A simple web applicaion that allows users to convert Philippine peso (PHP)into other currencies, uch as US Dollar (USD), Chinese uan (CNY), and Japanese Yen (JYP)",
              img: "converter.png",
              url: "converter-activity/index.html"
            },
            {
              title: "Calculator Website",
              desc: "A calculator built with JavaScript that performs basic arithmetic operations.",
              img: "loop.png",
              url: "Calculator/index.html"
            },
            {
              title: "Loop",
              desc: "A loop that lets you input a number and can see the sum, factorial, odd, and even umbersuing Javascript.",
              img: "calculator.png",
              url: "Loop/index.html"
            },
            {
              title: "To Do List Website",
              desc: "A React-based to-do list app for daily goals. Users can create, update, delete, and marked as done.",
              imgs: ["todo.png", "list.png"],
              url: "https://to-do-client-brown.vercel.app/"
            },
            {
              title: "Employee Management",
              desc: "Employee Management is a employee list system that uses JavaScript arrays and objects to store,manage, and display the employee information.",
              imgs: ["array.png", "ray.png"],
              url: "Array Objects/index.html"
            }
            
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-60 rounded-2xl p-5 shadow-md border border-pink-300 hover:shadow-xl transition-transform transform hover:scale-105 active:scale-105 focus:scale-105 cursor-pointer"
              onClick={() => window.open(project.url, "_blank")}
            >
              {project.img ? (
                <img
                  src={project.img}
                  alt={project.title}
                  className="rounded-xl mb-4 w-full h-48 sm:h-52 object-cover"
                />
              ) : (
                <div className="flex gap-2 overflow-x-auto scroll-smooth">
                  {project.imgs.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="rounded-xl w-60 h-48 object-cover mb-4 flex-shrink-0"
                      alt={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              )}
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-pink-700">{project.title}</h3>
              <p className="mb-3 text-pink-600 text-sm">{project.desc}</p>
              <span className="text-pink-700 font-medium underline text-sm">View Project</span>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
<section id="certificates" className="scroll-mt-24">
  <h2 className="text-3xl font-bold mt-16 text-center text-pink-800">
    Certificates
  </h2>
  <div className="max-w-screen-lg mx-auto px-4 sm:px-6 mt-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {["python.png", "data.png", "aii.png"].map((cert, index) => (
        <div
          key={index}
          className="w-full max-w-xs mx-auto rounded-2xl border border-pink-200 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 active:scale-105 focus:scale-105 cursor-pointer p-4 bg-white bg-opacity-70"
          onClick={() => window.open(cert, "_blank")}
        >
          <img
            src={cert}
            alt={`Certificate ${index + 1}`}
            className="w-full h-auto object-contain rounded-md"
          />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section
  id="contact"
  className="scroll-mt-24 w-full max-w-[95%] sm:max-w-4xl mx-auto mt-20 bg-white bg-opacity-60 rounded-xl p-6 shadow-md border border-pink-300 text-center"
>
  <h2 className="text-3xl font-bold mb-4 text-pink-800">Let’s Connect</h2>
  
  <form action="mailto:dbodanorossellahmarie@gmail.com" method="POST" encType="text/plain" className="space-y-4">
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      className="w-full p-3 rounded-md border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      className="w-full p-3 rounded-md border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
    />
    <textarea
      name="message"
      placeholder="Your Message"
      rows="4"
      className="w-full p-3 rounded-md border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
    ></textarea>
    <button type="submit" className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow hover:bg-pink-600 transition">
      Send Message
    </button>
  </form>
</section>

<footer className="bg-white py-10 px-4 mt-20 rounded-t-3xl shadow-inner">
  <div className="max-w-screen-md mx-auto text-center">
    {/* Social Icons */}
    <div className="flex justify-center gap-6 text-2xl text-pink-600 mb-6 flex-wrap">
      <a href="https://facebook.com/rossellah.07" target="_blank" className="hover:text-pink-800 transition duration-300"><FaFacebook /></a>
      <a href="https://tiktok.com/@_sellang/" target="_blank" className="hover:text-pink-800 transition duration-300"><FaTiktok /></a>
      <a href="https://t.me/lhengiee/" target="_blank" className="hover:text-pink-800 transition duration-300"><FaTelegram /></a>
      <a href="https://github.com/Rossellah" target="_blank" className="hover:text-pink-800 transition duration-300"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/rossellah-marie-boda%C3%B1o-2195b7349" target="_blank" className="hover:text-pink-800 transition duration-300"><FaLinkedin /></a>
    </div>

    {/* Contact Info */}
    <div className="text-pink-800 text-sm sm:text-base font-medium space-y-2">
      <p className="flex items-center justify-center gap-2">
        <FaPhoneAlt className="text-pink-700" />
        <span className="hover:text-pink-900 transition">09603458372</span> {/* Replace with your actual number */}
      </p>
    </div>

    {/* Footer note */}
    <p className="mt-8 text-lg sm:text-xl text-pink-700 font-bold tracking-wide">
      &copy; 2025 Rossellah Marie Bodaño. All rights reserved.
    </p>
  </div>
</footer>  
      
    </div>
  );
}

export default Home;

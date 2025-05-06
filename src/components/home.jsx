import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTelegram
} from "react-icons/fa";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 text-pink-800 font-serif">

      {/* Navigation Bar */}
      <nav className="bg-white bg-opacity-90 shadow-md sticky top-0 z-50 backdrop-blur-sm">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 flex items-center justify-between">
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
      } flex-col sm:flex sm:flex-row gap-4 sm:gap-6 text-sm sm:text-base font-medium text-pink-700 mt-4 sm:mt-0 sm:items-center absolute right-0 bg-white bg-opacity-95 px-6 py-4 shadow-md backdrop-blur-md`}
      style={{
        top: "12.4px",  
        width: "max-content", 
        borderTopLeftRadius: "8px",
        borderBottomLeftRadius: "8px", 
        borderTopRightRadius: "0", 
        borderBottomRightRadius: "0", 
      }}
    >
      <li>
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="hover:text-pink-500 transition-all duration-300"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="hover:text-pink-500 transition-all duration-300"
        >
          About Me
        </a>
      </li>
      <li>
        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className="hover:text-pink-500 transition-all duration-300"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#certificates"
          onClick={() => setMenuOpen(false)}
          className="hover:text-pink-500 transition-all duration-300"
        >
          Certificates
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="hover:text-pink-500 transition-all duration-300"
        >
          Contact
        </a>
      </li>
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
          Frontend Developer · UI/UX Lover · Pastel Enthusiast
        </p>
      </section>

      {/* About Me */}
      <section
  id="about"
  className="scroll-mt-24 bg-white bg-opacity-60 rounded-2xl p-5 sm:p-8 mb-16 shadow-md border border-pink-300 max-w-[95%] sm:max-w-4xl mx-4 sm:mx-auto hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
>
  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-pink-800">About Me</h2>
  <p className="text-base text-center text-pink-700 leading-relaxed">
    A passionate web developer with a love for pastel palettes and pixel-perfect layouts. I’m all about
    crafting interfaces that feel like warm hugs—clean, cute, and totally user-friendly.
  </p>
</section>


      {/* Featured Projects */}
      <section id="projects" className="scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center text-pink-800">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          {[
            {
              title: "Converter Website",
              desc: "A simple and elegant unit converter built with HTML, CSS, and JavaScript.",
              img: "converter.png",
              url: "converter-activity/index.html"
            },
            {
              title: "Loop",
              desc: "A looping animation playground featuring dreamy visuals using HTML and CSS.",
              img: "loop.png",
              url: "Loop/index.html"
            },
            {
              title: "Calculator Website",
              desc: "A clean and cute calculator app with pastel pink aesthetics.",
              img: "calculator.png",
              url: "Calculator/index.html"
            },
            {
              title: "To Do List Website",
              desc: "A dreamy React-based to-do list app for daily goals.",
              imgs: ["todo.png", "list.png"],
              url: "https://to-do-client-brown.vercel.app/"
            }
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-60 rounded-2xl p-5 shadow-md border border-pink-300 hover:shadow-xl transition-transform transform hover:scale-105 active:scale-95 cursor-pointer"
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
      <section id="certificates">
  <h2 className="text-3xl font-bold mt-16 text-center text-pink-800">Certificates</h2>
  <div className="max-w-screen-lg mx-auto px-4 sm:px-6 mt-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {["python.png", "data.png", "aii.png"].map((cert, index) => (
        <div
          key={index}
          className="w-full rounded-2xl border border-pink-200 shadow-md overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105 active:scale-95 cursor-pointer"
          onClick={() => window.open(cert, "_blank")}
        >
          <img src={cert} alt={`Certificate ${index + 1}`} className="w-full h-80 object-cover" />
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



      {/* Footer */}
      <footer className="text-center mt-20 mb-6 text-base sm:text-lg font-semibold text-pink-800 px-4">
      <div className="flex justify-center gap-6 text-xl sm:text-2xl text-pink-600 mb-6 flex-wrap">
    <a href="https://facebook.com/rossellah.07" target="_blank"><FaFacebook /></a>
    <a href="https://instagram.com/@LHENGIEE/" target="_blank"><FaInstagram /></a>
    <a href="https://tiktok.com/@_sellang/" target="_blank"><FaTiktok /></a>
    <a href="https://t.me/lhengiee/" target="_blank"><FaTelegram /></a>
    <a href="https://github.com/Rossellah" target="_blank"><FaGithub /></a>
    <a href="https://www.linkedin.com/in/rossellah-marie-boda%C3%B1o-2195b7349" target="_blank"><FaLinkedin /></a>
  </div>
        © 2025 Rossellah Marie Bodaño. Made with Love.
      </footer>
    </div>
  );
}

export default Home;

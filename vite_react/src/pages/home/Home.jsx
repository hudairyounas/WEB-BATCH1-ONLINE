import React from "react";
import CourseCard from "../../components/CourseCard";
import topCard from "../../api/topCard.json";



const Home = () => {
  topCard.map((item) => {
    console.log(item.title)
  })
  return (
    <>
      <section id="hero" class="hero">
        <div class="container">
          <h1>Learn Modern Web Development</h1>
          <p>
            Master the skills needed to build stunning, high-performance web
            applications with our industry-leading coding courses.
          </p>
          <a href="#courses" class="btn-primary">
            Explore Courses
          </a>
        </div>
      </section>

      <section id="about" class="about">
        <div class="container">
          <div class="content">
            <div class="about-text">
              <h2>Why FuturePlix?</h2>
              <p>
                We provide a project-based learning environment that prepares
                students for the real world. Our curriculum is designed by
                industry experts to ensure you stay ahead of the curve.
              </p>
              <p>
                From HTML/CSS basics to advanced React and Node.js, we cover
                everything you need to become a Full-Stack Developer.
              </p>
            </div>
            <div class="about-image">
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  background: "linear-gradient(135deg, #4f46e5, #a855f7)",
                  borderRadius: "20px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" class="courses">
        <div class="container">
          <h2>Our Top Courses</h2>
          <div class="course-grid">
            {
              <article class="course-card">
                <h3>Frontend Mastery</h3>
                <p>
                  Master HTML, CSS, and modern JavaScript to build beautiful
                  user interfaces.
                </p>
              </article>
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

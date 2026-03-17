import React from 'react'

const Contact = () => {
  return (
    <>
    <section id="contact" className="contact">
      <div className="container">
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Enroll Now</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea
            rows="5"
            placeholder="Which course are you interested in?"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
    </>
  )
}

export default Contact
import React, { useEffect, useRef } from "react";
import { personal } from "../../data/personal.js";
import "./Contact.css";

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    /* =====================================================
       REVEAL
    ====================================================== */

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("contact--visible");
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);


    /* =====================================================
       MOUSE PARALLAX
    ====================================================== */

    const handleMouseMove = (event) => {
      const rect = section.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;

      section.style.setProperty(
        "--contact-mouse-x",
        `${x * 18}px`
      );

      section.style.setProperty(
        "--contact-mouse-y",
        `${y * 18}px`
      );

      section.style.setProperty(
        "--contact-rotate-x",
        `${y * -4}deg`
      );

      section.style.setProperty(
        "--contact-rotate-y",
        `${x * 4}deg`
      );
    };

    section.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      observer.disconnect();

      section.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="contact-section"
    >

      {/* =================================================
          BACKGROUND
      ================================================== */}

      <div className="contact-background">

        <div className="contact-grid"></div>

        <div className="contact-glow contact-glow--one"></div>

        <div className="contact-glow contact-glow--two"></div>

        <div className="contact-orbit contact-orbit--one"></div>

        <div className="contact-orbit contact-orbit--two"></div>

        <span className="contact-particle contact-particle--1"></span>
        <span className="contact-particle contact-particle--2"></span>
        <span className="contact-particle contact-particle--3"></span>
        <span className="contact-particle contact-particle--4"></span>

      </div>


      {/* =================================================
          WATERMARK
      ================================================== */}

      <div className="contact-watermark">
        CONNECT
      </div>


      {/* =================================================
          TOP LINE
      ================================================== */}

      <div className="contact-topline">

        <span className="contact-index">
          06
        </span>

        <span className="contact-line"></span>

        <span className="contact-label">
          LET'S CONNECT
        </span>

      </div>


      {/* =================================================
          MAIN CONTENT
      ================================================== */}

      <div className="contact-content">

        {/* ===============================================
            LEFT SIDE
        ================================================ */}

        <div className="contact-copy">

          <div className="contact-kicker">

            <span className="contact-kicker-dot"></span>

            HAVE AN IDEA?

          </div>


          <h2 className="contact-heading">

            Let's build
            <br />

            <span>
              something.
            </span>

          </h2>


          <div className="contact-heading-line"></div>


          <p className="contact-sub">
            Open to opportunities in applied AI, and full-stack
            development.
          </p>


          <p className="contact-message">
            Have a project, opportunity, or just
            something interesting to discuss?
            Let's make it happen.
          </p>

        </div>


        {/* ===============================================
            3D CONTACT CORE
        ================================================ */}

        <div className="contact-stage">

          <div className="contact-core">

            <div className="contact-core-ring contact-core-ring--one"></div>

            <div className="contact-core-ring contact-core-ring--two"></div>

            <div className="contact-core-ring contact-core-ring--three"></div>


            <div className="contact-core-center">

              <span>
                ↗
              </span>

            </div>


            <span className="contact-core-node contact-core-node--one">
              @
            </span>

            <span className="contact-core-node contact-core-node--two">
              ↗
            </span>

            <span className="contact-core-node contact-core-node--three">
              in
            </span>

          </div>


          <div className="contact-stage-label">
            <span>
              OPEN TO
            </span>

            <strong>
              NEW POSSIBILITIES
            </strong>
          </div>

        </div>


        {/* ===============================================
            CONTACT LINKS
        ================================================ */}

        <div className="contact-links">

          <a
            href={`mailto:${personal.email}`}
            className="contact-link contact-link--primary"
          >

            <span className="contact-link-number">
              01
            </span>

            <span className="contact-link-content">

              <small>
                EMAIL
              </small>

              <strong>
                prathikshajain0007@gmail.com
              </strong>

            </span>

            <span className="contact-link-arrow">
              ↗
            </span>

          </a>


          <a
            href="https://github.com/Prathiksha-jain"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >

            <span className="contact-link-number">
              02
            </span>

            <span className="contact-link-content">

              <small>
                CODE
              </small>

              <strong>
                GitHub
              </strong>

            </span>

            <span className="contact-link-arrow">
              ↗
            </span>

          </a>


          <a
            href="https://www.linkedin.com/in/prathiksha-jain-7bb495226/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >

            <span className="contact-link-number">
              03
            </span>

            <span className="contact-link-content">

              <small>
                CONNECT
              </small>

              <strong>
                LinkedIn
              </strong>

            </span>

            <span className="contact-link-arrow">
              ↗
            </span>

          </a>

        </div>

      </div>


      {/* =================================================
          BOTTOM
      ================================================== */}

      <div className="contact-bottom">

        <a
          href="#home"
          className="contact-back"
        >
          BACK TO TOP ↑
        </a>

        <div className="contact-bottom-line">
          <span></span>
        </div>

        <span className="contact-footer">
          PRATHIKSHA JAIN · 2026
        </span>

      </div>

    </section>
  );
}
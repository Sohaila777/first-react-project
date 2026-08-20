import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <section id="portfolio">
        <div className="landing">
          <header>
            <div className="navbar">
              <img src="../src/images/Logo.svg" alt="logo" />
              <nav>
                <a className="text-capitalize text-decoration-none" href="">
                  about
                </a>
                <a className="text-capitalize text-decoration-none" href="">
                  work
                </a>
                <a className="text-capitalize text-decoration-none" href="">
                  notbook
                </a>
                <a className="text-capitalize text-decoration-none" href="">
                  contact
                </a>
                <a className="text-capitalize text-decoration-none" href="">
                  more
                </a>
                <div className="dropdown position-relative d-flex flex-column">
                  <button className="arrow border-0 bg-transparent">
                    <svg
                      className="d-lg-block d-none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 1024 1024"
                    >
                      <path d="M0 0h1024v1024H0z" fill="none" />
                      <path
                        fill="currentColor"
                        d="M104.7 338.8a64 64 0 0 1 90.5 0L512 655.6l316.8-316.8a64 64 0 0 1 90.5 90.4l-362 362.1a64 64 0 0 1-90.5 0l-362.1-362a64 64 0 0 1 0-90.5"
                      />
                    </svg>
                  </button>
                  <div className="content position-absolute">
                    <p>Bookshelf</p>
                    <p>Tech Stack</p>
                    <p>This UI Kit</p>
                  </div>
                </div>
              </nav>
            </div>
            <div className="icons">
              <img src="../src/images/Group.png" alt="linkedin" />
              <img src="../src/images/X.png" alt="twitter" />
              <img src="../src/images/Github.png" alt="github" />
            </div>
          </header>
          <section className="landing-section d-flex flex-column align-items-start position-absolute">
            <div className="container d-flex position-relative">
              <div className="t-btns d-flex flex-column">
                <div className="text d-flex flex-column align-items-start">
                  <h1 className="text-capitalize">
                    <h2 className="d-lg-none d-md-block text-start">Hi</h2>
                    <span>I’m</span> sohaila gamal
                  </h1>
                  <p className="text-start">
                    A front-end engineer and UI/UX designer helping startups
                    turn their visions into a digital reality. I specialize in
                    designing and building modern mobile and web-based apps.
                  </p>
                </div>
                <div className="btns d-flex align-items-center">
                  <button className="see border border-0">See my resume</button>
                  <button className="get border border-0">Get in touch</button>
                </div>
              </div>
              <img
                className="circle position-absolute d-lg-block d-none align-items-center"
                src="../src/images/Ellipse 2.png"
                alt="circle"
              />
              <img
                className="my-photo position-absolute d-lg-block d-none"
                src="../src/images/photo.png"
                alt=""
              />
            </div>
          </section>
        </div>

        <section className="hero-section d-flex flex-column align-items-start">
          <h3>Selected Work</h3>
          <div className="cards">
            <div className="card1 d-flex align-items-center">
              <div className="desc d-flex flex-column align-items-start">
                <img src="../src/images/Logo.png" alt="logo" />
                <h4 className="text-start">
                  Subbi –– The free subscriptions manager
                </h4>
                <p className="text-start">
                  Subbi is a side project that I’ve built to help me keep track
                  of how much I spend on subscriptions and also to prevent the
                  “accidental” bill after a 14-day trail ends. It helps you keep
                  track of bills like Netflix, Spotify, Xbox Game Pass, Bus
                  Card, Bank Cards, and many more.
                </p>
                <div className=" card-footer d-flex">
                  <span>Download App</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 15 15"
                  >
                    <path d="M0 0h15v15H0z" fill="none" />
                    <path
                      fill="currentColor"
                      d="M12.71 6.71c.39-.39.39-1.03 0-1.42L8.21.79C7.82.4 7.18.4 6.79.79l-4.5 4.5c-.39.39-.39 1.03 0 1.42s1.03.39 1.42 0L6.5 4v9.5c0 .55.45 1 1 1s1-.45 1-1V4l2.79 2.71c.39.39 1.03.39 1.42 0"
                    />
                  </svg>
                </div>
              </div>
              <img
                className="d-none d-lg-block"
                src="../src/images/Subbi.png"
                alt="phone"
              />
            </div>
            <div className="card2 d-flex align-items-center">
              <div className="desc d-flex flex-column align-items-start">
                <img src="../src/images/React Docs.png" alt="logo" />
                <h4 className="text-start">React Documentation</h4>
                <p className="text-start">
                  With the release of the new React website on March 16, there
                  was a need for localization to make the documentation
                  accessible to Arabic-speaking developers. I contributed to
                  translating several documentation, worked with great
                  developers, Improved my ability to write better PR requests,
                  and as a side effect, I now know more about the Arabic
                  grammar.
                </p>
                <div className=" card-footer d-flex">
                  <span>Visit Site</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 15 15"
                  >
                    <path d="M0 0h15v15H0z" fill="none" />
                    <path
                      fill="currentColor"
                      d="M12.71 6.71c.39-.39.39-1.03 0-1.42L8.21.79C7.82.4 7.18.4 6.79.79l-4.5 4.5c-.39.39-.39 1.03 0 1.42s1.03.39 1.42 0L6.5 4v9.5c0 .55.45 1 1 1s1-.45 1-1V4l2.79 2.71c.39.39 1.03.39 1.42 0"
                    />
                  </svg>
                </div>
              </div>
              <img
                className="d-none d-lg-block"
                src="../src/images/React. Docs.png"
                alt="phone"
              />
            </div>

            <div className="card3 d-flex align-items-center">
              <div className="desc d-flex flex-column align-items-start">
                <img src="../src/images/Storybook Docs.png" alt="logo" />
                <h4 className="text-start">Storybook Documentation</h4>
                <p className="text-start">
                  This was my very first OSS contribution, I contributed to
                  translating the documentation of Storybook into Arabic,
                  enabling a wider audience to access and understand the
                  resources available. I gained valuable experience in working
                  effectively with teams and navigating the pull request
                  process.
                </p>
                <div className=" card-footer d-flex">
                  <span>Visit Site</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 15 15"
                  >
                    <path d="M0 0h15v15H0z" fill="none" />
                    <path
                      fill="currentColor"
                      d="M12.71 6.71c.39-.39.39-1.03 0-1.42L8.21.79C7.82.4 7.18.4 6.79.79l-4.5 4.5c-.39.39-.39 1.03 0 1.42s1.03.39 1.42 0L6.5 4v9.5c0 .55.45 1 1 1s1-.45 1-1V4l2.79 2.71c.39.39 1.03.39 1.42 0"
                    />
                  </svg>
                </div>
              </div>
              <img
                className="d-none d-lg-block"
                src="../src/images/Storybook Docs1.png"
                alt="phone"
              />
            </div>
          </div>
        </section>
        <section className="sec-two">
          <h3 className="text-start">Get to know me</h3>
          <div className="row1 d-flex align-items-center">
            <div className="card1 d-flex flex-column align-items-center text-center">
              <h4>About me</h4>
              <p>Who I am and what I do</p>
              <img src="../src/images/My project 2.png" alt="face" />
            </div>
            <div className="card2">
              <h4>Notebook</h4>
              <p>My thoughts, insights, and reflections</p>
              <img src="../src/images/Notebook.png" alt="" />
            </div>
          </div>
          <div className="row2 d-flex align-items-center">
            <div className="card1 d-flex flex-column align-items-center text-center">
              <h4>Bookshelf</h4>
              <p>Books and pieces of wisdom I’ve enjoyed reading</p>
              <img src="../src/images/Bookshelf.png" alt="face" />
            </div>
            <div className="card2">
              <h4>Tech Stack</h4>
              <p>The dev tools, apps, devices, and games I use and play.</p>
              <img src="../src/images/Tech Stack.png" alt="" />
            </div>
          </div>
        </section>
        <section className="sec-three d-flex align-items-center text-start">
          <div className="texts d-flex flex-column">
            <h3>Let’s work together</h3>
            <p>
              Want to discuss an opportunity to create something great? I’m
              ready when you are.
            </p>
          </div>
          <button className="border border-0">
            <img src="../src/images/Send.png" alt="send" />
            Get in touch
          </button>
        </section>
        <footer className="d-flex">
          <div className="logo d-flex flex-column align-items-start">
            <img src="../src/images/Logo.svg" alt="" />
            <p className="thank">Thanks for stopping by ッ</p>
            <p>© 2023 Sohaila G. All Rights Reserved.</p>
          </div>
          <div className="links d-flex flex-column text-start">
            <ul>
              <h5>Links</h5>
              <li className="text-capitalize">about</li>
              <li className="text-capitalize">work</li>
              <li className="text-capitalize">Tech Stack</li>
              <li className="text-capitalize">contact</li>
            </ul>
          </div>
          <div className="Elsewhere d-flex flex-column text-start align-items-center">
            <ul>
              <h5>Elsewhere</h5>
              <li className="text-capitalize">email</li>
              <li className="text-capitalize">linkedin</li>
              <li className="text-capitalize">gitHub</li>
              <li className="text-capitalize">twitter</li>
              <li className="text-capitalize">discord</li>
            </ul>
          </div>
        </footer>
        <div className="footer-icons d-flex d-lg-none align-items-center justify-content-between">
          <img src="../src/images/Home - Fill.png" alt="home" />
          <img src="../src/images/User - Outline.png" alt="" />
          <img src="../src/images/Bag - Outline.png" alt="" />
          <img src="../src/images/Pen - Outline.png" alt="" />
          <img src="../src/images/Message - Outline.png" alt="" />
          <img src="../src/images/More - Outline.png" alt="" />
        </div>
      </section>
    </>
  );
}

export default App;

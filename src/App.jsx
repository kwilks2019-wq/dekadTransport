import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";


function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="brand">
        <span>Dekad Transportation</span>
      </NavLink>

      <div className="navLinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
    </nav>
  );
}

function QuoteForm() {
  return (
    <form
      className="contactForm"
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />

      <input type="text" name="name" placeholder="Full Name" required />
      <input type="email" name="email" placeholder="Email Address" required />
      <input type="tel" name="phone" placeholder="Phone Number" required />
      <input type="text" name="pickup" placeholder="Pickup Location" />
      <input type="text" name="delivery" placeholder="Delivery Location" />

      <textarea
        name="message"
        placeholder="Tell us about your transportation needs"
        rows="6"
        required
      ></textarea>

      <button type="submit">Request Quote</button>
    </form>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="heroBox">
          <h1>Reliable Trucking Solutions for Every Mile</h1>
          <h2>Dekad Transportation LLC</h2>

          <p>
            Family-owned and committed to safe, dependable, and on-time freight
            transportation services.
          </p>

          <div className="heroButtons">
            <NavLink to="/contact" className="btn">Request Quote</NavLink>
            <NavLink to="/services" className="btn secondary">Our Services</NavLink>
          </div>
        </div>
      </section>

      <section className="scrollSection">
        <h1>Company Dashboard</h1>

        <div className="dashboardGrid">
          <div className="dashCard">
            <h3>Active Loads</h3>
            <p>Track current transportation jobs and deliveries.</p>
          </div>

          <div className="dashCard">
            <h3>Quote Requests</h3>
            <p>Manage customer quote requests quickly and efficiently.</p>
          </div>

          <div className="dashCard">
            <h3>Drivers</h3>
            <p>Monitor driver schedules and assignments.</p>
          </div>

          <div className="dashCard">
            <h3>Fleet Status</h3>
            <p>View truck availability and maintenance updates.</p>
          </div>
        </div>
      </section>

      <section className="scrollSection dark">
        <h1>Our Services</h1>

        <div className="cards">
          <div className="card">
            <h3>Freight Transportation</h3>
            <p>Professional freight hauling for businesses and clients.</p>
          </div>

          <div className="card">
            <h3>Regional Loads</h3>
            <p>Safe and reliable transportation across regional routes.</p>
          </div>

          <div className="card">
            <h3>Logistics Support</h3>
            <p>Helping businesses manage transportation operations.</p>
          </div>
        </div>
      </section>

      <section className="scrollSection">
        <h1>Request a Transportation Quote</h1>
        <QuoteForm />
      </section>
    </>
  );
}

function About() {
  return (
    <main className="page">
      <h1>About Dekad Transportation</h1>
      <p>
        Dekad Transportation LLC is a family-owned trucking company built on
        trust, safety, reliability, and hard work.
      </p>
      <p>
        We focus on dependable transportation services, clear communication,
        and on-time delivery for every customer.
      </p>
    </main>
  );
}

function Services() {
  return (
    <main className="page">
      <h1>Our Services</h1>

      <div className="cards">
        <div className="card">
          <h3>Freight Transportation</h3>
          <p>Safe and professional freight hauling.</p>
        </div>

        <div className="card">
          <h3>Local Loads</h3>
          <p>Reliable local transportation support.</p>
        </div>

        <div className="card">
          <h3>Regional Loads</h3>
          <p>Dependable regional hauling services.</p>
        </div>

        <div className="card">
          <h3>Logistics Support</h3>
          <p>Helping customers manage transportation needs.</p>
        </div>
      </div>
    </main>
  );
}

function Contact() {
  return (
    <main className="page">
      <h1>Request a Transportation Quote</h1>
      <QuoteForm />
    </main>
  );
}

function DriverApplication() {
  return (
    <main className="page">
      <h1>Dashboard</h1>

      <div className="dashboardGrid">
        <div className="dashCard">
          <h3>Quote Requests</h3>
          <p>View customer quote requests.</p>
        </div>

        <div className="dashCard">
          <h3>Active Loads</h3>
          <p>Track active transportation jobs.</p>
        </div>

        <div className="dashCard">
          <h3>Drivers</h3>
          <p>Manage driver information.</p>
        </div>

        <div className="dashCard">
          <h3>Fleet Status</h3>
          <p>View truck availability.</p>
        </div>
      </div>

      <section className="driverApplySection">
        <h2>Apply to Become a Driver</h2>
        <p>
          Interested in driving for Dekad Transportation LLC? Fill out the
          application below and our team will review your information.
        </p>

        <form
          name="driver-application"
          method="POST"
          data-netlify="true"
          className="contactForm"
        >
          <input type="hidden" name="form-name" value="driver-application" />

          <input type="text" name="fullName" placeholder="Full Name" required />

          <input type="email" name="email" placeholder="Email Address" required />

          <input type="tel" name="phone" placeholder="Phone Number" required />

          <input type="text" name="city" placeholder="City / State" required />

          <input type="text" name="licenseType" placeholder="CDL License Type" />

          <input type="text" name="experience" placeholder="Years of Driving Experience" />

          <textarea
            name="message"
            placeholder="Tell us about your driving experience"
            rows="6"
            required
          ></textarea>

          <button type="submit">Submit Application</button>
        </form>
      </section>
    </main>
  );
}

function Dashboard() {
  return (
    <main className="page">
      <h1>Dashboard</h1>

      <div className="dashboardGrid">
        <div className="dashCard">
          <h3>Quote Requests</h3>
          <p>0 New Requests</p>
        </div>

        <div className="dashCard">
          <h3>Active Loads</h3>
          <p>0 Active Loads</p>
        </div>

        <div className="dashCard">
          <h3>Drivers</h3>
          <p>Family Team</p>
        </div>

        <div className="dashCard">
          <h3>Fleet Status</h3>
          <p>Available</p>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
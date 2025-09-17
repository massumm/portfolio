// src/App.js
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import { SkeletonGrid } from './components/ui/skeleton';
import './index.css';

const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Masum Al Reza - Mobile App Developer</title>
        <meta
          name="description"
          content="Portfolio website of Masum Al Reza, a Full Stack Mobile App Developer. Showcasing projects, skills, and professional experience in mobile and web app development."
        />
        <meta
          name="keywords"
          content="Masum Al Reza, Mobile App Developer, Flutter, Android, Laravel, Portfolio, Cross-Platform Apps"
        />
        <meta name="author" content="Masum Al Reza" />
        <meta property="og:title" content="Masum Al Reza - Mobile App Developer Portfolio" />
        <meta
          property="og:description"
          content="Explore Masum Al Reza's portfolio website. Projects, skills, and experience in mobile and web app development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://massumm.github.io/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Masum Al Reza - Mobile App Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Explore Masum Al Reza's portfolio website. Projects, skills, and experience in mobile and web app development."
        />
        <link rel="canonical" href="https://massumm.github.io/" />

        {/* Structured Data for Google */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dhaka",
                "addressRegion": "Dhaka",
                "postalCode": "",
                "streetAddress": ""
              },
              "email": "mailto:object.masum@gmail.com",
              "image": "./Assets/masum.png",
              "jobTitle": "Mobile App Developer",
              "name": "Masum Al Reza",
              "telephone": "+8801626529619",
              "url": "https://massumm.github.io/"
            }
          `}
        </script>
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header />

      <div className="main-content">
        <About />
        <Suspense fallback={<div className="container py-16"><SkeletonGrid count={6} /></div>}>
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}

export default App;

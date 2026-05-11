/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Features } from './components/Features';
import { Location } from './components/Location';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-mh-dark">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Features />
      <Location />
      <CTA />
      <Footer />
    </main>
  );
}

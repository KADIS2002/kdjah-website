"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Code2, Megaphone, ShoppingBag, Sparkles, TrendingUp, WandSparkles } from "lucide-react";
import { CursorHint, Footer, Header, Hero, Loader, ScrollEffects } from "./components/motion";

const services = [
  { id: "01", icon: Megaphone, title: "SOCIAL MEDIA\nMARKETING", description: "Build a sharper presence and make every post feel like it belongs.", list: ["Social media strategy", "Content planning", "Brand positioning", "Audience engagement"], color: "blue" },
  { id: "02", icon: Code2, title: "AI WEB\nDEVELOPMENT", description: "Turn an ambitious idea into a thoughtful, responsive digital home.", list: ["AI-assisted development", "Responsive web design", "Landing pages", "Modern user experiences"], color: "lime" },
  { id: "03", icon: ShoppingBag, title: "E-COMMERCE\nEXPERIENCES", description: "Make the path from first look to checkout feel effortless.", list: ["E-commerce development", "Online store strategy", "Product presentation", "Conversion-focused UX"], color: "violet" },
  { id: "04", icon: TrendingUp, title: "GOOGLE ADS\n& PERFORMANCE", description: "Put the right message in front of the people already looking.", list: ["Search campaigns", "Display advertising", "Campaign optimization", "Performance tracking"], color: "blue" },
  { id: "05", icon: WandSparkles, title: "CREATIVE\nSTRATEGY", description: "Connect the big idea to the details people actually experience.", list: ["Campaign concepts", "Creative direction", "Brand storytelling", "Digital experiences"], color: "lime" },
];

const capabilities = ["STRATEGY", "PAID MEDIA", "CONTENT", "WEB DESIGN", "AI TOOLS", "E-COMMERCE"];

function SectionIntro({ index, label, title, accent }: { index: string; label: string; title: React.ReactNode; accent?: string }) {
  return <div className="section-intro" data-reveal><span className="section-label">[ {index} / {label} ]</span><h2>{title}{accent && <><br /><em>{accent}</em></>}</h2></div>;
}

function About() {
  return <section className="about-section section-wrap" id="about">
    <SectionIntro index="01" label="ABOUT ME" title={<>MORE THAN MARKETING.<br />I BUILD DIGITAL</>} accent="EXPERIENCES." />
    <div className="about-grid">
      <div className="portrait-column" data-reveal>
        <div className="portrait-frame"><div className="portrait-grid" /><div className="portrait-orbit portrait-orbit-a" /><div className="portrait-orbit portrait-orbit-b" /><div className="portrait-center"><span>K</span><i>PORTRAIT<br />PLACEHOLDER</i></div><span className="portrait-corner corner-tl" /><span className="portrait-corner corner-br" /><span className="portrait-label">KHADIJAH / DIGITAL CREATIVE</span></div>
        <div className="portrait-note"><span>BASED IN</span><span>PAKISTAN <i>↗</i> WORKING EVERYWHERE</span></div>
      </div>
      <div className="about-copy" data-reveal>
        <p className="about-lead">I’m Khadijah, a digital marketer passionate about helping businesses build a strong digital presence.</p>
        <p>From developing marketing strategies and running performance-driven campaigns to building websites with AI-powered tools, I combine creativity, technology, and strategy to turn ideas into meaningful digital experiences.</p>
        <p>I believe great marketing is not just about being seen. It’s about creating connections, building trust, and driving results.</p>
        <div className="about-signoff"><span className="signoff-line" /><span>STRATEGY WITH A HUMAN TOUCH.</span><Sparkles size={15} /></div>
      </div>
    </div>
    <div className="about-capabilities" data-reveal><span>MY TOOLKIT</span><div>{capabilities.map((item) => <span key={item}>{item}<i>↗</i></span>)}</div></div>
  </section>;
}

function Expertise() {
  return <section className="expertise-section section-wrap" id="expertise">
    <div className="expertise-head"><SectionIntro index="02" label="WHAT I DO" title={<>CREATIVE THINKING.</>} accent="STRATEGIC EXECUTION." /><p className="expertise-aside" data-reveal>Curiosity first. Clear strategy always.<br />Built around what your brand needs next.</p></div>
    <div className="service-grid">{services.map((service, index) => <motion.article className={`service-card ${service.color}`} key={service.id} data-reveal whileHover={{ y: -7, transition: { duration: .25 } }}>
      <div className="service-top"><span>{service.id} / 05</span><service.icon size={22} strokeWidth={1.5} /></div>
      <div className="service-graphic"><div className="service-graphic-orbit" /><div className="service-graphic-core"><service.icon size={29} strokeWidth={1.2} /></div><span className="graphic-cross cross-a">+</span><span className="graphic-cross cross-b">+</span></div>
      <h3>{service.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3><p>{service.description}</p>
      <ul>{service.list.map((item) => <li key={item}><span className="list-dash" />{item}</li>)}</ul>
      <span className="service-card-index">0{index + 1}</span>
    </motion.article>)}</div>
  </section>;
}

function Work() {
  const items = [
    { id: "01", type: "DIGITAL CAMPAIGN / CONCEPT", title: "A clearer kind\nof attention.", category: "SOCIAL STRATEGY", mark: "S / 01", style: "work-one" },
    { id: "02", type: "WEB EXPERIENCE / CONCEPT", title: "A new way\nto arrive.", category: "AI WEB DEVELOPMENT", mark: "W / 02", style: "work-two" },
    { id: "03", type: "COMMERCE / CONCEPT", title: "Made to move\nfrom want to wow.", category: "E-COMMERCE", mark: "E / 03", style: "work-three" },
  ];
  return <section className="work-section section-wrap" id="work"><div className="work-heading"><SectionIntro index="03" label="SELECTED WORK" title={<>IDEAS, MADE</>} accent="TANGIBLE." /><p data-reveal>A glimpse of the creative direction, digital thinking, and strategic craft I bring to every brief.<br /><span>CONCEPT DIRECTIONS — REPRESENTATIVE WORK, NOT CLIENT CLAIMS.</span></p></div>
    <div className="work-grid">{items.map((item, i) => <article className={`work-card ${item.style}`} key={item.id} data-reveal>
      <div className="work-art"><div className="work-art-grid" /><div className="work-art-orbit" /><span className="work-art-mark">{item.mark}</span><span className="work-art-type">{item.type}</span><div className="work-art-object">{i === 0 ? <><div className="poster-label">A LITTLE<br /><em>MORE</em><br />MEANING.</div><span className="poster-star">✳</span></> : i === 1 ? <><div className="web-window"><div className="window-top"><i /><i /><i /></div><div className="window-layout"><span>form<br /><em>follows feeling</em></span><b /><i /></div></div><span className="web-orb" /></> : <><div className="shop-petal petal-one" /><div className="shop-petal petal-two" /><div className="shop-petal petal-three" /><span className="shop-bead" /></>}</div><a href="#contact" className="work-open" aria-label={`Discuss ${item.category}`}><ArrowUpRight size={19} /></a></div>
      <div className="work-card-info"><span>{item.category}<i> / </i>{item.id}</span><h3>{item.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3><a href="#contact">LET’S CREATE SOMETHING <ArrowRight size={13} /></a></div>
    </article>)}</div>
  </section>;
}

function Approach() {
  const steps = [["01", "LISTEN", "Start with the real problem, audience, and ambition."], ["02", "SHAPE", "Find the clearest strategy and the most compelling idea."], ["03", "MAKE", "Build with care, test what matters, and refine the details."], ["04", "GROW", "Learn from the response and keep making the work stronger."]];
  return <section className="approach-section section-wrap"><div className="approach-title" data-reveal><span className="section-label">[ THE PROCESS ]</span><h2>THOUGHTFUL<br /><em>BY DESIGN.</em></h2><p>Good work starts with good questions.<br />The rest is a collaboration.</p></div><div className="approach-list">{steps.map(([num, title, body]) => <div className="approach-row" key={num} data-reveal><span>{num}</span><h3>{title}</h3><p>{body}</p><ArrowUpRight size={17} /></div>)}</div></section>;
}

function ContactStrip() {
  return <section className="contact-strip"><div className="contact-strip-grid" /><span className="contact-strip-label">GOOD IDEAS DESERVE<br />A GOOD FIRST STEP.</span><a href="mailto:khadijahpk2002@gmail.com">LET’S TALK <ArrowUpRight size={20} /></a><span className="contact-strip-glow" /></section>;
}

export default function Home() {
  return <><Loader /><ScrollEffects /><CursorHint /><Header /><main><Hero /><About /><Expertise /><Work /><Approach /><ContactStrip /></main><Footer /></>;
}

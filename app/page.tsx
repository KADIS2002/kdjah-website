import Image from "next/image";
import { ArrowRight, ArrowUpRight, Code2, Instagram, Mail, Megaphone, ShoppingBag, Sparkles, TrendingUp, WandSparkles } from "lucide-react";
import { CursorHint, Footer, Header, Hero, Loader, ScrollEffects } from "./components/motion";

const services = [
  { id: "01", icon: Megaphone, title: "SOCIAL MEDIA\nMARKETING", description: "Social media marketing and content strategy to help brands reach and engage the right audience.", list: ["Social media strategy", "Meta Ads campaign management", "Content strategy", "Audience engagement"], color: "blue" },
  { id: "02", icon: Code2, title: "AI WEB\nDEVELOPMENT", description: "Build a responsive website or landing page with thoughtful, AI-assisted development.", list: ["AI website development", "Responsive web design", "Landing pages", "Modern user experiences"], color: "lime" },
  { id: "03", icon: ShoppingBag, title: "E-COMMERCE\nEXPERIENCES", description: "Create clear e-commerce journeys that make it easier for customers to explore and buy.", list: ["E-commerce development", "Online store strategy", "Product presentation", "Conversion-focused UX"], color: "violet" },
  { id: "04", icon: TrendingUp, title: "GOOGLE ADS\n& PERFORMANCE", description: "Plan and manage Google Ads campaigns around your audience, offer, and business goals.", list: ["Google Ads management", "Search and display campaigns", "Campaign optimization", "Performance tracking"], color: "blue" },
  { id: "05", icon: WandSparkles, title: "CREATIVE\nSTRATEGY", description: "Connect the big idea to the details people actually experience, from SEO to campaign creative.", list: ["SEO and on-page content", "Marketing automation", "Campaign concepts", "Brand storytelling"], color: "lime" },
];

const capabilities = ["STRATEGY", "PAID MEDIA", "CONTENT", "WEB DESIGN", "AI TOOLS", "E-COMMERCE"];

function SectionIntro({ index, label, title, accent }: { index: string; label: string; title: React.ReactNode; accent?: string }) {
  return <div className="section-intro" data-reveal><span className="section-label">[ {index} / {label} ]</span><h2>{title}{accent && <><br /><em>{accent}</em></>}</h2></div>;
}

function About() {
  return <section className="about-section section-wrap" id="about">
    <SectionIntro index="01" label="ABOUT ME" title={<>DIGITAL MARKETING<br />FOR KERALA</>} accent="BUSINESSES." />
    <div className="about-grid">
      <div className="portrait-column" data-reveal>
        <div className="portrait-frame"><Image src="/images/khadijah-digital-marketer-kerala.jpg" alt="Khadijah, digital marketer serving Kerala, India" fill sizes="(max-width: 720px) 86vw, 380px" className="portrait-photo" /><div className="portrait-grid" /><span className="portrait-corner corner-tl" /><span className="portrait-corner corner-br" /><span className="portrait-label">KHADIJAH / DIGITAL CREATIVE</span></div>
        <div className="portrait-note"><span>BASED IN</span><span>INDIA <i>↗</i> WORKING EVERYWHERE</span></div>
      </div>
      <div className="about-copy" data-reveal>
        <p className="about-lead">I am Khadijah, a digital marketer serving businesses in Kerala, India with practical strategies for growing their online presence.</p>
        <p>My work includes Google Ads, Meta Ads, SEO, social media and content strategy, AI website development, e-commerce, and marketing automation. I shape the mix around each business and its goals.</p>
        <p>I believe effective digital marketing is more than visibility. It is about connecting with the right audience and making each digital experience useful.</p>
        <div className="about-signoff"><span className="signoff-line" /><span>STRATEGY WITH A HUMAN TOUCH.</span><Sparkles size={15} /></div>
      </div>
    </div>
    <div className="about-capabilities" data-reveal><span>MY TOOLKIT</span><div>{capabilities.map((item) => <span key={item}>{item}<i>↗</i></span>)}</div></div>
  </section>;
}

function Expertise() {
  return <section className="expertise-section section-wrap" id="expertise">
    <div className="expertise-head"><SectionIntro index="02" label="WHAT I DO" title={<>CREATIVE THINKING.</>} accent="STRATEGIC EXECUTION." /><p className="expertise-aside" data-reveal>Curiosity first. Clear strategy always.<br />Built around what your brand needs next.</p></div>
    <div className="service-grid">{services.map((service, index) => <article className={`service-card ${service.color}`} key={service.id} data-reveal>
      <div className="service-top"><span>{service.id} / 05</span><service.icon size={22} strokeWidth={1.5} /></div>
      <div className="service-graphic"><div className="service-graphic-orbit" /><div className="service-graphic-core"><service.icon size={29} strokeWidth={1.2} /></div><span className="graphic-cross cross-a">+</span><span className="graphic-cross cross-b">+</span></div>
      <h3>{service.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3><p>{service.description}</p>
      <ul>{service.list.map((item) => <li key={item}><span className="list-dash" />{item}</li>)}</ul>
      <span className="service-card-index">0{index + 1}</span>
    </article>)}</div>
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
  return <section className="contact-strip" id="contact" aria-labelledby="contact-heading"><div className="contact-strip-grid" /><div className="contact-strip-copy"><span className="contact-strip-label">[ READY WHEN YOU ARE ]</span><h2 id="contact-heading">HAVE AN IDEA? LET’S MAKE IT HAPPEN.</h2><div className="contact-details"><a href="mailto:khadijahpk2002@gmail.com"><Mail size={15} /> khadijahpk2002@gmail.com</a><a href="https://www.instagram.com/kdjah.vision/" target="_blank" rel="noreferrer"><Instagram size={15} /> @kdjah.vision</a></div></div><a className="contact-email-cta" href="mailto:khadijahpk2002@gmail.com">EMAIL ME <ArrowUpRight size={20} /></a><span className="contact-strip-glow" /></section>;
}

export default function Home() {
  return <><Loader /><ScrollEffects /><CursorHint /><Header /><main><Hero /><About /><Expertise /><Work /><Approach /><ContactStrip /></main><Footer /></>;
}

import Image from "next/image";
import { ArrowRight, ArrowUpRight, Code2, Instagram, Mail, Megaphone, Palette, PenLine, ShoppingBag, Sparkles, TrendingUp } from "lucide-react";
import { CursorHint, Footer, Header, Hero, Loader, ScrollEffects } from "./components/motion";

const services = [
  { id: "01", icon: Megaphone, title: "META ADS &\nSOCIAL MEDIA", description: "Paid campaigns and social content built to reach the right audience.", list: ["Meta Ads campaigns", "Lead generation", "Social media content", "Moment and buzz marketing"], color: "blue" },
  { id: "02", icon: TrendingUp, title: "GOOGLE ADS\n& SEO", description: "Search-driven growth, from paid campaigns to organic visibility.", list: ["Google Ads management", "Search and display campaigns", "SEO and on-page content", "Performance tracking"], color: "lime" },
  { id: "03", icon: PenLine, title: "CONTENT &\nSTRATEGY", description: "Connecting the big idea to the words and plans that carry it.", list: ["Campaign concepts", "Ad copy and creative copy", "Brand storytelling", "Content planning"], color: "blue" },
  { id: "04", icon: ShoppingBag, title: "E-COMMERCE &\nAUTOMATION", description: "Online stores and workflows that run smoothly and sell better.", list: ["Online store setup", "Product presentation", "Marketing automation", "Conversion-focused journeys"], color: "lime" },
  { id: "05", icon: Code2, title: "AI WEB\nDEVELOPMENT", description: "Responsive websites and landing pages built with AI-assisted coding in VS Code.", list: ["Landing pages", "Responsive web design", "AI-assisted development", "Modern user experiences"], color: "blue" },
  { id: "06", icon: Palette, title: "DESIGN &\nCREATIVES", description: "Ad creatives and visuals designed to stop the scroll.", list: ["Photoshop edits and compositing", "Canva designs", "Social media creatives", "Ad visuals"], color: "lime" },
];

const capabilities = ["STRATEGY", "META ADS", "GOOGLE ADS", "SEO", "SOCIAL MEDIA", "CONTENT", "E-COMMERCE", "AUTOMATION", "AI WEB DEV", "WEB DESIGN", "PHOTOSHOP", "CANVA"];

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
      <div className="service-top"><span>{service.id} / 06</span><service.icon size={22} strokeWidth={1.5} /></div>
      <div className="service-graphic"><div className="service-graphic-orbit" /><div className="service-graphic-core"><service.icon size={29} strokeWidth={1.2} /></div><span className="graphic-cross cross-a">+</span><span className="graphic-cross cross-b">+</span></div>
      <h3>{service.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3><p>{service.description}</p>
      <ul>{service.list.map((item) => <li key={item}><span className="list-dash" />{item}</li>)}</ul>
      <span className="service-card-index">0{index + 1}</span>
    </article>)}</div>
  </section>;
}

function Work() {
  const items = [
    { id: "01", type: "PAID MEDIA / CASE STUDY", title: "16 leads at ₹32 each.", category: "META ADS / LEAD GENERATION", mark: "P / 01", style: "work-one", summary: "3-day test campaign for RootMedia: Routine-Based Spoken English Course, targeting Ernakulam and Alappuzha.", action: "VIEW CASE STUDY" },
    { id: "02", type: "SOCIAL / ORIGINAL WORK", title: "Copy that rides the moment.", category: "AD COPY / MOMENT MARKETING", mark: "S / 02", style: "work-two", summary: "Ad copy, moment marketing, creative copy and buzz marketing posted on Meta.", action: "VIEW WORK" },
    { id: "03", type: "COMMERCE / CONCEPT", title: "Made to move\nfrom want to wow.", category: "E-COMMERCE", mark: "E / 03", style: "work-three" },
  ];
  return <section className="work-section section-wrap" id="work"><div className="work-heading"><SectionIntro index="03" label="SELECTED WORK" title={<>IDEAS, MADE</>} accent="TANGIBLE." /><p data-reveal>A glimpse of the creative direction, digital thinking, and strategic craft I bring to every brief.<br /><span>SELECTED CAMPAIGNS AND CREATIVE WORK.</span></p></div>
    <div className="work-grid">{items.map((item, i) => <article className={`work-card ${item.style}`} key={item.id} data-reveal>
      <div className={`work-art ${i === 0 ? "work-stats-art" : ""}`}><div className="work-art-grid" />{i !== 0 && <div className="work-art-orbit" />}<span className="work-art-mark">{item.mark}</span><span className="work-art-type">{item.type}</span><div className="work-art-object">{i === 0 ? <div className="case-stat-grid"><div><strong>16</strong><span>LEADS</span></div><div><strong>₹32</strong><span>COST PER LEAD</span></div><div><strong>27K</strong><span>REACH</span></div><div><strong>₹15.35</strong><span>CPM</span></div></div> : i === 1 ? <div className="social-post-grid"><div className="social-post"><Image src="/images/meta-ad-copy.webp" alt="Meta ad copy post: Make your brand impossible to ignore" width={1080} height={1350} sizes="(max-width: 720px) 22vw, 9vw" /></div><div className="social-post"><Image src="/images/meta-buzz-marketing.webp" alt="Meta buzz marketing post: Stop getting ghosted" width={1080} height={1350} sizes="(max-width: 720px) 22vw, 9vw" /></div><div className="social-post"><Image src="/images/meta-creative-copy.webp" alt="Meta creative copy post: Ready to get noticed?" width={1080} height={1350} sizes="(max-width: 720px) 22vw, 9vw" /></div><div className="social-post"><Image src="/images/meta-moment-marketing.webp" alt="Meta moment marketing creative: Your brand needs a boost" width={1080} height={1350} sizes="(max-width: 720px) 22vw, 9vw" /></div></div> : <><div className="shop-petal petal-one" /><div className="shop-petal petal-two" /><div className="shop-petal petal-three" /><span className="shop-bead" /></>}</div><a href={i === 0 ? "#rootmedia-case-study" : i === 1 ? "https://www.instagram.com/kdjah.vision/" : "#contact"} target={i === 1 ? "_blank" : undefined} rel={i === 1 ? "noreferrer" : undefined} className="work-open" aria-label={i === 0 ? "View RootMedia case study" : i === 1 ? "View social work on Instagram" : `Discuss ${item.category}`}><ArrowUpRight size={19} /></a></div>
      <div className="work-card-info"><span>{item.category}<i> / </i>{item.id}</span><h3>{item.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>{item.summary && <p className="work-card-summary">{item.summary}</p>}<a href={i === 0 ? "#rootmedia-case-study" : i === 1 ? "https://www.instagram.com/kdjah.vision/" : "#contact"} target={i === 1 ? "_blank" : undefined} rel={i === 1 ? "noreferrer" : undefined}>{item.action ?? "LET’S CREATE SOMETHING"} <ArrowRight size={13} /></a></div>
    </article>)}</div>
    <section className="case-study-detail" id="rootmedia-case-study" aria-labelledby="rootmedia-case-title"><span className="section-label">[ META ADS / LEAD GENERATION ]</span><h3 id="rootmedia-case-title">RootMedia: Routine-Based Spoken English Course</h3><dl className="case-study-metrics"><div><dt>OBJECTIVE</dt><dd>Lead generation</dd></div><div><dt>SPEND</dt><dd>₹522 over about 3 days</dd></div><div><dt>IMPRESSIONS</dt><dd>34,000</dd></div><div><dt>FREQUENCY</dt><dd>1.26</dd></div><div><dt>HOLD RATE</dt><dd>30.93%</dd></div></dl><p><strong>INSIGHT</strong> “The ad body outperformed its opening. Next step: test new 3-second hooks and scale budget gradually (20-30% every 2-3 days).”</p></section>
  </section>;
}

function Approach() {
  const steps = [["01", "LISTEN", "Start with the real problem, audience, and ambition."], ["02", "SHAPE", "Find the clearest strategy and the most compelling idea."], ["03", "MAKE", "Build with care, test what matters, and refine the details."], ["04", "GROW", "Learn from the response and keep making the work stronger."]];
  return <section className="approach-section section-wrap"><div className="approach-title" data-reveal><span className="section-label">[ THE PROCESS ]</span><h2>THOUGHTFUL<br /><em>BY DESIGN.</em></h2><p>Good work starts with good questions.<br />The rest is a collaboration.</p></div><div className="approach-list">{steps.map(([num, title, body]) => <div className="approach-row" key={num} data-reveal><span>{num}</span><h3>{title}</h3><p>{body}</p><ArrowUpRight size={17} /></div>)}</div></section>;
}

function ContactStrip() {
  return <section className="contact-strip" id="contact" aria-labelledby="contact-heading"><div className="contact-strip-grid" /><div className="contact-strip-copy"><span className="contact-strip-label">[ READY WHEN YOU ARE ]</span><h2 id="contact-heading">HAVE AN IDEA? LET’S MAKE IT HAPPEN.</h2><div className="contact-details"><a href="mailto:khadijahpk20002@gmail.com"><Mail size={15} /> khadijahpk20002@gmail.com</a><a href="https://www.instagram.com/kdjah.vision/" target="_blank" rel="noreferrer"><Instagram size={15} /> @kdjah.vision</a></div></div><a className="contact-email-cta" href="mailto:khadijahpk20002@gmail.com">EMAIL ME <ArrowUpRight size={20} /></a><span className="contact-strip-glow" /></section>;
}

export default function Home() {
  return <><Loader /><ScrollEffects /><CursorHint /><Header /><main><Hero /><About /><Expertise /><Work /><Approach /><ContactStrip /></main><Footer /></>;
}

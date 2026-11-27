"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Instagram, Mail, Menu, MoveUpRight, X } from "lucide-react";
import { BrandImage } from "./brand-image";
import OrbitScene from "../../components/OrbitScene";

const email = "khadijahpk20002@gmail.com";
const instagram = "https://www.instagram.com/kdjah.vision/";

export function Loader() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const seen = sessionStorage.getItem("khadijah-intro");
    if (seen) return;
    setShow(true);
    const timer = window.setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("khadijah-intro", "1");
    }, 600);
    return () => window.clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence>
      {show && <motion.div className="loader" initial={{ y: 0 }} animate={{ y: 0 }} exit={{ y: "-100%", transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}>
        <div className="loader-brand"><BrandImage className="loader-logo" alt="Khadijah logo" /><span>KHADIJAH<span className="lime">.</span></span></div>
        <div className="loader-track"><motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, ease: "easeInOut" }} /></div>
        <span className="loader-caption">DIGITAL EXPERIENCES WITH IMPACT</span>
      </motion.div>}
    </AnimatePresence>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [["01", "About", "#about"], ["02", "Expertise", "#expertise"], ["03", "Selected work", "#work"], ["04", "Contact", "#contact"]];
  return <>
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Khadijah home"><BrandImage /><span>KHADIJAH<span className="lime">.</span></span></a>
      <nav className="header-nav" aria-label="Main navigation">{links.slice(0, 3).map(([num, name, href]) => <a href={href} key={num}><span>{num}</span>{name}</a>)}</nav>
      <a className="header-contact" href="#contact">LET’S TALK <ArrowUpRight size={14} /></a>
      <button className="menu-toggle" onClick={() => setOpen(true)} aria-label="Open navigation"><Menu /></button>
    </header>
    <AnimatePresence>{open && <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <button className="menu-close" onClick={() => setOpen(false)} aria-label="Close navigation"><X /></button>
      <span className="eyebrow">NAVIGATE / KHADIJAH</span>
      {links.map(([num, name, href]) => <a href={href} key={num} onClick={() => setOpen(false)}><span>{num}</span>{name}<ArrowUpRight /></a>)}
      <div className="mobile-menu-social"><a href={instagram} target="_blank" rel="noreferrer">INSTAGRAM <Instagram size={14} /></a><a href={`mailto:${email}`}>EMAIL <Mail size={14} /></a></div>
    </motion.div>}</AnimatePresence>
  </>;
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 45, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 20 });
  const onMove = (event: React.MouseEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left - rect.width / 2) / 28);
    mouseY.set((event.clientY - rect.top - rect.height / 2) / 28);
  };
  return <section ref={ref} className="hero" id="top" onMouseMove={onMove} onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}>
    <div className="hero-grid" /><div className="hero-bluewash" />
    <OrbitScene />
    <div className="hero-content">
      <motion.div className="hero-kicker" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.35, duration: .7 }}><span className="live-dot" /> INDEPENDENT CREATIVE PARTNER <span className="kicker-rule" /> AVAILABLE FOR SELECT PROJECTS</motion.div>
      <h1 aria-label="Hey, I'm Khadijah. I turn ideas into digital impact.">
        <motion.span className="hero-overline" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.25, duration: .7 }}>HEY, I’M KHADIJAH<span className="lime">.</span></motion.span>
        <span className="hero-title-line"><motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 1.4, duration: .85, ease: [0.22, 1, .36, 1] }}>I TURN IDEAS</motion.span></span>
        <span className="hero-title-line"><motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 1.55, duration: .85, ease: [0.22, 1, .36, 1] }}>INTO <em>DIGITAL</em></motion.span></span>
        <span className="hero-title-line"><motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 1.7, duration: .85, ease: [0.22, 1, .36, 1] }}>IMPACT<span className="lime">.</span></motion.span></span>
      </h1>
      <div className="hero-foot"><div><p className="hero-roles">Digital Marketer <i>·</i> Creative Strategist <i>·</i> AI Web Developer</p><p className="hero-description">I help brands grow, connect, and stand out through strategic marketing, creative design, and powerful digital experiences.</p></div><div className="hero-actions"><a className="button button-lime" href="#work">EXPLORE MY WORK <ArrowDownRight size={16} /></a><a className="button button-quiet" href="#contact">LET’S CONNECT <ArrowUpRight size={15} /></a></div></div>
    </div>
    <div className="hero-coordinate"><span>01 / 05</span><span>CREATIVITY MEETS TECHNOLOGY</span><span>SCROLL TO EXPLORE</span></div>
    <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><ArrowDown size={16} /></a>
    <div className="hero-edge">STRATEGY <span>×</span> CREATIVITY <span>×</span> TECHNOLOGY</div>
  </section>;
}

export function ScrollEffects() {
  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    let disposed = false;
    void import("gsap").then(async ({ gsap }) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.fromTo(element, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 88%", once: true } });
        });
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
          gsap.to(element, { yPercent: -10, ease: "none", scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: true } });
        });
      });
    });
    return () => { disposed = true; ctx?.revert(); };
  }, []);
  return null;
}

export function MagneticLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const box = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${(event.clientX - box.left - box.width / 2) * .12}px`);
    event.currentTarget.style.setProperty("--my", `${(event.clientY - box.top - box.height / 2) * .15}px`);
  };
  const reset = (event: React.MouseEvent<HTMLAnchorElement>) => { event.currentTarget.style.setProperty("--mx", "0px"); event.currentTarget.style.setProperty("--my", "0px"); };
  return <a ref={ref} href={href} className={className} onMouseMove={handleMove} onMouseLeave={reset}>{children}</a>;
}

export function Footer() {
  const year = new Date().getFullYear();
  return <footer className="footer" id="footer"><div className="footer-glow" />
    <div className="footer-top"><span className="section-label">[ 05 / LET’S BUILD ]</span><span className="footer-availability"><span className="live-dot" /> OPEN FOR NEW PROJECTS</span></div>
    <div className="footer-main" data-reveal><p>HAVE AN IDEA? LET’S MAKE IT HAPPEN.</p><a className="footer-cta" href={`mailto:${email}`}>LET’S MAKE<br /><em>IT MATTER.</em><ArrowUpRight className="footer-arrow" /></a><p className="footer-description">KHADIJAH.<br />Digital Marketer &amp; Creative Digital Strategist.</p><a className="footer-email" href={`mailto:${email}`}>{email} <MoveUpRight size={14} /></a></div>
    <div className="footer-bottom"><a className="wordmark footer-wordmark" href="#top"><BrandImage /><span>KHADIJAH<span className="lime">.</span></span></a><nav className="footer-navigation" aria-label="Footer navigation"><a href="#about">ABOUT</a><a href="#expertise">EXPERTISE</a><a href="#work">WORK</a><a href="#contact">CONTACT</a></nav><span>© {year} KHADIJAH</span><div className="footer-social"><a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram profile"><Instagram size={14} /> @kdjah.vision</a><a href={`mailto:${email}`} aria-label="Email Khadijah"><Mail size={14} /> EMAIL</a></div><a className="back-top" href="#top">BACK TO TOP <ArrowUpRight size={13} /></a></div>
  </footer>;
}

export function CursorHint() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (event: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.transform = `translate(${event.clientX + 16}px, ${event.clientY + 16}px)`;
      setVisible(true);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div ref={ref} aria-hidden="true" className={`cursor-hint ${visible ? "is-visible" : ""}`}><span /></div>;
}

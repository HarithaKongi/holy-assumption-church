import { useState } from 'react';
import {
  Menu, X, Church, Clock3, MapPin, Phone, Users, Images, Cross, ChevronRight,
  ExternalLink, Heart, CalendarDays, ArrowUpRight, History, Navigation, Info,
  Mail, Bell, BookOpen, UserRound, Calendar, Landmark, Globe2, Camera, ChevronDown
} from 'lucide-react';

const churchPhoto = 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QPN3Cqnw6RsFQHW77ewXp2Z9wxb86Yox26QqSGPISACfaEhLeTqFS-EJtV71iWj7V7DEaJvu8x66wXW7XO_L_XIbZGh2NRUzezf85p28zpP4HbhQVRE4EGDmmB3iGwDWzV-pc=w1080-h715-k-no';
const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Our+Lady+of+Assumption+Church+Ramadurgam+Andhra+Pradesh';
const original = 'https://ramadurgam.weebly.com';
const navItems = [['Parish', '#parish'], ['Holy Mass', '#mass'], ['Updates', '#updates'], ['History', '#history'], ['Administration', '#administration'], ['Gallery', '#gallery'], ['Contact', '#contact']];
const priests = [
  ['Fr. Vermeulen', '1962–1976'], ['Fr. M. Anthaiah', '1966–1967'], ['Fr. Ch. Cherian', '1976–1977'],
  ['Fr. Y. Innaiah', '1977–1980'], ['Fr. Joy Andrews', '1980–1981'], ['Fr. B. Marreddy', '1981–1984'],
  ['Fr. Th. Abraham', '1984–1988'], ['Fr. M. Anthaiah', '1988–1993'], ['Fr. K. Sleevaraj', '1993–1994'],
  ['Fr. Y. Joji', '1994–1997'], ['Fr. Benny Joseph HGN', '1997–2001'], ['Fr. A. Arogyaswamy HGN', '2001–2004'],
  ['Fr. J. Jose M.F.', '2004–2006'], ['Fr. Gnana Prakash', '2006'], ['Fr. R. Shoury', '2006–2009'],
  ['Fr. N. Lourdu Prakash', '2010–2012'], ['Fr. Anthony', '2012–present (last published listing)']
];
function Heading({ icon: Icon = Cross, children, action }) {
  return <div className="block-heading"><div className="heading-symbol"><Icon size={18}/></div><h2>{children}</h2>{action && <a href={action.href}>{action.label}<ArrowUpRight size={14}/></a>}</div>;
}
function InfoItem({ icon: Icon, label, value, note }) {
  return <div className="detail-item"><span className="detail-icon"><Icon size={17}/></span><div><small>{label}</small><strong>{value}</strong>{note && <p>{note}</p>}</div></div>;
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [priestsOpen, setPriestsOpen] = useState(false);
  const [noticeOpen, setNoticeOpen] = useState(true);
  return <div className="parish-site" id="top">
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <div className="top-strip"><div className="wide-container strip-inner"><span><MapPin size={13}/> Ramadurgam, Kurnool District, Andhra Pradesh 518396</span><span><Heart size={13}/> Faith • Hope • Community</span></div></div>
    <header className="site-header"><div className="wide-container header-inner">
      <a className="site-brand" href="#top"><span className="brand-emblem"><Church size={26}/></span><span><strong>OUR LADY OF ASSUMPTION CHURCH</strong><small>RAMADURGAM PARISH</small></span></a>
      <button className="mobile-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'main-nav nav-visible' : 'main-nav'} aria-label="Main navigation">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="nav-map" href={mapUrl} target="_blank" rel="noreferrer">Find us <Navigation size={14}/></a></nav>
    </div></header>
    <main id="main-content">
      <section className="parish-banner" id="parish">
        <img src={churchPhoto} alt="Our Lady of Assumption Church in Ramadurgam" fetchPriority="high" />
        <div className="banner-shade"/>
        <div className="banner-content wide-container"><div className="banner-crumb"><a href="#top">Home</a><ChevronRight size={13}/><span>Parish</span></div><span className="banner-kicker">WELCOME TO OUR PARISH</span><h1>Our Lady of Assumption<br/><em>Church, Ramadurgam</em></h1><p>A home of faith, prayer and fellowship, rooted in generations of Christian heritage.</p><div className="banner-actions"><a className="gold-button" href="#mass">Holy Mass Timings <Clock3 size={15}/></a><a className="outline-button" href={mapUrl} target="_blank" rel="noreferrer">Location map <MapPin size={15}/></a></div></div>
        <div className="banner-caption"><Cross size={14}/> A parish family united in faith</div>
      </section>
      <nav className="parish-tabs" aria-label="Parish sections"><div className="wide-container tab-inner">{navItems.map(([label, href], i) => <a className={i === 0 ? 'active' : ''} href={href} key={href}>{label}</a>)}</div></nav>
      <div className="wide-container dashboard-layout">
        <div className="primary-column">
          <section className="panel mass-panel" id="mass"><Heading icon={Clock3} action={{href:'#contact',label:'More details'}}>Holy Mass Timing</Heading><p className="panel-lead">Join us in prayer and celebration of the Eucharist.</p><div className="mass-table"><div className="mass-row mass-head"><span>Day</span><span>Timing</span></div><div className="mass-row"><span>Sunday</span><strong>8:00 AM*</strong></div><div className="mass-row"><span>Monday – Saturday</span><strong>6:30 AM*</strong></div></div><p className="small-note"><Info size={13}/> *Previously published timings. Please confirm locally before travelling.</p></section>
          <section className="panel" id="history"><Heading icon={History} action={{href:original,label:'Know history'}}>Parish History</Heading><div className="history-content"><div className="history-photo"><img src={churchPhoto} alt="Church exterior" loading="lazy"/><span>Our Lady of Assumption Church</span></div><div className="history-copy"><p>Ramadurgam has a long Christian heritage, with local tradition and historical records telling the story of faith across generations.</p><p>A Goan register dated 1780 mentions a church dedicated to St. Anne. The village history records that Fr. Vermeulen built the present church in 1972, and that Bishop Johannes erected a cross on the hill on 14 September 1994.</p><a className="text-link" href={original + '/'} target="_blank" rel="noreferrer">Discover our heritage <ArrowUpRight size={14}/></a></div></div></section>
          <section className="panel" id="administration"><Heading icon={UserRound}>Parish Administration</Heading><div className="admin-profile"><div className="admin-avatar"><Church size={31}/></div><div><span className="profile-label">PARISH PRIEST · PREVIOUSLY PUBLISHED LISTING</span><h3>Fr. Anthony</h3><p>Current parish assignment and contact details should be confirmed locally.</p><a className="text-link" href="#contact">Parish contact information <ChevronRight size={14}/></a></div></div><div className="detail-grid"><InfoItem icon={MapPin} label="Parish" value="Ramadurgam"/><InfoItem icon={CalendarDays} label="Established" value="1850"/><InfoItem icon={Cross} label="Patron" value="Our Lady of Assumption"/><InfoItem icon={Users} label="Catholic population" value="1,314" note="Previously published figure"/></div></section>
          <section className="panel" id="updates"><Heading icon={Bell}>News & Updates</Heading><div className="notice-list">{noticeOpen && <article className="notice-card"><span className="notice-date"><Calendar size={16}/><small>PARISH NOTICE</small></span><div><h3>Parish announcements</h3><p>For current Mass schedules, feast celebrations and parish announcements, please check with the local parish community.</p></div><button aria-label="Dismiss notice" onClick={() => setNoticeOpen(false)}><X size={15}/></button></article>}<article className="notice-card"><span className="notice-date"><BookOpen size={16}/><small>PARISH HISTORY</small></span><div><h3>Preserving our heritage</h3><p>Explore the history and traditions of the Christian community in Ramadurgam.</p><a className="text-link" href="#history">Read parish history <ChevronRight size={14}/></a></div></article></div></section>
          <section className="panel" id="gallery"><Heading icon={Images} action={{href:original + '/ramadurgam-images.html',label:'More photos'}}>Parish Gallery</Heading><p className="panel-lead">A glimpse of our church and the community of Ramadurgam.</p><div className="gallery-grid"><a href={churchPhoto} target="_blank" rel="noreferrer" className="gallery-main"><img src={churchPhoto} alt="Our Lady of Assumption Church" loading="lazy"/><span><Camera size={15}/> Our parish church</span></a><a href={original + '/ramadurgam-church.html'} target="_blank" rel="noreferrer" className="gallery-link"><Church size={23}/><strong>Church memories</strong><small>Historic and present-day views</small><ArrowUpRight size={15}/></a><a href={original + '/ramadurgam-images.html'} target="_blank" rel="noreferrer" className="gallery-link"><Images size={23}/><strong>Village gallery</strong><small>Landmarks and community scenes</small><ArrowUpRight size={15}/></a></div></section>
          <section className="panel" id="priests"><Heading icon={Users}>Former Parish Priests</Heading><p className="panel-lead">Remembering the priests included in the parish's historical record.</p><button className="expand-trigger" aria-expanded={priestsOpen} onClick={() => setPriestsOpen(!priestsOpen)}><span>{priestsOpen ? 'Hide former priests' : 'View former priests'}</span><span>{priests.length} records <ChevronDown className={priestsOpen ? 'chevron-up' : ''} size={15}/></span></button>{priestsOpen && <div className="priests-list">{priests.map(([name, years]) => <div key={name+years}><strong>{name}</strong><span>{years}</span></div>)}</div>}</section>
        </div>
        <aside className="sidebar-column">
          <section className="panel stats-panel"><Heading icon={Landmark}>Quick Stats</Heading><div className="stats-list"><InfoItem icon={Church} label="Parish name" value="Ramadurgam"/><InfoItem icon={CalendarDays} label="Established" value="1850"/><InfoItem icon={Cross} label="Patron" value="Our Lady of Assumption"/><InfoItem icon={MapPin} label="Address" value="Ramadurgam, Via Nemakallu, Kurnool District, A.P. 518396"/><InfoItem icon={Phone} label="Telephone" value="Please confirm locally"/><InfoItem icon={Mail} label="Email" value="Contact details not verified"/></div></section>
          <section className="panel community-panel"><Heading icon={Heart}>Parish Life</Heading><p>Growing in faith through prayer, service and fellowship.</p><a href="#community"><Cross size={16}/> Devotions & prayer <ChevronRight size={14}/></a><a href="#community"><Users size={16}/> Community activities <ChevronRight size={14}/></a><a href="#priests"><History size={16}/> Parish heritage <ChevronRight size={14}/></a></section>
          <section className="panel location-panel" id="contact"><Heading icon={MapPin}>Contact Parish</Heading><div className="location-card"><MapPin size={20}/><div><strong>Our Lady of Assumption Church</strong><p>Ramadurgam, Via Nemakallu, Kurnool District, Andhra Pradesh 518396, India</p></div></div><a className="directions-button" href={mapUrl} target="_blank" rel="noreferrer"><Navigation size={15}/> Get directions <ExternalLink size={13}/></a><div className="contact-footnote"><Info size={14}/> Contact and service information may change. Please verify with the parish.</div></section>
          <section className="panel feast-panel"><span className="feast-icon"><Cross size={21}/></span><span className="feast-label">OUR PATRONAL FEAST</span><h3>Assumption of Mary</h3><p>Celebrated by the Catholic Church on 15 August.</p><a href="#history">Explore our faith <ChevronRight size={14}/></a></section>
        </aside>
      </div>
    </main>
    <footer className="site-footer"><div className="wide-container"><div className="footer-main"><a className="site-brand footer-brand" href="#top"><span className="brand-emblem"><Church size={25}/></span><span><strong>OUR LADY OF ASSUMPTION CHURCH</strong><small>RAMADURGAM PARISH</small></span></a><p>A digital home for our parish — sharing faith, heritage and community with the world.</p><a className="footer-map" href={mapUrl} target="_blank" rel="noreferrer"><Globe2 size={15}/> Find our church <ArrowUpRight size={14}/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Our Lady of Assumption Church, Ramadurgam.</span><a href="#top">Back to top ↑</a></div></div></footer>
  </div>;
}

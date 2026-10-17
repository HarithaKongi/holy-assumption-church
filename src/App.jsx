import { useState } from 'react';
import {
  Menu, X, Church, Clock3, MapPin, Phone, Users, Images, Cross,
  ChevronRight, ExternalLink, Heart, CalendarDays, ArrowUpRight,
  History, Navigation, Info, Mail, Bell, BookOpen, UserRound,
  Calendar, Landmark, Globe2, Camera, ChevronDown, Home, Search
} from 'lucide-react';

const churchPhoto = 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QPN3Cqnw6RsFQHW77ewXp2Z9wxb86Yox26QqSGPISACfaEhLeTqFS-EJtV71iWj7V7DEaJvu8x66wXW7XO_L_XIbZGh2NRUzezf85p28zpP4HbhQVRE4EGDmmB3iGwDWzV-pc=w1080-h715-k-no';
const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Our+Lady+of+Assumption+Church+Ramadurgam+Andhra+Pradesh';
const historyUrl = 'https://ramadurgam.weebly.com';
const navItems = [['Home', '#top'], ['History', '#history'], ['Administration', '#administration'], ['Feast Days', '#feast-days'], ['Former Priests', '#priests'], ['Parish Timings', '#mass'], ['Weekly Updates', '#updates'], ['Gallery', '#gallery']];
const priests = [
  ['Fr. Vermeulen', '1962–1976'], ['Fr. M. Anthaiah', '1966–1967'], ['Fr. Ch. Cherian', '1976–1977'],
  ['Fr. Y. Innaiah', '1977–1980'], ['Fr. Joy Andrews', '1980–1981'], ['Fr. B. Marreddy', '1981–1984'],
  ['Fr. Th. Abraham', '1984–1988'], ['Fr. M. Anthaiah', '1988–1993'], ['Fr. K. Sleevaraj', '1993–1994'],
  ['Fr. Y. Joji', '1994–1997'], ['Fr. Benny Joseph HGN', '1997–2001'], ['Fr. A. Arogyaswamy HGN', '2001–2004'],
  ['Fr. J. Jose M.F.', '2004–2006'], ['Fr. Gnana Prakash', '2006'], ['Fr. R. Shoury', '2006–2009'],
  ['Fr. N. Lourdu Prakash', '2010–2012'], ['Fr. Anthony', '2012–present (last published listing)']
];
function SectionTitle({ icon: Icon = Cross, children, action }) {
  return <div className="section-title"><span className="section-icon"><Icon size={18}/></span><h2>{children}</h2>{action && <a href={action.href}>{action.label}<ArrowUpRight size={14}/></a>}</div>;
}
function Detail({ icon: Icon, label, value, note }) {
  return <div className="detail"><span className="detail-icon"><Icon size={17}/></span><div><small>{label}</small><strong>{value}</strong>{note && <p>{note}</p>}</div></div>;
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [priestsOpen, setPriestsOpen] = useState(false);
  const [noticeOpen, setNoticeOpen] = useState(true);
  return <div className="parish-site" id="top">
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <div className="utility-bar"><div className="page-width utility-inner"><span><MapPin size={13}/> Ramadurgam, Andhra Pradesh, India</span><span><Mail size={13}/> Our Lady of Assumption Church</span></div></div>
    <header className="site-header"><div className="page-width header-inner">
      <a className="brand" href="#top"><span className="brand-mark"><Church size={28}/></span><span className="brand-copy"><strong>OUR LADY OF ASSUMPTION CHURCH</strong><small>RAMADURGAM PARISH</small></span></a>
      <button className="mobile-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'main-nav nav-visible' : 'main-nav'} aria-label="Main navigation">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="find-button" href={mapUrl} target="_blank" rel="noreferrer">Find us <Navigation size={14}/></a></nav>
    </div></header>
    <main id="main-content">
      <section className="hero" id="parish">
        <img src={churchPhoto} alt="Our Lady of Assumption Church, Ramadurgam" fetchPriority="high"/>
        <div className="hero-overlay"/>
        <div className="page-width hero-content"><div className="breadcrumb"><a href="#top"><Home size={13}/> Home</a><ChevronRight size={13}/><span>Parish</span></div><span className="eyebrow">OUR PARISH</span><h1>Our Lady of Assumption<br/><em>Church, Ramadurgam</em></h1><p>A parish family united in faith, prayer and service — preserving our Christian heritage for generations to come.</p><div className="hero-actions"><a className="primary-button" href="#mass">Parish Timings <Clock3 size={15}/></a><a className="secondary-button" href={mapUrl} target="_blank" rel="noreferrer">Location Map <MapPin size={15}/></a></div></div>
        <div className="hero-caption"><Cross size={14}/> Faith · Hope · Community</div>
      </section>
      <div className="section-nav"><div className="page-width section-nav-inner">{navItems.map(([label, href], i) => <a className={i === 0 ? 'selected' : ''} href={href} key={href}>{label}</a>)}</div></div>
      <div className="page-width content-layout">
        <div className="main-column">
          {noticeOpen && <section className="notice-banner"><span className="notice-symbol"><Bell size={19}/></span><div><strong>Parish Notice</strong><p>For the latest announcements and service updates, please confirm details with the parish community.</p></div><button aria-label="Dismiss notice" onClick={() => setNoticeOpen(false)}><X size={16}/></button></section>}
          <section className="content-card" id="mass"><SectionTitle icon={Clock3} action={{href:'#contact',label:'More Details'}}>Holy Mass Timing</SectionTitle><p className="section-intro">Join us for the celebration of the Holy Eucharist.</p><div className="schedule-table"><div className="schedule-row schedule-heading"><span>Day</span><span>Holy Mass</span></div><div className="schedule-row"><span>Sunday</span><strong>08:00 AM</strong></div><div className="schedule-row"><span>Monday</span><strong>06:30 AM</strong></div><div className="schedule-row"><span>Tuesday</span><strong>06:30 AM</strong></div><div className="schedule-row"><span>Wednesday</span><strong>06:30 AM</strong></div><div className="schedule-row"><span>Thursday</span><strong>06:30 AM</strong></div><div className="schedule-row"><span>Friday</span><strong>06:30 AM</strong></div><div className="schedule-row"><span>Saturday</span><strong>06:30 AM</strong></div></div><p className="info-note"><Info size={14}/> Please confirm Mass timings with the parish before visiting.</p></section>
          <section className="content-card" id="history"><SectionTitle icon={History} action={{href:historyUrl,target:'_blank',label:'Know History'}}>History</SectionTitle><div className="history-layout"><div className="history-image"><img src={churchPhoto} alt="Our Lady of Assumption Church" loading="lazy"/><span>Our Lady of Assumption Church · Ramadurgam</span></div><div className="history-text"><p>Our Lady of Assumption Church is part of the Christian heritage of Ramadurgam, Andhra Pradesh. The parish continues to serve as a place of worship, prayer and fellowship for the local community.</p><p>Historical accounts mention an early church dedicated to St. Anne and record the development of the present church and the parish's long-standing traditions.</p><a className="inline-link" href={historyUrl} target="_blank" rel="noreferrer">Explore parish heritage <ArrowUpRight size={14}/></a></div></div></section>
          <section className="content-card" id="administration"><SectionTitle icon={UserRound}>Parish Administration</SectionTitle><div className="priest-profile"><div className="priest-avatar"><Church size={31}/></div><div><span className="overline">PARISH PRIEST</span><h3>Parish Priest</h3><p>Please contact the church to confirm the current parish priest and office details.</p><a className="inline-link" href="#contact">Parish contact information <ChevronRight size={14}/></a></div></div><div className="details-grid"><Detail icon={MapPin} label="Parish" value="Ramadurgam"/><Detail icon={CalendarDays} label="Established" value="1850"/><Detail icon={Cross} label="Patron" value="Our Lady of Assumption"/><Detail icon={Users} label="Community" value="Parish families"/></div></section>
          <section className="content-card" id="updates"><SectionTitle icon={Bell}>News & Updates</SectionTitle><div className="update-list"><article className="update-item"><span className="update-icon"><Calendar size={18}/></span><div><small>PARISH ANNOUNCEMENT</small><h3>Parish notices and celebrations</h3><p>Check with the parish for upcoming feast celebrations, community gatherings and changes to the weekly schedule.</p></div></article><article className="update-item"><span className="update-icon"><BookOpen size={18}/></span><div><small>OUR HERITAGE</small><h3>Preserving our parish history</h3><p>Discover the faith, traditions and memories that connect generations of the Ramadurgam parish community.</p><a className="inline-link" href="#history">Read parish history <ChevronRight size={14}/></a></div></article></div></section>
          <section className="content-card" id="gallery"><SectionTitle icon={Images} action={{href:historyUrl + '/ramadurgam-images.html',label:'View gallery'}}>Parish Gallery</SectionTitle><p className="section-intro">A glimpse of our church and the community of Ramadurgam.</p><div className="gallery-layout"><a className="gallery-feature" href={churchPhoto} target="_blank" rel="noreferrer"><img src={churchPhoto} alt="Church exterior" loading="lazy"/><span><Camera size={15}/> Our parish church</span></a><a className="gallery-tile" href={historyUrl + '/ramadurgam-church.html'} target="_blank" rel="noreferrer"><Church size={24}/><strong>Church memories</strong><small>Historic and present-day views</small><ArrowUpRight size={15}/></a><a className="gallery-tile" href={historyUrl + '/ramadurgam-images.html'} target="_blank" rel="noreferrer"><Images size={24}/><strong>Community gallery</strong><small>Explore parish and village photos</small><ArrowUpRight size={15}/></a></div></section>
          <section className="content-card" id="priests"><SectionTitle icon={Users}>Former Priests</SectionTitle><p className="section-intro">A record of priests named in previously published parish history.</p><button className="expand-button" aria-expanded={priestsOpen} onClick={() => setPriestsOpen(!priestsOpen)}><span>{priestsOpen ? 'Hide former priests' : 'View former priests'}</span><span>{priests.length} records <ChevronDown className={priestsOpen ? 'rotate-icon' : ''} size={15}/></span></button>{priestsOpen && <div className="priests-list">{priests.map(([name, years]) => <div key={name + years}><strong>{name}</strong><span>{years}</span></div>)}</div>}</section>
        </div>
        <aside className="side-column">
          <section className="content-card stats-card"><SectionTitle icon={Landmark}>Quick Stats</SectionTitle><div className="stats-list"><Detail icon={Church} label="Parish" value="Our Lady of Assumption"/><Detail icon={CalendarDays} label="Established" value="1850"/><Detail icon={Cross} label="Patron" value="Our Lady of Assumption"/><Detail icon={MapPin} label="Address" value="Ramadurgam, Andhra Pradesh"/><Detail icon={Phone} label="Telephone" value="Please confirm locally"/><Detail icon={Mail} label="Email" value="Not verified"/></div></section>
          <section className="content-card community-card"><SectionTitle icon={Heart}>Parish Life</SectionTitle><p>Growing together through prayer, service and fellowship.</p><a href="#mass"><Cross size={16}/> Holy Mass & prayer <ChevronRight size={14}/></a><a href="#updates"><Users size={16}/> Community activities <ChevronRight size={14}/></a><a href="#priests"><History size={16}/> Parish heritage <ChevronRight size={14}/></a></section>
          <section className="content-card contact-card" id="contact"><SectionTitle icon={MapPin}>Contact Parish</SectionTitle><div className="contact-address"><MapPin size={20}/><div><strong>Our Lady of Assumption Church</strong><p>Ramadurgam, Andhra Pradesh, India</p></div></div><a className="directions-button" href={mapUrl} target="_blank" rel="noreferrer"><Navigation size={15}/> Get directions <ExternalLink size={13}/></a><p className="contact-note"><Info size={14}/> Please verify current contact information and service timings locally.</p></section>
          <section className="feast-card" id="feast-days"><span className="feast-symbol"><Cross size={22}/></span><small>OUR PATRONAL FEAST</small><h3>Assumption of Mary</h3><p>The Catholic Church celebrates the Assumption of Mary on 15 August.</p><a href="#history">Discover our faith <ChevronRight size={14}/></a></section>
        </aside>
      </div>
    </main>
    <footer className="site-footer"><div className="page-width"><div className="footer-main"><a className="brand footer-brand" href="#top"><span className="brand-mark"><Church size={26}/></span><span className="brand-copy"><strong>OUR LADY OF ASSUMPTION CHURCH</strong><small>RAMADURGAM PARISH</small></span></a><p>A digital home for our parish — sharing faith, heritage and community with the world.</p><a className="footer-location" href={mapUrl} target="_blank" rel="noreferrer"><Globe2 size={15}/> Find our church <ArrowUpRight size={14}/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Our Lady of Assumption Church, Ramadurgam.</span><a href="#top">Back to top ↑</a></div></div></footer>
  </div>;
}

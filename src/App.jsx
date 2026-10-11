import { useState } from 'react';
import { Menu, X, Church, Home, Clock3, MapPin, Phone, Mail, CalendarDays, Users, Images, BookOpen, Cross, ChevronRight, ExternalLink } from 'lucide-react';

const original = 'https://ramadurgam.weebly.com';
const navItems = [['Home', '#home'], ['Parish Profile', '#profile'], ['History', '#history'], ['Gallery', '#gallery'], ['Contact', '#contact']];
const priests = [
  ['Fr. Vermeulen', '1962–1976'], ['Fr. M. Anthaiah', '1966–1967'], ['Fr. Ch. Cherian', '1976–1977'],
  ['Fr. Y. Innaiah', '1977–1980'], ['Fr. Joy Andrews', '1980–1981'], ['Fr. B. Marreddy', '1981–1984'],
  ['Fr. Th. Abraham', '1984–1988'], ['Fr. M. Anthaiah', '1988–1993'], ['Fr. K. Sleevaraj', '1993–1994'],
  ['Fr. Y. Joji', '1994–1997'], ['Fr. Benny Joseph HGN', '1997–2001'], ['Fr. A. Arogyaswamy HGN', '2001–2004'],
  ['Fr. J. Jose M.F.', '2004–2006'], ['Fr. Gnana Prakash', '2006'], ['Fr. R. Shoury', '2006–2009'],
  ['Fr. N. Lourdu Prakash', '2010–2012'], ['Fr. Anthony', '2012–present (as previously listed)']
];
function SectionTitle({ children }) { return <div className="section-title"><span className="section-cross"><Cross size={16}/></span><h2>{children}</h2></div>; }

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="parish-site" id="home">
    <div className="utility-bar"><div className="container utility-inner"><span><MapPin size={13}/> Ramadurgam, Kurnool District, Andhra Pradesh 518396</span><span><Cross size={13}/> A parish community rooted in faith</span></div></div>
    <header className="site-header"><div className="container header-inner">
      <a className="site-brand" href="#home"><span className="brand-emblem"><Church size={29}/></span><span><strong>OUR LADY OF ASSUMPTION CHURCH</strong><small>RAMADURGAM PARISH</small></span></a>
      <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'main-nav nav-visible' : 'main-nav'}>{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
    </div></header>
    <main>
      <section className="parish-banner"><div className="banner-image"><div className="banner-light"/><div className="banner-cross"><Cross size={54} strokeWidth={1}/></div><div className="banner-church"><div className="banner-tower"><span/></div><div className="banner-building"><span/><i/><b/></div></div></div><div className="banner-overlay"/><div className="container banner-content"><div className="breadcrumbs"><a href="#home">Home</a><ChevronRight size={13}/><span>Parish Profile</span></div><div className="banner-label">WELCOME TO OUR PARISH</div><h1>Our Lady of Assumption<br/><em>Church, Ramadurgam</em></h1><p>A place of prayer, devotion and community in the heart of Ramadurgam.</p></div></section>
      <div className="container page-layout">
        <aside className="sidebar">
          <div className="sidebar-heading"><Church size={18}/><span>PARISH MENU</span></div>
          {navItems.map(([label, href], i) => <a className={i === 1 ? 'side-link side-active' : 'side-link'} key={href} href={href}><span>{label}</span><ChevronRight size={15}/></a>)}
          <div className="sidebar-mass"><div className="side-mass-title"><Clock3 size={17}/> Mass Timings</div><div className="side-mass-row"><span>Monday – Saturday</span><strong>6:30 AM*</strong></div><div className="side-mass-row"><span>Sunday</span><strong>8:00 AM*</strong></div><small>*Please confirm the current schedule locally before travelling.</small></div>
          <div className="sidebar-contact"><div className="side-mass-title"><MapPin size={17}/> Find Us</div><p>Assumption Church,<br/>Ramadurgam, Via Nemakallu,<br/>Kurnool District, A.P. 518396</p><a href="https://www.google.com/maps/search/?api=1&query=Assumption+Church+Ramadurgam+Andhra+Pradesh" target="_blank" rel="noreferrer">Open map <ExternalLink size={13}/></a></div>
        </aside>
        <div className="content-column">
          <section className="profile-section" id="profile"><SectionTitle>Parish Profile</SectionTitle><p className="section-intro">Learn about our parish, its patron, community and traditions.</p><div className="profile-grid">
            <div className="profile-photo"><div className="photo-illustration"><Cross size={32}/><Church size={72} strokeWidth={1}/></div><span>OUR LADY OF ASSUMPTION CHURCH</span></div>
            <div className="profile-table"><div><span>Parish Name</span><strong>Ramadurgam</strong></div><div><span>Established Year</span><strong>1850</strong></div><div><span>Patron</span><strong>Our Lady of Assumption</strong></div><div><span>Parish Priest</span><strong>Fr. Anthony <small>(last listed online; please verify)</small></strong></div><div><span>Catholic Population</span><strong>1,314 <small>(previously published figure)</small></strong></div><div><span>Address</span><strong>Ramadurgam, Via Nemakallu, Kurnool District, Andhra Pradesh 518396</strong></div></div>
          </div></section>
          <section className="content-section" id="history"><SectionTitle>History of the Parish</SectionTitle><p>Ramadurgam has a long Christian heritage, with local tradition and historical records telling the story of faith across generations. The village history mentions a church dedicated to St. Anne in a Goan register dated 1780. A record in the Bellary Diocesan archives dated 1886 preserves a tradition about two men from Adoni who encountered Christianity and helped establish the community here.</p><p>The village history also records that Fr. Vermeulen built the present church in 1972, and that Bishop Johannes erected a cross on the hill on 14 September 1994. These milestones form part of the story of faith and community in Ramadurgam.</p><a className="inline-link" href={original + '/'} target="_blank" rel="noreferrer">Explore more about Ramadurgam <ExternalLink size={14}/></a></section>
          <section className="content-section" id="parish-life"><SectionTitle>Parish Life & Associations</SectionTitle><div className="info-cards"><article><span className="info-icon"><HeartIcon/></span><h3>Pious Associations</h3><ul><li>Monthly devotions</li><li>Special devotion to St. Ann</li><li>Legion of Mary</li></ul></article><article><span className="info-icon"><Users size={22}/></span><h3>Community Activities</h3><ul><li>Youth groups</li><li>Social awareness activities</li><li>HIV awareness programmes</li><li>Social and literary awareness</li></ul></article></div></section>
          <section className="content-section" id="priests"><SectionTitle>Former Parish Priests</SectionTitle><p className="section-intro">A record of priests associated with the parish over the years. Dates reflect the historical list and may overlap.</p><div className="priests-table"><div className="priests-head"><span>Priest</span><span>Years of service</span></div>{priests.map(([name, years]) => <div className="priest-row" key={name + years}><span>{name}</span><span>{years}</span></div>)}</div></section>
          <section className="content-section" id="gallery"><SectionTitle>Photo Gallery</SectionTitle><p className="section-intro">Memories of the church and village, preserved for the community.</p><div className="gallery-cards"><a href={original + '/ramadurgam-church.html'} target="_blank" rel="noreferrer"><span className="gallery-icon"><Church size={31}/></span><span><strong>Church: Then & Now</strong><small>See the church through the years</small></span><ExternalLink size={15}/></a><a href={original + '/ramadurgam-images.html'} target="_blank" rel="noreferrer"><span className="gallery-icon"><Images size={31}/></span><span><strong>Ramadurgam Village</strong><small>Explore village scenes and memories</small></span><ExternalLink size={15}/></a></div></section>
          <section className="content-section contact-section" id="contact"><SectionTitle>Contact & Location</SectionTitle><div className="contact-grid"><div><MapPin size={19}/><span><strong>Church Address</strong><small>Assumption Church, Ramadurgam, Via Nemakallu, Kurnool District, Andhra Pradesh 518396, India</small></span></div><div><Phone size={19}/><span><strong>Parish Contact</strong><small>Please confirm the current phone number with the parish; historical online listings differ.</small></span></div></div><a className="map-button" href="https://www.google.com/maps/search/?api=1&query=Assumption+Church+Ramadurgam+Andhra+Pradesh" target="_blank" rel="noreferrer"><MapPin size={16}/> Get directions <ExternalLink size={14}/></a></section>
        </div>
      </div>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><a className="site-brand footer-brand" href="#home"><span className="brand-emblem"><Church size={25}/></span><span><strong>OUR LADY OF ASSUMPTION CHURCH</strong><small>RAMADURGAM PARISH</small></span></a><p>A digital home for our parish — sharing faith, heritage and community with the world.</p><div className="copyright">© {new Date().getFullYear()} Our Lady of Assumption Church, Ramadurgam. <span>Made with faith and care.</span></div></div></footer>
  </div>;
}
function HeartIcon() { return <Cross size={22}/>; }

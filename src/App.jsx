import { useState } from 'react';
import {
  Menu, X, Church, Clock3, MapPin, Phone, Users, Images, Cross,
  ChevronRight, ExternalLink, Heart, CalendarDays, ArrowUpRight,
  History, Navigation, Info
} from 'lucide-react';

const original = 'https://ramadurgam.weebly.com';
const navItems = [
  ['Overview', '#profile'], ['Our History', '#history'], ['Parish Life', '#parish-life'],
  ['Former Priests', '#priests'], ['Photo Gallery', '#gallery'], ['Contact & Location', '#contact']
];
const priests = [
  ['Fr. Vermeulen', '1962–1976'], ['Fr. M. Anthaiah', '1966–1967'], ['Fr. Ch. Cherian', '1976–1977'],
  ['Fr. Y. Innaiah', '1977–1980'], ['Fr. Joy Andrews', '1980–1981'], ['Fr. B. Marreddy', '1981–1984'],
  ['Fr. Th. Abraham', '1984–1988'], ['Fr. M. Anthaiah', '1988–1993'], ['Fr. K. Sleevaraj', '1993–1994'],
  ['Fr. Y. Joji', '1994–1997'], ['Fr. Benny Joseph HGN', '1997–2001'], ['Fr. A. Arogyaswamy HGN', '2001–2004'],
  ['Fr. J. Jose M.F.', '2004–2006'], ['Fr. Gnana Prakash', '2006'], ['Fr. R. Shoury', '2006–2009'],
  ['Fr. N. Lourdu Prakash', '2010–2012'], ['Fr. Anthony', '2012–present (last published listing)']
];
function SectionTitle({ icon: Icon = Cross, children, id }) {
  return <div className="section-title" id={id}><span className="section-cross"><Icon size={17}/></span><h2>{children}</h2></div>;
}
function ChurchIllustration({ compact = false }) {
  return <div className={compact ? 'church-art church-art-compact' : 'church-art'} aria-label="Decorative church illustration" role="img">
    <div className="art-sun"/><div className="art-hill art-hill-back"/><div className="art-hill art-hill-front"/>
    <div className="art-building"><div className="art-roof"/><div className="art-tower"><span className="art-tower-window"/><span className="art-cross"><i/></span></div><span className="art-window art-window-left"/><span className="art-window art-window-right"/><span className="art-door"/></div>
    <span className="art-caption">OUR LADY OF ASSUMPTION</span>
  </div>;
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [priestsOpen, setPriestsOpen] = useState(false);
  return <div className="parish-site" id="home">
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <div className="utility-bar"><div className="container utility-inner">
      <span><MapPin size={14}/> Ramadurgam, Kurnool District, Andhra Pradesh 518396</span>
      <span><Heart size={13}/> Faith · Heritage · Community</span>
    </div></div>
    <header className="site-header"><div className="container header-inner">
      <a className="site-brand" href="#home" aria-label="Our Lady of Assumption Church home"><span className="brand-emblem"><Church size={27}/></span><span><strong>OUR LADY OF ASSUMPTION</strong><small>ROMAN CATHOLIC CHURCH · RAMADURGAM</small></span></a>
      <button className="mobile-toggle" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'main-nav nav-visible' : 'main-nav'} aria-label="Main navigation">
        {navItems.filter((_, i) => [0,1,2,4,5].includes(i)).map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-visit" href="#contact" onClick={() => setMenuOpen(false)}>Plan a visit <ArrowUpRight size={14}/></a>
      </nav>
    </div></header>
    <main id="main-content">
      <section className="parish-hero">
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="breadcrumbs"><a href="#home">Home</a><ChevronRight size={13}/><span>Our Parish</span></div>
            <div className="eyebrow"><span/> A WELCOMING PARISH COMMUNITY</div>
            <h1>Our Lady of Assumption <em>Church</em></h1>
            <p className="hero-lead">A place of prayer, hope and belonging in Ramadurgam. Discover our parish story, traditions and community.</p>
            <div className="hero-actions"><a className="primary-action" href="#profile">Explore the parish <ChevronRight size={16}/></a><a className="secondary-action" href="#contact"><MapPin size={16}/> Find our church</a></div>
            <div className="hero-meta"><span><Cross size={15}/> Rooted in faith</span><span><Users size={15}/> Serving our community</span></div>
          </div>
          <div className="hero-visual"><div className="hero-streetview"><iframe title="Explore St Ann's Church in Ramadurgam using Google Maps Street View" src="https://maps.google.com/maps?q=15.2952233,77.2429757&layer=c&cbll=15.2952233,77.2429757&output=svembed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe><a className="streetview-open" href="https://www.google.com/maps/place/St+Ann's+Church,+Ramadurgam+Village,+Chippagiri/@15.2952233,77.2429757,3a,75y,90t/data=!3m8!1e5!3m6!1sCIABIhCz30Z7GM2nK1ethFFBW2lw!2e10!3e10!6shttps:%2F%2Flh3.googleusercontent.com%2Fgrass-cs%2FAABkmLf5tn8rrOa8GWuHrVfXANZmxct4iRx-fu0qi6uGNMIMkFge8HFiikoJjSWhV3436k1WTZj97xENwuEHU1Ia-JuDYtFsyfyUtprjyNgvjLDafNqX5VHOiHnjwpkuyVLQja6HKpOHyIJCwM0q%3Dw152-h86-k-no!7i1920!8i1080!4m18!1m8!3m7!1s0x3bb6fc4af3598a7b:0x711ff9eb7d80684d!2sOur+Lady+of+Assumption+Church!8m2!3d15.2948751!4d77.2430076!10e5!16s%2Fg%2F11f3mbmjs9!3m8!1s0x3bb6fc4a4466cc41:0x2838f85dee847662!8m2!3d15.2952233!4d77.2429757!10e5!14m1!1BCgIgARICCAQ!16s%2Fg%2F11f148l2gy" target="_blank" rel="noreferrer"><ExternalLink size={13}/> Open 360° view</a></div><div className="hero-photo-note"><span className="note-dot"/> Explore the church surroundings in Google Maps</div></div>
        </div>
        <div className="hero-bottom-line"/>
      </section>
      <section className="quick-facts" aria-label="Parish highlights"><div className="container facts-grid">
        <a className="fact-item" href="#profile"><span className="fact-icon"><CalendarDays size={20}/></span><span><small>PARISH ESTABLISHED</small><strong>1850</strong></span><ChevronRight size={16}/></a>
        <a className="fact-item" href="#profile"><span className="fact-icon"><Cross size={20}/></span><span><small>PATRON</small><strong>Our Lady of Assumption</strong></span><ChevronRight size={16}/></a>
        <a className="fact-item" href="#parish-life"><span className="fact-icon"><Heart size={20}/></span><span><small>PARISH LIFE</small><strong>Prayer & community</strong></span><ChevronRight size={16}/></a>
        <a className="fact-item" href="#contact"><span className="fact-icon"><Navigation size={20}/></span><span><small>LOCATION</small><strong>Ramadurgam, Andhra Pradesh</strong></span><ChevronRight size={16}/></a>
      </div></section>
      <div className="container page-layout">
        <aside className="sidebar" aria-label="Parish quick information">
          <div className="sidebar-heading"><Church size={18}/><span>PARISH INFORMATION</span></div>
          <div className="sidebar-nav"><p>EXPLORE</p>{navItems.map(([label, href]) => <a className="side-link" key={href} href={href}><span>{label}</span><ChevronRight size={15}/></a>)}</div>
          <div className="sidebar-mass"><div className="side-mass-title"><Clock3 size={17}/> Mass timings</div><div className="side-mass-row"><span>Monday – Saturday</span><strong>6:30 AM*</strong></div><div className="side-mass-row"><span>Sunday</span><strong>8:00 AM*</strong></div><small>*Previously published timings. Please confirm with the parish before travelling.</small></div>
          <div className="sidebar-contact"><div className="side-mass-title"><MapPin size={17}/> Visit the church</div><p>Assumption Church,<br/>Ramadurgam, Via Nemakallu,<br/>Kurnool District, A.P. 518396</p><a href="https://www.google.com/maps/search/?api=1&query=Assumption+Church+Ramadurgam+Andhra+Pradesh" target="_blank" rel="noreferrer">Get directions <ExternalLink size={13}/></a></div>
        </aside>
        <div className="content-column">
          <section className="profile-section content-card" id="profile"><SectionTitle icon={Church}>Parish overview</SectionTitle><p className="section-intro">A snapshot of our parish, its patron and the community it serves.</p><div className="profile-grid">
            <div className="profile-photo"><img className="profile-church-photo" src="https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QPN3Cqnw6RsFQHW77ewXp2Z9wxb86Yox26QqSGPISACfaEhLeTqFS-EJtV71iWj7V7DEaJvu8x66wXW7XO_L_XIbZGh2NRUzezf85p28zpP4HbhQVRE4EGDmmB3iGwDWzV-pc=w1080-h715-k-no" alt="Exterior view of Our Lady of Assumption Church, Ramadurgam" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }} /><span>OUR LADY OF ASSUMPTION CHURCH · RAMADURGAM</span></div>
            <div className="profile-table"><div><span>Parish name</span><strong>Ramadurgam</strong></div><div><span>Established year</span><strong>1850</strong></div><div><span>Patron</span><strong>Our Lady of Assumption</strong></div><div><span>Parish priest</span><strong>Fr. Anthony <small>Previously listed; current assignment to be confirmed.</small></strong></div><div><span>Catholic population</span><strong>1,314 <small>Previously published figure.</small></strong></div><div><span>Address</span><strong>Ramadurgam, Via Nemakallu, Kurnool District, Andhra Pradesh 518396</strong></div></div>
          </div><div className="info-notice"><Info size={15}/><span>Parish schedules and administrative details can change. Please confirm current information locally.</span></div></section>
          <section className="content-card" id="history"><SectionTitle icon={History}>A heritage of faith</SectionTitle><p>Ramadurgam has a long Christian heritage, with local tradition and historical records telling the story of faith across generations. A Goan register dated 1780 mentions a church dedicated to St. Anne. A record in the Bellary Diocesan archives dated 1886 preserves a local tradition about two men from Adoni who encountered Christianity and helped establish the community here.</p><p>The village history records that Fr. Vermeulen built the present church in 1972, and that Bishop Johannes erected a cross on the hill on 14 September 1994. These milestones are part of Ramadurgam's enduring story of faith and community.</p><a className="inline-link" href={original + '/'} target="_blank" rel="noreferrer">Discover more of Ramadurgam's story <ExternalLink size={14}/></a></section>
          <section className="content-card" id="parish-life"><SectionTitle icon={Heart}>Faith & parish life</SectionTitle><p className="section-intro">Growing in faith through prayer, service and fellowship.</p><div className="info-cards"><article><span className="info-icon"><Cross size={22}/></span><h3>Pious associations</h3><ul><li>Monthly devotions</li><li>Special devotion to St. Ann</li><li>Legion of Mary</li></ul></article><article><span className="info-icon"><Users size={22}/></span><h3>Community activities</h3><ul><li>Youth groups</li><li>Social awareness activities</li><li>HIV awareness programmes</li><li>Social and literary awareness</li></ul></article></div></section>
          <section className="content-card" id="priests"><SectionTitle icon={Users}>Former parish priests</SectionTitle><p className="section-intro">Remembering the priests included in the parish's historical record.</p><button className="accordion-trigger" aria-expanded={priestsOpen} onClick={() => setPriestsOpen(!priestsOpen)}><span>{priestsOpen ? 'Hide priest list' : 'View former parish priests'}</span><span>{priests.length} records <ChevronRight className={priestsOpen ? 'rotate-icon' : ''} size={16}/></span></button>{priestsOpen && <div className="priests-table"><div className="priests-head"><span>Priest</span><span>Years recorded</span></div>{priests.map(([name, years]) => <div className="priest-row" key={name + years}><span>{name}</span><span>{years}</span></div>)}</div>}</section>
          <section className="content-card" id="gallery"><SectionTitle icon={Images}>Church & village gallery</SectionTitle><p className="section-intro">Explore church memories and scenes from Ramadurgam.</p><div className="gallery-cards"><a href={original + '/ramadurgam-church.html'} target="_blank" rel="noreferrer"><span className="gallery-icon"><Church size={27}/></span><span><strong>Our church through the years</strong><small>Historic and present-day church views</small></span><ArrowUpRight size={16}/></a><a href={original + '/ramadurgam-images.html'} target="_blank" rel="noreferrer"><span className="gallery-icon"><Images size={27}/></span><span><strong>Ramadurgam village</strong><small>Village landmarks and community scenes</small></span><ArrowUpRight size={16}/></a></div></section>
          <section className="content-card contact-section" id="contact"><SectionTitle icon={MapPin}>Plan your visit</SectionTitle><p className="section-intro">You are welcome to visit and be part of our parish community.</p><div className="contact-grid"><div><MapPin size={19}/><span><strong>Church address</strong><small>Assumption Church, Ramadurgam, Via Nemakallu, Kurnool District, Andhra Pradesh 518396, India</small></span></div><div><Phone size={19}/><span><strong>Phone information</strong><small>Online listings have differing phone numbers. Please verify the current parish contact before calling.</small></span></div></div><a className="map-button" href="https://www.google.com/maps/search/?api=1&query=Assumption+Church+Ramadurgam+Andhra+Pradesh" target="_blank" rel="noreferrer"><Navigation size={16}/> Open directions <ExternalLink size={14}/></a></section>
        </div>
      </div>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><div className="footer-top"><a className="site-brand footer-brand" href="#home"><span className="brand-emblem"><Church size={25}/></span><span><strong>OUR LADY OF ASSUMPTION</strong><small>ROMAN CATHOLIC CHURCH · RAMADURGAM</small></span></a><a href="#home" className="back-top">Back to top ↑</a></div><p>A digital home for our parish — sharing faith, heritage and community with the world.</p><div className="copyright"><span>© {new Date().getFullYear()} Our Lady of Assumption Church, Ramadurgam.</span><span>Made with faith and care.</span></div></div></footer>
  </div>;
}

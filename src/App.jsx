import { useState } from 'react';
import {
  Menu, X, Church, Clock3, MapPin, Phone, Users, Images, Cross,
  ChevronRight, ExternalLink, Heart, CalendarDays, ArrowUpRight,
  History, Navigation, Info, Mail, Bell, BookOpen, UserRound,
  Calendar, Landmark, Globe2, Camera, ChevronDown, Home, School, Star
} from 'lucide-react';

const parishPhotosUrl = 'https://ramadurgam.weebly.com/ramadurgam-church.html';
const galleryUrl = 'https://ramadurgam.weebly.com/ramadurgam-images.html';
const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Assumption+Church+Ramadurgam+Chippagiri+Kurnool+Andhra+Pradesh+518396';
const phoneNumber = '9398505167';
const navItems = [
  ['History', '#history'], ['Administration', '#administration'], ['Feast Days', '#feast-days'],
  ['Eparchial Priests', '#priests'], ['Former Priests', '#priests'], ['Kurishupalli', '#institutions'],
  ['Chapels & Grotto', '#activities'], ['Church Undertakings', '#activities'],
  ['Institutes', '#institutions'], ['Religious Houses', '#activities']
];
const formerPriests = [
  ['Fr. Vermeulen', '1962–1976'], ['Fr. M. Anthaiah', '1966–1967'],
  ['Fr. Ch. Cherian', '1976–1977'], ['Fr. Y. Innaiah', '1977–1980'],
  ['Fr. Joy Andrews', '1980–1981'], ['Fr. B. Marreddy', '1981–1984'],
  ['Fr. Th. Abraham', '1984–1988'], ['Fr. M. Anthaiah', '1988–1993'],
  ['Fr. K. Sleevaraj', '1993–1994'], ['Fr. Y. Joji', '1994–1997'],
  ['Fr. Benny Joseph HGN', '1997–2001'], ['Fr. A. Arogyaswamy HGN', '2001–2004'],
  ['Fr. J. Jose M.F.', '2004–2006'], ['Fr. Gnana Prakash', '2006'],
  ['Fr. R. Shoury', '2006–2009'], ['Fr. N. Lourdu Prakash', '2010–2012'],
  ['Fr. Anthony', '2012–present in the older parish listing']
];
const historyMilestones = [
  ['1780', 'Ramadurgam is mentioned in the Goan register with a church dedicated to St. Anne.'],
  ['1853', 'Records from the Mudgal archives mention Fr. Francis Xavier Rodrigues travelling from Ramadurgam to Mudgal in connection with the Padroado dispute.'],
  ['1861', 'The supplied account records this date on the grave of Fr. Francis Xavier Rodrigues at the old St. Anne’s church.'],
  ['1886', 'A document in the Bellary Diocesan archives records a traditional account of the beginnings of Christianity in Ramadurgam.'],
  ['1895–1906', 'Fr. C. Thomas, a native of Ramadurgam, served as priest; according to the tradition, he later retired here and died in 1922.'],
  ['1930', 'St. Paul’s RCM TM School was established, according to the details supplied.'],
  ['1972', 'Fr. Vermeulen built the present church, according to the parish history supplied.'],
  ['1994', 'On 14 September, Bishop Johannes erected the Cross on the hill.'],
  ['1996', 'Fathima Convent (FC) was established, according to the details supplied.']
];
function SectionTitle({ icon: Icon = Cross, children, action }) {
  return <div className="section-title"><span className="section-icon"><Icon size={18}/></span><h2>{children}</h2>{action && <a href={action.href} target={action.target || undefined} rel={action.target === '_blank' ? 'noreferrer' : undefined}>{action.label}<ArrowUpRight size={14}/></a>}</div>;
}
function Detail({ icon: Icon, label, value, note }) {
  return <div className="detail"><span className="detail-icon"><Icon size={17}/></span><div><small>{label}</small><strong>{value}</strong>{note && <p>{note}</p>}</div></div>;
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [priestsOpen, setPriestsOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [noticeOpen, setNoticeOpen] = useState(true);
  return <div className="parish-site" id="top">
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <div className="utility-bar"><div className="page-width utility-inner"><span><MapPin size={13}/> Ramadurgam, Kurnool District, Andhra Pradesh</span><span><Cross size={13}/> Diocese of Kurnool</span></div></div>
    <header className="site-header"><div className="page-width header-inner">
      <a className="brand" href="#top"><span className="brand-mark"><Church size={28}/></span><span className="brand-copy"><strong>OUR LADY OF ASSUMPTION CHURCH</strong><small>RAMADURGAM PARISH · EST. 1850</small></span></a>
      <button className="mobile-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'main-nav nav-visible' : 'main-nav'} aria-label="Main navigation">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="find-button" href={mapUrl} target="_blank" rel="noreferrer">Find us <Navigation size={14}/></a></nav>
    </div></header>
    <main id="main-content">
      <section className="hero" id="parish">
        <img src="https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QPN3Cqnw6RsFQHW77ewXp2Z9wxb86Yox26QqSGPISACfaEhLeTqFS-EJtV71iWj7V7DEaJvu8x66wXW7XO_L_XIbZGh2NRUzezf85p28zpP4HbhQVRE4EGDmmB3iGwDWzV-pc=w1080-h715-k-no" alt="Our Lady of Assumption Church, Ramadurgam" fetchPriority="high"/>
        <div className="hero-overlay"/>
        <div className="page-width hero-content"><div className="breadcrumb"><a href="#top"><Home size={13}/> Home</a><ChevronRight size={13}/><span>Parish</span></div><span className="eyebrow">DIOCESE OF KURNOOL · ESTABLISHED 1850</span><h1>Our Lady of Assumption<br/><em>Church, Ramadurgam</em></h1><p>A parish community rooted in faith, prayer and service, honouring Our Lady of Assumption and preserving generations of Christian heritage.</p><div className="hero-actions"><a className="primary-button" href="#mass">Holy Mass Timings <Clock3 size={15}/></a><a className="secondary-button" href={mapUrl} target="_blank" rel="noreferrer">Location Map <MapPin size={15}/></a></div></div>
        <div className="hero-caption"><Cross size={14}/> Faith · Hope · Community</div>
      </section>
      <div className="section-nav"><div className="page-width section-nav-inner">{[['Parish','#top'],['Holy Mass','#mass'],['Updates','#updates'],['Obituary','#priests'],['Gallery','#gallery']].map(([label,href],i) => <a className={i === 0 ? 'selected' : ''} href={href} key={href}>{label}</a>)}</div></div>
      <div className="page-width content-layout">
        <div className="main-column">
          {noticeOpen && <section className="notice-banner"><span className="notice-symbol"><Bell size={19}/></span><div><strong>Welcome to Our Parish</strong><p>For announcements, sacramental schedules and any changes to Mass timings, please contact the parish directly.</p></div><button aria-label="Dismiss notice" onClick={() => setNoticeOpen(false)}><X size={16}/></button></section>}
          <section className="content-card" id="mass"><SectionTitle icon={Clock3} action={{href:'#contact',label:'Contact Parish'}}>Holy Mass Timing</SectionTitle><p className="section-intro">Join our parish community for the celebration of the Holy Eucharist.</p><div className="schedule-table"><div className="schedule-row schedule-heading"><span>Day</span><span>Holy Mass Timing</span></div><div className="schedule-row"><span>Sunday</span><strong>7:30 AM – 9:00 AM</strong></div><div className="schedule-row"><span>Monday</span><strong>6:30 AM – 7:30 AM</strong></div><div className="schedule-row"><span>Tuesday</span><strong>6:30 AM – 7:30 AM</strong></div><div className="schedule-row"><span>Wednesday</span><strong>6:30 AM – 7:30 AM</strong></div><div className="schedule-row"><span>Thursday</span><strong>6:30 AM – 7:30 AM</strong></div><div className="schedule-row"><span>Friday</span><strong>6:30 AM – 7:30 AM</strong></div><div className="schedule-row"><span>Saturday</span><strong>6:30 AM – 7:30 AM</strong></div></div><p className="info-note"><Info size={14}/> Timings shown here are provided by the parish contact. Please confirm before visiting.</p></section>
          <section className="content-card" id="history"><SectionTitle icon={History} action={{href:parishPhotosUrl,target:'_blank',label:'Original history page'}}>Parish History</SectionTitle><div className="history-layout"><div className="history-image"><a href={parishPhotosUrl} target="_blank" rel="noreferrer"><img src="https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QPN3Cqnw6RsFQHW77ewXp2Z9wxb86Yox26QqSGPISACfaEhLeTqFS-EJtV71iWj7V7DEaJvu8x66wXW7XO_L_XIbZGh2NRUzezf85p28zpP4HbhQVRE4EGDmmB3iGwDWzV-pc=w1080-h715-k-no" alt="Visit the original Ramadurgam church page for parish photographs" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }}/></a><span>Historical photographs and parish memories</span><a className="inline-link" href={parishPhotosUrl} target="_blank" rel="noreferrer">View original church photos <ArrowUpRight size={14}/></a></div><div className="history-text"><p>Ramadurgam has a long Christian history. A document in the Bellary Diocesan archives dated 1886 records a tradition that Minumula Nagappa and Chinna Nagappa, who travelled from Adoni to Raichur to buy jowar seeds, heard about Christianity there, met Fr. Rajendra, later moved to Ramadurgam and built a church.</p><p>Ramadurgam appears in the Goan register of 1780 with a church dedicated to St. Anne. The supplied history also describes the old St. Anne’s church, the present church built by Fr. Vermeulen in 1972, and the Cross erected on the hill by Bishop Johannes on 14 September 1994.</p><button className="inline-link history-toggle" onClick={() => setHistoryOpen(!historyOpen)} aria-expanded={historyOpen}>{historyOpen ? 'Show less history' : 'Read the full historical timeline'} <ChevronDown className={historyOpen ? 'rotate-icon' : ''} size={14}/></button></div></div>
            {historyOpen && <div className="timeline">{historyMilestones.map(([year, description]) => <div className="timeline-item" key={year}><strong>{year}</strong><p>{description}</p></div>)}</div>}
            <p className="history-caveat">Historical text is based on the account supplied for this parish website; dates and traditions are presented as recorded in that account.</p>
          </section>
          <section className="content-card" id="administration"><SectionTitle icon={UserRound}>Parish Administration</SectionTitle><div className="priest-profile"><div className="priest-avatar"><Church size={31}/></div><div><span className="overline">CURRENT PARISH PRIEST</span><h3>Rev. Fr. Gallela Vijay</h3><p>Parish priest of Our Lady of Assumption Church, Ramadurgam.</p><a className="inline-link" href="tel:+919398505167">Contact the parish <ChevronRight size={14}/></a></div></div><div className="details-grid"><Detail icon={MapPin} label="Diocese" value="Diocese of Kurnool"/><Detail icon={CalendarDays} label="Established" value="1850"/><Detail icon={Cross} label="Patron" value="Our Lady of Assumption"/><Detail icon={Users} label="Assistant Priest" value="None listed"/></div><p className="info-note"><Info size={14}/> Parish council and catechism teacher details will be added when confirmed.</p></section>
          <section className="content-card" id="updates"><SectionTitle icon={Bell}>News & Updates</SectionTitle><div className="update-list"><article className="update-item"><span className="update-icon"><Calendar size={18}/></span><div><small>PARISH FEAST</small><h3>Feast of the Assumption of the Blessed Virgin Mary</h3><p>Celebrated annually on 15 August, the principal feast associated with the parish’s dedication.</p></div></article><article className="update-item"><span className="update-icon"><Heart size={18}/></span><div><small>PARISH LIFE</small><h3>Prayer, devotion and community service</h3><p>Monthly devotions, special devotion to St. Anne, Legion of Mary, youth group and social-awareness activities are part of parish life.</p></div></article></div></section>
          <section className="content-card" id="priests"><SectionTitle icon={Users}>Former Parish Priests</SectionTitle><p className="section-intro">Names and years transcribed from the older Ramadurgam parish listing. The older listing may not reflect current appointments.</p><button className="expand-button" aria-expanded={priestsOpen} onClick={() => setPriestsOpen(!priestsOpen)}><span>{priestsOpen ? 'Hide former priests' : 'View former priests'}</span><span>{formerPriests.length} records <ChevronDown className={priestsOpen ? 'rotate-icon' : ''} size={15}/></span></button>{priestsOpen && <div className="priests-list">{formerPriests.map(([name, years], i) => <div key={name + years + i}><strong>{name}</strong><span>{years}</span></div>)}</div>}</section>
          <section className="content-card" id="institutions"><SectionTitle icon={School}>Parish Institutions</SectionTitle><div className="details-grid"><Detail icon={School} label="School" value="St. Paul’s RCM TM School" note="Established 1930, according to the supplied details"/><Detail icon={Landmark} label="Convent" value="Fathima Convent (FC)" note="Established 1996, according to the supplied details"/></div><p className="section-intro">The supplied parish information also notes that a government high school for Classes 1–10 has been sanctioned.</p></section>
          <section className="content-card" id="gallery"><SectionTitle icon={Images} action={{href:galleryUrl,target:'_blank',label:'Open original gallery'}}>Parish Gallery</SectionTitle><p className="section-intro">Explore historical church-construction photographs and present-day parish images on the Ramadurgam church website.</p><div className="gallery-layout"><a className="gallery-feature" href={parishPhotosUrl} target="_blank" rel="noreferrer"><img src="https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QPN3Cqnw6RsFQHW77ewXp2Z9wxb86Yox26QqSGPISACfaEhLeTqFS-EJtV71iWj7V7DEaJvu8x66wXW7XO_L_XIbZGh2NRUzezf85p28zpP4HbhQVRE4EGDmmB3iGwDWzV-pc=w1080-h715-k-no" alt="Our Lady of Assumption Church, Ramadurgam" loading="lazy"/><span><Camera size={15}/> Visit church photo archive</span></a><a className="gallery-tile" href={parishPhotosUrl} target="_blank" rel="noreferrer"><Church size={24}/><strong>Church memories</strong><small>Construction-era and present-day photographs</small><ArrowUpRight size={15}/></a><a className="gallery-tile" href={galleryUrl} target="_blank" rel="noreferrer"><Images size={24}/><strong>Parish image gallery</strong><small>Open the original Ramadurgam gallery</small><ArrowUpRight size={15}/></a></div><p className="history-caveat">The original photo archive is linked directly; use it to view and verify parish-specific photographs.</p></section>
        </div>
        <aside className="side-column">
          <section className="content-card stats-card"><SectionTitle icon={Landmark}>Quick Stats</SectionTitle><div className="stats-list"><Detail icon={Church} label="Parish" value="Our Lady of Assumption"/><Detail icon={CalendarDays} label="Established" value="1850"/><Detail icon={Cross} label="Patron" value="Our Lady of Assumption"/><Detail icon={Landmark} label="Diocese" value="Kurnool"/><Detail icon={MapPin} label="Address" value="Ramadurgam, via Nemakallu, Kurnool District, Andhra Pradesh 518396"/><Detail icon={Phone} label="Telephone" value={phoneNumber}/></div></section>
          <section className="content-card community-card"><SectionTitle icon={Heart}>Parish Life</SectionTitle><p>Growing together through prayer, devotion, service and fellowship.</p><a href="#feast-days"><Cross size={16}/> Feast days <ChevronRight size={14}/></a><a href="#activities"><Users size={16}/> Community activities <ChevronRight size={14}/></a><a href="#history"><History size={16}/> Parish heritage <ChevronRight size={14}/></a><a href="#institutions"><School size={16}/> Parish institutions <ChevronRight size={14}/></a></section>
          <section className="content-card contact-card" id="contact"><SectionTitle icon={MapPin}>Contact Parish</SectionTitle><div className="contact-address"><MapPin size={20}/><div><strong>Our Lady of Assumption Church</strong><p>Ramadurgam, via Nemakallu, Kurnool District, Andhra Pradesh 518396, India</p></div></div><a className="directions-button" href={mapUrl} target="_blank" rel="noreferrer"><Navigation size={15}/> Get directions <ExternalLink size={13}/></a><a className="directions-button call-button" href="tel:+919398505167"><Phone size={15}/> Call 9398505167</a></section>
          <section className="feast-card" id="feast-days"><span className="feast-symbol"><Cross size={22}/></span><small>PARISH FEAST DAYS</small><h3>Important Celebrations</h3><div className="feast-date"><strong>15 AUG</strong><span>Assumption of the Blessed Virgin Mary</span></div><div className="feast-date"><strong>26 JUL</strong><span>Saints Anne and Joachim</span></div><div className="feast-date"><strong>25 DEC</strong><span>Christmas</span></div></section>
          <section className="content-card community-card" id="activities"><SectionTitle icon={Star}>Devotions & Associations</SectionTitle><a href="#updates"><Heart size={16}/> Monthly devotions <ChevronRight size={14}/></a><a href="#updates"><Cross size={16}/> Special devotion to St. Anne <ChevronRight size={14}/></a><a href="#updates"><Users size={16}/> Legion of Mary <ChevronRight size={14}/></a><a href="#updates"><Users size={16}/> Youth group & awareness activities <ChevronRight size={14}/></a></section>
        </aside>
      </div>
    </main>
    <footer className="site-footer"><div className="page-width"><div className="footer-main"><a className="brand footer-brand" href="#top"><span className="brand-mark"><Church size={26}/></span><span className="brand-copy"><strong>OUR LADY OF ASSUMPTION CHURCH</strong><small>RAMADURGAM PARISH · EST. 1850</small></span></a><p>A digital home for our parish — sharing faith, heritage, prayer and community.</p><a className="footer-location" href={mapUrl} target="_blank" rel="noreferrer"><Globe2 size={15}/> Find our church <ArrowUpRight size={14}/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Our Lady of Assumption Church, Ramadurgam.</span><a href="#top">Back to top ↑</a></div></div></footer>
  </div>;
}

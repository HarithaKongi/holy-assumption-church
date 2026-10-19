import { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowUpRight, BookOpen, CalendarDays, Check, ChevronLeft,
  ChevronRight, Church, Clock3, Compass, Cross, ExternalLink, Heart,
  History as HistoryIcon, Images, MapPin, Menu, Phone, Search, X
} from 'lucide-react';

const parish = {
  name: 'Our Lady of Assumption Church',
  shortName: 'Our Lady of Assumption',
  place: 'Ramadurgam, Andhra Pradesh',
  diocese: 'Diocese of Kurnool',
  priest: 'Rev. Fr. Gallela Vijay',
  phone: '9398505167',
  established: '1850',
  archive: 'https://ramadurgam.weebly.com/ramadurgam-church.html',
  map: 'https://www.google.com/maps/search/?api=1&query=Our+Lady+of+Assumption+Church+Ramadurgam+Andhra+Pradesh'
};

const photographs = [
  { src: '/church-hill.jpg', alt: 'Our Lady of Assumption Church set among the rocky hills of Ramadurgam', label: 'A place of faith' },
  { src: '/church-tower.jpg', alt: 'Church tower and the surrounding Ramadurgam landscape', label: 'A landmark of Ramadurgam' },
  { src: '/church-view.jpg', alt: 'View of the historic church tower above Ramadurgam', label: 'Faith through generations' }
];

const massTimes = [
  ['Sunday', '07:30 AM – 09:00 AM'],
  ['Monday', '06:30 AM'],
  ['Tuesday', '06:30 AM'],
  ['Wednesday', '06:30 AM'],
  ['Thursday', '06:30 AM'],
  ['Friday', '06:30 AM'],
  ['Saturday', '06:30 AM']
];

const feastDays = [
  { month: 'AUG', day: '15', title: 'The Assumption of the Blessed Virgin Mary', note: 'Main parish feast' },
  { month: 'JUL', day: '26', title: 'Saints Anne and Joachim', note: 'Special devotion' },
  { month: 'DEC', day: '25', title: 'Christmas', note: 'The Nativity of Our Lord' }
];

const timeline = [
  { year: '1780', text: 'Ramadurgam is mentioned in the Goan register with a church dedicated to St. Anne.' },
  { year: '1853', text: 'The historical account records Fr. Francis Xavier Rodrigues travelling from Ramadurgam to Mudgal.' },
  { year: '1861', text: 'The account gives 1861 as the date on the grave of Fr. Francis Xavier Rodrigues.' },
  { year: '1886', text: 'A document in the Bellary Diocesan archives recorded the traditional account of the beginnings of Christianity in Ramadurgam.' },
  { year: '1895–1906', text: 'Fr. C. Thomas, a native of Ramadurgam, served as priest and later retired in the village.' },
  { year: '1930', text: 'St. Paul’s RCM TM School is recorded among the parish institutions.' },
  { year: '1972', text: 'According to the supplied historical account, Fr. Vermeulen built the present church.' },
  { year: '14 Sep 1994', text: 'Bishop Johannes erected the Cross on the hill.' },
  { year: '1996', text: 'Fathima Convent (FC) was established.' }
];

const formerPriests = [
  'Fr. Jos Rajander', 'Fr. Goe Effer', 'Fr. M. Maximini', 'Fr. Ignatius',
  'Fr. A. Doreyswamy', 'Fr. Ga Hermans', 'Fr. R.C. Paul', 'Fr. Gahanas',
  'Fr. C. Thomas', 'Fr. P. Rayanna', 'Fr. S. Keet', 'Fr. Y. Schipper',
  'Fr. Joseph', 'Fr. Staffhorest', 'Fr. Francis', 'Fr. Gerold Seariesbrick',
  'Fr. Bede', 'Worhen', 'Fr. Cerigerneha', 'Fr. A. M. L. Pinto',
  'Fr. Thomas Tharayil', 'Fr. Joannes Chrisostom', 'Fr. Anthony Kuttany',
  'Fr. Y. Papaiah', 'Fr. Sebastian', 'Fr. K. Arulappa'
];

const navigation = [
  { label: 'Home', href: '#top' },
  { label: 'Our Parish', href: '#parish' },
  { label: 'Mass Timings', href: '#mass' },
  { label: 'Our History', href: '#history' },
  { label: 'Feast Days', href: '#feasts' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' }
];

function SectionHeading({ eyebrow, title, description, icon: Icon }) {
  return (
    <div className="section-heading">
      <div className="section-heading-copy">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {Icon && <span className="section-heading-mark" aria-hidden="true"><Icon size={22} strokeWidth={1.6} /></span>}
    </div>
  );
}

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [priestQuery, setPriestQuery] = useState('');
  const [showAllPriests, setShowAllPriests] = useState(false);
  const [showFullHistory, setShowFullHistory] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % photographs.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const visiblePriests = formerPriests.filter((name) =>
    name.toLowerCase().includes(priestQuery.trim().toLowerCase())
  );
  const priestsToShow = showAllPriests || priestQuery ? visiblePriests : visiblePriests.slice(0, 8);

  const goToSlide = (direction) => {
    setActiveSlide((current) => (current + direction + photographs.length) % photographs.length);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="top">
      <div className="utility-bar">
        <div className="container utility-inner">
          <span><MapPin size={13} aria-hidden="true" /> {parish.place}</span>
          <span className="utility-diocese">{parish.diocese}</span>
          <a href={parish.map} target="_blank" rel="noreferrer">Find us <ArrowUpRight size={13} aria-hidden="true" /></a>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-main">
          <a className="brand" href="#top" aria-label="Our Lady of Assumption Church home" onClick={closeMenu}>
            <span className="brand-emblem"><Cross size={27} strokeWidth={1.55} aria-hidden="true" /></span>
            <span className="brand-copy">
              <span className="brand-kicker">A COMMUNITY OF FAITH</span>
              <span className="brand-name">Our Lady of Assumption</span>
              <span className="brand-location">CHURCH · RAMADURGAM</span>
            </span>
          </a>
          <a className="header-contact" href={'tel:' + parish.phone}>
            <span className="header-contact-icon"><Phone size={17} aria-hidden="true" /></span>
            <span><small>Parish office</small><strong>{parish.phone}</strong></span>
          </a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
        <nav id="primary-navigation" className={'primary-navigation' + (menuOpen ? ' is-open' : '')} aria-label="Main navigation">
          <div className="container nav-inner">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
            <a className="nav-visit" href={parish.map} target="_blank" rel="noreferrer" onClick={closeMenu}>Plan a visit <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" aria-label="Welcome to Our Lady of Assumption Church">
          <div className="hero-photo" aria-hidden="true">
            {photographs.map((photo, index) => (
              <img key={photo.src} src={photo.src} alt="" className={index === activeSlide ? 'is-active' : ''} />
            ))}
          </div>
          <div className="hero-shade" />
          <div className="container hero-content">
            <div className="hero-copy">
              <span className="hero-overline"><span /> WELCOME TO OUR PARISH</span>
              <h1>A home for faith.<br /><em>A place to belong.</em></h1>
              <p>Rooted in tradition and united in faith, we welcome you to the spiritual home of Our Lady of Assumption in Ramadurgam.</p>
              <div className="hero-actions">
                <a className="button button-gold" href="#mass">Mass timings <ArrowUpRight size={17} aria-hidden="true" /></a>
                <a className="button button-outline" href="#parish">Discover our parish <ArrowDown size={16} aria-hidden="true" /></a>
              </div>
              <div className="hero-caption"><span className="hero-caption-line" /> {photographs[activeSlide].label}</div>
            </div>
            <div className="hero-controls" aria-label="Church photographs">
              <button type="button" aria-label="Previous photograph" onClick={() => goToSlide(-1)}><ChevronLeft size={19} /></button>
              <span className="slide-count"><strong>0{activeSlide + 1}</strong><span />0{photographs.length}</span>
              <button type="button" aria-label="Next photograph" onClick={() => goToSlide(1)}><ChevronRight size={19} /></button>
            </div>
          </div>
          <a className="hero-scroll" href="#parish"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} aria-hidden="true" /></a>
        </section>

        <section className="intro-section section-pad" id="parish">
          <div className="container intro-grid">
            <div className="intro-copy">
              <span className="eyebrow">FAITH · COMMUNITY · HERITAGE</span>
              <h2>A parish with a story.<br /><em>A community with heart.</em></h2>
              <p>Our Lady of Assumption Church is a place of prayer, worship and community in Ramadurgam, Andhra Pradesh. Generations have gathered here to celebrate their faith and carry its traditions forward.</p>
              <a className="text-link" href={parish.archive} target="_blank" rel="noreferrer">Explore the historical account <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <div className="parish-facts">
              <div className="fact-item"><span className="fact-icon"><HistoryIcon size={19} /></span><div><small>Established</small><strong>{parish.established}</strong><span>Parish heritage</span></div></div>
              <div className="fact-item"><span className="fact-icon"><Heart size={19} /></span><div><small>Patron</small><strong>Our Lady of Assumption</strong><span>Our parish devotion</span></div></div>
              <div className="fact-item"><span className="fact-icon"><CalendarDays size={19} /></span><div><small>Main feast</small><strong>15 August</strong><span>Assumption of Mary</span></div></div>
              <div className="fact-item"><span className="fact-icon"><Church size={19} /></span><div><small>Parish priest</small><strong>{parish.priest}</strong><span>{parish.diocese}</span></div></div>
            </div>
          </div>
        </section>

        <section className="mass-section section-pad" id="mass">
          <div className="container mass-layout">
            <div className="mass-intro">
              <span className="eyebrow">COME AND PRAY WITH US</span>
              <h2>Make time<br /><em>for what matters.</em></h2>
              <p>Join our parish community for Holy Mass. Please contact the parish office to confirm timings before travelling, especially on feast days and special occasions.</p>
              <a className="button button-navy" href={'tel:' + parish.phone}><Phone size={16} aria-hidden="true" /> Confirm timings</a>
              <div className="mass-note"><Clock3 size={16} aria-hidden="true" /><span>Timings may change for parish celebrations.</span></div>
            </div>
            <div className="mass-card">
              <div className="mass-card-header"><div><span className="eyebrow">WEEKLY SCHEDULE</span><h3>Holy Mass timings</h3></div><span className="mass-card-symbol"><Cross size={23} /></span></div>
              <div className="mass-list">
                {massTimes.map(([day, time]) => (
                  <div className={'mass-row' + (day === 'Sunday' ? ' mass-row-sunday' : '')} key={day}>
                    <span className="mass-day">{day === 'Sunday' && <span className="sunday-dot" />}{day}</span>
                    <span className="mass-time">{time}</span>
                  </div>
                ))}
              </div>
              <div className="mass-card-footer"><MapPin size={15} aria-hidden="true" /><span>Our Lady of Assumption Church, Ramadurgam</span></div>
            </div>
          </div>
        </section>

        <section className="history-section section-pad" id="history">
          <div className="container">
            <SectionHeading eyebrow="A LEGACY OF FAITH" title="Remembering our roots" description="Milestones from the historical account of Christianity and parish life in Ramadurgam." icon={BookOpen} />
            <div className="timeline">
              {(showFullHistory ? timeline : timeline.slice(0, 5)).map((item) => (
                <article className="timeline-item" key={item.year}>
                  <div className="timeline-year">{item.year}</div>
                  <span className="timeline-dot" aria-hidden="true" />
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="history-actions">
              <button className="button button-light" type="button" onClick={() => setShowFullHistory(!showFullHistory)}>{showFullHistory ? 'Show fewer milestones' : 'Explore all milestones'} <ChevronRight className={showFullHistory ? 'rotate-icon' : ''} size={16} aria-hidden="true" /></button>
              <a className="text-link" href={parish.archive} target="_blank" rel="noreferrer">Read the source account <ExternalLink size={15} aria-hidden="true" /></a>
            </div>
            <p className="source-note">Historical dates and descriptions are presented from the parish account linked above; some details may require archival verification.</p>
          </div>
        </section>

        <section className="feasts-section section-pad" id="feasts">
          <div className="container">
            <SectionHeading eyebrow="OUR PARISH CALENDAR" title="Days we hold dear" description="Feast days and celebrations that are part of our parish tradition." icon={CalendarDays} />
            <div className="feast-grid">
              {feastDays.map((feast) => (
                <article className="feast-card" key={feast.title}>
                  <div className="feast-date"><span>{feast.month}</span><strong>{feast.day}</strong></div>
                  <div className="feast-copy"><span className="feast-tag">{feast.note}</span><h3>{feast.title}</h3></div>
                  <Cross className="feast-cross" size={19} aria-hidden="true" />
                </article>
              ))}
            </div>
            <p className="source-note">Dates shown are recurring feast dates, not a confirmed schedule of upcoming parish events. Please contact the parish for celebration times.</p>
          </div>
        </section>

        <section className="gallery-section section-pad" id="gallery">
          <div className="container">
            <SectionHeading eyebrow="A GLIMPSE OF OUR HOME" title="The church & its surroundings" description="A few views of Our Lady of Assumption Church and the landscape of Ramadurgam." icon={Images} />
            <div className="gallery-grid">
              {photographs.map((photo, index) => (
                <figure className={'gallery-item gallery-item-' + (index + 1)} key={photo.src}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                  <figcaption><span>0{index + 1}</span>{photo.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="priests-section section-pad" id="parish-priests">
          <div className="container priests-layout">
            <div className="priests-intro">
              <span className="eyebrow">SERVING OUR COMMUNITY</span>
              <h2>Remembering those<br /><em>who have served.</em></h2>
              <p>With gratitude, we preserve the names recorded in the parish's existing list of former priests. Historical spellings are retained as supplied and may need confirmation.</p>
              <div className="priest-count"><span>{formerPriests.length.toString().padStart(2, '0')}</span><small>names in the current list</small></div>
            </div>
            <div className="priests-panel">
              <label className="search-field"><Search size={17} aria-hidden="true" /><span className="sr-only">Search former priests</span><input type="search" value={priestQuery} onChange={(event) => setPriestQuery(event.target.value)} placeholder="Search names..." /></label>
              {priestsToShow.length ? <ol className="priest-list">{priestsToShow.map((name, index) => <li key={name}><span>{String(formerPriests.indexOf(name) + 1).padStart(2, '0')}</span>{name}</li>)}</ol> : <p className="empty-search">No names match “{priestQuery}”. Try another search.</p>}
              {!priestQuery && visiblePriests.length > 8 && <button className="text-link priest-toggle" type="button" onClick={() => setShowAllPriests(!showAllPriests)}>{showAllPriests ? 'Show fewer names' : 'View all former priests'} <ChevronRight size={15} aria-hidden="true" /></button>}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-layout">
            <div><span className="eyebrow">YOU ARE ALWAYS WELCOME</span><h2>Come as you are.<br /><em>There is a place for you.</em></h2><p>For Mass timings, parish information or a visit, please get in touch with the parish office.</p></div>
            <div className="contact-actions">
              <a className="button button-gold" href={parish.map} target="_blank" rel="noreferrer"><Compass size={17} aria-hidden="true" /> Get directions <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a className="contact-phone" href={'tel:' + parish.phone}><Phone size={17} aria-hidden="true" /><span><small>Call the parish office</small><strong>{parish.phone}</strong></span></a>
              <span className="contact-address"><MapPin size={16} aria-hidden="true" />{parish.place}</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#top">
            <span className="brand-emblem"><Cross size={24} strokeWidth={1.5} aria-hidden="true" /></span>
            <span className="brand-copy"><span className="brand-name">Our Lady of Assumption</span><span className="brand-location">CHURCH · RAMADURGAM</span></span>
          </a>
          <p>A community gathered in faith, strengthened by hope, and united in love.</p>
          <a className="footer-top" href="#top">Back to top <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Our Lady of Assumption Church, Ramadurgam</span><span>Faith · Heritage · Community</span></div>
      </footer>
    </div>
  );
}

export default App;

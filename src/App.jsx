import { useState } from 'react';
import {
  Menu, X, Church, Clock3, MapPin, Phone, Users, Images, Cross, ChevronRight,
  ExternalLink, Heart, CalendarDays, History, Navigation, BookOpen, UserRound,
  Landmark, Globe2, Camera, ChevronDown, Home, School, Mail, Sun, Newspaper,
  CalendarCheck, ArrowUpRight, Search, Facebook, Instagram, Calendar, ShieldCheck
} from 'lucide-react';

const parish = {
  name: 'Our Lady of Assumption Church',
  place: 'Ramadurgam, Andhra Pradesh',
  diocese: 'Diocese of Kurnool',
  priest: 'Rev. Fr. Gallela Vijay',
  phone: '9398505167',
  established: '1850',
  image: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QPN3Cqnw6RsFQHW77ewXp2Z9wxb86Yox26QqSGPISACfaEhLeTqFS-EJtV71iWj7V7DEaJvu8x66wXW7XO_L_XIbZGh2NRUzezf85p28zpP4HbhQVRE4EGDmmB3iGwDWzV-pc=w1080-h715-k-no',
  archive: 'https://ramadurgam.weebly.com/ramadurgam-church.html',
  map: 'https://www.google.com/maps/search/?api=1&query=Our+Lady+of+Assumption+Church+Ramadurgam+Andhra+Pradesh'
};

const massTimes = [
  ['Sunday', '7:30 AM – 9:00 AM'],
  ['Monday', '6:30 AM – 7:30 AM'],
  ['Tuesday', '6:30 AM – 7:30 AM'],
  ['Wednesday', '6:30 AM – 7:30 AM'],
  ['Thursday', '6:30 AM – 7:30 AM'],
  ['Friday', '6:30 AM – 7:30 AM'],
  ['Saturday', '6:30 AM – 7:30 AM']
];

const feasts = [
  { month: 'AUG', day: '15', title: 'The Assumption of the Blessed Virgin Mary', note: 'Patronal feast of the parish', icon: Cross },
  { month: 'JUL', day: '26', title: 'Saints Anne and Joachim', note: 'A day of special devotion', icon: Heart },
  { month: 'DEC', day: '25', title: 'The Nativity of Our Lord', note: 'Christmas celebration', icon: StarIcon }
];

function StarIcon({ size = 18 }) { return <Cross size={size} />; }

const formerPriests = [
  'Fr. Jos Rajander', 'Fr. Goe Effer', 'Fr. M. Maximini', 'Fr. Ignatius',
  'Fr. A. Doreyswamy', 'Fr. Ga Hermans', 'Fr. R.C. Paul', 'Fr. Gahanas',
  'Fr. C. Thomas', 'Fr. P. Rayanna', 'Fr. S. Keet', 'Fr. Y. Schipper',
  'Fr. Joseph', 'Fr. Staffhorest', 'Fr. Francis', 'Fr. Gerold Seariesbrick',
  'Fr. Bede', 'Worhen', 'Fr. Cerigerneha', 'Fr. A. M. L. Pinto',
  'Fr. Thomas Tharayil', 'Fr. Joannes Chrisostom', 'Fr. Anthony Kuttany',
  'Fr. Y. Papaiah', 'Fr. Sebastian', 'Fr. K. Arulappa'
];

const history = [
  ['1780', 'Ramadurgam is mentioned in the Goan register with a church dedicated to St. Anne.'],
  ['1853', 'The supplied historical account records Fr. Francis Xavier Rodrigues travelling from Ramadurgam to Mudgal in connection with the Padroado dispute.'],
  ['1861', 'The account gives 1861 as the date on the grave of Fr. Francis Xavier Rodrigues.'],
  ['1886', 'A document in the Bellary Diocesan archives recorded the traditional account of the beginnings of Christianity in Ramadurgam.'],
  ['1895–1906', 'Fr. C. Thomas, a native of Ramadurgam, served as priest. According to local tradition, he later retired here and died in 1922.'],
  ['1930', 'St. Paul’s RCM TM School is recorded among the parish institutions.'],
  ['1972', 'According to the supplied account, Fr. Vermeulen built the present church.'],
  ['14 Sep 1994', 'Bishop Johannes erected the Cross on the hill.'],
  ['1996', 'Fathima Convent (FC) was established.']
];

const navItems = [
  ['Our Parish', '#welcome'], ['Holy Mass', '#mass'], ['History', '#history'],
  ['Administration', '#administration'], ['Feast Days', '#feasts'],
  ['Institutions', '#institutions'], ['Gallery', '#gallery'], ['Contact', '#contact']
];

function SectionTitle({ eyebrow, title, icon: Icon = Cross, link, linkText = 'Explore' }) {
  return <div className="section-title">
    <div className="section-title-icon"><Icon size={19} strokeWidth={1.8} /></div>
    <div className="section-title-copy">{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2></div>
    {link && <a className="section-title-link" href={link}>{linkText}<ArrowUpRight size={15} /></a>}
  </div>;
}

function InfoRow({ icon: Icon, label, value, href }) {
  return <div className="info-row"><span className="info-row-icon"><Icon size={17} /></span><div><span className="info-label">{label}</span>{href ? <a className="info-value" href={href}>{value}</a> : <strong className="info-value">{value}</strong>}</div></div>;
}

function EmptyState({ icon: Icon = CalendarDays, children }) {
  return <div className="empty-state"><span><Icon size={20} /></span><p>{children}</p></div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [historyExpanded, setHistoryExpanded] = useState(false);
  const [priestsExpanded, setPriestsExpanded] = useState(false);
  const [priestSearch, setPriestSearch] = useState('');
  const [noticeVisible, setNoticeVisible] = useState(true);
  const [activeNav, setActiveNav] = useState('#welcome');

  const filteredPriests = formerPriests.filter((name) => name.toLowerCase().includes(priestSearch.trim().toLowerCase()));

  function closeMenu(href) {
    setMenuOpen(false);
    setActiveNav(href);
  }

  return <div className="parish-app" id="top">
    <div className="utility-bar">
      <div className="site-container utility-inner">
        <span><Globe2 size={14} /> A parish community rooted in faith, hope and service</span>
        <span className="utility-diocese"><Church size={14} /> {parish.diocese}</span>
      </div>
    </div>

    <header className="site-header">
      <div className="site-container header-inner">
        <a className="brand" href="#top" onClick={() => closeMenu('#welcome')} aria-label="Our Lady of Assumption Church home">
          <span className="brand-seal"><Church size={28} strokeWidth={1.5} /><span className="seal-cross"><Cross size={10} /></span></span>
          <span className="brand-text"><strong>Our Lady of Assumption</strong><small>ROMAN CATHOLIC CHURCH · RAMADURGAM</small></span>
        </a>
        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={href} className={activeNav === href ? 'nav-active' : ''} href={href} onClick={() => closeMenu(href)}>{label}</a>)}
          <a className="nav-contact-button" href="#contact" onClick={() => closeMenu('#contact')}>Get in touch <ArrowUpRight size={15} /></a>
        </nav>
      </div>
    </header>

    <main>
      <section className="hero" id="welcome">
        <img className="hero-image" src={parish.image} alt="Our Lady of Assumption Church in Ramadurgam" />
        <div className="hero-overlay" />
        <div className="site-container hero-inner">
          <div className="hero-copy">
            <div className="hero-breadcrumb"><Home size={13} /><span>Home</span><ChevronRight size={13} /><span>Our Parish</span></div>
            <span className="hero-kicker"><span /> WELCOME TO OUR PARISH</span>
            <h1>A home of faith.<br /><em>A community of hope.</em></h1>
            <p>Welcome to {parish.name}, Ramadurgam. We gather in prayer, grow together in faith, and serve one another with the love of Christ.</p>
            <div className="hero-actions"><a className="button button-primary" href="#mass">Mass timings <ArrowUpRight size={16} /></a><a className="button button-outline" href="#history">Discover our history <ChevronRight size={16} /></a></div>
          </div>
          <div className="hero-caption"><span className="caption-line" /> {parish.diocese} <span className="caption-dot">•</span> Established {parish.established}</div>
        </div>
      </section>

      <div className="quick-strip">
        <div className="site-container quick-strip-inner">
          <a href="#mass"><span className="quick-icon"><Clock3 size={19} /></span><span><small>HOLY MASS</small><strong>Daily worship</strong></span><ChevronRight size={15} /></a>
          <a href="#administration"><span className="quick-icon"><Users size={19} /></span><span><small>PARISH PRIEST</small><strong>Meet our pastor</strong></span><ChevronRight size={15} /></a>
          <a href="#feasts"><span className="quick-icon"><CalendarDays size={19} /></span><span><small>PARISH FEAST</small><strong>15 August</strong></span><ChevronRight size={15} /></a>
          <a href="#contact"><span className="quick-icon"><MapPin size={19} /></span><span><small>FIND OUR CHURCH</small><strong>Ramadurgam</strong></span><ChevronRight size={15} /></a>
        </div>
      </div>

      <div className="site-container page-layout">
        <div className="main-column">
          {noticeVisible && <div className="notice-banner"><span className="notice-icon"><BellIcon /></span><div><strong>Parish notice</strong><p>Please contact the parish office to confirm special services, feast-day programmes, or changes to the regular Mass schedule.</p></div><button onClick={() => setNoticeVisible(false)} aria-label="Dismiss parish notice"><X size={17} /></button></div>}

          <section className="content-section" id="mass">
            <SectionTitle eyebrow="JOIN US IN PRAYER" title="Holy Mass timings" icon={Clock3} />
            <p className="section-lead">The celebration of the Eucharist is at the heart of our parish life. All are welcome to join us in prayer.</p>
            <div className="mass-table-wrap"><table className="mass-table"><thead><tr><th scope="col">Day</th><th scope="col">Celebration time</th><th scope="col">Schedule</th></tr></thead><tbody>{massTimes.map(([day, time]) => <tr key={day}><td>{day}</td><td><strong>{time}</strong></td><td><span className={day === 'Sunday' ? 'schedule-pill sunday-pill' : 'schedule-pill'}>{day === 'Sunday' ? 'Sunday Mass' : 'Weekday Mass'}</span></td></tr>)}</tbody></table></div>
            <p className="schedule-note"><InfoIcon /> Timings are based on the details provided to the parish website. Please call ahead to confirm special-day schedules.</p>
          </section>

          <section className="content-section history-section" id="history">
            <SectionTitle eyebrow="OUR STORY" title="A parish with a living history" icon={History} link={parish.archive} linkText="Photo archive" />
            <div className="history-feature"><div className="history-photo"><img src={parish.image} alt="Church building at Ramadurgam" /><span><Camera size={14} /> Our church in Ramadurgam</span></div><div className="history-copy"><p>A document in the Bellary Diocesan archives dated 1886 preserves the traditional account of the beginnings of Christianity in Ramadurgam. According to this tradition, Minumula Nagappa and Chinna Nagappa travelled from Adoni to Raichur to buy jowar seeds, where they encountered the Christian faith. They later moved to Ramadurgam and built a church.</p><p>Ramadurgam appears in the Goan register of 1780 with a church dedicated to St. Anne. The parish’s story spans generations of prayer, service, education and community life.</p><button className="text-link" onClick={() => setHistoryExpanded(!historyExpanded)}>{historyExpanded ? 'Show less' : 'Explore the historical timeline'} <ChevronDown className={historyExpanded ? 'chevron-up' : ''} size={15} /></button></div></div>
            {historyExpanded && <div className="timeline">{history.map(([year, description]) => <div className="timeline-item" key={year}><span className="timeline-year">{year}</span><p>{description}</p></div>)}</div>}
            <p className="source-note">Historical notes are based on the account supplied for this parish website. Traditional accounts are identified as such; dates and names should be verified against parish or diocesan records where possible.</p>
          </section>

          <section className="content-section" id="administration">
            <SectionTitle eyebrow="PASTORAL CARE" title="Parish administration" icon={Users} />
            <div className="pastor-card"><div className="pastor-avatar"><Church size={31} strokeWidth={1.5} /></div><div className="pastor-details"><span className="pastor-label">PARISH PRIEST</span><h3>{parish.priest}</h3><p>Serving the faith community of Our Lady of Assumption Church, Ramadurgam.</p><a href={'tel:+91' + parish.phone}>Contact parish priest <ArrowUpRight size={14} /></a></div><div className="pastor-mark"><Cross size={29} /></div></div>
            <div className="fact-grid"><div className="fact-card"><span><Landmark size={18} /></span><small>Diocese</small><strong>{parish.diocese}</strong></div><div className="fact-card"><span><CalendarCheck size={18} /></span><small>Established</small><strong>{parish.established}</strong></div><div className="fact-card"><span><Cross size={18} /></span><small>Patron</small><strong>Our Lady of Assumption</strong></div><div className="fact-card"><span><Users size={18} /></span><small>Assistant priest</small><strong>None currently listed</strong></div></div>
          </section>

          <section className="content-section" id="feasts">
            <SectionTitle eyebrow="PARISH CALENDAR" title="Feast days & celebrations" icon={CalendarDays} />
            <p className="section-lead">We come together throughout the year to celebrate our faith and honour the saints who inspire our community.</p>
            <div className="feast-grid">{feasts.map(({ month, day, title, note, icon: Icon }) => <article className="feast-card" key={title}><div className="feast-date"><span>{month}</span><strong>{day}</strong></div><div className="feast-card-copy"><span className="feast-type"><Icon size={13} /> PARISH CALENDAR</span><h3>{title}</h3><p>{note}</p></div><Calendar size={17} className="feast-watermark" /></article>)}</div>
          </section>

          <section className="content-section" id="institutions">
            <SectionTitle eyebrow="FAITH IN ACTION" title="Education & parish life" icon={School} />
            <div className="institution-grid"><article className="institution-card"><span className="institution-icon"><School size={22} /></span><div><span className="institution-year">EST. 1930</span><h3>St. Paul’s RCM TM School</h3><p>A long-standing educational institution associated with the parish community.</p></div></article><article className="institution-card"><span className="institution-icon"><Landmark size={22} /></span><div><span className="institution-year">EST. 1996</span><h3>Fathima Convent (FC)</h3><p>A religious institution noted in the parish information provided.</p></div></article></div>
            <div className="community-note"><Heart size={19} /><p><strong>A community that cares.</strong> Parish life includes monthly devotions, special devotion to St. Anne, the Legion of Mary, youth activities and social-awareness initiatives. The supplied information also notes a government-sanctioned high school serving Classes 1–10.</p></div>
          </section>

          <section className="content-section" id="priests">
            <SectionTitle eyebrow="WITH GRATITUDE" title="Remembering our former priests" icon={Users} />
            <p className="section-lead">We remember with gratitude the priests named in the historical information shared with the parish.</p>
            <div className="priest-search"><Search size={17} /><input value={priestSearch} onChange={(event) => setPriestSearch(event.target.value)} placeholder="Search names of former priests" aria-label="Search former priests" /><span>{filteredPriests.length} names</span></div>
            <div className="priest-directory">{filteredPriests.slice(0, priestsExpanded ? filteredPriests.length : 8).map((name, index) => <div className="priest-name" key={name + index}><span className="priest-initial"><UserRound size={16} /></span><span>{name}</span></div>)}</div>
            {!priestSearch.trim() && <button className="directory-toggle" onClick={() => setPriestsExpanded(!priestsExpanded)}>{priestsExpanded ? 'Show fewer names' : 'View all former priests'} <ChevronDown className={priestsExpanded ? 'chevron-up' : ''} size={15} /></button>}
            {priestSearch.trim() && filteredPriests.length === 0 && <p className="no-results">No names match your search.</p>}
            <p className="source-note">The list is reproduced from information provided for the website. Spellings and historical appointments should be confirmed with parish records.</p>
          </section>

          <section className="content-section" id="gallery">
            <SectionTitle eyebrow="MOMENTS OF FAITH" title="Parish gallery" icon={Images} link={parish.archive} linkText="Open photo archive" />
            <div className="gallery-grid"><a className="gallery-main" href={parish.archive} target="_blank" rel="noreferrer"><img src={parish.image} alt="Our Lady of Assumption Church, Ramadurgam" /><span><Camera size={16} /> View church photographs <ArrowUpRight size={15} /></span></a><a className="gallery-side" href={parish.archive} target="_blank" rel="noreferrer"><span className="gallery-side-icon"><Images size={30} /></span><strong>Memories of our parish</strong><p>Explore the existing Ramadurgam church photo archive.</p><span className="gallery-visit">Visit photo archive <ArrowUpRight size={14} /></span></a></div>
          </section>

          <section className="content-section" id="news">
            <SectionTitle eyebrow="STAY CONNECTED" title="Parish news & announcements" icon={Newspaper} />
            <EmptyState icon={Newspaper}>Official announcements and upcoming parish programmes will be published here when confirmed by the parish.</EmptyState>
          </section>
        </div>

        <aside className="sidebar">
          <section className="sidebar-card welcome-card"><span className="sidebar-overline">WELCOME</span><h2>Come as you are.<br /><em>Pray with us.</em></h2><p>Our church is a place for worship, fellowship and service. You are warmly welcome to join our parish community.</p><a href="#mass" className="sidebar-button">Plan your visit <ArrowUpRight size={15} /></a></section>
          <section className="sidebar-card"><SectionTitle title="Parish at a glance" icon={Landmark} /><InfoRow icon={Landmark} label="Diocese" value={parish.diocese} /><InfoRow icon={CalendarDays} label="Established" value={parish.established} /><InfoRow icon={UserRound} label="Parish priest" value={parish.priest} /><InfoRow icon={MapPin} label="Location" value="Ramadurgam, Andhra Pradesh" /><InfoRow icon={Phone} label="Telephone" value={parish.phone} href={'tel:+91' + parish.phone} /></section>
          <section className="sidebar-card"><SectionTitle title="Important dates" icon={CalendarDays} /><div className="sidebar-feasts">{feasts.map(({ month, day, title }) => <div className="sidebar-feast" key={title}><span className="sidebar-date"><small>{month}</small><strong>{day}</strong></span><span className="sidebar-feast-name">{title}</span></div>)}</div></section>
          <section className="sidebar-card"><SectionTitle title="Parish devotions" icon={Heart} /><div className="devotion-list"><span><Sun size={16} /> Monthly devotions</span><span><Cross size={16} /> Special devotion to St. Anne</span><span><Users size={16} /> Legion of Mary</span><span><Users size={16} /> Youth group</span><span><Heart size={16} /> Social-awareness activities</span></div></section>
          <section className="sidebar-card contact-card" id="contact"><SectionTitle title="Visit our church" icon={MapPin} /><p className="contact-name">{parish.name}</p><p className="contact-address">{parish.place}</p><a className="contact-action" href={parish.map} target="_blank" rel="noreferrer"><Navigation size={16} /> Get directions <ExternalLink size={13} /></a><a className="contact-action contact-action-light" href={'tel:+91' + parish.phone}><Phone size={16} /> Call {parish.phone}</a><p className="contact-small"><ShieldCheck size={14} /> For current service times, please call before visiting.</p></section>
        </aside>
      </div>
    </main>

    <footer className="site-footer">
      <div className="footer-main site-container"><div className="footer-about"><a className="brand footer-brand" href="#top"><span className="brand-seal"><Church size={27} /><span className="seal-cross"><Cross size={10} /></span></span><span className="brand-text"><strong>Our Lady of Assumption</strong><small>RAMADURGAM · DIOCESE OF KURNOOL</small></span></a><p>A parish community rooted in faith, prayer, education and service. May the love of Christ guide all who visit and worship with us.</p><a className="footer-map-link" href={parish.map} target="_blank" rel="noreferrer"><MapPin size={15} /> Ramadurgam, Andhra Pradesh <ArrowUpRight size={14} /></a></div><div className="footer-links"><h3>Explore</h3><a href="#history">Our history</a><a href="#mass">Holy Mass timings</a><a href="#administration">Parish administration</a><a href="#feasts">Feast days</a><a href="#gallery">Photo gallery</a></div><div className="footer-links"><h3>Parish information</h3><a href="#institutions">Education & parish life</a><a href="#priests">Former priests</a><a href="#news">News & announcements</a><a href="#contact">Contact and directions</a><a href={parish.archive} target="_blank" rel="noreferrer">Historical photo archive <ExternalLink size={12} /></a></div><div className="footer-contact"><h3>Get in touch</h3><p>Have a question about Mass or parish life?</p><a href={'tel:+91' + parish.phone}><Phone size={16} /> +91 {parish.phone}</a><a href={parish.map} target="_blank" rel="noreferrer"><MapPin size={16} /> Find us on the map</a></div></div>
      <div className="footer-bottom"><div className="site-container footer-bottom-inner"><span>© {new Date().getFullYear()} Our Lady of Assumption Church, Ramadurgam.</span><span>Built to serve our parish community with faith and care.</span><a href="#top">Back to top ↑</a></div></div>
    </footer>
  </div>;
}

function BellIcon() { return <CalendarDays size={19} />; }
function InfoIcon() { return <ShieldCheck size={15} />; }
function InfoIconUnused() { return <BookOpen size={15} />; }

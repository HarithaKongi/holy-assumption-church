import { useState } from 'react';
import { Menu, X, Church, Clock3, MapPin, Phone, Users, Images, Cross, ChevronRight, CalendarDays, History, Navigation, BookOpen, UserRound, School, Mail, Newspaper, Search, Home, ChevronDown, ExternalLink, Heart, Info, CalendarCheck, Globe2 } from 'lucide-react';

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
const massTimes = [['Sunday','7:30 AM – 9:00 AM'],['Monday','6:30 AM – 7:30 AM'],['Tuesday','6:30 AM – 7:30 AM'],['Wednesday','6:30 AM – 7:30 AM'],['Thursday','6:30 AM – 7:30 AM'],['Friday','6:30 AM – 7:30 AM'],['Saturday','6:30 AM – 7:30 AM']];
const feasts = [{month:'AUG',day:'15',title:'The Assumption of the Blessed Virgin Mary',note:'Main parish feast'},{month:'JUL',day:'26',title:'Saints Anne and Joachim',note:'Special devotion'},{month:'DEC',day:'25',title:'Christmas',note:'The Nativity of Our Lord'}];
const formerPriests = ['Fr. Jos Rajander','Fr. Goe Effer','Fr. M. Maximini','Fr. Ignatius','Fr. A. Doreyswamy','Fr. Ga Hermans','Fr. R.C. Paul','Fr. Gahanas','Fr. C. Thomas','Fr. P. Rayanna','Fr. S. Keet','Fr. Y. Schipper','Fr. Joseph','Fr. Staffhorest','Fr. Francis','Fr. Gerold Seariesbrick','Fr. Bede','Worhen','Fr. Cerigerneha','Fr. A. M. L. Pinto','Fr. Thomas Tharayil','Fr. Joannes Chrisostom','Fr. Anthony Kuttany','Fr. Y. Papaiah','Fr. Sebastian','Fr. K. Arulappa'];
const history = [
 ['1780','Ramadurgam is mentioned in the Goan register with a church dedicated to St. Anne.'],
 ['1853','The supplied historical account records Fr. Francis Xavier Rodrigues travelling from Ramadurgam to Mudgal.'],
 ['1861','The account gives 1861 as the date on the grave of Fr. Francis Xavier Rodrigues.'],
 ['1886','A document in the Bellary Diocesan archives recorded the traditional account of the beginnings of Christianity in Ramadurgam.'],
 ['1895–1906','Fr. C. Thomas, a native of Ramadurgam, served as priest and later retired in the village.'],
 ['1930','St. Paul’s RCM TM School is recorded among the parish institutions.'],
 ['1972','According to the supplied account, Fr. Vermeulen built the present church.'],
 ['14 Sep 1994','Bishop Johannes erected the Cross on the hill.'],
 ['1996','Fathima Convent (FC) was established.']
];
const primaryLinks = [['History','#history'],['Administration','#administration'],['Feast Days','#feasts'],['Eparchial Priests','#priests'],['Former Priests','#former-priests'],['Kurishupalli','#community'],['Chapels & Grotto','#community'],['Church Undertakings','#community'],['Institutes','#institutes'],['Religious Houses','#institutes']];
const tabs = [['Parish','#parish'],['Holy Mass','#mass'],['Updates','#updates'],['Obituary','#obituary'],['Gallery','#gallery']];
function Section({title, icon:Icon=Church, action, children, id}) {
 return <section className="portal-section" id={id}><div className="portal-section-heading"><span className="portal-heading-icon"><Icon size={18}/></span><h2>{title}</h2>{action&&<a href={action.href}>{action.label} <ChevronRight size={14}/></a>}</div><div className="portal-section-body">{children}</div></section>;
}
function StatsRow() {
 return <div className="quick-stats"><div><span><History size={20}/></span><small>Established</small><strong>1850</strong></div><div><span><Users size={20}/></span><small>Parish community</small><strong>~8,000</strong></div><div><span><Church size={20}/></span><small>Diocese</small><strong>Kurnool</strong></div><div><span><CalendarDays size={20}/></span><small>Main feast</small><strong>15 August</strong></div></div>;
}
function SidebarTitle({children}) { return <h3 className="sidebar-title">{children}</h3>; }
export default function App() {
 const [menuOpen,setMenuOpen]=useState(false);
 const [query,setQuery]=useState('');
 const [allPriests,setAllPriests]=useState(false);
 const [historyOpen,setHistoryOpen]=useState(false);
 const [notice,setNotice]=useState(true);
 const matches=formerPriests.filter(n=>n.toLowerCase().includes(query.toLowerCase()));
 return <div className="portal-app" id="top">
  <div className="portal-topline"><div className="portal-wrap topline-inner"><span><Globe2 size={13}/> Diocese of Kurnool</span><span>Our Lady of Assumption Church · Ramadurgam</span><a href={'tel:+91'+parish.phone}><Phone size={13}/> +91 {parish.phone}</a></div></div>
  <header className="portal-header"><div className="portal-wrap portal-brand-row">
   <a className="portal-brand" href="#top"><span className="portal-emblem"><Church size={30}/><Cross size={13}/></span><span><strong>Our Lady of Assumption Church</strong><small>OUR PARISH · RAMADURGAM</small></span></a>
   <button className="portal-menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen?<X size={22}/>:<Menu size={22}/>}</button>
   <div className="portal-header-actions"><a href="#mass"><Clock3 size={16}/> Holy Mass Timings</a><a href="#contact"><MapPin size={16}/> Find Our Church</a></div>
  </div>
  <nav className={'portal-primary-nav '+(menuOpen?'show':'')}><div className="portal-wrap primary-nav-inner">{primaryLinks.map(([label,href])=><a href={href} key={label} onClick={()=>setMenuOpen(false)}>{label}</a>)}</div></nav>
  <nav className="portal-secondary-nav"><div className="portal-wrap secondary-nav-inner">{tabs.map(([label,href])=><a key={label} href={href}>{label}</a>)}</div></nav>
  </header>
  <main>
   <section className="portal-banner" id="parish"><img src={parish.image} alt="Our Lady of Assumption Church, Ramadurgam"/><div className="portal-banner-shade"/><div className="portal-wrap portal-banner-content"><div className="portal-crumb"><Home size={13}/> Home <ChevronRight size={13}/> Parish</div><p className="portal-banner-kicker">DIOCESE OF KURNOOL</p><h1>{parish.name}</h1><p className="portal-banner-place"><MapPin size={15}/> Ramadurgam, Andhra Pradesh</p><a href="#history" className="portal-banner-button">Know History <ChevronRight size={15}/></a></div></section>
   <div className="portal-wrap portal-page-tabs">{tabs.map(([label,href])=><a key={label} href={href}>{label}</a>)}</div>
   <div className="portal-wrap portal-layout">
    <div className="portal-main">
     {notice&&<div className="portal-notice"><Info size={17}/><div><strong>NOTICE</strong><p>For special services and feast-day programmes, please contact the parish to confirm the latest schedule.</p></div><button onClick={()=>setNotice(false)} aria-label="Close notice"><X size={16}/></button></div>}
     <Section title="Holy Mass Timing" icon={Clock3} id="mass" action={{href:'#contact',label:'More Details'}}><table className="portal-table"><thead><tr><th>Day</th><th>Timing</th></tr></thead><tbody>{massTimes.map(([day,time])=><tr key={day}><td>{day}</td><td>{time}</td></tr>)}</tbody></table></Section>
     <Section title="Quick Stats" icon={Users}><StatsRow/><div className="parish-facts"><div><span>Parish Priest</span><strong>{parish.priest}</strong></div><div><span>Address</span><strong>{parish.place}</strong></div><div><span>Telephone</span><strong><a href={'tel:+91'+parish.phone}>{parish.phone}</a></strong></div><div><span>Patron</span><strong>Our Lady of Assumption</strong></div></div></Section>
     <Section title="Liturgical Bible Reading" icon={BookOpen}><div className="reading-panel"><div className="reading-symbol"><BookOpen size={25}/></div><div><strong>Daily Scripture Reading</strong><p>Prepare for prayer and reflection with the daily readings of the Catholic Church.</p><span>For the current liturgical readings, please consult the official Church resources.</span></div><a href="https://www.vaticannews.va/en/word-of-the-day.html" target="_blank" rel="noreferrer">Readings <ExternalLink size={13}/></a></div></Section>
     <Section title="Parish Administration" icon={Users} id="administration"><div className="admin-profile"><div className="admin-photo"><Church size={35}/></div><div><small>PARISH PRIEST</small><h3>{parish.priest}</h3><p>Vicar · {parish.name}</p><a href={'tel:+91'+parish.phone}><Phone size={14}/> Contact parish</a></div></div><div className="admin-detail-grid"><div><span>Diocese</span><strong>{parish.diocese}</strong></div><div><span>Established</span><strong>{parish.established}</strong></div><div><span>Assistant Priest</span><strong>Not listed</strong></div><div><span>Parish Address</span><strong>{parish.place}</strong></div></div></Section>
     <Section title="Parish History" icon={History} id="history" action={{href:parish.archive,label:'Photo Archive'}}><div className="history-intro"><img src={parish.image} alt="Church at Ramadurgam"/><div><p>A document in the Bellary Diocesan archives dated 1886 preserves the traditional account of the beginnings of Christianity in Ramadurgam. According to this tradition, Minumula Nagappa and Chinna Nagappa travelled from Adoni to Raichur to buy jowar seeds, where they encountered the Christian faith. They later moved to Ramadurgam and built a church.</p><p>Ramadurgam appears in the Goan register of 1780 with a church dedicated to St. Anne. The parish history continues through generations of prayer, education and service.</p><button className="portal-inline-button" onClick={()=>setHistoryOpen(!historyOpen)}>{historyOpen?'Hide timeline':'View historical timeline'} <ChevronDown size={14}/></button></div></div>{historyOpen&&<div className="portal-timeline">{history.map(([year,desc])=><div key={year}><strong>{year}</strong><p>{desc}</p></div>)}</div>}</Section>
     <Section title="News & Updates" icon={Newspaper} id="updates" action={{href:'#updates',label:'More Updates'}}><div className="portal-news-tabs"><button className="selected">All</button><button>Parish</button><button>Diocese</button></div><div className="portal-empty"><Newspaper size={23}/><span><strong>Parish updates</strong><p>Official announcements and upcoming programmes will appear here when provided by the parish.</p></span></div></Section>
     <Section title="Former Priests" icon={Users} id="former-priests" action={{href:'#former-priests',label:'View All'}}><div className="portal-search"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search former priests"/></div><div className="portal-priest-list">{matches.slice(0,allPriests?matches.length:8).map((n,i)=><div key={n+i}><UserRound size={15}/>{n}</div>)}</div>{!query&&<button className="portal-inline-button" onClick={()=>setAllPriests(!allPriests)}>{allPriests?'Show fewer':'View all former priests'} <ChevronDown size={14}/></button>}{query&&matches.length===0&&<p>No matching names found.</p>}</Section>
     <Section title="Feast Days & Important Days" icon={CalendarDays} id="feasts"><div className="portal-feast-list">{feasts.map(f=><div className="portal-feast" key={f.title}><div><small>{f.month}</small><strong>{f.day}</strong></div><span><b>{f.title}</b><small>{f.note}</small></span></div>)}</div></Section>
     <Section title="Parish Institutions" icon={School} id="institutes"><div className="portal-institutions"><article><School size={23}/><div><strong>St. Paul’s RCM TM School</strong><small>Established 1930</small><p>Educational service associated with the parish.</p></div></article><article><Church size={23}/><div><strong>Fathima Convent (FC)</strong><small>Established 1996</small><p>A religious institution serving the local community.</p></div></article></div></Section>
     <Section title="Parish Obituary" icon={Heart} id="obituary"><div className="portal-empty"><Heart size={23}/><span><strong>In loving remembrance</strong><p>Parish obituary notices will be shared here when details are provided by the parish.</p></span></div></Section>
     <Section title="Parish Gallery" icon={Images} id="gallery" action={{href:parish.archive,label:'More'}}><a className="portal-gallery" href={parish.archive} target="_blank" rel="noreferrer"><img src={parish.image} alt="Our Lady of Assumption Church"/><span><Images size={17}/> Church photographs <ChevronRight size={15}/></span></a></Section>
    </div>
    <aside className="portal-sidebar">
     <div className="portal-side-card portal-side-parish"><SidebarTitle>Parish Details</SidebarTitle><div className="portal-side-church"><img src={parish.image} alt="Church"/><strong>{parish.name}</strong><small>{parish.diocese}</small></div><div className="portal-side-row"><span>Established</span><strong>{parish.established}</strong></div><div className="portal-side-row"><span>Patron</span><strong>Our Lady of Assumption</strong></div><div className="portal-side-row"><span>Parish Priest</span><strong>{parish.priest}</strong></div><div className="portal-side-row"><span>Address</span><strong>{parish.place}</strong></div><div className="portal-side-row"><span>Telephone</span><strong><a href={'tel:+91'+parish.phone}>{parish.phone}</a></strong></div><a className="portal-side-more" href="#contact">Contact Parish <ChevronRight size={14}/></a></div>
     <div className="portal-side-card"><SidebarTitle>Upcoming Feast Days</SidebarTitle>{feasts.map(f=><div className="portal-side-feast" key={f.title}><span><small>{f.month}</small><b>{f.day}</b></span><div><strong>{f.title}</strong><small>{f.note}</small></div></div>)}</div>
     <div className="portal-side-card"><SidebarTitle>Parish Activities</SidebarTitle><div className="portal-side-links"><a href="#community"><ChevronRight size={14}/> Monthly devotions</a><a href="#community"><ChevronRight size={14}/> St. Anne devotion</a><a href="#community"><ChevronRight size={14}/> Legion of Mary</a><a href="#community"><ChevronRight size={14}/> Youth group</a><a href="#community"><ChevronRight size={14}/> Social awareness activities</a></div></div>
     <div className="portal-side-card" id="community"><SidebarTitle>Community & Devotions</SidebarTitle><p className="portal-side-copy">Our parish community gathers for prayer, devotion, youth activities and social-awareness programmes. All are welcome to participate.</p><a className="portal-side-more" href="#institutes">Parish institutions <ChevronRight size={14}/></a></div>
     <div className="portal-side-card" id="contact"><SidebarTitle>Contact Parish</SidebarTitle><div className="portal-contact-row"><MapPin size={17}/><span><small>Address</small><strong>{parish.place}</strong></span></div><div className="portal-contact-row"><Phone size={17}/><span><small>Telephone</small><a href={'tel:+91'+parish.phone}>{parish.phone}</a></span></div><a className="portal-map-button" href={parish.map} target="_blank" rel="noreferrer"><Navigation size={15}/> Get directions</a></div>
    </aside>
   </div>
  </main>
  <footer className="portal-footer"><div className="portal-wrap footer-columns"><div><a className="portal-brand footer-brand" href="#top"><span className="portal-emblem"><Church size={27}/><Cross size={12}/></span><span><strong>Our Lady of Assumption Church</strong><small>RAMADURGAM · DIOCESE OF KURNOOL</small></span></a><p>A parish community rooted in faith, prayer, education and service.</p></div><div><h3>Quick Links</h3><a href="#history">Parish History</a><a href="#mass">Holy Mass</a><a href="#administration">Administration</a><a href="#feasts">Feast Days</a></div><div><h3>Parish Information</h3><a href="#former-priests">Former Priests</a><a href="#institutes">Institutions</a><a href="#gallery">Gallery</a><a href="#contact">Contact Parish</a></div><div><h3>Get in Touch</h3><p>{parish.place}</p><a href={'tel:+91'+parish.phone}><Phone size={14}/> +91 {parish.phone}</a><a href={parish.map} target="_blank" rel="noreferrer"><MapPin size={14}/> Find us on the map</a></div></div><div className="portal-footer-bottom"><div className="portal-wrap"><span>© {new Date().getFullYear()} Our Lady of Assumption Church, Ramadurgam</span><a href="#top">Back to top ↑</a></div></div></footer>
 </div>;
}

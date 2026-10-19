import { useEffect, useState } from 'react';
import { Menu, X, Church, Clock3, MapPin, Phone, Users, Images, Cross, ChevronRight, CalendarDays, History, Navigation, BookOpen, UserRound, School, Mail, Newspaper, Search, Home, Heart, Info, Globe2, CalendarCheck } from 'lucide-react';

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
const heroSlides = [
 { image: '/history/1654392.jpg', alt: 'Historic church and surrounding landscape of Ramadurgam' },
 { image: '/history/1995543.jpg', alt: 'Historical photograph from the Ramadurgam parish archive' },
 { image: '/history/2091324.jpg', alt: 'Historical parish photograph from Ramadurgam' },
 { image: '/history/2451125.jpg', alt: 'Historic view from the Our Lady of Assumption Church parish archive' }
];
const massTimes = [['Sunday','07:30 AM – 09:00 AM'],['Monday','06:30 AM'],['Tuesday','06:30 AM'],['Wednesday','06:30 AM'],['Thursday','06:30 AM'],['Friday','06:30 AM'],['Saturday','06:30 AM']];
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
function Section({title, icon: Icon=Church, action, children, id, className=''}) {
 return <section className={'site-section '+className} id={id}><div className="section-heading"><span className="section-icon"><Icon size={19}/></span><h2>{title}</h2>{action&&<a href={action.href}>{action.label}<ChevronRight size={15}/></a>}</div><div className="section-body">{children}</div></section>;
}
function App() {
 const [menuOpen,setMenuOpen]=useState(false);
 const [activeSlide,setActiveSlide]=useState(0);
 useEffect(()=>{ const timer=window.setInterval(()=>setActiveSlide(current=>(current+1)%heroSlides.length),4500); return ()=>window.clearInterval(timer); },[]);
 const [query,setQuery]=useState('');
 const [allPriests,setAllPriests]=useState(false);
 const [historyOpen,setHistoryOpen]=useState(false);
 const [failedHistoryImages,setFailedHistoryImages]=useState([]);
 const historyImageNames=["1654392.jpg","1995543.jpg","2091324.jpg","2451125.jpg","2496710_orig.jpg","255316.jpg","311938.jpg","3352018.jpg","4166613.jpg","4694016.jpg","4863510.jpg","4982072.jpg","5205945_orig.jpg","5400008.jpg","5427702.jpg","5525601.jpg","6043522.jpg","6426274.jpg","6793393_orig.jpg","7238596.jpg","8570747.jpg","8994577.jpg","9456453.jpg","9851668.jpg"];
 const [notice,setNotice]=useState(true);
 const [newsFilter,setNewsFilter]=useState('All');
 const matches=formerPriests.filter(n=>n.toLowerCase().includes(query.toLowerCase()));
 const links=[['Home','#top'],['Parish','#parish'],['Parish Timings','#mass'],['Weekly Updates','#updates'],['Achievements','#feasts'],['Obituary','#obituary'],['Gallery','#gallery']];
 return <div className="church-site" id="top">
  <div className="utility-bar"><div className="site-wrap utility-inner"><span><Globe2 size={14}/> {parish.diocese}</span><span>{parish.place}</span><a href={'tel:+91'+parish.phone}><Phone size={14}/> +91 {parish.phone}</a></div></div>
  <header className="site-header">
   <div className="site-wrap brand-row">
    <a className="site-brand" href="#top"><span className="brand-mark"><Church size={34}/><Cross size={14}/></span><span><strong>{parish.name}</strong><small>{parish.place}</small></span></a>
    <div className="diocese-mark"><Church size={30}/><span><b>Diocese of</b><strong>{parish.diocese}</strong></span></div>
    <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen?<X/>:<Menu/>}</button>
   </div>
   <nav className={'main-nav '+(menuOpen?'nav-open':'')}><div className="site-wrap nav-inner">{links.map(([label,href])=><a key={label} href={href} onClick={()=>setMenuOpen(false)}>{label}</a>)}<a className="nav-contact" href="#contact"><UserRound size={17}/> Contact</a></div></nav>
  </header>
  <main>
   <section className="hero-section" id="parish"><div className="site-wrap hero-grid"><div className="hero-photo"><img key={heroSlides[activeSlide].image} src={heroSlides[activeSlide].image} alt={heroSlides[activeSlide].alt}/><button type="button" className="photo-next" onClick={()=>setActiveSlide(current=>(current+1)%heroSlides.length)} aria-label="Next church photo"><ChevronRight size={26}/></button><span className="photo-dots">{heroSlides.map((slide,index)=><button key={slide.image} type="button" className={index===activeSlide?"active":""} onClick={()=>setActiveSlide(index)} aria-label={`Show photo ${index+1}`}/>)}</span></div><div className="hero-copy"><p className="eyebrow">WELCOME TO OUR PARISH</p><h1>{parish.name}</h1><p className="hero-location"><MapPin size={17}/>{parish.place}</p><p className="hero-description">A parish community rooted in faith, prayer, education and service.</p><a className="gold-button" href="#history">Know History <ChevronRight size={16}/></a></div></div></section>
   <div className="notice-strip"><div className="site-wrap notice-inner"><span className="notice-label">NOTICE</span><p>For special services and feast-day programmes, please contact the parish to confirm the latest schedule.</p><a href="#contact">Contact parish <ChevronRight size={15}/></a></div></div>
   <div className="site-wrap page-content">
    <div className="top-content-grid">
     <Section title="Holy Mass Timing" icon={Clock3} id="mass" className="mass-section" action={{href:'#contact',label:'More Details'}}><table className="mass-table"><thead><tr><th>Day</th><th>Timing</th></tr></thead><tbody>{massTimes.map(([day,time])=><tr key={day}><td>{day}</td><td>{time}</td></tr>)}</tbody></table></Section>
     <Section title="Quick Stats" icon={CalendarCheck} className="stats-section"><div className="stats-grid"><div><Church/><span><b>Parish</b><small>{parish.place}</small></span></div><div><CalendarDays/><span><b>Established</b><small>{parish.established}</small></span></div><div><Cross/><span><b>Patron</b><small>Our Lady of Assumption</small></span></div><div><Users/><span><b>Parish Priest</b><small>{parish.priest}</small></span></div><div><MapPin/><span><b>Address</b><small>{parish.place}</small></span></div><div><Phone/><span><b>Telephone</b><small>{parish.phone}</small></span></div><div><Mail/><span><b>Diocese</b><small>{parish.diocese}</small></span></div><div><CalendarCheck/><span><b>Main Feast</b><small>15 August</small></span></div></div></Section>
    </div>
    <Section title="Liturgical Bible Reading" icon={BookOpen} id="readings" className="reading-section"><div className="reading-feature"><div className="reading-tabs"><a className="active" href="https://www.vaticannews.va/en/word-of-the-day.html" target="_blank" rel="noreferrer">English</a><a href="https://www.vaticannews.va/" target="_blank" rel="noreferrer">Daily Word</a><span>{new Date().toLocaleDateString('en-IN')}</span></div><div className="reading-card"><div className="reading-card-head"><Cross size={25}/><span><strong>Daily Scripture Reading</strong><small>Prayer, reflection and the Word of God</small></span></div><div className="reading-card-body"><p>Explore the daily readings and reflect on the message of the Gospel.</p><a className="gold-button" href="https://www.vaticannews.va/en/word-of-the-day.html" target="_blank" rel="noreferrer">Read Today's Word <ChevronRight size={15}/></a></div></div></div></Section>
    <Section title="Parish Administration" icon={Users} id="administration" className="administration-section"><div className="admin-card"><div className="admin-portrait"><img src={parish.image} alt="Our parish church"/><span>PARISH</span></div><div className="admin-info"><h3>{parish.priest}</h3><small className="role-label">Parish Priest</small><p>{parish.name}</p><div className="admin-facts"><div><Church/><span><b>Diocese</b><small>{parish.diocese}</small></span></div><div><CalendarDays/><span><b>Established</b><small>{parish.established}</small></span></div><div><MapPin/><span><b>Address</b><small>{parish.place}</small></span></div><div><Phone/><span><b>Phone</b><small>{parish.phone}</small></span></div></div><a className="gold-button" href={'tel:+91'+parish.phone}>Contact Parish <ChevronRight size={15}/></a></div></div></Section>
    <Section title="Parish History" icon={History} id="history" action={{href:parish.archive,label:'Photo Archive'}}><div className="history-feature"><div className="history-intro"><p>A document in the Bellary Diocesan archives dated 1886 preserves the traditional account of the beginnings of Christianity in Ramadurgam. According to this tradition, Minumula Nagappa and Chinna Nagappa travelled from Adoni to Raichur to buy jowar seeds, where they encountered the Christian faith. They later moved to Ramadurgam and built a church.</p><p>Ramadurgam appears in the Goan register of 1780 with a church dedicated to St. Anne. These archival photographs preserve scenes of local life, community work and the historical setting connected with the parish’s past.</p><button className="text-button" onClick={()=>setHistoryOpen(!historyOpen)}>{historyOpen?'Hide timeline':'View historical timeline'} <ChevronRight size={15}/></button></div></div><div className="history-photo-grid">{historyImageNames.map((name,index)=>failedHistoryImages.includes(name)?null:<figure key={name}><img src={`/history/${name}`} alt={`Historical photograph of Ramadurgam, image ${index+1}`} loading="lazy" onError={()=>setFailedHistoryImages(current=>current.includes(name)?current:[...current,name])}/><figcaption>Historical archive · {index+1}</figcaption></figure>)}{failedHistoryImages.length===historyImageNames.length&&<p className="history-empty">No history photographs are available yet. Upload your image files into the <code>public/history/</code> folder on GitHub, keeping the filenames expected by the gallery.</p>}</div></Section>
    <Section title="News & Updates" icon={Newspaper} id="updates" action={{href:'#updates',label:'More Updates'}} className="news-section"><div className="news-filters">{['All','Parish','Diocese'].map(f=><button key={f} className={newsFilter===f?'selected':''} onClick={()=>setNewsFilter(f)}>{f}</button>)}</div><div className="news-grid"><article className="news-card"><img src={parish.image} alt="Parish church"/><div className="news-card-copy"><time><b>15</b><span>AUG</span></time><div><small>{newsFilter==='All'?'PARISH':newsFilter.toUpperCase()}</small><h3>Feast of the Assumption of the Blessed Virgin Mary</h3><p>Join the parish community for prayer and celebration.</p><a href="#feasts">Learn more <ChevronRight size={14}/></a></div></div></article><article className="news-card"><img src={parish.image} alt="Church and parish community"/><div className="news-card-copy"><time><b>26</b><span>JUL</span></time><div><small>{newsFilter==='All'?'COMMUNITY':newsFilter.toUpperCase()}</small><h3>Faith, fellowship and parish life</h3><p>Updates will be published when confirmed by the parish.</p><a href="#community">Explore parish life <ChevronRight size={14}/></a></div></div></article><article className="news-card"><img src={parish.image} alt="Church grounds"/><div className="news-card-copy"><time><b>25</b><span>DEC</span></time><div><small>{newsFilter==='All'?'LITURGICAL':newsFilter.toUpperCase()}</small><h3>Christmas celebration</h3><p>Check with the parish for service times and programmes.</p><a href="#mass">Mass timings <ChevronRight size={14}/></a></div></div></article></div></Section>
    <div className="feature-links" id="institutes"><article><div className="feature-icon"><School/></div><div><h3>Catechesis & Education</h3><p>Faith formation and learning for children and adults.</p><a href="#institutes">Parish institutions <ChevronRight size={14}/></a></div></article><article><div className="feature-icon"><Heart/></div><div><h3>Community & Service</h3><p>Faith, fellowship and service to the local community.</p><a href="#community">Explore community <ChevronRight size={14}/></a></div></article></div>
    <div className="lower-grid">
     <Section title="Eparchial Priests" icon={Users} id="priests"><div className="empty-state"><Users/><p>Priest listings will be added when verified details are available.</p></div></Section>
     <Section title="Former Priests" icon={History} id="former-priests"><div className="priest-search"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search former priests"/></div><div className="former-priest-list">{matches.slice(0,allPriests?matches.length:6).map((n,i)=><div key={n+i}><UserRound size={15}/>{n}</div>)}</div>{!query&&<button className="text-button" onClick={()=>setAllPriests(!allPriests)}>{allPriests?'Show fewer':'View all former priests'} <ChevronRight size={15}/></button>}{query&&matches.length===0&&<p>No matching names found.</p>}</Section>
     <Section title="Feast Days & Important Days" icon={CalendarDays} id="feasts"><div className="feast-list">{feasts.map(f=><div className="feast-row" key={f.title}><span><small>{f.month}</small><b>{f.day}</b></span><div><strong>{f.title}</strong><small>{f.note}</small></div></div>)}</div></Section>
     <Section title="Parish Obituary" icon={Heart} id="obituary"><div className="empty-state"><Heart/><p>Obituary notices will be shared here when details are provided by the parish.</p></div></Section>
     <Section title="Parish Gallery" icon={Images} id="gallery" action={{href:parish.archive,label:'View Gallery'}}><a className="gallery-link" href={parish.archive} target="_blank" rel="noreferrer"><img src={parish.image} alt="Our Lady of Assumption Church"/><span>Church photographs <ChevronRight size={15}/></span></a></Section>
     <Section title="Contact Parish" icon={MapPin} id="contact"><div className="contact-details"><p><MapPin/> {parish.place}</p><p><Phone/> <a href={'tel:+91'+parish.phone}>{parish.phone}</a></p><p><Mail/> {parish.diocese}</p><a className="gold-button" href={parish.map} target="_blank" rel="noreferrer"><Navigation size={15}/> Get Directions</a></div></Section>
    </div>
   </div>
  </main>
  <footer className="site-footer"><div className="site-wrap footer-grid"><div className="footer-about"><a className="site-brand footer-brand" href="#top"><span className="brand-mark"><Church size={30}/><Cross size={13}/></span><span><strong>{parish.name}</strong><small>{parish.place}</small></span></a><p>A parish community rooted in faith, prayer, education and service.</p></div><div><h3>Quick Links</h3><a href="#history">Parish History</a><a href="#mass">Holy Mass Timings</a><a href="#administration">Administration</a><a href="#feasts">Feast Days</a></div><div><h3>Parish Community</h3><a href="#updates">News & Updates</a><a href="#institutes">Institutions</a><a href="#gallery">Gallery</a><a href="#obituary">Obituary</a></div><div><h3>Contact</h3><p>{parish.place}</p><a href={'tel:+91'+parish.phone}><Phone size={14}/> +91 {parish.phone}</a><a href={parish.map} target="_blank" rel="noreferrer"><MapPin size={14}/> Find us on the map</a></div></div><div className="footer-bottom"><div className="site-wrap"><span>© {new Date().getFullYear()} {parish.name}, Ramadurgam</span><a href="#top">Back to top ↑</a></div></div></footer>
 </div>;
}
export default App;

/* ===== Eventstage shared data =====
   Edit events and venues here once - every page reads from this file.
   Image paths are relative to the page folders (home/, events/, ...), so they start with ../images/ */

var EVENTS = [
 
  { id: "lany-soft-cebu-nov6", title: "SOFT BY LANY THE WORLD TOUR - CEBU", date: "2026-11-06", venue: "SM Seaside Cebu Arena", genres: ["Pop", "Indie"], img: "../images/lany.jpg", color: "#1b2a3a", link: "https://smtickets.com/events/view/17219" },
  { id: "lany-soft-nov7", title: "SOFT BY LANY THE WORLD TOUR", date: "2026-11-07", venue: "Philippine Arena", genres: ["Pop", "Indie"], img: "../images/lany.jpg", color: "#1b2a3a", link: "https://smtickets.com/events/view/17219" },
  { id: "alx-alamat", title: "ALX ALAMAT: THE LEGENDARY EXPERIENCE", date: "2026-11-08", venue: "New Frontier Theater", genres: ["P-Pop", "Pop"], img: "../images/alamat.jpg", color: "#1b2a3a", link: "#" },
  { id: "lany-soft-nov8", title: "SOFT BY LANY THE WORLD TOUR", date: "2026-11-08", venue: "Philippine Arena", genres: ["Pop", "Indie"], img: "../images/lany.jpg", color: "#1b2a3a", link: "#" },
  { id: "5sos-nov11", title: "5 SECONDS OF SUMMER: EVERYONE'S A STAR! WORLD TOUR ASIA 2026", date: "2026-11-11", venue: "SM Mall of Asia Arena", genres: ["Pop", "Rock"], img: "../images/5sos-L.png", color: "#1b2a3a", link: "#" },
  { id: "another-level-nov11", title: "ANOTHER LEVEL: RNB CONCERT PARTY LIVE IN MANILA", date: "2026-11-11", venue: "New Frontier Theater", genres: ["R&B"], img: "../images/anotherlevel.jpg", color: "#1b2a3a", link: "#" },
  { id: "5sos-nov12", title: "5 SECONDS OF SUMMER: EVERYONE'S A STAR! WORLD TOUR ASIA 2026", date: "2026-11-12", venue: "SM Mall of Asia Arena", genres: ["Pop", "Rock"], img: "../images/5sos-L.png", color: "#1b2a3a", link: "#" },
  { id: "another-level-nov12", title: "ANOTHER LEVEL: RNB CONCERT PARTY LIVE IN MANILA", date: "2026-11-12", venue: "New Frontier Theater", genres: ["R&B"], img: "../images/anotherlevel.jpg", color: "#1b2a3a", link: "#" },
  { id: "lany-soft-cebu-nov12", title: "SOFT BY LANY THE WORLD TOUR - CEBU", date: "2026-11-12", venue: "SM Seaside Cebu Arena", genres: ["Pop", "Indie"], img: "../images/lany.jpg", color: "#1b2a3a", link: "#" },
  { id: "vxon", title: "VXON: P-POP BEYOND THE STAGE", date: "2026-11-14", venue: "Gateway Cineplex 18", genres: ["P-Pop"], img: "../images/vxon.jpg", color: "#1b2a3a", link: "#" },
  { id: "my-chemical-romance", title: "MY CHEMICAL ROMANCE SOUTH EAST ASIA 2026 TOUR IN BULACAN", date: "2026-11-14", venue: "Philippine Arena", genres: ["Rock"], img: "../images/mychemical.jpg", color: "#1b2a3a", link: "#" },
  { id: "jona-chapters", title: "JONA CHAPTERS", date: "2026-11-14", venue: "New Frontier Theater", genres: ["OPM"], img: "../images/jonachapter.jpg", color: "#1b2a3a", link: "#" },
  { id: "asap-xp-isabela-noon", title: "ASAP XP ISABELA", date: "2026-11-15", venue: "Santiago Sports Arena", genres: ["OPM", "Pop"], img: "../images/asap.jpg", color: "#1b2a3a", link: "#" },
  { id: "asap-xp-isabela-night", title: "ASAP XP ISABELA", date: "2026-11-15", venue: "Santiago Sports Arena", genres: ["OPM", "Pop"], img: "../images/asap.jpg", color: "#1b2a3a", link: "#" },
  { id: "wave-to-earth", title: "WAVE TO EARTH: THE PIECE TOUR", date: "2026-11-15", venue: "SM Mall of Asia Arena", genres: ["Indie", "Rock"], img: "../images/wavetoearth.jpg", color: "#1b2a3a", link: "#" },
  { id: "yeng-constantino-nov17", title: "YENG CONSTANTINO: BIYAHENG BENTE 20TH ANNIVERSARY CONCERT", date: "2026-11-17", venue: "Smart Araneta Coliseum", genres: ["OPM"], img: "../images/yeng.jpg", color: "#1b2a3a", link: "#" },
  { id: "yeng-constantino-nov18", title: "YENG CONSTANTINO: BIYAHENG BENTE 20TH ANNIVERSARY CONCERT", date: "2026-11-18", venue: "Smart Araneta Coliseum", genres: ["OPM"], img: "../images/yeng.jpg", color: "#1b2a3a", link: "#" },
  { id: "mico", title: "MICO: RUNNING FROM A FEELING", date: "2026-11-21", venue: "New Frontier Theater", genres: ["Indie", "Pop"], img: "../images/mico.jpg", color: "#1b2a3a", link: "#" },
  { id: "chinkee-tan-nov22", title: "CHINKEE TAN, GINO PADILLA, BROD PETE, & SERENITY BAND: LIFE UPGRADE", date: "2026-11-22", venue: "New Frontier Theater", genres: ["Pop", "OPM"], img: "../images/chin.png", color: "#1b2a3a", link: "#" },
  { id: "simple-plan", title: "SIMPLE PLAN: THE BIGGER THAN YOU THINK! TOUR", date: "2026-11-25", venue: "Smart Araneta Coliseum", genres: ["Rock"], img: "../images/simpleplan.png", color: "#1b2a3a", link: "#" },
  { id: "malcolm-todd", title: "MALCOLM TODD: DO THAT AGAIN TOUR", date: "2026-11-27", venue: "New Frontier Theater", genres: ["Pop", "Indie"], img: "../images/malcolm.jpg", color: "#1b2a3a", link: "#" },
  { id: "wilbert-ross-nov28", title: "WILBERT ROSS: WRTEN BY WILBERT ROSS 10TH ANNIVERSARY CONCERT SOUTH TOUR", date: "2026-11-28", venue: "City of Santa Rosa Multi-Purpose Complex", genres: ["OPM"], img: "../images/wilberto-poster.jpg", color: "#1b2a3a", link: "#" },
  { id: "harana-festival", title: "HARANA ACOUSTIC MUSIC FESTIVAL 2026", date: "2026-11-28", venue: "Filinvest City Event Grounds", genres: ["OPM", "Acoustic"], img: "../images/harana.jpg", color: "#1b2a3a", link: "#" },
  { id: "marielle-montellano-nov29", title: "MARIELLE MONTELLANO: MOST REQUESTED", date: "2026-11-29", venue: "New Frontier Theater", genres: ["Pop", "OPM"], img: "../images/marielle-poster.png", color: "#1b2a3a", link: "#" },
  { id: "5sos-nov29", title: "5 SECONDS OF SUMMER: EVERYONE'S A STAR! WORLD TOUR ASIA 2026", date: "2026-11-29", venue: "SM Mall of Asia Arena", genres: ["Pop", "Rock"], img: "../images/5sos-L.png", color: "#1b2a3a", link: "#" },
  { id: "christmas-special-dec01", title: "THE 2026 CHRISTMAS SPECIAL: SHARE THE BLESSING NGAYONG PASKO", date: "2026-12-01", venue: "Smart Araneta Coliseum", genres: ["Pop", "OPM"], img: "../images/pasko.jpg", color: "#1b2a3a", link: "#" },
  { id: "cup-of-joe-dec03", title: "CUP OF JOE: SYMPHONY", date: "2026-12-03", venue: "Smart Araneta Coliseum", genres: ["Indie", "Pop"], img: "../images/baso-ni-joe.jpg", color: "#1b2a3a", link: "#" },
  { id: "cup-of-joe-dec04", title: "CUP OF JOE: SYMPHONY", date: "2026-12-04", venue: "Smart Araneta Coliseum", genres: ["Indie", "Pop"], img: "../images/baso-ni-joe.jpg", color: "#1b2a3a", link: "#" },
  { id: "pureflow", title: "2026 LE SSERAFIM TOUR PUREFLOW IN MANILA", date: "2026-12-05", venue: "SM Mall of Asia Arena", genres: ["K-Pop"], img: "../images/le ssera.jpg", color: "#1b2a3a", link: "#" },
  { id: "jillian-ward", title: "JILLIAN WARD: STAR OF THE NEW GEN", date: "2026-12-08", venue: "New Frontier Theater", genres: ["OPM", "Pop"], img: "../images/jillian.jpg", color: "#1b2a3a", link: "#" },
  { id: "nct", title: "NCT 127 5TH TOUR 'NEO CITY: MANILA - THE REDLINE'", date: "2026-12-12", venue: "SM Mall of Asia Arena", genres: ["K-Pop"], img: "../images/nct.jpg", color: "#1b2a3a", link: "#" },
  { id: "kavana-dec13", title: "KAVANA: SECOND ACT ASIA TOUR 2026 IN MANILA", date: "2026-12-13", venue: "New Frontier Theater", genres: ["Pop"], img: "../images/kavana-unana.jpg", color: "#1b2a3a", link: "#" },
  { id: "adie-dec18", title: "ADIE: HIMIG NG TADHANA", date: "2026-12-18", venue: "New Frontier Theater", genres: ["OPM", "Pop"], img: "../images/adie.jpg", color: "#1b2a3a", link: "#" },
  { id: "sienna-spiro", title: "SIENNA SPIRO: MY HOUSE TOUR", date: "2027-01-09", venue: "New Frontier Theater", genres: ["Pop"], img: "../images/sienna.jpg", color: "#1b2a3a", link: "#" },
  { id: "westlife-jan20", title: "WESTLIFE 25: THE ANNIVERSARY WORLD TOUR", date: "2027-01-20", venue: "SM Mall of Asia Arena", genres: ["Pop"], img: "../images/westlife.jpg", color: "#1b2a3a", link: "#" },
  { id: "westlife-jan21", title: "WESTLIFE 25: THE ANNIVERSARY WORLD TOUR", date: "2027-01-21", venue: "SM Mall of Asia Arena", genres: ["Pop"], img: "../images/westlife.jpg", color: "#1b2a3a", link: "#" },
  { id: "westlife-jan21-b", title: "WESTLIFE 25: THE ANNIVERSARY WORLD TOUR JAN 21", date: "2027-01-21", venue: "SM Mall of Asia Arena", genres: ["Pop"], img: "../images/westlife.jpg", color: "#1b2a3a", link: "#" },
  { id: "katseye-manila", title: "KATSEYE: THE WILDWORLD TOUR", date: "2027-01-29", venue: "SM Mall of Asia Arena", genres: ["Pop"], img: "../images/katseye.jpg", color: "#1b2a3a", link: "#" },
  { id: "katseye-cebu", title: "KATSEYE: THE WILDWORLD TOUR", date: "2027-02-07", venue: "SM Seaside Cebu Arena", genres: ["Pop"], img: "../images/katseye.jpg", color: "#1b2a3a", link: "#" },
  { id: "maroon-5", title: "MAROON 5 ASIA 2027", date: "2027-02-07", venue: "SM Mall of Asia Arena", genres: ["Pop", "Rock"], img: "../images/maroon5.jpg", color: "#1b2a3a", link: "#" },
  { id: "freya-skye", title: "FREYA SKYE: STARS ALIGN TOUR", date: "2027-02-16", venue: "New Frontier Theater", genres: ["Pop"], img: "../images/freya.jpg", color: "#1b2a3a", link: "#" },
  { id: "young-k", title: "YOUNGEST: YOUNG K SOLO TOUR", date: "2027-02-20", venue: "New Frontier Theater", genres: ["K-Pop", "Rock"], img: "../images/youngest.jpg", color: "#1b2a3a", link: "#" },
  { id: "bts-mar13", title: "BTS: WORLD TOUR 'ARIRANG' IN BULACAN", date: "2027-03-13", venue: "Philippine Sports Stadium", genres: ["K-Pop"], img: "../images/bts.jpg", color: "#1b2a3a", link: "#" },
  { id: "bts-mar14", title: "BTS: WORLD TOUR 'ARIRANG' IN BULACAN", date: "2027-03-14", venue: "Philippine Sports Stadium", genres: ["K-Pop"], img: "../images/bts.jpg", color: "#1b2a3a", link: "#" },
  { id: "bts-mar16", title: "BTS: WORLD TOUR 'ARIRANG' IN BULACAN", date: "2027-03-16", venue: "Philippine Sports Stadium", genres: ["K-Pop"], img: "../images/bts.jpg", color: "#1b2a3a", link: "#" },
  { id: "the-script", title: "THE SCRIPT: MAN IN THE ARENA TOUR", date: "2027-03-20", venue: "SM Mall of Asia Arena", genres: ["Pop", "Rock"], img: "../images/thescript.jpg", color: "#1b2a3a", link: "#" },
  { id: "m2m-apr02", title: "M2M 2027", date: "2027-04-02", venue: "Smart Araneta Coliseum", genres: ["Pop"], img: "../images/m2m.jpg", color: "#1b2a3a", link: "#" },
  { id: "beabadoobee", title: "BEABADOOBEE: THE POWERLINES TOUR", date: "2027-04-13", venue: "SM Mall of Asia Arena", genres: ["Indie", "Rock"], img: "../images/bea.jpg", color: "#1b2a3a", link: "#" },
  { id: "bruno-mars-may15", title: "BRUNO MARS: THE ROMANTIC TOUR", date: "2027-05-15", venue: "Philippine Arena", genres: ["Pop", "R&B"], img: "../images/brunomars.jpg", color: "#1b2a3a", link: "#" },
  { id: "bruno-mars-may16", title: "BRUNO MARS: THE ROMANTIC TOUR", date: "2027-05-16", venue: "Philippine Arena", genres: ["Pop", "R&B"], img: "../images/brunomars.jpg", color: "#1b2a3a", link: "#" },
  { id: "bruno-mars-may18", title: "BRUNO MARS: THE ROMANTIC TOUR", date: "2027-05-18", venue: "Philippine Arena", genres: ["Pop", "R&B"], img: "../images/brunomars.jpg", color: "#1b2a3a", link: "#" },
  { id: "disturbed", title: "DISTURBED: THE SICKNESS & THE GREATEST HITS", date: "2027-05-25", venue: "SM Mall of Asia Arena", genres: ["Rock", "Metal"], img: "../images/disturbed.jpg", color: "#1b2a3a", link: "#" }
];



var VENUES = [
  {name:"SM Mall of Asia Arena", img:"../images/sm-moa-arena.jpg", color:"#2f6fa8", rating:4.5, comment:"Huge arena with great sightlines. Gets crowded, so arrive early."},
  {name:"SM Seaside Cebu Arena", img:"../images/sm-seaside-cebu.jpg", color:"#5d8aa8", rating:4.3, comment:"Modern venue in Cebu with easy access to the mall."},
  {name:"New Frontier Theater", img:"../images/new-frontier-theatre.jpg", color:"#a8483a", rating:5.0, comment:"Intimate theatre with excellent acoustics."},
  {name:"Philippine Arena", img:"../images/philippine-arena.jpg", color:"#a8483a", rating:5.0, comment:"One of the largest indoor arenas in the world."},
  {name:"Philippine Sports Stadium", img:"../images/philippine-sports-stadium.jpg", color:"#a8483a", rating:5.0, comment:"Big open stadium, great for large crowds."},
  {name:"Santiago Sports Arena", img:"../images/santiago-sports-arena.png", color:"#a8483a", rating:5.0, comment:"Comfortable mid-sized venue."},
  {name:"Smart Araneta Coliseum", img:"../images/araneta-coli.jpg", color:"#a8483a", rating:5.0, comment:"The iconic Big Dome, a classic concert venue."},
  {name:"Filinvest City Event Grounds", img:"../images/fili-city-event-grounds.jpg", color:"#a8483a", rating:5.0, comment:"Open-air grounds, bring sun protection."},
  {name:"Gateway Cineplex 18", img:"../images/gate18.jpg", color:"#a8483a", rating:5.0, comment:"Cinema-style seating with a good view from anywhere."},
  {name:"City of Santa Rosa Multi-Purpose Complex", img:"../images/multi-wilberto.jpg", color:"#5d8aa8", rating:4.4, comment:"Spacious complex with plenty of parking."}
];

var GENRES = ["Pop","K-Pop","OPM","Rock","Indie"];

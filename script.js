const mymap = L.map('map').setView([44.816071, 20.459970], 14);

L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(mymap);

//ljubicanstvena-palilula
var markerIconPurp = L.icon ({
    iconUrl: 'iconPurp.png',
	shadowUrl: 'marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
})
//crvena-stari grad
var markerIconRed = L.icon ({
    iconUrl: 'icon.png',
	shadowUrl: 'marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
})
//zlatna-vracar
var markerIconGold = L.icon ({
    iconUrl: 'iconGold.png',
	shadowUrl: 'marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
})
//zelena-savski venac
var markerIconGreen = L.icon ({
    iconUrl: 'iconGreen.png',
	shadowUrl: 'marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
})
//ulice idk zaboravio sam koja je koja lol
const marker = L.marker([44.80242032861968, 20.469059886208033],{icon: markerIconGold}).addTo(mymap);
const marker2 = L.marker([44.804474, 20.459533],{icon: markerIconGreen}).addTo(mymap);
const marker3 = L.marker([44.816583, 20.450009],{icon: markerIconRed}).addTo(mymap);
const marker4 = L.marker([44.809700, 20.473459],{icon: markerIconPurp}).addTo(mymap);
const marker5 = L.marker([44.818026, 20.474475],{icon: markerIconPurp}).addTo(mymap);
const marker6 = L.marker([44.817771, 20.451963],{icon: markerIconRed}).addTo(mymap);
const marker7 = L.marker([44.816125, 20.453019],{icon: markerIconRed}).addTo(mymap);
const marker8 = L.marker([44.811932, 20.476216],{icon: markerIconPurp}).addTo(mymap);
const marker9 = L.marker([44.817729, 20.459047],{icon: markerIconRed}).addTo(mymap);
const marker11 = L.marker([44.804877, 20.470237],{icon: markerIconGold}).addTo(mymap);
const marker12 = L.marker([44.803456, 20.476073],{icon: markerIconGold}).addTo(mymap);

//popupi
let aleksaTemp = `
	<h2>Aleksa Nenadovi??(1749-1804)</h2>
	<div id="velikiSlike">
		<img class="maliSlike" src="AleksaNenadovic.jpg" width="150px" height="180"> 
		<p id="tekst" class="maliSlike">Rodjen je 1749. godine u Brankovini. Bio je tamnavsko-posavinski knez. Ubijen je u Se??i knezova 1804. godine u Valjevu.</p>
	</div>
`
marker.bindPopup(aleksaTemp);

let hadziProdan = `
	<h2>Had??i Prodan(1760-1825)</h2>
	<div id="velikiSlike">
		<img class="maliSlike" src="Had??iProdan.jpg" width="150px" height="180"> 
		<p class="maliSlike">Prodan Gligorijevi?? rodjen je 1760. godine. Bio je vojvoda iz Prvog srpskog ustanka. Vodio je pobunu 1814. godine koja se zvala Had??i Prodanova buna.</p>
	</div>
`
marker12.bindPopup(hadziProdan);

let ProtaMatija = `
	<h2>Prota Matija(1777-1854)</h2>
	<div id="velikiSlike">
		<img class="maliSlike" src="ProtaMateja.jpg" width="150px" height="180"> 
		<p id="txtProta" class="maliSlike">Prota Matija Nenadovi?? bio je vojvoda iz Prvog srpskog ustanka. Bio je prvi predsednik Praviteljstvuju????eg sovjeta. Napisao je poznato delo "Memoari".</p>
	</div>
`
marker11.bindPopup(ProtaMatija);

let IlijaBircanin = `
	<h2>Ilija Bir??anin(1764-1804)</h2>
	<div id="velikiSlike">
		<img class="maliSlike" src="IlijaBircanin.jpg" width="150px" height="180"> 
		<p class="maliSlike">Rodjen je 1764. godine. Ubijen je u Se??i knezova 1804. godine i sahranjen je u manastiru ??elije kod Valjeva.</p>
	</div>
`
marker2.bindPopup(IlijaBircanin);

let IlijaGarasanin = `
	<h2>Ilija Gara??anin(1812-1874)</h2>
	<div id="velikiSlike">
		<img class="maliSlike" src="IlijaGarasanin.jpg" width="150px" height="180"> 
		<p id="ilijaG" class="maliSlike">Bio je srpski dr??avnik, predsednik Vlade i ministar unutra??njih poslova. Rodjen je 1812. godine u selu Gara??i u Srbiji po kome je uzeo prezime.</p>
	</div>
`
marker4.bindPopup(IlijaGarasanin);

let StanojeGlavas = `
	<h2>Stanoje Glava??(1763-1815)</h2>
	<div id="velikiSlike">
		<img class="maliSlike" src="StanojeGlavas.jpg" width="150px" height="180"> 
		<p id="stanojeG" class="maliSlike">Stanoje Stamatovi?? bio je hajduk, vojvoda i jedan od velikana za vreme ustanka. Trebao je da bude izabran za vodju Prvog srpskog ustanka, ali je na njegov predlog izabran Karadjordje.</p>
	</div>
`
marker8.bindPopup(StanojeGlavas);

let VojvodaDobrnjac = `
	<h2>Petar Dobrnjac(1771-1831)</h2>
	<div id="velikiSlike">
		<img class="maliSlike" src="PetarDobrnjac.jpg" width="150px" height="180"> 
		<p id="stanojeG" class="maliSlike">Bio je vojvoda u Prvom srpskom Ustanku. Karadjordje ga je pozvao da se priklju??i u brobi protiva Turaka. U??estvovao je u boju na Ivankovcu 1805. godine. Stevan Sindjeli?? mu je bio kum.</p>
	</div>
`
marker5.bindPopup(VojvodaDobrnjac);

let VasaCarapic = `
	<h2>Vasa ??arapi??(1768-1806)</h2>
	<div id="velikiSlike">
		<img class="maliSlike" src="VasaCarapic.jpg" width="150px" height="180"> 
		<p id="vasaC" class="maliSlike">Vasilije ??arapi?? bio je jedan od najzna??ajnijih boraca u ustanku protiv dahija. Bio je vojskovodja koji je umro u borbi za Oslobodjenje Beograda 1806. godine. Bio je poznat i kao "Zmaj od Avale".</p>
	</div>
`
marker9.bindPopup(VasaCarapic);

let PopLuka = `
	<h2>Luka Lazarevi??(1774-1852)</h2>
	<div id="velikiSlike">
		<img class="maliSlike" src="LukaLazarevic.jpg" width="150px" height="180"> 
		<p id="vasaC" class="maliSlike">Bio je vojvoda za vreme ustanka. Najvi??e se istakao u boju na Mi??aru gde je sa Matejom Nenadovi??em predvodio srpsku konjicu koja je izvr??ila juri?? i doprinela pobedi nad Turcima.</p>
	</div>
`
marker7.bindPopup(PopLuka);

let SimaMarkovic = `
	<h2>Sima Markovi??(1768-1817)</h2>
	<div id="velikiSlike">
		<img class="maliSlike" src="SimaMarkovic.jpg" width="150px" height="180"> 
		<p id="vasaC" class="maliSlike">Bio je knez i vojvoda za vreme Prvog srpskog ustanka. Predvodio je vosku na Mi??aru, Ivankovcu, Deligradu...<br>Pogubljen je na Kalemegdanu na Mladence.</p>
	</div>
`
marker6.bindPopup(SimaMarkovic);

let Karadjordje = `
	<h2>Djordje Petrovi??(1768-1817)</h2>
	<div id="velikiSlikeK">
		<img class="maliSlike" src="Karadjordje.jpg" width="170px" height="240"> 
		<p id="karaDj" class="maliSlike">Poznat jo?? i kao Karadjordje i Crni Djordje bio je vodja Prvog srpskog ustanka. Odrastao je u siroma??noj porodici u Smederevskom sand??aku. Smatra se osniva??em dinastije Karadjordjevi??. Ubijen je po naredbi Milo??a Obrenovi??a u Radovanjskom lugu.</p>
	</div>
`
marker3.bindPopup(Karadjordje);

function Mapa(){
	location.replace('vise.html');
}
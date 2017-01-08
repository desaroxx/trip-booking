import { ITourPageData } from '../pages/ITourPageData';

export const DATA_TOUR_ANDALUCIA: ITourPageData = {
  title: `Motorradtour Andalusien Klassik`,
  subtitle: `Die Highlights Südspaniens`,
  descriptions: [
    `Die faszinierende Motorradtour zu den Highlights Andalusiens. Entlang der spannenden Strecken im Motorradparadies Südspanien besuchen wir die schönsten Städte dieser Region. Hier errichteten die Mauren herrliche Paläste, Gärten und Moscheen, gründeten Universitäten und etablierten bedeutende Märkte.`,
    `Die Strassen Andalusiens gehören zweifellos zu den spektakulärsten und eindrucksvollsten in ganz Spanien. Sie führen uns anfänglich von Malaga die Küste entlang  zum mondänen Marbella, von wo aus wir die Bergstrassen der Sierra de Ronda erklimmen. Über die weissen Dörfer Andlausiens erreichen wir dessen elegante und einladende Hauptstadt Sevilla. Dort verweilen wir einen Tag und bummeln durch enge Gassen, über kleine Plätze zu einer Verschnaufpause in die Altstadtbars, um köstliche Tapas zu genießen oder ein Glas Wein zu trinken.`,
    `Weiter geht es auf den Panoramastrassen der Stauseen des Guadalquiviers zur nächsten maurischen Perle dieser Tour nach Cordoba, das uns mit seiner einzigartigen Atmosphäre erwartet. Wir besuchen Granada und seine Alhambra und erfreuen uns an den Bergetappen in der Sierra Nevada, bevor wir das Mittelmeer entlang wieder nach Malaga zurückkehren.`,
    `Die Reise bietet dem/der Motorradfahrer/in Fahrspaß auf kleinen, kurvenreichen Gebirgsstraßen, und durch wunderschöne Landschaften. Die gesamte Route verläuft auf Asphaltstraßen. Nach den Tagesetappen erwartet Sie der Komfort eines ausgewählten 4* Hotels.`
  ],
  travelSegments: [
    {
      day: 1,
      from: `Málaga`,
      to: 'Ankunft',
      km: 0,
      description: `Ankunft am Flughafen Málaga und Trans fer ins Hotel.  Beim gemeinsamen Abendessen mit spanischem Wein werden wir uns kennenlernen und die Tour besprechen.`,
      imageURL: `http://www.hispania-tours.de/uploads/pics/Tag1_01.jpg`
    }, {
      day: 2,
      from: 'Málaga',
      to: 'Marbella - Ronda',
      km: 312,
      description: `Entlang der Küstenstrasse an der Costa del Sol geht es nach Marbella und über schöne, langgezogene Kurven hinein in die Sierra de Ronda. Herrliche Blicke über das Mittelmeer machen diese Sierra zu einem Genuss, wir erreichen am Abend das Etappenziel in Ronda. Eine der ältesten Stierkampfarenen Spaniens wurde 1785 hier eröffnet, die Stadt selbst liegt an der 100 m tiefen El Tajo Schlucht und wird über die imposante Brücke Puente Nuevo erreicht.`,
      imageURL: `http://www.hispania-tours.de/uploads/pics/Tag2_01.jpg`
    }, {
      day: 3,
      from: 'Ronda',
      to: 'Arcos de la Frontera - Sevilla',
      km: 225,
      description: `Im Umkreis Rondas gibt es eine Vielzahl von kleineren Gebirgsketten, wie die Sierra von Grazalema. Hier erwarten uns abwechslungsreiche, grandiose Landschaften und Straßen, die wie geschaffen sind für unsere Motorräder. Kurven, griffiger Asphalt und schöne Ausblicke auf die weissen Dörfer Andalusiens bringen uns nach Arcos de la Frontera und weiter nach Sevilla, dem heutigen Etappenziel.`,
      imageURL: `http://www.hispania-tours.de/uploads/pics/Tag3_01.jpg`
    }, {
      day: 4,
      from: 'Sevilla',
      to: 'Rasttag',
      km: 225,
      description: `Die Hauptstadt Andalusiens ist gleichzeitig auch die faszinierendste Stadt dieser Region. Es ist schwer, sich ihrem einzigartigen Charme zu entziehen: Sevilla ist elegant, historisch und stolz, aber auch einladend gastfreundlich, gemütlich und lebendig. Die riesige Kathedrale mit dem berühmten Glockenturm, der Giralda, ist nur eine von vielen Sehenswürdigkeiten die wir heute entdecken.`,
      imageURL: `http://www.hispania-tours.de/uploads/pics/Tag4_01.jpg`
    }, {
      day: 5,
      from: 'Sevilla',
      to: 'Sierra Morena - Cordoba',
      km: 225,
      description: `Unser Weg führt uns weiter in die schroffen Gebirgslandschaften und Schluchten der Sierra Morena. Die traumhafte Straße in diesem Naturpark im Norden Andalusiens ist einzigartig und bringt uns an das heutige Etappenziel Cordoba, das in der politischen und kulturellen Blütezeit des maurischen Reichs dessen Hauptstadt war.`,
      imageURL: `http://www.hispania-tours.de/uploads/pics/Tag6_01.jpg`
    }, {
      day: 6,
      from: 'Cordoba',
      to: 'Granada',
      km: 225,
      description: `Obwohl am heutigen Kulturtag mit dem Besuch der Alhambra eine der bedeutendsten spanischen Kulturstätten auf dem Programm steht, kommt das Motorradvergnügen nicht zu kurz. Unser Weg führt uns über wunderbare Passstraßen und durch Olivenhaine vorbei an Mohnfeldern und Stauseen, bevor wir uns über eine Hochebene Granada nähern.`,
      imageURL: `http://www.hispania-tours.de/uploads/pics/Tag5_01.jpg`
    }, {
      day: 7,
      from: 'Granada',
      to: 'Málaga',
      km: 225,
      description: `Wir verlassen Granada, um noch ausführlich die einmalige Landschaft der Sierra Nevada zu genießen. Abseits vom Verkehr, das Meer im Blickfeld, schwingen wir von hier Kurve um Kurve zum Ausgangspunkt unserer Tour nach Malaga zurück.`,
      imageURL: `http://www.hispania-tours.de/uploads/pics/Tag6a_01.jpg`
    }, {
      day: 8,
      from: 'Málaga',
      to: 'Rückreise',
      km: 225,
      description: `Bem: Kleinere Änderungen im Tourverlauf behalten wir uns vor.`,
      imageURL: null
    }
  ],
  prices: [
    {
      people: 2,
      bikes: 1,
      rooms: 1,
      price: 1999
    }, {
      people: 2,
      bikes: 2,
      rooms: 1,
      price: 2799
    }, {
      people: 1,
      bikes: 1,
      rooms: 1,
      price: 2399
    }
  ],
  mapImageUrl: 'http://www.hispania-tours.de/uploads/pics/andalusienKlassik_Karte.jpg',
  bikes: [
    {
      title: `Eigenes Motorrad`,
      imageURL: `http://www.hispania-tours.de/fileadmin/website/imgs/iconBikes/EigenesBikeIcon.gif`,
      price: 0
    }, {
      title: `BMW F700GS`,
      imageURL: `http://www.hispania-tours.de/fileadmin/website/imgs/iconBikes/F650-800GSIcon.gif`,
      price: 570
    }, {
      title: `BMW F800GS F800GS ADV`,
      imageURL: `http://www.hispania-tours.de/fileadmin/website/imgs/iconBikes/F650-800GSIcon.gif`,
      price: 630
    }, {
      title: `BMW R1200GS R1200GS ADV`,
      imageURL: `http://www.hispania-tours.de/fileadmin/website/imgs/iconBikes/R1200GSIcon.gif`,
      price: 810
    }, {
      title: `BMW R1200R`,
      imageURL: `http://www.hispania-tours.de/fileadmin/website/imgs/iconBikes/R1200RIcon.gif`,
      price: 720
    }, {
      title: `BMW R1200RT`,
      imageURL: `http://www.hispania-tours.de/fileadmin/website/imgs/iconBikes/R1200RTIcon.gif`,
      price: 870
    }
  ],
  gallery : [
    { imageURL: `/images/andalusien/andalusien-1.jpg`},
    { imageURL: `/images/andalusien/andalusien-2.jpg`},
    { imageURL: `/images/andalusien/andalusien-3.jpg`},
    { imageURL: `/images/andalusien/andalusien-4.jpg`},
    { imageURL: `/images/andalusien/andalusien-5.jpg`},
    { imageURL: `/images/andalusien/andalusien-6.jpg`},
    { imageURL: `/images/andalusien/andalusien-7.jpg`},
    { imageURL: `/images/andalusien/andalusien-8.jpg`},
    { imageURL: `/images/andalusien/andalusien-9.jpg`},
    { imageURL: `/images/andalusien/andalusien-10.jpg`},
    { imageURL: `/images/andalusien/andalusien-11.jpg`},
    { imageURL: `/images/andalusien/andalusien-12.jpg`},
    { imageURL: `/images/andalusien/andalusien-13.jpg`},
    { imageURL: `/images/andalusien/andalusien-14.jpg`},
    { imageURL: `/images/andalusien/andalusien-15.jpg`},
    { imageURL: `/images/andalusien/andalusien-16.jpg`},
    { imageURL: `/images/andalusien/andalusien-17.jpg`},
    { imageURL: `/images/andalusien/andalusien-18.jpg`},
    { imageURL: `/images/andalusien/andalusien-19.jpg`},
    { imageURL: `/images/andalusien/andalusien-20.jpg`},
    { imageURL: `/images/andalusien/andalusien-21.jpg`},
    { imageURL: `/images/andalusien/andalusien-22.jpg`},
    { imageURL: `/images/andalusien/andalusien-23.jpg`}
  ],
  tourDates: [
    {
      value: `23.05.2017 - 31.05.2017 (ab CHF 1'999)`,
      from: `23.05.2017`,
      to: `31.05.2017`,
      price: 1999
    }, {
      value: `01.06.2017 - 08.06.2017 (ab CHF 2'199)`,
      from: `01.06.2017`,
      to: `08.06.2017`,
      price: 2199
    }, {
      value: `09.06.2017 - 16.06.2017 (ab CHF 2'199)`,
      from: `09.06.2017`,
      to: `16.06.2017`,
      price: 2199
    }, {
      value: `17.07.2017 - 24.06.2017 (ab CHF 2'399)`,
      from: `17.07.2017`,
      to: `24.06.2017`,
      price: 2399
    }
  ],
  pricePerRoom: 400,
  pricePerPerson: 1200
};

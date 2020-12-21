const ships = [
    {
        employer: "Allstars",
        yardNo: "1400",
        name: "Unnamed",
        owner: "Royal Caribbean International",
        type: "Cruise ship",
        image: "images/ships/ship.png"
    },
    {
        employer: "Allstars",
        yardNo: "1395",
        name: "Costa Toscana",
        owner: "Costa Crociere",
        type: "Cruise ship",
        image: "images/ships/ship.png"
    },
    {
        employer: "Allstars",
        yardNo: "1396",
        name: "Mardi Gras",
        owner: "Carnival Cruise Lines",
        type: "Cruise ship",
        image: "images/ships/mardi-gras.jpg"
    },
    {
        employer: "Allstars",
        yardNo: "1394",
        name: "Costa Smeralda",
        owner: "Costa Crociere",
        type: "Cruise ship",
        image: "images/ships/costa-smeralda.jpg"
    },
    {
        employer: "Allstars",
        yardNo: "1393",
        name: "Mein Schiff 2",
        owner: "TUI Cruises",
        type: "Cruise ship",
        image: "images/ships/mein-schiff-2.jpg"
    },
    {
        employer: "Allstars",
        yardNo: "1392",
        name: "Mein Schiff 1",
        owner: "TUI Cruises",
        type: "Cruise ship",
        image: "images/ships/mein-schiff-1.jpg"
    },
    {
        employer: "Allstars",
        yardNo: "514",
        name: "Yevgeny Primakov",
        owner: "Sovcomflot",
        type: "Icebreaking supply vessel",
        image: "images/ships/yevgeny-primakov.jpg"
    },
    {
        employer: "Allstars",
        yardNo: "513",
        name: "Fedor Ushakov",
        owner: "Sovcomflot",
        type: "Icebreaking supply vessel",
        image: "images/ships/fedor-ushakov.jpg"
    },
    {
        employer: "Allstars",
        yardNo: "512",
        name: "Stepan Makarov",
        owner: "Sovcomflot",
        type: "Icebreaking supply vessel",
        image: "images/ships/stepan-makarov.jpg"
    },
    {
        employer: "Allstars",
        yardNo: "511",
        name: "Gennadiy Nevelskoy",
        owner: "Sovcomflot",
        type: "Icebreaking supply vessel",
        image: "images/ships/gennadiy-nevelskoy.jpg"
    },
    {
        employer: "Icepronav",
        yardNo: "EEP1",
        name: "Ondina",
        owner: "Sete Brasil S.A",
        type: "Drillship - 'PRD 12000 Qdrill'",
        image: "images/ships/ondina.jpg"
    },
    {
        employer: "Vard",
        yardNo: "784",
        name: "Island Crown",
        owner: "Island Offshore",
        type: "Platform Supply Vessel",
        image: "images/ships/island-crown.jpg"
    },
    {
        employer: "Vard",
        yardNo: "760",
        name: "Reimerswaal",
        owner: "Sheepswerft Gebroeders Kooiman BV",
        type: "Suction Hopper Dredger",
        image: "images/ships/reimerswaal.jpg"
    },
    {
        employer: "Vard",
        yardNo: "756",
        name: "Troms Lyra",
        owner: "Troms Offshore",
        type: "Platform Supply Vessel",
        image: "images/ships/troms-lyra.jpg"
    },
    {
        employer: "Vard",
        yardNo: "783",
        name: "Viking Fighter",
        owner: "NorSea Group",
        type: "Platform Supply Vessel",
        image: "images/ships/viking-fighter.jpg"
    },
    {
        employer: "Vard",
        yardNo: "788",
        name: "Gadus Poseidon",
        owner: "Havfisk",
        type: "Fishing Vessel",
        image: "images/ships/gadus-poseidon.jpg"
    },
    {
        employer: "Vard",
        yardNo: "789",
        name: "Gadus Njord",
        owner: "Havfisk",
        type: "Fishing Vessel",
        image: "images/ships/gadus-njord.jpg"
    },
    {
        employer: "Vard",
        yardNo: "790",
        name: "Gadus Neptun",
        owner: "Havfisk",
        type: "Fishing Vessel",
        image: "images/ships/gadus-neptun.jpg"
    },
    {
        employer: "Vard",
        yardNo: "785",
        name: "Island Pride",
        owner: "Island Offshore",
        type: "Multi-purpose Support Vessel",
        image: "images/ships/island-pride.jpg"
    },
    {
        employer: "Vard",
        yardNo: "795",
        name: "Island Duke",
        owner: "Island Offshore",
        type: "Platform Supply Vessel",
        image: "images/ships/island-duke.jpg"
    },
    {
        employer: "Vard",
        yardNo: "796",
        name: "Island Duchess",
        owner: "Island Offshore",
        type: "Platform Supply Vessel",
        image: "images/ships/island-duchess.jpg"
    },
    {
        employer: "Vard",
        yardNo: "797",
        name: "Island Dawn",
        owner: "Island Offshore",
        type: "Platform Supply Vessel",
        image: "images/ships/island-dawn.jpg"
    },
    {
        employer: "Vard",
        yardNo: "798",
        name: "Island Dragon",
        owner: "Island Offshore",
        type: "Platform Supply Vessel",
        image: "images/ships/island-dragon.jpg"
    },
    {
        employer: "Vard",
        yardNo: "815",
        name: "Far Sun",
        owner: "Farstad Shipping",
        type: "Platform Supply Vessel",
        image: "images/ships/far-sun.jpg"
    },
    {
        employer: "Vard",
        yardNo: "817",
        name: "Troms Arcturus",
        owner: "Troms Offshore",
        type: "Platform Supply Vessel",
        image: "images/ships/troms-arcturus.jpg"
    },
    {
        employer: "Vard",
        yardNo: "PRO30",
        name: "Skandi Urca",
        owner: "DOF",
        type: "Anchor Handling Tug Supply Vessel",
        image: "images/ships/skandi-urca.jpg"
    },
    {
        employer: "Vard",
        yardNo: "PRO33",
        name: "Skandi Paraty",
        owner: "DOF",
        type: "Anchor Handling Tug Supply Vessel",
        image: "images/ships/skandi-paraty.jpg"
    },
    {
        employer: "Vard",
        yardNo: "1048",
        name: "Internal Project",
        owner: "Vard",
        type: "Platform Supply Vessel",
        image: "images/ships/ship.png"
    },
    {
        employer: "Vard",
        yardNo: "931",
        name: "Internal Project",
        owner: "Vard",
        type: "Platform Supply Vessel",
        image: "images/ships/ship.png"
    },
    {
        employer: "Vard",
        yardNo: "814",
        name: "Island Condor",
        owner: "Island Offshore",
        type: "Offshore Service Vessel",
        image: "images/ships/island-condor.jpg"
    },
    {
        employer: "Vard",
        yardNo: "819",
        name: "Pierre De Fermat",
        owner: "Orange Marine",
        type: "Cable Laying & Repair Vessel",
        image: "images/ships/pierre-de-fermat.jpg"
    }
];

export default ships;
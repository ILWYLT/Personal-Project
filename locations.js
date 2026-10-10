let currentStep = 0;
let currentRotation = 0;

const circle = document.getElementById('circle');
const bannerColumn = document.getElementById('banner-column');
const bannerText = document.getElementById('banner-text');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');

const params = new URLSearchParams(window.location.search);
const stepParam = params.get('step');

const locations = [
    {   name: "Meridian Island",
        fig1: "./resort_front.jpeg",
        figcap1: "In Meridian Island, there's a lot of beatiful nature, high-end resort, and also the ever changing view since the island is always moving.",

        fig2: "./resort-inside.jpeg",
        figcap2: "Our staff will welcome you wholeheartedly and work hard to keep the establishment clean and tidy.",

        fig3: "./resort_hotel.jpeg",
        figcap3: "You can also rent a hotel room within the resort and enjoy a simple 5-star hotel level of enjoyment",

        hisFig: "./gramps.jpeg",
        hisFigCap: "Historically, Meridian Island is an island on a leviathan's back. 'gramps' is one of the passive leviathans that dresses his shell to blend in with the landscape, so it knows earth and nature magic to change the environment on his back, so the island landscape will also change periodically.",

        cultFig: "./resort_beach_house.jpeg",
        cultFigCap: "Since you'll be living on his back, the golden rule is to never harm the ground, the mountains or the trees. Our staff strictly forbids any form of fighting happening within the island, or you might be banished from the island permanently.",

        tDate: "28 Oct - 1 Nov 2026",
        tps: "HKD $6,999",
        tpf: "HKD $4,999",
        tph: "HKD $5,999",
        tpm: "HKD $3,999",
        tInfo: [
            [   //Day 1
                [   //PM
                    "Tribal Visit"
                ]
            ],
            [   //Day 2
                [   //AM
                    "Resort Free Time"
                ],
                [   //PM  
                    "Water Sports"
                ]
            ],
            [   //Day 3
                [   //AM
                    "Resort Free Time"
                ],
                [   //PM
                    "Halloween Night"
                ]
            ],
            [   //Day 4
                [   //AM
                    "Resort Free Time"
                ],
                [   //PM
                    "Halloween Night"
                ]
            ],
            [   //Day 5
                [   //AM
                    "Resort Free Time"
                ]
            ]
        ]
    },
    {   name: "Capital City",
        fig1: "./castle.jpeg",
        figcap1: "Visit the Grand Castle and feel the grand scale of the kindgom's wealth, luxury, and power.",

        fig2: "./grand_church.jpeg",
        figcap2: "The Church in the Capital City is the largest church you can find in this kingdom.",

        fig3: "./cap_adventurer.jpeg",
        figcap3: "Sign up to be an adventurer and you can accept quests to fight monsters, help citizens, and a lot more services provided within the largest adventurer guild in the kingdom.",

        hisFig: "./cap_throne.jpeg",
        hisFigCap: "The Captial City has been the landmark of this kingdom for centries. The barracks and adventurer guild both have been training soldiers and adventurers for both combat and magic training, so this kingdom is the only kingdoms that is the safest place to visit with the most history, and the largest territorial expanse across the board.",

        cultFig: "./cap_market.jpeg",
        cultFigCap: "Since the kingdom focuses both physical skills and magical abilities, so even regular citizens can learn magic for daily convenience. If you wish to find the perfect place to begin your own adventure, the Capital City will be the best spot for you to start.",

        tDate: "Every 15th of the month.",
        tps: "HKD $2,999",
        tpf: "HKD $1,999",
        tph: "HKD $4,999 (sponsered by the king)",
        tpm: "HKD $1,499",
        tInfo: [
            [   //Day 1
                [   //PM
                    "Castle Visit",
                    "Castle Stay"
                ],
            ],
                [   //Day 2
                [   //AM
                    "Dragon Riding"
                ],
                [   //PM
                    "Tamer's Guild Visit",
                    "Creature Petting",
                    "Castle Stay"
                ]
            ],
            [   //Day 3
                [   //AM
                    "Combat / Magic Experience"
                ],
                [   //PM
                    "Grand Church Visit",
                    "Adventurer Guild Visit",
                    "Inn Stay"
                ]
            ],
            [   //Day 4
                [   //AM
                    "Forest and Plains Exploration"
                ],
                [   //PM
                    "Market Visit",
                    "Inn Stay"
                ]
            ],
            [   //Day 5
                [   //AM
                    "Free Time"
                ]
            ]
        ]
    },
    {   name: "Volcanic Village",
        fig1: "./lava_lakes.jpeg",
        figcap1: "The dangerous yet rare sight to behold. It is normally extremely dangerous in the real world, but it will be relatively safe within our world, so it will be sights you can hardly find in the real world.",

        fig2: "./vol_smith.jpeg",
        figcap2: "The smithery here in this village is one of the best in the world, it is one the village with the most condensed amount of blacksmith in existance, and so blacksmiths keeps competiting with each other, so it also provides the best weapons and armor you can find.",

        fig3: "./vol-spring.jpeg",
        figcap3: "Volcanic Village also one of the best spots for natural hotspring. The hotsprins are good in both quality, qunatity, and varienty.",

        hisFig: "./vol_crystal.jpeg",
        hisFigCap: "The village first created because of this rare fire crystal that only found within the volcanic region. It can be made into weapon, armor, accessories, and even charms and magic items. So it started as a camping site with lots of smiths to live together, and eventually this village is born.",

        cultFig: "./vol_dragon.jpeg",
        cultFigCap: "While the village is mostly consist of blacksmiths. There is also a fire dragon that roams the region. But do not panick, the fire dragon is sentient and will not attack randomly. And the culture is to respect the dragon and the people there, or else...",

        tDate: "17 Jan 2027 - 18 Jan 2027",
        tps: "HKD $4,999",
        tpf: "HKD $3,999",
        tph: "HKD $5,999",
        tpm: "HKD $2,499",
        tInfo: [
            [   //Day 1
                [ //PM
                    "Village Exploration",
                    "Blacksmith and HotSpring"
                ],
            ],
            [   //Day 2
                [//AM
                    "Dragon meeting",
                    "Free Time"
                    ]
            ]
        ]
    },
    {   name: "Floating Islands",
        fig1: "./float_building.jpeg",
        figcap1: "The unqiue windmill based buildings give you a country vibe while you are soaring above land.",

        fig2: "./float_platform.jpeg",
        figcap2: "The Viewing Platform is where you can see the world from this elevated vantage point.",

        fig3: "./float_runway.jpeg",
        figcap3: "Want To experience flying? There's a lot of serivce to try and take off and soar in the sky. Whether it's through glider, magic, flying boots, or even just a temporary potion that gies you wings. There's even a aerial race happening one a year.",

        hisFig: "./float_crystal.jpeg",
        hisFigCap: "The reason why the islands can float above land? It's because of these crystals. The crystal is are infused with wind and spatial magic to able to lift the islands above ground. The citizens eveneutally learn how to configurate the crystals to make them function more effciently, so, the consumption is slower than the natural regeneration of these aerolite crystals.",

        cultFig: "./float_cult.jpeg",
        cultFigCap: "The floating island are natural homes of the angles. So the floating island is where you just enjoy the breeze and good vibes. Angels are wholesome free spirited people with wings, but if they are attacked, their aerial combat is where they excel at, and it's used for both escape danger and flank oppoents from deadly angles. Try to be kind to them, and they will treat you twice as kind.",

        tDate: "10 - 12 Mar 2027",
        tps: "HKD $7,999",
        tpf: "HKD $4,999",
        tph: "HKD $5,999",
        tpm: "HKD $3,999",
        tInfo: [
            [   //Day 1
                [//PM
                    "Island Visit",
                ]
            ],
            [   //Day 2
                [//AM
                    "Art Museum Visit"
                ],
                [//PM
                    "Flying Experience"
                ]
            ],
            [   //Day 3
                [//AM
                    "Shopping and Free Time"
                ]
            ]
        ]
    }
]

function renderSchedule() {
    const loc = locations[currentStep];
    const schedule = loc.tInfo;
    const container = document.getElementById('schedule');

    // Clear previous location's schedule
    container.innerHTML = '';
    let isPM = true;

    schedule.forEach((day, d) => {
        // Create the Day cell ONCE per day, outside the period loop
        const dayEl = document.createElement('div');
        dayEl.className = 'schedule-day';
        dayEl.innerText = `Day ${d + 1}`;
        dayEl.style.gridRow = `span ${day.length}`;   // ← key line
        container.appendChild(dayEl);

        // Then loop periods as before, but WITHOUT creating a Day cell inside
        day.forEach(period => {
            const label = isPM ? "PM" : "AM";

            const timeEl = document.createElement('div');
            timeEl.className = 'schedule-time';
            timeEl.innerText = label;
            container.appendChild(timeEl);

            const eventsEl = document.createElement('div');
            eventsEl.className = 'schedule-events';
            period.forEach(event => {
                const p = document.createElement('p');
                p.innerText = event;
                eventsEl.appendChild(p);
            });
            container.appendChild(eventsEl);

            isPM = !isPM;
        });
    });
}

function renderLocation() {
    const loc = locations[currentStep];

    document.getElementById('name').innerText  = loc.name;

    // 3 sites
    document.getElementById('fig1').style.backgroundImage = `url('${loc.fig1}')`;
    document.getElementById('figcap1').innerText          = loc.figcap1;
    document.getElementById('fig2').style.backgroundImage = `url('${loc.fig2}')`;
    document.getElementById('figcap2').innerText          = loc.figcap2;
    document.getElementById('fig3').style.backgroundImage = `url('${loc.fig3}')`;
    document.getElementById('figcap3').innerText          = loc.figcap3;

    // History
    document.getElementById('hisFig').style.backgroundImage = `url('${loc.hisFig}')`;
    document.getElementById('hisFigCap').innerText          = loc.hisFigCap;

    // Culture
    document.getElementById('cultFig').style.backgroundImage = `url('${loc.cultFig}')`;
    document.getElementById('cultFigCap').innerText          = loc.cultFigCap;

    // Tour
    document.getElementById('tDate').innerText   = loc.tDate;
    document.getElementById('tps').innerText   = loc.tps;
    document.getElementById('tpf').innerText   = loc.tpf;
    document.getElementById('tph').innerText   = loc.tph;
    document.getElementById('tpm').innerText   = loc.tpm;

    // document.getElementById('tInfo').innerText = loc.tInfo;
    renderSchedule();
}


function updateBanner() {
    bannerColumn.style.transform = `translateY(${currentStep * 500}px)`;
}

function updateCircleRotation() {
    circle.classList.remove('rot-0', 'rot-90', 'rot-180', 'rot-270', 'rot-360');

    if (currentStep === 0) circle.classList.add('rot-0');
    if (currentStep === 1) circle.classList.add('rot-90');
    if (currentStep === 2) circle.classList.add('rot-180');
    if (currentStep === 3) circle.classList.add('rot-270'); 
    if (currentStep === 4) circle.classList.add('rot-360');
}

function handleNext() {
    currentStep++;
    updateCircleRotation(); 
    updateBanner();

    if (currentStep >= 4) {
        currentStep = 0;
        renderLocation();
        setTimeout(() => {
            circle.classList.add('no-transition');
            bannerColumn.classList.add('no-transition');
            updateCircleRotation();
            updateBanner();
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    circle.classList.remove('no-transition');
                    bannerColumn.classList.remove('no-transition');
                });
            });
        }, 1000);
    } else {
        updateCircleRotation();
        updateBanner();
        renderLocation();
    }
}

function handlePrev() {
    if (currentStep === 0) {
        circle.classList.add('no-transition');
        bannerColumn.classList.add('no-transition');
        currentStep = 4;
        updateCircleRotation();
        updateBanner();
        currentStep = 3;
        renderLocation();
        setTimeout(() => {
            circle.classList.remove('no-transition');
            bannerColumn.classList.remove('no-transition');
            updateCircleRotation();
            updateBanner();
        }, 20);
    }
    else {
        currentStep--;
        
        updateCircleRotation();
        updateBanner();
        renderLocation();
    }
}

if (parseInt(stepParam, 10) >= 0 && parseInt(stepParam, 10) <= 3) {
    currentStep = parseInt(stepParam, 10);
    updateCircleRotation();
    updateBanner();
}
else{
    currentStep = 0;
}
    


btnNext.addEventListener('click', handleNext);
btnPrev.addEventListener('click', handlePrev);

updateCircleRotation();
updateBanner();
renderLocation();
// app/page.tsx
'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Property {
  id: string;
  title: string;
  location: string;
  handover: string;
  price: string;
  image: string;
}

interface Neighborhood {
  id: string;
  title: string;
  propertiesCount: string;
  description: string;
  image: string;
}

interface CategoryCard {
  id: string;
  categoryTag: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface DeveloperPartner {
  id: string;
  name: string;
  logo: string;
}

interface Testimonial {
  id: string;
  name: string;
  timeAgo: string;
  avatarBg: string;
  avatarText?: string;
  avatarImg?: string;
  review: string;
}

const categoriesData: CategoryCard[] = [
  {
    id: '1',
    categoryTag: 'OFF-PLAN PROPERTY',
    title: 'Hot Property Launches',
    description: 'Discover the newest and most sought-after projects fresh on the Dubai market.',
    image: 'https://drehomes.com/admin_nsrdwsc/assets/media/project/home-card-img/home_card_1788501283_6052.jpg',
    link: '#off-plan',
  },
  {
    id: '2',
    categoryTag: 'BUY PROPERTY',
    title: 'Top Resale Deals',
    description: 'Unlock unbeatable value with handpicked pre-owned homes across prime locations.',
    image: 'https://drehomes.com/admin_nsrdwsc/assets/media/project/home-card-img/home_card_1779270531_1097.jpg',
    link: '#buy',
  },
  {
    id: '3',
    categoryTag: 'RENT PROPERTY',
    title: 'Trending Rental Homes',
    description: 'Browse the most in-demand rental listings tailored to your lifestyle and budget.',
    image: 'https://drehomes.com/admin_nsrdwsc/assets/media/project/home-card-img/home_card_1784718478_9585.jpg',
    link: '#rent',
  },
];

const propertiesData: Property[] = [
  {
    id: '1',
    title: 'Azizi Florence',
    location: 'Sharjah',
    handover: '',
    price: 'AED 1,890,000',
    image: 'https://drehomes.com/admin_nsrdwsc/assets/media/project/home-card-img/home_card_1788501283_6052.jpg',
  },
  {
    id: '2',
    title: 'Marea Residences',
    location: 'Dubai Islands',
    handover: 'Handover : Q4 2027',
    price: 'AED 2,740,000',
    image: 'https://drehomes.com/admin_nsrdwsc/assets/media/project/home-card-img/home_card_1779270531_1097.jpg',
  },
  {
    id: '3',
    title: 'The Canopies',
    location: 'Yas Island',
    handover: 'Handover : Q3 2030',
    price: 'AED 1,650,000',
    image: 'https://drehomes.com/admin_nsrdwsc/assets/media/project/home-card-img/home_card_1784718478_9585.jpg',
  },
  {
    id: '4',
    title: 'Arancia Yards',
    location: 'Arabia, Dubai',
    handover: 'Handover : Q4 2028',
    price: 'On Request',
    image: 'https://drehomes.com/admin_nsrdwsc/assets/media/project/home-card-img/home_card_1781079740_9276.jpg',
  },
  {
    id: '5',
    title: 'Binghatti Wraith',
    location: 'Al Jaddaf',
    handover: 'Handover : Q4 2027',
    price: 'AED 799,999',
    image: 'https://drehomes.com/admin_nsrdwsc/assets/media/project/home-card-img/home_card_1781079740_9276.jpg',
  },
  {
    id: '6',
    title: 'Golf Trails',
    location: 'Emaar South',
    handover: 'Handover : Q4 2030',
    price: 'AED 1,250,000',
    image: 'https://drehomes.com/admin_nsrdwsc/assets/media/project/home-card-img/home_card_1784718478_9585.jpg',
  }
];

const neighborhoodsData: Neighborhood[] = [
  {
    id: '1',
    title: 'Damac Hills 2',
    propertiesCount: '21 PROPERTIES',
    description: 'A waterfront-inspired community offering resort-style living in Dubai.',
    image: 'https://drehomes.com/admin_nsrdwsc/assets/media/project/home-card-img/home_card_1788501283_6052.jpg',
  },
  {
    id: '2',
    title: 'Downtown Dubai',
    propertiesCount: '33 PROPERTIES',
    description: 'Home to iconic landmarks, luxury living, and Dubai\'s vibrant urban lifestyle.',
    image: 'https://drehomes.com/admin_nsrdwsc/assets/media/project/home-card-img/home_card_1779270531_1097.jpg',
  },
  {
    id: '3',
    title: 'Dubai Marina',
    propertiesCount: '45 PROPERTIES',
    description: 'Experience waterfront luxury with world-class dining, yachts, and high-rises.',
    image: 'https://drehomes.com/admin_nsrdwsc/assets/media/project/home-card-img/home_card_1784718478_9585.jpg',
  },
  {
    id: '4',
    title: 'Palm Jumeirah',
    propertiesCount: '19 PROPERTIES',
    description: 'Exclusive island living featuring pristine beaches and world-famous resorts.',
    image: 'https://drehomes.com/admin_nsrdwsc/assets/media/project/home-card-img/home_card_1781079740_9276.jpg',
  },
  {
    id: '5',
    title: 'Dubai Creek Harbour',
    propertiesCount: '28 PROPERTIES',
    description: 'A smart new sanctuary blending futuristic vision with natural waterfront beauty.',
    image: 'https://drehomes.com/admin_nsrdwsc/assets/media/project/home-card-img/home_card_1781079740_9276.jpg',
  }
];

const developerPartnersData: DeveloperPartner[] = [
  { id: '1', name: 'Azizi', logo: 'AZIZI' },
  { id: '2', name: 'Beyond', logo: 'BEYOND' },
  { id: '3', name: 'Sharafi Developments', logo: 'SHARAFI' },
  { id: '4', name: 'Gulf Land Property Developers', logo: 'GULF LAND' },
  { id: '5', name: 'Emaar', logo: 'EMAAR' },
  { id: '6', name: 'Meraas', logo: 'MERAAS' }
];

const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'MehmetAli Y',
    timeAgo: '1 month ago',
    avatarBg: 'bg-purple-600',
    avatarText: 'M',
    review: 'Beyhan Turkmenoglu from VGT Homes is a highly competent real estate associate. He provides detailed information...'
  },
  {
    id: '2',
    name: 'Fadi Kassem',
    timeAgo: '1 month ago',
    avatarBg: 'bg-pink-600',
    avatarText: 'F',
    review: 'Bayhan has scientific approach with historical and current data that helps taking decision, he is also very responsive and alwa...'
  },
  {
    id: '3',
    name: 'Jennifer Huntley',
    timeAgo: '1 month ago',
    avatarBg: 'bg-neutral-300',
    avatarImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    review: 'I had an excellent experience buying my first home through https://vgt-lime.vercel.app/ Homes, and I can\'t thank Faffie enough for all her suppor...'
  }
];

export default function Home() {
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const [selectedSearchOption, setSelectedSearchOption] = useState('Off Plan');
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const hotPropScrollRef = useRef<HTMLDivElement>(null);
  const scrollHotProperties = (direction: 'left' | 'right') => {
    if (hotPropScrollRef.current) {
      const amount = 340;
      hotPropScrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth'
      });
    }
  };

  const neighborhoodScrollRef = useRef<HTMLDivElement>(null);
  const [activeNeighborhoodIndex, setActiveNeighborhoodIndex] = useState(0);
  const scrollNeighborhoods = (direction: 'left' | 'right') => {
    if (neighborhoodScrollRef.current) {
      const amount = 440;
      const newIndex = direction === 'left'
        ? Math.max(0, activeNeighborhoodIndex - 1)
        : Math.min(neighborhoodsData.length - 1, activeNeighborhoodIndex + 1);
      
      setActiveNeighborhoodIndex(newIndex);
      neighborhoodScrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth'
      });
    }
  };

  const testimonialScrollRef = useRef<HTMLDivElement>(null);
  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialScrollRef.current) {
      const amount = 360;
      testimonialScrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth'
      });
    }
  };

  const searchOptions = [
    'Off Plan',
    'Buy Property',
    'Rent Property',
    'International Properties',
    'Ready To Move In'
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-black selection:text-white relative overflow-x-hidden">
      
      {/* ================= SECTION 1: HERO & SEARCH BAR ================= */}
      <section className="relative w-full min-h-screen lg:h-screen flex flex-col justify-between overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none"
          >
            <source src="https://drehomes.com/admin_nsrdwsc/assets/media/hero/videos/1781329027_6a2cec83412d8.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>

        <header className="relative z-30 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-5 flex items-center justify-between text-white">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image 
              src="/2-removebg-preview.png" 
              alt="VGT Logo" 
              width={200}
              height={70}
              className="w-36 sm:w-48 h-auto"
              priority
            />
          </div>

          <nav className="hidden xl:flex items-center gap-6 2xl:gap-7 text-[15px] font-normal tracking-wide text-white drop-shadow-md">
            <Link href="#" className="hover:text-black transition">Home</Link>
            
            <div className="relative" onMouseLeave={() => setIsNavDropdownOpen(false)}>
              <button 
                onMouseEnter={() => setIsNavDropdownOpen(true)}
                className="flex items-center gap-1 hover:text-black transition py-2"
              >
                <span>Properties</span>
                <span className={`text-[10px] transition-transform ${isNavDropdownOpen ? 'rotate-180' : ''}`}>&#9660;</span>
              </button>

              {isNavDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-black/10 py-3 z-50 flex flex-col">
                  <Link href="#off-plan" className="px-4 py-2.5 text-sm text-neutral-800 hover:text-black hover:bg-black/10 transition">Off-Plan Projects</Link>
                  <Link href="#buy" className="px-4 py-2.5 text-sm text-neutral-800 hover:text-black hover:bg-black/10 transition">Buy Resale Properties</Link>
                  <Link href="#rent" className="px-4 py-2.5 text-sm text-neutral-800 hover:text-black hover:bg-black/10 transition">Rental Properties</Link>
                  <Link href="#" className="px-4 py-2.5 text-sm text-neutral-800 hover:text-black hover:bg-black/10 transition">Commercial Spaces</Link>
                </div>
              )}
            </div>

            <Link href="#" className="hover:text-black transition">Developers</Link>
            <Link href="#" className="hover:text-black transition">Communities</Link>
            <Link href="#" className="hover:text-black transition">Blogs</Link>
            <Link href="#" className="hover:text-black transition">Services</Link>
            <Link href="#" className="hover:text-black transition">Guide</Link>
            <Link href="#" className="hover:text-black transition">About</Link>
          </nav>

          <div className="xl:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white bg-white/10 rounded-lg backdrop-blur-md"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </header>

        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl p-6 z-50 border border-black/10 flex flex-col gap-4 text-black shadow-2xl">
            <Link href="#" className="text-base font-medium py-1">Home</Link>
            <Link href="#off-plan" className="text-base font-medium py-1">Off-Plan Properties</Link>
            <Link href="#buy" className="text-base font-medium py-1">Buy Properties</Link>
            <Link href="#rent" className="text-base font-medium py-1">Rent Properties</Link>
            <Link href="#" className="text-base font-medium py-1">Developers</Link>
            <Link href="#" className="text-base font-medium py-1">Communities</Link>
            <Link href="#" className="text-base font-medium py-1">About Us</Link>
          </div>
        )}

        <div className="relative z-30 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pb-8 lg:pb-12 mt-auto">
          <div className="bg-white text-neutral-900 rounded-[20px] p-4 sm:p-5 shadow-[0_15px_40px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row items-center justify-between gap-4 border border-white/40">
            <div className="w-full lg:w-[28%] flex flex-col justify-center py-1">
              <h1 className="text-[20px] sm:text-[22px] font-bold tracking-tight text-neutral-900 leading-snug">
                Find Your VGT Property
              </h1>
              <p className="text-[12px] sm:text-[12.55px] text-neutral-500 font-normal tracking-wide mt-0.5">
                Search the best properties across the prime location
              </p>
            </div>

            <div className="w-full lg:flex-1 grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
              <div className="relative">
                <div 
                  onClick={() => setIsSearchDropdownOpen(!isSearchDropdownOpen)}
                  className="relative flex items-center justify-between bg-white border border-neutral-200 rounded-[12px] px-4 py-3.5 cursor-pointer hover:border-neutral-400 transition select-none"
                >
                  <span className="text-[14px] font-normal text-neutral-800 truncate">{selectedSearchOption}</span>
                  <span className={`text-[10px] text-neutral-500 font-bold transition-transform ${isSearchDropdownOpen ? 'rotate-180' : ''}`}>&#9660;</span>
                </div>

                {isSearchDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-neutral-200 py-2 z-50">
                    {searchOptions.map((option) => (
                      <div 
                        key={option}
                        onClick={() => {
                          setSelectedSearchOption(option);
                          setIsSearchDropdownOpen(false);
                        }}
                        className="px-4 py-2.5 text-[14px] cursor-pointer hover:bg-neutral-100 transition text-neutral-700"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative flex items-center bg-white border border-neutral-200 rounded-[12px] px-4 py-3.5">
                <input type="text" placeholder="Enter Location" className="bg-transparent text-[14px] w-full focus:outline-none text-neutral-800 placeholder-neutral-400" />
              </div>

              <div className="relative flex items-center bg-white border border-neutral-200 rounded-[12px] px-4 py-3.5">
                <input type="text" placeholder="Enter Project Name" className="bg-transparent text-[14px] w-full focus:outline-none text-neutral-800 placeholder-neutral-400" />
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end">
              <button className="w-full lg:w-[58px] h-[54px] bg-[#1a1a1a] hover:bg-black text-white rounded-[12px] flex items-center justify-center transition shrink-0 cursor-pointer shadow-md">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: LEADING DEVELOPER PARTNERS ================= */}
      <section className="w-full bg-white py-14 px-4 sm:px-6 lg:px-12 overflow-hidden border-t border-neutral-100">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-normal text-[#4a4a4a] tracking-tight leading-[1.2]">
                Leading Developer Partners
              </h2>
              <p className="text-[12px] sm:text-[13px] text-[#6b6b6b] font-normal mt-1 leading-relaxed">
                Backed by trusted developers shaping Dubai&apos;s most iconic real estate destinations.
              </p>
            </div>
            <div>
              <a
                href="#view-all-developers"
                className="inline-flex items-center gap-2 bg-black hover:bg-neutral-800 text-white text-[11.5px] font-medium px-4 py-2.5 rounded-[4px] shadow transition duration-300 cursor-pointer"
              >
                <span>View All</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        <div className="w-full max-w-[1400px] mx-auto relative overflow-hidden py-4 group">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max animate-infinite-scroll group-hover:[animation-play-state:paused]">
            {[...developerPartnersData, ...developerPartnersData, ...developerPartnersData].map((partner, idx) => (
              <div 
                key={`${partner.id}-${idx}`}
                className="w-[190px] sm:w-[220px] md:w-[250px] lg:w-[calc(20vw-24px)] max-w-[250px] h-[105px] mx-2.5 bg-white border border-neutral-200/80 rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex items-center justify-center p-4 shrink-0 transition hover:border-black hover:shadow-md"
              >
                <span className="text-[14px] sm:text-[16px] font-bold tracking-wider text-neutral-800 uppercase select-none truncate">
                  {partner.logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        <style jsx global>{`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-270px * 6)); }
          }
          .animate-infinite-scroll {
            display: flex;
            animation: infinite-scroll 30s linear infinite;
          }
        `}</style>
      </section>

      {/* ================= SECTION 3: BROWSE HOT PROPERTIES ================= */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto bg-white">
        <div className="flex justify-between items-center mb-8 lg:mb-10">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-neutral-900 tracking-tight">
            Browse Hot Properties
          </h2>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scrollHotProperties('left')}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-200 hover:bg-neutral-800 hover:text-white text-neutral-700 flex items-center justify-center transition cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scrollHotProperties('right')}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-800 hover:bg-black text-white flex items-center justify-center transition cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div 
          ref={hotPropScrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {propertiesData.map((property) => (
            <div 
              key={property.id}
              className="min-w-[280px] sm:min-w-[310px] md:min-w-[340px] lg:min-w-[calc(25%-18px)] flex-1 bg-neutral-900 rounded-[24px] overflow-hidden shadow-xl flex flex-col justify-between group relative border border-neutral-800 snap-start shrink-0"
            >
              <div className="relative h-[350px] sm:h-[380px] w-full overflow-hidden bg-neutral-950">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-black/40 z-10"></div>
                <img src={property.image} alt={property.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                {property.handover && (
                  <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-[11px] font-medium border border-white/15">
                    {property.handover}
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-20 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-white tracking-tight">{property.title}</h3>
                <p className="text-[13px] text-neutral-300 flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                  {property.location}
                </p>
                <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center text-xs">
                  <span className="text-neutral-400">Starting Price :</span>
                  <span className="text-white font-bold text-[14px] sm:text-[15px]">{property.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 4: EXPLORE SIGNATURE NEIGHBORHOODS ================= */}
      <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-16 selection:bg-black selection:text-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-4 relative flex flex-col justify-between py-2 min-h-[420px]">
            <div className="relative z-10">
              <div className="w-12 h-[2px] bg-black mb-6"></div>
              
              <h2 className="text-[32px] sm:text-[38px] font-normal text-[#2b2b2b] tracking-tight leading-[1.15]">
                Explore Signature <br />
                <span className="font-bold">Neighborhoods</span>
              </h2>
              
              <p className="text-[13.5px] sm:text-[14.5px] text-[#666666] font-normal leading-relaxed mt-5 max-w-[340px]">
                Discover Dubai&apos;s most desirable communities, each offering a unique lifestyle, prime location, and modern living experience.
              </p>

              <div className="mt-8">
                <Link 
                  href="#"
                  className="inline-flex items-center justify-between bg-black hover:bg-neutral-800 text-white text-[13px] font-medium tracking-wider px-6 py-3.5 rounded-[6px] shadow-sm transition group w-[170px]"
                >
                  <span>EXPLORE ALL</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative mt-12 pt-6 flex items-center justify-between z-10">
              <div className="absolute -bottom-10 left-0 right-0 h-40 opacity-25 pointer-events-none overflow-hidden z-0">
                <svg className="w-full h-full text-[#8c8275]" viewBox="0 0 400 200" fill="none" stroke="currentColor">
                  <path d="M0 50 Q 80 120, 160 60 T 320 100 T 400 40" strokeWidth="1.2" />
                  <path d="M0 120 Q 100 40, 220 140 T 400 80" strokeWidth="0.8" />
                </svg>
              </div>

              <div className="flex items-center gap-3 relative z-10">
                <button 
                  onClick={() => scrollNeighborhoods('left')}
                  className="w-12 h-12 rounded-full bg-neutral-300 hover:bg-neutral-400 text-black flex items-center justify-center transition shadow-md cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={() => scrollNeighborhoods('right')}
                  className="w-12 h-12 rounded-full bg-black hover:bg-neutral-800 text-white flex items-center justify-center transition shadow-md cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 overflow-hidden">
            <div 
              ref={neighborhoodScrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {neighborhoodsData.map((item, index) => (
                <div 
                  key={item.id}
                  className="min-w-[310px] sm:min-w-[380px] md:min-w-[440px] h-[480px] sm:h-[520px] rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] relative flex flex-col justify-between group snap-start shrink-0 select-none bg-neutral-900"
                >
                  <div className="absolute inset-0 w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 z-10"></div>
                    <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" />
                  </div>

                  <div className="relative z-20 p-6 sm:p-7 flex justify-start">
                    <span className="bg-white/95 backdrop-blur-md text-[#2b2b2b] font-bold px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] tracking-wider uppercase shadow-md">
                      {item.propertiesCount}
                    </span>
                  </div>

                  <div className="relative z-20 p-6 sm:p-8 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/60 to-transparent">
                    <h3 className="text-[26px] sm:text-[30px] font-bold text-white tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] sm:text-[14.5px] text-neutral-300 font-normal mt-2 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-center">
                      <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-white/10 shadow-inner">
                        {neighborhoodsData.map((_, dotIdx) => (
                          <span 
                            key={dotIdx} 
                            className={`rounded-full transition-all duration-300 ${activeNeighborhoodIndex === dotIdx ? 'w-6 h-2 bg-black' : 'w-2 h-2 bg-white/40'}`}
                          ></span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 5: PROPERTY CATEGORY CARDS ================= */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categoriesData.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="group relative h-[520px] sm:h-[560px] rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.12)] flex flex-col justify-between transition-transform duration-500 hover:-translate-y-1.5 cursor-pointer bg-[#332e29]"
            >
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#4a4239] via-[#4a4239]/60 to-black/30 z-10"></div>
                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>

              <div className="relative z-20 p-6 sm:p-8 flex justify-start">
                <span className="text-white font-semibold text-[11px] sm:text-[12px] tracking-widest uppercase drop-shadow-md">
                  {item.categoryTag}
                </span>
              </div>

              <div className="relative z-20 bg-[#010101] p-6 sm:p-8 flex flex-col justify-end mt-auto border-t border-white/10 shadow-[0_-10px_20px_rgba(0,0,0,0.2)]">
                <h3 className="text-[22px] sm:text-[25px] font-bold text-white tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-[13.5px] sm:text-[14.5px] text-[#e0dad1] font-normal mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ================= SECTION 6: UAE GOLDEN VISA ================= */}
      <section className="w-full bg-white py-12 px-0 overflow-hidden">
        <div className="w-full bg-[#eaeaea] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between min-h-[360px] shadow-sm">
          
          <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center z-10">
            <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] font-normal text-[#4a4a4a] tracking-tight leading-[1.2]">
              Unlock Your Golden Visa With VGT
            </h2>
            <p className="text-[12px] sm:text-[13px] text-[#6b6b6b] font-normal mt-3 leading-relaxed max-w-[460px]">
              Invest in Dubai real estate and unlock exclusive Golden Visa benefits for a secure future, premium lifestyle, and long-term UAE residency.
            </p>
            <div className="mt-6">
              <a
                href="#golden-visa-consultation"
                className="inline-flex items-center justify-center bg-black hover:bg-neutral-800 text-white text-[12px] font-medium px-5 py-3 rounded-[4px] shadow transition duration-300"
              >
                Get Golden Visa Consultation
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-full flex items-center justify-end relative z-20 py-6 lg:py-0 pr-0 lg:pr-12">
            <img 
              src="https://drehomes.com/images/bg/Golden-Visa-14.png" 
              alt="Unlock Your Golden Visa With VGT" 
              className="w-full max-w-[620px] h-auto object-contain transform lg:translate-x-2 drop-shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ================= SECTION 7: VGT EXCLUSIVE SALES PARTNERS ================= */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12 border-t border-neutral-100">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex justify-center mb-3">
              <Image 
                src="/4-removebg-preview.png" 
                alt="VGT Logo" 
                width={200}
                height={60}
                className="w-48 h-auto"
              />
            </div>
            <p className="text-[11.5px] sm:text-[12.5px] tracking-[0.2em] uppercase text-neutral-500 font-medium mb-2">
              STRONG PARTNERSHIPS. ICONIC DEVELOPMENTS.
            </p>
            <h2 className="text-[26px] sm:text-[32px] font-bold text-neutral-900 tracking-tight">
              VGT Exclusive Sales Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            
            <div className="bg-white border border-neutral-200/90 rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex flex-col transition hover:shadow-xl group">
              <div className="relative h-[340px] sm:h-[400px] w-full bg-neutral-950 overflow-hidden">
                <img 
                  src="https://drehomes.com/images/home-partner/Sharafi-deal1.jpeg" 
                  alt="Sharafi Developments Partnership" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                />
              </div>
              <div className="p-6 sm:p-7 flex items-center justify-between bg-white border-t border-neutral-100">
                <span className="text-[14px] sm:text-[15px] font-bold tracking-widest text-neutral-900 uppercase">
                  SHARAFI
                </span>
                <p className="text-[13.5px] sm:text-[14.5px] text-neutral-600 font-medium text-right">
                  Shaping Coastal Living with Sharafi Developments
                </p>
              </div>
            </div>

            <div className="bg-white border border-neutral-200/90 rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex flex-col transition hover:shadow-xl group">
              <div className="relative h-[340px] sm:h-[400px] w-full bg-neutral-950 overflow-hidden">
                <img 
                  src="https://drehomes.com/images/home-partner/gulf-deal1.jpeg" 
                  alt="Gulf Land Property Developers Partnership" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                />
              </div>
              <div className="p-6 sm:p-7 flex items-center justify-between bg-white border-t border-neutral-100">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-neutral-800" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <span className="text-[13px] sm:text-[14px] font-bold tracking-wide text-neutral-900 uppercase">
                    GULF LAND
                  </span>
                </div>
                <p className="text-[13.5px] sm:text-[14.5px] text-neutral-600 font-medium text-right max-w-[260px] sm:max-w-[300px]">
                  Elevating Luxury Living with Gulf Land Property Developers
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 8: ABOUT VGT ================= */}
      <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-[20px] overflow-hidden shadow-xl aspect-[16/10] bg-neutral-900 group">
              <img 
                src="https://drehomes.com/admin_nsrdwsc/assets/media/project/home-card-img/home_card_1788501283_6052.jpg" 
                alt="About VGT Office Interior" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-[280px] bg-black/90 backdrop-blur-md p-4 rounded-[12px] text-white shadow-lg border border-white/10">
                <p className="text-[11.5px] sm:text-[12.5px] font-normal leading-relaxed">
                  Your Gateway to Premium Dubai Real Estate Opportunities.
                </p>
                <div className="mt-1 text-right text-white/70 text-xs font-serif">&ldquo;&rdquo;</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-[11px] sm:text-[12px] font-semibold tracking-widest text-[#6b6b6b] uppercase">
              About VGT
            </span>
            <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] font-normal text-[#4a4a4a] tracking-tight leading-[1.2] mt-1.5">
              Elevating Real Estate with Trust and Excellence.
            </h2>
            <p className="text-[12px] sm:text-[13px] text-[#6b6b6b] font-normal mt-3 leading-relaxed max-w-[520px]">
              Connecting clients to Dubai&apos;s premium properties through trusted real estate expertise, strategic market insight, and personalized property solutions.
            </p>
            <div className="mt-6">
              <a
                href="#about-us"
                className="inline-flex items-center justify-center bg-black hover:bg-neutral-800 text-white text-[12px] font-medium px-5 py-3 rounded-[4px] shadow transition duration-300"
              >
                About Us
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 9: COMPANY STATISTICS / MILESTONES ================= */}
      <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12 border-b border-neutral-200">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white border border-neutral-200 rounded-[16px] p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center justify-between relative overflow-hidden group hover:border-black transition duration-300">
            <div>
              <h3 className="text-[32px] sm:text-[38px] font-bold text-neutral-900 tracking-tight leading-none">
                19+
              </h3>
              <p className="text-[12.5px] text-neutral-500 font-normal mt-2">
                Years of Excellence
              </p>
              <div className="w-8 h-[2px] bg-black mt-4"></div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-100 shadow-sm flex items-center justify-center text-[#1a1a1a] shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div className="absolute right-20 top-4 bottom-4 w-[1px] bg-neutral-100 hidden sm:block"></div>
          </div>

          <div className="bg-white border border-neutral-200 rounded-[16px] p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center justify-between relative overflow-hidden group hover:border-black transition duration-300">
            <div>
              <h3 className="text-[32px] sm:text-[38px] font-bold text-neutral-900 tracking-tight leading-none">
                5000+
              </h3>
              <p className="text-[12.5px] text-neutral-500 font-normal mt-2">
                Happy Homeowners
              </p>
              <div className="w-8 h-[2px] bg-black mt-4"></div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-100 shadow-sm flex items-center justify-center text-[#1a1a1a] shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="absolute right-20 top-4 bottom-4 w-[1px] bg-neutral-100 hidden sm:block"></div>
          </div>

          <div className="bg-white border border-neutral-200 rounded-[16px] p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center justify-between relative overflow-hidden group hover:border-black transition duration-300">
            <div>
              <h3 className="text-[32px] sm:text-[38px] font-bold text-neutral-900 tracking-tight leading-none">
                85+
              </h3>
              <p className="text-[12.5px] text-neutral-500 font-normal mt-2">
                Honors Received
              </p>
              <div className="w-8 h-[2px] bg-black mt-4"></div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-100 shadow-sm flex items-center justify-center text-[#1a1a1a] shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="absolute right-20 top-4 bottom-4 w-[1px] bg-neutral-100 hidden sm:block"></div>
          </div>

          <div className="bg-white border border-neutral-200 rounded-[16px] p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center justify-between relative overflow-hidden group hover:border-black transition duration-300">
            <div>
              <h3 className="text-[32px] sm:text-[38px] font-bold text-neutral-900 tracking-tight leading-none">
                150+
              </h3>
              <p className="text-[12.5px] text-neutral-500 font-normal mt-2">
                Dedicated Agents
              </p>
              <div className="w-8 h-[2px] bg-black mt-4"></div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-100 shadow-sm flex items-center justify-center text-[#1a1a1a] shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="absolute right-20 top-4 bottom-4 w-[1px] bg-neutral-100 hidden sm:block"></div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 10: MEET THE VISION BEHIND VGT ================= */}
      <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-[11px] sm:text-[12px] font-semibold tracking-widest text-[#6b6b6b] uppercase">
              Meet the vision behind VGT
            </span>
            <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] font-normal text-[#4a4a4a] tracking-tight leading-[1.2] mt-1.5">
              Built on relationships, driven by results.
            </h2>
            <p className="text-[12px] sm:text-[13px] text-[#6b6b6b] font-normal mt-3 leading-relaxed max-w-[520px]">
              Founded on trust and expertise, VGT's founders are committed to helping clients make confident real estate decisions through honest guidance and deep market knowledge.
            </p>
            <div className="mt-6">
              <a
                href="#watch-our-story"
                className="inline-flex items-center justify-center bg-black hover:bg-neutral-800 text-white text-[12px] font-medium px-5 py-3 rounded-[4px] shadow transition duration-300 cursor-pointer"
              >
                Watch Our Story
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-[20px] overflow-hidden shadow-xl aspect-[16/10] bg-neutral-900 group">
              <img 
                src="https://drehomes.com/admin_nsrdwsc/assets/media/project/home-card-img/home_card_1788501283_6052.jpg" 
                alt="Meet the vision behind VGT Founders" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 11: COMMITTED TO YOUR LUXURY LIVING ================= */}
      <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            <div className="relative rounded-[20px] overflow-hidden shadow-xl aspect-[16/10] bg-neutral-900 group">
              <img 
                src="https://drehomes.com/admin_nsrdwsc/assets/media/project/home-card-img/home_card_1779270531_1097.jpg" 
                alt="Committed to your luxury living" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center order-1 lg:order-2">
            <span className="text-[11px] sm:text-[12px] font-semibold tracking-widest text-[#6b6b6b] uppercase">
              Excellence in Every Detail
            </span>
            <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] font-normal text-[#4a4a4a] tracking-tight leading-[1.2] mt-1.5">
              Committed to your luxury living experience.
            </h2>
            <p className="text-[12px] sm:text-[13px] text-[#6b6b6b] font-normal mt-3 leading-relaxed max-w-[520px]">
              We curate extraordinary properties that reflect your personal style and ambitions, ensuring every step of your real estate journey is seamless and rewarding.
            </p>
            <div className="mt-6">
              <a
                href="#explore-portfolio"
                className="inline-flex items-center justify-center bg-black hover:bg-neutral-800 text-white text-[12px] font-medium px-5 py-3 rounded-[4px] shadow transition duration-300 cursor-pointer"
              >
                Explore Portfolio
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 12: YOUR TRUSTED PARTNER IN LUXURY INVESTMENTS ================= */}
      <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12 overflow-hidden border-t border-neutral-100">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-[11px] sm:text-[12px] font-semibold tracking-widest text-[#6b6b6b] uppercase">
              Tailored Expertise
            </span>
            <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] font-normal text-[#4a4a4a] tracking-tight leading-[1.2] mt-1.5">
              Your trusted partner in luxury investments.
            </h2>
            <p className="text-[12px] sm:text-[13px] text-[#6b6b6b] font-normal mt-3 leading-relaxed max-w-[520px]">
              We provide end-to-end investment advisory services designed to maximize portfolio returns while delivering exceptional service at every stage of ownership.
            </p>
            <div className="mt-6">
              <a
                href="#learn-more"
                className="inline-flex items-center justify-center bg-black hover:bg-neutral-800 text-white text-[12px] font-medium px-5 py-3 rounded-[4px] shadow transition duration-300 cursor-pointer"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-[20px] overflow-hidden shadow-xl aspect-[16/10] bg-neutral-900 group">
              <img 
                src="https://drehomes.com/admin_nsrdwsc/assets/media/project/home-card-img/home_card_1784718478_9585.jpg" 
                alt="Tailored Expertise and Investments" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 13: SMART PROPERTY CARE BANNER ================= */}
      <section className="w-full bg-black py-14 px-6 sm:px-10 lg:px-16 relative overflow-hidden text-white">
        <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-15 pointer-events-none hidden lg:flex items-center justify-end overflow-hidden">
          <svg className="w-full h-full text-white" viewBox="0 0 600 200" fill="currentColor">
            <path d="M400 120h20v80h-20zM430 100h25v100h-25zM465 80h30v120h-30zM505 60h25v140h-25zM540 90h20v110h-20z" opacity="0.6"/>
            <path d="M100 150h300v2H100z" />
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex flex-col max-w-2xl text-center lg:text-left">
            <h2 className="text-[26px] sm:text-[32px] font-bold tracking-tight leading-tight">
              Smart Property Care
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] text-[#e8e2dc] font-normal mt-2.5 leading-relaxed">
              VGT handles everything from tenant management and maintenance to rent collection and reporting, ensuring your property stays profitable, protected, and stress-free.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href="#discover-services"
              className="bg-white hover:bg-neutral-100 text-neutral-900 text-[13px] font-semibold px-6 py-3.5 rounded-[8px] shadow transition duration-300 cursor-pointer"
            >
              Discover More Services
            </a>
            <a
              href="#free-consultation"
              className="bg-transparent hover:bg-white/10 text-white border border-white/80 text-[13px] font-semibold px-6 py-3.5 rounded-[8px] transition duration-300 cursor-pointer"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ================= SECTION 14: TESTIMONIALS (WORDS THAT BUILD TRUST) ================= */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden border-t border-neutral-100">
        <div className="max-w-[1450px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          
          {/* Left Feature Card with Office Interior & Google Rating Overlay */}
          <div className="w-full lg:w-[42%] shrink-0">
            <div className="relative rounded-[28px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)] h-[440px] sm:h-[480px] w-full group">
              <img 
                src="https://drehomes.com/admin_nsrdwsc/assets/media/project/home-card-img/home_card_1788501283_6052.jpg" 
                alt="Office Interior" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Google Rating Overlay Box */}
              <div className="absolute inset-x-6 top-6 bg-black/40 backdrop-blur-md border border-white/20 p-5 rounded-[20px] shadow-lg flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.1 8.9 5 12 5z"/>
                      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"/>
                      <path fill="#FBBC05" d="M5.3 14.3c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.6 6.8C.6 8.8 0 11 0 13.3s.6 4.5 1.6 6.5l3.7-2.9z"/>
                      <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.1-6.7-5.3L1.6 15.9C3.5 19.7 7.4 23 12 23z"/>
                    </svg>
                    <span className="text-white text-sm font-medium">Google rating</span>
                  </div>
                  <span className="text-white text-lg font-bold">4.5</span>
                </div>
                <div className="flex items-center gap-1 text-[#FBBC05]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
              </div>

              {/* Title & Description Overlay at Bottom */}
              <div className="absolute inset-x-6 bottom-6 flex flex-col gap-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Words That Build Trust
                </h3>
                <p className="text-[13px] text-neutral-200 font-normal">
                  We take pride in creating smooth and rewarding real estate experiences across Dubai.
                </p>
              </div>
            </div>
          </div>

          {/* Right Testimonial Cards Carousel */}
          <div className="w-full lg:w-[58%] relative overflow-hidden">
            <div 
              ref={testimonialScrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth py-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonialsData.map((item) => (
                <div 
                  key={item.id}
                  className="min-w-[300px] sm:min-w-[340px] max-w-[360px] bg-white border border-[#e8dfd5] rounded-[24px] p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between snap-start shrink-0 relative group hover:border-black transition duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-full ${item.avatarBg} flex items-center justify-center text-white font-bold text-base overflow-hidden shrink-0 shadow-sm`}>
                          {item.avatarImg ? (
                            <img src={item.avatarImg} alt={item.name} className="w-full h-full object-cover" />
                          ) : (
                            item.avatarText
                          )}
                        </div>
                        <div>
                          <h4 className="text-[15px] font-bold text-neutral-900 leading-snug">{item.name}</h4>
                          <p className="text-[12px] text-neutral-400 font-normal">{item.timeAgo}</p>
                        </div>
                      </div>
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                        <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.1 8.9 5 12 5z"/>
                        <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"/>
                        <path fill="#FBBC05" d="M5.3 14.3c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.6 6.8C.6 8.8 0 11 0 13.3s.6 4.5 1.6 6.5l3.7-2.9z"/>
                        <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.1-6.7-5.3L1.6 15.9C3.5 19.7 7.4 23 12 23z"/>
                      </svg>
                    </div>

                    <div className="flex items-center gap-1 text-[#FBBC05] mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                      <svg className="w-3.5 h-3.5 fill-blue-500 ml-1" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>

                    <p className="text-[13.5px] text-neutral-700 font-normal leading-relaxed">
                      {item.review}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <a href="#read-more" className="text-[13px] font-medium text-neutral-900 underline hover:text-black transition">
                      Read more
                    </a>
                    <span className="text-black font-serif text-2xl leading-none">&ldquo;&rdquo;</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Navigation Buttons */}
            <div className="flex items-center justify-end gap-3 mt-6">
              <button 
                onClick={() => scrollTestimonials('left')}
                className="w-10 h-10 rounded-full border border-neutral-300 hover:bg-neutral-900 hover:text-white text-neutral-700 flex items-center justify-center transition cursor-pointer shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => scrollTestimonials('right')}
                className="w-10 h-10 rounded-full border border-neutral-300 hover:bg-neutral-900 hover:text-white text-neutral-700 flex items-center justify-center transition cursor-pointer shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 15: FOOTER ================= */}
      <footer className="w-full bg-neutral-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <Image 
                  src="/2-removebg-preview.png" 
                  alt="VGT Logo" 
                  width={180}
                  height={60}
                  className="w-40 h-auto"
                />
              </div>

              <p className="text-[12px] font-semibold tracking-wider text-neutral-300 uppercase mb-3">
                FOLLOW US
              </p>
              
              <div className="flex items-center gap-2 mb-8">
                <a href="#" className="w-9 h-9 bg-white text-black rounded-[6px] flex items-center justify-center hover:bg-black hover:text-white transition shadow">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 bg-white text-black rounded-[6px] flex items-center justify-center hover:bg-black hover:text-white transition shadow">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 bg-white text-black rounded-[6px] flex items-center justify-center hover:bg-black hover:text-white transition shadow">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 bg-white text-black rounded-[6px] flex items-center justify-center hover:bg-black hover:text-white transition shadow">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 bg-white text-black rounded-[6px] flex items-center justify-center hover:bg-black hover:text-white transition shadow">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <p className="text-[12px] font-bold text-neutral-200 tracking-wide">
                PERMIT NUMBER: 1007935000
              </p>
            </div>
          </div>

          {/* Column 2: Communities */}
          <div>
            <h3 className="text-[14px] font-bold tracking-wider uppercase text-white mb-6 border-b border-white/20 pb-2">
              COMMUNITIES
            </h3>
            <ul className="flex flex-col gap-3.5 text-[13.5px] text-neutral-300">
              <li>
                <a href="#" className="hover:text-white flex items-center justify-between group">
                  <span className="flex items-center gap-2"><span className="text-xs text-black">&#9658;</span> Jumeirah Village Circle</span>
                  <span className="text-neutral-400 font-medium">56</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white flex items-center justify-between group">
                  <span className="flex items-center gap-2"><span className="text-xs text-black">&#9658;</span> Dubai Hills Estate</span>
                  <span className="text-neutral-400 font-medium">50</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white flex items-center justify-between group">
                  <span className="flex items-center gap-2"><span className="text-xs text-black">&#9658;</span> Business Bay</span>
                  <span className="text-neutral-400 font-medium">48</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white flex items-center justify-between group">
                  <span className="flex items-center gap-2"><span className="text-xs text-black">&#9658;</span> Dubai Creek Harbour</span>
                  <span className="text-neutral-400 font-medium">46</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white flex items-center justify-between group">
                  <span className="flex items-center gap-2"><span className="text-xs text-black">&#9658;</span> Town Square</span>
                  <span className="text-neutral-400 font-medium">43</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Developers */}
          <div>
            <h3 className="text-[14px] font-bold tracking-wider uppercase text-white mb-6 border-b border-white/20 pb-2">
              DEVELOPERS
            </h3>
            <ul className="flex flex-col gap-3.5 text-[13.5px] text-neutral-300">
              <li>
                <a href="#" className="hover:text-white flex items-center justify-between group">
                  <span className="flex items-center gap-2"><span className="text-xs text-black">&#9658;</span> Emaar Properties</span>
                  <span className="text-neutral-400 font-medium">258</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white flex items-center justify-between group">
                  <span className="flex items-center gap-2"><span className="text-xs text-black">&#9658;</span> Damac Properties</span>
                  <span className="text-neutral-400 font-medium">102</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white flex items-center justify-between group">
                  <span className="flex items-center gap-2"><span className="text-xs text-black">&#9658;</span> Sobha Realty</span>
                  <span className="text-neutral-400 font-medium">64</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white flex items-center justify-between group">
                  <span className="flex items-center gap-2"><span className="text-xs text-black">&#9658;</span> Aldar</span>
                  <span className="text-neutral-400 font-medium">48</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white flex items-center justify-between group">
                  <span className="flex items-center gap-2"><span className="text-xs text-black">&#9658;</span> Nshama</span>
                  <span className="text-neutral-400 font-medium">42</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div>
            <h3 className="text-[14px] font-bold tracking-wider uppercase text-white mb-6 border-b border-white/20 pb-2">
              GET IN TOUCH
            </h3>
            <ul className="flex flex-col gap-3.5 text-[13px] text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-xs text-black mt-1">&#9658;</span>
                <span><strong>Headquarters:</strong> 2401 Exchange Tower - Business Bay - Dubai - United Arab Emirates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xs text-black mt-1">&#9658;</span>
                <span><strong>Town Square Branch:</strong> 2401 Exchange Tower - Business Bay - Dubai - United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xs text-black">&#9658;</span>
                <span><strong>Toll Free:</strong> 800 37373</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xs text-black">&#9658;</span>
                <span><strong>Hotline :</strong> +971 54 583 4608</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xs text-black">&#9658;</span>
                <span><strong>Mail :</strong> info@vgtproperties.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Links */}
        <div className="max-w-[1400px] mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 text-[12px] text-neutral-300">
          <p className="max-w-3xl leading-relaxed">
            VGT Real Estate Broker is a company registered in Dubai, United Arab Emirates (License No. 599208). We are regulated by the Real Estate Regulatory Agency under office number 652.
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <Link href="#" className="hover:text-white underline">Privacy Policy</Link>
            <span>|</span>
            <Link href="#" className="hover:text-white underline">T&amp;C</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
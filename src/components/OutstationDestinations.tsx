import React from 'react';
import { MapPin, Clock, Star, ArrowRight, Plane, Mountain, Building, Waves, Phone, MessageCircle } from 'lucide-react';

const OutstationDestinations = () => {
  const destinations = [
    {
      name: 'Chennai',
      image: 'https://fastridedroptaxi.com/assets/chennai.png',
      distance: '500 km',
      duration: '7-8 hours',
      description: 'Capital city with Marina Beach and IT corridor',
      fare: '₹7,500',
      icon: Building,
      highlights: ['Marina Beach', 'Central Railway Station', 'IT Parks', 'Temples']
    },
    {
      name: 'Bangalore',
      image: 'https://fastridedroptaxi.com/assets/bangolore.png',
      distance: '360 km',
      duration: '6-7 hours',
      description: 'Silicon Valley of India with gardens and tech hubs',
      fare: '₹5,300',
      icon: Building,
      highlights: ['Lalbagh Garden', 'Cubbon Park', 'IT Companies', 'Pubs & Cafes']
    },
    {
      name: 'Ooty',
      image: 'https://fastridedroptaxi.com/assets/ooty-hillstation.png',
      distance: '85 km',
      duration: '2.5 hours',
      description: 'Queen of Hill Stations with tea gardens',
      fare: '₹2,600',
      icon: Mountain,
      highlights: ['Tea Gardens', 'Botanical Garden', 'Toy Train', 'Lake']
    },
    {
      name: 'Kodaikanal',
      image: 'https://fastridedroptaxi.com/assets/kodaikanal-hillstation.png',
      distance: '180 km',
      duration: '4 hours',
      description: 'Princess of Hill Stations with pristine lakes',
      fare: '₹3,500',
      icon: Mountain,
      highlights: ['Kodai Lake', 'Coakers Walk', 'Bryant Park', 'Pillar Rocks']
    },
    {
      name: 'Madurai',
      image: 'https://fastridedroptaxi.com/assets/meenakshi-amman-temple.png',
      distance: '220 km',
      duration: '4-5 hours',
      description: 'Temple city with Meenakshi Amman Temple',
      fare: '₹3,400',
      icon: Building,
      highlights: ['Meenakshi Temple', 'Thirumalai Nayak Palace', 'Gandhi Museum', 'Local Markets']
    },
    {
      name: 'Kanyakumari',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVYkyFjgbLCZ9CbI90sWef31in22ymqHp-KQ&s',
      distance: '450 km',
      duration: '8-9 hours',
      description: 'Southernmost tip with Thiruvalluvar Statue',
      fare: '₹7,500',
      icon: Waves,
      highlights: ['Thiruvalluvar Statue', 'Sunset Point', 'Vivekananda Rock', 'Beach']
    },
    {
      name: 'Mysore',
      image: 'https://fastridedroptaxi.com/assets/mysore-palace.png',
      distance: '280 km',
      duration: '5-6 hours',
      description: 'City of Palaces with rich heritage',
      fare: '₹4,800',
      icon: Building,
      highlights: ['Mysore Palace', 'Chamundi Hills', 'Brindavan Gardens', 'Silk Sarees']
    },
    {
      name: 'Munnar',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '160 km',
      duration: '4 hours',
      description: 'Kerala hill station with spice plantations',
      fare: '₹3,500',
      icon: Mountain,
      highlights: ['Tea Plantations', 'Eravikulam Park', 'Mattupetty Dam', 'Spice Gardens']
    },
    {
      name: 'Pondicherry',
      image: 'https://fastridedroptaxi.com/assets/pondicherry.png',
      distance: '380 km',
      duration: '6-7 hours',
      description: 'French colonial town with beaches',
      fare: '₹5,800',
      icon: Waves,
      highlights: ['French Quarter', 'Auroville', 'Beach Promenade', 'Cafes']
    },
    {
      name: 'Salem',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPal-LjTPjgheGw6SAFyoGNxZE4t3bLUtmw&s',
      distance: '165 km',
      duration: '3 hours',
      description: 'A vibrant city in Tamil Nadu, known for hills, steel, and mangoes.',
      fare: '₹2,750',
      icon: Building,
      highlights: ['Yercaud Hills', '1008 Lingam Temple', 'Sugavaneshwarar Temple', 'Kailasanathar Temple']
    },
    {
      name: 'Rameshwaram',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuAHXKMueQqj8hJT_9c-3wEIQkeKAwNM84Mg&s',
      distance: '380 km',
      duration: '6 hours',
      description: 'Holy island with Ramanathaswamy Temple',
      fare: '₹5,800',
      icon: Waves,
      highlights: ['Ramanathaswamy Temple', 'Pamban Bridge', 'Dhanushkodi', 'Holy Waters']
    },
    {
      name: 'Cochin (Kochi)',
      image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '165 km',
      duration: '4-5 hours',
      description: 'Queen of Arabian Sea with backwaters',
      fare: '₹3,550',
      icon: Waves,
      highlights: ['Chinese Fishing Nets', 'Fort Kochi', 'Backwaters', 'Spice Markets']
    },
      {
    name: 'Trichy',
    image: 'https://fastridedroptaxi.com/assets/Srirangam-Temple.png',
    category: 'Temple',
    distance: '200 km',
    duration: '5-6 hours',
    description: 'Historic city with Rock Fort and bustling markets',
    fare: '₹3,600',    
    icon: Building,
    highlights: ['Rock Fort', 'Market Streets', 'Temples', 'Cultural Sites']
   },
     {
      name: 'Thanjavur',
     image: 'https://fastridedroptaxi.com/assets/BrihadisvaraTemple.png',
     category: 'Temple',
     distance: '350 km',
     duration: '6-7 hours',
     description: 'Historic city famous for the Brihadeeswarar Temple, Chola architecture, and rich cultural heritage',
     fare: '₹4,500',  
     icon: Building,
     highlights: ['Brihadeeswarar Temple', 'Chola Architecture', 'Art & Culture', 'UNESCO Heritage']
    },
    {
    name: 'Tirupati',
    image: 'https://fastridedroptaxi.com/assets/tirupati.png',
    category: 'Temple',
    distance: '378 km',
    duration: '7 hours',
    description: 'Famous pilgrimage city with the world-renowned Venkateswara Temple',
    fare: '₹7,400', 
    icon: Building,
    highlights: ['Tirupati Balaji Temple', 'Spiritual Experience', 'Pilgrimage', 'Cultural Sites']
    },
    {
    name: 'Coimbatore',
    image: 'https://fastridedroptaxi.com/assets/coimbatore-isha.png',
    category: 'City',
    distance: '210 km',
    duration: '5-6 hours',
    description: 'Industrial city known as Manchester of South India with temples and textile industry',
    fare: '₹3,400', 
    icon: Building,
    highlights: ['Textile Industry', 'Marudamalai Temple', 'Industrial Hub', 'Gateway to Kerala']
    }
    
  ];

 return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Outstation Destinations
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Travel across South India with Fastridedroptaxi. Professional drivers,
            comfortable vehicles, and transparent pricing for all your outstation needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    <destination.icon className="h-5 w-5 text-blue-600" />
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                  {destination.fare}
                </div>

                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl sm:text-2xl font-bold mb-1">{destination.name}</h4>
                  <div className="flex items-center space-x-3 text-xs sm:text-sm">
                    <div className="flex items-center bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{destination.distance}</span>
                    </div>
                    <div className="flex items-center bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{destination.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                  {destination.description}
                </p>

                <div className="mb-4 sm:mb-6">
                  <h5 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                    Popular Attractions:
                  </h5>
                  <div className="grid grid-cols-2 gap-1 sm:gap-2">
                    {destination.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-xs sm:text-sm text-gray-600"
                      >
                        <Star className="h-3 w-3 text-yellow-500 mr-1 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedTrip(destination)}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center space-x-2 group shadow-md"
                >
                  <span>Book Trip</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedTrip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setSelectedTrip(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedTrip.name}</h3>
            <p className="text-gray-700 mb-4">{selectedTrip.description}</p>
            <div className="flex justify-between mb-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-600" />
                <span>{selectedTrip.distance}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-600" />
                <span>{selectedTrip.duration}</span>
              </div>
            </div>
            <div className="mb-4">
              <h5 className="font-semibold text-gray-900 mb-2">Popular Attractions:</h5>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                {selectedTrip.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
            <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition-all">
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default OutstationDestinations;


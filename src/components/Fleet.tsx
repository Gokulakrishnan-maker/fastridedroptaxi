import React from 'react';
import { Users, Luggage, Wifi, Snowflake } from 'lucide-react';

const Fleet = () => {
  const vehicles = [
    {
      name: 'SEDAN',
      image: 'https://fastridedroptaxi.com/assets/sedan.png',
      passengers: '1-4',
      luggage: '2 bags',
      features: ['Air Conditioning', 'GPS Tracking', 'Phone Charger'],
      tariff: {
        oneWay: { ratePerKm: '₹14/KM', driverBata: '₹400', toll: 'One way Toll' },
        roundTrip: { ratePerKm: '₹13/KM', driverBata: '₹400', toll: 'Up & Down Toll' }
      }
    },
    {
      name: 'ETIOS',
      image: 'https://fastridedroptaxi.com/assets/etios.png',
      passengers: '1-4',
      luggage: '2 bags',
      features: ['Air Conditioning', 'GPS Tracking', 'Comfortable Seating'],
      tariff: {
        oneWay: { ratePerKm: '₹15/KM', driverBata: '₹400', toll: 'One way Toll' },
        roundTrip: { ratePerKm: '₹14/KM', driverBata: '₹400', toll: 'Up & Down Toll' }
      }
    },
    {
      name: 'SUV',
      image: 'https://fastridedroptaxi.com/assets/suv.png',
      passengers: '1-6',
      luggage: '4 bags',
      features: ['Luxury Interior', 'WiFi Available', 'Extra Space'],
      tariff: {
        oneWay: { ratePerKm: '₹19/KM', driverBata: '₹400', toll: 'One way Toll' },
        roundTrip: { ratePerKm: '₹18/KM', driverBata: '₹400', toll: 'Up & Down Toll' }
      }
    },
    {
      name: 'INNOVA',
      image: 'https://fastridedroptaxi.com/assets/innova.png',
      passengers: '1-8',
      luggage: '3 bags',
      features: ['Premium Comfort', 'Business Amenities', 'Professional Driver'],
      tariff: {
        oneWay: { ratePerKm: '₹20/KM', driverBata: '₹400', toll: 'One way Toll' },
        roundTrip: { ratePerKm: '₹18/KM', driverBata: '₹400', toll: 'Up & Down Toll' }
      }
    },
    {
      name: 'INNOVA CRYSTA',
      image: 'https://fastridedroptaxi.com/assets/innova-crysta.png',
      passengers: '1-8',
      luggage: '3 bags',
      features: ['Premium Comfort', 'Business Amenities', 'Professional Driver'],
      tariff: {
        oneWay: { ratePerKm: '₹25/KM', driverBata: '₹400', toll: 'One way Toll' },
        roundTrip: { ratePerKm: '₹23/KM', driverBata: '₹400', toll: 'Up & Down Toll' }
      }
    }
  ];

  return (
    <section id="fleet" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated Road Lines */}
      <div className="absolute inset-0 bg-[url('https://i.imgur.com/Qp1QX2S.png')] bg-center bg-repeat opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Fleet</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience comfort and reliability — choose the perfect vehicle for your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:border-blue-500 transition-all duration-500 group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Moving Car Image */}
              <div className="relative overflow-hidden h-48 bg-gray-50 flex items-center justify-center">
                <motion.img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="h-40 object-contain"
                  animate={{ x: [0, 10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{vehicle.name}</h3>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{vehicle.passengers}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Luggage className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{vehicle.luggage}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {vehicle.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-6">
                  <p className="text-sm text-gray-700"><strong>One Way:</strong> {vehicle.tariff.oneWay.ratePerKm}, {vehicle.tariff.oneWay.driverBata}, {vehicle.tariff.oneWay.toll}</p>
                  <p className="text-sm text-gray-700"><strong>Round Trip:</strong> {vehicle.tariff.roundTrip.ratePerKm}, {vehicle.tariff.roundTrip.driverBata}, {vehicle.tariff.roundTrip.toll}</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
                >
                  Select Vehicle
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;

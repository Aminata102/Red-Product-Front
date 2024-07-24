import React from 'react';
import HotelCard from './HotelCard';
import hotelsData from './hotelsData'; 

function Accueil() {
  
    const firstRow = hotelsData.slice(0, 4);
    const secondRow = hotelsData.slice(4, 8);

    return (
        <div>
            <h2>Hôtels au Sénégal</h2>

            {/* Première ligne */}
            <div className="row">
                {firstRow.map((hotel, index) => (
                    <div key={index} className="col-md-3">
                        <HotelCard
                            name={hotel.name}
                            location={hotel.location}
                            description={hotel.description}
                            image={hotel.image}
                        />
                    </div>
                ))}
            </div>

            {/* Deuxième ligne */}
            <div className="row">
                {secondRow.map((hotel, index) => (
                    <div key={index} className="col-md-3">
                        <HotelCard
                            name={hotel.name}
                            location={hotel.location}
                            description={hotel.description}
                            image={hotel.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Accueil;

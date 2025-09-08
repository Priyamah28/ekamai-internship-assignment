import React, { useState } from 'react';

const PropertyListings = () => {
  const [filters, setFilters] = useState({
    type: 'all',
    location: '',
    priceRange: '',
    bedrooms: 'any'
  });

  const indianCities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad',
    'Chennai', 'Kolkata', 'Surat', 'Pune', 'Jaipur',
    'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane'
  ];

  const properties = [
    {
      id: 1,
      title: 'Luxury Apartment in Bandra',
      location: 'Mumbai',
      price: '₹2.5 Cr',
      type: 'apartment',
      bedrooms: 3,
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Modern Villa in Whitefield',
      location: 'Bangalore',
      price: '₹4.2 Cr',
      type: 'villa',
      bedrooms: 4,
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 3,
      title: 'Spacious 3BHK in Gurgaon',
      location: 'Delhi',
      price: '₹1.8 Cr',
      type: 'apartment',
      bedrooms: 3,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 4,
      title: 'Beach House in Chennai',
      location: 'Chennai',
      price: '₹3.5 Cr',
      type: 'house',
      bedrooms: 4,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 5,
      title: 'Affordable 2BHK in Pune',
      location: 'Pune',
      price: '₹85 L',
      type: 'apartment',
      bedrooms: 2,
      image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 6,
      title: 'Luxury Penthouse in Kolkata',
      location: 'Kolkata',
      price: '₹3.2 Cr',
      type: 'penthouse',
      bedrooms: 3,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    }
  ];

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const filteredProperties = properties.filter(property => {
    if (filters.type !== 'all' && property.type !== filters.type) return false;
    if (filters.location && property.location !== filters.location) return false;
    if (filters.bedrooms !== 'any' && property.bedrooms !== parseInt(filters.bedrooms)) return false;
    return true;
  });

  return (
    <section className="property-listings">
      <h2 className="section-title">Featured Properties</h2>
      
      <div className="filters">
        <div className="filter-group">
          <label>Property Type</label>
          <select 
            value={filters.type} 
            onChange={(e) => handleFilterChange('type', e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="house">House</option>
            <option value="penthouse">Penthouse</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label>Location</label>
          <select 
            value={filters.location} 
            onChange={(e) => handleFilterChange('location', e.target.value)}
          >
            <option value="">All Cities</option>
            {indianCities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
        
        <div className="filter-group">
          <label>Bedrooms</label>
          <select 
            value={filters.bedrooms} 
            onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
          >
            <option value="any">Any</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4">4+ BHK</option>
          </select>
        </div>
      </div>
      
      <div className="property-grid">
        {filteredProperties.map(property => (
          <div key={property.id} className={`property-card ${property.featured ? 'featured' : ''}`}>
            <div className="property-image">
              <img src={property.image} alt={property.title} />
              {property.featured && <span className="featured-badge">Featured</span>}
            </div>
            <div className="property-details">
              <h3>{property.title}</h3>
              <p className="property-location">
                <i className="fas fa-map-marker-alt"></i> {property.location}
              </p>
              <div className="property-features">
                <span><i className="fas fa-bed"></i> {property.bedrooms} Beds</span>
                <span><i className="fas fa-bath"></i> {property.bedrooms} Baths</span>
              </div>
              <div className="property-price">{property.price}</div>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyListings;
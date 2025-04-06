import React, { useState } from "react";
import { FaMapMarkerAlt, FaRupeeSign, FaMobileAlt, FaFileExport } from "react-icons/fa";

const filterOptions = [
  "Today",
  "This Week",
  "This Month",
  "Last Month",
  "Last 3 Months",
  "Last 6 Months",
  "Last 1 Year",
  "Total",
];

const dummyPhones = [
  {
    name: "iPhone 13 Pro Max",
    location: "Mumbai, Maharashtra",
    price: "₹95,000",
    image: "https://rukminim2.flixcart.com/image/850/1000/ktketu80/mobile/r/m/8/iphone-13-pro-max-mllj3hn-a-apple-original-imag6vpgphrzuffg.jpeg?q=90&crop=false",
  },
  {
    name: "Samsung Galaxy S22 Ultra",
    location: "Pune, Maharashtra",
    price: "₹85,000",
    image: "https://i5.walmartimages.com/seo/Open-Box-Samsung-Galaxy-S22-Ultra-5G-256GB-Factory-Unlocked-Graphite-Cellphone_882629ed-ca1a-49f8-ab6a-6ee6cc888f48.5434804dfa5d03e628bd0313d478a643.jpeg",
  },
  {
    name: "OnePlus 11R",
    location: "Nashik, Maharashtra",
    price: "₹38,000",
    image: "https://m.media-amazon.com/images/I/613SAOPmLeL.jpg",
  },
];

const ManagePhones = () => {
  const [selectedFilter, setSelectedFilter] = useState("Total");

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h2 style={styles.title}>Manage Phones</h2>
      
      </div>

      <div style={styles.filterContainer}>
        {filterOptions.map((option) => (
          <button
            key={option}
            className={`filter-hover ${selectedFilter === option ? "active-filter" : ""}`}
            onClick={() => setSelectedFilter(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="card-grid">
        {dummyPhones.map((phone, index) => (
          <div key={index} className="card-hover" style={styles.card}>
            <img src={phone.image} alt={phone.name} style={styles.image} />
            <h3 style={styles.cardTitle}>{phone.name}</h3>
            <div style={styles.cardLine}>
              <FaMapMarkerAlt style={styles.icon} /> {phone.location}
            </div>
            <div style={styles.cardLine}>
              <FaRupeeSign style={styles.icon} /> {phone.price}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        @media (max-width: 500px) {
          .card-grid {
            grid-template-columns: 1fr !important;
          }
        }

        .card-hover {
          border: 2px solid transparent;
          background: linear-gradient(#fff, #fff) padding-box,
                      linear-gradient(135deg, #0d47a1, #42a5f5) border-box;
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: scale(1.02);
          box-shadow: 0 12px 30px rgba(13, 71, 161, 0.3);
        }

        .export-hover:hover {
          background-color: #08306b;
          transform: scale(1.03);
        }

        .filter-hover {
          padding: 8px 14px;
          border: 1px solid #0d47a1;
          border-radius: 6px;
          background: #fff;
          color: #0d47a1;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .filter-hover:hover {
          background-color: #0d47a1;
          color: white;
          transform: scale(1.05);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .active-filter {
          position: relative;
          z-index: 1;
          background-color: #0d47a1;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

const styles = {
  page: {
    padding: "20px",
    fontFamily: "Poppins, sans-serif",
    color: "#333",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    flexWrap: "wrap",
    gap: "10px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#0d47a1",
  },
  exportBtn: {
    padding: "10px 16px",
    backgroundColor: "#0d47a1",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    transition: "all 0.3s ease",
  },
  filterContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "25px",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "14px 16px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    fontSize: "14px",
  },
  cardTitle: {
    margin: "10px 0 6px",
    color: "#0d47a1",
    fontSize: "16px",
    fontWeight: "600",
  },
  cardLine: {
    marginBottom: "6px",
    display: "flex",
    alignItems: "center",
    fontSize: "13.5px",
  },
  icon: {
    marginRight: "8px",
    color: "#0d47a1",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "contain",        // ← shows full image
    borderRadius: "10px",
    marginBottom: "8px",
    backgroundColor: "#ffff",  // optional, fills empty space
  }
  
  


};

export default ManagePhones;

import React, { useState } from "react";
import { FaMapMarkerAlt, FaRupeeSign, FaCar, FaFileExport } from "react-icons/fa";

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

const dummyCars = [
  {
    name: "Hyundai i20 Sportz",
    location: "Pune, Maharashtra",
    price: "₹6,50,000",
    image: "https://www.carz4sale.in/pictures/default/hyundai-i20-1-0l-turbo-gdi-sportz-petrol-imt/hyundai-i20-1-0l-turbo-gdi-sportz-petrol-imt-640.jpg",
  },
  {
    name: "Maruti Swift VXI",
    location: "Mumbai, Maharashtra",
    price: "₹5,90,000",
    image: "https://avgmotors.co.in/wp-content/uploads/2022/03/Pearl-Arctic-White-2-876x535.png",
  },
  {
    name: "Tata Nexon XZ+",
    location: "Nashik, Maharashtra",
    price: "₹8,25,000",
    image: "https://imgd.aeplcdn.com/1056x594/n/wmf3iab_1656847.jpeg?q=80",
  },
];

const ManageCars = () => {
  const [selectedFilter, setSelectedFilter] = useState("Total");

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h2 style={styles.title}>Manage Cars</h2>
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
        {dummyCars.map((car, index) => (
          <div key={index} className="card-hover" style={styles.card}>
            <img src={car.image} alt={car.name} style={styles.image} />
            <h3 style={styles.cardTitle}>{car.name}</h3>
            <div style={styles.cardLine}><FaMapMarkerAlt style={styles.icon} /> {car.location}</div>
            <div style={styles.cardLine}><FaRupeeSign style={styles.icon} /> {car.price}</div>
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
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "8px",
  },
};

export default ManageCars;

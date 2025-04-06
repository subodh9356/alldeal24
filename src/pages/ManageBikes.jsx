import React, { useState } from "react";

const dummyBikes = [
  {
    image: "https://palacehonda.com/wp-content/uploads/2023/06/Black_2new.png",
    name: "Honda Shine",
    location: "Pune, Maharashtra",
    price: "₹55,000",
  },
  {
    image: "https://www.motorsprice.com/wp-content/uploads/2024/07/Bajaj-Pulsar-150-Twin-Disc-ABS-1.webp",
    name: "Bajaj Pulsar 150",
    location: "Nagpur, Maharashtra",
    price: "₹68,000",
  },
  {
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202002/Royal_Enfield_Classic_350_BS6.png?size=690:388",
    name: "Royal Enfield Classic 350",
    location: "Mumbai, Maharashtra",
    price: "₹1,20,000",
  },
];

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

const ManageBikes = () => {
  const [activeFilter, setActiveFilter] = useState("Total");

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Manage Bikes</h2>

      <div style={styles.filterContainer}>
        {filterOptions.map((filter, index) => (
          <button
            key={index}
            className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="bike-grid">
        {dummyBikes.map((bike, index) => (
          <div key={index} style={styles.card} className="bike-card-hover">
            <img src={bike.image} alt={bike.name} style={styles.image} />
            <h3 style={styles.name}>{bike.name}</h3>
            <p style={styles.detail}><strong>Location:</strong> {bike.location}</p>
            <p style={styles.detail}><strong>Price:</strong> {bike.price}</p>
          </div>
        ))}
      </div>

      <style>
        {`
          .bike-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-top: 20px;
          }

          .bike-card-hover {
            transition: all 0.3s ease;
            background: #fff;
          }

          .bike-card-hover:hover {
            transform: scale(1.02);
            box-shadow: 0 12px 30px rgba(13, 71, 161, 0.3);
          }

          .filter-btn {
            padding: 8px 16px;
            border-radius: 6px;
            background: #ffffff;
            border: 1px solid #0d47a1;
            color: #0d47a1;
            font-weight: 500;
            font-size: 14px;
            margin-right: 10px;
            margin-bottom: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .filter-btn:hover {
            background-color: #0d47a1;
            color: white;
          }

          .filter-btn.active {
            background-color: #0d47a1;
            color: white;
            border-color: #0d47a1;
          }

          @media (max-width: 500px) {
            .bike-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  page: {
    padding: "20px",
    fontFamily: "Poppins, sans-serif",
    color: "#333",
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#0d47a1",
    marginBottom: "20px",
  },
  filterContainer: {
    marginBottom: "20px",
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    borderRadius: "12px",
    backgroundColor: "#fff",
    padding: "14px 16px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
    fontSize: "14px",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "12px",
  },
  name: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#0d47a1",
    marginBottom: "8px",
  },
  detail: {
    fontSize: "14px",
    marginBottom: "6px",
  },
};

export default ManageBikes;

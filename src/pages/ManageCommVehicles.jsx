import React from "react";

const dummyCommVehicles = [
  {
    image: "https://kamalmotors.co.in/wp-content/uploads/2022/05/Tata-Ace-CNG.png",
    name: "Tata Ace Gold",
    location: "Pune, Maharashtra",
    price: "₹3,45,000",
  },
  {
    image: "https://5.imimg.com/data5/RF/RT/AS/GLADMIN-3061/mahindra-supro-van-500x500.png",
    name: "Mahindra Supro",
    location: "Nagpur, Maharashtra",
    price: "₹4,75,000",
  },
  {
    image: "https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/product/cargo/ht-cng-300cc/ht-cng-blue6.png",
    name: "Piaggio Ape Xtra",
    location: "Mumbai, Maharashtra",
    price: "₹2,80,000",
  },
];

const filters = [
  "Today",
  "This Week",
  "This Month",
  "Last Month",
  "Last 3 Months",
  "Last 6 Months",
  "Last 1 Year",
  "Total",
];

const ManageCommVehicles = () => {
  const [activeFilter, setActiveFilter] = React.useState("Total");

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Manage Commercial Vehicles</h2>

      <div style={styles.filters}>
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-hover ${activeFilter === filter ? "active-filter" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="car-grid">
        {dummyCommVehicles.map((car, index) => (
          <div key={index} style={styles.card} className="card-hover">
            <img src={car.image} alt={car.name} style={styles.image} />
            <h3 style={styles.name}>{car.name}</h3>
            <p style={styles.detail}><strong>Location:</strong> {car.location}</p>
            <p style={styles.detail}><strong>Price:</strong> {car.price}</p>
          </div>
        ))}
      </div>

      <style>
        {`
          .car-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-top: 20px;
          }

          .card-hover {
            transition: all 0.3s ease;
            background: linear-gradient(#fff, #fff) padding-box,
                        linear-gradient(135deg, #0d47a1, #42a5f5) border-box;
          }

          .card-hover:hover {
            transform: scale(1.02);
            box-shadow: 0 12px 30px rgba(13, 71, 161, 0.3);
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
            margin-right: 10px;
            margin-bottom: 10px;
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
            color: white;
            background-color: #0d47a1;
          }

          @media (max-width: 500px) {
            .car-grid {
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
  filters: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  card: {
    borderRadius: "12px",
    backgroundColor: "#fff",
    padding: "14px 16px",
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

export default ManageCommVehicles;

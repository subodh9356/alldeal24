import React, { useState } from "react";
import {
  FaPhone,
  FaClipboardList,
  FaWrench,
  FaCalendarAlt,
  FaStickyNote,
  FaFileExport,
} from "react-icons/fa";

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

const dummyUsers = [
  {
    name: "Subodh Bansode",
    phone: "9876543210",
    totalAds: 12,
    serviceAds: 4,
    registrationDate: "2024-08-22",
    note: "Active user",
  },
  {
    name: "Ravi Sharma",
    phone: "9123456789",
    totalAds: 6,
    serviceAds: 2,
    registrationDate: "2024-11-10",
    note: "New seller",
  },
  {
    name: "Aditi Mehra",
    phone: "9991122334",
    totalAds: 15,
    serviceAds: 6,
    registrationDate: "2023-12-01",
    note: "Premium user",
  },
  // Add more if needed
];

const ManageUsers = () => {
  const [selectedFilter, setSelectedFilter] = useState("Total");

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h2 style={styles.title}>Manage Users</h2>
        <button style={styles.exportBtn} className="export-hover">
          <FaFileExport style={{ marginRight: 8 }} />
          Export to Excel
        </button>
      </div>

      <div style={styles.filterContainer}>
        {filterOptions.map((option) => (
          <button
            key={option}
            style={styles.filterBtn}
className={`filter-hover ${selectedFilter === option ? "active-filter" : ""}`}

            onClick={() => setSelectedFilter(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div style={styles.cardGrid} className="card-grid">
        {dummyUsers.map((user, index) => (
          <div key={index} style={styles.card} className="card-hover">
            <h3 style={styles.cardTitle}>{user.name}</h3>
            <div style={styles.cardLine}><IconText icon={<FaPhone />} label="Phone" value={user.phone} /></div>
            <div style={styles.cardLine}><IconText icon={<FaClipboardList />} label="Total Ads" value={user.totalAds} /></div>
            <div style={styles.cardLine}><IconText icon={<FaWrench />} label="Service Ads" value={user.serviceAds} /></div>
            <div style={styles.cardLine}><IconText icon={<FaCalendarAlt />} label="Registered" value={user.registrationDate} /></div>
            <div style={styles.cardLine}><IconText icon={<FaStickyNote />} label="Note" value={user.note} /></div>
          </div>
        ))}
      </div>

      <style>
{`
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
    position: relative;
    z-index: 0;
  }

  .filter-hover:hover {
    background-color: #0d47a1;
    color: white;
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .active-filter {
    color: white !important;
    background-color: #0d47a1 !important;
    border: 1px solid #0d47a1 !important;
    z-index: 1;
  }

  .active-filter:hover {
    background-color: #08306b !important;
    border-color: #08306b !important;
  }
`}
</style>


    </div>
  );
};

// Reusable component for field with icon
const IconText = ({ icon, label, value }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <div style={styles.iconWrapper}>{icon}</div>
    <span><strong>{label}:</strong> {value}</span>
  </div>
);

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
  filterBtn: {
    padding: "8px 14px",
    border: "1px solid #0d47a1",
    borderRadius: "6px",
    background: "#fff",
    color: "#0d47a1",
    cursor: "pointer",
    fontWeight: "500",
    transition: "all 0.3s ease",
  },
  activeFilter: {
    backgroundColor: "#0d47a1",
    color: "#fff",
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
  marginBottom: "12px",
  color: "#0d47a1",
  fontSize: "16px",
  fontWeight: "600",
},

cardLine: {
  marginBottom: "8px",
  display: "flex",
  alignItems: "center",
  fontSize: "13.5px",
  lineHeight: "1.4",
},

iconWrapper: {
  backgroundColor: "#e3f2fd",
  padding: "4px",
  borderRadius: "50%",
  color: "#0d47a1",
  fontSize: "13px",
  width: "22px",
  height: "22px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "8px",
},

};

export default ManageUsers;

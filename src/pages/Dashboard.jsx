import React, { useState } from "react";
import LineChart from "../components/LineChart.jsx";
import { useNavigate } from "react-router-dom";
import {
    FaUsers,
    FaHome,
    FaCar,
    FaMotorcycle,
    FaTruck,
    FaTools,
    FaMoneyCheckAlt,
    FaCogs,
} from "react-icons/fa";

const cardData = [
    {
        title: "Total Users",
        count: "1,200+",
        description: "All registered users on the platform",
        icon: <FaUsers />,
        bg: "linear-gradient(135deg, #667eea, #764ba2)",
    },
    {
        title: "Properties",
        count: "350",
        description: "Listed houses, flats, and plots",
        icon: <FaHome />,
        bg: "linear-gradient(135deg, #f7971e, #ffd200)",
    },
    {
        title: "Cars",
        count: "120",
        description: "Used and new cars for sale",
        icon: <FaCar />,
        bg: "linear-gradient(135deg, #43cea2, #185a9d)",
    },
    {
        title: "Bikes",
        count: "80",
        description: "Scooters, sports bikes & more",
        icon: <FaMotorcycle />,
        bg: "linear-gradient(135deg, #ff0844, #ffb199)",
    },
    {
        title: "Commercial Vehicles",
        count: "45",
        description: "Tempos, trucks and more",
        icon: <FaTruck />,
        bg: "linear-gradient(135deg, #00c6ff, #0072ff)",
    },
    {
        title: "Home Services",
        count: "95",
        description: "Cleaning, repairs & home care",
        icon: <FaTools />,
        bg: "linear-gradient(135deg, #f953c6, #b91d73)",
    },
    {
        title: "Loan Services",
        count: "60",
        description: "Home, personal & car loans",
        icon: <FaMoneyCheckAlt />,
        bg: "linear-gradient(135deg, #1e3c72, #2a5298)",
    },
    {
        title: "Other Services",
        count: "150",
        description: "Tutors, health, events & more",
        icon: <FaCogs />,
        bg: "linear-gradient(135deg, #fc466b, #3f5efb)",
    },
];


const Dashboard = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate(); // 👈 Navigation hook

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Welcome to Admin Dashboard👋</h1>
            <p style={styles.subheading}>Manage your app’s content and users here.</p>

            <div style={styles.cardGrid}>
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.card,
                            background: card.bg,
                            ...(hoveredIndex === index ? styles.cardHover : {}),
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => {
                            if (card.title === "Total Users") {
                                navigate("/manage-users"); // 👈 Navigate to ManageUsers
                            } else if (card.title === "Cars") {
                                navigate("/manage-cars"); // 👈 Navigate to ManageCars
                            } else if (card.title === "Bikes") {
                                navigate("/manage-bikes");
                            } else if (card.title === "Commercial Vehicles") {
                                navigate("/manage-coomercial-vehicles");
                            }
                        }}
                    >
                        <div style={styles.icon}>{card.icon}</div>
                        <div>
                            <h3 style={styles.cardTitle}>{card.title}</h3>
                            <p style={styles.cardCount}>{card.count}</p>
                            <p style={styles.cardDesc}>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>


            {/* Line chart section */}
            <LineChart />
        </div>
    );
};

const styles = {
    container: {
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingBottom: "20px",
        fontFamily: "Poppins, sans-serif",
        width: "100%",
        boxSizing: "border-box",
    },
    heading: {
        fontSize: "26px",
        fontWeight: "600",
        marginBottom: "8px",
        color: "#333",
    },
    subheading: {
        color: "#777",
        marginBottom: "25px",
        fontSize: "15px",
    },
    cardGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
        gap: "20px",
    },
    card: {
        display: "flex", // Keep icon and text side by side
        alignItems: "center",
        padding: "20px",
        color: "#fff",
        borderRadius: "16px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        minHeight: "120px", // Increased card height
    },

    cardDesc: {
        marginTop: "6px",
        fontSize: "12px",
        fontWeight: "300",
        color: "#eee",
    },

    cardHover: {
        transform: "translateY(-5px) scale(1.03)",
        boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
        filter: "brightness(1.1)",
    },
    icon: {
        fontSize: "34px",
        marginRight: "18px",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        padding: "12px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "60px",
        minHeight: "60px",
    },

    cardTitle: {
        margin: 0,
        fontSize: "17px",
        fontWeight: "600",
    },
    cardCount: {
        margin: 0,
        fontSize: "13px",
        fontWeight: "400",
    },
};

export default Dashboard;

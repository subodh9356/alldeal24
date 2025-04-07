import React, { useEffect, useState } from "react";
import { ref, onValue, remove } from "firebase/database";
import { database } from "../firebase";
import { useLocation } from "react-router-dom";
import { FaMapMarkerAlt, FaRupeeSign, FaHome, FaTrash } from "react-icons/fa";

const PropertyList = () => {
    const location = useLocation();
    const subcategory = decodeURIComponent(location.pathname.split("/properties/")[1]);

    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const propertyRef = ref(database, "App/FeaturedItems/");
        onValue(propertyRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const filtered = Object.entries(data)
                    .filter(([key, item]) => item.propertyType === subcategory)
                    .map(([key, value]) => ({ ...value, id: key }));
                setProperties(filtered);
            } else {
                setProperties([]);
            }
            setLoading(false);
        });
    }, [subcategory]);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this property?");
        if (confirmDelete) {
            remove(ref(database, `App/FeaturedItems/${id}`))
                .then(() => {
                    setProperties(prev => prev.filter(p => p.id !== id));
                    alert("Property deleted successfully.");
                })
                .catch((error) => {
                    console.error("Error deleting property:", error);
                    alert("Failed to delete property.");
                });
        }
    };

    if (loading) return <p className="loading">Loading properties...</p>;

    if (properties.length === 0)
        return <p className="loading">No properties found for "{subcategory}"</p>;

    return (
        <div className="property-container">
            <div className="property-header">
                <h2 className="property-title">Showing: {subcategory}</h2>
                <p className="property-count">Total Properties: {properties.length}</p>
            </div>

            <div className="property-grid">
                {properties.map((item, index) => (
                    <div key={index} className="property-card">
                        <img src={item.imageUrls?.[0]} alt="Property" className="property-image" />
                        <h3 className="property-heading">{item.featuredHeading}</h3>

                        <div className="property-info">
                            <FaHome />
                            <span>{item.flatType}</span>
                        </div>
                        <div className="property-info">
                            <FaMapMarkerAlt />
                            <span>{item.featuredProductLocation}</span>
                        </div>
                        <div className="property-info">
                            <FaRupeeSign />
                            <span>{item.featuredPrice}</span>
                        </div>

                        <span className="property-badge">{item.propertyType}</span>

                        <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                            <FaTrash /> Delete
                        </button>
                    </div>
                ))}
            </div>

            {/* Embedded Styles */}
            <style>{`
                .property-container {
                    padding-bottom: 40px;
                    background: #f8fafc;
                    min-height: 100vh;
                }

                .loading {
                    text-align: center;
                    font-size: 18px;
                    margin-top: 50px;
                    color: #555;
                }

                .property-header {
                    background: linear-gradient(135deg, #2563eb, #1e3a8a);
                    padding: 8px 20px;
                    color: #fff;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    border-radius: 0 0 12px 12px;
                }

                .property-title {
                    font-size: 20px;
                    font-weight: 700;
                    margin: 0;
                }

                .property-count {
                    font-size: 16px;
                    color: #e0e7ff;
                }

                .property-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                    padding: 30px 20px;
                }

                .property-card {
                    background: #ffffff;
                    border-radius: 12px;
                    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
                    padding: 16px;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    position: relative;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .property-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
                }

                .property-image {
                    width: 100%;
                    height: 190px;
                    object-fit: cover;
                    border-radius: 10px;
                    margin-bottom: 12px;
                }

                .property-heading {
                    font-size: 18px;
                    font-weight: 600;
                    color: #1f2937;
                    margin-bottom: 10px;
                }

                .property-info {
                    display: flex;
                    align-items: center;
                    margin-bottom: 6px;
                    font-size: 14px;
                    color: #374151;
                }

                .property-info svg {
                    margin-right: 8px;
                    color: #2563eb;
                }

                .property-badge {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    background: #2563eb;
                    color: #fff;
                    padding: 5px 12px;
                    border-radius: 50px;
                    font-size: 12px;
                    font-weight: 500;
                }

                .delete-btn {
                    margin-top: 12px;
                    padding: 8px 12px;
                    background: #ef4444;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    cursor: pointer;
                    transition: background 0.3s ease;
                }

                .delete-btn:hover {
                    background: #dc2626;
                }

                @media (max-width: 992px) {
                    .property-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 600px) {
                    .property-grid {
                        grid-template-columns: 1fr;
                    }

                    .property-header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 8px;
                    }

                    .property-title {
                        font-size: 22px;
                    }
                }
            `}</style>
        </div>
    );
};

export default PropertyList;

import React, { useState } from "react";
import Card from "../../Components/Card/Card.jsx";
import { BookDashboardData } from "./BookDashboardData.jsx";
import TabButton from "../../Components/Tab/TabButton.jsx";

function DashboardPage() {

  const [activeTab, setActiveTab] = useState(0);

  const handleTabButton = (index) => {
    setActiveTab(index); 
  };

  return (
    <div className="dashboard">
      <div className="dash-icon-title">
        <i></i>
        {/* <span>Dashboard</span> */}
      </div>

      <div className="category-counts">
        <h2>Category Counts</h2>
        <div className="cat-counts">
          {BookDashboardData.map((dashboardData, index) =>
            dashboardData.category_counts.map((category, idx) => (
              <Card key={`${index}-${idx}`}>
                <div className="category-name">
                  <h4>{category.categoryName}</h4>
                </div>
                <div className="icon-counts">
                  <i className="fas fa-book"></i>
                  <span>{category.total_count}</span>
                </div>
              </Card>
            ))
          )}
        </div>
       
      </div>

      <div className="genre-counts">
        <h2>Genre Counts</h2>
        <div className="tabs">
          {BookDashboardData.map((dashboardData, index) =>
            dashboardData.genre_counts.map((genreCount, idx) => (
              <TabButton
                key={`${index}-${idx}`}
                handleTab={() => handleTabButton(idx)} 
                className={`tab-button ${activeTab === idx ? "active" : ""}`}
              >
                {genreCount.genre} ({genreCount.total_count})
              </TabButton>
            ))
          )}
        </div>

        <div className="tab-content">
          {BookDashboardData.map((dashboardData, index) => (
            dashboardData.genre_counts.map((genre, idx) => (
              activeTab === idx && (
                <div key={`${index}-${idx}`} className="image-container">
                  {genre.images.map((image, indx) => (
                    <Card key={`${index}-${idx}-${indx}`}>
                      <div className="image">
                        <img src={image} alt={genre.genre} />
                      </div>
                    </Card>
                  ))}
                </div>
              )
            ))
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;

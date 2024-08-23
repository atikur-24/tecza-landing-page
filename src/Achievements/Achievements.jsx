import React from "react";
import AchievementsData from "../../public/data/achievements";
import "./Achievements.css";

const Achievements = () => {
  return (
    <section className="achievements-section">
      <div className="container">
        <div className="achievements-container">
          {AchievementsData?.map((achievement) => (
            <div key={achievement.id} className="achievements-content">
              <h1 className="achievements-count">{achievement.count}</h1>
              <p className="achievements-title">{achievement.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

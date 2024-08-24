import React from "react";
import achievementsData from "../../../public/data/achievements";
import SectionTitle from "../ui/SectionTitle";
import "./achievements.css";

const Achievements = () => {
  return (
    <section id="achievement-main-container">
      <SectionTitle
        title="Achievements"
        description="Explore the significant milestones and successes that highlight our journey and commitment to excellence and see the key milestones and successes we've achieved."
      />
      <div className="achievements-section">
        <div className="container">
          <div className="achievements-container">
            {achievementsData?.map((achievement) => (
              <div key={achievement.id} className="achievements-content">
                <h1 className="achievements-count">{achievement.count}</h1>
                <p className="achievements-title">{achievement.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

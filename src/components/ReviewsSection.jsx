import WomanIcon from "../assets/woman icon.png"; // Dynamically linked avatar asset file

function ReviewCard({ text, name, role }) {
  return (
    <div className="review-card-item">
      <div className="quote-icon-orange">“</div>
      <p className="review-content-text">{text}</p>
      <div className="reviewer-profile-footer">
        <img src={WomanIcon} alt="Community Member User Profile View" />
        <div className="reviewer-bio">
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
}

function ReviewsSection() {
  return (
    <section className="reviews-section-wrapper">
      <span className="reviews-top-tag">WHAT OUR COMMUNITY SAYS</span>
      <h2 className="reviews-main-title">Loved by restaurant owners and food lovers</h2>

      <div className="reviews-cards-grid">
        <ReviewCard 
          text="DineSync changed how we run our kitchen floor. Table turnarounds are faster and the system never drops an active order."
          name="Aline Nakamura"
          role="Owner, Bistro De L'Amour"
        />
        <ReviewCard 
          text="Finding reliable restaurant management software is a nightmare. This platform is clean, lightweight, and saves my staff hours every single shift."
          name="Aline Nakamura"
          role="District Operations Director"
        />
        <ReviewCard 
          text="The booking system is perfectly fluid. I can coordinate corporate catering and standard dinner seating reservations instantly without overlapping."
          name="Mark Criss"
          role="Head Sommelier"
        />
      </div>

      <div className="pagination-dots-row">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
}

export default ReviewsSection;
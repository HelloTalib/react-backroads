
import Title from "./Title";
import { featuresItems } from "../constants/features";
const Features = () => {
  return (
      <section className="section" id="tours">
          <Title title="our" subTitle="tours" />

          <div className="section-center featured-center">
             {
                    featuresItems && featuresItems.length > 0 && (
                        featuresItems.map((features) => {
                            const { id, title, description, icon, cost, img, date,duration, location} = features;
                            return(
                                <article className="tour-card" key={id}>
                                    <div className="tour-img-container">
                                        <img src={img} className="tour-img" alt={title} />
                                        <p className="tour-date">{date}</p>
                                    </div>
                                    <div className="tour-info">
                                        <h4>{title}</h4>
                                        <p>
                                            {description}
                                        </p>
                                        <div className="tour-footer">
                                            <p>
                                                <span><i className={icon}></i></span> {location}
                                            </p>
                                            <p>{duration}</p>
                                            <p>from {cost}</p>
                                        </div>
                                    </div>
                                </article>
                                )
                        })
                    )
             }




          </div>
      </section>
  )
}
export default Features;
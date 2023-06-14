import Title from "./Title";
import { serviceItems } from "../constants/services";

const Services = () => {
  return (
      <section className="section services" id="services">
        <Title title="our" subTitle="services" />
          <div className="section-center services-center">
              {
                  serviceItems && serviceItems.length > 0 && (
                      serviceItems.map((services) => {
                          const { id, title, description, icon, price} = services;
                          return (
                              <article className="service" key={id}>
                                  <span className="service-icon"><i className={icon}></i></span>
                                  <div className="service-info">
                                      <h4 className="service-title">{title}</h4>
                                      <p className="service-text">
                                          {description}
                                      </p>
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
export default Services;
import React from 'react';
import './Services.css';
import theme_patten from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  return (
    <div id="services" className='services'>
        <div className="services-title">
            <h1>Profile's</h1>
            <img src={theme_patten} alt="" />
        </div>
        <div className="services-container">
            {Services_Data.map((service,index)=>{
                return( <div key={index} className="services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                       <a href={service.link}><p>Click Here</p></a>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>)
            })}
        </div>
    </div>
  )
}

export default Services
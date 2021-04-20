import { Component } from 'react';
import React from 'react';
import '../../assets/stylesheets/app.css';
import '../../assets/stylesheets/resourcestyle.css';

import { Card } from 'react-bootstrap';
class Resource extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const RESOURCE_LINKS = [
      {
        link: 'https://play.google.com/store/apps/details?id=gov.nasa.globe.observer&hl=en',
        name: 'Globe Observer',
        image: 'https://play-lh.googleusercontent.com/2iBA5BkZ6G7G5idLd5RhMGNW1aC0kQ-MIKWe75cM0ub8PxXhevfu1rJWOt4--wGalA=s180',
        description: 'GLOBE Observer invites you to make observations of the Earth around you. Observations you collect and submit with this app are designed to help scientists better understand satellite data collected. '
      },

      {
        link: 'https://www.vims.edu/people/loftis_jd/Catch%20the%20King/index.php',
        name: 'Sea Level Rise App',
        image: 'https://drive.google.com/uc?export=view&id=1oELWmseUho5RMonP9vOJwT5fUwoHLsKm',
        // image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple71/v4/c0/5f/34/c05f3446-d638-0fdc-e685-2935ebc3ef6b/mzl.ogzyxgyf.png/1200x630wa.png',
        description: 'Get information about this global phenomena of Sea Level Rise and participate (as a volunteer) in capturing the data we need to better understand and solve the challenges it brings.'
      },
     
      {
        link: 'https://duckduckgo.com',
        name: 'Word Up App',
        image: 'https://drive.google.com/uc?export=view&id=13QPYzXmhCa_inkjTTID4Caag02TRrn_K',
        description: 'This description is currently behaving as a placeholder, because the appropriate description is not yet known.'
      },

      {
        link: 'https://duckduckgo.com',
        name: 'Healthy Homes',
        image: 'https://drive.google.com/uc?export=view&id=1KHRiNAWZaejm0gJlLoUANVAfmmTHQ7K6',
        description: 'This description is currently behaving as a placeholder, because the appropriate description is not yet known.'
      },

      {
        link: 'https://duckduckgo.com',
        name: 'Housing Justice App',
        image: 'https://drive.google.com/uc?export=view&id=1KHRiNAWZaejm0gJlLoUANVAfmmTHQ7K6',
        description: 'This description is currently behaving as a placeholder, because the appropriate description is not yet known.'
      },

      {
        link: 'https://duckduckgo.com',
        name: 'Street Level Observation',
        image: 'https://drive.google.com/uc?export=view&id=1KHRiNAWZaejm0gJlLoUANVAfmmTHQ7K6',
        description: 'This description is currently behaving as a placeholder, because the appropriate description is not yet known.'
      },
    ];

    const SECONDCHANCE_LINKS = [
      {
        link: 'https://hrcapinc.org/directory/listing/virginia-cares-re-entry-program/',
        name: 'Virginia CARES - Re-entry Program',
        description: 'Virginia CARES provides one-on-one counseling with ex-offenders and their families to help ex-offenders transition back into their communities. Through counseling sessions, we can help determine your needs and provide referrals to various agencies with services',
        contact: '2708 Chestnut Avenue, Newport News, Virginia 23607; (757)-245-1205'
      },
      {
        link: 'https://kidsandfamilies.com/',
        name: 'Fresh Start, Child and Family Services',
        description: 'The Center for Child and Family Services (CCFS), founded in 1943, is a nonprofit 501C3 community service organization focused on providing behavioral, mental health, and financial counseling services to families. Our mission is to deliver quality counseling programs and support services that empower individuals and families to improve their lives.',
        contact: '2021 Cunningham Dr. Ste. 400, Hampton, VA; (757) 838-1960; email: htodd@kidsandfamilies.com'

      },
      {
        link: 'https://goodwillvirginia.org/location/hampton-cec/',
        name: 'Goodwill Employment Center',
        description: '',
        contact: '1911 Saville Row, Hampton, VA; (757) 951-4200'
      },
      {
        link: 'https://www.facebook.com/TheHouseofDreamsReEntryConsulting/',
        name: 'The House of Dreams ReEntry',
        description: 'The House of Dreams ReEntry Consulting, LC is an organization that is dedicated to helping Returning Citizens be successful, in every aspect of their life by providing helpful and current information related to formerly incarcerated individuals.',
        contact: '733 Thimble Shoals Blvd, Newport News; (757) 303-0368'
      },
      {
        link: '',
        name: 'Our Daughters and Sons Network',
        description: 'Mentorship, resume building',
        contact: '6022 Jefferson Ave, Ste 240C Newport News, VA; (757) 926-4428; email: lmaynard4ods@hotmail.com'
      },
      {
        link: 'https://www.facebook.com/Second-Chances-1375713166091864/',
        name: 'Second Chances',
        description: 'Second Chances is a comprehensive program those dealing with the stigma of offender status. Services include job readiness and job skills training, substance abuse support and relapse prevention, housing, youth mentorship and supportive services',
        contact: '810 Union Street, #807, Norfolk, VA; (757) 664-4281'
      },
      {
        link: 'http://stepupincorporated.org/',
        name: 'Step-Up Inc',
        description: 'Despite the call for longer jail terms, at some point an offenders sentence will be completed. Its also a fact that one of the primary reasons former inmates find themselves in trouble again is the lack of family support or a shortage of community-based services. STEP UP, Inc. helps these ex-offenders find a new start in their lives. At STEP UP, Inc., we provide early assistance, starting before an inmate is ever released.',
        contact: '5900 E. Virginia Beach Blvd., Suite 102, Norfolk, VA; (757) 588-3151'
      },
      {
        link: 'https://atruebeginning.org/',
        name: '',
        description: '',
        contact: ''
      },
      {
        link: '',
        name: '',
        description: '',
        contact: ''
      },
      {
        link: '',
        name: '',
        description: '',
        contact: ''
      },
      {
        link: '',
        name: '',
        description: '',
        contact: ''
      },
      {
        link: '',
        name: '',
        description: '',
        contact: ''
      },
      {
        link: '',
        name: '',
        description: '',
        contact: ''
      },
      {
        link: '',
        name: '',
        description: '',
        contact: ''
      }
    ];

    const cardImageStyle = {
      borderRadius: "8px",
      boxShadow: "3px 2px 5px 2px rgba(0, 0, 0, 0.25)"
    };

    return (
      <div className="Resource-container">
        <h1 className="Resource-Heading section-title">Resources</h1>
        <div className="Resource-body">
          <div className="Resource-text">
            Resources compiled and created by the community, for the community.
          </div>
          <br />
          <div className="Resource-gallery">
            <div className="Resource-Heading section-title" style={{textAlign:"left"}}>Apps</div>
            <div className="Resource-Grid row ">
              {RESOURCE_LINKS.map(({ name, link, image, description }) => (
                <a className="col-md-4 col-sm-12 d-flex flex-fill" key={name} href={link}>
                  <Card className="Resource-card">
                    <div className="card-heading">
                      <Card.Img
                        className="Resource-img"
                        variant="top"
                        src={image}
                        style={cardImageStyle}
                      />
                      <br />
                      <h1 className="Resource-Name">{name}</h1>
                    </div>
                    <Card.Body>
                      <Card.Text>
                        {description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              ))}
            </div>
          </div>
          <div className="Resource-row">
            <h1 className="Resource-Heading section-title" style={{textAlign:"left"}}>Ex-Offender Assistance</h1>
            <div className="Resource-text">
            You don’t have to go through re-entry alone. These are some resources to help you get back on your feet!
            </div>
              {SECONDCHANCE_LINKS.map(({ name, link, description, contact }) => (
                <div className="Resource-text" key={name}>
                  <button className="second-chance-button"><a className="Resource-list" href={link}>{name}</a></button>
                   <p className="resource-desc"> <span style={{fontWeight: "bold"}}>Description: </span> {description}</p>
                   <p className="resource-desc"><span style={{fontWeight: "bold"}}>Contact: </span> {contact} </p>
                </div>
              ))}
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default Resource;

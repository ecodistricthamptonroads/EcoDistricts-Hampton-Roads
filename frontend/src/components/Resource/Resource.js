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
        link: 'thedreamcorps.org',
        name: 'The Dreamcorps',
        image: 'https://www.thedreamcorps.org/wp-content/themes/dreamcorps/dist/images/logo_7c9a110c.svg',
        description: 'This organization provides resources for formerly incarcerated people to re-enter the workforce in the clean energy center.'
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
        name: 'True Beginnings',
        description: 'True Beginnings, established as a 501(c)3 organization in 2013 in the Hampton, VA region, by a formerly incarcerated woman, Vera Moore, who has a vision of providing other formerly incarcerated women true access to prosperity and equity through wrap-around services such as trauma informed case management, and life coaching. True Beginnings addresses trauma in the midst of housing and job readiness, as the first order of business in assisting women through transitioning from incarceration into a productive lifestyle; understanding that 87% of the women who have been incarcerated have withstood some sort of sexual or physical abuse in their lifetime.',
        contact: '12 Salters Creek Rd. Hampton, VA;  (757) 245-4500   '
      },
      {
        link: 'https://www.theupcenter.org/',
        name: 'The Up Center',
        description: 'The Up Center provides more than 20 critical support services for children and families in our community, including mental health counseling, parenting education and support, youth mentoring, foster care and adoption, housing and financial counseling, and services for people with disabilities.',
        contact: '222 West 19th St., Norfolk, VA;  (757) 622-7017'
      },
      {
        link: 'http://vacares.org/',
        name: 'Virginia CARES',
        description: 'Virginia CARES is part of a Virginia coalition of re-entry services providers known as the Pre- and Post-Incarceration Services (PAPIS) Coalition, which is funded by the Virginia General Assembly through the Department of Criminal Justice Services (DCJS). Virginia CARES, like the other PAPIS organizations, works to reduce recidivism and to provide education, job training and other support services to released individuals, an important part of the last three Governors’ enhanced emphasis on re-entry initiatives.  ',
        contact: '115 28th Street, Newport News, VA;  (757) 245-0328'
      },
      {
        link: 'https://www.vec.virginia.gov/ex-offender-assistance',
        name: 'Virginia Employeement Commission - Ex-offender Assistance',
        description: 'Resources on Federal Bonding, Virginia Civil Rights Restoration, and Public Assistance available to ex-offenders.',
        contact: '1-866-832-2363'
      },
      {
        link: 'http://jamescitycountyva.gov/186/Colonial-Community-Corrections',
        name: 'James City County Colonial Community Corrections',
        description: 'James City County Colonial Community Corrections enhances public safety, empowers our clients and improves the quality of our community by providing judicial alternatives to adult incarceration, transitional services and criminal justice planning to the localities we serve.',
        contact: '4093 Ironbound Rd Suite B Williamsburg, VA; (757) 564-2311'
      },
      {
        link: 'http://onesimus-ministries.org/welcome.html',
        name: 'Onesimus Ministries',
        description: 'Onesimus Ministries was started in May of 1982 by Rev. William Twine to provide Christian ministry to men incarcerated in Norfolk City Jail. The Mission Statement of Onesimus Ministries is to: to provide ministry to those that are incarcerated, to provide aftercare ministry to those released from jail or prison, and to provide ministry to the families of those incarcerated.',
        contact: '(757) 421-2553'
      }
    ];

    const RIGHTS_RESTORATION_LINKS = [
      {
        link: 'https://www.restore.virginia.gov/',
        name: 'Restoration of Rights, Secretary of the Commonwealth',
        description: 'The Constitution of Virginia gives the Governor the sole discretion to restore civil rights, not including firearm rights. Individuals seeking restoration of their civil rights are encouraged to contact the Secretary of the Commonwealth’s office. ',
        contact: '(804) 786-2441'
      },
      {
        link: 'https://revivemyvote.wm.edu/',
        name: 'Revive My Vote',
        description: 'Revive My Vote is a free and confidential service that helps Virginians with prior felony convictions restore their voting rights.',
        contact: '844-932-8683 (TOLL FREE)'
      },
      {
        link: 'www.stepupincorporated.org',
        name: 'Step-up Inc',
        description: 'At STEP UP, Inc., we provide early assistance, starting before an inmate is ever released.        By doing this, we can determine what services (if any) the client will need from the moment they are released-it could be a safe place to stay, a job to help them go on with their lives or even new clothing. We work to help meet their needs so these needs don’t become problems that hinder re-entry into society.Our goal is to help the ex-offender become as successful as possible so they don’t become a repeat offender.',
        contact: '5900 E. Virginia Beach Blvd., Suite 102, Norfolk, VA; (757) 588-3151'
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
          <div className="Resource-text" style={{textAlign: "center"}}>
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
            <h1 className="Resource-Heading section-title" style={{textAlign:"left", color: "black"}}>Ex-Offender Assistance</h1>
            <div className="Resource-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
              {SECONDCHANCE_LINKS.map(({ name, link, description }) => (
                <div className="Resource-text" key={name}>
                  <button className="second-chance-button"><a className="Resource-list" href={link}>{name}</a></button>
                  <p className="resource-desc">{description}</p>
                </div>
              ))}
          </div>
          <div className="Resource-row">
            <h1 className="Resource-Heading section-title" style={{textAlign:"left", color: "black"}}>Restoration of Rights</h1>
              {RIGHTS_RESTORATION_LINKS.map(({ name, link, description, contact }) => (
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

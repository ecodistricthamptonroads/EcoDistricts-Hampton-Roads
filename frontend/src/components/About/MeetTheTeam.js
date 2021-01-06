import React from 'react';
import { Card } from 'react-bootstrap';
import garry from '../../assets/images/gary.jpg';
import logo from '../../assets/images/logo.png';

const OtherTeams = [
  `CSC Team
Julio Martinez—Executive Director\n
 Mona Ray—Assistant Director of Sustainability, ECODistrict Development without Displacement\n
 Michele Wiseman—Recycling & Sustainability\n
 Matt Robins—Environmental Regulation, Environmental Justice, Community Engagement\n
 Ally Ackerman—Environmental Engineering, Planning\n
 Chris Crumo—Research & STEM Education\n
 Mitch Brown—Housing, Commmunity Development & Engagement\n
 Yeo Sing—Research, Policy, Community Engagement & Advocacy\n
 Nathan Mictic—Public Health\n
 Dawn Marchand—Equality, Inclusion and Diversity\n
 Eric Moncheif—Sustainability, Communications`,
  `CSC Team(cont.)
Zach Starbuck—Associate Director of ECODistrict, Development without Displacement & Resilience Hub Project\n
 Kanisha Ahmed—Associate Director, of ECODistrict, Resilience Hub Project, Sustinable Jobs Center, Marketing & Community Engagement\n
 Bill Huang—Associate Director of ECODistrict, Energy for All Program, Marketing & Community Engagement\n
 Barbara Marin—Grant Writing & ECODistrict Community Engagement\n
 Ricardo Bonilla—ECODistrict Development without Displacement\n
 Camellia Moses Okpodu—ECODistrict\n
 Anita Stewart—Grant Writing & Administration`,
  `Board of Directors\n
   Matt Robbins\n
   Mitch Brown\n
   Tonya Eddy\n
   Kay Kelsey\n
   Carolyn Aidman\n
   Matt Mitchell\n
   Colleen Kidman\n
   Carl Brown\n
   Art Frazier\n
   Kathy Williams\n
   Melanie Pearson\n
   Ayana Gabriel`,
  `Government and University Partners\n

Government Organizations\n
 Environmental Protection Agency\n
 Federal Emergency Management Agency\n
 National Aeronautics and Space Administration\n
 National Oceanic and Atmospheric Administration\n
 US Department of Energy Better Buildings\n
 National Weather Service\n

Universities\n
 Atlanta Metro State College\n
 Emory University Rollins School of Public Health\n
 Georgia Institute of Technology Serve Learn Sustain\n
 Georgia Institute of Technology Regional Center for Expertise in Education for Sustainable Development`,
  `Nonprofit Partners\n
   100 Black Men of America,\n
    Women in Technology,\n
    GLOBE.GOV,\n
    MOM’s Clean Air Force,\n
    Virginia Environmental Justice Collaborative,\n
    Virginia Green New Deal,\n
    American Public Health Association,\n
    Virginia Organizing,\n
    USCAN,\n
    Dogwood Alliance,\n
    FOREST Circle,\n
    Healthy Portsmouth,\n
    Green Faith,\n
    Interfaith Power and Light,\n
    Chesapeake Climate Action Network,\n
    Virginia Conservation Network,\n
    NAACP,\n
    USGBC,\n
    Equitable Civic Dinners,\n
    Omega Psi Phi Fraternity,\n
    Elizabeth River Project,\n
    Centering Equity in the Building Sector,\n
    Environmental Defense Fund,\n
    100% Network,\n
    NEWHAB,\n
    Energy Efficiency for ALL,\n
    EcoDistrict,\n
    Just Energy Circle,\n
    Regional Leadership Institute,\n
    National Environmental Justice Institute,\n
    Weather Ready Nation Ambassador,\n
    Southeast Climate and Energy Network,\n
    Hampton Roads Transportation Planning,\n
    Citizen Science Association,\n
    Thriving Earth Exchange,\n
    Historic Ebenezer Baptist Church,\n
    Union of Concerned Scientisst,\n
    Sierra Club,\n
    Leadership Atlanta`
];
const CardStyle = {
  padding: '0 5px 0px 5px',
  marginBottom: '30px',
  marginLeft: '30px',
  textAlign: 'center'
};
class MeetTheTeam extends React.Component {
  render() {
    return (
      <div>
        <div className="row" style={{ height: '30vh', background: 'gray' }} />
        <div className="row  justify-content-center " style={{ padding: '5%' }}>
          <Card className="col-3" style={CardStyle}>
            <Card.Img variant="top" src={garry} />
            <Card.Body>
              <Card.Title>Garry A. Harris</Card.Title>
              <h3>
                Founder & President of the Center for Sustainable Communities
              </h3>
              <Card.Text>
                Mr. Harris has more than three decades of experience in the
                energy, environmental and sustainability fields and has
                performed project management, design, construction, quality
                assurance, field engineering, plant operations, training,
                research and regulatory activities at more than eighty power
                generation and facilities internationally…
              </Card.Text>
            </Card.Body>
          </Card>
          {OtherTeams.map(info => {
            const INFO = info.split('\n');
            return (
              <Card className="col-3" style={CardStyle}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                  <Card.Text>
                    <Card.Title>{INFO[0]}</Card.Title>

                    {INFO.slice(1, INFO.length).map(text => (
                      <p>{text}</p>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MeetTheTeam;

// import { Component } from 'react';
// import { connect } from 'react-redux';
// import React from 'react';
// import { Image, Carousel } from 'react-bootstrap';
// import '../assets/stylesheets/app.css';
// import axios from 'axios';

// import other_carousel_1 from '../assets/images/carousel_1.jpg';
// import other_carousel_2 from '../assets/images/carousel_2.jpg';
// import other_carousel_3 from '../assets/images/carousel_3.jpg';
// import other_carousel_4 from '../assets/images/carousel_4.jpg';

// import carousel_main_1 from '../assets/images/land_slideshow_img/images Slideshow-1.png';
// import carousel_main_2 from '../assets/images/land_slideshow_img/images Slideshow-2.png';
// import carousel_main_3 from '../assets/images/land_slideshow_img/images Slideshow-3.png';
// import carousel_main_4 from '../assets/images/land_slideshow_img/images Slideshow-4.png';

// import about_us from '../assets/images/about_us.jpg';
// import what_we_do from '../assets/images/what_we_do.jpg';
// import instagram from '../assets/images/instagram.svg';
// import facebook from '../assets/images/facebook.svg';
// import twitter from '../assets/images/twitter.svg';
// import logo from '../assets/images/logo.png';

// import { Zoom } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';

// // const test_value = {
// //   title: "Lorem ipsum dolor",
// //   description:
// //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec gravida lorem. Cras molestie orci velit, nec venenatis eros",
// //   date: Date.now(),
// //   link: [],
// // };
// const MAIL_CHIMP_EMBEDDED = `<div>

// <div id="mc_embed_signup">
// <form action="https://ecodistricthamptonroads.us4.list-manage.com/subscribe/post?u=51eb002c7ef49ac4bf7de17e2&amp;id=cca6d76921" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
//     <div id="mc_embed_signup_scroll">
// <div class="mc-field-group">
// 	<label for="mce-FNAME">First Name  <span class="asterisk">*</span>
// </label>
// 	<input type="text" value="" name="FNAME" class="required" id="mce-FNAME">
// </div>
// <div class="mc-field-group">
// 	<label for="mce-LNAME">Last Name  <span class="asterisk">*</span>
// </label>
// 	<input type="text" value="" name="LNAME" class="required" id="mce-LNAME">
// </div>
// <div class="mc-field-group">
// 	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
// </label>
// 	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
// </div>
// <div class="mc-field-group size1of2">
// 	<label for="mce-MMERGE3-month">Birthday  <span class="asterisk">*</span>
// </label>
// 	<div class="datefield">
// 		<span class="subfield monthfield"><input class="birthday required" type="text" pattern="[0-9]*" value="" placeholder="MM" size="2" maxlength="2" name="MMERGE3[month]" id="mce-MMERGE3-month"></span> /
// 		<span class="subfield dayfield"><input class="birthday required" type="text" pattern="[0-9]*" value="" placeholder="DD" size="2" maxlength="2" name="MMERGE3[day]" id="mce-MMERGE3-day"></span>
// 		<span class="small-meta nowrap">( mm / dd )</span>
// 	</div>
// </div><div class="mc-address-group">
// 	<div class="mc-field-group">
// 	    <label for="mce-MMERGE4-addr1">Address  <span class="asterisk">*</span>
// </label>
// 		<input type="text" value="" maxlength="70" name="MMERGE4[addr1]" id="mce-MMERGE4-addr1" class="required">
// 	</div>
// 	<div class="mc-field-group">
// 	    <label for="mce-MMERGE4-addr2">Address Line 2</label>
// 		<input type="text" value="" maxlength="70" name="MMERGE4[addr2]" id="mce-MMERGE4-addr2">
// 	</div>
// 	<div class="mc-field-group size1of2">
// 	    <label for="mce-MMERGE4-city">City</label>
// 		<input type="text" value="" maxlength="40" name="MMERGE4[city]" id="mce-MMERGE4-city" class="required">
// 	</div>
// 	<div class="mc-field-group size1of2">
// 	    <label for="mce-MMERGE4-state">State/Province/Region</label>
// 	<input type="text" value="" maxlength="20" name="MMERGE4[state]" id="mce-MMERGE4-state" class="required">
// 	</div>
// 	<div class="mc-field-group size1of2">
// 	    <label for="mce-MMERGE4-zip">Postal / Zip Code</label>
// 		<input type="text" value="" maxlength="10" name="MMERGE4[zip]" id="mce-MMERGE4-zip" class="required">
// 	</div>
// 	<div class="mc-field-group size1of2">
// 	    <label for="mce-MMERGE4-country">Country</label>
// 		<select name="MMERGE4[country]" id="mce-MMERGE4-country" class="required"><option value="164" selected>USA</option><option value="286">Aaland Islands</option><option value="274">Afghanistan</option><option value="2">Albania</option><option value="3">Algeria</option><option value="178">American Samoa</option><option value="4">Andorra</option><option value="5">Angola</option><option value="176">Anguilla</option><option value="175">Antigua And Barbuda</option><option value="6">Argentina</option><option value="7">Armenia</option><option value="179">Aruba</option><option value="8">Australia</option><option value="9">Austria</option><option value="10">Azerbaijan</option><option value="11">Bahamas</option><option value="12">Bahrain</option><option value="13">Bangladesh</option><option value="14">Barbados</option><option value="15">Belarus</option><option value="16">Belgium</option><option value="17">Belize</option><option value="18">Benin</option><option value="19">Bermuda</option><option value="20">Bhutan</option><option value="21">Bolivia</option><option value="325">Bonaire, Saint Eustatius and Saba</option><option value="22">Bosnia and Herzegovina</option><option value="23">Botswana</option><option value="181">Bouvet Island</option><option value="24">Brazil</option><option value="180">Brunei Darussalam</option><option value="25">Bulgaria</option><option value="26">Burkina Faso</option><option value="27">Burundi</option><option value="28">Cambodia</option><option value="29">Cameroon</option><option value="30">Canada</option><option value="31">Cape Verde</option><option value="32">Cayman Islands</option><option value="33">Central African Republic</option><option value="34">Chad</option><option value="35">Chile</option><option value="36">China</option><option value="185">Christmas Island</option><option value="37">Colombia</option><option value="204">Comoros</option><option value="38">Congo</option><option value="183">Cook Islands</option><option value="268">Costa Rica</option><option value="275">Cote D'Ivoire</option><option value="40">Croatia</option><option value="276">Cuba</option><option value="298">Curacao</option><option value="41">Cyprus</option><option value="42">Czech Republic</option><option value="318">Democratic Republic of the Congo</option><option value="43">Denmark</option><option value="44">Djibouti</option><option value="289">Dominica</option><option value="187">Dominican Republic</option><option value="45">Ecuador</option><option value="46">Egypt</option><option value="47">El Salvador</option><option value="48">Equatorial Guinea</option><option value="49">Eritrea</option><option value="50">Estonia</option><option value="51">Ethiopia</option><option value="189">Falkland Islands</option><option value="191">Faroe Islands</option><option value="52">Fiji</option><option value="53">Finland</option><option value="54">France</option><option value="193">French Guiana</option><option value="277">French Polynesia</option><option value="56">Gabon</option><option value="57">Gambia</option><option value="58">Georgia</option><option value="59">Germany</option><option value="60">Ghana</option><option value="194">Gibraltar</option><option value="61">Greece</option><option value="195">Greenland</option><option value="192">Grenada</option><option value="196">Guadeloupe</option><option value="62">Guam</option><option value="198">Guatemala</option><option value="270">Guernsey</option><option value="63">Guinea</option><option value="65">Guyana</option><option value="200">Haiti</option><option value="66">Honduras</option><option value="67">Hong Kong</option><option value="68">Hungary</option><option value="69">Iceland</option><option value="70">India</option><option value="71">Indonesia</option><option value="278">Iran</option><option value="279">Iraq</option><option value="74">Ireland</option><option value="323">Isle of Man</option><option value="75">Israel</option><option value="76">Italy</option><option value="202">Jamaica</option><option value="78">Japan</option><option value="288">Jersey  (Channel Islands)</option><option value="79">Jordan</option><option value="80">Kazakhstan</option><option value="81">Kenya</option><option value="203">Kiribati</option><option value="82">Kuwait</option><option value="83">Kyrgyzstan</option><option value="84">Lao People's Democratic Republic</option><option value="85">Latvia</option><option value="86">Lebanon</option><option value="87">Lesotho</option><option value="88">Liberia</option><option value="281">Libya</option><option value="90">Liechtenstein</option><option value="91">Lithuania</option><option value="92">Luxembourg</option><option value="208">Macau</option><option value="93">Macedonia</option><option value="94">Madagascar</option><option value="95">Malawi</option><option value="96">Malaysia</option><option value="97">Maldives</option><option value="98">Mali</option><option value="99">Malta</option><option value="207">Marshall Islands</option><option value="210">Martinique</option><option value="100">Mauritania</option><option value="212">Mauritius</option><option value="241">Mayotte</option><option value="101">Mexico</option><option value="102">Moldova, Republic of</option><option value="103">Monaco</option><option value="104">Mongolia</option><option value="290">Montenegro</option><option value="294">Montserrat</option><option value="105">Morocco</option><option value="106">Mozambique</option><option value="242">Myanmar</option><option value="107">Namibia</option><option value="108">Nepal</option><option value="109">Netherlands</option><option value="110">Netherlands Antilles</option><option value="213">New Caledonia</option><option value="111">New Zealand</option><option value="112">Nicaragua</option><option value="113">Niger</option><option value="114">Nigeria</option><option value="217">Niue</option><option value="214">Norfolk Island</option><option value="272">North Korea</option><option value="116">Norway</option><option value="117">Oman</option><option value="118">Pakistan</option><option value="222">Palau</option><option value="282">Palestine</option><option value="119">Panama</option><option value="219">Papua New Guinea</option><option value="120">Paraguay</option><option value="121">Peru</option><option value="122">Philippines</option><option value="221">Pitcairn</option><option value="123">Poland</option><option value="124">Portugal</option><option value="126">Qatar</option><option value="315">Republic of Kosovo</option><option value="127">Reunion</option><option value="128">Romania</option><option value="129">Russia</option><option value="130">Rwanda</option><option value="205">Saint Kitts and Nevis</option><option value="206">Saint Lucia</option><option value="324">Saint Martin</option><option value="237">Saint Vincent and the Grenadines</option><option value="132">Samoa (Independent)</option><option value="227">San Marino</option><option value="255">Sao Tome and Principe</option><option value="133">Saudi Arabia</option><option value="134">Senegal</option><option value="326">Serbia</option><option value="135">Seychelles</option><option value="136">Sierra Leone</option><option value="137">Singapore</option><option value="302">Sint Maarten</option><option value="138">Slovakia</option><option value="139">Slovenia</option><option value="223">Solomon Islands</option><option value="140">Somalia</option><option value="141">South Africa</option><option value="257">South Georgia and the South Sandwich Islands</option><option value="142">South Korea</option><option value="311">South Sudan</option><option value="143">Spain</option><option value="144">Sri Lanka</option><option value="293">Sudan</option><option value="146">Suriname</option><option value="225">Svalbard and Jan Mayen Islands</option><option value="147">Swaziland</option><option value="148">Sweden</option><option value="149">Switzerland</option><option value="285">Syria</option><option value="152">Taiwan</option><option value="260">Tajikistan</option><option value="153">Tanzania</option><option value="154">Thailand</option><option value="233">Timor-Leste</option><option value="155">Togo</option><option value="232">Tonga</option><option value="234">Trinidad and Tobago</option><option value="156">Tunisia</option><option value="157">Turkey</option><option value="158">Turkmenistan</option><option value="287">Turks &amp; Caicos Islands</option><option value="159">Uganda</option><option value="161">Ukraine</option><option value="162">United Arab Emirates</option><option value="262">United Kingdom</option><option value="163">Uruguay</option><option value="165">Uzbekistan</option><option value="239">Vanuatu</option><option value="166">Vatican City State (Holy See)</option><option value="167">Venezuela</option><option value="168">Vietnam</option><option value="169">Virgin Islands (British)</option><option value="238">Virgin Islands (U.S.)</option><option value="188">Western Sahara</option><option value="170">Yemen</option><option value="173">Zambia</option><option value="174">Zimbabwe</option></select>
// 	</div>
// </div>
// 	<div id="mce-responses" class="clear">
// 		<div class="response" id="mce-error-response" style="display:none"></div>
// 		<div class="response" id="mce-success-response" style="display:none"></div>
// 	</div>
//     <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_51eb002c7ef49ac4bf7de17e2_cca6d76921" tabindex="-1" value=""></div>
//     <div class="clear"><input type="submit" value="Join US" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
//     </div>
// </form>
// </div>
// <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[0]='EMAIL';ftypes[0]='email';fnames[3]='MMERGE3';ftypes[3]='birthday';fnames[4]='MMERGE4';ftypes[4]='address';fnames[5]='MMERGE5';ftypes[5]='dropdown';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
// </div>`;

// class Land extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       news: [],
//       events: [],
//       eventsIdx: 0,
//       newsIdx: 0
//     };
//   }
//   componentDidMount() {
//     axios.get('/api/event/').then(events => {
//       console.log(events.data);
//       this.setState({ events: events.data });
//     });
//     axios.get('/api/news/').then(news => {
//       console.log(news.data);
//       this.setState({ news: news.data });
//     });
//   }
//   _getDateFormatted(date) {
//     const monthNames = [
//       'Jan',
//       'Feb',
//       'Mar',
//       'Apr',
//       'May',
//       'Jun',
//       'Jul',
//       'Aug',
//       'Sep',
//       'Oct',
//       'Nov',
//       'Dec'
//     ];

//     var mm = date.getMonth();
//     var dd = date.getDate();

//     return [monthNames[mm], (dd > 9 ? '' : '0') + dd].join('-');
//   }

//   getEvents() {
//     const events = [...this.state.events, ...this.state.events];

//     return (
//       <section
//         style={{
//           height: '100vh'
//         }}
//       >
//         <div
//           className={'container-fluid'}
//           style={{
//             width: 'inherit',
//             height: 'inherit'
//           }}
//         >
//           <div className={'row h-100'}>
//             <div className="col-2" />
//             <div className="col-8 my-auto" style={{ textAlign: 'center' }}>
//               <h1 style={{ color: '#dda73c' }}>
//                 <b>Recent Events</b>
//               </h1>
//               {/* News Carousel */}
//               <Carousel
//                 style={{ position: 'relative' }}
//                 interval={1000}
//                 slide={true}
//                 activeIndex={this.state.eventsIdx}
//                 onSelect={(selectedIndex, e) =>
//                   this.setState({ eventsIdx: selectedIndex })
//                 }
//               >
//                 {events.map((event, idx) => {
//                   return (
//                     <Carousel.Item key={event.title + idx}>
//                       <img
//                         className="rounded mx-auto d-block carousel-item-img"
//                         src={event.link || logo}
//                         onError={e => {
//                           e.target.src = logo;
//                         }}
//                         alt={'' + event.title}
//                       />
//                       <Carousel.Caption>
//                         <h2>
//                           <u>{event.title}</u>
//                         </h2>
//                         <h3>@{this._getDateFormatted(new Date(event.date))}</h3>
//                         <p style={{ padding: '5%' }}>{event.description}</p>
//                       </Carousel.Caption>
//                     </Carousel.Item>
//                   );
//                 })}
//               </Carousel>
//             </div>
//             <div className="col-2" />
//           </div>
//         </div>
//       </section>
//     );
//   }
//   getNews() {
//     const NEWS2SHOW = [
//       ...this.state.news
//       // {
//       //   title:
//       //     "SDG Projects in the Atlanta Community Grant Winners Announcement",
//       //   description:
//       //     "The RCE Greater Atlanta Youth Network is excited to announce the four winning projects and teams of the SDG Projects in the Atlanta Community Grant.",
//       // },
//     ];
//     return (
//       <section
//         style={{
//           height: '100vh'
//         }}
//       >
//         <div
//           className={'container-fluid'}
//           style={{
//             width: 'inherit',
//             height: 'inherit'
//           }}
//         >
//           <div className={'row h-100'}>
//             <div className="col-1" />
//             <div className="col-10 my-auto" style={{ textAlign: 'center' }}>
//               <h1 style={{ color: '#dda73c' }}>
//                 <b>Recent News</b>
//               </h1>

//               {/* News Carousel */}
//               <Carousel style={{ padding: '1%' }}>
//                 {NEWS2SHOW.map((news, idx) => (
//                   <Carousel.Item
//                     key={news.title + idx}
//                     style={{ height: '70vh' }}
//                   >
//                     <div
//                       className=""
//                       style={{
//                         borderRadius: '10px'
//                       }}
//                     >
//                       <div
//                         style={{ height: '70vh' }}
//                         className="card-img-top d-flex align-items-center bg-light"
//                       >
//                         <div className="col-4">
//                           <h2>{news.title}</h2>
//                           <h3>By {news.author}</h3>
//                           <h3>{new Date(news.date).toDateString()}</h3>
//                           <p>{news.description}</p>
//                         </div>

//                         <img
//                           className="img-fluid col-8"
//                           src={news.image || other_carousel_1}
//                           style={{
//                             backgroundRepeat: 'no-repeat',
//                             backgroundAttachment: 'fixed',
//                             backgroundPosition: 'center',
//                             borderLeft: '1px solid black',
//                             height: '70vh',
//                             padding: 0
//                             // width:100%
//                           }}
//                         />
//                       </div>
//                     </div>
//                   </Carousel.Item>
//                 ))}
//               </Carousel>
//             </div>
//             <div className="col-1" />
//           </div>
//         </div>
//       </section>
//     );
//   }
//   getMainCarousel() {
//     const images = [
//       carousel_main_1,
//       carousel_main_2,
//       carousel_main_3,
//       carousel_main_4
//     ];
//     const zoomOutProperties = {
//       duration: 5000,
//       transitionDuration: 100,
//       infinite: true,
//       indicators: false,
//       scale: 0.1,
//       arrows: false
//     };
//     return (
//       <section
//         style={{ height: '120vh', width: '100vw', padding: 0 }}
//         className="slide-container col-12"
//       >
//         <Zoom {...zoomOutProperties}>
//           {images.map((each, index) => (
//             <img
//               key={index}
//               style={{
//                 backgroundRepeat: 'no-repeat',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center center',
//                 height: '120vh',

//                 filter: 'brightness(50%)'
//               }}
//               src={each}
//             />
//           ))}
//         </Zoom>
//       </section>
//     );
//   }
//   render() {
//     return (
//       <div
//         className="col-12"
//         style={{
//           padding: 0,
//           background: 'linear-gradient(180deg, #1D84E3 66.55%, #FFFFFF 100%)'
//         }}
//       >
//         {/* Starting carousel */}
//         {this.getMainCarousel()}
//         <section
//           style={{
//             backgroundImage: `url('${other_carousel_2}')`,

//             textAlign: 'left',
//             height: '100vh',
//             backgroundAttachment: 'fixed',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: 'cover'
//           }}
//         >
//           <div
//             className={'container-fluid'}
//             style={{
//               color: '#ffffff',
//               background:
//                 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2))',
//               width: 'inherit',
//               height: 'inherit'
//             }}
//           >
//             <div className={'row h-100'}>
//               <div className="col-9 my-auto" style={{ padding: '5%' }}>
//                 <div
//                   style={{
//                     fontSize: '5vw',
//                     fontFamily: 'Rozha One, serif',
//                     color: '#dda73c'
//                   }}
//                 >
//                   Connecting the Neighborhood
//                 </div>
//                 <div style={{ fontSize: '2.5vw' }}>
//                   <div style={{ marginBottom: '2vh' }}>
//                     ECODistrict
//                     <br />
//                     Hampton Roads, VA
//                   </div>
//                   <div>Are you in the district?</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/*Who are we? */}

//         {/*Who are we? */}
//         {/* <section
//           style={{
//             backgroundImage: `url('${about_us}')`,
//             backgroundAttachment: 'fixed',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: 'cover',
//             textAlign: 'center',
//             height: '100vh'
//           }}
//         >
//           <div
//             className={'container-fluid'}
//             style={{
//               color: '#ffffff',
//               backgroundColor: 'rgba(0, 0, 0, 0.7)',
//               width: 'inherit',
//               height: 'inherit'
//             }}
//           >
//             <div className={'row h-100'}>
//               <div className="col-1" />
//               <div
//                 className="col-5 my-auto"
//                 style={{
//                   fontSize: '5vw',
//                   fontFamily: 'Rozha One, serif'
//                 }}
//               >
//                 <div style={{ color: '#dda73c' }}>Who are we?</div>
//               </div>
//               <div
//                 className="col-6 my-auto"
//                 style={{
//                   fontSize: '2.5vw',
//                   backgroundColor: 'rgba(0, 0, 0, 0.6)',
//                   // borderRadius: "30px/30px",
//                   borderRadius: 0,
//                   padding: '35px'
//                 }}
//               >
//                 Eco Districts Hampton Roads hopes to create a beautiful and
//                 sustainable community within Virginia's Hampton Roads, the
//                 largest African American community.
//                 <div
//                   style={{
//                     fontSize: '3vw',
//                     fontFamily: 'Rozha One, serif',
//                     paddingTop: '1rem'
//                   }}
//                 >
//                   <button
//                     style={{
//                       color: 'black',
//                       backgroundColor: '#98B391',
//                       borderRadius: 10
//                     }}
//                   >
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//               <div className="col-1" />
//             </div>
//           </div>
//         </section> */}

//         {/* What we do! */}
//         {/* <section
//           style={{
//             backgroundImage: `url('${what_we_do}')`,
//             backgroundAttachment: 'fixed',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: 'cover',
//             textAlign: 'center',
//             height: '100vh'
//           }}
//         >
//           <div
//             className={'container-fluid'}
//             style={{
//               color: '#ffffff',
//               backgroundColor: 'rgba(0, 0, 0, 0.7)',
//               width: 'inherit',
//               height: 'inherit'
//             }}
//           >
//             <div className={'row h-100'}>
//               <div className="col-1" />
//               <div
//                 className="col-6 my-auto"
//                 style={{
//                   fontSize: '2.5vw',
//                   backgroundColor: 'rgba(0, 0, 0, 0.6)',
//                   // borderRadius: "30px/30px",
//                   borderRadius: 0,
//                   padding: '20px'
//                 }}
//               >
//                 <div>
//                   In order to help the community, Eco Districts Hampton Roads
//                   conducts multiple projects done by volunteers in order to fix
//                   various problems identified by residents
//                 </div>
//                 <div
//                   style={{
//                     fontSize: '4vw',
//                     fontFamily: 'Rozha One, serif'
//                   }}
//                 >
//                   <button
//                     style={{
//                       color: 'black',
//                       backgroundColor: '#98B391',
//                       borderRadius: 10
//                     }}
//                   >
//                     Learn More!
//                   </button>
//                 </div>
//               </div>
//               <div
//                 className="col-5 my-auto"
//                 style={{
//                   fontSize: '5vw',
//                   fontFamily: 'Rozha One, serif'
//                 }}
//               >
//                 <div style={{ color: '#EBCB8C' }}>What do we do?</div>
//               </div>
//               <div className="col-1" />
//             </div>
//           </div>
//         </section> */}

//         {/* Recent News */}
//         {this.getNews()}
//         {this.getEvents()}
//         {/* Join the community */}
//         <section
//           style={{
//             height: '100vh'
//           }}
//         >
//           <div
//             className={'container-fluid'}
//             style={{
//               width: 'inherit',
//               height: 'inherit'
//             }}
//           >
//             <div className={'row h-100'} style={{ height: 'max-content' }}>
//               <div className="col-1" />
//               <div className="col-3 my-auto" style={{ textAlign: 'left' }}>
//                 <div style={{ fontSize: '3vw', color: 'white' }}>Join the</div>
//                 <div
//                   style={{
//                     fontSize: '4vw',
//                     color: '#eca61f',
//                     marginTop: '-2vw'
//                   }}
//                 >
//                   community
//                   <span style={{ color: 'white' }}>.</span>
//                 </div>
//               </div>
//               <div className="col-1" />
//               <div
//                 className="Mail-Chimp-signup"
//                 dangerouslySetInnerHTML={{ __html: MAIL_CHIMP_EMBEDDED }}
//               />
//               <div className="col-1" />
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <section style={{}}>
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col" style={{ textAlign: 'center', padding: 70 }}>
//                 <a
//                   href="https://www.instagram.com/ecodistricthamptonroads/"
//                   style={{ padding: '0px 20px' }}
//                 >
//                   <img src={instagram} width={'65px'} height={'65px'} />
//                 </a>
//                 <a
//                   href="https://www.facebook.com/Center-for-Sustainable-Communities-Atlanta-219072231567212"
//                   style={{ padding: '0px 20px' }}
//                 >
//                   <img src={facebook} width={'65px'} height={'65px'} />
//                 </a>
//                 <a
//                   href="https://twitter.com/eco_dis_hampton"
//                   style={{ padding: '0px 20px' }}
//                 >
//                   <img src={twitter} width={'65px'} height={'65px'} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }
// }

// export default Land;

import React, { Component } from 'react';

class Featured extends Component {
  render() {
    const title = 'FEATURED TRAIL';
      return (  
        <div className="featCont">
          <h3 className="App-featured">{title}</h3>
        <div className='image'>
        <img src='./images/yosemite.jpg' className="feat" alt="yosemite"/>
        <ul className="list-group">
  <div className="list">
  <li className="list-group-item">Trail Name:</li>
  <div className="trailName">
  <br></br>
  <h5>YOSEMITE FALLS</h5>
  </div>
  <li className="list-group-item">Description:</li>
  <p className="trailDesc">
  Combining Upper Yosemite Falls Trail and the
  trail that leads to Yosemite Point creates a 
  great hike that offers the opportunity to get 
  near an iconic waterfall and breathtaking views
   of Yosemite Valley and the surrounding mountains. 
   Departing from famous Camp 4, the trail climbs 
   a large number of switchbacks for a mile before 
   arriving at Columbia Rock. From here, great views of Half Dome,
   the Valley, Glacier Point and a large portion of the Southern Rim spread out before you. This hike is good enough for some, but better views await. At roughly 1.4 miles, a small trail breaks off to the right that descends briefly to the railing at Oh My Gosh Rock where views of Upper Yosemite Falls, the Middle Cascades, and Lower Yosemite Falls can be viewed. 
  </p>
  <li className="list-group-item">Class:</li>
  <div className="difficulty">
  <i className="far fa-gem"></i>
  <i className="far fa-gem"></i>
  <i className="far fa-gem"> INTERMEDIATE</i>
  </div>
  <li className="list-group-item">Rating</li>
  <div className="star">
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="far fa-star"></i>
  </div>
  </div>
</ul>
        </div>
        </div>
      )
  }
}
export default Featured;
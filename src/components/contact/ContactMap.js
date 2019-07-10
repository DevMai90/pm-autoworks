import React, { Component } from 'react';
import API_KEY from '../../APIKeys';

class ContactMap extends Component {
  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${
        API_KEY.mapAPI
      }&callback=initMap`
    );

    window.initMap = this.initMap;
  };

  initMap = () => {
    const location = { lat: 37.3121774, lng: -121.868332 };
    // Prepend window so that we can access google
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 14
    });

    // Add marker to map
    const marker = new window.google.maps.Marker({
      position: location,
      map: map,
      title: 'PM Autoworks'
    });

    marker.addListener('click', () =>
      window.open(
        'https://www.google.com/maps/place/PM+Autoworks+Subaru+Specialist/@37.3121774,-121.868332,17z/data=!4m12!1m6!3m5!1s0x808e33236795199f:0xad89a70479f3d012!2sPM+Autoworks+Subaru+Specialist!8m2!3d37.3121774!4d-121.8661433!3m4!1s0x808e33236795199f:0xad89a70479f3d012!8m2!3d37.3121774!4d-121.8661433',
        '_blank'
      )
    );
  };
  render() {
    return <div id="map" style={{ height: '100vh' }} />;
  }
}

const loadScript = url => {
  // Reference for FIRST script tag
  const index = window.document.getElementsByTagName('script')[0];
  const script = window.document.createElement('script');
  script.src = url;
  script.async = true;
  script.defer = true;
  // Find parent node of the first script. Then insert our new script first.
  index.parentNode.insertBefore(script, index);
};

export default ContactMap;

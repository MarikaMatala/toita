import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import axios from "axios";

function App() {
  const [courses, setCourses] = useState([])
  const position = [62, 26]
  const zoom = 6

  useEffect(() => {
    axios
      .get('http://localhost:3001/courses')
      .then(response => {
        console.log(response.data)
        setCourses(response.data)
      })
  }, [])

  const markers = courses.map((course,index) => 
    <Marker position={[course.lat, course.lng]} key={index}>
      <Popup>
        <b>{course.course}</b><br/>
        {course.address}<br/>
        {course.phone}<br/>
        {course.email}<br/>
        <a href={course.web} target="_blank" rel="noopener noreferrer">{course.web}</a><br/>
        <br/>
        <i>{course.text}</i>
      </Popup>
    </Marker>
  )

  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers}
    </MapContainer>
  );
}

export default App;


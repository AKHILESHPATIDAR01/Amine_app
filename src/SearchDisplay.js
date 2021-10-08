import React, { useEffect, useState } from "react";
import { Card, InputGroup, Button } from "reactstrap";
import { FormControl } from "react-bootstrap";




function SearchDisplay() {
  const [data, setData] = useState([]);

  let handle = () =>{
    fetch('https://api.aniapi.com/v1/anime/', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0MiIsIm5iZiI6MTYzMzY5NDc1NCwiZXhwIjoxNjM2Mjg2NzU0LCJpYXQiOjE2MzM2OTQ3NTR9.Y3D-cf9IpwWJfnJyKvZeulICUeaoKJbbG91d9tRQH8s',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }}).then((res) => res.json()).then((json) => {
          setData(json.data.documents);
      });
  }

  useEffect(() => {
    handle();
  });

  return (
    <div className="col-md-12">
      <div className="d-flex justify-content-between">
        <div>
          <InputGroup className="">
            <FormControl
              placeholder="Title"
              aria-label="title"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Button
            </Button>
          </InputGroup>
        </div>
        <div>
          <InputGroup className="">
            <FormControl
              placeholder="Genre"
              aria-label="genre"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2" >
              Button
            </Button>
          </InputGroup>
        </div>
        <div>
          <InputGroup className="">
            <FormControl
              placeholder="Description"
              aria-label="description"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Button
            </Button>
          </InputGroup>
        </div>
      </div>
      <div>
        {data.map((item,key)=>{
          return(
            <Card className="mt-4">
              <div className="p-4">
                <div><span>Anime Name: </span> {item.titles.en}</div>
                <div><span>Trailer Url: </span> {item.trailer_url}</div>
                <div><span>Description: </span> {item.descriptions.en}</div>
                <div><span>Season year: </span>{item.season_year}</div>
                <div><span>No. of Episodes: </span>{item.episodes_count}</div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default SearchDisplay;


// fetch('https://api.aniapi.com/v1/user_story', {
//     method: 'GET',
//     headers: {
//       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0MiIsIm5iZiI6MTYzMzY5NDc1NCwiZXhwIjoxNjM2Mjg2NzU0LCJpYXQiOjE2MzM2OTQ3NTR9.Y3D-cf9IpwWJfnJyKvZeulICUeaoKJbbG91d9tRQH8s',
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     }
//   });
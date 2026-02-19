import React from "react";
import Card from "./components/Card";
import "./App.css";
import { User, Users } from "lucide-react";
import Bond from "./components/Bond";
import Arr from "./components/Arr";

const App = () => {
  const jobs = [
    {
      brandLogo:
        "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      location: "Menlo Park, USA",
      pay: "$65/hour",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThgM-tQfGwtzdkTthTa08J7zhjaMOhP9L8Nw&s",
      companyName: "Amazon",
      datePosted: "2 days ago",
      location: "Seattle, USA",
      pay: "$70/hour",
      post: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Mid Level",
    },
    {
      brandLogo: "https://pngimg.com/d/apple_logo_PNG19688.png",
      companyName: "Apple",
      datePosted: "1 week ago",
      location: "Cupertino, USA",
      pay: "$85/hour",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
    },
    {
      brandLogo:
        "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "3 days ago",
      location: "Los Gatos, USA",
      pay: "$90/hour",
      post: "React Developer",
      tag1: "Contract",
      tag2: "Senior Level",
    },
    {
      brandLogo:
        "https://media.designrush.com/inspiration_images/839353/conversions/google-new-logo-design-mobile.jpg",
      companyName: "Google",
      datePosted: "4 days ago",
      location: "Mountain View, USA",
      pay: "$95/hour",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
      companyName: "Microsoft",
      datePosted: "6 days ago",
      location: "Redmond, USA",
      pay: "$80/hour",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
    },
    {
      brandLogo:
        "https://i.pinimg.com/736x/56/3a/a2/563aa2189ef92dc242a7db5b91078804.jpg",
      companyName: "Adobe",
      datePosted: "2 weeks ago",
      location: "San Jose, USA",
      pay: "$75/hour",
      post: "Product Designer",
      tag1: "Part Time",
      tag2: "Mid Level",
    },
    {
      brandLogo:
        "https://images.seeklogo.com/logo-png/32/2/tesla-logo-png_seeklogo-329764.png",
      companyName: "Tesla",
      datePosted: "1 day ago",
      location: "Austin, USA",
      pay: "$88/hour",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/thumbnails/050/816/820/small/uber-transparent-icon-free-png.png",
      companyName: "Uber",
      datePosted: "3 days ago",
      location: "San Francisco, USA",
      pay: "$78/hour",
      post: "React Engineer",
      tag1: "Contract",
      tag2: "Mid Level",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicMDzk5BVKCMaspR4wow1fC8Kt9fDI-ACBg&s",
      companyName: "Airbnb",
      datePosted: "5 days ago",
      location: "San Francisco, USA",
      pay: "$82/hour",
      post: "Frontend Architect",
      tag1: "Full Time",
      tag2: "Senior Level",
    },
  ];
  console.log(jobs);

  return (
    <div className="parent">
      {/* 
   {<Bond name="Satyam"  /> }
    { <Bond name="Rahul"  />}

     { <Bond name="Shivam"  />}
    { <Bond age ="90"  /> }  */}
      {/* i want to print the whole arr but the main problem is that  */}
      {jobs.map(function (elem,idx) {
        return ( <div key={idx}>
          <Card
            company={elem.companyName}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
            date={elem.datePosted}
            brandLogo={elem.brandLogo}
          />
          </div>
        );
      })}
    </div>
  );
};

export default App;

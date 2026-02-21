import React from "react";

import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
const App = () => {
  const users = [
    { 
      img: "https://plus.unsplash.com/premium_photo-1674055047782-76ccc87a1110?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       intro: "",
       color:'blue', 
       tag: "Satisfied" }, 

       { img:"https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       intro: " ", 
       tag: "Better",
      color:'green'
      },
       

        { img: "https://media.istockphoto.com/id/1140755549/photo/successful-businesswoman-working-at-cafe.jpg?s=1024x1024&w=is&k=20&c=1oFHOt4QnqdK7TUKmTTYZLK4m1kW8f5OTReBmp8TRPk=",
       intro: " ", 
       tag: "Satisfied" },
        { img:"https://media.istockphoto.com/id/1778048108/photo/a-middle-aged-woman-with-brown-hair-is-sitting-at-home-and-using-a-laptop-and-a-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=SE8CpKWd6yLnkbQZwgyxuR0nq3YkP-7hq_0yZAEMgoQ=",
       intro: " ", 
       tag: "Underbanked",
       color:'orange'
      },

       { img:"https://plus.unsplash.com/premium_photo-1682096630303-83ea15caadca?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       intro: " ", 
       tag: "Underbanked",
       color:'pink',
      },

       { img:"https://media.istockphoto.com/id/1436120562/photo/attractive-young-woman-talking-on-the-phone-and-working-on-a-laptop.jpg?s=1024x1024&w=is&k=20&c=ZsCd5T3o4CcpoMw_ob5UY8j_31GBQsLGYHorHXKXd-g=",
       intro: " ", 
       tag: "Underbanked" ,
       color:'green'
      },

       { img:"https://plus.unsplash.com/premium_photo-1723485611501-d5575466fe59?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       intro: " ", 
       tag: "Marvelous",
      color:'pink',
      },

       { img:"https://plus.unsplash.com/premium_photo-1661347844523-e5179ecbcd55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       intro: " ", 
       tag: "Satisfied",
      color:'lightred ',
      },
       { img:"https://plus.unsplash.com/premium_photo-1661346042133-c877294965e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       intro: " ", 
       color:'green',
       tag: "Exellent" },

       { img:"https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       intro: " ", 
       color:'orange',
       tag: "Average" },

       { img:"https://plus.unsplash.com/premium_photo-1714229505229-c7eee930f5e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       intro: " ", 
       color:'royalblue',
       tag: "UnderBanked" }
      ];
  return (
    <div>
      <Section1  users={users}/>
      <Section2  />
    </div>
  );
};

export default App;

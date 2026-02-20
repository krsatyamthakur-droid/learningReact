import Card from "./card.jsx";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Aman"
        age={19}
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqeaR9lOOvePc_IDFtwsojfI4R2VJ_Tq0a5g&s"
      />
      <Card
        user="Satyam Kumar"
        age={34434}
        img="https://cdn.mos.cms.futurecdn.net/v67HiJqNwZxtvjGpaFYVbE.jpg"
      />
      <Card
        user="Rahul Thakur"
        age={324}
        img="https://i.dailymail.co.uk/1s/2019/12/24/15/22630564-7824851-Worth_it_You_get_to_the_point_on_the_last_day_where_you_can_smel-a-33_1577201108461.jpg"
      />
    </div>
  );
};

export default App;

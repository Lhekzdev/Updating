import React from "react";
import Card from "./Card";
import contact from "../contacts"

function createCard(contact){
  return<Card 
  id={contact.id}
  key={contact.id}
  name={contact.name}
 img={contact.imgURL}
 tel={contact.phone}
 email={contact.email}


/>
  
}

function App() {

  return (


   <div>


      <h1 className="heading">My Contacts</h1>

      {contact.map(createCard)}
    
    
{/* <Card
name={contact[0].name}
img={contact[0].imgURL}
tel ={contact[0].phone}
email ={contact[0].email}
/>
<Card
name={contact[1].name}
img={contact[1].imgURL}
tel ={contact[1].phone}
email ={contact[1].email}
/>
<Card
name={contact[2].name}
img={contact[2].imgURL}
tel ={contact[2].phone}
email ={contact[2].email}
/> */}



    {/* <Card name="Beyonce" imgUrl="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" tel="+123 456 789" email="b@beyonce.com"/>
    <Card name="Jack Bauer" imgUrl="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"  tel="+987 654 321" email="jack@nowhere.com"  />
    <Card name="Chuck Norris" imgUrl="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"  tel="+918 372 574" email="gmail@chucknorris.com"  />
       */}
    </div>
  );
}

export default App;

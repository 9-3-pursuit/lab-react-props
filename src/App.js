import React from "react";
import TopBar from "./Components/TopBar";
import DonationForm from "./Components/DonationForm";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress";

import "./App.css";

const targetAmount = 1000;



const donations = [
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here, take a break from work!",
    id: 2,
    name: "Rami",
  },
  {
    amount: 20,
    caption: "LOL! You are too funny. Happy to do this for you. :)",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 5,
    caption: "Have fun!",
    id: 4,
    name: "Malinda",
  },
  {
    amount: 30,
    caption: "Come visit me in Miami!",
    id: 5,
    name: "Sam",
  },
];




// function App () {
  const totalDonated = donations.reduce((acc, ele)=> (acc += ele.amount), 0);

  export default class App extends React.Component {
    render(){
      return (
    
  
    <>
    <TopBar />
      {/* <TopBar  donations = {donations} targetAmount = { targetAmount}/> */}
      <main className="container">
        <section className="sidebar"> <RecentDonations donations= {donations}/>
        </section>
        <section className="">
         
          <Progress  total= {totalDonated} targetAmount = {targetAmount}/>

          <DonationForm donationNumber={donations.length + 1}/>
          

          
        </section>
      </main>
    </>
    );
  
};
  };



import React from "react";
import TopBar from "./Components/TopBar";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress"
import DonationForm from "./Components/DonationForm"
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

function App() {
  // Finds the total amount raised so far (for Progress.js)
  let amountRaised = 0
  donations.forEach((donation) => {
    amountRaised += donation.amount
  })
  // Recent Donations Container
  const allDonations = donations.map((item) => {
    return (
      <li>
        <span>{item.name} donated ${item.amount}</span> {item.caption}
      </li>
    );
  })
  // Donation Form
  // Establishes which number donator the user is
  let donatorNum = 1
  donations.forEach((donation) => {
    donatorNum += 1
  })
  // Form logic


  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar">
          <RecentDonations donation={allDonations}/>
        </section>
        <section className="">
          <Progress raised={amountRaised} target={targetAmount}/>
          <DonationForm donNum={donatorNum}/>
        </section>
      </main>
    </>
  );
}

export default App;

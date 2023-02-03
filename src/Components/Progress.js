export default function Progress({allDonations, target}) {
console.log("all donations", allDonations);
let donated = 0;
for(let donate of allDonations.amount){
  donated += donate
}


  return <section className="progress">
  <h2>
    Raised <span className="secondary">$0</span> of
    <span className="secondary">${target}</span>
  </h2>
</section>
}

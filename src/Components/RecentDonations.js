const RecentDonations = (props) => {
    return(
      <section>
  <h2>Recent Donations</h2>
  <ul>
    {props.donationGiven.map((donated) =>{
      return (
        <li key={donated.id}><span>{donated.name} donated ${donated.amount}</span>{donated.caption}</li>
      )
    })}
    {/* <li><span>Jo donated $25</span>You really need this. Really.</li>
    <li><span>Rami donated $10</span>Here, take a break from work!</li> */}
  </ul>
</section>
    )
  };

export default RecentDonations;

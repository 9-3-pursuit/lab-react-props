export default function RecentDonations( { donations } ) {
  const recentDonation = donations.map((donation) => {
    return <li><span className="sidebar">{donation.name} donated ${donation.amount}</span> 
    {donation.caption}</li>
        
      
  })

  
  return (
    <div>
      <h1>Recent Donations</h1>
      <ul>{ recentDonation }</ul>
    </div>
  );
}

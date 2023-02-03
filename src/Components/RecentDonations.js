

export default function RecentDonations({donationInfo}) {
  
  return (
    <section>
  <h2>Recent Donations</h2>
  <ul>
      {donationInfo.map((donation, i) => {
        return (
          <li key={i}><span>{donation.name} donated ${donation.amount}</span>{donation.caption}</li>
        );
      })}
      
    </ul>
</section>
  );
}

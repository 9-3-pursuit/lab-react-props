export default function RecentDonations({donations}) {
  const donorInfo = donations.map(donation => {
    return (
      <div> 
        <p> {donation.name} donated ${donation.amount}</p>
        <p> {donation.caption}</p>
      </div>
    )
  })
    return (
      <div>
        <h1>
          Recent Donations
        </h1>
        {donorInfo}
      </div>
    )

}

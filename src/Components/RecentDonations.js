import "./RecentDonations.css"

export default function RecentDonations({ donations }) {
  const donorInfo = donations.map(donation => {
    return(
      <div key={donation.id} className="donorDiv">
        <p className="name">{donation.name} donated ${donation.amount}</p>
        <p className="caption">{donation.caption}</p>
      </div>
    )
  })

  return(
    <div className="recentDonationsDiv">
      <h2>Recent Donations</h2>
      {donorInfo}
    </div>
  )
}

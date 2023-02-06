export default function RecentDonations({ donations }) {
  const entries = donations.map(donation => {
    return (
 <div>
  <li><span>{donation.name} donated ${donation.amount}</span>
  <p>{donation.caption}</p></li>
 </div>


    )
  }); return (
    <div>
      <h2>Recent Donations</h2>
      <ul>
      {entries}
      </ul>
    </div>
  )
}
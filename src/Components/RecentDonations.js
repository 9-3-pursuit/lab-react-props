import "./RecentDonations.css"

export default function RecentDonations(props) {
  return (
    <div class="recentDonations">
      <h2>Reacent Donations</h2>
      <ul>
        {props.donations.map((donation) => {
          return <li><span>{donation.name} donated ${donation.amount}</span> {donation.caption}</li>
        })}
      </ul>
    </div>
    );
}

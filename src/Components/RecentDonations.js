export default function RecentDonations(props) {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {props.donations.map((donation) => {
          return (
            <li>
              <span>
                {donation.name} donated ${donation.amount}
              </span>
              {donation.caption}
            </li>
          );
        })}
      </ul>
    </section>
  );
  // return null;
}

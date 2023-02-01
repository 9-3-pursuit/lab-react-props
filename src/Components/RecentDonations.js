export default function RecentDonations(props) {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {props.recentDonations.map((item) => {
          return (
            <li key={item.id}>
              <span>
                {item.name} donated ${item.amount}
              </span>
              {item.caption}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

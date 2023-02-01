export default function RecentDonations({ donations }) {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donations.map(({ amount, id, caption, name }) => (
          <li key={id}>
            <span>
              {name} donated ${amount}
            </span>
            {caption}
          </li>
        ))}
      </ul>
    </section>
  );
}

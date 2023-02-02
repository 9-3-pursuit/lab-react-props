const RecentDonations = (props) => {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {props.donations.map((donor) => {
          return (
            <li key={donor.id}>
              <span>
                {donor.name} donated ${donor.amount}
              </span>
              {donor.caption}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default RecentDonations;

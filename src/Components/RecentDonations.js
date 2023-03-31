export default function RecentDonations(props) {
  const {allDonations} = props;
  const recentlyDonated = allDonations.map((donated) => {
    return (
      <li key={donated.name}>
        <span>{donated.name} donated</span> {donated.amount}
        <span>{donated.caption}</span>

      </li>
    )
  })
  return (

          <section>
            <h2>Recent Donations</h2>
            <ul>{recentlyDonated}</ul>
          </section>
  );
};
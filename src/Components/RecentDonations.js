const RecentDonations = (props) => {
  let recent = props.donations.map((props) => {
    return (
      <li>
        <span>
          {props.name} donated ${props.amount}
        </span>
        {props.caption}
      </li>
    );
  });
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>{recent}</ul>
    </section>
  )
};

export default RecentDonations;
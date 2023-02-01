const RecentDonations = (props) => {
  const {name, amount, caption} =props
  return (
    <section>
      <h2>RecentDonations</h2>
      <ul>
        <li><span>{name} donated ${amount}</span></li>
      </ul>
    </section>
  ) 
};

export default RecentDonations


export default function RecentDonations(props) {
  const {recentDonations} = props
  
    return (<>
  <section>
  <h2>Recent Donations</h2>
  <ul>
    {recentDonations.map(recentDonation => {
      return <li key = {recentDonation.id}><span>{recentDonation.name} donated ${recentDonation.amount}</span>{recentDonation.caption}</li>
    })}
  </ul>
</section>
  </>);
}

export default function RecentDonations(props) {
  console.log(props.recentDonations)
  return (
  <section>
  <h2>Recent Donations</h2>
  <ul>
  {props.recentDonations.map((donated)=> {
    return (
      <li key={donated.id}><span>{donated.name} donated ${donated.amount}</span>{donated.caption}</li>
    )
  })}
  </ul>
</section>
  )
}

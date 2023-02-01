function RecentDonations({ donations }) {
  console.log(donations)
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>

      {<li><span>${donations.name} donated ${donated.amount}</span>${donations.caption}</li>}  

      </ul>
    </section>

  )
}
export default RecentDonations
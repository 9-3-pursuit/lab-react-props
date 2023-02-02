function RecentDonations(props) { //can destructure inm the function parameter

  // console.log(donations)
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {props.donations.map((givenAmts) => {

          return (<li><span>{givenAmts.name} donated ${givenAmts.amount}</span>{givenAmts.caption}</li>)
        })}


      </ul>
    </section>

  )
}
export default RecentDonations
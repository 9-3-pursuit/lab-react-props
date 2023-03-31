
export default function Progress({allDonations, target}) {

    const donate = (allDonations) => {
      let sum = 0;
      for(let i=0;i<allDonations.length;i++){
        sum += Number(allDonations[i].amount)
      }
        return sum
    }
  return (
        <section className="progress">
          <h2>Raised <span className="secondary">${donate(allDonations)}</span> of
          <span className="secondary">${target}</span>
          </h2>
        </section>
   );
}
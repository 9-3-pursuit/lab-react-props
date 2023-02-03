
export default function Progress({donations, target}) {

  const getTotal = (donations) => {

    let total = 0;
    for (let donation of donations) {
      total += parseInt(donation.amount);
    }
    return total.toFixed();
  }
  
 const total = getTotal(donations)
  

 return (
     <section className="progress">
   <h2>
     Raised <span className="secondary">${total}</span> of
     <span className="secondary"> ${target}</span>
   </h2>
 </section>
   )
 }




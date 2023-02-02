export default function Progress({progress , target}) {
  
  const getTotal = (progress) => { 
    let total = 0;  
    progress.forEach((donation) => {
      total += donation.amount;
    });

    return total;
  };
  const donatedTotal = getTotal(progress)
  

  return (
    <div>
      <h1>Raised <span className="secondary">${donatedTotal}</span> of <span className="secondary"> ${target}</span></h1>
    </div>
  );
}


function Progress({donations, targetAmount}) {
console.log(donations, targetAmount)

let sum = 0; 
for (let i = 0; i < donations.length; i++) {
 sum += Number(donations[i].amount) //loop to get the amount from the array
}
return(
  <section className="progress">
  <h2>
    Raised <span className="secondary">${sum}</span> of 
    <span className="secondary">  ${targetAmount}</span>
  </h2>
</section>

)

}
export default Progress
import {useState} from "react";



function Facts() {
const [fact, setFact] = useState("See a fun fact here");

const fetchFact = () => {
    const num = Math.floor(Math.random() * 1001); //Will return a number between 0 and 1000
    const url = new URL(`http://numbersapi.com/${num}`)
    url.searchParams.set('notfound', 'floor')
    fetch(url).then(res => res.text())
    .then(setFact)
    .catch(error => console.error('Oh no: ' + error ))
}

    return(
        <div className='fact-txt'>
            <h3 > API understanding</h3>
            <p className="fact"> {fact} </p>
            <button className="fact-button" onClick={fetchFact}>Get a fact!</button>
        </div>
    )
};

export default Facts;
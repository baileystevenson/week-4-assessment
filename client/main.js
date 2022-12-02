const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
fortuneBtn.addEventListener('click', getFortune)


const goalBtn = document.getElementById("goalButton")

const getGoal = () => {
    axios.get("http://localhost:4000/api/goal/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};
goalBtn.addEventListener('click', getGoal)


const refBtn = document.getElementById("referenceButton")

const getRef = () => {
    axios.get("http://localhost:4000/api/reference/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};
refBtn.addEventListener('click', getRef)





const accomplishContainer = document.querySelector('#accomplish')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/`

const goalCallback = ({ data: accomplish}) => displayAccomplish(accomplish)
const errCallback = err => console.log(err)


const createAccomplish = body => axios.post(baseURL, body).then(goalCallback).catch(errCallback)



function submitHandler(e) {
    e.preventDefault()

    let goal = document.querySelector('#goal')
    

    let bodyObj = {
        goal: goal.value
    }

    createAccomplish(bodyObj)}
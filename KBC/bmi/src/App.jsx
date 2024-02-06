import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";


function App() {
  const[username, setusername] = useState(null);
  const[questionnumber, setquestionnumber] = useState(1);
  const[stop, setstop] = useState(false);
  const[earned, setearned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Who painted the Mona Lisa?",
      answers: [
        {
          text: "Vincent van Gogh",
          correct: false,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Leonardo da Vinci",
          correct: true,
        },
        {
          text: "Michelangelo",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which planet is known as the 'Red Planet'?",
      answers: [
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Mars",
          correct: true,
        },
        {
          text: "Jupiter",
          correct: false,
        },
        {
          text: "Saturn",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What is the largest ocean in the world?",
      answers: [
        {
          text: "Atlantic Ocean",
          correct: false,
        },
        {
          text: "Indian Ocean",
          correct: false,
        },
        {
          text: "Arctic Ocean",
          correct: false,
        },
        {
          text: "Pacific Ocean",
          correct: true,
        },
      ],
    },
    {
    id: 4,
    question: "Who is the author of the Harry Potter book series?",
    answers: [
      {
        text: "J.R.R. Tolkien",
        correct: false,
      },
      {
        text: "J.K. Rowling",
        correct: true,
      },
      {
        text: "George R.R. Martin",
        correct: false,
      },
      {
        text: "Dan Brown",
        correct: false,
      },
    ],
  },
  {
  id: 5,
  question: "What is the tallest mountain in the world?",
  answers: [
    {
      text: "Mount Kilimanjaro",
      correct: false,
    },
    {
      text: "Mount Everest",
      correct: true,
    },
    {
      text: "Mount McKinley",
      correct: false,
    },
    {
      text: "Mount Fuji",
      correct: false,
    },
  ],
},
{
id: 6,
question: "Which continent is the most populous?",
answers: [
  {
    text: "Asia",
    correct: true,
  },
  {
    text: "Africa",
    correct: false,
  },
  {
    text: "Europe",
    correct: false,
  },
  {
    text: "North America",
    correct: false,
  },
],
},
{
id: 7,
question: "Garampani sanctuary is located at",
answers: [
  {
    text: "Junagarh, Gujarat",
    correct: false,
  },
  {
    text: "Diphu, Assam",
    correct: true,
  },
  {
    text: "Kohima, Nagaland",
    correct: false,
  },
  {
    text: "Gangtok, Sikkim",
    correct: false,
  },
],
},
{
id: 8,
question: "Epsom (England) is the place associated with",
answers: [
  {
    text: "Horse racing",
    correct: true,
  },
  {
    text: "Polo",
    correct: false,
  },
  {
    text: "Shooting",
    correct: false,
  },
  {
    text: "Snooker",
    correct: false,
  },
],
},
{
id: 9,
question: "Golf player Vijay Singh belongs to which country?",
answers: [
  {
    text: "USA",
    correct: false,
  },
  {
    text: "Fiji",
    correct: true,
  },
  {
    text: "India",
    correct: false,
  },
  {
    text: "UK",
    correct: false,
  },
],
},
{
id: 10,
question: "Film and TV institute of India is located at",
answers: [
  {
    text: "Pune (Maharashtra)",
    correct: true,
  },
  {
    text: "Rajkot (Gujarat)",
    correct: false,
  },
  {
    text: "Pimpri (Maharashtra)",
    correct: false,
  },
  {
    text: "Perambur (Tamilnadu)",
    correct: false,
  },
],
},
{
id: 11,
question: "",
answers: [
  {
    text: "",
    correct: false,
  },
  {
    text: "",
    correct: false,
  },
  {
    text: "",
    correct: true,
  },
  {
    text: "",
    correct: false,
  },
],
},
{
id: 12,
question: "",
answers: [
  {
    text: "",
    correct: false,
  },
  {
    text: "",
    correct: false,
  },
  {
    text: "",
    correct: true,
  },
  {
    text: "",
    correct: false,
  },
],
},
{
id: 13,
question: "",
answers: [
  {
    text: "",
    correct: false,
  },
  {
    text: "",
    correct: false,
  },
  {
    text: "",
    correct: true,
  },
  {
    text: "",
    correct: false,
  },
],
},
{
id: 14,
question: "",
answers: [
  {
    text: "",
    correct: false,
  },
  {
    text: "",
    correct: false,
  },
  {
    text: "",
    correct: true,
  },
  {
    text: "",
    correct: false,
  },
],
},
{
id: 15,
question: "",
answers: [
  {
    text: "",
    correct: false,
  },
  {
    text: "",
    correct: false,
  },
  {
    text: "",
    correct: true,
  },
  {
    text: "",
    correct: false,
  },
],
},
  ];
  const moneypyramid = useMemo(()=>
    [
      {id:1, amount: "INR 100"},
      {id:2, amount: "INR 200"},
      {id:3, amount: "INR 300"},
      {id:4, amount: "INR 500"},
      {id:5, amount: "INR 1000"},
      {id:6, amount: "INR 2000"},
      {id:7, amount: "INR 4000"},
      {id:8, amount: "INR 8000"},
      {id:9, amount: "INR 16000"},
      {id:10, amount: "INR 32000"},
      {id:11, amount: "INR 64000"},
      {id:12, amount: "INR 125000"},
      {id:13, amount: "INR 250000"},
      {id:14, amount: "INR 500000"},
      {id:15, amount: "INR 1000000"},
    ].reverse(),[])

  useEffect(()=>{
    questionnumber >1 && 
    setearned(moneypyramid.find((m) => m.id === questionnumber -1).amount);
  },[moneypyramid, questionnumber]);

  return (
    <div className="app">
      {username ? (
        <>
      
      <div className="main">
        {stop ? <h1 className="endtext">You earned: {earned}</h1> : (
          <>
          <div className="top">
          <div className="timer">
            <Timer setStop={setstop} questionnumber={questionnumber} />
            </div>
        </div>
        <div className="bottom">
        <Trivia 
        data={data} setstop={setstop}
        questionnumber={questionnumber}
        setquestionnumber={setquestionnumber}/>
        </div></>
        )}
      </div>
      <div className='pyramid'>
        <ul className="money-list">
          {moneypyramid.map((m) => (
            <li className={questionnumber === m.id ? "money-list-item active": "money-list-item"}>
            <span className="money-list-number">{m.id}</span>
            <span className="money-list-amount">{m.amount}</span>
          </li>
          ))}
        </ul>
      </div>
          </>
          ) : (<Start setusername={setusername}/>
        )}
    </div>
  );
}

export default App;

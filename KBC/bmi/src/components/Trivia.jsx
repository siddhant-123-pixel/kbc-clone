import { useEffect, useState } from "react"
import useSound from "use-sound";
import play from "../box/Kbc Clock.mp3"
import correct from "../box/play.mp3"
import wrong from "../box/wrong.mp3"

export default function Trivia({
  data,
  setstop,
  questionnumber,
  setquestionnumber,}){
    const [question, setquestion] = useState(null);
    const [selectedanswer, setselectedanswer] = useState(null);
    const [className, setClassName] = useState("answer")
    const [letsPlay] = useSound(play);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);

    useEffect(()=> {
      letsPlay();
    }, [letsPlay]);

    useEffect(()=>{
      setquestion(data[questionnumber -1]);
    }, [data, questionnumber]);

    const delay = (duration, callback) =>{
      setTimeout(() => {
        callback();
      },duration);
    };

    const handleClick = (a) =>{
      setselectedanswer(a);
      setClassName("answer active");
      delay(3000, ()=>
      setClassName(a.correct? "answer correct" : "answer wrong")
      );
      delay(5000, ()=>
      {
        if(a.correct){
          correctAnswer();
          delay(1000,() => {
            setquestionnumber((prev) => prev + 1);
            setselectedanswer(null);
          });
        } else {
          wrongAnswer();
          delay(1000,()=> {
            setstop(true);
          });
          setstop(true);
        }
      });
    };

  return (
      <div className="trivia">
        <div className="questions">{question?.question}</div>
        <div className="answers">
          {question?.answers.map((a) => (
            <div 
            className={selectedanswer === a ? className : "answer"}
            onClick={()=>handleClick(a)}>
              {a.text}
              </div>
          ))}
        </div>
      </div>
  )
}

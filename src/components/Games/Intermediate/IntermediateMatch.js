import { useState, useEffect } from "react";
import "./intermediate.css";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../../context/LoginContext";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default function IntermediateMatch() {
  const [questions, setQuestions] = useState([]);
  const [jump, setJump] = useState(0);
  const [count, setCount] = useState(0);
  const { userLogged } = useLoginContext();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3001/games/intermediate/match`,
        {
          mode: "cors",
        }
      );
      const json = await response.json();
      setQuestions(json);
    }
    fetchData();
  }, []);

  const handleScore = (event) => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/score`, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idUser: userLogged.id,
          level: "Intermediate",
          type: "Can you find?",
          score: count,
        }),
      });
    }
    fetchData();
  };

  const handleCount = () => {
    setCount(count + 1);
  };

  function handleJoined(e) {
    handleCount();
    handleJump();
    Swal.fire({
      position: "center",
      width: 400,
      title: "Yes!",
      color: "rgb(175, 255, 14)",
      icon: "success",
      background: "rgb(137, 24, 124)",
      iconColor: "rgb(175, 255, 14);",
      borderRadius: "30%",
      showConfirmButton: false,
      timer: 800,
    });
  }

  const handleJump = (e) => {
    setJump(jump + 1);
    Swal.fire({
      position: "center",
      title: "Oh no!",
      width: 400,
      height: 400,
      icon: "error",
      background: "rgb(175, 255, 14)",
      iconColor: "rgb(137, 24, 124)",
      borderRadius: "30%",
      showConfirmButton: false,
      timer: 800,
    });
  };

  console.log("count", count);
  console.log("jump", jump);

  return (
    <div>
      <div className="main-intermediateMatch ">
        <div className="inside-container-intermediateMatch">
          <div>
            <h1 className="title-intermediateMatch d-flex justify-content-center">
              {questions.length > 0 ? questions[jump].question : ""}
            </h1>
          </div>

          <div className="d-flex">
            {questions[jump] === questions[0] ? (
              <img
                src={questions.length > 0 ? questions[0].correct : ""}
                onClick={handleJoined}
                className="font-intermediateMatch"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[0].correct : ""}
                onClick={handleJump}
                className="font-intermediateMatch"
              />
            )}
            {questions[jump] === questions[1] ? (
              <img
                src={questions.length > 0 ? questions[1].correct : ""}
                onClick={handleJoined}
                className="planeInt-intermediateMatch"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[1].correct : ""}
                onClick={handleJump}
                className="planeInt-intermediateMatch"
              />
            )}

            {questions[jump] === questions[2] ? (
              <img
                src={questions.length > 0 ? questions[2].correct : ""}
                onClick={handleJoined}
                className="bench-intermediateMatch"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[2].correct : ""}
                onClick={handleJump}
                className="bench-intermediateMatch"
              />
            )}
          </div>

          <div className="d-flex justify-content-between">
            {questions[jump] === questions[3] ? (
              <img
                src={questions.length > 0 ? questions[3].correct : ""}
                onClick={handleJoined}
                className="ligth-intermediateMatch"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[3].correct : ""}
                onClick={handleJump}
                className="ligth-intermediateMatch"
              />
            )}

            {questions[jump] === questions[4] ? (
              <img
                src={questions.length > 0 ? questions[4].correct : ""}
                onClick={handleJoined}
                className="crash-intermediateMatch"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[4].correct : ""}
                onClick={handleJump}
                className="crash-intermediateMatch"
              />
            )}

            {questions[jump] === questions[5] ? (
              <img
                src={questions.length > 0 ? questions[5].correct : ""}
                onClick={handleJoined}
                className="flag-intermediateMatch"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[5].correct : ""}
                onClick={handleJump}
                className="flag-intermediateMatch"
              />
            )}
            {questions[jump] === questions[6] ? (
              <img
                src={questions.length > 0 ? questions[6].correct : ""}
                onClick={handleJoined}
                className="clock-intermediateMatch"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[6].correct : ""}
                onClick={handleJump}
                className="clock-intermediateMatch"
              />
            )}
          </div>

          <div className="d-flex justify-content-between">
            {questions[jump] === questions[7] ? (
              <img
                src={questions.length > 0 ? questions[7].correct : ""}
                onClick={handleJoined}
                className="bus-intermediateMatch"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[7].correct : ""}
                onClick={handleJump}
                className="bus-intermediateMatch"
              />
            )}
            {questions[jump] === questions[8] ? (
              <img
                src={questions.length > 0 ? questions[8].correct : ""}
                onClick={handleJoined}
                className="basket-intermediateMatch"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[8].correct : ""}
                onClick={handleJump}
                className="basket-intermediateMatch"
              />
            )}
            {questions[jump] === questions[9] ? (
              <div>
                <img
                  src={questions.length > 0 ? questions[9].correct : ""}
                  onClick={handleJoined}
                  className="plaque-intermediateMatch"
                />{" "}
              </div>
            ) : (
              <img
                src={questions.length > 0 ? questions[9].correct : ""}
                onClick={handleJump}
                className="plaque-intermediateMatch"
              />
            )}
            {questions[10] == questions[jump] ? (
              <div>{questions[10] ? (count + 1, handleScore()) : ""}</div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div>
        {questions[10] === questions[jump] ? (
          <div className="finalPanel-intermediate touch-intermediateMatch">
            <h2>Game completed!</h2>
            <h2>Score: {count}/10 </h2>
            {count > 4 ? (
              <div>
                <img
                  src={questions.length > 0 ? questions[10].order : ""}
                  className="pass-intermediate animate__animated animate__backInDown animate__delay-2s "
                />
                <img
                  src={questions.length > 0 ? questions[10].decoration : ""}
                  className="confeti-basic animate__animated animate__bounceIn"
                />
                <img
                  src={questions.length > 0 ? questions[10].decoration_ : ""}
                  className="goodJob-basic animate__animated animate__lightSpeedInLeft animate__delay-1st"
                />
              </div>
            ) : (
              <div>
                <img
                  src={questions.length > 0 ? questions[11].order : ""}
                  className="fail-intermediate animate__animated animate__fadeIn animate__delay-2s"
                />
                <img
                  src={questions.length > 0 ? questions[11].decoration : ""}
                  className="mission-intermediate animate__animated animate__fadeIn animate__delay-1s"
                />
                <img
                  src={questions.length > 0 ? questions[11].decoration_ : ""}
                  className="failed-intermediate animate__animated animate__fadeIn animate__delay-3s"
                />
              </div>
            )}
            {count < 5 ? (
              <Link
                to="/games/intermediate/intro-match"
                className="buttonCompleted-intermediate"
              >
                Try again
              </Link>
            ) : (
              <Link
                to="/games/next-advanced"
                className="buttonCompleted-basicRed"
              >
                Next Level
              </Link>
            )}
            <br />
            <Link
              to="/rankings/intermediate-match"
              className="buttonCompleted-intermediate"
            >
              Ranking
            </Link>
            <br />
            <Link
              to="/games/intermediate"
              className="buttonCompleted-intermediate"
            >
              Menu
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

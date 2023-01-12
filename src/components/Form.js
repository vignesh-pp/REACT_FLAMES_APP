import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import {
  BsSuitHeart,
  BsFillShieldLockFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { FaUserFriends, FaHandshakeAltSlash } from "react-icons/fa";
import { GiSelfLove, GiShakingHands } from "react-icons/gi";
export default function Form() {
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [num, setNum] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const getMatch = (match) => {
    console.log(match);
    return {
      1: "Friends",
      2: "Love",
      3: "Affection",
      4: "Marry",
      5: "Enemy",
      6: "Secret Lover",
    }[match];
  };
  console.log(getMatch(num));
  const r = getMatch(num);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (first.length < 3 || second.length < 3) {
      alert("Type your full name");
    } else {
      setModalOpen(true);
      var both = first + second;
      const nameArr = [...both].sort();
      const repeatedChar = [];
      let arr = [];
      for (let i = 0; i < nameArr.length - 1; i++) {
        if (nameArr[i] === nameArr[i + 1]) {
          repeatedChar.push(nameArr[i]);
        }
      }
      const repeatedCharArr = [...new Set(repeatedChar)];
      arr = [];
      for (let i = 0; i < both.length; i++) {
        arr.push(both.charAt(i));
        for (let j = 0; j < repeatedCharArr.length; j++) {
          arr = arr.filter((char) => char !== repeatedCharArr[j]);
        }
      }

      var finalName = arr.join("").toString();
      var finalNameLength = finalName.length;

      if (finalNameLength > 6) {
        var remainingLength = finalNameLength - 6;
        setNum(remainingLength);
      } else {
        setNum(finalNameLength);
      }
    }
  };
  return (
    <>
      <div
        style={{
          background: "steelblue",
          width: "500px",
          margin: "auto",
          padding: "50px",
          marginTop: "10%",
          borderRadius: "5px",
        }}
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 style={{ color: "white" }}>Flames</h3>
          <input
            style={{
              border: "none",
              outline: "none",
              margin: "10px",
              width: "250px",
              height: "40px",
              borderRadius: "5px",
              fontSize: "15px",
            }}
            type="text"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            autoFocus
            required
          />
          <br />

          <input
            type="text"
            style={{
              border: "none",
              outline: "none",
              margin: "10px",
              width: "250px",
              height: "40px",
              borderRadius: "5px",
              fontSize: "15px",
            }}
            value={second}
            onChange={(e) => setSecond(e.target.value)}
            required
          />
          <br />
          <input type="submit" value="click" className="btn btn-warning" />
        </form>
      </div>
      <Modal
        isOpen={modalOpen}
        toggle={() => setModalOpen(!modalOpen)}
        size="sm"
      >
        {/* <video src="https://www.youtube.com/watch?v=xLo_94VOHoE&list=RDxLo_94VOHoE&start_radio=1" /> */}
        <div
          style={{
            background: "skyblue",
            padding: "10px",
            color: "midnightblue",
          }}
        >
          <button
            className="btn btn-primary"
            style={{
              textAlign: "left",
              color: "white",
              background: "skyblue",
              border: "none",
            }}
            onClick={() => {
              setModalOpen(!modalOpen);
            }}
          >
            <BsFillArrowLeftCircleFill />
          </button>

          <div style={{ textAlign: "center" }}>
            {r === "Friends" && (
              <div>
                you both are {r} <FaUserFriends style={{ color: "darkpink" }} />
                <div
                  style={{
                    padding: "30px",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div>{first}</div>
                  <div
                    style={{
                      width: "150px",
                      height: "150px",
                      mixBlendMode: "darken",
                      margin: "20px",
                    }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFmfNQq9Ll90GnIM1ntY2mVubY_X679WhmLw&usqp=CAU"
                      width="100%"
                      hieght="100%"
                      alt="love"
                    />
                  </div>
                  <div>{second}</div>
                </div>
              </div>
            )}
            {r === "Love" && (
              <div>
                you both are in {r}{" "}
                <BsSuitHeart style={{ color: "darkpink" }} />
                <div
                  style={{
                    padding: "30px",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div>{first}</div>
                  <div
                    style={{
                      width: "150px",
                      height: "150px",
                      mixBlendMode: "darken",
                      margin: "20px",
                    }}
                  >
                    <img
                      src="data:image/jpeg;base64,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"
                      width="100%"
                      hieght="100%"
                      alt="love"
                    />
                  </div>
                  <div>{second}</div>
                </div>
              </div>
            )}
            {r === "Affection" && (
              <div>
                you both are in {r} <GiSelfLove style={{ color: "darkpink" }} />
                <div
                  style={{
                    padding: "30px",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div>{first}</div>
                  <div
                    style={{
                      width: "150px",
                      height: "150px",
                      mixBlendMode: "darken",
                      margin: "20px",
                    }}
                  >
                    <img
                      src="data:image/jpeg;base64,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"
                      width="100%"
                      hieght="100%"
                      alt="love"
                    />
                  </div>
                  <div>{second}</div>
                </div>
              </div>
            )}
            {r === "Marry" && (
              <div>
                you both are to get {r}{" "}
                <GiShakingHands style={{ color: "darkpink" }} />
                <div
                  style={{
                    padding: "30px",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div>{first}</div>
                  <div
                    style={{
                      width: "150px",
                      height: "150px",
                      mixBlendMode: "darken",
                      margin: "20px",
                    }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOXISv1J-_5r9_f-c5l8H1tFKnbY8we75sw&usqp=CAU"
                      width="100%"
                      hieght="100%"
                      alt="love"
                    />
                  </div>
                  <div>{second}</div>
                </div>
              </div>
            )}
            {r === "Enemy" && (
              <div>
                you both are {r}{" "}
                <FaHandshakeAltSlash style={{ color: "darkpink" }} />
                <div
                  style={{
                    padding: "30px",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div>{first}</div>
                  <div
                    style={{
                      width: "150px",
                      height: "150px",
                      mixBlendMode: "darken",
                      margin: "20px",
                    }}
                  >
                    <img
                      src="data:image/jpeg;base64,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"
                      width="100%"
                      hieght="100%"
                      alt="love"
                    />
                  </div>
                  <div>{second}</div>
                </div>
              </div>
            )}
            {r === "Secret Lover" && (
              <div>
                you both are {r}{" "}
                <FaHandshakeAltSlash style={{ color: "darkpink" }} />
                <div
                  style={{
                    padding: "30px",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div>{first}</div>
                  <div
                    style={{
                      width: "150px",
                      height: "150px",
                      mixBlendMode: "darken",
                      margin: "20px",
                    }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCQ5JucZ7q9EcY8Pcav4FyAn0pQTUfx2m1w&usqp=CAU"
                      width="100%"
                      hieght="100%"
                      alt="love"
                    />
                  </div>
                  <div>{second}</div>
                </div>
              </div>
            )}
            {r === "undefined" && <div>you are in good relation</div>}
          </div>
        </div>
      </Modal>
    </>
  );
}

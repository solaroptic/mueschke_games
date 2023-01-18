import React, { useState, useEffect, useContext } from "react";
import styles from "./film.module.css";
import AuthContext from "../Main/authContext";

export default function Vote() {
  const ctx = useContext(AuthContext);
  const [profileList, setProfileList] = useState(null);
  const [profileOn, setProfileOn] = useState(false);

  const [voteChanged, setVoteChanged] = useState(false);
  const [percentages, setPercentages] = useState(10);
  const pro = "-NIsOTzpor9Mk-tAaGcB";
  useEffect(() => {
    fetch(`https://mueschke1-default-rtdb.firebaseio.com/profiles/${pro}.json`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProfileList(data);
        setProfileOn(true);
      });
    setVoteChanged(false);
    // need usecontext
    const innerMath = (param) => {
      let modernCount = 0;
      let miaAtlCount = 0;
      let seaBufCount = 0;
      let sfMinCount = 0;
      let middleCount = 0;
      let houDenCount = 0;
      let gbChiCount = 0;
      let balNyCount = 0;
      let hybridCount = 0;
      let twenty01Count = 0;
      let twenty03Count = 0;
      let twenty08Count = 0;
      let bestCount = 0;
      let lionCount = 0;
      let raiderCount = 0;
      let ravenCount = 0;
      for (const [key, { voteA }] of Object.entries(profileList)) {
        if (voteA === "DolphinsFalcons") {
          miaAtlCount += 1;
          modernCount += 1;
        }
        if (voteA === "Vikings49ers") {
          sfMinCount += 1;
          modernCount += 1;
        }
        if (voteA === "BillsSeahawks") {
          seaBufCount += 1;
          modernCount += 1;
        }
      }
      for (const [key, { voteB }] of Object.entries(profileList)) {
        if (voteB === "OilersBroncos") {
          houDenCount += 1;
          middleCount += 1;
        }
        if (voteB === "PackersBears") {
          gbChiCount += 1;
          middleCount += 1;
        }
        if (voteB === "RavensGiants") {
          balNyCount += 1;
          middleCount += 1;
        }
      }
      for (const [key, { voteC }] of Object.entries(profileList)) {
        if (voteC === "2001") {
          twenty01Count += 1;
          hybridCount += 1;
        }
        if (voteC === "2003") {
          twenty03Count += 1;
          hybridCount += 1;
        }
        if (voteC === "2008") {
          twenty08Count += 1;
          hybridCount += 1;
        }
      }
      for (const [key, { voteD }] of Object.entries(profileList)) {
        if (voteD === "Lions") {
          lionCount += 1;
          bestCount += 1;
        }
        if (voteD === "Raiders") {
          raiderCount += 1;
          bestCount += 1;
        }
        if (voteD === "Ravens") {
          ravenCount += 1;
          bestCount += 1;
        }
      }
      const miaPerc = Math.round((miaAtlCount / modernCount) * 100) + "%";
      const seaPerc = Math.round((seaBufCount / modernCount) * 100) + "%";
      const sfPerc = Math.round((sfMinCount / modernCount) * 100) + "%";
      const houPerc = Math.round((houDenCount / middleCount) * 100) + "%";
      const gbPerc = Math.round((gbChiCount / middleCount) * 100) + "%";
      const balPerc = Math.round((balNyCount / middleCount) * 100) + "%";
      const t01Perc = Math.round((twenty01Count / hybridCount) * 100) + "%";
      const t03Perc = Math.round((twenty03Count / hybridCount) * 100) + "%";
      const t08Perc = Math.round((twenty08Count / hybridCount) * 100) + "%";
      const lionPerc = Math.round((lionCount / bestCount) * 100) + "%";
      const raiderPerc = Math.round((raiderCount / bestCount) * 100) + "%";
      const ravenPerc = Math.round((ravenCount / bestCount) * 100) + "%";
      setPercentages([
        miaPerc,
        sfPerc,
        seaPerc,
        houPerc,
        gbPerc,
        balPerc,
        t01Perc,
        t03Perc,
        t08Perc,
        lionPerc,
        raiderPerc,
        ravenPerc,
      ]);
    };
    profileList && innerMath();
  }, [profileOn, voteChanged]);
  // break between initialize and submit////////////////////////////////

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.ModernEraGame.value);
    console.log(e.target.MiddleEraGame.value);
    console.log(e.target.Hybrid.value);
    console.log(e.target.BestAllTime.value);
    // const personVote = ctx.currentUser;
    const newVoteA = e.target.ModernEraGame.value;
    const newVoteB = e.target.MiddleEraGame.value;
    const newVoteC = e.target.Hybrid.value;
    const newVoteD = e.target.BestAllTime.value;
    const superObj = {
      voteA: newVoteA,
      voteB: newVoteB,
      voteC: newVoteC,
      voteD: newVoteD,
    };
    const responseA = await fetch(
      `https://mueschke1-default-rtdb.firebaseio.com/profiles/-NIsOTzpor9Mk-tAaGcB/${ctx.currentUser}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(superObj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await responseA.json();
    console.log(data);
    setVoteChanged(true);
    setProfileOn(false);
  };
  return (
    <>
      <form className={styles.votingContainer} onSubmit={submitHandler}>
        <h2 className={styles.filmHeading}>CAST YOUR VOTE</h2>
        <section className={styles.line}></section>
        <h4>Best Game of the Modern Era</h4>
        <div className={styles.categoryContainer}>
          <div className={styles.btnAndGame}>
            <input
              type="radio"
              className={styles.radio}
              name="ModernEraGame"
              value="DolphinsFalcons"
            />
            <label htmlFor="DolphinsFalcons" className={styles.voting}>
              Dolphins vs Falcons 2015
            </label>
          </div>
          <div className={styles.btnAndGame}>
            <input
              type="radio"
              className={styles.radio}
              name="ModernEraGame"
              value="Vikings49ers"
            />
            <label htmlFor="Vikings49ers" className={styles.voting}>
              Vikings vs 49ers 2015
            </label>
          </div>
          <div className={styles.btnAndGame}>
            <input
              type="radio"
              className={styles.radio}
              name="ModernEraGame"
              value="BillsSeahawks"
            />
            <label htmlFor="BillsSeahawks" className={styles.voting}>
              Bills vs Seahawks 2015
            </label>
          </div>
        </div>
        <section className={styles.voteGraph}>
          <div className={styles.voteBarSpace}>
            <div
              className={styles.voteBarFill}
              style={{ height: percentages[0], backgroundColor: " #33d2dd" }}
            ></div>
          </div>
          <div className={styles.voteNumContainer}>
            <div className={styles.voteBarNum}>{percentages[0]}</div>
          </div>
          {/* //// */}
          <div className={styles.voteBarSpace}>
            <div
              className={styles.voteBarFill}
              style={{ height: percentages[1], backgroundColor: "#df0f0f" }}
            ></div>
          </div>
          <div className={styles.voteNumContainer}>
            <div className={styles.voteBarNum}>{percentages[1]}</div>
          </div>
          {/* //// */}
          <div className={styles.voteBarSpace}>
            <div
              className={styles.voteBarFill}
              style={{ height: percentages[2], backgroundColor: "#2d4cfd" }}
            ></div>
          </div>
          <div className={styles.voteNumContainer}>
            <div className={styles.voteBarNum}>{percentages[2]}</div>
          </div>
        </section>
        <p className={styles.notes}>
          The Falcons furious comeback from 30-6 fell on a failed Hail-Mary
          36-30. The Vikings Flu Game where Adam, on his birthday, threw a
          record 6 TD passes and a key pass deflection to win his first game
          44-38. That's my choice; but don't forget the back and forth Seahawks
          game was closer than the score shows, thanks to a 16 pt swing at the
          end, 46-30.
        </p>
        <section className={styles.line}></section>
        <h4>Best Game 2010-2014</h4>
        <div className={styles.categoryContainer}>
          <div className={styles.btnAndGame}>
            <input
              type="radio"
              className={styles.radio}
              name="MiddleEraGame"
              value="OilersBroncos"
            />
            <label htmlFor="OilersBroncos" className={styles.voting}>
              Oilers vs Broncos 2011
            </label>
          </div>
          <div className={styles.btnAndGame}>
            <input
              type="radio"
              className={styles.radio}
              name="MiddleEraGame"
              value="PackersBears"
            />
            <label htmlFor="PackersBears" className={styles.voting}>
              Packers vs Bears 2014
            </label>
          </div>
          <div className={styles.btnAndGame}>
            <input
              type="radio"
              className={styles.radio}
              name="MiddleEraGame"
              value="RavensGiants"
            />
            <label htmlFor="RavensGiants" className={styles.voting}>
              Ravens vs Giants 2010
            </label>
          </div>
        </div>
        <section className={styles.voteGraph}>
          <div className={styles.voteBarSpace}>
            <div
              className={styles.voteBarFill}
              style={{ height: percentages[3], backgroundColor: "#499dec" }}
            ></div>
          </div>
          <div className={styles.voteNumContainer}>
            <div className={styles.voteBarNum}>{percentages[3]}</div>
          </div>
          {/* //// */}
          <div className={styles.voteBarSpace}>
            <div
              className={styles.voteBarFill}
              style={{ height: percentages[4], backgroundColor: "#ebe71e" }}
            ></div>
          </div>
          <div className={styles.voteNumContainer}>
            <div className={styles.voteBarNum}>{percentages[4]}</div>
          </div>
          {/* //// */}
          <div className={styles.voteBarSpace}>
            <div
              className={styles.voteBarFill}
              style={{ height: percentages[5], backgroundColor: "#7305bd" }}
            ></div>
          </div>
          <div className={styles.voteNumContainer}>
            <div className={styles.voteBarNum}>{percentages[5]}</div>
          </div>
        </section>
        <p className={styles.notes}>
          The Oilers comeback, handicapped and down 28-12 at the half, was the
          best successful comeback I've seen (52-40). The Packers-Bears match is
          still the only tie game at 30 a piece (on the last play), and Deonte's
          last game. Ravens and Giants (64-40) started out a much closer game
          and was easily the most fun of the era.
        </p>
        <section className={styles.line}></section>
        <h4>Best Game: Hybrid-Wrestling Era</h4>
        <div className={styles.categoryContainer}>
          <div className={styles.btnAndGame}>
            <input
              type="radio"
              className={styles.radio}
              name="Hybrid"
              value="2001"
            />
            <label htmlFor="2001" className={styles.voting}>
              2001 Rockcreek Cattle Game
            </label>
          </div>
          <div className={styles.btnAndGame}>
            <input
              type="radio"
              className={styles.radio}
              name="Hybrid"
              value="2003"
            />
            <label htmlFor="2003" className={styles.voting}>
              2003 Lake Air Newspaper
            </label>
          </div>
          <div className={styles.btnAndGame}>
            <input
              type="radio"
              className={styles.radio}
              name="Hybrid"
              value="2008"
            />
            <label htmlFor="2008" className={styles.voting}>
              2008 Lake Waco North vs South
            </label>
          </div>
        </div>
        <section className={styles.voteGraph}>
          <div className={styles.voteBarSpace}>
            <div
              className={styles.voteBarFill}
              style={{ height: percentages[6], backgroundColor: "#BF5700" }}
            ></div>
          </div>
          <div className={styles.voteNumContainer}>
            <div className={styles.voteBarNum}>{percentages[6]}</div>
          </div>
          {/* //// */}
          <div className={styles.voteBarSpace}>
            <div
              className={styles.voteBarFill}
              style={{ height: percentages[7], backgroundColor: "green" }}
            ></div>
          </div>
          <div className={styles.voteNumContainer}>
            <div className={styles.voteBarNum}>{percentages[7]}</div>
          </div>
          {/* //// */}
          <div className={styles.voteBarSpace}>
            <div
              className={styles.voteBarFill}
              style={{ height: percentages[8], backgroundColor: "#51258b" }}
            ></div>
          </div>
          <div className={styles.voteNumContainer}>
            <div className={styles.voteBarNum}>{percentages[8]}</div>
          </div>
        </section>
        <p className={styles.notes}>
          2001 saw the best matched and executed game in Mueschke's history, for
          me. Noah rose above expectation to help win in a field with bulls,
          cows and Tim 78-72. With a combined 222 points, the 2003 game ended in
          overtime with a Waco-Tribune-Herald reporter asking questions. Fun
          game (114-108). 2008 likely provided the most amusing game ever, due
          to Tim, JR and Jesus commentating. Potential game tying TD batted down
          by David; 62-56.
        </p>
        <section className={styles.line}></section>
        <h4>Best Team All-Time</h4>
        <div className={styles.categoryContainer}>
          <div className={styles.btnAndGame}>
            <input
              type="radio"
              className={styles.radio}
              name="BestAllTime"
              value="Lions"
            />
            <label htmlFor="Lions" className={styles.voting}>
              Lions 2016
            </label>
          </div>
          <div className={styles.btnAndGame}>
            <input
              type="radio"
              className={styles.radio}
              name="BestAllTime"
              value="Raiders"
            />
            <label htmlFor="Raiders" className={styles.voting}>
              Raiders 2012
            </label>
          </div>
          <div className={styles.btnAndGame}>
            <input
              type="radio"
              className={styles.radio}
              name="BestAllTime"
              value="Ravens"
            />
            <label htmlFor="Ravens" className={styles.voting}>
              Ravens 2010
            </label>
          </div>
        </div>
        <section className={styles.voteGraph}>
          <div className={styles.voteBarSpace}>
            <div
              className={styles.voteBarFill}
              style={{ height: percentages[9], backgroundColor: "#305ae4" }}
            ></div>
          </div>
          <div className={styles.voteNumContainer}>
            <div className={styles.voteBarNum}>{percentages[9]}</div>
          </div>
          {/* //// */}
          <div className={styles.voteBarSpace}>
            <div
              className={styles.voteBarFill}
              style={{ height: percentages[10], backgroundColor: "gray" }}
            ></div>
          </div>
          <div className={styles.voteNumContainer}>
            <div className={styles.voteBarNum}>{percentages[10]}</div>
          </div>
          {/* //// */}
          <div className={styles.voteBarSpace}>
            <div
              className={styles.voteBarFill}
              style={{ height: percentages[11], backgroundColor: "#7305bd" }}
            ></div>
          </div>
          <div className={styles.voteNumContainer}>
            <div className={styles.voteBarNum}>{percentages[11]}</div>
          </div>
        </section>
        <p className={styles.notes}>
          The Lions would probably be my #1; if Noah was *ready. The Raiders won
          by the largest margin 60-16, but it's fair to say the Bucs lost Sage,
          effort and motivation early. The Ravens scored a post-Hybrid-Wrestling
          Era (2010-now) record 64 points against a tougher Giants defense than
          the Raiders faced. With Jesus' coaching, two key forward "fumbles",
          Deonte's physical running and JR making a couple of unexpected plays,
          the Giants scored 40 against the Ravens; but I'm not so sure the
          Raiders would've held them any lower. I take the Ravens here.
        </p>
        <button type="submit" className={styles.voteBtn}>
          Submit votes
        </button>
        <section className={styles.line}></section>
        <h4>Missing Rings</h4>
        <p className={styles.notes}>
          Best Games: The 2002 match at Lake Air Fields (the first "real" OT
          game) was, at the time, considered a lower quality (turnovers) and
          more painful game than the 2001 game. Thought to have suffered from
          moments of poor execution, I now think it's underrated, and should be
          looked at more like the 2001 game. Some of the "clumsy" plays may have
          been from smarter defense and more physical play as David and Noah
          grew. The 2000 Ice Game/Millenium Bowl will be difficult to forget;
          amazing dedication at a wind-chill in the teens, but too many mistakes
          and freezing rain kept it off the list.
        </p>
        <p className={styles.notes}>
          Best Team: The 2013 Jets were actually pretty solid against the
          Patriots who were a faster version of the 2010 Giants. Noah played
          maybe his best defensive game, Mark scored a record 6 TDs, but David
          played with a hernia during the game at walking-pace; 42-28. If the
          Jets didn't "stop" at 36-14 in the third because of the Raider blowout
          from 2012, the score might have been almost the same (60-16). The 2017
          AFC team may have been on the list if Justin didn't aggravate a
          basketball injury that sidelined him and their chances for victory,
          22-24. 2015 Vikings, if Mark didn't have the flu.
        </p>
      </form>
    </>
  );
}

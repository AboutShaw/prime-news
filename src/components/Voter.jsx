import { updateVotes } from "../api";

export default function Voter({ voteUp, setVoteUp, article_id, votes }) {
  const handleInc = (x) => {
    setVoteUp((curVote) => curVote + x);
    updateVotes(article_id, x);
  };

  return (
    <div className="voter">
      <p>
        Votes:
        <button onClick={() => handleInc(1)}>↟1↟</button>
        {votes + voteUp}
        <button onClick={() => handleInc(-1)}>↡1↡</button>
      </p>
    </div>
  );
}

import usePlayerStore from "../../states/zustand/usePlayerStore";

const Winner = () => {
	const scoreTeamA = usePlayerStore((state) => state.teamA);
	const scoreTeamB = usePlayerStore((state) => state.teamB);

	let winner = "DRAW";

	if (scoreTeamA > scoreTeamB) {
		winner = "TEAM A";
	} else if (scoreTeamA < scoreTeamB) {
		winner = "TEAM B";
	}

	return (
		<div className="d-flex flex-column justify-content-center align-items-center mt-5 border-solid-sm container-lg">
			<h1>Winner</h1>
			<h4>{winner}</h4>
		</div>
	);
};

export default Winner;

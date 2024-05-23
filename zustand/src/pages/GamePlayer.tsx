import usePlayerStore from "../states/zustand/usePlayerStore";
import Winner from "../components/Winner";
import Player from "../components/Player";

const PlayerA = () => {
	const score = usePlayerStore((state) => state.teamA);

	const increaseTeamAScore = usePlayerStore(
		(state) => state.increaseTeamAScore,
	);

	const decreaseTeamAScore = usePlayerStore(
		(state) => state.decreaseTeamAScore,
	);

	return (
		<Player
			label="TEAM A"
			score={score}
			onIncrease={increaseTeamAScore}
			onDecrease={decreaseTeamAScore}
		/>
	);
};

const PlayerB = () => {
	const score = usePlayerStore((state) => state.teamB);

	const increaseTeamBScore = usePlayerStore(
		(state) => state.increaseTeamBScore,
	);

	const decreaseTeamBScore = usePlayerStore(
		(state) => state.decreaseTeamBScore,
	);

	return (
		<Player
			label="TEAM B"
			score={score}
			onIncrease={increaseTeamBScore}
			onDecrease={decreaseTeamBScore}
		/>
	);
};

const Players = () => {
	return (
		<div className="container-md border-solid-sm mt-5 d-flex flex-column align-items-center">
			<h3>Players</h3>
			<div className="d-flex justify-content-between">
				<PlayerA />
				<PlayerB />
			</div>
		</div>
	);
};

export default function Game() {
	return (
		<div className="container-lg d-flex justify-content-center">
			<main>
				<div>
					<Winner />
				</div>
			</main>
		</div>
	);
}

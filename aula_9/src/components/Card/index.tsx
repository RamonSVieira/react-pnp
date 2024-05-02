import "./style.css";

interface cardProps {
	name: string;
	imageUrl: string;
}

export default function Card(props: cardProps) {
	return (
		<div className="card">
			<img
				src={
					props.imageUrl
						? props.imageUrl
						: "https://content.imageresizer.com/images/memes/Nicolas-cage-meme-jv9jz.jpg"
				}
				alt=""
			/>
			<p>{props.name}</p>
		</div>
	);
}

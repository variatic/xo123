import React, {Component} from 'react';
import gameStore from '../stores/gameStore';
import { observer } from 'mobx-react';
import { hashHistory } from 'react-router';

@observer
class StartPage extends Component {
	startGame = () => {
		let name = this.nameInput.value;
		this.nameInput.value = '';
		gameStore.startGame(name);
	};

	playGame = (game) => {
		hashHistory.push(`/game/${game.name}`);
	};

	render() {
		let {games} = gameStore;
		return (
			<div className="start-page">
				<div className="new-game">
					<input type="text" ref={ref => this.nameInput = ref} />
					<button onClick={this.startGame}>Start !</button>
				</div>
				
				<hr/>

				<ul>
					{games.map(game => (
						<li key={game.name} className="game-item">
							<span>{game.name}</span>
							<button onClick={() => this.playGame(game)}>Play =></button>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default StartPage;

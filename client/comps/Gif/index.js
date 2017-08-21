import React from 'react';
import { inject } from 'mobx-react';
import './styles.css';

type Props = {
  src: string,
  uiStore: Object,
  gifStore: Object
};

const Gif = (props: Props) => {
	const gifData = {
		user: props.uiStore.user,
		src: props.src,
		time: String(Date.now()),
	};

	return (
		<div styleName="Gif">
			<img styleName="image" src={props.src} alt="Twiphy Gif" />
			<div styleName="actions">
				<button>Bookmark</button>
        <button onClick={() => props.gifStore.sendGif(gifData)}>Send</button>
			</div>
		</div>
	);
};

export default inject('gifStore', 'uiStore')(Gif);

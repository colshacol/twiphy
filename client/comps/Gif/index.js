import React from 'react';
import { inject } from 'mobx-react';
import BookmarkIcon from '@assets/lover.svg';
import SendIcon from '@assets/right-arrow.svg';
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
		time: String(Date.now())
	};

	return (
		<div styleName="Gif">
			<img styleName="image" src={props.src} alt="Twiphy Gif" />
			<div styleName="actions">
				<BookmarkIcon width={36} height={36} styleName="bookmark-icon" />
				<SendIcon
					width={36}
					height={36}
					styleName="send-icon"
					onClick={() => props.sendGif(gifData)}
				/>
			</div>
		</div>
	);
};

export default inject('gifStore', 'uiStore')(Gif);

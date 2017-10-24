import React from 'react';
import { inject, observer } from 'mobx-react';
import BookmarkIcon from '@assets/lover.svg';
import SendIcon from '@assets/right-arrow.svg';
import './styles.css';

type Props = {
	src: string,
	store: Object
};

const Gif = (props: Props) => {
  const { store, settingsStore } = props;
	const gifData = {
		user: store.userData,
		src: props.src,
		time: String(Date.now())
  };

  const width = `${props.width}%` || `${settingsStore.gifWidth}%`;

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

export default inject('store', 'settingsStore')(observer(Gif));

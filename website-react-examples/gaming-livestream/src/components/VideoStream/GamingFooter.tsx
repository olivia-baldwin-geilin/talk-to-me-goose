import React, {useEffect, useState} from 'react';
import HeartFullIcon from '../../assets/icons/HeartFullIcon';
import HeartHollowIcon from '../../assets/icons/HeartHollowIcon';
import SubscribeFullIcon from '../../assets/icons/SubscribeFullIcon';
import SubscribeHollowIcon from '../../assets/icons/SubscribeHollowIcon';

const FollowerButtons = () => {
	const [followed, setFollowed] = useState(false);
	const [subscribed, setSubscribed] = useState(false);
	return (
		<>
			<button
				className='follower-button'
				onClick={() => setFollowed(!followed)}
			>
				{followed ? <HeartFullIcon/> : <HeartHollowIcon/>}
				<p>Like</p>
			</button>
			<button
				className='follower-button'
				onClick={() => setSubscribed(!subscribed)}
			>
				{subscribed ? <SubscribeFullIcon/> : <SubscribeHollowIcon/>}
				<p>Subscribe</p>
			</button>
		</>
	)
}

export const GamingFooter = () => (
	<footer>
		<div className='user-interaction-container'>
			<FollowerButtons/>
		</div>
	</footer>
);

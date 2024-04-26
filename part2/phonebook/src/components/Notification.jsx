import React from "react";

const Notification = ({ notif }) => {
	if (notif.message === null) {
		return null;
	}

	return (
		<div className="notif" style={{ color: notif.status ? "green" : "red" }}>
			{notif.message}
		</div>
	);
};

export default Notification;

import React from 'react';

const Members = (props) => {
    return (
        <div className="members-list">
            {props.members.map((friend) => (
                    <div className="members" key={friend.id}>
                        <h3>{friend.name}</h3>
                        <p>Email: {friend.email}</p>
                        <p>Role: {friend.role}</p>
                        <p>Hobbies: {friend.hobbies}</p>
                    </div>
            ))}
        </div>
    );
};

export default Members;
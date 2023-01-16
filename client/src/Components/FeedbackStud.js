import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createFeedback, getFeedbacks, getActivity } from '../api';
import { useHistory } from "react-router-dom";

const emoticonMap = {
    smiley: '😊',
    frowny: '😔',
    surprised: '😲',
    confused: '😕',
};

const FeedbackStud = ({ isSubmitting }) => {
    const { code } = useParams();
    const [emoticon, setEmoticon] = useState("");
    const [emoticons, setEmoticons] = useState([]);
    const [activity, setActivity] = useState(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    let history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            const activityData = await getActivity(code);
            setActivity(activityData);
        };
        if (code) {
            fetchData();
        }
    }, [code]);

    useEffect(() => {
        if (activity) {
            const currentTime = new Date();
            const startTime = new Date();
            startTime.setHours(activity.startDate.split(':')[0]);
            startTime.setMinutes(activity.startDate.split(':')[1]);
            startTime.setSeconds(0);
            const endTime = new Date();
            endTime.setHours(activity.endDate.split(':')[0]);
            endTime.setMinutes(activity.endDate.split(':')[1]);
            endTime.setSeconds(0);
            if (currentTime >= startTime && currentTime <= endTime) {
                setIsButtonDisabled(false);
            } else {
                setIsButtonDisabled(true);
                history.push(`/`);
            }
        }
    }, [activity]);

    const handleSubmit = async () => {
        if (emoticon && !isButtonDisabled) {
            await createFeedback({ emoticon, code });
            setEmoticon('');
            getFeedbacks(code).then(setEmoticons);
        }
    };

    const handleEmoticonClick = (emoticon) => {
        setEmoticon(emoticon);
        handleSubmit();
    };

    return (
        <div>
            <div class="center">
                <div className="emoticons">
                    <span onClick={() => handleEmoticonClick("smiley")}>😊</span>
                    <span onClick={() => handleEmoticonClick("frowny")}>😔</span><br />
                    <span onClick={() => handleEmoticonClick("surprised")}>😲</span>
                    <span onClick={() => handleEmoticonClick("confused")}>😕</span>
                </div>
            </div>
        </div>
    );
};

export default FeedbackStud;
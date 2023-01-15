import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createFeedback, getFeedbacks } from '../api';

const emoticonMap = {
    smiley: '😊',
    frowny: '😔',
    surprised: '😲',
    confused: '😕',
  }

const Feedback = ({ isSubmitting }) => {
    const { code } = useParams()
    const [emoticon, setEmoticon] = useState("");
    const [emoticons, setEmoticons] = useState([]);

    useEffect(() => {
        getFeedbacks(code).then(setEmoticons)
    }, [code])

    const handleEmoticonClick = (emoticon) => {
        setEmoticon(emoticon);
    };

    const handleSubmit = async () => {
        if (emoticon) {
            await createFeedback({ emoticon, code });
        }
    };

    return (
        <div>
            <div class="center">
                <button
                    disabled={isSubmitting || !emoticon}
                    onClick={handleSubmit}
                >
                    {isSubmitting ? "Subiting..." : "Submit"}
                </button>
            </div>
            <div class="titleStream">Feedback Stream:</div>
            <div class="stream">
                <div className="emoticons">
                    {emoticons.map(emoticon => (
                        <span key={emoticon.id}> {emoticonMap[emoticon.emoticon]} <a class="dateStyle">Date: {emoticon.createdAt}</a><br/></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feedback;

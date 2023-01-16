import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createFeedback, getFeedbacks } from '../api';

const emoticonMap = {
    smiley: '😊',
    frowny: '😔',
    surprised: '😲',
    confused: '😕',
  }

const FeedbackStud = ({ isSubmitting }) => {
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
            setEmoticon('')
            getFeedbacks(code).then(setEmoticons)
        }
    };

    return (
        <div>  
            <div class="center">
            <div className="emoticons">
                <span onClick={() => handleEmoticonClick("smiley")}>😊</span>
                <span onClick={() => handleEmoticonClick("frowny")}>😔</span>
                <span onClick={() => handleEmoticonClick("surprised")}>😲</span>
                <span onClick={() => handleEmoticonClick("confused")}>😕</span>
            </div>
                <button
                className={emoticon ? 'active' : ''}
                    disabled={isSubmitting || !emoticon}
                    onClick={handleSubmit}
                >
                    {isSubmitting ? "Subiting..." : "Submit"}
                </button>
            </div>
        </div>
    );
};

export default FeedbackStud;

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
        const interval = setInterval(() => {
            getFeedbacks(code).then(setEmoticons)
        }, 5000);
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
             <div>
           {/* <div className="emoticons">
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
            </div> */}
            <div class="titleStream">Feedback Stream:</div>
            <div class="stream">
                <div className="emoticons">
                    {emoticons.map(emoticon => (
                        <span key={emoticon.id}> {emoticonMap[emoticon.emoticon]} <a class="dateStyle">Date: {emoticon.createdAt}</a><br/></span>
                    ))}
                </div>
            </div></div>
        </div>
    );
};

export default Feedback;

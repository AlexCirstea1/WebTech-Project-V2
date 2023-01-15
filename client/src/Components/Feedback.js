import React from "react";

const Feedback = ({ onSubmit, isSubmitting }) => {
    const [emoticon, setEmoticon] = React.useState("");

    const handleEmoticonClick = (emoticon) => {
        setEmoticon(emoticon);
    };

    return (
        <div>
            <div className="emoticons">
                <span  onClick={() => handleEmoticonClick("smile")}>😊</span>
                <span  onClick={() => handleEmoticonClick("frown")}>😔</span>
                <span  onClick={() => handleEmoticonClick("surprise")}>😲</span>
                <span  onClick={() => handleEmoticonClick("confused")}>😕</span>
            </div>
            <div class="center">
                <button
                    disabled={isSubmitting || !emoticon}
                    onClick={() => onSubmit(emoticon)}
                >
                    {isSubmitting ? "Subiting..." : "Submit"}
                </button>
            </div>
        </div>
    );
};

export default Feedback;

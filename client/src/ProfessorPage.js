import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getActivity } from './api';
import './Home.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import Feedback from './Components/Feedback';
import FeedbackStud from './Components/FeedbackStud';

function ProfessorPage() {

    const { code } = useParams()

    const [activity, setActivity] = useState({});

    useEffect(() => {
        async function fetchData() {
            const activityData = await getActivity(code);
            setActivity(activityData);
        }
        fetchData();
    }, [code])



    return (
        <div class="main">
            <div class="form-group">
                <a class="labels">Name: </a> <a class="data">{activity.name}</a><br />
                <a class="labels">Code: </a><a class="data">{activity.code}</a><br />
                <a class="labels">Description: </a> <a class="data">{activity.description}</a><br />
                <a class="labels">Start Time: </a><a class="data">{activity.startDate}</a><br />
                <a class="labels">End Time: </a> <a class="data">{activity.endDate}</a><br />
            </div>
            <div class="form-group">
                <FeedbackStud />
            </div>
        </div>
    )
}

export default ProfessorPage

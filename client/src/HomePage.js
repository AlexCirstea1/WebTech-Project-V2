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

function HomePage() {

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
                <p>Name: {activity.name}</p>
                <p>Code: {activity.code}</p>
                <p>Description: {activity.description}</p>
                <p>Start Date: {activity.startDate}</p>
                <p>End Date: {activity.endDate}</p>
            </div>
            <div class="form-group">
                <Feedback />
            </div>
        </div>
    )
}

export default HomePage

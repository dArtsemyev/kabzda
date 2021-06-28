import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating from "./Components/Rating/Rating";
import UncontrolledRating from "./Components/UncontrolledRating/UncontrolledRating";

export type RatingValueType =  0 | 1 | 2 | 3 | 4 | 5

function App() {
    console.log("App rendered")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className="App">
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My Friends"}/>

            <h2>Uncontrolled Rating</h2>

            <Accordion titleValue={"Menu"}
                       collapsed={true}
            />
            <UncontrolledRating />

            <h2>Controlled Rating</h2>
            <Accordion titleValue={"Users"}
                       collapsed={true}
            />
            {/*<Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>*/}
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendered")
    return (
        <h1>
            {props.title}
        </h1>
    );
}

export default App;

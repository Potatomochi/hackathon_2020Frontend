import React from 'react'
import './FinanceContent.css'
import sentimentGraph from '../images/SentimentGraph.png'
import wordCloud from '../images/WordCloud.png'

function Intermediate({difficulty, description, age }) {
    return (
        <div className="financeContent">
            <div className="title">
            <h2>{difficulty}</h2>
            <h5>{description}</h5>
            <h5 className="target_age" >Recommended Age Group : {age}</h5>
            </div>

            <div className="basic_content">
                <h3>Real time market sector sentiments</h3>
                <p>Forecasting models utilise structured data to make predictions. This has been the foundations of many investment strategies and models. However, these relationships do not always hold. The mandatory warning below every financial prospectus  says it best: “Past performances do not indicate future returns.”

Analyst ratings, fundamental data, are reported infrequently, these indicators do not adjust quickly to market conditions. 

We measure real time tweets to have a direct measurement of the public sentiments now. With this “nowcasting” tool, you can make more reliable predictions that will hold true
</p>             
                <h4>Current Financing Sentiments</h4>
                <img src={sentimentGraph} alt="Sentiment Graph"></img>
                <h4>Current Trending Sectors</h4>
                <img src={wordCloud} alt="Word Cloud" width={500} height={300}></img>
            </div>


        </div>
    )
}

export default Intermediate

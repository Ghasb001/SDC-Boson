import React from 'react';
import QuestionList from './qaComponents/QuestionList.jsx';
import AnswerList from './qaComponents/AnswerList.jsx';
import SearchQuestions from './qaComponents/SearchQuestions.jsx';
import { useState, useEffect } from "react";
import axios from "axios";

function QuestionAndAnswer (props) {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    //on component render
    //make axios req to server endpoint
    axios.get('/questions', { params : {product_id: 71698, page: 1, count: 3}})
      .then((results) => {
        //results returned here is the RESPONSE object from the server
        var productQuestions = results.data;
         //set questions state equal to the results of this call
         setQuestions(productQuestions);
      })
      .catch((err) => {
        console.log('error in axios get req in QA use effect:', err);
      });
  }, []);

return (
  <div>
    <h4>QUESTIONS AND ANSWERS</h4>
    <SearchQuestions />
    <QuestionList questions={questions}/>
  </div>

)
}

export default QuestionAndAnswer;
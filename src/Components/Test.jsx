import React, { useState, useEffect } from 'react';
import img2 from '../assets/girl.png';

const candidate = {
  name: "khushi parekh",
  profilePic: img2,
};


const questionsData = [
  { id: 1, text: "What is 2 + 2?", options: ["1", "2", "3", "4"], status: 'not visited' },
  { id: 2, text: "which is not vegetable?", options: ["beetroot", "potato", "tomato", "onion"], status: 'not visited' },
  { id: 3, text: "What is the square root of 16?", options: ["2", "3", "4", "5"], status: 'not visited' },
  { id: 4, text: "Who is harry?", options: ["muggle", "Wizard", "mudblood", "nota"], status: 'not visited' },
  { id: 5, text: "What is the largest planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], status: 'not visited' }
];

const TestPage = () => {
  const [questions, setQuestions] = useState(questionsData);
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(90); 
  const [attemptedCount, setAttemptedCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [notVisitedCount, setNotVisitedCount] = useState(questions.length);
  
  const currentQuestion = questions.find(q => q.id === currentQuestionId);

  //timer
  useEffect(() => {
    const timer = setTimeout(()=>{
        setTimeRemaining(timeRemaining - 1);
    },1000)

    return () => clearInterval(timer);
    },[timeRemaining]);


const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins< 10 ? '0': ''}${mins} : ${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleOptionSelect = (option) => {
    const updatedQuestions = questions.map(q => 
      q.id === currentQuestionId ? { ...q, selectedOption: option, status: 'attempted' } : q
    );
    setQuestions(updatedQuestions);
    updateCounts(updatedQuestions);
  };

  const handleClearResponse = () => {
    const updatedQuestions = questions.map(q => 
      q.id === currentQuestionId ? { ...q, selectedOption: null, status: 'not attempted' } : q );
    setQuestions(updatedQuestions);
    updateCounts(updatedQuestions);
  };

  const handleMarkForReview = () => {
    const updatedQuestions = questions.map(q => 
      q.id === currentQuestionId ? { ...q, status: 'marked for review' } : q);
    setQuestions(updatedQuestions);
    updateCounts(updatedQuestions);
  };

  const updateCounts = (updatedQuestions) => {
    const attempted = updatedQuestions.filter(q => q.status === 'attempted').length;
    const review = updatedQuestions.filter(q => q.status === 'marked for review').length;
    const notVisited = updatedQuestions.filter(q => q.status === 'not visited').length;

    setAttemptedCount(attempted);
    setReviewCount(review);
    setNotVisitedCount(notVisited);
  };

//bg-[#627182d8],bg-[#6294cdd8],bg-[#c8dffad8]

  return (
    <div className="h-screen w-auto px-24 shadow-md  bg-[#f9dbc1f0] flex flex-col">

    <div className="flex justify-end  pt-3">
      <div className="flex items-center">
        <img src={candidate.profilePic} alt="Profile" className="rounded-full w-12 h-12 mr-3" />
        <h2 className="text-xl font-bold">{candidate.name}</h2>
      </div>
    </div>

    <div className="flex h-full gap-1">
      <div className="w-[26%] bg-[#762d0369]  p-4 mt-12 rounded-md h-[80%] shadow-md">
        <h2 className="text-lg font-bold mb-4">Test Information</h2>
        <div className="grid grid-cols-2 mb-5">
          <p className='rounded-md px-2 items-center justify-center mx-auto my-1 left-0'>Total Questions:{questions.length}</p>
          <p className='bg-green-600 rounded-md px-2 items-center justify-center mx-3 my-1 left-0'>Attempted: {attemptedCount}</p>
          <p className='bg-[#f93232bf] rounded-md px-2 items-center justify-center mx-2 my-1 left-0'>Not Attempted: {questions.length - attemptedCount - reviewCount}</p>
          <p className='bg-[#f7e662e7] rounded-md px-2 items-center justify-center mx-auto my-1 left-0'>Marked for Review: {reviewCount}</p>
          <p className='bg-gray-300 rounded-md px-2 items-center justify-center mx-3 my-1'>Not Visited: {notVisitedCount}</p>
        </div>
        <h3 className="font-bold mb-2">Questions Status</h3>
        <div className="flex flex-wrap gap-2">
          {questions.map(q => (
            <button className={`p-2 rounded text-white ${
                q.status === 'attempted' ? 'bg-green-500' :
                q.status === 'marked for review' ? 'bg-yellow-500' : 'bg-gray-300'
              }`}
              key={q.id}
              onClick={() => setCurrentQuestionId(q.id)}>
              {q.id}
            </button>
          ))}
        </div>
        <div className="mt-4">
          <p><strong>Time Remaining:</strong> {formatTime(timeRemaining)}</p>
        </div>
      </div>

     
      <div className="w-3/4 p-6 flex flex-col bg-[#f3e9e0f0] mt-12 rounded-md shadow-lg h-[80%]">
        
        <div className="flex-grow">
          <h3 className="text-lg font-semibold mb-4">Question {currentQuestion.id}:</h3>
          <p className="mb-4">{currentQuestion.text}</p>
          <div className="mb-4">
            {currentQuestion.options.map((option, index) => (
              <label key={index} className="block mb-2">
                <input
                  type="radio" value={option}
                  name={`question-${currentQuestion.id}`}
                  checked={currentQuestion.selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                />{' '}
                {option}
              </label>
            ))}
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-[#f34343c9] text-white rounded"
              onClick={handleClearResponse}
            >
              Clear Response </button>

            <button className="px-4 py-2 bg-yellow-500 text-white rounded"
              onClick={handleMarkForReview}
            >
              Mark for Review</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default TestPage;

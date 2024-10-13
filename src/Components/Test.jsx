import React, { useState, useEffect } from 'react';
import img2 from '../assets/girl.png';
import img from '../assets/watermark.png';
import { useNavigate } from 'react-router-dom';
import LoginPage from './Loginpage';

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
  const [timeRemaining, setTimeRemaining] = useState(300); 
  const [attemptedCount, setAttemptedCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [notVisitedCount, setNotVisitedCount] = useState(questions.length);
  const [isTimedOut, setIsTimedOut] = useState(false);
  const currentQuestion = questions.find(q => q.id === currentQuestionId);

  //timer
  useEffect(() => {
    const timer = setTimeout(() => {
      //if (timeRemaining <= 5)
    if (timeRemaining <= 1) {
      setIsTimedOut(true);
      SubmitEvent(); 
  } else {
      setTimeRemaining(timeRemaining - 1);
    }
  }, 1000);

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
  
  const handleLogout=()=>{
    window.location.reload();
    // navigate('/'); 
    window.location.href = '/';
    
  }

  const SubmitEvent = () => {
    if (isTimedOut) {
      alert("Timezz Up!! Test Submitted.");
      window.location.reload();
    // navigate('/'); 
    window.location.href = '/';
    } else {
      const confirmSubmit = window.confirm("Are you sure you want to submit the test?");
      if (confirmSubmit) {
        alert("Test Submitted!");
        window.location.reload();
        // navigate('/'); 
        window.location.href = '/';
      }
    }
  };
  
  

//bg-[#627182d8],bg-[#6294cdd8],bg-[#c8dffad8]
          
          //f3e9e0f0 ,bg-[#f93232bf], left-[#762d0369],#e0cebdcb,#E0D1A8,#e0bfa8,#c2b1b1

  return (
    <div className="h-screen w-auto px-24 shadow-md  bg-[#e0bfa8]  bg-[img] flex flex-col" 
    //  style={{
    //   backgroundImage: `url(${img})`,
    //   backgroundSize: 'cover',
    //   backgroundBlendMode: 'multiply', 
    //   backgroundColor: '#e0bfa8', 
    // }}
    >
      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full pointer-events-none">
        <img src={img} alt="Watermark" className="w-full h-screen opacity-20"  />
      </div>

    <div className="flex justify-between pt-3">
      <div className="flex items-center ">
        <img src={candidate.profilePic} alt="Profile" className="w-12 h-12 mr-3 rounded-full" />
        <h2 className="text-xl font-bold">{candidate.name}</h2>
      </div>
      <div className='bg-[#e46969] items-center rounded-xl justify-center flex cursor-default'>
        <button className='h-auto mx-2 my-0 cursor-pointer'
        onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>

    <div className="flex h-full gap-1">
      <div className="w-auto bg-[#98a8bd]  p-4 mt-12 rounded-md h-[80%] shadow-md">
        <h2 className="mb-4 text-lg font-bold">Test Information</h2>
        <div className="grid grid-cols-2 p-3 mb-5 border-2 rounded-md shadow-lg border-[#231616d9] backdrop-blur-sm">
          <p className='left-0 items-center justify-center px-2 mx-auto my-1 rounded-md'>Total Questions:{questions.length}</p>
          <p className='left-0 items-center justify-center px-2 mx-3 my-1 bg-green-600 rounded-md'>Attempted: {attemptedCount}</p>
          <p className='bg-[#f93232bf] left-0 items-center justify-center px-2 mx-2 my-1 rounded-md '>Not Attempted: {questions.length - attemptedCount - reviewCount}</p>
          <p className='bg-[#f7e662e7] rounded-md px-2 items-center justify-center mx-auto my-1 left-0'>Marked for Review: {reviewCount}</p>
          <p className='items-center justify-center px-2 mx-3 my-1 bg-gray-300 rounded-md'>Not Visited: {notVisitedCount}</p>
        </div>
        <h3 className="mb-2 font-bold">Questions Status</h3>
        <div className="flex flex-wrap gap-2 ">
          {questions.map(q => (
            <button className={`p-2 rounded hover:border-slate-950 hover:border text-white ${
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
          <p className={`text-lg font-bold ${timeRemaining < 10 ? 'text-red-600' : 'text-black'}`}>
          <strong>Time Remaining:</strong> {formatTime(timeRemaining)}
  </p>
</div>

      </div>

     
      <div className="w-3/4 mx-3  p-6 flex flex-col bg-[#dbdfead0]  mt-12 rounded-md shadow-lg h-[80%]">
        
        <div className="flex-grow">
          <h3 className="mt-5 mb-4 text-xl font-extrabold">Question {currentQuestion.id}:</h3>
          <p className="mb-4 text-lg font-normal">{currentQuestion.text}</p>
          <div className="mb-4 ">
            {currentQuestion.options.map((option, index) => (
              <label key={index} className="block mb-2 text-lg font-normal">
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

            <button className="px-4 py-2 text-white bg-yellow-500 rounded"
              onClick={handleMarkForReview}
            >
              Mark for Review</button>
              
            {currentQuestion.id=== 5 ? <button className="px-4 py-2 text-white rounded bg-[#10b246] hover:bg-[#037e2c]"
              onClick={SubmitEvent}
            >
            Submit</button>: null}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default TestPage;

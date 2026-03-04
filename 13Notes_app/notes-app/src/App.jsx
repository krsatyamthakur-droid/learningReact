import React, { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const [Tasks, setTasks] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();

    if (!title || !details) return;

    const copyTask = [...Tasks];
    copyTask.unshift({ title, details }); // newest first
    setTasks(copyTask);

    settitle("");
    setdetails("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-amber-200 to-amber-300 p-10">

      {/* FORM SECTION */}
      <div className="flex items-center justify-between gap-16 bg-white/60 backdrop-blur-lg shadow-2xl rounded-3xl p-12 max-w-6xl w-full mx-auto">

        <form onSubmit={submithandler} className="flex flex-col gap-5 w-96">

          <h1 className="text-3xl font-bold text-amber-700">
            Brain Notes 🧠
          </h1>

          <input 
            type="text" 
            placeholder="Enter Notes Heading"
            className="p-4 border-2 border-amber-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />

          <textarea 
            placeholder="Enter Details"
            className="p-4 h-32 border-2 border-amber-300 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
            value={details}
            onChange={(e) => setdetails(e.target.value)}
          />

          <button className="p-4 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
            Add Notes
          </button>

        </form>

        {/* Image */}
        <img
          className="h-80 drop-shadow-xl"
          src="https://png.pngtree.com/png-clipart/20250518/original/pngtree-cute-brain-character-symbolizing-knowledge-and-fun-png-image_21023907.png"
          alt="Cute Brain"
        />
      </div>

      {/* RECENT NOTES SECTION */}
      <div className="max-w-6xl mx-auto mt-10">
        <h2 className="text-2xl font-bold text-amber-800 mb-6">
          Recent Notes
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {Tasks.map((task, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-amber-400 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-amber-700">
                {task.title}
              </h3>
              <p className="text-gray-700 mt-2">
                {task.details}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default App;
// Course.js
import React from 'react';

const Course = ({ course }) => {
  // Calculate total exercises using reduce
  const totalExercises = course.parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map(part => (
          <li key={part.id}>
            {part.name} - {part.exercises} exercises
          </li>
        ))}
      </ul>
      {/* Render total exercises separately */}
      <p><strong>Total of {totalExercises} exercises</strong></p>
    </div>
  );
};

export default Course;

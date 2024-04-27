// ExampleParentComponent.js
import React from 'react';
import Books from './Books';

const ExampleParentComponent = () => {
  // Assuming you have a way to get the user ID, replace 'yourUserId' with the actual user ID.
  const userId = 'yourUserId';

  return (
    <div>
      {/* Pass the userId prop to the Books component */}
      <Books userId={userId} />
    </div>
  );
};

export default ExampleParentComponent;

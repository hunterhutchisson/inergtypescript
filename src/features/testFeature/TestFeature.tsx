import React from 'react';

function TestFeature() {

    // handleSubmitName takes in a parameter e (event) -- how could you type this parameter?
    // where should you implement this function within the existing code structure?
    const handleSubmitName = () => {
        
    }
    
    return (
        <div className='col s12 center-align'>
            <h1>Santa Needs Your Help!</h1>
            <p>Christmas is only a few days away, and Santa is really behind on making his Christmas list. He could use your knowledge of do-gooders in your circle.
                <br />
                Add a name, or five, or ten! Just make sure they deserve to make the list. Remember, we're operating on the honor system here... If they slip up in the next few days, be sure to remove them from the list. Don't worry though! Santa has plenty of coal to go around! If you do a good enough job, maybe he'll have time to come up with a more renewable energy solution in place of coal in the future.
            </p>
            <br />
            <h2>Add a Name</h2>
            <form className='left-align'>
                <label htmlFor="name-input">Name</label>
                <input id="name-input" placeholder="Name" type="text" />
                <input className='waves-effect waves-light btn green' type="submit" />
            </form>
            
            <br />
            <br />
            <h2>Names You Have Added:</h2>
            <div className='left-align'>
                {/* Add logic here to display names that have been added to the global state */}
                {/* Add logic to delete names from this list */}
            </div>
        </div>
    )
}

export default TestFeature;

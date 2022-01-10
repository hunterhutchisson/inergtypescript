import React from 'react';
import TestFeature from '../features/testFeature/TestFeature';
import './testPage.css';

function TestPage() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                        <div className='center-align'>
                            <img className='santa-img' src="../../images/claus.jpg" alt="" />
                        </div>
                        <TestFeature />
                    
                </div>
            </div>
            
        </div>
    )
}

export default TestPage;

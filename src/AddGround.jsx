import React from 'react'
import Sidebar from './Components/Dashboard/Sidebar'


const AddGround = () => {
  return (
    <div className='grid-container'>
      <Sidebar />
      <main className='main-container' style={{marginTop:90 , color:'black'}}>
      
      <div class="ground-form">
  <h1 class="ground-form-title">List a New Ground</h1>
  <div class="form-fields">
    <div class="field-section">
      <div class="field-group">
        <label for="ground-name">Name:</label>
        <input type="text" id="ground-name" class="ground-input" />
      </div>
      <div class="field-group">
        <label for="ground-address">Address:</label>
        <input type="text" id="ground-address" class="ground-input" />
      </div>
      <div class="field-group">
        <label for="ground-description">Description:</label>
        <textarea id="ground-description" class="ground-input"></textarea>
      </div>
    </div>
    <div class="field-section">
      <div class="field-group">
        <label for="ground-photo">Upload Photo:</label>
        <input type="file" id="ground-photo" class="ground-input upload-btn" />
      </div>
    </div>
  </div>
</div>
    
    </main>
     {/* listing of all grounds*/ }
    </div>
  )
}

export default AddGround
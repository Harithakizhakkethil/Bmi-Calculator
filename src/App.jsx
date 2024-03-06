
import { useState } from 'react'
import './App.css'


function App() {
  const [height,setHeight]=useState('')
  const [weight,setWeight]=useState('')
  const [bmi,setBmi]=useState(null)
  const [bmiStatus,setBmiStatus]=useState('')
  const [errorMessage,setErrorMessage]=useState('')

  const calculateBmi = ()=>{
    const isValidHeight=/^\d+$/.test(height)
    const isValidWeight=/^\d+$/.test(weight)


    if(isValidHeight && isValidWeight){
      const heightInMeters = height/100
      const bmiValue = weight/(heightInMeters*heightInMeters)
      setBmi(bmiValue.toFixed(2))

      
      if(bmiValue<18.5){
        setBmiStatus("Underweight 😔")
      }else if(bmiValue>=18.5 && bmiValue<24.9){
        setBmiStatus("Normal weight 😊")
      }else if(bmiValue>=25  && bmiValue<29.9){
        setBmiStatus("Overweight 😞")
      }else{
        setBmiStatus("Oese 😞")
      }
      setErrorMessage('')     
    }else{
      setBmi(null)
      setBmiStatus('')
      setErrorMessage('please enter valid numeric values for height and weight')
    }
    
 }

  const clearAll=()=>{
    setBmi(null)
    setBmiStatus('')
    setHeight('')
    setWeight('')
  }

  
  let imgsrc;
  let note;
  if(bmi<1){
    imgsrc=null
  }else if(bmi<18.5 ){
    imgsrc = 'https://st3.depositphotos.com/27811286/32122/v/450/depositphotos_321229612-stock-illustration-skinny-sad-kid-girl-use.jpg'
    note = 'Eat nutritious foods that are high in calories .'
  }else if(bmi>=18.5 && bmi<24.9){
    imgsrc = 'https://static.mamanpourlavie.com/uploads/images/articles.cache/2009/03/03/file_main_image_3273_2_atteindre_poids_sante_01_3273_645X360_cache_640x360.jpg'
  }else if(bmi>=25  && bmi<29.9){
    imgsrc= 'https://cdn5.vectorstock.com/i/1000x1000/08/19/bald-man-overweight-icon-cartoon-style-vector-27510819.jpg'
    note='Eat a healthy, reduced-calorie diet and exercise regularly. '
  }else{
    imgsrc = 'https://i.pinimg.com/474x/f9/98/1d/f9981d8e036481408633632174ff72eb.jpg'
    note= ' Focus on the nutritional content of your food. Avoid unhealthy and sugar drinks. '

  }

 
  return (
    <>
    
      <div style={{height:'500px',width:"700px"}} className='container justify-content-center align-items-center flex-row  '>
       
        <div className='data'>
          <h3 style={{paddingLeft:'80px'}}>BMI Calculator</h3>
          {errorMessage && <p className='error'>{errorMessage}</p>}
            <div className='ip ps-5'>
              <label style={{paddingTop:'20px',paddingRight:'10px',fontSize:'20px'}} htmlFor='height' >Height (cm) :</label>
              <input type="text" value={height} id='height' onChange={(e)=>setHeight(e.target.value)}/><br />
              <label style={{paddingTop:'20px',paddingRight:'10px',fontSize:'20px'}} htmlFor='weight' >Weight (kg) :</label>
              <input type="text" value={weight} onChange={(e)=>setWeight(e.target.value)} id='weight' /><br />
              <button onClick={calculateBmi} className='btn btn-success text-dark mt-4 me-3'>Calculate BMI</button>
              <button onClick={clearAll} className='btn btn-light text-dark mt-4 '>Clear</button>
             {bmi!== null && (
               <div className='results'>
               <p>Your BMI is :{bmi}</p>
               <p>Status : {bmiStatus}</p>
             </div>
             )}
            </div>

            
        </div>
        <div className=' d-flex justify-content-center align-items-center m-5 p-5 flex-column '>
              <img style={{height:'270px',width:'200px'}} src = {imgsrc}  alt="" /> 
              <p style={{paddingTop:'20px'}}>{note}</p><br />
              
            </div>


      </div>
    </>
  )
}

export default App

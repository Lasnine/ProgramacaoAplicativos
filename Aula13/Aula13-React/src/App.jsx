import './App.css'

function App() {
  return (
    <>
    <div className=' flex justify-center gap-12'>
      <div className='w-50 h-50 bg-indigo-700 flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-20'>
          <div className='w-15 h-15 bg-amber-600'></div>
          <div className='w-15 h-15 bg-amber-600'></div>
        </div>
      </div>
      <div className='w-50 h-50 bg-indigo-700 flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <div className='w-15 h-15 bg-amber-600'></div> 
        </div>
      </div>
      <div className='w-50 h-50 bg-indigo-700 flex flex-col justify-between'>
          <div className=''>
            <div className='w-15 h-15 bg-amber-600'></div>
          </div>
          <div className='flex justify-end'>
            <div className='w-15 h-15 bg-amber-600'></div>
          </div>
      </div>
      <div className='w-50 h-50 bg-indigo-700 flex items-end justify-center'>
        <div className=''>
          <div className='w-15 h-15 bg-amber-600'></div>
        </div>
      </div>
    </div>
    
    <br />
    <br />
  
    <div className='flex justify-center  gap-12 items-center'>
      <div className='w-50 h-50 bg-indigo-700'>
        <div className='flex justify-center-safe'>
          <div className='w-15 h-15 bg-amber-600'></div>
        </div>
      </div>
      <div className='w-50 h-50 bg-indigo-700 flex justify-between flex-col'>
          <div className='flex justify-center'>
            <div className='w-16 h-16 bg-amber-600'></div>
          </div>
          <div className='flex justify-between'>
            <div className='w-16 h-16 bg-amber-600 flex self-start'></div>
            <div className='w-16 h-16 bg-amber-600 flex self-end'></div>
          </div>
          <div className='flex justify-center'>
            <div className='w-16 h-16 bg-amber-600'></div>
          </div>
      </div>
      <div className='w-50 h-50 bg-indigo-700'></div>
    </div>
   
    <br />
    <br />
  
    <div className=' flex justify-center gap-12'>
      <div className='w-50 h-50 bg-indigo-700'></div>
      <div className='w-50 h-50 bg-indigo-700 flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <div className='w-15 h-15 bg-amber-600'></div> 
        </div>
      </div>
      <div className='w-50 h-50 bg-indigo-700 flex justify-end'>
        <div className=''>
          <div className='w-15 h-15 bg-amber-600'></div> 
        </div>
      </div>
    </div>
    </>
  )
}

export default App
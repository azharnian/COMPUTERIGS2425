import { useState } from 'react';
import './App.css'

const Modal = () => {

  return ( <div className="modal" tabindex="-1">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal title</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div> );
}


function App() {
  const [isShow, setIsShow] = useState(false);

  return (
   <>
    <Modal />
    <button className='btn btn-link'>Blank Button</button>
    <div className="btn-group">
      <button className='btn btn-primary'>Click Me!</button>
      <button className='btn btn-warning'>Warn Me!</button>
    </div>
    <button className='btn btn-outline-primary'>Outline Button</button>
    <button className='btn btn-outline-secondary custom'>Custom Button</button>

    <div className="alert alert-primary w-50 mt-5 mx-auto">Contoh Alert</div>

    <div className="card w-25 mx-auto my-0">
      <img className="card-img-top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_qkQ0pcqbDs-qUf7KNfKx9TdSB7UT1CqIg&s' alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
   </>
  )
}

export default App

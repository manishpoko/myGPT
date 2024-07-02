import React from 'react'
import { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const {onSent, recentPrompt, showResults, loading, resultData, input, setInput} = useContext(Context)


  return (
    <div className='main'>
        <div className='nav'>
            <p>myGPT</p>
            <img src={assets.user_icon} alt='user icon' />
        </div>
        <div className='main-container'>


            {!showResults
            ? <>
            <div className='greet'>
                <p><span>hi Manish,</span></p>
                <p>having a good day ?</p>
            </div>
            <div className='cards'>
                <div className='card'>
                    <p>suggest some great hiking spots!</p>
                    <img src={assets.compass_icon} alt='compass icon' />
                </div>

                <div className='card'>
                    <p>give me a gist of this topic - hypermetropia</p>
                    <img src={assets.bulb_icon} alt='bulb icon' />
                </div>

                <div className='card'>
                    <p>few techniques to enhance teamwork!</p>
                    <img src={assets.message_icon} alt='collab icon' />
                </div>

                <div className='card'>
                    <p>help me understand this piece of code</p>
                    <img src={assets.code_icon} alt='code icon' />
                </div>

                
            </div>
            
            </>
            : <div className='result'>
                <div className='result-title'>
                    <img src= {assets.user_icon} alt='' /> 
                    <p>{recentPrompt}</p>
                </div>
                <div className='result-data'>
                    <img src={assets.gemini_icon} alt='' /> 
                    {loading
                        ? <div className='loader'>
                            <hr />
                            <hr />
                            <hr />

                        </div>
                        : <p dangerouslySetInnerHTML={{__html: resultData}}></p>
                    }
                </div>


                </div>
            }


            
            <div className='main-bottom'>
                <div className='search-box'>
                    <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='search for something' />
                    <input type='text' placeholder='' />
                    <div>
                        <img src={assets.gallery_icon} alt='' />
                        <img src={assets.mic_icon} alt='' />
                        {input ? <img onClick={() =>onSent()} src={assets.send_icon} alt='' /> : null}
                    </div>
                </div>
                <p className='bottom-info'>
                    p.s. - this is just a practice project, so it's far from being perfect :)
                </p>
            
            </div>
        </div>
    </div>
  )
}

export default Main
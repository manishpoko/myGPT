import React, {useState, useContext}  from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'   // Import assets from assets.js
import { Context } from '../../context/Context'


const Sidebar = () => {
    const [extended, setExtended] = useState(false)
    const {onSent, previousPrompts, setRecentPromptl, newChat} = useContext(Context)
    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }


  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=> setExtended(prev => !prev)} className="menu" src={assets.menu_icon} alt="menu" />
        <div onClick={() =>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="new chat icon" />
          {extended ? <p>new chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">recent</p>
            {previousPrompts.map((item, index) => {
                return (
                <div onClick={() => loadPrompt(item)} className="recent-entry">
                    <img src={assets.message_icon} alt="message icon" />
                    <p>{item.slice(0,15)} ...</p>
                </div>

                )

            })}
            
          </div>
        ) : null}
      </div>


      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question icon" />
          {extended ? <p>help</p> : null }
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="recent history icon" />
          {extended? <p>history</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="setting icon" />
          {extended ? <p>settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar
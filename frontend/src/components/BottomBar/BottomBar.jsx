import React from 'react'
import "../BottomBar/BottomBar.css"
function BottomBar() {
  return (
    <div className="bottom-bar">
      <div className="bottom-bar-content">
        <p className="copyright">
          <span>©</span> 2026 Sleepy Owl Coffee
        </p>

        <div className="links">
          <a href="/privacy">Privacy</a>
          <span className="dot"> . </span>
          <a href="/terms">Terms of Use</a>
        </div>
      </div>
    </div>
  )
}

export default BottomBar
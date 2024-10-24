import React from 'react'

export default function Footer(props) {
  return (
    <div>
      <footer class={`bg-${props.mode} text-center text-lg-start`} style={{backgroundColor: props.mode === "dark" ? "black": "white", color: props.mode === "dark" ? "white": "black", paddingTop: "20px"}}>
        <div class="container text-center">
            <h5 class="text-uppercase" style={{paddingTop: "20px"}}>about</h5>
            <p style={{padding: "20px", textAlign: "justify"}}>TextUtils is your all-in-one tool for text-related tasks. Count words/characters, remove extra spaces, and convert text cases (uppercase, lowercase, capitalize). It offers a dark mode and a user-friendly interface for easy text management. Stay efficient with TextUtils!</p>
        </div>
        <div class="text-center p-3" style={{borderTop: "1px solid gray"}}>
            Made with <i class="fa-solid fa-heart"></i> by Soumitri.
        </div>
        </footer>
    </div>
  )
}

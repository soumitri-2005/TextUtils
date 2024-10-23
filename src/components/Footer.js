import React from 'react'

export default function Footer(props) {
  return (
    <div>
      <footer class={`bg-${props.mode} text-center text-lg-start`} style={{backgroundColor: props.mode === "dark" ? "black": "white", color: props.mode === "dark" ? "white": "black", paddingTop: "20px"}}>
        <div class="container text-center">
            <h5 class="text-uppercase" style={{padding: "20px"}}>about</h5>
            <p style={{paddingBottom: "20px"}}>TextUtils is your go-to tool for handling all your text-related tasks. Need to count words or characters in a document? TextUtils has you covered. It helps you streamline your text by removing extra spaces and supports various text case conversions, including uppercase, lowercase, and capitalizing the first letter of each word. It also features a dark mode for a more comfortable viewing experience. With a user-friendly interface, TextUtils makes it easy to copy text or clear the text box when starting afresh. Stay efficient and enhance your text management with TextUtils!</p>
        </div>
        <div class="text-center p-3" style={{borderTop: "1px solid gray"}}>
            Made with <i class="fa-solid fa-heart"></i> by Soumitri.
        </div>
        </footer>
    </div>
  )
}

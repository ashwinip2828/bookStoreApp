import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 {/* <div  className=' dark:bg-slate-900 dark:text-white '>
 <App />
 </div> */}
 {/* context api ke liye */}
    <AuthProvider>
        <div  className=' dark:bg-slate-900 dark:text-white '>
            <App />
        </div>
    </AuthProvider>
 </BrowserRouter>
)
//ab hum navbar mai response mil raha hai ya nahi dekhenge

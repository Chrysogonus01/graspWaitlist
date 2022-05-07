import Head from 'next/head'
import styles from '../styles/Front.module.css'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import swal from 'sweetalert'
import Axios from 'axios';

export default function Home() {
        const url = ""
        const [data, setDate] = useState({
          email: ""
        });
      

        ///Get data from front-end
        function handle(e){
          const newData = {...data}
          newData[e.target.id] = e.target.value
          setDate(newData)
          console.log(newData)
        }
        
        //Submit email to back-end
        function submit(e){
          e.preventDefault();
          Axios.post(url,{
            email: data.email
          })
          .then(res => {
            console.log(res);
            console.log(res.data);
            
          })
          .catch(err => {
            console.log("wrong request, mehn fuck you aaron😒");
          })

        }
        return(

//Main waitlist view 
          <div>
            <title>Grasp Early Access</title>
            <meta name='keywords' content='web, learning, edtech' />
      <nav className={styles.navcontainer}>
        <div className={styles.logo}>
          <a href='/' className={styles.slogo}><img src='/grasplogo.png' alt='Grasp Early Access' /></a>
          </div>
        <ul className={styles.navlist}>
        <li className={styles.tutor}>
            <a className={styles.tutornav} href="https://docs.google.com/forms/d/e/1FAIpQLSdWnXOwoKIOVmsPPAA4Qk_Wb8V-dx-u9ac7SGCdJjWpXWxSUw/viewform" _target="">
            Want to be a tutor?
          </a>
          </li> 
          </ul>
          </nav>
          <img className={styles.nerdguyimg} src="/nerdguy.png" />
          <div className={styles.waitlistmain}>
          <header className={styles.header}>Making Learning
             much<br></br> more&nbsp;<span className={styles.autotype}>easier</span></header>
             <img className={styles.line} src="/linegrasp.png" />
             <p  className={styles.pmiddle}>Grasp is an educational learning technology<br></br>  platform that  teaches advances sciences<br />to anyone  willing to learn.</p> 
                         <div className={styles.inputgets}>
                  <form onSubmit={(e)=> submit(e)} >         
                <button className={styles.button} type='submit'>
                    Early access</button>&nbsp;&nbsp;
                       <input 
                       onChange={(e) => handle(e)} id="email" value={data.email}
                       type="email"
                        name="email"
                      placeholder="Enter Email address" 
                      className={styles.inmid} />
                      </form>
                      </div>
          </div>

          <footer><a href='https://twitter.com/GraspSci'><img className={styles.twitterlogo} src="/grasptwitterb.png" /></a></footer>
          </div>
        )
}

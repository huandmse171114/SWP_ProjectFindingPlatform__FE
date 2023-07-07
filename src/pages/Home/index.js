// import styles from './Home.module.scss'
import './index.scss'
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Layout/component/Header';
import logo from '../../assets/images/banner1.png'
import logo2 from '../../assets/images/banner2.png'
import Bean from '../../assets/images/beans.png'
import Hitech from '../../assets/images/hitech.png'
import Startup from '../../assets/images/Startupland.png'
import Saigon from '../../assets/images/Saigontechnology.png'
import KMS from '../../assets/images/Kms.jpg'
import fpt from '../../assets/images/fpt_software.jpg'
import Connection from '../../assets/images/connections_icon.png'
import Goal from '../../assets/images/goal_icon.png'
import GroupsIcon from '../../assets/images/group_icon.png'
import { Divider } from '@mui/material';
import demoData from '../../components/Layout/component/DemoData';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user])

    return (

        <div className="wrapper">

       
       

{/*  */}


<div>
      <div className="Banner1">
      <div className="block1">
          <div className="box2">
            <h1 className="text4">&#123;Develop&#125; </h1>
          </div>
{/*  */}
          <div className="box4">
            <h1 className="your">your</h1>
            <h1 className="text4_sup">&lt;Career&#47;&gt;</h1>
          </div>   
{/*  */}
          <div>
            <p className="text3_sup">Bridging academia and industry for real-world </p>
            <p className="text3_sup">project collaboration.</p>
          </div>
{/*  */}
          <div className='button1'>
            <button className='btn'>Button</button>
            
          
            <button className='btn'>Button</button>
            
          </div>
        </div>

        <img className="img1" src={logo} />
      </div>
      {/* Why find hub? */}
      <div className='boxWhy'>
      <div className="question">
        <h1 className="why">Why </h1>
        <h1 className="findhub"> FindHub </h1>
        <h1 className="quote">?</h1>
      </div>
      {/*  */}
      <div >
        <ul className="Icon_Container">
          <li className='icon_box'>
            <img className="Icons" src={GroupsIcon} />
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum faucibus diam ut metus dignissim fermentum. Nam vel
              mollis ex, et placerat metus. Nullam facilisis consectetur cursus.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Donec aliquam nunc ac justo
              pellentesque mattis.
            </p>
          </li>
          <li className='icon_box'>
            <img className="Icons" src={Goal} />
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum faucibus diam ut metus dignissim fermentum. Nam vel
              mollis ex, et placerat metus. Nullam facilisis consectetur cursus.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Donec aliquam nunc ac justo
              pellentesque mattis.
            </p>
          </li>
          <li className='icon_box'>
            <img className="Icons" src={Connection} />
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum faucibus diam ut metus dignissim fermentum. Nam vel
              mollis ex, et placerat metus. Nullam facilisis consectetur cursus.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Donec aliquam nunc ac justo
              pellentesque mattis.
            </p>
          </li>
        </ul>
      </div>

      </div>
       
      {/*  */}
      <div className='diviver'> 
      <Divider variant="middle" sx={{marginLeft:"15%",
    marginRight:"15%", marginBottom:"7%",marginTop:"7%",backgroundColor:"#fff"
    }} />
      </div>
      {/* Who with us */}
      <div className="contact">
        <h1 className="Header2">Who with us?</h1>
        <div className="company">
          <img className="line1" src={fpt} />
          <img className="line1" src={KMS} />
          <img className="line1" src={Saigon} />
        </div>
{/*  */}
        <div className="company">
          <img className="line2" src={Startup} />
          <img className="line2" src={Hitech} />
          <img className="line2" src={Bean} />
        </div>
      </div>
      {/* Find suitable */}
      <div className="Banner2">
        <img className="img1" src={logo2} />
{/*  */}
        <div className="block2">
          <div className="box2">
            <h1 className="text2">Find</h1>
            <h1 className="text2_sup">suitable</h1>
          </div>
{/*  */}
          <div className="box3">
            <h1 className="text2">project</h1>
            <h1 className="text2_sup">for you</h1>
          </div>
{/*  */}
          <div>
            <h1 className="text3">right now !</h1>
          </div>
{/*  */}
          <div>
            <p className="text3_sup">Bridging academia and industry for real-world </p>
            <p className="text3_sup">project collaboration.</p>
          </div>
{/*  */}
          <div className='button1'>
            <button className='btn'>Button</button>
            
           
            <button className='btn'>Button</button>
            
          </div>
        </div>
      </div>
    </div>

{/*  */}




























        </div>
        // 

    );
}

export default Home;
import { useNavigate } from 'react-router-dom';
import './style.css'
import React, { useRef, useEffect } from 'react';

const Home=()=>{
    const pay=useNavigate();
    const tran=useNavigate();
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);

    useEffect(() => {
        const div1 = div1Ref.current;
        const div2 = div2Ref.current;
    
        const handleScroll = (source, target) => {
          return () => {
            target.scrollTop = source.scrollTop;
            target.scrollLeft = source.scrollLeft;
          };
        };
    
        div1.addEventListener('scroll', handleScroll(div1, div2));
        div2.addEventListener('scroll', handleScroll(div2, div1));
    
        return () => {
          div1.removeEventListener('scroll', handleScroll(div1, div2));
          div2.removeEventListener('scroll', handleScroll(div2, div1));
        };
      }, []);
      const Payfun=()=>{
        pay("/payment")
      }
      const tranfun=()=>{
        tran("/transaction")
      }
    return(
        <div className='home'>
        <h1>Sleeve <span>2</span></h1>
        <button onClick={Payfun} className='payment'>Payment</button>
        <button onClick={tranfun} className='transaction'>Transaction</button>
        <h4>The ultimate music accessory for your Mac.</h4>
        <p style={{fontSize:"26px",marginTop:"-50px",color:"white"}}>
        <span >Sleeve sits on the desktop, displaying and controlling the music you’re </span><br/> currently playing in 
        <img src='https://replay.software/sleeve/images/AppMusicDark@2x.png' height={25} width={25} alt='music img'></img>
        Apple Music,<img src='https://replay.software/sleeve/images/AppSpotifyDark@2x.png' height={25} width={25} alt='spotify' ></img>Spotify, and
        <img src='https://replay.software/sleeve/images/AppDopplerDark@2x.png' height={25} width={25} alt='Doppler'></img>Doppler.

        </p><br/>
        <div  style={{display:"flex",gap:"40px",alignItems:"center",marginLeft:"340px"}}>
            <div className='homediv1' style={{border:"1px solid black",height:"40px",width:"200px",borderRadius:"10px",padding:"10px",backgroundColor:"white",color:"black"}}>
                <img src='https://s.yimg.com/fz/api/res/1.2/W_FxtDOnmzoDlN.kNKnUZQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI1MjtxPTgwO3c9MjUy/https://s.yimg.com/zb/imgv1/2cc2074d-9408-3c85-a3a8-6bc85315781d/t_140x140' height={25} width={25} alt='appleimg'>
                </img>Mac App Store</div>
            <div className='homediv2' style={{border:"0.5px solid white",height:"40px",width:"200px",borderRadius:"10px",padding:"10px",backgroundColor:"black",color:"white"}}>Buy Directly
            <button style={{borderRadius:"10px",backgroundColor:"white",border:"none",marginLeft:"10px",height:"25px",width:"50px"}}>$5.99</button>
            </div>
        </div>
        <p style={{color:"rgb(90, 89, 89)"}}>
        No subscriptions. No in-app <br/> purchases. Requires macOS 11 Big Sur <br/> or later.
        </p>
        <div className='homediv3' style={{border:"0.5px solid white",height:"40px",width:"600px",borderRadius:"20px",display:"flex",marginLeft:"270px",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
          <div> <img src='https://replay.software/sleeve/images/ShelfCallout@2x.png' alt='div' height={65} width={65} style={{marginTop:"-10px"}}></img></div>
          <div><span style={{padding:"10px",color:"white",marginTop:"30px"}}>Now with shelves and a progress bar.See what's new in Sleeve 2.3
          <span style={{marginLeft:"20px",marginTop:"50px"}}>
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="text-gray-400 flex-shrink-0"><path d="M10 .25C4.615.25.25 4.615.25 10a9.75 9.75 0 0 0 19.5 0c0-5.385-4.365-9.75-9.75-9.75Zm0 1.5a8.25 8.25 0 1 1 0 16.5 8.25 8.25 0 0 1 0-16.5Z" fill="currentColor"></path><path d="m10.75 13 3-3m0 0-3-3m3 3h-7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </span>
          </span></div>
        </div><br/><br/><br/>
        <p style={{color:"skyblue"}}>
            NEW IN <button style={{height:"20px",width:"40px",borderRadius:"10px",border:"none",backgroundColor:"skyblue",marginLeft:"5px"}}>2.0</button><br/>
            <br/>
            <h4>Themes. Unlimited themes.</h4>
            <p style={{color:"white",fontSize:"25px",marginTop:"-40px"}}>
            Themes in Sleeve make creating and switching between customizations easy. Share your own<br/> creations with friends and install as many themes as you like with just a double-click.
            </p><br/>
        
        </p>
        <img src='./Screenshot 2024-05-21 100814.png' alt='img' height={350} width={1050} style={{borderRadius:"20px"}}></img>
            {/* chnage it up */}
        <br/><br/>
        <div style={{color:"white",display:"flex",gap:"25px",marginLeft:"40px"}}>
            <div style={{border:"1px solid transparent",width:"510px" ,display:"flex",gap:"5px",height:"300px",borderRadius:"15px",backgroundColor:"rgb(2, 2, 22)"}}>
                <div style={{border:"none",width:"250px",height:"300px",}}>
                    <h5 style={{fontSize:"25px",marginLeft:"-45px"}}>Change it up</h5>
                    <p style={{fontSize:"18px"}}>
                    Switch between themes<br/> with just a click.
                    </p>
                    <p style={{fontSize:"18px",marginLeft:"20px"}}>
                    Modify the built-in themes or create your own using Sleeve’s extensive preferences.
                    </p>
                </div>
                <div style={{border:"none",width:"250px",overflow:"hidden",height:"300px"}}>
                    <img src='https://replay.software/sleeve/images/ThemeIcon.png'alt='hhh' style={{opacity:"0.6",transform:"rotate(-10deg)",marginTop:"110px",marginLeft:"70px"}} >
                    </img>

                    <img src='https://replay.software/sleeve/images/ThemeUIActiveDark@2x.png' alt='gg'height={120} width={225} style={{position:"absolute",marginTop:"-290px",marginLeft:"-100px",transform:"rotate(7deg)"}}>
                    </img>

                    <img src='https://replay.software/sleeve/images/ThemeUIDark@2x.png' alt='gg'height={120} width={225} style={{position:"absolute",marginTop:"-200px",marginLeft:"-90px",transform:"rotate(7deg)"}}></img>
                </div>
            </div>


            {/* Shareable */}


            <div style={{border:"1px solid transparent",width:"510px",height:"300px",borderRadius:"15px",backgroundColor:"rgb(1, 23, 1)"}}>
                <div style={{border:"none",width:"250px",height:"300px"}}>
                    <h5 style={{fontSize:"25px",marginLeft:"-45px"}}>Shareable</h5>
                    <span style={{fontSize:"18px"}}>
                    Export your themes and share them with friends using the handy new Sleeve Theme file format.
                    </span>
                    <p style={{fontSize:"18px",marginLeft:"20px"}}>
                    Install themes from anywhere with a double-click or a drag and drop.
                    </p>
                </div>
                <div style={{border:"none",width:"250px",height:"300px",overflow:"hidden"}}>
                    
                    <img src='https://replay.software/sleeve/images/ThemeFile@2x.png' height={170} width={100} style={{position:"absolute",marginTop:"-215px",opacity:"0.4",marginLeft:"290px",transform:"rotate(-3deg)"}}>
                    </img>
                    
                    <img src='https://replay.software/sleeve/images/ThemeExportDark@2x.png' height={130} width={130} style={{position:"absolute",marginTop:"-230px",marginLeft:"200px",transform:"rotate(3deg)"}}></img>
                </div>
            </div>
        </div>
        <br/><br/>

        {/* CUSTOMIZATION */}

        <div>
            <h5 style={{color:"blueviolet"}}>CUSTOMIZATION</h5>
            <h4>Countless ways to customize.</h4>
            <p style={{fontSize:"26px",marginTop:"-50px",color:"white"}}>
            Customization is at the core of the Sleeve experience — choose from any <br/>combination of design choices, behaviors and settings to make Sleeve at home on<br/> your desktop.
            </p><br/><br/>
            <div>
                <img src='https://replay.software/sleeve/images/IconArrayHotkeysDark@2x.png' height={90} width={90} style={{position:"relative",marginLeft:"-750px"}}></img>
                <img src='https://replay.software/sleeve/images/IconArrayWindowDark@2x.png' height={110} width={110} style={{position:"absolute",marginLeft:"-30px",marginTop:"-10px"}}></img>
                <img src='https://replay.software/sleeve/images/IconArrayInterfaceDark@2x.png' height={130} width={130} style={{position:"absolute",marginLeft:"40px",marginTop:"-20px"}}></img>
                <img src='https://replay.software/sleeve/images/IconArrayLayoutDark@2x.png' height={150} width={150} style={{position:"absolute",marginLeft:"130px",marginTop:"-30px"}}></img>
                <img src='https://replay.software/sleeve/images/IconArrayThemeDark@2x.png' height={170} width={170} style={{position:"absolute",marginLeft:"230px",marginTop:"-40px",zIndex:"5"}}></img>
                <img src='https://replay.software/sleeve/images/IconArrayTrackDark@2x.png' height={150} width={150} style={{position:"absolute",marginLeft:"350px",marginTop:"-30px",zIndex:"4"}}></img>
                <img src='https://replay.software/sleeve/images/IconArrayPositionDark@2x.png' height={130} width={130} style={{position:"absolute",marginLeft:"460px",marginTop:"-20px",zIndex:"3"}}></img>
                <img src='https://replay.software/sleeve/images/IconArrayArtworkDark@2x.png' height={110} width={110} style={{position:"absolute",marginLeft:"560px",marginTop:"-10px",zIndex:"2"}}></img> 
                <img src='https://replay.software/sleeve/images/IconArraySettingsDark@2x.png' height={90} width={90} style={{position:"absolute",marginLeft:"650px",marginTop:"-1px",zIndex:"1"}}></img>
            </div>
        </div>
        <br/><br/> <br/><br/>

        {/* artwork */}
        
        <div style={{display:"flex",marginLeft:"40px"}}>
            {/* for theory part */}
            <div className='aabb' ref={div1Ref} style={{border:"1px solid transparent",width:"500px",height:"500px",}}>
                {/* art */}
                <div>
                <img src='https://replay.software/sleeve/images/IconArrayArtworkDark@2x.png' height={80} width={80} style={{marginLeft:"-300px"}}></img><br/>
                <h4 style={{marginLeft:"-190px"}}>Artwork</h4>
                <p>
                <span style={{color:"white",fontSize:"26px",marginLeft:"0px"}}>Scale artwork all the way up or all</span><br/>
                <span style={{color:"white",fontSize:"26px"}}>the way down. Round the corners</span><br/>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-130px"}}>or leave them square.</span><br/>
                </p><br/>
                <p>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-60px"}}>Choose shadow and lighting</span><br/>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-70px"}}>effects to bring your album</span><br/>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-210px"}}>artwork to life.</span><br/>
                </p><br/>
                <p>
                    <span style={{color:"white",fontSize:"26px",marginLeft:"-130px"}}>
                    Or hide it completely.
                    </span>
                </p><br/><br/><br/><br/><br/><br/>
                </div>

                {/* typography */}

                <div>
                <img src='https://replay.software/sleeve/images/IconArrayTrackDark@2x.png' height={80} width={80} style={{marginLeft:"-300px"}}></img><br/>
                <h4 style={{marginLeft:"-120px"}}>Typography</h4>
                <p>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-40px"}}>Pick the track info you want to</span><br/>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-20px"}}>display, and then exactly how to</span><br/>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-280px"}}>display it.</span><br/>
                </p><br/>
                <p>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-30px"}}>Choose the fonts, weights, sizes,</span><br/>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-20px"}}>and transparency to use for each</span><br/>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-10px"}}>line, along with customizing color</span><br/>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-250px"}}> and shadow.</span><br/>
                </p><br/><br/><br/><br/><br/><br/><br/>
                </div>

                {/* interface */}

                <div>
                <img src='https://replay.software/sleeve/images/IconArrayLayoutDark@2x.png' height={80} width={80} style={{marginLeft:"-300px"}}></img><br/>
                <img src='https://replay.software/sleeve/images/IconPositionDark@2x.png' height={80} width={80} style={{position:"relative",marginLeft:"-150px",marginTop:"-75px"}}></img>
                <img src='https://replay.software/sleeve/images/IconInterfaceDark@2x.png' height={80} width={80} style={{position:"relative",marginLeft:"-20px",marginTop:"-80px"}}></img>
                <br/>
                <h4 style={{marginLeft:"-190px"}}>Interface</h4>
                <p>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-30px"}}>Customize the layout, alignment</span><br/>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-60px"}}>and position to fit your setup.</span><br/>
                </p>
                <p>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-10px"}}>Show and hide playback controls.</span><br/>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-100px"}}>Add a backdrop layer and</span><br/>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-250px"}}>customize it.</span><br/>
                </p>
                </div><br/><br/><br/><br/><br/><br/>

                {/* settings */}

                <div style={{marginTop:"0px"}}>
                <div>
                {/* <img id='img1' src='https://replay.software/sleeve/images/IconArrayWindowDark@2x.png' height={80} width={80} ></img><br/> */}
                <img id='img2' src='https://replay.software/sleeve/images/IconHotkeysDark@2x.png' height={80} width={80} ></img>
                <img id='img3' src='https://replay.software/sleeve/images/IconSettingsDark@2x.png' height={80} width={80} ></img>
                </div>
                {/* <img src='https://replay.software/sleeve/images/IconSettingsDark@2x.png' height={80} width={80} style={{position:"relative",marginLeft:"-20px",marginTop:"-90px"}}></img> */}
                <br/>
                <h4 style={{marginLeft:"-190px"}}>Settings</h4>
                <p>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-60px"}}>Decide if Sleeve stays out of</span><br/>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-30px"}}>the way, behind windows, or in</span><br/>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-30px"}}>front of them — or only when</span><br/>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-160px"}}>you need to see it.</span><br/>
                </p><br/>
                <p>
                <span style={{color:"white",fontSize:"26px"}}>Show it in the Dock, choose from</span><br/>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-30px"}}>custom icons, or keep it on the</span><br/>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-220px"}}>Desktop only.</span><br/>
                </p><br/>
                <p>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-70px"}}>Set your custom keyboard</span><br/>
                <span style={{color:"white",fontSize:"26px"}}>shortcuts and integrate with the</span><br/>
                <span style={{color:"white",fontSize:"26px",marginLeft:"-200px"}}> apps you use.</span><br/>
                </p>
                </div>



            </div>

            {/* for overflow over the image */}
            <div style={{border:"1px solid transparent",width:"500px"}}>
                <div className='art' ref={div2Ref}>
                    {/* art */}
                    <div>
                    <img src='https://replay.software/sleeve/images/Artwork1Dark@2x.jpg' style={{marginTop:"30px",borderRadius:"10px",border:"2px solid black"}} ></img>
                    <img src='https://replay.software/sleeve/images/Artwork2.jpg' style={{marginTop:"30px",borderRadius:"10px",border:"2px solid black"}}></img>
                    <img src='https://replay.software/sleeve/images/Artwork3.jpg' style={{marginTop:"30px",borderRadius:"10px",border:"2px solid black"}}></img>
                   </div>
                   {/* typography */}
                   <div>
                    <img src='https://replay.software/sleeve/images/Typography1.jpg' style={{marginTop:"280px",borderRadius:"10px",border:"2px solid black"}}></img>
                    <img src='https://replay.software/sleeve/images/Typography2.jpg' style={{marginTop:"30px",borderRadius:"10px",border:"2px solid black"}}></img>
                   </div>
                   {/* interface */}
                   <div>
                    <img src='https://replay.software/sleeve/images/Interface1.jpg' style={{marginTop:"80px",zIndex:"2",borderRadius:"10px",border:"2px solid black"}}></img>
                    <img src='https://replay.software/sleeve/images/Interface2.jpg' style={{marginTop:"-30px",zIndex:"1",borderRadius:"10px",border:"2px solid black"}}></img>
                   </div>
                    {/* settings */}
                    <img src='https://replay.software/sleeve/images/Settings1.jpg' style={{position:"relative",marginTop:"100px",marginLeft:"0px",zIndex:"3",borderRadius:"10px",border:"2px solid black"}}></img>
                    <img src='https://replay.software/sleeve/images/Settings2.jpg' style={{position:"relative",marginTop:"-40px",marginLeft:"0px",zIndex:"2",borderRadius:"10px",border:"2px solid black"}}></img>
                    <img src='https://replay.software/sleeve/images/Settings3.jpg' style={{position:"relative",marginTop:"-30px",marginLeft:"0px",zIndex:"1",borderRadius:"10px",border:"2px solid black"}}></img>

                </div>
            </div>
        </div>


        {/* integrations */}

        <div >
        <h5 style={{color:"orangered"}}>INTEGRATIONS</h5>
        <h4>Like, Scrobble.</h4>
        <div style={{display:"flex",marginLeft:"40px",gap:"20px"}}>
            <div style={{border:"1px solid transparent",width:"500px",height:"400px",backgroundColor:"rgb(255, 0, 0, 0.1)",borderRadius:"10px"}}>
                <img src='https://replay.software/sleeve/images/IntegrationLastfmDark@2x.png' height={250} width={450}></img>
                <p style={{color:"white"}}>
                Sleeve integrates with<br/>
                Last.fm so you never miss a<br/>
                track. Simply sign in and<br/>
                start scrobbling.
                </p>
                <h6 style={{color:"white"}}>Last.fm account required</h6>
            </div>
            <div style={{border:"1px solid transparent",width:"500px",height:"400px",backgroundColor:"rgba(0,255,0,0.1)",borderRadius:"10px"}}>
                <img src='https://replay.software/sleeve/images/IntegrationSpotifyDark@2x.png' height={250} width={450}></img>
                <p style={{color:"white"}}>
                With Sleeve 2 you can now like<br/>
                tracks in Spotify, without ever<br/>
                having to switch away from<br/>
                Sleeve.
                </p>
                <h6 style={{color:"white"}}>A free Spotify Developer account is required</h6>
            </div>
            
        </div><br/><br/>
            <div style={{height:"80px",width:"980px",border:"1px solid transparent", padding:"25px",display:"flex",marginLeft:"40px",backgroundColor:"rgb(16, 15, 15)",borderRadius:"10px"}}>
                <div >
                <img src='https://replay.software/sleeve/images/AppMusicDark@2x.png' height={70} width={70} style={{marginLeft:"30px"}}></img>
                <img src='https://replay.software/sleeve/images/AppSpotifyDark@2x.png' height={70} width={70} style={{marginLeft:"30px"}}></img>
                <img src='https://replay.software/sleeve/images/AppDopplerDark@2x.png' height={70} width={70} style={{marginLeft:"30px"}}></img>

                </div>
                <div>
                <p style={{color:"white",marginLeft:"40px",fontSize:"22px",marginTop:"-5px"}}>Sleeve integrates directly with Apple Music, Spotify and <br/>Doppler. Control playback, like tracks and adjust volume<br/>seamlessly.</p>
                </div>
                
            </div><br/><br/>
            <div style={{display:"flex",marginLeft:"40px",gap:"30px"}}>
                <div style={{display:"flex",gap:"30px",height:"200px",width:"500px",border:"1px solid transparent",backgroundColor:"rgb(16, 15, 15)",borderRadius:"10px",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
                    <div>
                    <img src='https://replay.software/sleeve/images/AppSpotifyDark@2x.png' height={70} width={70}></img>
                    <img src='https://replay.software/sleeve/images/IntegrationDocDark@2x.png' height={60} width={50} style={{marginLeft:"-20px"}}></img>
                    </div>
                    <div>
                    <p style={{color:"white"}}>View the quick guide to<br/>connecting Sleeve to your Spotify<br/>account.</p>
                    <div className='btt' >View Guide</div>
                    </div>
                   
                </div>
                <div style={{display:"flex",gap:"30px",height:"200px",width:"500px",border:"1px solid transparent",backgroundColor:"rgb(16, 15, 15)",borderRadius:"10px",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
                <div>
                    <img src='https://replay.software/sleeve/images/AppSleeveDark@2x.png' height={80} width={80} style={{marginLeft:"-140px"}}></img>
                    <span style={{position:"absolute",color:"white",marginTop:"30px",marginLeft:"20px"}}>+</span>
                    <div style={{height:"60px", width:"60px",border:"2px solid rgb(42, 41, 41)",borderStyle:"dashed",borderRadius:"20px",marginLeft:"80px",marginTop:"-75px",color:"white",justifyContent:"center",alignContent:"center",alignItems:"center"}}>?</div>
                    
                    </div>
                    <div>
                    <p style={{color:"white"}}>Want to use Sleeve<br/>with your favorite<br/>music app?.</p>
                    <div className='btt1' >Request Integration</div>
                    </div>
                </div>
            </div><br/><br/>
        </div>

        </div>
    )
}
export default Home
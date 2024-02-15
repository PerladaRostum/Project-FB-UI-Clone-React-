import "./styles/general.css"
import "./styles/header.css"
import "./styles/main-panel.css"

function FacebookClone() {
    return( 
        <>
        <header>
            <div className="left-section">
                <div className="logo-container">
                    <img src="fb-icon/logos--facebook.svg" alt="logo" />
                    <img src="fb-icon/material-symbols-light--search.svg" className="search-icon" />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>
            <div className="middle-section">
                <a href="#" className="nav-link active">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z"></path></svg>
                    <span className="tooltip">Home</span>
                </a>
                <a href="#" className="nav-link">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M10.996 8.132A1 1 0 0 0 9.5 9v4a1 1 0 0 0 1.496.868l3.5-2a1 1 0 0 0 0-1.736l-3.5-2z"></path><path d="M14.573 2H9.427c-1.824 0-3.293 0-4.45.155-1.2.162-2.21.507-3.013 1.31C1.162 4.266.817 5.277.655 6.477.5 7.634.5 9.103.5 10.927v.146c0 1.824 0 3.293.155 4.45.162 1.2.507 2.21 1.31 3.012.802.803 1.813 1.148 3.013 1.31C6.134 20 7.603 20 9.427 20h5.146c1.824 0 3.293 0 4.45-.155 1.2-.162 2.21-.507 3.012-1.31.803-.802 1.148-1.813 1.31-3.013.155-1.156.155-2.625.155-4.449v-.146c0-1.824 0-3.293-.155-4.45-.162-1.2-.507-2.21-1.31-3.013-.802-.802-1.813-1.147-3.013-1.309C17.866 2 16.397 2 14.573 2zM3.38 4.879c.369-.37.887-.61 1.865-.741C6.251 4.002 7.586 4 9.5 4h5c1.914 0 3.249.002 4.256.138.978.131 1.496.372 1.865.74.37.37.61.888.742 1.866.135 1.007.137 2.342.137 4.256 0 1.914-.002 3.249-.137 4.256-.132.978-.373 1.496-.742 1.865-.369.37-.887.61-1.865.742-1.007.135-2.342.137-4.256.137h-5c-1.914 0-3.249-.002-4.256-.137-.978-.132-1.496-.373-1.865-.742-.37-.369-.61-.887-.741-1.865C2.502 14.249 2.5 12.914 2.5 11c0-1.914.002-3.249.138-4.256.131-.978.372-1.496.74-1.865zM8 21.5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z"></path></svg>
                    <span className="tooltip">Videos</span>
                </a>
                <a href="#" className="nav-link">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M1.588 3.227A3.125 3.125 0 0 1 4.58 1h14.84c1.38 0 2.597.905 2.993 2.227l.816 2.719a6.47 6.47 0 0 1 .272 1.854A5.183 5.183 0 0 1 22 11.455v4.615c0 1.355 0 2.471-.119 3.355-.125.928-.396 1.747-1.053 2.403-.656.657-1.475.928-2.403 1.053-.884.12-2 .119-3.354.119H8.929c-1.354 0-2.47 0-3.354-.119-.928-.125-1.747-.396-2.403-1.053-.657-.656-.929-1.475-1.053-2.403-.12-.884-.119-2-.119-3.354V11.5l.001-.045A5.184 5.184 0 0 1 .5 7.8c0-.628.092-1.252.272-1.854l.816-2.719zM10 21h4v-3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21zm6-.002c.918-.005 1.608-.025 2.159-.099.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.255.099-.735.101-1.716.101-3.159v-3.284a5.195 5.195 0 0 1-1.7.284 5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 12 13a5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 5.7 13a5.2 5.2 0 0 1-1.7-.284V16c0 1.442.002 2.424.1 3.159.096.706.263 1.033.486 1.255.222.223.55.39 1.255.485.551.074 1.24.094 2.159.1V17.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3.498zM4.581 3c-.497 0-.935.326-1.078.802l-.815 2.72A4.45 4.45 0 0 0 2.5 7.8a3.2 3.2 0 0 0 5.6 2.117 1 1 0 0 1 1.5 0A3.19 3.19 0 0 0 12 11a3.19 3.19 0 0 0 2.4-1.083 1 1 0 0 1 1.5 0A3.2 3.2 0 0 0 21.5 7.8c0-.434-.063-.865-.188-1.28l-.816-2.72A1.125 1.125 0 0 0 19.42 3H4.58z"></path></svg>
                    <span className="tooltip">Marketplace</span>
                </a>
                <a href="#" className="nav-link">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path><path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5.5 18.351.5 12zm2.21-2a9.537 9.537 0 0 0 0 3.993l.3.007A2 2 0 0 0 3 10h-.29zm.663-1.983a4 4 0 0 1 0 7.966 9.523 9.523 0 0 0 1.948 2.773A5.002 5.002 0 0 1 10 15.523h4a5.002 5.002 0 0 1 4.679 3.233 9.523 9.523 0 0 0 1.948-2.773 4 4 0 0 1 0-7.966A9.501 9.501 0 0 0 12 2.5a9.501 9.501 0 0 0-8.627 5.517zM21.5 12a9.55 9.55 0 0 0-.212-2.007l-.265.007H21a2 2 0 0 0-.01 4l.3-.007c.138-.643.21-1.31.21-1.993zM12 21.5a9.455 9.455 0 0 0 4.97-1.402A3 3 0 0 0 14 17.523h-4a3 3 0 0 0-2.97 2.575A9.456 9.456 0 0 0 12 21.5z"></path></svg>
                    <span className="tooltip">Groups</span>
                </a>
                <a href="#" className="nav-link">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M8 8a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2H9v2a1 1 0 1 1-2 0v-2H5a1 1 0 1 1 0-2h2V9a1 1 0 0 1 1-1zm8 2a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm-2 4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z"></path><path d="M.5 11a7 7 0 0 1 7-7h9a7 7 0 0 1 7 7v2a7 7 0 0 1-7 7h-9a7 7 0 0 1-7-7v-2zm7-5a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5h-9z"></path></svg>
                    <span className="tooltip">Gaming</span>
                </a>
            </div>
            <div className="right-section">
                <a href="#" className="nav-link">
                    <div className="right-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg>
                    </div>
                    <span className="tooltip">Menu</span>
                </a>
                <a href="#" className="nav-link">
                    <div className="right-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5c-1.922 0-3.736-.472-5.33-1.308a.63.63 0 0 0-.447-.069l-3.4.882a1.5 1.5 0 0 1-1.828-1.829l.882-3.4a.63.63 0 0 0-.07-.445A11.454 11.454 0 0 1 .5 12zm17.56-1.43a.819.819 0 0 0-1.125-1.167L14 11.499l-3.077-2.171a1.5 1.5 0 0 0-2.052.308l-2.93 3.793a.819.819 0 0 0 1.123 1.167L10 12.5l3.076 2.172a1.5 1.5 0 0 0 2.052-.308l2.931-3.793z"></path></svg>
                    </div>
                    <span className="tooltip">Messenger</span>
                </a>
                <a href="#" className="nav-link">
                    <div className="right-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z"></path></svg>
                    </div>
                    <span className="tooltip">Notifications</span>
                </a>
                <a href="#" className="nav-link">
                    <div className="profile-container">
                        <img src="fb-icon/Profile-channel.jpg" alt="" />
                        <span className="tooltip">Account</span>
                    </div>
                </a>
            </div>
        </header>

        <div className="main-panel">
            <div className="left-panel">
                <ul>
                    <li>
                        <img src="fb-icon/Profile-channel.jpg" className="profile" />
                        <div>Rostum Perlada</div>
                    </li>
                    <li>
                        <img src="fb-icon/nimbus--user-group.svg" alt="" />
                        <div>Friends</div>
                    </li>
                    <li>
                    <img draggable="false" height="36" width="36" alt="" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png?_nc_eui2=AeFR73QOjs7jWinb-vt5PZzgi9AM8exRZGeL0Azx7FFkZ6Q39K460D14czb0K4wRd2iTZE8ISHPOiH9ualN0Wszl" />
                        <div>Feeds</div>
                    </li>
                    <li>
                        <img src="fb-icon/heroicons--user-group.svg" alt="" />
                        <div>Groups</div>
                    </li>
                    <li>
                        <img src="fb-icon/lucide--store.svg" alt="" />
                        <div>Marketplace</div>
                    </li>
                    <li>
                        <img src="fb-icon/ph--video-light.svg" alt="" />
                        <div>Video</div>
                    </li>
                    <li>
                        <img src="fb-icon/f7--memories.svg" alt="" />
                        <div>Memories</div>
                    </li>
                    <li>
                        <img src="fb-icon/flowbite--bookmark-solid.svg" alt="" />
                        <div>Saved</div>
                    </li>
                    <li>
                        <img draggable="false" height="36" width="36" alt="" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/UcI9fM2oUUV.png?_nc_eui2=AeH1iAaBUbSlv6I5ZEAghT_sXnfhz3hpqpFed-HPeGmqkSCJAPeZ6_95P-NhNF-AypoaCI4jk_xZvWw0CCb__NDb" />
                        <div>Professional Dashboard</div>
                    </li>
                    <li>
                        <img src="fb-icon/iconamoon--arrow-down-2-duotone.svg" alt="" />
                        <div>See more</div>
                    </li>
                    <hr />
                    <li>
                        <h3>Your shortcuts</h3>
                    </li>
                    <li>
                        <img src="images/catc.jpg" className="catc" alt="" />
                        <div>CAT COLLEGE, INC. (Official FB Page)</div>
                    </li>
                    <li>
                        <img src="fb-icon/mingcute--omg-line.svg" alt="" /> 
                        <div>OMG</div>
                    </li>
                    <li>
                        <footer className="footer">
                            Privacy&middot;Terms&middot;Advertising&middot;Ad Choices&middot;Cookies&middot;more&middot;Meta &copy; 2024
                        </footer>
                    </li>
                </ul>
            </div>
            <div className="middle-panel">
                <div className="stories">
                    <div className="user-story">
                        <img src="images/Profile-channel.jpg" className="myAccount" alt="" />
                        <div className="create-story">
                            <img src="fb-icon/mdi--plus-circle.svg" className="plus-icon" alt="" />
                            Create Story
                        </div>
                    </div>
                    <div className="user-story">
                        <img src="images/anna-story.jpg" className="story" alt="" />
                        <img src="images/Anna-profile.jpg" className="userProfile" alt="" />
                        <div className="OnOffline"></div>
                    </div>

                    <div className="user-story">
                        <img src="images/Gel-profile.jpg" className="story" alt="" />
                        <img src="images/Gel-profile.jpg" className="userProfile" alt="" />
                    </div>

                    <div className="user-story">
                        <img src="images/ruzzel-story.jpg" className="story" alt="" />
                        <img src="images/ruzzel-story.jpg" alt="" className="userProfile" />
                    </div>
                </div>

                <div className="userMoment">
                    <div className="moment">
                    <img src="images/Profile-channel.jpg" className="profile" alt="" />
                    <input type="text" placeholder="What's on your mind, Rostum?" />
                    </div><br />
                    <hr />
                    <div className="moment-act">
                        <div className="user-act">
                            <img src="fb-icon/ri--video-add-fill.svg" alt="" />
                            <div>Live Video</div>
                        </div>
                        <div className="user-act">
                            <img src="fb-icon/mingcute--photo-album-fill.svg" alt="" />
                            <div>Photo/Video</div>
                        </div>
                        <div className="user-act">
                            <img src="fb-icon/subway--video-1.svg" alt="" />
                            <div>Reel</div>
                        </div>
                    </div>
                </div>

                <div className="user-post">
                    <div className="group-post">
                        <div className="group-profile">
                            <img src="images/user-pic.jpg" alt="" />
                            <div>
                                <p>Jayvee&nbsp;&middot;&nbsp;<span>Follow</span></p>
                                <p>15hours ago&middot;</p>
                            </div>
                        </div>
                        <div className="act-btn">
                            <img src="fb-icon/fe--elipsis-h.svg" alt="" />
                            <img src="fb-icon/material-symbols-light--close.svg" alt="" />
                        </div>
                    </div>
                    <div className="content-post">
                        <img src="images/user-post.jpg" alt="" />
                    </div>
                    <hr />
                    <div className="react">
                        <div className="like">
                            <img src="fb-icon/iconamoon--like-thin.svg" alt="" />
                            <p>Like</p>
                        </div>
                        <div className="comment">
                            <img src="fb-icon/iconamoon--comment-thin.svg" alt="" />
                            <p>Comment</p>
                        </div>
                        <div className="share">
                            <img src="fb-icon/ph--share-fat-thin.svg" alt="" />
                            <p>Share</p>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            <div className="right-panel">
                <div className="contacts">
                    <div className="">Contacts</div>
                    <div className="more">
                        <img src="fb-icon/material-symbols-light--search.svg" alt="" />
                        <img src="fb-icon/fe--elipsis-h.svg" alt="" />
                    </div>
                </div>
                <ul className="contact-lists">
                    <li>
                        <img src="images/Anna-profile.jpg" alt="" />
                        <p>Anna Mae Nario</p>
                        <div className="status"></div>
                    </li>
                    <li>
                        <img src="images/Gel-profile.jpg" alt=""/>
                        <p>Angelica Menes</p>
                        <div className="status"></div>
                    </li>
                    <li>
                        <img src="images/ruzzel-story.jpg" alt="" />
                        <p>Ruzzel Martinez</p>
                        <div className="status"></div>
                    </li>
                    <li>
                        <img src="images/Jubert-dp.jpg" alt="" />
                        <p>Jubert Arquero</p>
                        <div className="status"></div>
                    </li>
                    <li>
                        <img src="images/Pearl-dp.jpg" alt="" />
                        <p>Pearl Hernandez</p>
                        <div className="status"></div>
                    </li>
                    <li>
                        <img src="images/Julieb-dp.jpg" alt="" />
                        <p>Julie Ann Benasa</p>
                        <div className="status"></div>
                    </li>
                    <li>
                        <img src="images/Julier-dp.jpg" alt="" />
                        <p>Julie Ann Roncejero</p>
                        <div className="status"></div>
                    </li>
                    <li>
                        <img src="images/Andrei-dp.jpg" alt="" />
                        <p>Andrei Paja</p>
                        <div className="status"></div>
                    </li>
                    <li>
                        <img src="images/Renzo-cover.jpg" alt="" />
                        <p>RJ Camacho</p>
                        <div className="status"></div>
                    </li>
                    <li>
                        <img src="images/Kennethv-dp.jpg" alt="" />
                        <p>Kenneth Verdeflor</p>
                        <div className="status"></div>
                    </li>
                    <li>
                        <img src="images/Angelo-dp.jpg" alt="" />
                        <p>Angelo Armero</p>
                        <div className="status"></div>
                    </li>
                    <li>
                        <img src="images/Vince-dp.jpg" alt="" />
                        <p>Jhon Vincent Alvarado</p>
                        <div className="status"></div>
                    </li>
                    <li>
                        <img src="images/Francis-dp.jpg" alt="" />
                        <p>Francis Boncolmo</p>
                        <div className="status"></div>
                    </li>
                    <li>
                        <img src="images/Emmerson-dp.jpg" alt="" />
                        <p>Emmerson Mondragon</p>
                        <div className="status"></div>
                    </li>
                </ul>
            </div>
        </div>
    </>
    );
};

export default FacebookClone;
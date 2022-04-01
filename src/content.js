import React from 'react';
import { ReactDOM } from 'react';
import style from './content.module.css';
import avatar from './avatar.png'
import {FaChalkboard,FaProjectDiagram,FaFileInvoice,FaRegWindowClose,FaSignal} from "react-icons/fa";
function Content(){
    
    return(
        <>
        <div className={style.main}>
            <div className={style.left}>
                <div className={style.info}>
                    <div className={style.avatar}>
                        <img src={avatar}></img>
                    </div>
                    <div className={style.name}>Nguyễn Văn Hùng</div>
                    <div className={style.marjo}>Front-end</div>
                </div>
                <div className={style.sumary}>
                    <ul className={style.list}>
                    <li><FaChalkboard/>Dashboard</li>
                    <li><FaProjectDiagram/>Projects</li>
                    <li><FaFileInvoice/>Invoices</li>
                    <li><FaRegWindowClose/>Reports</li>
                    </ul>
                    <div className={style.trouble}>Have any trouble?<a>Click here</a></div>
                    </div>
            </div>
            <div className={style.right}>
                <div className={style.rightTop}><p><span>Hello</span>,My name is Hung</p>
                <input placeholder="Looking for?" ></input></div>
                <div className={style.mid}>
                    <div className={style.midleft}>
                        <div className={style.broad}>
                            <FaSignal/>
                        </div>
                        <h3>Earing</h3>
                        <h2>$1000.00</h2>
                        <div className={style.discout}>5% +last month</div>
                    </div>
                    <div className={style.midmid}>
                        <div className={style.midmidTop}>
                            <div className={style.top}><span> _ _ </span></div>
                            <div className={style.score}>
                                <h2>Rank</h2>
                                <h3>In top</h3>
                            </div>
                        </div>
                        <div className={style.midmidBot}>
                            <div className={style.value}>
                                <div className={style.amount}>06</div>
                                <div className={style.dis}>
                                    <h2>Your Project</h2>
                                    <h3>4 this month</h3>
                                </div>
                            </div>
                            <div className={style.link}>
                                <div className={style.app}>APP</div>
                                <div className={style.branding}>Branding</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.midright}>
                        <p>Your Projects
                        </p>
                        <div className={style.midrightBot}>
                            <div className={style.midrightContent}>
                                <div className={style.img}>
                                    <img src={avatar}></img>
                                </div>
                                <div className={style.time}>
                                    <h2>Logo design for Bakery</h2>
                                    <h4>1 day remaining</h4>
                                </div>
                            </div>
                            <div className={style.midrightContent}>
                                <div className={style.img}>
                                    <img src={avatar}></img>
                                </div>
                                <div className={style.time}>
                                    <h2>Logo design for Bakery</h2>
                                    <h4>1 day remaining</h4>
                                </div>
                            </div>
                            <span>See all projects</span>
                        </div>
                    </div>
                </div>
                <div className={style.bottom}>
                    <div className={style.bottomLeft}>
                        <p>Recent Invoices</p>
                        <div className={style.custom}>
                            <div className={style.user}>
                                <div className={style.midrightContent}>
                                    <div className={style.img}>
                                        <img src={avatar}></img>
                                    </div>
                                    <div className={style.time}>
                                        <h2>Logo design for Bakery</h2>
                                        <h4>1 day remaining</h4>
                                    </div>
                                </div>
                                <div className={style.coure}>
                                    <div className={style.paid}>Paid</div>
                                    <div>$ 1,200.87</div>
                                </div>
                            </div>
                            <div className={style.user}>
                                <div className={style.midrightContent}>
                                    <div className={style.img}>
                                        <img src={avatar}></img>
                                    </div>
                                    <div className={style.time}>
                                        <h2>Logo design for Bakery</h2>
                                        <h4>1 day remaining</h4>
                                    </div>
                                </div>
                                <div className={style.coure}>
                                    <div className={style.paid}>Paid</div>
                                    <div>$ 1,200.87</div>
                                </div>
                            </div>
                        </div>
                        <div className={style.join}>
                            <div className={style.joinIn}>
                                <div className={style.img}><img src={avatar}></img></div>
                                <div>
                                    <h2>Engage with clients</h2>
                                    <h3>Join slack channel</h3>
                                </div>
                            </div>
                            <div className={style.joinlink}>
                                <h2>Join Now</h2>
                            </div>
                        </div>
                    </div>
                    <div className={style.bottomRight}>
                        <div>Recommended Project</div>
                        <div className={style.bottomRightmid}>
                            <div className={style.ceo}>
                                <div className={style.img}>
                                <img src={avatar}></img>
                                </div>
                                <div className={style.bottomRightmidtext}>
                                    <h3>Thomas Martin</h3>
                                    <h5>Updated 10m ago</h5>
                                </div>
                                <div className={style.design}>Design</div>
                            </div>
                            <h4>Need a designer to form branding essentials for my business.</h4>
                            <h5>Looking for a talented brand designer to create all the branding materials for my new startup.</h5>
                            <div className={style.price}>
                                <div>$2000/month</div>
                                <div className={style.fulltime}>Full time</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}
export default Content
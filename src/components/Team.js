import React from 'react'
import Banner from './SubComponents/Banner'
import '../styles/Team.css'
const Team = () => {
    return (
        <>
            <Banner title={"SECRETARIAT"} description={"Jecrc Mun 2022"} />
            <div className=" flex team">
                <div className="teamMember">
                    <div className="memberImg">
                        <img src={require('../images/team/shrey.jpg')} alt="" className="memberImg" />
                    </div>
                    <h1 className="memberName">Shrey Bhargav</h1>
                    <h1 className="memberRank">Secretary General</h1>
                </div>
                <div className="teamMember">
                    <div className="memberImg">
                        <img src={require('../images/team/pratham.jpg')} alt="" className="memberImg" />
                    </div>
                    <h1 className="memberName">Shrey Bhargav</h1>
                    <h1 className="memberRank">Secretary General</h1>
                </div>
                <div className="teamMember">
                    <div className="memberImg">
                        <img src={require('../images/team/shrey.jpg')} alt="" className="memberImg" />
                    </div>
                    <h1 className="memberName">Shrey Bhargav</h1>
                    <h1 className="memberRank">Secretary General</h1>
                </div>
                <div className="teamMember">
                    <div className="memberImg">
                        <img src={require('../images/team/shrey.jpg')} alt="" className="memberImg" />
                    </div>
                    <h1 className="memberName">Shrey Bhargav</h1>
                    <h1 className="memberRank">Secretary General</h1>
                </div>
                <div className="teamMember">
                    <div className="memberImg">
                        <img src={require('../images/team/shrey.jpg')} alt="" className="memberImg" />
                    </div>
                    <h1 className="memberName">Shrey Bhargav</h1>
                    <h1 className="memberRank">Secretary General</h1>
                </div>
                <div className="teamMember">
                    <div className="memberImg">
                        <img src={require('../images/team/shrey.jpg')} alt="" className="memberImg" />
                    </div>
                    <h1 className="memberName">Shrey Bhargav</h1>
                    <h1 className="memberRank">Secretary General</h1>
                </div>
            </div>
        </>
    )
}

export default Team
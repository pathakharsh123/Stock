import React from 'react'
import bell from "../images/download.png"
import logo from "../images/Groww_app_logo.png"

const Dashboard = () => {
    return (
        <div className='container'>
            <nav className='container-1'>
                <img src={logo} id='logo' />
                <h3 className='text'>Dashboard</h3>
                <h3 className='text'>Orders</h3>
                <h3 className='text'>Holdings</h3>
                <h3 className='text'>Positions</h3>
                <h3 className='text'>Funds</h3>
                <h3 className='text'>Apps</h3>
                <img src={bell} className='bell' />
                <h3 className='text'>HA019</h3>
            </nav>
            <h2 className='heading'>Hi, Harsh!</h2>

            <h3 className='title'>Equity</h3>
            <div className='container-2'>
                <section>
                    <h2 className='Zero'>0</h2>
                    <h3 className='gray'>Margin available</h3>
                </section>
                <section className='container-3'>
                    <h3 className='gray'>Margins used : <span className='bold'>  0</span></h3>
                    <h3 className='gray'> opening balance : <span className='bold'> 0</span></h3>
                    <h3 className='blue'>View statement</h3>
                </section>
            </div>

            <h3 className='title'>Holdings</h3>
            <div className='container-2'>
                <section>
                    <h3 className='green'>21.81K</h3>
                </section>
                <section className='container-4'>
                    <h3 className='gray'>Current value : <span className='bold'>87.33k</span></h3>
                    <h3 className='gray'> Investment : <span className='bold'>65.52k</span></h3>
                </section>
            </div>
        </div>
    )
}

export default Dashboard
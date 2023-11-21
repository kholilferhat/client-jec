import Image from 'next/image'
import upIcon from '../../public/dashboard-card/arrow-up-circle-line.svg'
import downIcon from '../../public/dashboard-card/arrow-down-circle-line.svg'
import regisIcon from '../../public/dashboard-card/space-ship-line.svg'
import pulseLine from '../../public/dashboard-card/pulse-line.svg'
import dollarIcon from '../../public/dashboard-card/exchange-dollar-line.svg'
import trophyIcon from '../../public/dashboard-card/trophy-line.svg'
import serviceIcon from '../../public/dashboard-card/service-line.svg'
export default function TopDashboard() {
    return (
        <div id="topDashboard">
            <div className="dashboardCard">
                <div className='title'>
                    <p>Total Registration</p>
                    <Image
                        src={upIcon}
                    />
                </div>
                <div className='dashboardData'>
                    <Image
                        src={regisIcon}
                    />
                    <p>197</p>
                </div>
            </div>
            <div className='lineborder' />
            <div className="dashboardCard">
                <div className='title'>
                    <p>Pending Appointment</p>
                    <Image
                        src={upIcon}
                    />
                </div>
                <div className='dashboardData'>
                    <Image
                        src={pulseLine}
                    />
                    <p>20</p>
                </div>
            </div>
            <div className='lineborder' />
            <div className="dashboardCard">
                <div className='title'>
                    <p>Payment Complete</p>
                    <Image
                        src={downIcon}
                    />
                </div>
                <div className='dashboardData'>
                    <Image
                        src={dollarIcon}
                    />
                    <p>90%</p>
                </div>
            </div>
            <div className='lineborder' />
            <div className="dashboardCard">
                <div className='title'>
                    <p>Outstanding B2B</p>
                    <Image
                        src={upIcon}
                    />
                </div>
                <div className='dashboardData'>
                    <Image
                        src={trophyIcon}
                    />
                    <p>10%</p>
                </div>
            </div>
            <div className='lineborder' />
            <div className="dashboardCard">
                <div className='title'>
                    <p>Journey Time</p>
                    <Image
                        src={downIcon}
                    />
                </div>
                <div className='dashboardData'>
                    <Image
                        src={serviceIcon}
                    />
                    <p>01:35:59</p>
                </div>
            </div>
        </div>
    )
}
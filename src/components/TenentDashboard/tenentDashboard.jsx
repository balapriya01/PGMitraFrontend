import React from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './tenentDashboard.css'; 
import { FaUserCircle, FaUtensils, FaBullhorn, FaHome, FaUser, FaTools, FaFileAlt, FaComments } from 'react-icons/fa';
import BottomNavBar from '../BottomNavbar/bottomNav';

function TenantDashboard() { 
    
    const navigate = useNavigate();

    const dashboardLinks = [
        {icon:<FaHome/>, label:"Home", path:"/tenant-dashboard"},
        // {icon:<FaFileAlt/>, label:"Payments", path:"/payment-dashboard"},
        {icon:<FaComments/>, label:"Complaints", path:"/raise-request"},
        {icon:<FaUser/>, label:"Profile", path:"/view-personal-info"}
    ]
    return ( 
    <div className="dashboard-container"> 
        <div className="profile-sec"> 
            <div className="profile-pic"> 
                <FaUserCircle size={64} color="#555" /> 
            </div> 
            <div className="profile-info"> 
                <h3>Ethan Carter</h3> 
                <p>Room 203</p> 
            </div> 
        </div>

        <div className="quick-actions">
            <h4>Quick Actions</h4>
            <div className="action-buttons">
                <button onClick={() => navigate('/view-personal-info')}>View Profile</button>
                <button onClick={() => navigate('/food-menu')}>Today's Menu</button>
                <button onClick={() => navigate('/raise-request')}>Raise Complaint</button>
                <button onClick={() => navigate('/announcements')}>Announcements</button>
            </div>
        </div>


        <BottomNavBar links={dashboardLinks}/>
    </div>

    ); 
}

export default TenantDashboard;
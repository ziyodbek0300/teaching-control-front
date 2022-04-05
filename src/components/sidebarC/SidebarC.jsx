import './SidebarC.css';
import {NavLink} from "react-router-dom";

export default function SidebarC({videos, changeStatus}) {

    // const ChangeVideoStatus = (id) => {
    //     changeStatus(id);
    // }

    return (
        <>
            <div className="sidebarC sticky-top overflow-auto bg-white">
                <p className="ps-2 sticky-top py-2 fw-bolder bg-light mt-0">Kursning nomi</p>
                <div className="wrapper-side">
                    <div className="p-0 m-0 border-bottom">
                        {videos.map((video, index) => {
                            return (
                                <span key={video.id} className="d-flex justify-content-between align-items-center p-2 bg-white border
                                        border-bottom-0 border-1">
                                    <NavLink activeClassName="text-primary" className="w-100 navLink" key={video.id}
                                             to={"/video/" + video.id}>
                                            <div><i className="bi bi-camera-video me-3"/>{video.lesson_name}</div>
                                    </NavLink>
                                    {video.lesson_status
                                        ? <input value={video.lesson_status} type="checkbox" checked
                                                 className="mt-0 form-check-input"/>
                                        : <input value={video.lesson_status} type="checkbox"
                                                 className="mt-0 form-check-input"/>}
                                </span>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
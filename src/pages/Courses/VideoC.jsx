import React from "react";
import { useParams } from "react-router-dom";
import SidebarC from "../../components/sidebarC/SidebarC";

export default function VideoC({ videos, ChangeStatus }) {
    const { id } = useParams();


    return (
        <>
            <SidebarC videos={videos} />
            <div className="videoC">
                <p className={"my-1 my-md-2"}>Asosiy <span className={"mx-2 fs-4 fw-light"}>|</span> Kurslar <span className={"mx-2 fs-4 fw-light"}>|</span> Front End</p>
                {videos.map(video => {
                    return Number(id) === video.id ? (
                        <div key={video.id} className="yt-content position-relative h-100">
                            <iframe width="95%" className="mx-auto"
                                height="600"
                                src={"https://www.youtube-nocookie.com/embed/" + video.yt_video + "?autoplay=0&showinfo=0&controls=0"}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                            <div style={{
                                height: '10rem',
                                width: '95%',
                                position: 'absolute',
                                zIndex: '999',
                                top: '0'
                            }} />
                            <div style={{
                                height: '11rem',
                                width: '95%',
                                position: 'absolute',
                                zIndex: '999',
                                bottom: '0'
                            }} />
                        </div>
                    ) : (
                        ""
                    )
                })
                }
            </div>
        </>
    )
}
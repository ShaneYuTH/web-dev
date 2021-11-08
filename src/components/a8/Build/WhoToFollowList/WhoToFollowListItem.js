const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: "/images/nasa.png",
            userName: "NASA",
            handle: "NASA",
        },
    }) => {
    return(
        <div className="list-group-item">
            <div className="row">
                <div className="col-3">
                    <img src={who.avatarIcon} className="img-fluid rounded-circle" alt={who.userName}/>
                </div>
                <div className="col-5">
                    <div className="row">
                        <span className="fw-bolder">
                            {who.userName}
                            <i className="fas fa-check-circle"/>
                        </span>
                    </div>
                    <div className="row">
                        <span className="text-nowrap text-secondary">
                            @{who.handle}
                        </span>
                    </div>
                </div>
                <div className="col-4">
                    <button className="btn btn-primary rounded-pill -align-left">
                        Follow
                    </button>
                </div>            
            </div>
        </div>
    );}

export default WhoToFollowListItem;
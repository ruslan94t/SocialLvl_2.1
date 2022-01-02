
const FOLLOW='FOLLOW';
const UNFOLLOW='UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENTPAGE='SET_CURRENTPAGE';
const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT';



let initialState = {
users:[
    {
        "name": "user50505",
        "id": 21366,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": null,
        "followed": false
    },
    {
        "name": "playboi",
        "id": 21365,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": 'heeyyy',
        "followed": false
    },
    {
        "name": "Serg_ik18",
        "id": 21364,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": 'agooooo',
        "followed": false
    },
],
    pageSize:5,
    totalUserCount:0,
    currentPage:2

}


const userReducer=(state=initialState, action)=>{
    switch (action.type) {
        case FOLLOW:
        return{
            ...state,
            users:state.users.map(u=>{
                if(u.id === action.userId){
                    return {...u, followed:true}
                }
                return u
            })

        }
        case UNFOLLOW:
            return {
                ...state,
                users:state.users.map(u=> {
                    if(u.id===action.userId){
                        return {...u, followed:false}
                    }
                    return u
                })
            }
        case SET_USERS:{
            return {...state, users:action.users}
        }
        case SET_CURRENTPAGE:{
            return {...state, currentPage:action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT:{
            return {...state, totalUserCount:action.count}
        }
        default:
            return state

    }
return state;
}

/*
* action creator
* */


export const followAC = (userId)=> ({type:FOLLOW, userId });
export const unfollowAC = (userId)=> ({type:UNFOLLOW, userId });
export const setUsersAC = (users)=> ({type:SET_USERS, users });
export const setCurrentPageAC = (currentPage)=> ({type:SET_CURRENTPAGE, currentPage });
export const setTotalUsersCountAC = (totalUsersCount)=> ({type:SET_TOTAL_USERS_COUNT, count:totalUsersCount });

export default userReducer;
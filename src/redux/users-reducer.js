
const FOLLOW='FOLLOW';
const UNFOLLOW='UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENTPAGE='SET_CURRENTPAGE';
const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING ';


let initialState = {
    users:[],
    pageSize:5,
    totalUserCount:0,
    currentPage:2,
    isFetching:true,

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
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching:action.isFetching}
        }
        default:
            return state

    }
return state;
}

/*
* action creator
* */


export const follow = (userId)=> ({type:FOLLOW, userId });
export const unfollow = (userId)=> ({type:UNFOLLOW, userId });
export const setUsers = (users)=> ({type:SET_USERS, users });
export const setCurrentPage = (currentPage)=> ({type:SET_CURRENTPAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount)=> ({type:SET_TOTAL_USERS_COUNT, count:totalUsersCount });
export const toggleIsFetching = (isFetching)=>({type:TOGGLE_IS_FETCHING, isFetching});
export default userReducer;
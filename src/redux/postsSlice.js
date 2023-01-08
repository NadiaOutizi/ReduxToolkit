import { createSlice } from "@reduxjs/toolkit";
const PostsSlice= createSlice({
    name:'Posts',
    initialState:{
        Items:[]
    },
    reducers:{
     addPosts:(state,action)=>{
        // console.log(action);
      state.Items.push(action.payload)

    
     },
     deletePosts:(state,action)=>{
       state.Items=state.Items.filter((p)=>p.id!=action.payload.id)
    // console.log(action);
     },
     updatePosts:(state,action)=>{
       state.Items.map((item)=>{
        if(item.id === action.payload.id){
          item.Title=action.payload.Title
          item.Description=action.payload.Description
        }
       })
      }
    },

})
export const {addPosts,deletePosts,updatePosts}=PostsSlice.actions;
export default PostsSlice.reducer;
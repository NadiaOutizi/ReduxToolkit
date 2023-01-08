import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPosts,deletePosts,updatePosts } from '../redux/postsSlice';


function Posts() {
    const [Title,setTitle]=useState('');
    const [Description,setDescription]=useState('');
    const [UpdatedTitle,setUpdatedTitle]=useState('');
    const [UpdatedDescription,setUpdatedDescription]=useState('');
    const [edit,setedit]=useState(false);
    const [id,setid]=useState(null);
    const dispatch=useDispatch()
    const posts = useSelector((state)=>state.posts.Items)
  return (
    <div className='form'>
      <h1>  CRUD REDUX TOOLKIT : </h1>
        <input type='text' placeholder='Enter post Name...'
        value={Title}
        onChange={(e)=>{setTitle(e.target.value)}}/>
        <input type='text' placeholder='Enter post Description...'
        value={Description}
        onChange={(e)=>{setDescription(e.target.value)}}/>
     <button onClick={()=>{
      if(Title.length>0 && Description.length>0){
        dispatch(addPosts({id:posts.length+1,Title,Description}));
        setTitle("");
        setDescription("");
      }
        
        }}>Add Post</button>
     <div className='posts'>
    {posts.length>0?posts.map((p)=><div key={p.id}> <h2>{p.Title}</h2>
      <p>{p.Description}</p>
      <button onClick={()=>{
        setedit(true)
        setid(p.id)
      }
        }>Edit</button>
      <button onClick={()=>{
        dispatch(deletePosts({id:p.id}))
        }}>Delete</button>
<br/><br/>  
    {edit && id == p.id &&(
      <>
   <input type='text' placeholder='updeted title'
   onChange={(e)=>{setUpdatedTitle(e.target.value)}}/><br/><br/>  
   <input type='text' placeholder='updeted desc '
   onChange={(e)=>{setUpdatedDescription(e.target.value)}}/><br/>   
   <button onClick={()=>{
    dispatch(updatePosts({id:p.id,Title:UpdatedTitle,Description:UpdatedDescription}))
    setedit(false)
   }}>Update</button>
      </>
    )
    }
    </div>
     
     ):'no posts'}
    
    </div>
  
       
        
   
  
     
    </div>
  )
}

export default Posts
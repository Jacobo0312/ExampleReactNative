import React, { useRef, useState,useEffect } from 'react'
import { ReqResList, User } from '../interfaces/reqRes'
import { reqResApi } from '../api/reqRes'

export const useUser = () => {
 

  const [users, setUsers] = useState<User[]>([])
  const pageRef = useRef(1)
  

  useEffect(() => {
      //Call apis
      getUsers();

  }, [])


  const  getUsers = async() => {
      await reqResApi.get<ReqResList>('/users', {
          params: {
              page:pageRef.current
          }
      })
          .then(resp => {

              if (resp.data.data.length > 0) {
                  setUsers(resp.data.data);
              } else {
                pageRef.current--;
                  alert('No more records');
              }
          }
          )

       
      }

      const next =()=>{
        pageRef.current++;
        getUsers();
      }


      const previous = () => {
        if(pageRef.current > 1){
          pageRef.current--;
          getUsers();
        }
      }
      

      return {
        users,
        next,
        previous
      }


}
